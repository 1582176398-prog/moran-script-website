#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
修复角色简介按钮问题和删除梦灵祈念时的角色简介按钮
"""
import re

def fix_buttons_and_remove_mengling():
    # 读取HTML文件
    with open('quick-site.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. 修复转义错误的按钮代码
    # 错误格式: onclick="showRoleModal(\'script_id\')"
    # 正确格式: onclick="showRoleModal('script_id')"
    original_content = content
    
    # 查找并修复转义错误
    pattern = r'onclick="showRoleModal\\(\\\'([a-zA-Z0-9_]+)\\\'\\)"'
    fixed = re.sub(pattern, r"onclick=\"showRoleModal('\1')\"", content)
    
    matches_count = len(re.findall(pattern, content))
        print("修复了 " + str(matches_count) + " 个转义错误的按钮")
    
    # 2. 删除梦灵祈念时的角色简介按钮
    # 梦灵祈念时的剧本ID是mengling
    # 查找梦灵祈念时部分的HTML结构
    mengling_section_start = fixed.find('梦灵祈念时')
    if mengling_section_start != -1:
        # 向后查找包含按钮的div
        section_start = mengling_section_start - 200 if mengling_section_start - 200 > 0 else 0
        mengling_section = fixed[section_start:mengling_section_start + 500]
        
        # 查找包含角色简介按钮的div
        button_div_pattern = r'<div style="display: flex; gap: 10px; margin-top: 20px;">\s*<a href="web-pdfs/mengling\.pdf" class="btn btn-dm" download>📄 DM手册</a>\s*<button class="btn btn-role" onclick="showRoleModal\(\'mengling\'\)">👥 角色简介</button>\s*</div>'
        
        # 尝试删除这个div，恢复为单独的DM手册链接
        mengling_fixed = re.sub(button_div_pattern, 
                                '<a href="web-pdfs/mengling.pdf" class="btn btn-dm" download>📄 DM手册</a>', 
                                fixed)
        
        if mengling_fixed != fixed:
            print("[OK] 已删除梦灵祈念时的角色简介按钮")
            final_output = mengling_fixed
        else:
            print("[WARNING] 未找到梦灵祈念时的按钮div，可能需要手动修复")
            final_output = fixed
    else:
        print("[WARNING] 未找到梦灵祈念时剧本")
        final_output = fixed
    
    # 保存修复后的文件
    with open('quick-site.html', 'w', encoding='utf-8') as f:
        f.write(final_output)
    
    print("[OK] 修复完成！")

if __name__ == '__main__':
    fix_buttons_and_remove_mengling()