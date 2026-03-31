export interface Script {
  id: string
  name: string
  subtitle?: string
  cover?: string
  type: 'city' // 城限
  tags: string[]
  players: {
    total: number
    male: number
    female: number
    description: string
  }
  duration: string
  staff: {
    dm: number
    npc: number
    description: string
  }
  synopsis: string
  highlights: string[]
  difficulty: 'easy' | 'medium' | 'hard' | 'expert'
  style: string[]
  dmManualPath: string
  dmManualName: string
  roles?: { name: string; gender: 'male' | 'female' | 'any'; desc: string }[]
}

export const scripts: Script[] = [
  {
    id: 'dayanzishang',
    name: '大宴之上',
    subtitle: '六人城限·沉浸演绎',
    type: 'city',
    tags: ['古风', '情感', '演绎', '沉浸', '恋陪'],
    players: {
      total: 6,
      male: 2,
      female: 4,
      description: '2男4女（含NPC刘昭月）',
    },
    duration: '10h+',
    staff: {
      dm: 2,
      npc: 2,
      description: '主DM兰辞（男）、梵音（男）、神使（女）各一名',
    },
    synopsis:
      '大安朝，圣上重文轻武、体弱多病，关外敌人趁机入侵，国家危在旦夕。刘昭月、刘泠雪、苏清梦……六位命运交织的女子与男儿，在权谋与情感的漩涡中各自抉择。正义、背叛、守护、牺牲，一场大宴，掩尽天下风云。',
    highlights: [
      '超强沉浸演绎，NPC深度陪伴',
      '多线CP情感体验',
      '家国大义与儿女情长交织',
      '爆闪灯、烟雾等特效演出',
      '分幕分会场多空间体验',
    ],
    difficulty: 'hard',
    style: ['古风宫廷', '情感演绎', '家国情怀', '权谋'],
    dmManualPath: 'C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/《大宴之上》DM手册重庆市 墨染.pdf',
    dmManualName: '《大宴之上》DM手册（主版）',
    roles: [
      { name: '刘昭月', gender: 'female', desc: '大将军之女，正义凛然，是众人守护的光' },
      { name: '刘泠雪', gender: 'female', desc: '道德感低，以自我为中心，偏执爱恋' },
      { name: '苏清梦', gender: 'female', desc: '内核坚定，纯爱至上，先婚后爱成长线' },
      { name: '苏星禾', gender: 'female', desc: '心思细腻，强大却内耗，伪骨科设定' },
      { name: '苏宴卿', gender: 'male', desc: '运筹帷幄，为爱不择手段，双强联手' },
      { name: '刘祈之', gender: 'male', desc: '扮猪吃老虎，纯爱恋爱脑，成长型王者' },
    ],
  },
  {
    id: 'dayanzishang_4dm',
    name: '大宴之上（4DM版）',
    subtitle: '墨染定制·四DM沉浸版',
    type: 'city',
    tags: ['古风', '情感', '演绎', '沉浸', '恋陪', '4DM特供'],
    players: {
      total: 6,
      male: 2,
      female: 4,
      description: '2男4女（墨染城限定制版本）',
    },
    duration: '10h+',
    staff: {
      dm: 4,
      npc: 0,
      description: '4名DM联合演绎，角色扮演升级版',
    },
    synopsis:
      '墨染剧本杀专属定制版本《大宴之上》4DM升级演绎。在原版基础上新增第四位主演DM，演绎密度更高，互动更加细腻深入，为玩家提供前所未有的沉浸体验。',
    highlights: [
      '4名DM同场演绎，体验翻倍',
      '墨染城限专属定制',
      '更丰富的场景演绎',
      '升级版本更适合老用户回玩',
    ],
    difficulty: 'expert',
    style: ['古风宫廷', '情感演绎', '沉浸升级'],
    dmManualPath: 'C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/墨染《大宴之上》4DM版手册V2（最终定稿版）(3).pdf',
    dmManualName: '墨染《大宴之上》4DM版手册V2',
  },
  {
    id: 'wanren',
    name: '万仞青山听水寒',
    subtitle: '古风仙侠·多线情感',
    type: 'city',
    tags: ['古风', '仙侠', '情感', '演绎', '多幕'],
    players: {
      total: 6,
      male: 3,
      female: 3,
      description: '3男3女',
    },
    duration: '8h-9h',
    staff: {
      dm: 1,
      npc: 2,
      description: '主DM一名 + NPC若干',
    },
    synopsis:
      '《万仞青山听水寒》是一个古风仙侠情感类剧本，作者淘之夭夭创作。青山翠谷间，仙侠儿女的爱恨情仇，千年情缘一朝揭晓。前尘、往事、故人……五幕跌宕，于万仞山间聆听一曲哀而不伤的水寒之调。',
    highlights: [
      '古风仙侠世界观完整丰富',
      '五幕推进，层层递进',
      '多条情感线并行',
      '作者淘之夭夭倾心之作',
    ],
    difficulty: 'medium',
    style: ['古风仙侠', '情感', '多线叙事'],
    dmManualPath: 'C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/《万仞》主持人手册FW868.pdf',
    dmManualName: '《万仞青山听水寒》主持人手册',
  },
  {
    id: 'liufang',
    name: '流芳',
    subtitle: '江阴八十一日·家国情怀',
    type: 'city',
    tags: ['历史改编', '家国', '情感', '演绎', '正剧', '沉浸'],
    players: {
      total: 6,
      male: 3,
      female: 3,
      description: '3男3女',
    },
    duration: '6.5h-7h',
    staff: {
      dm: 1,
      npc: 3,
      description: '主DM（男，扮陈明遇）+ NPC3名：方亨（男）、阎应元（男）、杨小池（女）',
    },
    synopsis:
      '以历史真实事件"江阴八十一日"为题材改编。明末清初，江阴城的百姓在典史陈明遇的带领下，于小家与大家中不断抉择与失去。这是一个关于守护、牺牲、家国情怀与儿女情长交织的故事。',
    highlights: [
      '取材历史真实事件，厚重感强',
      '三对CP情感线各具特色',
      '主DM扮演陈明遇深度带入',
      '泪点密集，情绪张力极强',
      '禁止盲开，内测必须',
    ],
    difficulty: 'expert',
    style: ['历史改编', '家国情怀', '正剧', '情感演绎'],
    dmManualPath: 'C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/1_《流芳》主持人手册（终版）.pdf',
    dmManualName: '《流芳》组织者手册（终版）',
    roles: [
      { name: '陈稷', gender: 'male', desc: '爱情线+父亲线，活泼飙戏' },
      { name: '杨玉笙', gender: 'male', desc: '爱情线+姐姐线，搞怪活泼大男孩' },
      { name: '冯厚敦', gender: 'male', desc: '爱情线+家国线，内敛固执有担当' },
      { name: '陈阎芙蓉', gender: 'female', desc: '父亲线+宠物线，内向自卑易沉浸' },
      { name: '方圆', gender: 'female', desc: '爱情线+父亲线，活泼开朗能抗压' },
      { name: '赵晚舟', gender: 'female', desc: '伪骨科爱情线+事业线，成熟有责任感' },
    ],
  },
  {
    id: 'menglingjinianlian',
    name: '梦灵祈念时',
    subtitle: '奇幻推理·灵媒世界',
    type: 'city',
    tags: ['奇幻', '推理', '灵媒', '现代', '悬疑'],
    players: {
      total: 6,
      male: 3,
      female: 3,
      description: '3男3女（龙马、平吉、八喜 / 木夏、悠纪、铃梦）',
    },
    duration: '7h-8h',
    staff: {
      dm: 1,
      npc: 0,
      description: '主DM一名（扮米田三利灵媒师）',
    },
    synopsis:
      '2006年，日本神鹿岳深山发生持续三天的大火，山上居民几乎全部罹难。灵媒师米田三利协同警方调查，在场六人记忆缺失，魂契交错，真相扑朔迷离……每一段记忆都可能是借来的谎言。',
    highlights: [
      '独特"魂契"世界观设定',
      '记忆重建推理体验',
      '现代日式奇幻风格',
      '灵媒师DM角色沉浸感极强',
      '多重真相层层拨开',
    ],
    difficulty: 'hard',
    style: ['现代奇幻', '推理悬疑', '日式风格', '灵媒'],
    dmManualPath: 'C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/梦灵祈念时·主持人手册 重庆沙坪坝区图灵(1).pdf',
    dmManualName: '梦灵祈念时·主持人手册',
    roles: [
      { name: '龙马', gender: 'male', desc: '正丰街阳光大男孩，知名花贩' },
      { name: '平吉', gender: 'male', desc: '青介学园史上成绩最好的毕业生' },
      { name: '八喜', gender: 'male', desc: '浅海杂货铺小老板，年纪最小' },
      { name: '木夏', gender: 'female', desc: '知名木匠关门弟子，正丰街三人组' },
      { name: '悠纪', gender: 'female', desc: '神星阁大小姐，眼眸中有光亮' },
      { name: '铃梦', gender: 'female', desc: '神秘女孩，与众不同的气质' },
    ],
  },
  {
    id: 'qieyuntai',
    name: '窃云台',
    subtitle: '家国传承·明朝架空正剧',
    type: 'city',
    tags: ['古风', '家国', '正剧', '演绎', '权谋', '传承'],
    players: {
      total: 6,
      male: 1,
      female: 5,
      description: '女多男少（含NPC，以女性玩家为主）',
    },
    duration: '8h-9h',
    staff: {
      dm: 1,
      npc: 2,
      description: '主DM（女，扮柳送君）+ 朱懿辰（男）+ 九千岁（男）',
    },
    synopsis:
      '明朝架空，教坊司女子柳送君与年轻王爷朱懿辰、权倾朝野的九千岁之间，牵扯出一段惊天阴谋与家国之殇。剧本重家国，没有疯批，吵架也只是立场不同，是一部正剧风架空权谋大戏。',
    highlights: [
      '正剧风，尊重历史规律',
      '大量飙戏气口，上限极高',
      '柳送君成长弧线完整动人',
      '家国传承主题深刻',
      '仰止作品，品质保障',
    ],
    difficulty: 'hard',
    style: ['古风架空', '正剧权谋', '家国传承', '女性视角'],
    dmManualPath: 'C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/窃云台.pdf',
    dmManualName: '窃云台主持人手册',
    roles: [
      { name: '柳送君（NPC）', gender: 'female', desc: '教坊司女，温柔破碎，由胆怯到勇敢' },
      { name: '朱懿辰（NPC）', gender: 'male', desc: '年轻王爷，温润如玉，翩翩公子' },
      { name: '九千岁（NPC）', gender: 'male', desc: '窃国大反派，权倾朝野，阴鸷' },
    ],
  },
  {
    id: 'qingjunruweng',
    name: '请君入瓮',
    subtitle: '古风穿书·架空情感',
    type: 'city',
    tags: ['古风', '穿书', '情感', '架空', '奇幻', '喜剧'],
    players: {
      total: 6,
      male: 3,
      female: 3,
      description: '3男3女',
    },
    duration: '7h-7.5h',
    staff: {
      dm: 3,
      npc: 0,
      description: '3名DM（2男1女）：卓惟言（假宦官）、无忧国师（女）、皇甫炎',
    },
    synopsis:
      '作者司瑶写了一本穿越小说《请君入瓮》，然而笔下的人物竟纷纷"穿书"成真……古风架空世界里，穿书者与书中人命运交织，真相扑朔迷离。叮！穿书有风险，宿主请仔细阅读。',
    highlights: [
      '穿书题材新颖有趣',
      '古风架空世界观完整',
      '男女恋陪位双线体验',
      '卓惟言（假宦官）人设精彩',
      '玩物立志×东方剧制联合出品',
    ],
    difficulty: 'medium',
    style: ['古风穿书', '架空情感', '轻松有趣'],
    dmManualPath: 'C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/请君入瓮主持人手册正式版.pdf',
    dmManualName: '《请君入瓮》主持人手册正式版',
    roles: [
      { name: '皇甫司瑶', gender: 'female', desc: '《请君入瓮》小说作者，穿书主角' },
      { name: '步婉凝', gender: 'female', desc: '书中人，恋陪位' },
      { name: '凌少禹', gender: 'male', desc: '书中人，恋陪位' },
    ],
  },
  {
    id: 'sangti_queruo',
    name: '三体·阙落',
    subtitle: '科幻硬核·重庆城限',
    type: 'city',
    tags: ['科幻', '硬核', '三体宇宙', '重庆城限', '烧脑'],
    players: {
      total: 6,
      male: 3,
      female: 3,
      description: '3男3女',
    },
    duration: '8h-9h',
    staff: {
      dm: 1,
      npc: 1,
      description: '主DM一名',
    },
    synopsis:
      '基于《三体》宇宙改编的重庆城限剧本。黑暗森林法则笼罩下的人类文明，面对降维打击的绝望与抗争。阙落，是文明的终结，还是新生的契机？在三体宇宙的宏大叙事中，六个普通人的命运与星际文明交织。',
    highlights: [
      '三体宇宙官方授权改编',
      '重庆城限专属',
      '硬科幻世界观',
      '宏大叙事与个人情感结合',
      '烧脑推理体验',
    ],
    difficulty: 'expert',
    style: ['科幻', '硬核推理', '宏大叙事'],
    dmManualPath: 'C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/重庆三体 阙落手册.pdf',
    dmManualName: '重庆三体·阙落手册',
  },
  {
    id: 'sangti_ruGu',
    name: '三体·如故',
    subtitle: '架空古风·情感人设类',
    type: 'city',
    tags: ['古风', '情感', '人设', '架空', '重庆城限', '6人'],
    players: {
      total: 6,
      male: 3,
      female: 3,
      description: '6人（三男三女）',
    },
    duration: '8h-9h',
    staff: {
      dm: 3,
      npc: 0,
      description: 'DM:1男+1女，NPC:1男（黑衣人控场）',
    },
    synopsis:
      '池鱼笼鸟，自怜自哀。求之不得，恨海难填。他们机关算尽强求来的命运，紧紧缠绕在一起——哪怕紧到相看两厌，也要掐着对方的脖子说：好啊，黄泉相见。可当壁阴倒转、时间重回，才发现他们还是，相思如故。',
    highlights: [
      '情感人设类剧本，体验为王',
      '三男三女多线情感交织',
      '激进风格，任何心动行为皆可发生',
      '东方剧制出品，品质保障',
      '黑衣人控场机制独特',
    ],
    difficulty: 'hard',
    style: ['架空古风', '情感人设', '激进风格'],
    dmManualPath: 'C:/Users/admin/Documents/xwechat_files/wxid_jf8tgty087vf22_bb81/msg/file/2026-04/重庆三体如故组织者手册最终版本(1).pdf',
    dmManualName: '三体·如故组织者手册（最终版）',
    roles: [
      { name: '袁玠', gender: 'male', desc: '智谋之士，权谋线' },
      { name: '连世疆', gender: 'male', desc: '情感深沉，关键人物' },
      { name: '卫上黎', gender: 'male', desc: '爱恨交织，动向关键' },
      { name: '卫子谣', gender: 'female', desc: '情感丰富，多线交汇' },
      { name: '李文瑙', gender: 'female', desc: '内心复杂，有自己的坚守' },
      { name: '梁以忱', gender: 'female', desc: '结局关键人物，情感收束' },
    ],
  },
]

export const tagColors: Record<string, string> = {
  '古风': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  '情感': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  '演绎': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  '沉浸': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  '恋陪': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  '历史改编': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  '家国': 'bg-red-500/20 text-red-300 border-red-500/30',
  '正剧': 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  '权谋': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  '仙侠': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  '奇幻': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  '推理': 'bg-green-500/20 text-green-300 border-green-500/30',
  '悬疑': 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30',
  '科幻': 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  '穿书': 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
  '人设': 'bg-lime-500/20 text-lime-300 border-lime-500/30',
  '重庆城限': 'bg-red-600/20 text-red-300 border-red-600/30',
  '4DM特供': 'bg-gold-600/20 text-amber-300 border-amber-600/30',
  '多幕': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  '烧脑': 'bg-orange-600/20 text-orange-300 border-orange-600/30',
  '喜剧': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  '6人': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
}

export const difficultyConfig = {
  easy: { label: '新手友好', color: 'text-green-400', bg: 'bg-green-500/20' },
  medium: { label: '标准难度', color: 'text-blue-400', bg: 'bg-blue-500/20' },
  hard: { label: '进阶挑战', color: 'text-orange-400', bg: 'bg-orange-500/20' },
  expert: { label: '高阶体验', color: 'text-red-400', bg: 'bg-red-500/20' },
}

export const allTags = [...new Set(scripts.flatMap(s => s.tags))]
