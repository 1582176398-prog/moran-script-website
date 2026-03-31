import pdfplumber
import os

pdf_files = {
    "大宴之上_主版": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\《大宴之上》DM手册重庆市 墨染.pdf",
    "大宴之上_4DM版": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\墨染《大宴之上》4DM版手册V2（最终定稿版）(3).pdf",
    "万仞青山听水寒": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\《万仞》主持人手册FW868.pdf",
    "流芳": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\1_《流芳》主持人手册（终版）.pdf",
    "梦灵祈念时": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\梦灵祈念时·主持人手册 重庆沙坪坝区图灵(1).pdf",
    "窃云台": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\窃云台.pdf",
    "请君入瓮": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\请君入瓮主持人手册正式版.pdf",
    "三体阙落": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\重庆三体 阙落手册.pdf",
    "三体如故_1": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\重庆三体如故组织者手册最终版本(1).pdf",
    "三体如故_2": r"C:\Users\admin\Documents\xwechat_files\wxid_jf8tgty087vf22_bb81\msg\file\2026-04\重庆三体如故组织者手册最终版本.pdf",
}

for name, path in pdf_files.items():
    print(f"\n{'='*70}")
    print(f"剧本: {name}")
    print(f"文件: {os.path.basename(path)}")
    print(f"{'='*70}")
    try:
        with pdfplumber.open(path) as pdf:
            print(f"总页数: {len(pdf.pages)}")
            # 重点读取前10页找关键信息
            for i, page in enumerate(pdf.pages[:10]):
                try:
                    text = page.extract_text()
                    if text and len(text.strip()) > 20:
                        print(f"\n[第{i+1}页]")
                        print(text[:3000])
                except Exception as e:
                    print(f"[第{i+1}页] 读取失败: {e}")
    except Exception as e:
        print(f"打开失败: {e}")

print("\n\n===全部完成===")
