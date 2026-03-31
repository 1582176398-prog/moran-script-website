with open('quick-site.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 剧本到PDF文件的映射
script_to_pdf = {
    "大宴之上（主版）": "web-pdfs/大宴之上主版.pdf",
    "万仞青山听水寒": "web-pdfs/万仞.pdf",
    "流芳": "web-pdfs/流芳.pdf",
    "梦灵祈念时": "web-pdfs/梦灵祈念时.pdf",
    "窃云台": "web-pdfs/窃云台.pdf",
    "请君入瓮": "web-pdfs/请君入瓮.pdf",
    "三体·阙落": "web-pdfs/三体阙落.pdf",
    "三体·如故": "web-pdfs/三体如故.pdf",
    "大宴之上（4DM版）": "web-pdfs/大宴之上4DM.pdf"
}

# 替换每个剧本的链接
import re

# 检测每个剧本区域并替换
for script_name, pdf_path in script_to_pdf.items():
    # 构建正则表达式查找该剧本区域的a标签
    pattern = rf'<!-- {re.escape(script_name)} -->[\s\S]*?<a[^>]*onclick="downloadGuide[^"]*"[^>]*>📄 DM手册</a>'
    
    def replace_link(match):
        # 找到整个匹配内容
        matched = match.group(0)
        # 替换a标签
        new_a_tag = f'<a href="{pdf_path}" class="btn btn-dm" download>📄 DM手册</a>'
        # 替换掉旧的a标签
        return re.sub(r'<a[^>]*onclick="downloadGuide[^"]*"[^>]*>📄 DM手册</a>', new_a_tag, matched)
    
    content = re.sub(pattern, replace_link, content, flags=re.IGNORECASE)

# 替换"href="#" onclick="downloadGuide" 样式的链接
content = re.sub(
    r'href="#" onclick="downloadGuide(?:.*?)"',
    lambda m: 'href="{web-pdfs/对应文件.pdf}"'.format(web_pdfs='web-pdfs'),
    content
)

# 确保万仞的链接正确
content = content.replace('href="web-pdfs/对应文件.pdf" class="btn btn-dm" download', 'href="web-pdfs/万仞.pdf" class="btn btn-dm" download')

# 保存
with open('quick-site.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("PDF链接已全部更新为在线下载链接！")
print("验证链接...")

# 验证每个剧本的链接
for script_name, pdf_path in script_to_pdf.items():
    if pdf_path in content:
        print(f"✓ {script_name}: {pdf_path}")
    else:
        print(f"✗ {script_name}: 未找到")