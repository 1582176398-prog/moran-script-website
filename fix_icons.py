#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
修复图标位置问题，将图标移动到卡片右上角，避免遮挡内容
"""

import re

def fix_icon_positions(html_content):
    """修改所有图标的位置和样式"""
    
    # 新的图标样式 - 放在右上角，更小的尺寸
    new_icon_style = '''<div style="position: absolute; top: 15px; right: 15px; width: 36px; height: 36px; background: rgba(212, 175, 55, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(212, 175, 55, 0.4); z-index: 1;">
                    <span style="font-size: 1rem;">{icon}</span>
                </div>'''
    
    # 查找所有图标并替换
    # 大宴之上
    html_content = re.sub(
        r'<div style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; background: rgba\(212, 175, 55, 0\.2\); border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba\(212, 175, 55, 0\.4\);">\s*<span style="font-size: 1\.2rem;">🏯</span>\s*</div>',
        new_icon_style.format(icon='🏯'),
        html_content,
        flags=re.IGNORECASE
    )
    
    # 万仞青山听水寒
    html_content = re.sub(
        r'<div style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; background: rgba\(212, 175, 55, 0\.2\); border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba\(212, 175, 55, 0\.4\);">\s*<span style="font-size: 1\.2rem;">🗡️</span>\s*</div>',
        new_icon_style.format(icon='🗡️'),
        html_content,
        flags=re.IGNORECASE
    )
    
    # 流芳
    html_content = re.sub(
        r'<div style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; background: rgba\(212, 175, 55, 0\.2\); border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba\(212, 175, 55, 0\.4\);">\s*<span style="font-size: 1\.2rem;">📜</span>\s*</div>',
        new_icon_style.format(icon='📜'),
        html_content,
        flags=re.IGNORECASE
    )
    
    # 梦灵祈念时
    html_content = re.sub(
        r'<div style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; background: rgba\(212, 175, 55, 0\.2\); border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba\(212, 175, 55, 0\.4\);">\s*<span style="font-size: 1\.2rem;">🎭</span>\s*</div>',
        new_icon_style.format(icon='🎭'),
        html_content,
        flags=re.IGNORECASE
    )
    
    # 窃云台
    html_content = re.sub(
        r'<div style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; background: rgba\(212, 175, 55, 0\.2\); border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba\(212, 175, 55, 0\.4\);">\s*<span style="font-size: 1\.2rem;">👑</span>\s*</div>',
        new_icon_style.format(icon='👑'),
        html_content,
        flags=re.IGNORECASE
    )
    
    # 请君入瓮
    html_content = re.sub(
        r'<div style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; background: rgba\(212, 175, 55, 0\.2\); border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba\(212, 175, 55, 0\.4\);">\s*<span style="font-size: 1\.2rem;">📖</span>\s*</div>',
        new_icon_style.format(icon='📖'),
        html_content,
        flags=re.IGNORECASE
    )
    
    # 阙落
    html_content = re.sub(
        r'<div style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; background: rgba\(212, 175, 55, 0\.2\); border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba\(212, 175, 55, 0\.4\);">\s*<span style="font-size: 1\.2rem;">🌌</span>\s*</div>',
        new_icon_style.format(icon='🌌'),
        html_content,
        flags=re.IGNORECASE
    )
    
    # 如故
    html_content = re.sub(
        r'<div style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; background: rgba\(212, 175, 55, 0\.2\); border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba\(212, 175, 55, 0\.4\);">\s*<span style="font-size: 1\.2rem;">🌠</span>\s*</div>',
        new_icon_style.format(icon='🌠'),
        html_content,
        flags=re.IGNORECASE
    )
    
    return html_content

if __name__ == "__main__":
    # 读取HTML文件
    with open("quick-site.html", "r", encoding="utf-8") as f:
        html = f.read()
    
    # 修复图标位置
    html = fix_icon_positions(html)
    
    # 写回文件
    with open("quick-site.html", "w", encoding="utf-8") as f:
        f.write(html)
    
    print("成功修复图标位置问题！")