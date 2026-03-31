#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
简单检查脚本 - 查看按钮状态
"""

import re

def main():
    with open('quick-site.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    print("剧本按钮状态检查:")
    print("=" * 60)
    
    # 检查每个剧本
    scripts = [
        ("大宴之上", "dayan"),
        ("万仞青山听水寒", "wanren"),
        ("流芳", "liufang"),
        ("梦灵祈念时", "mengling"),
        ("窃云台", "qieyuntai"),
        ("请君入瓮", "qingjunruweng"),
        ("阙落", "queluo"),
        ("如故", "rugu"),
        ("壁上观", "bishangguan"),
        ("同归", "tonggui")
    ]
    
    for name, script_id in scripts:
        # 查找卡片
        card_pattern = re.compile(rf'<h2 class="script-title">{re.escape(name)}</h2>.*?</div>\s*</div>', re.DOTALL)
        match = card_pattern.search(html)
        
        if match:
            card = match.group(0)
            has_role_btn = f'showRoleModal(\'{script_id}\')' in card or f'showRoleModal(&#x27;{script_id}&#x27;)' in card
            has_dm_btn = 'DM手册</a>' in card
            
            print(f"{name}:")
            print(f"  脚本ID: {script_id}")
            print(f"  DM手册按钮: {'有' if has_dm_btn else '无'}")
            print(f"  角色简介按钮: {'有' if has_role_btn else '无'}")
            print()
        else:
            print(f"{name}: 未找到卡片")
            print()

if __name__ == "__main__":
    main()