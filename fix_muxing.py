import re

with open('story.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 木星线章节从xia_wan_chapter3开始
chapter3_start = content.find("xia_wan_chapter3:")
chapter3_long_start = content.find("xia_wan_chapter3_longxinheng:")

# 木星线范围：xia_wan_chapter3 到 xia_wan_chapter3_longxinheng
if chapter3_start >= 0 and chapter3_long_start > 0:
    muxing_range = slice(chapter3_start, chapter3_long_start)
    chapter3_content = content[muxing_range]

    # 在木星线中，将xia_wan说的话里的'方圆'改为'木星'
    def replace_fangyuan(match):
        text = match.group(0)
        # 将方圆替换为木星
        text = text.replace('方圆', '木星')
        return text

    # 匹配 xia_wan 说的话中包含方圆的部分
    pattern = r"speaker: 'xia_wan', text: '[^']*'"
    replaced = re.sub(pattern, replace_fangyuan, chapter3_content)

    content = content[:muxing_range.start] + replaced + content[muxing_range.stop:]

    with open('story.js', 'w', encoding='utf-8') as f:
        f.write(content)

    print('木星线修复完成')
else:
    print('未找到章节位置')
