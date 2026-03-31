import pdfplumber
import os

# 专门提取窃云台、请君入瓮、三体阙落、三体如故、梦灵祈念时、万仞 的关键信息
targets = {
    "窃云台": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\窃云台.pdf",
    },
    "请君入瓮": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\请君入瓮主持人手册正式版.pdf",
    },
    "三体阙落": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\重庆三体 阙落手册.pdf",
    },
    "梦灵祈念时": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\梦灵祈念时·主持人手册 重庆沙坪坝区图灵(1).pdf",
    },
    "万仞青山听水寒_关键": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\《万仞》主持人手册FW868.pdf",
    },
    "大宴之上_4DM版_关键": {
        "path": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\墨染《大宴之上》4DM版手册V2（最终定稿版）(3).pdf",
    },
}

for name, info in targets.items():
    print(f"\n{'='*70}")
    print(f"剧本: {name}")
    print(f"{'='*70}")
    try:
        with pdfplumber.open(info["path"]) as pdf:
            n = len(pdf.pages)
            print(f"总页数: {n}")
            # 读取前15页
            for i in range(min(15, n)):
                try:
                    text = pdf.pages[i].extract_text()
                    if text and len(text.strip()) > 30:
                        print(f"\n[第{i+1}页]")
                        print(text[:1500])
                except:
                    pass
    except Exception as e:
        print(f"打开失败: {e}")
