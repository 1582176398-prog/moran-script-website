#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
import os
from pypdf import PdfReader

def extract_pdf_preview(pdf_path, max_chars=300):
    """从PDF中提取内容预览"""
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for i in range(min(3, len(reader.pages))):  # 只看前3页
            page_text = reader.pages[i].extract_text()
            if page_text:
                # 清理文本
                cleaned = page_text.replace('\n', ' ').replace('\r', ' ')
                # 移除过多空白
                cleaned = ' '.join(cleaned.split())
                text += cleaned + " "
                
                if len(text) > max_chars:
                    text = text[:max_chars] + "..."
                    break
        
        return len(reader.pages), text
    except Exception as e:
        return 0, f"读取错误: {str(e)}"

if __name__ == "__main__":
    pdfs_to_check = [
        ("大宴之上主版", "web-pdfs/dayan_zhuban.pdf"),
        ("万仞", "web-pdfs/wanren.pdf"),
        ("流芳", "web-pdfs/liufang.pdf"),
        ("窃云台", "web-pdfs/qieyuntai.pdf"),
        ("请君入瓮", "web-pdfs/qingjunruweng.pdf"),
        ("三体阙落", "web-pdfs/santi_queluo.pdf"),
        ("三体如故", "web-pdfs/santi_rugu.pdf"),
    ]
    
    print("正在检查PDF文件内容...")
    print("=" * 60)
    
    for name, path in pdfs_to_check:
        if os.path.exists(path):
            pages, preview = extract_pdf_preview(path)
            print(f"\n📖 {name}: {pages}页")
            print(f"内容预览: {preview[:400]}")
        else:
            print(f"\n⚠️  {name}: 文件不存在 {path}")