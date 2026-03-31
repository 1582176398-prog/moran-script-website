#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import sys

def update_durations():
    """直接替换时长文本，不使用特殊字符以避免编码问题"""
    
    file_path = 'quick-site.html'
    
    with open(file_path, 'r', encoding='utf-8') as f:
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
            print(f"[INFO] 找到 {count} 处 '{old}'，替换为 '{new}'")
            content = content.replace(old, new)
            updated = True
    
    if updated:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("[SUCCESS] 时长修改完成！")
        print(f"[PROCESSED] 已应用 {len(replacements)} 个时长修改")
        return True
    else:
        print("[WARNING] 未找到任何匹配的时长信息")
        return False

if __name__ == '__main__':
    try:
        if os.path.exists('quick-site.html'):
            update_durations()
        else:
            print("[ERROR] 找不到 quick-site.html 文件")
    except Exception as e:
        print(f"[ERROR] 执行出错: {str(e)}")
        sys.exit(1)