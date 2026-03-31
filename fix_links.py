with open('quick-site.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 替换所有文件路径为相对路径
import re

# 删除所有 file:/// 开头的路径，替换为相对路径
patterns = [
    (r'href="file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/[^"]+\.pdf"', r'href="web-pdfs/{filename}.pdf"'),
]

# 先收集现有链接，然后替换
pdf_links = re.findall(r'href="(file:///C:/Users/admin/Documents/xwechat_files/[^"]+\.pdf)"', content)
print(f"找到 {len(pdf_links)} 个PDF链接")

# 直接替换为通用相对路径
content = re.sub(
    r'href="file:///C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/[^"]+\.pdf"',
    lambda m: 'href="web-pdfs/对应文件.pdf"',
    content
)

# 保存
with open('quick-site.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("已清除绝对路径链接，现在手动设置对应关系...")