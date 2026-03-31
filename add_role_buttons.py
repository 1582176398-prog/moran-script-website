#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为所有剧本卡片批量添加角色简介按钮
"""

import os
import re

def add_role_buttons():
    """为所有剧本卡片添加角色简介按钮"""
    
    # 定义剧本映射关系：剧本名 -> 剧本ID
    script_mapping = {
        "大宴之上": "dayan",
        "万仞青山听水寒": "wanren",
        "流芳": "liufang", 
        "梦灵祈念时": "mengling",
        "窃云台": "qieyuntai",
        "请君入瓮": "qingjunruweng",
        "阙落": "queluo",
        "如故": "rugu",
        "壁上观": "bishangguan",
        "同归": "tonggui"
    }
    
    # 读取HTML文件
    with open("quick-site.html", "r", encoding="utf-8") as f:
        content = f.read()
    
    # 查找所有剧本卡片（找到每个剧本标题后的DM手册链接部分）
    original_content = content
    
    # 处理每个剧本
    for script_name, script_id in script_mapping.items():
        # 构建正则表达式匹配每个剧本的DM手册链接
        # 查找格式：<a href="web-pdfs/[脚本id].pdf" class="btn btn-dm" download>📄 DM手册</a>
        pattern = rf'(<p>[^<]*</p>\s*<a href="web-pdfs/{script_id}\.pdf" class="btn btn-dm" download>📄 DM手册</a>)'
        
        # 替换为带有角色简介按钮的版本
        replacement = rf'<p>[^<]*</p>\n\t\t<div style="display: flex; gap: 10px; margin-top: 20px;">\n\t\t\t<a href="web-pdfs/{script_id}.pdf" class="btn btn-dm" download>📄 DM手册</a>\n\t\t\t<button class="btn btn-role" onclick="showRoleModal(\'{script_id}\')">👥 角色简介</button>\n\t\t</div>'
        
        # 使用re.sub进行替换，注意要匹配多行
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        print(f"已为 {script_name} 添加角色简介按钮")
    
    # 如果内容有变化，写入文件
    if content != original_content:
        with open("quick-site.html", "w", encoding="utf-8") as f:
            f.write(content)
        print("所有剧本角色简介按钮添加完成！")
    else:
        print("未找到需要修改的内容")
    
    return content != original_content

if __name__ == "__main__":
    add_role_buttons()