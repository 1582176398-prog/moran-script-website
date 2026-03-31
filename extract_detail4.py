import pdfplumber
import os

# 提取请君入瓮、三体阙落、梦灵祈念时的信息
targets = {
    "请君入瓮": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\请君入瓮主持人手册正式版.pdf",
    "三体阙落": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\重庆三体 阙落手册.pdf",
    "梦灵祈念时": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\梦灵祈念时·主持人手册 重庆沙坪坝区图灵(1).pdf",
}

for name, path in targets.items():
    print(f"\n{'='*70}")
    print(f"剧本: {name}")
    print(f"{'='*70}")
    try:
        with pdfplumber.open(path) as pdf:
            print(f"总页数: {len(pdf.pages)}")
            for i in range(min(15, len(pdf.pages))):
                try:
                    text = pdf.pages[i].extract_text()
                    if text and len(text.strip()) > 30:
                        print(f"\n[第{i+1}页]")
                        print(text[:2000])
                except:
                    pass
    except Exception as e:
        print(f"失败: {e}")
