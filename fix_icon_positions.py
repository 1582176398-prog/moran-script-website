#!/usr/bin/env python3
"""
批量修复剧本卡片图标位置
将图标从右上角移至右下角，减小尺寸，降低透明度
"""

import re

def fix_icon_positions(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找所有图标div
    icon_pattern = r'<div style="position: absolute; top: 15px; right: 15px; width: 36px; height: 36px; background: rgba\(212, 175, 55, 0\.2\); border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba\(212, 175, 55, 0\.4\); z-index: 1;">\s*<span style="font-size: 1rem;">([^<]+)</span>\s*</div>'
    
    # 替换为新的右下角版本
    new_icon_template = '<div style="position: absolute; bottom: 20px; right: 20px; width: 30px; height: 30px; background: rgba(212, 175, 55, 0.1); border-radius: 6px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(212, 175, 55, 0.2); z-index: 1; opacity: 0.5; pointer-events: none;">\n                    <span style="font-size: 0.85rem;">{emoji}</span>\n                </div>'
    
    # 替换所有匹配的图标
    def replace_icon(match):
        emoji = match.group(1)
        return new_icon_template.format(emoji=emoji)
    
    new_content = re.sub(icon_pattern, replace_icon, content)
    
    # 更新脚本标题的右边距，现在不需要那么大了
    title_margin_pattern = r'\.script-title \{[^\}]+margin-right: 50px;[^\}]*\}'
    new_title_style = """.script-title {
            font-size: 1.8rem;
            font-weight: 600;
            color: #f8f9fa;
            margin-bottom: 8px;
            margin-right: 20px; /* 减小右边距 */
        }"""
    
    # 应用标题样式更新
    title_style_pattern = r'\.script-title \{[^\}]+\}'
    if re.search(title_style_pattern, new_content, re.DOTALL):
        new_content = re.sub(title_style_pattern, new_title_style, new_content, flags=re.DOTALL)
    
    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    # 统计处理了多少个图标
    icon_count = len(re.findall(new_icon_template.format(emoji=r'[^<]+'), new_content))
    print(f"已处理 {icon_count} 个图标")
    print("图标已全部移至右下角，尺寸减小，透明度降低")

if __name__ == "__main__":
    file_path = r"C:\Users\admin\WorkBuddy\20260401001834\quick-site.html"
    fix_icon_positions(file_path)