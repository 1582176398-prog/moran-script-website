#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为有角色信息的剧本添加角色简介按钮
根据用户提供的角色信息，为流芳、窃云台、请君入瓮、阙落、壁上观、同归添加按钮
"""

import re

def read_html_file():
    """读取HTML文件"""
    with open('quick-site.html', 'r', encoding='utf-8') as f:
        return f.read()

def write_html_file(content):
    """写入HTML文件"""
    with open('quick-site.html', 'w', encoding='utf-8') as f:
        f.write(content)

def add_role_button(script_name, script_id, html_content):
    """为指定剧本添加角色简介按钮"""
    
    # 构建按钮HTML
    button_html = f'\t\t<div style="display: flex; gap: 10px; margin-top: 20px;">\n' \
                  f'\t\t\t<a href="web-pdfs/{script_id}.pdf" class="btn btn-dm" download>📄 DM手册</a>\n' \
                  f'\t\t\t<button class="btn btn-role" onclick="showRoleModal(\'{script_id}\')">👥 角色简介</button>\n' \
                  f'\t\t</div>'
    
    # 查找剧本卡片
    # 查找包含剧本标题的行
    pattern = rf'<h2 class="script-title">{script_name}<\/h2>(.*?)<\/div>\n\s*<\/div>'
    
    # 尝试替换
    def add_button_to_script(match):
        script_content = match.group(1)
        
        # 检查是否已经有角色简介按钮
        if '角色简介</button>' in script_content:
            print(f"[INFO] {script_name} 已有角色简介按钮，跳过")
            return match.group(0)
        
        # 检查是否有DM手册链接
        if 'DM手册</a>' in script_content:
            # 如果有DM手册链接但无角色按钮，在DM手册按钮后添加角色按钮
            new_content = script_content.replace('DM手册</a>\n', f'DM手册</a>\n\t\t\t<button class="btn btn-role" onclick="showRoleModal(\'{script_id}\')">👥 角色简介</button>\n')
            return f'<h2 class="script-title">{script_name}</h2>{new_content}</div>\n        </div>'
        else:
            # 如果没有DM手册链接，添加完整的按钮行
            # 查找script-details之后的位置
            lines = script_content.split('\n')
            for i, line in enumerate(lines):
                if '</div>' in line and '<p>' in lines[i+1] and i+2 < len(lines):
                    # 在p标签之后插入按钮
                    lines.insert(i+2, button_html)
                    break
                elif '</div>' in line and '</div>' in lines[i+1]:
                    # 在上一个div之后插入按钮
                    lines.insert(i+2, button_html)
                    break
            
            new_content = '\n'.join(lines)
            return f'<h2 class="script-title">{script_name}</h2>{new_content}</div>\n        </div>'
    
    result = re.sub(pattern, add_button_to_script, html_content, flags=re.DOTALL)
    
    if result != html_content:
        print(f"[OK] 为 {script_name} 添加角色简介按钮成功")
    else:
        print(f"[WARNING] 未找到 {script_name} 的卡片，可能已存在")
    
    return result

def main():
    """主函数"""
    print("开始为有角色信息的剧本添加角色简介按钮...")
    
    # 读取HTML文件
    html_content = read_html_file()
    print(f"[OK] 读取HTML文件完成")
    
    # 需要添加按钮的剧本列表（根据用户提供的角色信息）
    scripts_to_update = [
        ("流芳", "liufang"),
        ("窃云台", "qieyuntai"),
        ("请君入瓮", "qingjunruweng"),
        ("阙落", "queluo"),
        ("壁上观", "bishangguan"),
        ("同归", "tonggui")
    ]
    
    # 为每个剧本添加按钮
    updated_content = html_content
    for script_name, script_id in scripts_to_update:
        updated_content = add_role_button(script_name, script_id, updated_content)
    
    # 写入更新后的文件
    if updated_content != html_content:
        write_html_file(updated_content)
        print("[OK] 按钮添加完成！")
        print(f"[INFO] 为 {len(scripts_to_update)} 个剧本添加了角色简介按钮")
    else:
        print("[WARNING] 未进行任何更改")
    
    print("更新完成！")

if __name__ == "__main__":
    main()