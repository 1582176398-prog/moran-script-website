#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量修改DM手册链接为密码保护模式
"""

import os
import re

def replace_dm_links(file_path):
    """修改HTML文件中的DM手册链接"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 定义要替换的DM手册链接模式
    # 找到所有的DM手册链接
    pattern = r'<a href="(web-pdfs/[^"]+\.pdf)" class="btn btn-dm" download>📄 DM手册</a>'
    
    def replace_link(match):
        pdf_url = match.group(1)
        # 获取文件名（不带扩展名）
        filename = os.path.splitext(os.path.basename(pdf_url))[0]
        # 返回新的链接格式
        return f'<a href="javascript:void(0)" onclick="showPasswordModal(\'{pdf_url}\')" class="btn btn-dm">📄 DM手册</a>'
    
    # 执行替换
    new_content = re.sub(pattern, replace_link, content)
    
    # 如果内容有变化，保存文件
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"已修改文件: {file_path}")
        return True
    else:
        print(f"未找到需要修改的链接: {file_path}")
        return False

def main():
    html_file = 'quick-site.html'
    if os.path.exists(html_file):
        replace_dm_links(html_file)
    else:
        print(f"文件不存在: {html_file}")

if __name__ == '__main__':
    main()