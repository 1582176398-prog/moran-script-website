import re

# PDF文件映射关系
pdf_mapping = {
    "流芳": "1_《流芳》主持人手册（终版）.pdf",
    "梦灵祈念时": "梦灵祈念时·主持人手册 重庆沙坪坝区图灵(1).pdf",
    "窃云台": "窃云台.pdf",
    "请君入瓮": "请君入瓮主持人手册正式版.pdf",
    "三体阙落": "重庆三体 阙落手册.pdf",
    "三体如故": "重庆三体如故组织者手册最终版本(1).pdf",
    "大宴之上4DM版": "墨染《大宴之上》4DM版手册V2（最终定稿版）(3).pdf"
}

# 基础路径
base_path = "file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/"

# 读取HTML文件
with open("quick-site.html", "r", encoding="utf-8") as f:
    content = f.read()

# 更新所有链接
for script_name, pdf_file in pdf_mapping.items():
    old_pattern = f'onclick="downloadGuide\\(&#x27;{re.escape(script_name)}&#x27;\\)"'
    new_link = f'href="{base_path}{pdf_file}" download'
    if script_name in ["流芳", "梦灵祈念时", "窃云台", "请君入瓮", "三体阙落", "三体如故"]:
        # 对于特定剧本，需要替换整个a标签部分
        old_a_tag = f'<a href="#" class="btn btn-dm" onclick="downloadGuide(&#x27;{script_name}&#x27;)">📄 DM手册</a>'
        new_a_tag = f'<a href="{base_path}{pdf_file}" class="btn btn-dm" download>📄 DM手册</a>'
        content = content.replace(old_a_tag, new_a_tag)

# 还需要更新"大宴之上4DM版"的链接
dm4_a_tag = f'<a href="#" class="btn btn-dm" onclick="downloadGuide(&#x27;大宴之上4DM版&#x27;)">📄 DM手册</a>'
dm4_new_tag = f'<a href="{base_path}墨染《大宴之上》4DM版手册V2（最终定稿版）(3).pdf" class="btn btn-dm" download>📄 DM手册</a>'
content = content.replace(dm4_a_tag, dm4_new_tag)

# 保存文件
with open("quick-site.html", "w", encoding="utf-8") as f:
    f.write(content)

print("PDF下载链接已更新！")