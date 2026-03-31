#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
验证网站更新结果
"""

import re

# 定义所有剧本及其ID
scripts = [
    ("大宴之上", "dayan"),
    ("请君入瓮", "qingjunruweng"),
    ("万仞青山听水寒", "wanren"),
    ("流芳", "liufang"),
    ("如故", "rugu"),
    ("阙落", "queluo"),
    ("梦灵祈念时", "mengling"),
    ("窃云台", "qieyuntai"),
    ("壁上观", "bishangguan"),
    ("同归", "tonggui")
]

print("=== 网站更新验证报告 ===")

# 读取HTML文件
with open("quick-site.html", "r", encoding="utf-8") as f:
    content = f.read()

print("\n[剧本描述更新检查]")
print("-" * 50)

# 检查描述是否更新（从文档中提取的描述）
extracted_descriptions = {
    "请君入瓮": "六名角色卷入权谋漩涡",
    "流芳": "以明末清初\"江阴八十一日\"抗清起义为背景",
    "如故": "六位被命运戏弄的权贵子弟",
    "阙落": "以\"禽兽王朝\"为背景",
    "万仞青山听水寒": "说书少年百里优秀",
    "梦灵祈念时": "《梦灵祈念时》设定在神秘灵幻世界",
    "窃云台": "明朝为背景",
    "壁上观": "六名身负宿命的角色因东行之旅交织",
    "同归": "在\"女子为尊\"的架空曌国"
}

for script_name, script_id in scripts:
    # 查找剧本标题
    title_pattern = f'<h2 class="script-title">{script_name}</h2>'
    title_pos = content.find(title_pattern)
    
    if title_pos != -1:
        # 查找描述段落
        from_pos = title_pos + len(title_pattern)
        p_start = content.find('<p>', from_pos)
        p_end = content.find('</p>', p_start) if p_start != -1 else -1
        
        if p_start != -1 and p_end != -1:
            description = content[p_start+3:p_end]
            
            # 检查是否包含提取的描述特征
            is_updated = False
            if script_name in extracted_descriptions:
                if extracted_descriptions[script_name] in description:
                    is_updated = True
            
            status = "已更新" if is_updated else "未更新或自定义"
            print(f"{script_name:10} - {status}")
        else:
            print(f"{script_name:10} - 未找到描述段落")
    else:
        print(f"{script_name:10} - 未找到剧本标题")

print("\n[角色简介按钮检查]")
print("-" * 50)

for script_name, script_id in scripts:
    # 查找角色简介按钮
    button_pattern1 = f'onclick="showRoleModal\\(\'{re.escape(script_id)}\'\\)">👥 角色简介</button>'
    button_pattern2 = f'<button class="btn btn-role" onclick="showRoleModal\\(\'{re.escape(script_id)}\'\\)">👥 角色简介</button>'
    
    has_button1 = re.search(button_pattern1, content) is not None
    has_button2 = re.search(button_pattern2, content) is not None
    has_button = has_button1 or has_button2
    
    # 根据规则判断按钮应该存在还是应该删除
    should_have_button = script_id in ["dayan", "wanren"]  # 大宴之上和万仞青山听水寒
    
    if has_button and should_have_button:
        status = "[OK] 正确：按钮存在"
    elif not has_button and not should_have_button:
        status = "[OK] 正确：按钮已移除"
    elif has_button and not should_have_button:
        status = "[ERROR] 错误：按钮应该移除但仍存在"
    elif not has_button and should_have_button:
        status = "[ERROR] 错误：按钮应该存在但已移除"
    
    print(f"{script_name:10} ({script_id:15}) - {status}")

print("\n[JavaScript角色数据检查]")
print("-" * 50)

# 检查JavaScript中的角色数据
js_pattern = r'(wanren:\s*\{[^}]+\})'
match = re.search(js_pattern, content, re.DOTALL)

if match:
    wanren_block = match.group(1)
    
    # 检查是否包含从文档中提取的角色（前6个关键角色）
    key_roles = ["萧辞", "棠月", "李知行", "阿沅", "沈初一", "赵小西"]
    found_roles = []
    
    for role in key_roles:
        if role in wanren_block:
            found_roles.append(role)
    
    if len(found_roles) >= 4:  # 至少找到4个关键角色
        print("[OK] 万仞青山听水寒：JavaScript角色数据已从文档更新")
        print(f"   找到的角色: {', '.join(found_roles)}")
    else:
        print("[WARNING] 万仞青山听水寒：JavaScript角色数据可能未完全更新")
else:
    print("[ERROR] 未找到万仞青山听水寒的JavaScript角色数据")

print("\n[DM手册链接检查]")
print("-" * 50)

# 检查DM手册链接（简单检查10个剧本是否都有DM手册链接）
dm_count = content.count('class="btn btn-dm" download>📄 DM手册</a>')
print(f"找到 {dm_count} 个DM手册下载链接")

if dm_count >= 10:
    print("[OK] DM手册链接数量正常")
else:
    print(f"[WARNING] DM手册链接可能缺失（应有10个，找到{dm_count}个）")

print("\n[服务器访问信息]")
print("-" * 50)
print("本地访问: http://localhost:8888/quick-site.html")
print("局域网访问: http://192.168.1.2:8888/quick-site.html")

print("\n=== 验证完成 ===")