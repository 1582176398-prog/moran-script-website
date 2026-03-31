#!/usr/bin/env python3
"""
将网页配色从深色改为白色背景+灰色小框
"""

import re

def update_colors(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. 更新body背景色：深紫黑 → 纯白
    body_bg_pattern = r'body\s*\{[^}]+\}'
    new_body_style = """body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans SC', sans-serif; 
            background: #ffffff;
            color: #333333; /* 改为深色文字以适应白色背景 */
            min-height: 100vh;
            line-height: 1.6;
            position: relative;
        }"""
    
    # 2. 更新header背景色
    header_bg_pattern = r'header\s*\{[^}]+\}'
    new_header_style = """header {
            text-align: center;
            padding: 3rem 1rem;
            background: linear-gradient(rgba(245, 245, 245, 0.95), rgba(235, 235, 235, 0.9));
            border-radius: 0 0 20px 20px;
            margin-bottom: 2rem;
            border-bottom: 3px solid #cccccc;
        }"""
    
    # 3. 更新logo颜色（保持金色，但深色文字）
    logo_pattern = r'\.logo\s*\{[^}]+\}'
    new_logo_style = """.logo {
            font-size: 3.5rem;
            font-weight: 700;
            background: linear-gradient(90deg, #8b7500 0%, #d4af37 50%, #8b7500 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
            margin-bottom: 0.5rem;
        }"""
    
    # 4. 更新副标题颜色
    subtitle_pattern = r'\.subtitle\s*\{[^}]+\}'
    new_subtitle_style = """.subtitle {
            font-size: 1.2rem;
            color: #666666;
            margin-bottom: 1.5rem;
        }"""
    
    # 5. 更新标语颜色
    tagline_pattern = r'\.tagline\s*\{[^}]+\}'
    new_tagline_style = """.tagline {
            color: #8b7500; /* 深金色 */
            font-weight: 500;
            font-size: 1.1rem;
        }"""
    
    # 6. 更新剧本卡片背景：深紫透明 → 浅灰色
    script_card_pattern = r'\.script-card\s*\{[^}]+\}'
    new_script_card_style = """.script-card {
            background: #f5f5f5;
            border: 1px solid #e0e0e0;
            border-radius: 16px;
            padding: 24px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
        }"""
    
    # 7. 更新卡片悬停效果
    card_hover_pattern = r'\.script-card:hover\s*\{[^}]+\}'
    new_card_hover_style = """.script-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
            border-color: #b0b0b0;
        }"""
    
    # 8. 更新标题颜色
    script_title_pattern = r'\.script-title\s*\{[^}]+\}'
    new_script_title_style = """.script-title {
            font-size: 1.8rem;
            font-weight: 600;
            color: #222222;
            margin-bottom: 8px;
            margin-right: 20px; /* 减小右边距 */
        }"""
    
    # 9. 更新副标题颜色
    script_subtitle_pattern = r'\.script-subtitle\s*\{[^}]+\}'
    new_script_subtitle_style = """.script-subtitle {
            color: #666666;
            font-size: 1rem;
            margin-bottom: 16px;
        }"""
    
    # 10. 更新标签样式
    tag_bg_pattern = r'\.tag\s*\{[^}]+\}'
    new_tag_style = """.tag {
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            background: rgba(0, 0, 0, 0.08);
            color: #444444;
        }"""
    
    # 11. 更新详情项背景
    detail_item_pattern = r'\.detail-item\s*\{[^}]+\}'
    new_detail_item_style = """.detail-item {
            background: rgba(0, 0, 0, 0.05);
            padding: 10px 14px;
            border-radius: 10px;
        }"""
    
    # 12. 更新按钮颜色
    btn_pattern = r'\.btn\s*\{[^}]+\}'
    new_btn_style = """.btn {
            display: inline-block;
            background: linear-gradient(90deg, #8b7500 0%, #d4af37 100%);
            color: white;
            padding: 12px 24px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 10px;
            text-align: center;
        }"""
    
    # 13. 更新DM手册按钮
    btn_dm_pattern = r'\.btn-dm\s*\{[^}]+\}'
    new_btn_dm_style = """.btn-dm {
            background: linear-gradient(90deg, #6c63ff 0%, #4a43d6 100%);
            color: white;
        }"""
    
    # 14. 更新悬浮效果颜色
    radial_gradient_pattern = r'radial-gradient\(circle, rgba\(212, 175, 55, 0\.1\) 0%, transparent 70%\)'
    new_radial_gradient = 'radial-gradient(circle, rgba(100, 100, 100, 0.05) 0%, transparent 70%)'
    
    # 15. 更新脚部背景
    footer_pattern = r'footer\s*\{[^}]+\}'
    new_footer_style = """footer {
            text-align: center;
            padding: 2rem;
            margin-top: 3rem;
            border-top: 1px solid #e0e0e0;
            color: #777777;
            font-size: 0.95rem;
        }"""
    
    # 16. 更新统计卡片背景
    stat_item_pattern = r'\.stat-item\s*\{[^}]+\}'
    new_stat_item_style = """.stat-item {
            background: rgba(0, 0, 0, 0.05);
            padding: 20px;
            border-radius: 12px;
            min-width: 140px;
        }"""
    
    # 17. 更新音乐播放器背景
    music_player_pattern = r'\.music-player\s*\{[^}]+\}'
    new_music_player_style = """.music-player {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(245, 245, 245, 0.95);
            border: 1px solid rgba(139, 117, 0, 0.3);
            border-radius: 12px;
            padding: 15px;
            z-index: 1000;
            backdrop-filter: blur(10px);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            min-width: 200px;
            transition: transform 0.3s ease;
        }"""
    
    # 18. 更新音效开关背景
    sound_toggle_pattern = r'\.sound-toggle\s*\{[^}]+\}'
    new_sound_toggle_style = """.sound-toggle {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: rgba(245, 245, 245, 0.95);
            border: 1px solid rgba(139, 117, 0, 0.3);
            border-radius: 12px;
            padding: 10px 15px;
            z-index: 1000;
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }"""
    
    # 19. 更新卡片图标背景
    icon_bg_pattern = r'background: rgba\(212, 175, 55, 0\.1\)'
    new_icon_bg = 'background: rgba(100, 100, 100, 0.1)'
    
    # 20. 更新图标边框
    icon_border_pattern = r'border: 1px solid rgba\(212, 175, 55, 0\.2\)'
    new_icon_border = 'border: 1px solid rgba(100, 100, 100, 0.2)'
    
    # 逐项替换
    replacements = [
        (body_bg_pattern, new_body_style),
        (header_bg_pattern, new_header_style),
        (logo_pattern, new_logo_style),
        (subtitle_pattern, new_subtitle_style),
        (tagline_pattern, new_tagline_style),
        (script_card_pattern, new_script_card_style),
        (card_hover_pattern, new_card_hover_style),
        (script_title_pattern, new_script_title_style),
        (script_subtitle_pattern, new_script_subtitle_style),
        (tag_bg_pattern, new_tag_style),
        (detail_item_pattern, new_detail_item_style),
        (btn_pattern, new_btn_style),
        (btn_dm_pattern, new_btn_dm_style),
        (footer_pattern, new_footer_style),
        (stat_item_pattern, new_stat_item_style),
        (music_player_pattern, new_music_player_style),
        (sound_toggle_pattern, new_sound_toggle_style),
    ]
    
    # 使用复杂替换
    def replace_pattern(pattern, replacement, content):
        try:
            # 首先尝试正则替换
            if re.search(pattern, content, re.DOTALL):
                content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        except:
            pass
        return content
    
    for pattern, replacement in replacements:
        content = replace_pattern(pattern, replacement, content)
    
    # 替换渐变和背景色
    content = re.sub(radial_gradient_pattern, new_radial_gradient, content)
    content = re.sub(icon_bg_pattern, new_icon_bg, content)
    content = re.sub(icon_border_pattern, new_icon_border, content)
    
    # 更新下载说明区域
    content = content.replace('background: rgba(212, 175, 55, 0.1)', 'background: rgba(139, 117, 0, 0.1)')
    content = content.replace('border: 1px solid rgba(212, 175, 55, 0.3)', 'border: 1px solid rgba(139, 117, 0, 0.2)')
    content = content.replace('color: #d4af37', 'color: #8b7500')  # 标题颜色
    
    # 更新详细信息标签颜色
    content = content.replace('color: #c0b3cf', 'color: #777777')  # 副标题颜色
    content = content.replace('color: #e0d6f0', 'color: #444444')  # 标签文字颜色
    
    # 更新渐变边框颜色
    content = content.replace('background: linear-gradient(to right, #d4af37, #ffd700)', 'background: linear-gradient(to right, #8b7500, #d4af37)')
    
    # 更新音乐控制按钮颜色
    content = content.replace('rgba(212, 175, 55, 0.2)', 'rgba(139, 117, 0, 0.2)')
    content = content.replace('rgba(212, 175, 55, 0.3)', 'rgba(139, 117, 0, 0.3)')
    content = content.replace('rgba(212, 175, 55, 0.4)', 'rgba(139, 117, 0, 0.4)')
    content = content.replace('color: #d4af37', 'color: #8b7500')
    content = content.replace('color: #ffd700', 'color: #d4af37')
    
    # 更新分隔线颜色
    content = content.replace('rgba(212, 175, 55, 0.2)', 'rgba(100, 100, 100, 0.2)')
    content = content.replace('#d4af37', '#666666')
    
    # 移除水墨装饰层（与白色背景不配）
    content = re.sub(r'<!-- 水墨花纹装饰 -->.*?<div class="frame-pattern"></div>', '', content, flags=re.DOTALL)
    
    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("颜色已更新：白色背景 + 灰色小框主题")
    print("- 主体背景：纯白色 (#ffffff)")
    print("- 文字颜色：深灰色 (#333333)")
    print("- 卡片背景：浅灰色 (#f5f5f5)")
    print("- 装饰元素：深金色 (#8b7500)")
    print("- 已移除水墨装饰层")

if __name__ == "__main__":
    file_path = r"C:\Users\admin\WorkBuddy\20260401001834\quick-site.html"
    update_colors(file_path)