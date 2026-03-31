#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
简单批量更新剧本时长
"""

def update_durations_simple():
    with open('quick-site.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 直接查找并替换时长
    replacements = [
        ("6-7h</div>", "8h+</div>"),          # 窃云台
        ("5-6h</div>", "9h+</div>"),          # 流芳
        ("5-6h</div>", "9-10h</div>"),        # 请君入瓮
        ("6-7h</div>", "8-9h</div>"),         # 阙落
        ("5-6h</div>", "12h+</div>"),         # 如故
        ("5-6h</div>", "9-10h</div>"),        # 壁上观
        ("4-5h</div>", "6-7h</div>")          # 同归
    ]
    
    updated = False
    for old, new in replacements:
        if old in content:
            count = content.count(old)
            print(f"找到 {count} 处 '{old}'，替换为 '{new}'")
            content = content.replace(old, new)
            updated = True
    
    if updated:
        with open('quick-site.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print("✅ 时长修改完成！")
        return True
    else:
        print("未找到任何匹配的时长信息")
        return False

if __name__ == '__main__':
    update_durations_simple()