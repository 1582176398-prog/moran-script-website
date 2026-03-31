#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
检查所有剧本的角色简介按钮
"""

import re

def read_html_file():
    """读取HTML文件"""
    with open('quick-site.html', 'r', encoding='utf-8') as f:
        return f.read()

def check_all_scripts(html_content):
    """检查所有剧本的按钮状态"""
    print("检查所有剧本的角色简介按钮状态...")
    print("=" * 60)
    
    # 所有剧本及其对应的脚本ID
    scripts = [
        ("大宴之上", "dayan", "应包含角色简介按钮"),
        ("万仞青山听水寒", "wanren", "应包含角色简介按钮"),
        ("流芳", "liufang", "应包含角色简介按钮"),
        ("梦灵祈念时", "mengling", "未提供角色信息，不应有按钮"),
        ("窃云台", "qieyuntai", "应包含角色简介按钮"),
        ("请君入瓮", "qingjunruweng", "应包含角色简介按钮"),
        ("阙落", "queluo", "应包含角色简介按钮"),
        ("如故", "rugu", "未提供角色信息，不应有按钮"),
        ("壁上观", "bishangguan", "应包含角色简介按钮"),
        ("同归", "tonggui", "应包含角色简介按钮")
    ]
    
    # 查找每个剧本的卡片
    for script_name, script_id, expected in scripts:
        # 查找剧本标题
        pattern = rf'<h2 class="script-title">{script_name}<\/h2>'
        match = re.search(pattern, html_content)
        
        if match:
            start_pos = match.start()
            # 找到对应的卡片结尾
            end_pos = html_content.find('</div>', start_pos)
            card_content = html_content[start_pos:end_pos+6]
            
            # 检查是否有角色简介按钮
            has_role_button = '角色简介</button>' in card_content or f'showRoleModal(\'{script_id}\')' in card_content
            has_dm_button = 'DM手册</a>' in card_content
            
            status = "[OK] 通过" if has_role_button == (expected == "应包含角色简介按钮") else "[ERROR] 失败"
            
            print(f"{script_name} ({script_id}):")
            print(f"  - 预期: {expected}")
            print(f"  - 实际: {('有' if has_role_button else '无')}角色按钮 | {('有' if has_dm_button else '无')}DM按钮")
            print(f"  - 状态: {status}")
            print()
        else:
            print(f"❌ 未找到剧本: {script_name}")
            print()
    
    print("=" * 60)
    print("检查完成！")

def main():
    """主函数"""
    html_content = read_html_file()
    check_all_scripts(html_content)

if __name__ == "__main__":
    main()