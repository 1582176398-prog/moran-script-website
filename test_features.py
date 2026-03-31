#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
验证网站功能的完整性测试
"""

import os
import re

def test_website_features():
    """测试网站功能完整性"""
    print("=== 网站功能完整性测试 ===")
    
    # 读取HTML文件
    with open("quick-site.html", "r", encoding="utf-8") as f:
        content = f.read()
    
    tests_passed = 0
    total_tests = 0
    
    # 测试1: 检查音乐文件引用
    total_tests += 1
    if 'bgmusic.mp3' in content:
        print("[OK] 测试1: 音乐文件引用正确")
        tests_passed += 1
    else:
        print("[ERROR] 测试1: 未找到bgmusic.mp3引用")
    
    # 测试2: 检查自动播放设置
    total_tests += 1
    if 'DOMContentLoaded' in content and 'canplaythrough' in content:
        print("[OK] 测试2: 自动播放逻辑已设置")
        tests_passed += 1
    else:
        print("[ERROR] 测试2: 自动播放逻辑可能不完整")
    
    # 测试3: 检查请君入瓮DM手册链接修复
    total_tests += 1
    if 'href="web-pdfs/qingjunruweng.pdf"' in content:
        print("[OK] 测试3: 请君入瓮DM手册链接已修复")
        tests_passed += 1
    else:
        print("[ERROR] 测试3: 请君入瓮DM手册链接未修复")
    
    # 测试4: 检查角色简介按钮
    total_tests += 1
    button_count = content.count('showRoleModal(')
    if button_count >= 10:  # 10个剧本
        print(f"[OK] 测试4: 找到{button_count}个角色简介按钮")
        tests_passed += 1
    else:
        print(f"[ERROR] 测试4: 只找到{button_count}个角色简介按钮，预期10个")
    
    # 测试5: 检查角色弹窗数据
    total_tests += 1
    if 'const roleData = {' in content and 'dayan:' in content:
        print("[OK] 测试5: 角色弹窗数据已包含")
        tests_passed += 1
    else:
        print("[ERROR] 测试5: 角色弹窗数据缺失")
    
    # 测试6: 检查颜色调整
    total_tests += 1
    if 'background: #f8f9fa;' in content and 'color: #2c3e50;' in content:
        print("[OK] 测试6: 颜色调整已应用")
        tests_passed += 1
    else:
        print("[ERROR] 测试6: 颜色调整未应用")
    
    # 测试7: 检查隐藏音乐播放器
    total_tests += 1
    if 'overflow: hidden;' in content and 'opacity: 0;' in content and 'music-player' in content:
        print("[OK] 测试7: 音乐播放器已隐藏")
        tests_passed += 1
    else:
        print("[ERROR] 测试7: 音乐播放器隐藏可能不完整")
    
    # 测试8: 检查PDF文件存在
    pdf_files = ['dayan_zhuban.pdf', 'wanren.pdf', 'liufang.pdf', 'mengling.pdf',
                 'qieyuntai.pdf', 'qingjunruweng.pdf', 'santi_queluo.pdf',
                 'santi_rugu.pdf', 'bishangguan.pdf', 'tonggui.pdf']
    
    total_tests += len(pdf_files)
    missing_files = []
    
    for pdf in pdf_files:
        pdf_path = os.path.join('web-pdfs', pdf)
        if os.path.exists(pdf_path):
            tests_passed += 1
        else:
            missing_files.append(pdf)
    
    if missing_files:
        print(f"[ERROR] 测试8: 缺失PDF文件: {missing_files}")
    else:
        print("[OK] 测试8: 所有PDF文件都存在")
    
    # 总结
    print(f"\n=== 测试完成 ===")
    print(f"通过率: {tests_passed}/{total_tests} ({tests_passed/total_tests*100:.1f}%)")
    
    if tests_passed == total_tests:
        print("[OK] 所有测试通过！网站功能完整。")
        return True
    else:
        print("[WARNING] 存在一些问题需要修复。")
        return False

if __name__ == "__main__":
    success = test_website_features()
    exit(0 if success else 1)