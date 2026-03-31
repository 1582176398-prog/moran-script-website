#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更新墨染剧本杀网站角色简介
根据用户提供的角色信息更新JavaScript中的角色数据
"""

import re
import json

def read_html_file():
    """读取HTML文件"""
    with open('quick-site.html', 'r', encoding='utf-8') as f:
        return f.read()

def write_html_file(content):
    """写入HTML文件"""
    with open('quick-site.html', 'w', encoding='utf-8') as f:
        f.write(content)

def update_role_data(html_content):
    """更新角色数据"""
    
    # 定义角色数据（根据用户提供的格式）
    role_data = {
        'dayan': {
            'title': '大宴之上 - 角色介绍',
            'roles': [
                {'name': '刘昭月', 'gender': 'female', 'desc': '适合道德感和正义感高，吃群像，有责任心，坚强独立，能接受一些委屈线，接受同性别NPC陪伴、守护、并肩的女玩家。'},
                {'name': '刘泠雪', 'gender': 'female', 'desc': '适合道德感低，以自我为中心，渴望得到关心和爱，对喜欢的人和事有强占有欲，会主动表达的女玩家，有很多的小黑屋互动和场上的输出。'},
                {'name': '苏清梦', 'gender': 'female', 'desc': '女，适合喜欢纯爱，内核坚定，喜欢有脑高智人设的女玩家。成长线重，吃NPC姐妹情。爱情线非常特别，从被救赎到救赎他人，先婚后爱，慢慢在爱里学会被爱和爱人。'},
                {'name': '苏星禾', 'gender': 'female', 'desc': '适合道德感不高，心思细腻敏感，强大却内耗，渴望得到坚定的爱和支持的女玩家，伪骨科下是绝对的偏爱。前期自沉，中后期发力，又燃又爽！'},
                {'name': '苏宴卿', 'gender': 'male', 'desc': '适合道德感不高，喜欢权谋感，有脑深沉，喜欢当运筹帷幄的聪明人。能为爱人做到甘愿付出，喜欢双向奔赴，双强联手的男玩家。同样的前期自沉，中后期发力，又燃又爽！'},
                {'name': '刘祈之', 'gender': 'male', 'desc': '适合喜欢自己有节目感，喜欢参与环节，热爱成长线，接受纯爱恋爱脑的男玩家。爱情里存在一开始的男强女弱，成长型王者，前弱后强。'}
            ],
            'intro': '盛唐宴会，权谋巅峰。安史之乱前夕的长安夜宴，六位角色各怀心思，家国情怀与个人命运交织。多重结局设定，角色抉择将改变历史走向。'
        },
        'wanren': {
            'title': '万仞青山听水寒 - 角色介绍',
            'roles': [
                {'name': '萧辞', 'gender': 'male', 'desc': '双向救赎爱情线、兄弟情、母亲线、师徒线、友情线、被救赎。'},
                {'name': '棠月', 'gender': 'female', 'desc': '双向救赎爱情线、类母亲、阿婆线、被救赎、宠物线。'},
                {'name': '李知行', 'gender': 'male', 'desc': '顶峰相见爱情线、极致反转、师徒、愧疚线、苍生。'},
                {'name': '阿沅', 'gender': 'female', 'desc': '顶峰相见爱情线、极致反转、阿婆、姐妹、苍生。'},
                {'name': '沈初一', 'gender': 'male', 'desc': '青梅竹马爱情线、爷爷、同门手足情、团宠。'},
                {'name': '赵小西', 'gender': 'female', 'desc': '青梅竹马爱情线、父母、阿婆、姐妹、团宠、族人线。'}
            ],
            'intro': '说书少年百里优秀，台上讲六人逆天传奇，忽转新篇述梦境奇遇，素月明河、沧江灯火皆入话中。至精彩处却哑然收声，眼底微红，叹息饮酒半醉而去。稚子追问姓名，但答"百里优秀"，远水远山，故人故事。'
        },
        'liufang': {
            'title': '流芳 - 角色介绍',
            'roles': [
                {'name': '陈稷', 'gender': 'male', 'desc': '爱情线+父亲线+宠物线+哥哥线，适合性格活泼，喜欢飙戏，吃中国式家长（严父），情感丰富的男性玩家。'},
                {'name': '杨玉笙', 'gender': 'male', 'desc': '爱情线+姐姐线+群像线，适合吃姐姐线，喜欢搞怪，性格活泼开朗的大男孩。'},
                {'name': '冯厚敦', 'gender': 'male', 'desc': '爱情线+群像线+家国线，适合性格内敛，固执保守，有责任担当的男生。'},
                {'name': '陈阎芙蓉', 'gender': 'female', 'desc': '父亲线+宠物线+爱情线，适合性格内向，有些自卑，喜欢自我沉浸不擅长输出的女性玩家。'},
                {'name': '方圆', 'gender': 'female', 'desc': '爱情线+父亲线，适合性格比较活泼开朗，吃父亲线，能抗压且能输出女性玩家。'},
                {'name': '赵晚舟', 'gender': 'female', 'desc': '伪骨科爱情线+事业线+群像线，适合内心稍成熟，有责任感，有事业心的女性玩家。'}
            ],
            'intro': '以明末清初"江阴八十一日"抗清起义为背景，六位身份各异的角色被卷入历史洪流，在"剃发易服"的抗争中，揭开古籍《江阴志》隐藏的笔迹与家族秘辛，见证十万人同心死义的壮烈誓言，体验家国大义与血脉亲情交织的史诗迷局'
        },
        'bishangguan': {
            'title': '壁上观 - 角色介绍',
            'roles': [
                {'name': '九劫', 'gender': 'male', 'desc': '伪CP位，前期CP、后期背刺，建议玩得起的、戏精抗压玩家。'},
                {'name': '胡不为', 'gender': 'male', 'desc': '纯爱玩家CP位、无背刺、包包纯爱。'},
                {'name': '未央', 'gender': 'female', 'desc': '伪CP位，前期CP、后期背刺，建议玩得起的、戏精抗压玩家。'},
                {'name': '素素', 'gender': 'female', 'desc': 'CP恋陪位。'},
                {'name': '江清禾', 'gender': 'female', 'desc': 'CP恋陪位。'},
                {'name': '阿绾', 'gender': 'female', 'desc': '纯爱玩家CP位、无背刺、包包纯爱。'}
            ],
            'intro': '六名身负宿命的角色因东行之旅交织，在神佛妖鬼的棋局中挣扎求存。当浮光撕裂倒悬的天河，三千年的月光凝结成冰冷的舍利，这一次东行不为取经，只为取回那被诸天神佛嚼碎又吐出的爱的残骸'
        },
        'qieyuntai': {
            'title': '窃云台 - 角色介绍',
            'roles': [
                {'name': '阿兰珠', 'gender': 'female', 'desc': '恋陪位。善良且大义家国的底色，强事业线，爱情和事业线并行。先婚后爱，被付出，女强男弱，事业上势均力敌。'},
                {'name': '谢雨山', 'gender': 'female', 'desc': 'NPC姐妹位。善良大爱，家国最重，事业线重。能吃家国传承，文人风骨的是最优选。爱情是双强，慕强脑狂欢。'},
                {'name': '怀宁', 'gender': 'female', 'desc': 'NPC爹宝女位。没有事业，委屈线拉满，有输出要求。纯爱，阴湿感，被付出。'},
                {'name': '朱懿安', 'gender': 'male', 'desc': '恋陪位。铁血事业脑，重家国，但不择手段。爱情被付出，是妥妥的"渣男"，会将心爱之人当作棋子利用。'},
                {'name': '苏月白', 'gender': 'male', 'desc': '铁血家国脑，高智商，权谋能力拉满。类谋士，以臣子救国的方向展开，有君臣线。爱情跟家国几乎是齐平的，偏付出，双向奔赴。'},
                {'name': '朱懿珩', 'gender': 'male', 'desc': 'NPC类父位。阴暗爬行的小可怜，吃委屈那将是绝杀。有家国的坚守，但更偏向权力和守护爱人。吃纯爱。'}
            ],
            'intro': '明朝为背景，六名角色卷入"窃国为私谓之为贼，窃国为公谓之为君"的权谋漩涡，在君臣忠义、师徒传承与小人物觉醒中，体验双恋陪互动与极致反转'
        },
        'qingjunruweng': {
            'title': '请君入瓮 - 角色介绍',
            'roles': [
                {'name': '皇甫司瑶', 'gender': 'female', 'desc': '女生角色。群像＞父亲线（爱情伪骨科），适合吃群像，吃父亲线的玩家拿！爱情伪骨科，被付出。'},
                {'name': '皇甫赤华', 'gender': 'female', 'desc': '女生角色。主仆＞姨妈（类母线），道德感高的玩家不建议，爱情线较重，喜欢爽文的玩家可以拿。'},
                {'name': '步婉凝', 'gender': 'female', 'desc': '女生角色。家国＝友情（爱情青梅竹马），接受不了前期与多个男性有情感关系的玩家不建议拿。'},
                {'name': '皇甫景澄', 'gender': 'male', 'desc': '男生角色。群像＞舅父（类父线）、母亲，适合吃群像，责任感较重的玩家拿，爱情大付出位。'},
                {'name': '雍门清夜', 'gender': 'male', 'desc': '男生角色。个人沉浸＞主仆，新手玩家不建议拿！文本逻辑性强，大部分个人沉浸，抗压。'},
                {'name': '凌少禹', 'gender': 'male', 'desc': '男生角色。兄弟＝家国＝嬷嬷（主仆类母线），吃哥哥线及家国的可以拿，前期不接受女A男O的不要拿。'}
            ],
            'intro': '六名角色卷入权谋漩涡，在虚实交织的瓮中局里经历三次身份反转，体验"白切黑"人设与禁忌之恋，最终直面"破局成饵"的人性考验'
        },
        'queluo': {
            'title': '阙落 - 角色介绍',
            'roles': [
                {'name': '孝瓘', 'gender': 'male', 'desc': '男。主情感线：兄长（大哥孝瑜，二哥孝衍，三哥孝琬），爹，主仆（子慎），责任，亏欠很多的爱情。主沉浸：被付出，亏欠，遗憾，较为自我。'},
                {'name': '须拔', 'gender': 'male', 'desc': '男。主情感线：强制拉扯式爱情，姐姐，母亲。主沉浸：背负，不甘，付出，决绝，成全。'},
                {'name': '步落稽', 'gender': 'male', 'desc': '男。主情感线：救赎式爱情，君臣线（和士开）。主沉浸：隐忍，亲情背刺，被抛下，孤独。'},
                {'name': '咏絮', 'gender': 'female', 'desc': '女。主沉浸：委屈，付出，被保护（哥哥），决绝，歇斯底里（喜欢输出的玩家能吃委屈首推咏絮哦）。'},
                {'name': '泱泱', 'gender': 'female', 'desc': '女。主情感线：相爱相恨的极致拉扯爱情，主仆（方刃雪），母亲（崔景春），爹爹（郑述祖），祖母，家族，姐控。主情绪：被付出，被爱，被保护，洒脱自由，成长。'},
                {'name': '子姝', 'gender': 'female', 'desc': '女。主情感线：国仇家恨，弟弟，爹，被坚定选择的爱情，姐妹。主情绪：爽（可以给喜欢输出飙戏的玩家），懊悔，隐忍，被很好的爱着，被保护，被付出。'}
            ],
            'intro': '以"禽兽王朝"为背景，六名皇族权贵子弟在朝堂倾轧与爱恨纠葛中，揭开被历史掩埋的极致虐恋与权力阴谋。历史人物化身剧中角色，玩家将亲历那段荒诞又悲凉的乱世风云，在权谋与情感的撕扯中，体验"阙落"二字背后的深意——宫阙倾颓，繁华落尽，唯有真情与执念穿越历史尘埃，留下一声叹息。'
        },
        'tonggui': {
            'title': '同归 - 角色介绍',
            'roles': [
                {'name': '顾成文', 'gender': 'male', 'desc': '男。姐姐线（NPC谢昙）＞事业线＞爱情线（伪爱情CP柳月明）输出位、爽文男主、整活玩家。雷点：不能接受自己小丑，不能接受姐姐线共享。'},
                {'name': '无尘', 'gender': 'male', 'desc': '男。爱情线（女帝）＝妹妹线（柳月明）NPC恋爱位、大付出妹妹线。雷点：开不起玩笑的不能玩、不能接受自己小丑、被背刺。'},
                {'name': '李星一', 'gender': 'male', 'desc': '男。爱情线（CP季青枫）＞兄弟线（NPC上官誉）＞群像线（水果军团）纯爱战士、大付出爱情位、情侣位。雷点：爱情不能付出绝对不能玩。'},
                {'name': '雁流霜', 'gender': 'female', 'desc': '女。爱情线（NPC上官誉）＞姐妹线（NPC女帝）NPC爽谈位。雷点：无。'},
                {'name': '柳月明', 'gender': 'female', 'desc': '女。姐妹线（NPC谢昙）＝事业线＞哥哥线（利用哥哥无尘）〉爱情线（伪爱情CP顾成文）大女主位，吃愧疚线。雷点：不能接受同性陪伴位、不能没有爱情。'},
                {'name': '季青枫', 'gender': 'female', 'desc': '女。爱情线（CP李星一）＞群像线（水果军团）＝爹线＞姐妹线（恨姐姐NPC女帝）情侣位、嚣张跋扈的公主，女帝对抗线、喜欢委屈线、爱情被付出。雷点：不能受委屈。'}
            ],
            'intro': '在"女子为尊"的架空曌国，六名角色卷入皇权传承的漩涡，在女帝大女主的威压下，蚍蜉撼树，相爱之人能否同去同归'
        }
    }
    
    # 构建新的角色数据JavaScript对象
    js_role_data = "        // 角色简介弹窗数据\n        const roleData = {\n"
    
    for script_id, data in role_data.items():
        js_role_data += f"            {script_id}: {{\n"
        js_role_data += f"                title: \"{data['title']}\",\n"
        js_role_data += "                roles: [\n"
        
        for role in data['roles']:
            gender_label = "male" if "男" in role['gender'] or role['gender'] == "male" else "female"
            desc_clean = role['desc'].replace('"', "'").replace('\n', ' ')
            js_role_data += f"                    {{ name: \"{role['name']}\", gender: \"{gender_label}\", desc: \"{desc_clean}\" }},\n"
        
        js_role_data += "                ],\n"
        intro_clean = data['intro'].replace('"', "'").replace('\n', ' ')
        js_role_data += f"                intro: \"{intro_clean}\"\n"
        js_role_data += "            },\n"
    
    js_role_data += "        };\n"
    
    # 查找并替换原有的角色数据部分
    # 查找从 "        // 角色简介弹窗数据" 到 "        };\n\n        // 显示角色简介弹窗"
    pattern = r'(\s+// 角色简介弹窗数据\n\s+const roleData = \{.*?\};\n\n\s+// 显示角色简介弹窗)'
    
    new_content = f'        // 角色简介弹窗数据\n        const roleData = {json.dumps(role_data, ensure_ascii=False, indent=12)};\n\n        // 显示角色简介弹窗'
    
    # 使用正则表达式替换
    result = re.sub(pattern, new_content, html_content, flags=re.DOTALL)
    
    if result == html_content:
        print("[WARNING] 未找到原有的角色数据，可能需要手动插入")
        # 尝试在 "dayan: {" 之后插入新数据
        insert_pos = html_content.find("dayan: {")
        if insert_pos != -1:
            # 先删除原有的角色数据
            start_pos = html_content.find("        // 角色简介弹窗数据")
            end_pos = html_content.find("};\n\n        // 显示角色简介弹窗") + 3
            
            if start_pos != -1 and end_pos != -1:
                result = html_content[:start_pos] + new_content + html_content[end_pos:]
            else:
                print("[ERROR] 无法确定替换位置")
                return html_content
        else:
            print("[ERROR] 无法找到插入位置")
            return html_content
    
    return result

def main():
    """主函数"""
    print("开始更新角色简介数据...")
    
    # 读取HTML文件
    html_content = read_html_file()
    print(f"[OK] 读取HTML文件完成，文件大小: {len(html_content)} 字符")
    
    # 更新角色数据
    updated_content = update_role_data(html_content)
    
    # 如果内容有变化，写入文件
    if updated_content != html_content:
        write_html_file(updated_content)
        print("[OK] 角色数据更新完成！")
        print(f"[INFO] 更新了 {len(updated_content) - len(html_content)} 个字符")
    else:
        print("[WARNING] 内容未发生变化")
    
    print("更新完成！")

if __name__ == "__main__":
    main()