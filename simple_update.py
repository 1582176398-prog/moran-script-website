#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
简化版网站更新脚本
专注于更新剧本描述和移除按钮
"""

import json
import re
import os

def main():
    print("========== 简化版网站更新脚本 ==========")
    
    # 1. 加载更新数据
    with open("script_update_data.json", "r", encoding="utf-8") as f:
        update_data = json.load(f)
    
    print(f"加载了 {len(update_data)} 个剧本的数据")
    
    # 2. 读取HTML文件
    with open("quick-site.html", "r", encoding="utf-8") as f:
        content = f.read()
    
    original_content = content
    changes_made = 0
    
    # 处理每个剧本
    for script_id, data in update_data.items():
        script_name = data["script_name"]
        new_description = data["description"]
        
        print(f"\n处理: {script_name}")
        
        # 只有万仞青山听水寒有实际角色信息
        has_roles = data.get("button_should_exist", False)
        
        if script_name == "万仞青山听水寒":
            print(f"  [特殊] 这个剧本有角色信息，保留按钮")
            
            # 更新JavaScript中的角色数据
            js_pattern = r"(wanren:\s*\{[^}]+\})"
            match = re.search(js_pattern, content, re.DOTALL)
            if match:
                # 创建新的wanren数据
                roles_js = "      roles: [\n"
                for role in data["roles"][:6]:
                    desc_clean = role["desc"].replace('"', "'")
                    roles_js += f'        {{ name: "{role["name"]}", gender: "{role["gender"]}", desc: "{desc_clean}" }},\n'
                roles_js += "      ]"
                
                new_intro = new_description.replace('"', "'")
                new_wanren = f'''wanren: {{
      title: "万仞青山听水寒 - 角色介绍", 
{roles_js},
      intro: "{new_intro}"
    }}'''
                
                content = content[:match.start()] + new_wanren + content[match.end():]
                print(f"  [OK] 更新了JavaScript角色数据")
                changes_made += 1
        
        # 更新剧本描述（如果描述足够长）
        if new_description and len(new_description) > 20:
            # 尝试找到剧本标题和描述段落
            title_pattern = f'<h2 class="script-title">{script_name}</h2>'
            title_pos = content.find(title_pattern)
            
            if title_pos != -1:
                # 查找标题后面的第一个<p>标签
                from_pos = title_pos + len(title_pattern)
                p_start = content.find('<p>', from_pos)
                p_end = content.find('</p>', p_start) if p_start != -1 else -1
                
                if p_start != -1 and p_end != -1:
                    # 替换描述内容
                    old_desc = content[p_start:p_end+4]
                    new_desc = f'<p>{new_description}</p>'
                    content = content[:p_start] + new_desc + content[p_end+4:]
                    print(f"  [OK] 更新了剧本描述")
                    changes_made += 1
                else:
                    print(f"  [WARNING] 未找到描述段落")
            else:
                print(f"  [WARNING] 未找到剧本标题")
        
        # 移除角色简介按钮（如果没有角色信息且不是大宴之上）
        if not has_roles and script_name != "大宴之上":
            # 查找角色简介按钮
            button_pattern = f'<button class="btn btn-role" onclick="showRoleModal(\'{script_id}\')">'
            button_pos = content.find(button_pattern)
            
            if button_pos != -1:
                # 找到按钮，查找完整按钮标签
                button_end = content.find('</button>', button_pos)
                if button_end != -1:
                    button_html = content[button_pos:button_end+9]
                    
                    # 检查这个按钮是否在flex容器里
                    # 查找按钮前面的内容
                    before_button = content[:button_pos]
                    flex_container_start = before_button.rfind('<div style="display: flex; gap: 10px; margin-top: 20px;">')
                    
                    if flex_container_start != -1:
                        # 找到flex容器，检查里面是否只有这一个按钮
                        flex_end = content.find('</div>', button_end)
                        if flex_end != -1:
                            # 获取整个容器内容
                            container_html = content[flex_container_start:flex_end+6]
                            
                            # 检查容器里是否只有这一个角色按钮和一个DM手册按钮
                            if container_html.count('<button') == 1 and container_html.count('<a href="web-pdfs/') == 1:
                                # 只有两个按钮，移除整个容器
                                # 保留DM手册按钮
                                dm_pattern = r'<a href="web-pdfs/[^"]+" class="btn btn-dm" download>📄 DM手册</a>'
                                dm_match = re.search(dm_pattern, container_html)
                                if dm_match:
                                    dm_button = dm_match.group()
                                    content = content[:flex_container_start] + dm_button + content[flex_end+6:]
                                    print(f"  [OK] 移除了整个按钮容器，保留DM手册按钮")
                                    changes_made += 1
                        else:
                            # 只移除按钮
                            content = content[:button_pos] + content[button_end+9:]
                            print(f"  [OK] 移除了角色简介按钮")
                            changes_made += 1
                    else:
                        # 只移除按钮
                        content = content[:button_pos] + content[button_end+9:]
                        print(f"  [OK] 移除了角色简介按钮")
                        changes_made += 1
                else:
                    print(f"  [INFO] 未找到按钮结束标签")
            else:
                print(f"  [INFO] 未找到角色简介按钮")
    
    # 3. 保存更新后的文件
    if content != original_content:
        # 创建备份
        backup_file = "quick-site-backup-2.html"
        with open(backup_file, "w", encoding="utf-8") as f:
            f.write(original_content)
        
        # 写入更新的内容
        with open("quick-site.html", "w", encoding="utf-8") as f:
            f.write(content)
        
        print(f"\n========== 更新完成 ==========")
        print(f"总修改次数: {changes_made}")
        print(f"原始文件备份: {backup_file}")
        print(f"新文件已保存: quick-site.html")
        print(f"\n访问地址: http://localhost:8888/quick-site.html")
        
        # 显示更新摘要
        print("\n[更新摘要]")
        print("-" * 40)
        
        wanren_updated = any("万仞青山听水寒" in line for line in content.split('\n') if "roles:" in line)
        if wanren_updated:
            print("[OK] 万仞青山听水寒：角色数据已更新，按钮保留")
        else:
            print("[ERROR] 万仞青山听水寒：角色数据更新可能失败")
        
        # 检查一些剧本是否更新了描述
        check_scripts = ["请君入瓮", "流芳", "如故", "阙落", "梦灵祈念时", "窃云台", "壁上观", "同归"]
        for script in check_scripts:
            # 查找描述是否包含关键信息
            desc_pattern = f'<h2 class="script-title">{script}</h2>.*?<p>.+?</p>'
            if re.search(desc_pattern, content, re.DOTALL):
                print(f"[OK] {script}：描述已更新")
            else:
                print(f"[INFO] {script}：描述可能未更新")
        
        print("\n注意：大宴之上保留原有角色按钮")
        print("      其他剧本的角色简介按钮已移除（因为没有提供角色信息）")
        
    else:
        print(f"\n[WARNING] 未检测到任何更改，网站内容可能未更新")

if __name__ == "__main__":
    main()