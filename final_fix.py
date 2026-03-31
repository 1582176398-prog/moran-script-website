#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
最终修复脚本
修复剩余问题
"""

print("=== 最终修复脚本 ===")

# 读取HTML文件
with open("quick-site.html", "r", encoding="utf-8") as f:
    content = f.read()

original_content = content
changes = []

# 1. 确保万仞青山听水寒的角色简介按钮存在
print("\n1. 检查万仞青山听水寒角色简介按钮...")
wanren_button_pattern = 'onclick="showRoleModal(\'wanren\')">👥 角色简介</button>'

if wanren_button_pattern in content:
    print("  [OK] 按钮已存在")
else:
    # 找到万仞青山听水寒的DM手册按钮位置
    wanren_title_pos = content.find('<h2 class="script-title">万仞青山听水寒</h2>')
    if wanren_title_pos != -1:
        # 找到描述段落后的按钮容器
        from_pos = wanren_title_pos
        dm_button_start = content.find('<a href="web-pdfs/wanren.pdf"', from_pos)
        
        if dm_button_start != -1:
            # 查找按钮容器结束位置
            div_end = content.find('</div>', dm_button_start)
            
            if div_end != -1:
                # 检查容器内是否只有DM手册按钮
                container_html = content[dm_button_start:div_end]
                if '<button' not in container_html:
                    # 只有DM手册按钮，需要添加角色简介按钮
                    new_container = '''<div style="display: flex; gap: 10px; margin-top: 20px;">
			<a href="web-pdfs/wanren.pdf" class="btn btn-dm" download>📄 DM手册</a>
			<button class="btn btn-role" onclick="showRoleModal(\'wanren\')">👥 角色简介</button>
		</div>'''
                    
                    # 替换现有容器
                    div_start = content.rfind('<div', 0, dm_button_start)
                    content = content[:div_start] + new_container + content[div_end+6:]
                    changes.append("添加了万仞青山听水寒的角色简介按钮")
                    print("  [OK] 已添加按钮")
                else:
                    print("  [INFO] 容器内已有按钮")
            else:
                print("  [WARNING] 未找到容器结束")
        else:
            print("  [WARNING] 未找到DM手册按钮")
    else:
        print("  [ERROR] 未找到万仞青山听水寒标题")

# 2. 更新大宴之上的描述（虽然没有在文档中，但可以用一个占位描述）
print("\n2. 检查大宴之上的描述...")
dayan_desc_pattern = "安史之乱前夕的长安夜宴"

if dayan_desc_pattern in content:
    print("  [OK] 描述已存在（使用默认描述）")
else:
    # 大宴之上的描述没有在文档中，但我们可以使用网站原来的描述
    print("  [INFO] 使用网站原有描述")

# 3. 确保所有没有角色信息的剧本都没有角色简介按钮
print("\n3. 确保没有角色信息的剧本移除按钮...")

# 应该只有大宴之上和万仞青山听水寒有按钮
scripts_without_buttons = [
    ("请君入瓮", "qingjunruweng"),
    ("流芳", "liufang"),
    ("如故", "rugu"),
    ("阙落", "queluo"),
    ("梦灵祈念时", "mengling"),
    ("窃云台", "qieyuntai"),
    ("壁上观", "bishangguan"),
    ("同归", "tonggui")
]

for script_name, script_id in scripts_without_buttons:
    button_pattern = f'onclick="showRoleModal(\'{script_id}\')">👥 角色简介</button>'
    
    if button_pattern in content:
        print(f"  [WARNING] {script_name}仍有角色简介按钮，尝试查找并移除...")
        
        # 查找并移除按钮
        button_pos = content.find(button_pattern)
        if button_pos != -1:
            # 查找完整的button标签
            button_start = content.rfind('<button', 0, button_pos)
            button_end = content.find('</button>', button_pos) + 9
            
            if button_start != -1 and button_end != -1:
                # 检查按钮是否在flex容器中
                before_button = content[:button_start]
                flex_start = before_button.rfind('<div style="display: flex; gap: 10px; margin-top: 20px;">')
                
                if flex_start != -1:
                    # 在flex容器中，检查容器内是否只有两个按钮
                    flex_end = content.find('</div>', button_end)
                    if flex_end != -1:
                        container_html = content[flex_start:flex_end+6]
                        # 计算容器内的按钮数量
                        dm_count = container_html.count('class="btn btn-dm"')
                        role_count = container_html.count('class="btn btn-role"')
                        
                        if dm_count == 1 and role_count == 1:
                            # 只有DM手册和角色简介按钮，移除整个容器只保留DM手册
                            dm_button_pattern = r'<a href="web-pdfs/[^"]+" class="btn btn-dm" download>📄 DM手册</a>'
                            import re
                            dm_match = re.search(dm_button_pattern, container_html)
                            if dm_match:
                                dm_button = dm_match.group()
                                content = content[:flex_start] + dm_button + content[flex_end+6:]
                                changes.append(f"移除了{script_name}的按钮容器，保留DM手册按钮")
                                print(f"    [OK] 已移除按钮容器")
                            else:
                                print(f"    [ERROR] 未找到DM手册按钮")
                        elif role_count == 1:
                            # 只移除角色按钮
                            content = content[:button_start] + content[button_end:]
                            changes.append(f"移除了{script_name}的角色简介按钮")
                            print(f"    [OK] 已移除按钮")
                        else:
                            print(f"    [INFO] 按钮情况复杂，跳过")
                    else:
                        print(f"    [WARNING] 未找到容器结束")
                else:
                    # 不在flex容器中，直接移除按钮
                    content = content[:button_start] + content[button_end:]
                    changes.append(f"移除了{script_name}的角色简介按钮")
                    print(f"    [OK] 已移除按钮")
            else:
                print(f"    [WARNING] 未找到完整按钮标签")
    else:
        print(f"  [OK] {script_name}没有角色简介按钮")

# 4. 检查并修复所有描述
print("\n4. 检查所有剧本描述...")

# 从之前提取的JSON中获取正确的描述
import json
with open("script_update_data.json", "r", encoding="utf-8") as f:
    update_data = json.load(f)

for script_id, data in update_data.items():
    script_name = data["script_name"]
    correct_desc = data.get("description", "")
    
    if correct_desc and len(correct_desc) > 20:
        # 查找剧本标题
        title_pattern = f'<h2 class="script-title">{script_name}</h2>'
        title_pos = content.find(title_pattern)
        
        if title_pos != -1:
            # 查找描述段落
            from_pos = title_pos + len(title_pattern)
            p_start = content.find('<p>', from_pos)
            p_end = content.find('</p>', p_start) if p_start != -1 else -1
            
            if p_start != -1 and p_end != -1:
                current_desc = content[p_start+3:p_end]
                # 检查描述是否正确
                if correct_desc[:50] in current_desc:
                    print(f"  [OK] {script_name}描述正确")
                else:
                    print(f"  [WARNING] {script_name}描述可能需要更新")

# 5. 保存修改
if content != original_content:
    print(f"\n总共进行了 {len(changes)} 处修改:")
    for change in changes:
        print(f"  - {change}")
    
    # 创建最终备份
    with open("quick-site-backup-final.html", "w", encoding="utf-8") as f:
        f.write(original_content)
    
    # 写入最终文件
    with open("quick-site.html", "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"\n[FINAL] 最终文件已保存")
    print("访问地址: http://localhost:8888/quick-site.html")
else:
    print(f"\n没有需要修改的内容，网站已是最新状态")

print("\n=== 修复完成 ===")