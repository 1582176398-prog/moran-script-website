import pdfplumber
import os

# 提取关键信息的脚本
pdf_targets = {
    "流芳": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\1_《流芳》主持人手册（终版）.pdf",
        "pages": list(range(0, 12))
    },
    "梦灵祈念时": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\梦灵祈念时·主持人手册 重庆沙坪坝区图灵(1).pdf",
        "pages": list(range(0, 12))
    },
    "窃云台": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\窃云台.pdf",
        "pages": list(range(0, 12))
    },
    "请君入瓮": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\请君入瓮主持人手册正式版.pdf",
        "pages": list(range(0, 12))
    },
    "三体阙落": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\重庆三体 阙落手册.pdf",
        "pages": list(range(0, 12))
    },
    "万仞青山听水寒_详情": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\《万仞》主持人手册FW868.pdf",
        "pages": [2, 3, 4, 5, 6, 7, 8]
    },
    "大宴之上_4DM版": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\墨染《大宴之上》4DM版手册V2（最终定稿版）(3).pdf",
        "pages": list(range(0, 12))
    },
}

for name, info in pdf_targets.items():
    print(f"\n{'='*70}")
    print(f"剧本: {name}")
    print(f"{'='*70}")
    try:
        with pdfplumber.open(info["path"]) as pdf:
            print(f"总页数: {len(pdf.pages)}")
            for i in info["pages"]:
                if i < len(pdf.pages):
                    try:
                        text = pdf.pages[i].extract_text()
                        if text and len(text.strip()) > 20:
                            print(f"\n[第{i+1}页]")
                            print(text[:2000])
                    except Exception as e:
                        pass
    except Exception as e:
        print(f"打开失败: {e}")

print("\n===完成===")
