import re

# 文件名映射（简化中文名）
file_mapping = {
    "《大宴之上》DM手册重庆市 墨染.pdf": "大宴之上主版.pdf",
    "墨染《大宴之上》4DM版手册V2（最终定稿版）(3).pdf": "大宴之上4DM.pdf",
    "《万仞》主持人手册FW868.pdf": "万仞.pdf",
    "1_《流芳》主持人手册（终版）.pdf": "流芳.pdf",
    "梦灵祈念时·主持人手册 重庆沙坪坝区图灵(1).pdf": "梦灵祈念时.pdf",
    "窃云台.pdf": "窃云台.pdf",
    "请君入瓮主持人手册正式版.pdf": "请君入瓮.pdf",
    "重庆三体 阙落手册.pdf": "三体阙落.pdf",
    "重庆三体如故组织者手册最终版本(1).pdf": "三体如故.pdf",
    "重庆三体如故组织者手册最终版本.pdf": "三体如故.pdf"  # 备用
}

# 先重命名PDF文件为简单名字
import os
import shutil

pdf_dir = "pdfs"
web_pdfs_dir = "web-pdfs"
os.makedirs(web_pdfs_dir, exist_ok=True)

print("开始重命名PDF文件...")
for old_name, new_name in file_mapping.items():
    old_path = os.path.join(pdf_dir, old_name)
    if os.path.exists(old_path):
        new_path = os.path.join(web_pdfs_dir, new_name)
        shutil.copy2(old_path, new_path)
        print(f"已复制: {old_name} -> {new_name}")
    else:
        # 尝试找相似文件
        for f in os.listdir(pdf_dir):
            if old_name in f:
                old_path = os.path.join(pdf_dir, f)
                new_path = os.path.join(web_pdfs_dir, new_name)
                shutil.copy2(old_path, new_path)
                print(f"已复制: {f} -> {new_name}")
                break

# 读取HTML文件并更新链接
with open("quick-site.html", "r", encoding="utf-8") as f:
    content = f.read()

print("\n更新HTML链接...")

# 1. 大宴之上（主版）
content = content.replace(
    'href="file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/《大宴之上》DM手册重庆市 墨染.pdf"',
    'href="web-pdfs/大宴之上主版.pdf"'
)

# 2. 大宴之上（4DM版）
content = content.replace(
    'href="file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/墨染《大宴之上》4DM版手册V2（最终定稿版）(3).pdf"',
    'href="web-pdfs/大宴之上4DM.pdf"'
)

# 3. 万仞青山听水寒
content = content.replace(
    'href="file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/《万仞》主持人手册FW868.pdf"',
    'href="web-pdfs/万仞.pdf"'
)

# 4. 流芳
content = content.replace(
    'href="file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/1_《流芳》主持人手册（终版）.pdf"',
    'href="web-pdfs/流芳.pdf"'
)

# 5. 梦灵祈念时
content = content.replace(
    'href="file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/梦灵祈念时·主持人手册 重庆沙坪坝区图灵(1).pdf"',
    'href="web-pdfs/梦灵祈念时.pdf"'
)

# 6. 窃云台
content = content.replace(
    'href="file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/窃云台.pdf"',
    'href="web-pdfs/窃云台.pdf"'
)

# 7. 请君入瓮
content = content.replace(
    'href="file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/请君入瓮主持人手册正式版.pdf"',
    'href="web-pdfs/请君入瓮.pdf"'
)

# 8. 三体阙落
content = content.replace(
    'href="file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/重庆三体 阙落手册.pdf"',
    'href="web-pdfs/三体阙落.pdf"'
)

# 9. 三体如故
content = re.sub(
    r'href="file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/重庆三体如故组织者手册最终版本.*?\.pdf"',
    'href="web-pdfs/三体如故.pdf"',
    content
)

# 替换JavaScript提示中的路径
content = content.replace(
    'C:\\Users\\admin\\Documents\\xwechat_files\\wxid_jf8tgty087vf22_bb81\\msg\\file\\2026-04\\',
    'web-pdfs/'
)

# 更新下载说明
content = content.replace(
    '保存到固定文件夹',
    'PDF文件现在可从网站直接下载'
)

# 保存文件
with open("quick-site.html", "w", encoding="utf-8") as f:
    f.write(content)

print("HTML链接已更新为相对路径!")
print("PDF文件位置: web-pdfs/")
print("在线下载地址示例: http://localhost:8888/web-pdfs/大宴之上主版.pdf")