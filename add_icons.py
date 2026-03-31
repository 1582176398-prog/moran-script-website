#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为墨染剧本杀网站添加剧本图标装饰
"""

import re

def add_icons_to_cards(html_content):
    """为每个剧本卡片添加相应的图标"""
    
    # 剧本对应的图标
    script_icons = {
        "大宴之上": "🏯",
        "万仞青山听水寒": "🗡️",
        "流芳": "📜",
        "梦灵祈念时": "🎭",
        "窃云台": "👑",
        "请君入瓮": "📖",
        "阙落": "🌌",
        "如故": "🌠"
    }
    
    # 修改每个剧本卡片
    for script_name, icon in script_icons.items():
        # 找到剧本卡片开始位置
        pattern = rf'<div class="script-card">\s*<span class="difficulty [^"]+">[^<]+</span>\s*<h2 class="script-title">{re.escape(script_name)}</h2>'
        replacement = f'''<div class="script-card">
                <span class="difficulty 进阶">进阶</span>
                <div style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; background: rgba(212, 175, 55, 0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(212, 175, 55, 0.4);">
                    <span style="font-size: 1.2rem;">{icon}</span>
                </div>
                <h2 class="script-title">{script_name}</h2>'''
        
        # 特殊处理"万仞青山听水寒"
        if script_name == "万仞青山听水寒":
            pattern = rf'<div class="script-card">\s*<span class="difficulty [^"]+">[^<]+</span>\s*<h2 class="script-title">万仞青山听水寒</h2>'
            replacement = f'''<div class="script-card">
                <span class="difficulty 标准">标准</span>
                <div style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; background: rgba(212, 175, 55, 0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(212, 175, 55, 0.4);">
                    <span style="font-size: 1.2rem;">{icon}</span>
                </div>
                <h2 class="script-title">万仞青山听水寒</h2>'''
        elif script_name == "阙落":
            pattern = rf'<div class="script-card">\s*<span class="difficulty [^"]+">[^<]+</span>\s*<h2 class="script-title">阙落</h2>'
            replacement = f'''<div class="script-card">
                <span class="difficulty 高阶">高阶</span>
                <div style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; background: rgba(212, 175, 55, 0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(212, 175, 55, 0.4);">
                    <span style="font-size: 1.2rem;">{icon}</span>
                </div>
                <h2 class="script-title">阙落</h2>'''
        
        html_content = re.sub(pattern, replacement, html_content, flags=re.IGNORECASE)
    
    return html_content

if __name__ == "__main__":
    # 读取HTML文件
    with open("quick-site.html", "r", encoding="utf-8") as f:
        html = f.read()
    
    # 添加图标
    html = add_icons_to_cards(html)
    
    # 写回文件
    with open("quick-site.html", "w", encoding="utf-8") as f:
        f.write(html)
    
    print("成功为剧本卡片添加图标装饰！")