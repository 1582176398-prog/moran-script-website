import pdfplumber
import os
import json

pdf_files = [
    r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\《大宴之上》DM手册重庆市 墨染.pdf",
    r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\《万仞》主持人手册FW868.pdf",
    r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\1_《流芳》主持人手册（终版）.pdf",
    r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\梦灵祈念时·主持人手册 重庆沙坪坝区图灵(1).pdf",
    r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\墨染《大宴之上》4DM版手册V2（最终定稿版）(3).pdf",
    r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\窃云台.pdf",
    r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\请君入瓮主持人手册正式版.pdf",
    r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\重庆三体 阙落手册.pdf",
    r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\重庆三体如故组织者手册最终版本(1).pdf",
    r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\重庆三体如故组织者手册最终版本.pdf",
]

results = {}

for pdf_path in pdf_files:
    filename = os.path.basename(pdf_path)
    print(f"\n{'='*60}")
    print(f"文件: {filename}")
    print(f"{'='*60}")
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            print(f"总页数: {len(pdf.pages)}")
            # 读取前5页文本
            text_pages = []
            for i, page in enumerate(pdf.pages[:8]):
                text = page.extract_text()
                if text:
                    text_pages.append(f"[第{i+1}页]\n{text}")
                    print(f"\n--- 第{i+1}页 ---")
                    print(text[:2000])
            results[filename] = "\n\n".join(text_pages)
    except Exception as e:
        print(f"读取失败: {e}")
        results[filename] = f"ERROR: {e}"

print("\n\n===提取完成===")
