#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更新网站：根据提取的剧本简介和角色信息，更新HTML文件
"""

import os
import re
import json
from pathlib import Path

def load_update_data():
    """加载更新数据"""
    data_path = "script_update_data.json"
    with open(data_path, "r", encoding="utf-8") as f:
        return json.load(f)

def read_html_file():
    """读取HTML文件"""
    html_path = "quick-site.html"
    with open(html_path, "r", encoding="utf-8") as f:
        return f.read()

def write_html_file(content):
    """写入HTML文件"""
    html_path = "quick-site.html"
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"已更新HTML文件: {html_path}")

def update_script_descriptions(html_content, update_data):
    """更新剧本描述"""
    print("\n=== 开始更新剧本描述 ===")
    
    for script_id, data in update_data.items():
        script_name = data["script_name"]
        new_description = data["description"]
        
        if not new_description or len(new_description) < 20:
            print(f"跳过 {script_name}: 描述太短或无描述")
            continue
        
        # 查找脚本中的描述段落
        # 格式：<p>...</p> 在剧本卡片中
        script_pattern = fr'(<h2 class="script-title">\s*{re.escape(script_name)}\s*</h2>.*?<p>).*?(</p>)'
        
        # 先使用贪婪匹配尝试
        script_pattern = fr'(<h2 class="script-title">\s*{re.escape(script_name)}\s*</h2>.*?)<p>.*?</p>'
        
        match = re.search(script_pattern, html_content, re.DOTALL)
        if match:
            # 找到描述段落
            before = match.group(1)
            # 构造新内容
            new_content = f'{before}<p>{new_description}</p>'
            html_content = html_content[:match.start()] + new_content + html_content[match.end():]
            print(f"[OK] 已更新 {script_name} 描述")
        else:
            print(f"[ERROR] 未找到 {script_name} 的描述段落")
    
    return html_content

def remove_role_buttons(html_content, update_data):
    """移除没有角色信息的剧本的角色简介按钮"""
    print("\n=== 开始移除角色简介按钮 ===")
    
    for script_id, data in update_data.items():
        script_name = data["script_name"]
        
        # 如果这个剧本有角色信息，保留按钮
        if data["button_should_exist"]:
            continue
        
        # 只处理除了大宴之上的剧本
        if script_name == "大宴之上":
            print(f"- 保留 {script_name} 的按钮（默认保留）")
            continue
        
        print(f"- 检查 {script_name} ({script_id})")
        
        # 查找该剧本的角色简介按钮
        # 按钮格式：<button class="btn btn-role" onclick="showRoleModal('script_id')">👥 角色简介</button>
        button_pattern1 = fr'<button class="btn btn-role" onclick="showRoleModal\\(\'{re.escape(script_id)}\'\\)">👥 角色简介</button>'
        
        # 或者可能是：onclick="showRoleModal('script_id')
        button_pattern2 = fr'onclick="showRoleModal\\(\'{re.escape(script_id)}\'\\)[^>]*>👥 角色简介</button>'
        
        # 尝试查找并移除
        total_removed = 0
        
        # 方法1：查找并移除按钮
        while True:
            match = re.search(button_pattern1, html_content)
            if match:
                html_content = html_content[:match.start()] + html_content[match.end():]
                total_removed += 1
            else:
                break
        
        # 方法2：查找更宽泛的模式
        while True:
            match = re.search(button_pattern2, html_content)
            if match:
                # 查找完整的button标签
                start = html_content.rfind('<button', 0, match.start())
                end = html_content.find('</button>', match.start()) + len('</button>')
                if start != -1 and end != -1:
                    html_content = html_content[:start] + html_content[end:]
                    total_removed += 1
                    continue
                break
            else:
                break
        
        if total_removed > 0:
            print(f"  [OK] 已移除 {total_removed} 个角色简介按钮")
        else:
            print(f"  [INFO] 未找到角色简介按钮或已移除")
    
    return html_content

def update_wanren_roles_in_js(html_content, update_data):
    """更新万仞青山听水寒的角色数据（JavaScript部分）"""
    print("\n=== 更新万仞青山听水寒角色数据 ===")
    
    wanren_data = update_data.get("wanren")
    if not wanren_data or not wanren_data["roles"]:
        print("[ERROR] 未找到万仞青山听水寒的角色数据")
        return html_content
    
    # 构建新的角色数据JavaScript代码
    roles_js = "      roles: [\n"
    for role in wanren_data["roles"][:6]:  # 只取前6个主要角色
        # 清理描述中的引号
        desc_clean = role["desc"].replace('"', "'")
        roles_js += f'        {{ name: "{role["name"]}", gender: "{role["gender"]}", desc: "{desc_clean}" }},\n'
    roles_js += "      ]"
    
    # 查找JavaScript中wanren的roleData部分
    # 模式：wanren: {\n      title: "...",\n      roles: [...],\n      intro: "..."
    wanren_pattern = r'(wanren:\s*\{\s*\n\s*title:\s*"[^"]+",\s*\n\s*roles:\s*\[[^\]]+\],\s*\n\s*intro:\s*"[^"]+"\s*\})'
    
    match = re.search(wanren_pattern, html_content, re.DOTALL)
    if match:
        # 构建新的wanren数据
        new_intro = wanren_data["description"].replace('"', "'")
        new_wanren_block = f'''wanren: {{
      title: "万仞青山听水寒 - 角色介绍", 
{roles_js},
      intro: "{new_intro}"
    }}'''
        
        html_content = html_content[:match.start()] + new_wanren_block + html_content[match.end():]
        print("[OK] 已更新JavaScript中的万仞青山听水寒角色数据")
        print(f"  - 角色数量: {len(wanren_data['roles'][:6])}")
        print(f"  - 剧本简介: {new_intro[:60]}...")
    else:
        print("[ERROR] 未找到JavaScript中的wanren角色数据")
    
    return html_content

def update_wanren_description(html_content, update_data):
    """更新万仞青山听水寒的HTML描述"""
    print("\n=== 更新万仞青山听水寒页面描述 ===")
    
    wanren_data = update_data.get("wanren")
    if not wanren_data:
        print("[ERROR] 未找到万仞青山听水寒的数据")
        return html_content
    
    new_description = wanren_data["description"]
    
    # 查找万仞青山听水寒的描述
    # 先尝试直接搜索剧本标题
    title_pattern = r'<h2 class="script-title">万仞青山听水寒</h2>'
    
    # 查找标题后面的描述段落
    search_pos = html_content.find('<h2 class="script-title">万仞青山听水寒</h2>')
    if search_pos != -1:
        # 从标题位置开始查找第一个<p>标签
        p_start = html_content.find('<p>', search_pos)
        if p_start != -1:
            p_end = html_content.find('</p>', p_start)
            if p_end != -1:
                # 找到描述段落，替换内容
                old_p_content = html_content[p_start:p_end+4]
                new_p_content = f'<p>{new_description}</p>'
                html_content = html_content[:p_start] + new_p_content + html_content[p_end+4:]
                print("[OK] 已更新万仞青山听水寒页面描述")
            else:
                print("[ERROR] 未找到闭合的</p>标签")
        else:
            print("[ERROR] 未找到<p>标签")
    else:
        print("[ERROR] 未找到万仞青山听水寒标题")
    
    return html_content

def cleanup_empty_button_containers(html_content):
    """清理空的按钮容器"""
    print("\n=== 清理空的按钮容器 ===")
    
    # 查找空的按钮容器：<div style="display: flex; gap: 10px; margin-top: 20px;">\n\t\t\t...只有一个按钮...\n\t\t</div>
    
    # 模式：<div style="display: flex; gap: 10px; margin-top: 20px;"> 里面只有一个DM手册按钮
    empty_container_pattern = r'<div style="display: flex; gap: 10px; margin-top: 20px;">\s*<a href="web-pdfs/[^"]+" class="btn btn-dm" download>📄 DM手册</a>\s*</div>'
    
    # 替换为单个DM手册按钮
    new_content = re.sub(empty_container_pattern, 
                         '<a href="web-pdfs/\\g<1>" class="btn btn-dm" download>📄 DM手册</a>',
                         html_content, flags=re.DOTALL)
    
    changes = len(html_content) - len(new_content)
    if changes > 0:
        print(f"[OK] 已清理 {changes//100} 个空按钮容器")
        html_content = new_content
    else:
        print("i 未找到需要清理的空按钮容器")
    
    return html_content

def main():
    """主函数"""
    print("开始更新网站内容...")
    
    # 加载更新数据
    update_data = load_update_data()
    print(f"加载了 {len(update_data)} 个剧本的更新数据")
    
    # 读取HTML文件
    html_content = read_html_file()
    original_length = len(html_content)
    
    # 1. 更新剧本描述
    html_content = update_script_descriptions(html_content, update_data)
    
    # 2. 移除没有角色信息的剧本的角色简介按钮
    html_content = remove_role_buttons(html_content, update_data)
    
    # 3. 更新万仞青山听水寒的JS角色数据
    html_content = update_wanren_roles_in_js(html_content, update_data)
    
    # 4. 更新万仞青山听水寒的页面描述
    html_content = update_wanren_description(html_content, update_data)
    
    # 5. 清理空的按钮容器
    html_content = cleanup_empty_button_containers(html_content)
    
    # 检查是否有变化
    if len(html_content) != original_length:
        # 写入更新后的HTML
        write_html_file(html_content)
        
        # 显示总结
        print("\n" + "="*60)
        print("更新完成总结:")
        print("="*60)
        
        # 统计
        scripts_with_desc = sum(1 for data in update_data.values() if data.get("description") and len(data["description"]) > 20)
        scripts_with_roles = sum(1 for data in update_data.values() if data.get("button_should_exist", False))
        
        print(f"已更新剧本描述: {scripts_with_desc} 个")
        print(f"保留角色按钮: {scripts_with_roles} 个（万仞青山听水寒）")
        print(f"移除角色按钮: {len(update_data) - scripts_with_roles - 1} 个（大宴之上除外）")  # -1 是大宴之上
        
        # 显示具体哪些剧本有更新
        print("\n详细更新情况:")
        for script_id, data in update_data.items():
            script_name = data["script_name"]
            if data.get("description") and len(data["description"]) > 20:
                status = "[OK] 描述已更新"
                if data["button_should_exist"]:
                    status += "，[OK] 保留角色按钮"
                else:
                    status += "，[ERROR] 移除角色按钮"
            else:
                status = "[ERROR] 无描述更新"
                if data["button_should_exist"]:
                    status += "，[OK] 保留角色按钮"
                else:
                    status += "，[ERROR] 移除角色按钮"
            
            print(f"  - {script_name}: {status}")
        
        print("\n[WARNING] 注意: 大宴之上保留了原有的角色按钮（因为网站中原本就有）")
        print("网站已更新，可以通过 http://localhost:8888/quick-site.html 查看")
        
    else:
        print("\n[ERROR] 未检测到内容变化，可能更新失败")
    
    return html_content

if __name__ == "__main__":
    main()