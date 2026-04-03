// 墨染之夏 - 音频管理系统
class AudioManager {
    constructor() {
        this.sfx = {};
        this.ambient = null;
        this.mp3 = null;
        this.currentMp3 = null;
        this.volume = {
            mp3: 0.7,
            sfx: 0.8,
            ambient: 0.4
        };
        this.muted = false;
        this.audioContext = null;
        this.initialized = false;
        this.currentMoodType = null;       // 当前是 mood 还是 scene
        this.currentMoodCategory = null;  // 当前播放的情绪分类
        this.currentEmotion = null;        // 当前情绪分类（joyful, melancholic等）
        this.currentSceneType = null;      // 当前场景类型（scriptshop, campus等）
        
        // ========================================
        // 音乐资源路径配置
        // ========================================
        this.audioPaths = {
            // ========================================
            // MP3音乐 - 按情绪/场景分类
            // ========================================
            mp3: {
                // ====================
                // 【情绪分类】情绪分类
                // ====================
                mood: {
                    // 轻松愉悦 - 明快、治愈、充满活力
                    // 适用：日常、校园、阳光场景
                    joyful: [
                        'audio/岭南小事-杨默依.mp3',
                        'audio/王睿卓+-+茶花开了.mp3'
                    ],
                    
                    // 平静状态 - 安静、平和、心如止水
                    // 适用：平静独处、思考、等待、空闲时刻
                    peaceful: [
                        'audio/久石让 - 菊次郎的夏天.mp3'
                    ],
                    
                    // 温馨浪漫 - 甜蜜、温暖、心跳加速
                    // 适用：浪漫互动、心动时刻、暧昧期
                    romantic: [
                        'audio/余佳运 - 和你.mp3',
                        'audio/颜人中+-+夏夜最后的烟火.mp3',
                        'audio/卢广仲 - 几分之几 (You Complete Me).mp3',
                        'audio/张碧晨 - 不要忘记我爱你.mp3'
                    ],
                    
                    // 伤感离别 - 忧伤、失落、回忆
                    // 适用：离别、遗憾、夜晚独白、虐心场景
                    melancholic: [
                        'audio/宋冬野 - 斑马，斑马.mp3',
                        'audio/印子月 - 落空.mp3',
                        'audio/夏天Alex - 不再联系.mp3',
                        'audio/下完这场雨-赵乃吉.mp3',
                        'audio/薛之谦+-+演员.mp3'
                    ],
                    
                    // 治愈温暖 - 温柔、治愈、释然
                    // 适用：治愈场景、释怀、结局
                    healing: [
                        'audio/久石让 - 菊次郎的夏天.mp3',
                        'audio/做個好人 - 说好不哭.mp3',
                        'audio/复乐园-呆呆破.mp3'
                    ],
                    
                    // 夜晚独白 - 安静、沉思、内心戏
                    // 适用：夜晚、宿舍独处、自我对话
                    nightfall: [
                        'audio/卢广仲 - 几分之几 (You Complete Me).mp3',
                        'audio/宋冬野 - 斑马，斑马.mp3'
                    ]
                },
                
                // ====================
                // 【场景分类】场景分类
                // ====================
                scene: {
                    // 日常校园 - 轻松活泼
                    campus: [
                        'audio/岭南小事-杨默依.mp3',
                        'audio/王睿卓+-+茶花开了.mp3'
                    ],
                    
                    // 剧本杀店 - 沉浸/温馨
                    scriptshop: [
                        'audio/复乐园-呆呆破.mp3',
                        'audio/卢广仲 - 几分之几 (You Complete Me).mp3',
                        'audio/岭南小事-杨默依.mp3'
                    ],
                    
                    // 宿舍夜晚 - 安静温馨/独处
                    dorm_night: [
                        'audio/卢广仲 - 几分之几 (You Complete Me).mp3',
                        'audio/余佳运 - 和你.mp3'
                    ],
                    
                    // 合租日常 - 轻松温馨
                    cohabitation: [
                        'audio/岭南小事-杨默依.mp3',
                        'audio/复乐园-呆呆破.mp3'
                    ],
                    
                    // 浪漫时刻 - 心跳加速
                    romantic: [
                        'audio/颜人中+-+夏夜最后的烟火.mp3',
                        'audio/余佳运 - 和你.mp3',
                        'audio/卢广仲 - 几分之几 (You Complete Me).mp3',
                        'audio/张碧晨 - 不要忘记我爱你.mp3'
                    ],
                    
                    // 离别场景 - 伤感
                    farewell: [
                        'audio/宋冬野 - 斑马，斑马.mp3',
                        'audio/夏天Alex - 不再联系.mp3',
                        'audio/印子月 - 落空.mp3',
                        'audio/下完这场雨-赵乃吉.mp3',
                        'audio/薛之谦+-+演员.mp3'
                    ],
                    
                    // 火锅聚餐 - 热闹温馨
                    hotpot: [
                        'audio/岭南小事-杨默依.mp3',
                        'audio/复乐园-呆呆破.mp3'
                    ],
                    
                    // 结局/制作名单 - 治愈收尾
                    ending: [
                        'audio/久石让 - 菊次郎的夏天.mp3',
                        'audio/做個好人 - 说好不哭.mp3',
                        'audio/复乐园-呆呆破.mp3'
                    ]
                },
                
                // ====================
                // 【角色主题】各角色专属音乐
                // ====================
                character: {
                    // 木星（肖童）- 夏夜浪漫
                    // 角色特点：阳光、温暖、陪伴感
                    muxin: [
                        'audio/颜人中+-+夏夜最后的烟火.mp3',
                        'audio/卢广仲 - 几分之几 (You Complete Me).mp3',
                        'audio/余佳运 - 和你.mp3'
                    ],
                    
                    // 龙信衡（谨言）- 温柔深情
                    // 角色特点：内敛、体贴、深情
                    longxinheng: [
                        'audio/余佳运 - 和你.mp3',
                        'audio/宋冬野 - 斑马，斑马.mp3',
                        'audio/张碧晨 - 不要忘记我爱你.mp3'
                    ],
                    
                    // 吴琊 - 轻松欢快
                    // 角色特点：幽默、阳光、活跃气氛
                    wuya: [
                        'audio/岭南小事-杨默依.mp3',
                        'audio/王睿卓+-+茶花开了.mp3'
                    ],
                    
                    // 甘志宇（方圆）- 温暖治愈
                    // 角色特点：细腻、温暖、专业
                    ganzhiyu: [
                        'audio/久石让 - 菊次郎的夏天.mp3',
                        'audio/复乐园-呆呆破.mp3',
                        'audio/做個好人 - 说好不哭.mp3'
                    ]
                },
                
                // ====================
                // 【剧情节点专用】关键场景配乐
                // ====================
                storyMoment: {
                    // 木星心动 - 第一次见面
                    muxin_firstmeet: 'audio/颜人中+-+夏夜最后的烟火.mp3',
                    
                    // 木星心动 - 共同演绎
                    muxin_acttogether: 'audio/卢广仲 - 几分之几 (You Complete Me).mp3',
                    
                    // 木星线 - 告白时刻
                    muxin_confession: 'audio/余佳运 - 和你.mp3',
                    
                    // 龙信衡线 - 温柔时刻
                    longxinheng_gentle: 'audio/余佳运 - 和你.mp3',
                    
                    // 龙信衡线 - 深情表白
                    longxinheng_confession: 'audio/张碧晨 - 不要忘记我爱你.mp3',
                    
                    // 龙信衡线 - 夜晚独白
                    longxinheng_nighttalk: 'audio/卢广仲 - 几分之几 (You Complete Me).mp3',
                    
                    // 吴琊线 - 欢乐日常
                    wuya_funny: 'audio/岭南小事-杨默依.mp3',
                    
                    // 吴琊线 - 释放压力
                    wuya_relax: 'audio/岭南小事-杨默依.mp3',
                    
                    // 甘志宇线 - 突破自我
                    ganzhiyu_breakthrough: 'audio/久石让 - 菊次郎的夏天.mp3',
                    
                    // 甘志宇线 - 温暖时刻
                    ganzhiyu_warm: 'audio/复乐园-呆呆破.mp3',
                    
                    // 合租火锅夜 - 温馨聚会
                    hotpot_night: 'audio/岭南小事-杨默依.mp3',
                    
                    // 离别场景 - 伤感
                    farewell: 'audio/宋冬野 - 斑马，斑马.mp3',
                    
                    // 结局 - 治愈
                    ending_healing: 'audio/久石让 - 菊次郎的夏天.mp3',
                    
                    // 制作名单
                    credits: 'audio/做個好人 - 说好不哭.mp3',
                    
                    // ====================
                    // 【夏晚线第一章配乐】
                    // ====================
                    // 岭南小事 - 日常轻松
                    xw_lingnan: 'audio/岭南小事-杨默依.mp3',
                    // 菊次郎的夏天 - 日常轻松
                    xw_jili: 'audio/久石让 - 菊次郎的夏天.mp3',
                    // 和你 - 心动时刻
                    xw_heni: 'audio/余佳运 - 和你.mp3',
                    // 落空 - 离别伤感
                    xw_luokong: 'audio/印子月 - 落空.mp3',
                    // 茶花开了 - 培训/聚餐
                    xw_chahua: 'audio/王睿卓+-+茶花开了.mp3',
                    // 夏夜最后的烟火 - 心动/离开
                    xw_xiaye: 'audio/颜人中+-+夏夜最后的烟火.mp3',
                    
                    // ====================
                    // 【周砚线第一章配乐】
                    // ====================
                    // 岭南小事 - 街头/犹豫
                    zy_lingnan: 'audio/岭南小事-杨默依.mp3',
                    // 菊次郎的夏天 - 日常温暖
                    zy_jili: 'audio/久石让 - 菊次郎的夏天.mp3',
                    
                    // ====================
                    // 【夏晚线第三章配乐】
                    // ====================
                    // 几分之几 - 木星线1-12
                    xw_jifen: 'audio/卢广仲 - 几分之几 (You Complete Me).mp3',
                    // 演员 - 通用心动
                    xw_yanyuan: 'audio/薛之谦+-+演员.mp3',
                    // 恋人 - 木星线22-33
                    xw_lianren: 'audio/恋人-李荣浩.mp3',
                    // 斑马 - 谨言线1-5
                    xw_banma: 'audio/宋冬野 - 斑马，斑马.mp3',
                    // 说好不哭 - 甘志宇线1-4
                    xw_shuohaobuku: 'audio/做個好人 - 说好不哭.mp3',
                    // 落空 - 吴琊线1-6
                    xw_luokong: 'audio/印子月 - 落空.mp3',
                    
                    // ====================
                    // 【夏晚线第二章扩展配乐】
                    // ====================
                    // 下完这场雨 - 1-11
                    xw_xiaowan: 'audio/下完这场雨-赵乃吉.mp3',
                    // 照片 - 12-27
                    xw_zhaopian: 'audio/单依纯 - 照片.mp3',
                    // 某年某月某天 - 28-33
                    xw_mounian: 'audio/颜人中 - 某年某月某天.mp3',
                    // 稻香 - 34-35
                    xw_daoxiang: 'audio/先锋Music 3D环绕音乐领导者 - 周杰伦 - 稻香.mp3.mp3',

                    // ====================
                    // 【夏晚线第四章配乐】
                    // ====================
                    // 红尘客栈 - 阿昊离开/离别
                    xw_hongchen: 'audio/周杰伦+-+红尘客栈.mp3',
                    // Dear D - 重逢/归来
                    xw_dear: 'audio/Dear+D+(亲爱的告诉你)-项睿娴.mp3',
                    // 不再联系 - 开放结局/离别
                    xw_buzai: 'audio/夏天Alex - 不再联系.mp3'
                }
            },
            
            // 环境音效
            ambient: {
                street: 'audio/ambient/street.wav',
                shop: 'audio/ambient/shop.wav',
                dorm: 'audio/ambient/dorm.wav',
                classroom: 'audio/ambient/classroom.wav',
                campus: 'audio/ambient/campus.wav',
                cafe: 'audio/ambient/cafe.wav',
                night: 'audio/ambient/night.wav'
            },
            
            // UI音效
            sfx: {
                click: 'audio/sfx/click.wav',
                hover: 'audio/sfx/hover.wav',
                select: 'audio/sfx/select.wav',
                next: 'audio/sfx/next.wav',
                back: 'audio/sfx/back.wav',
                notification: 'audio/sfx/notification.wav',
                save: 'audio/sfx/save.wav',
                start: 'audio/sfx/start.wav',
                error: 'audio/sfx/error.wav',
                // 情绪音效
                heartbeat: 'audio/sfx/heartbeat.wav',
                // 打字音效
                typing: 'audio/sfx/typing.wav'
            }
        };
        
        // ========================================
        // 场景音乐映射表（仅MP3）
        // ========================================
        // 播放优先级：mp3Moment > mp3Character > mp3Mood > mp3Scene
        // 情绪分类变化时切换音乐
        // ========================================
        this.sceneMoodMap = {
            // ========== 周砚线 第一章 ==========
            // 用户指定音乐配置：
            // 1-5: 岭南小事 | 6-25: 菊次郎的夏天
            // 【1-5】岭南小事
            'zy_1_1': { 
                mp3Moment: 'zy_lingnan',  // 路过商业街
                ambient: 'street' 
            },
            'zy_1_1_a': { 
                mp3Moment: 'zy_lingnan',  // 走进店里
                ambient: 'shop' 
            },
            'zy_1_1_a1': { 
                mp3Moment: 'zy_lingnan',  // 坦诚相告
                ambient: 'shop' 
            },
            'zy_1_1_a2': { 
                mp3Moment: 'zy_lingnan',  // 略有耳闻
                ambient: 'shop' 
            },
            'zy_1_1_b': { 
                mp3Moment: 'zy_lingnan',  // 记下联系方式
                ambient: 'street' 
            },
            // 【6-25】菊次郎的夏天
            'zy_1_2': { 
                mp3Moment: 'zy_jili',  // 室友的邀请
                ambient: 'dorm' 
            },
            'zy_1_2_a': { 
                mp3Moment: 'zy_jili',  // 密室逃脱
                ambient: 'street' 
            },
            'zy_1_2_b': { 
                mp3Moment: 'zy_jili',  // 婉拒邀请
                ambient: 'dorm' 
            },
            'zy_1_3': { 
                mp3Moment: 'zy_jili',  // 朋友推荐
                ambient: 'campus' 
            },
            'zy_1_3_a': { 
                mp3Moment: 'zy_jili',  // 第一次玩剧本杀
                ambient: 'shop' 
            },
            'zy_1_3_b': { 
                mp3Moment: 'zy_jili',  // 再次错过
                ambient: 'dorm' 
            },
            'zy_1_4': { 
                mp3Moment: 'zy_jili',  // 选修课组队
                ambient: 'campus' 
            },
            'zy_1_5': { 
                mp3Moment: 'zy_jili',  // 决定应聘
                ambient: 'street' 
            },
            'zy_1_6': { 
                mp3Moment: 'zy_jili',  // 初见店长
                ambient: 'shop' 
            },
            'zy_1_7': { 
                mp3Moment: 'zy_jili',  // 参观店铺
                ambient: 'shop' 
            },
            'zy_1_8': { 
                mp3Moment: 'zy_jili',  // 遇见木星
                ambient: 'shop' 
            },
            'zy_1_8_a': { 
                mp3Moment: 'zy_jili',  // 表达决心
                ambient: 'shop' 
            },
            'zy_1_8_b': { 
                mp3Moment: 'zy_jili',  // 询问细节
                ambient: 'shop' 
            },
            'zy_1_9': { 
                mp3Moment: 'zy_jili',  // 遇见方圆
                ambient: 'shop' 
            },
            'zy_1_9_a': { 
                mp3Moment: 'zy_jili',  // 表达敬佩
                ambient: 'shop' 
            },
            'zy_1_9_b': { 
                mp3Moment: 'zy_jili',  // 了解工作
                ambient: 'shop' 
            },
            'zy_1_10': { 
                mp3Moment: 'zy_jili',  // 遇见170
                ambient: 'shop' 
            },
            'zy_1_10_a': { 
                mp3Moment: 'zy_jili',  // 好奇询问
                ambient: 'shop' 
            },
            'zy_1_10_b': { 
                mp3Moment: 'zy_jili',  // 轻松话题
                ambient: 'shop' 
            },
            'zy_1_11': { 
                mp3Moment: 'zy_jili',  // 第一天工作
                ambient: 'shop' 
            },
            
            // ========== 夏晚线 第一章 ==========
            // 用户指定音乐配置：
            // 001-047: 岭南小事 | 048,050,052,054(推理本): 和你 | 049,051,053,055(情感本): 落空
            // 【001-047】岭南小事
            'xw_1_1': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_1_a': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_1_b': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_mystery': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_emotion': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_a_mystery': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_a_talk_mystery': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_a_talk_mystery_1': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_a_talk_mystery_2': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_a_talk_mystery_3': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_b_mystery': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_b_talk_mystery': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_b_talk_mystery_1': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_b_talk_mystery_2': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_b_talk_mystery_3': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_c_mystery': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_c_talk_mystery': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_c_talk_mystery_1': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_c_talk_mystery_2': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_c_talk_mystery_3': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_d_mystery': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_d_talk_mystery': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_d_talk_mystery_1': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_d_talk_mystery_2': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_d_talk_mystery_3': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_continue_mystery': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_a_emotion': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_a_talk_emotion': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_a_talk_emotion_1': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_a_talk_emotion_2': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_a_talk_emotion_3': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_b_emotion': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_b_talk_emotion': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_b_talk_emotion_1': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_b_talk_emotion_2': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_b_talk_emotion_3': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_c_emotion': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_c_talk_emotion': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_c_talk_emotion_1': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_c_talk_emotion_2': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_c_talk_emotion_3': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_d_emotion': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_d_talk_emotion': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_d_talk_emotion_1': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_d_talk_emotion_2': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_d_talk_emotion_3': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_1_2_continue_emotion': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            // 【048】推理本·初遇木星 - 和你
            'xw_1_3_a': { mp3Moment: 'xw_heni', ambient: 'shop' },
            // 【049】情感本·初遇橙子 - 落空
            'xw_1_3_b': { mp3Moment: 'xw_luokong', ambient: 'shop' },
            // 【050】推理本·离开店铺 - 和你
            'xw_1_4_a': { mp3Moment: 'xw_heni', ambient: 'street' },
            // 【051】情感本·离开店铺 - 落空
            'xw_1_4_b': { mp3Moment: 'xw_luokong', ambient: 'street' },
            // 【052】推理本·借伞 - 和你
            'xw_1_5_a': { mp3Moment: 'xw_heni', ambient: 'street' },
            // 【053】情感本·借伞 - 落空
            'xw_1_5_b': { mp3Moment: 'xw_luokong', ambient: 'street' },
            // 【054】推理本·离开店铺 - 和你
            'xw_1_6_a': { mp3Moment: 'xw_heni', ambient: 'street' },
            // 【055】情感本·离开店铺 - 落空
            'xw_1_6_b': { mp3Moment: 'xw_luokong', ambient: 'street' },
            
            // ========== 周砚线 第二章 ==========
            // 融入 - 继续使用菊次郎的夏天
            'zy_2_1': { 
                mp3Moment: 'zy_jili',  // 正式上班
                ambient: 'shop' 
            },
            'zy_2_1_a': { 
                mp3Moment: 'zy_jili',  // 熟悉环境
                ambient: 'shop' 
            },
            'zy_2_1_b': { 
                mp3Moment: 'zy_jili',  // 主动询问
                ambient: 'shop' 
            },
            'zy_2_2': { 
                mp3Moment: 'zy_jili',  // 学习带本
                ambient: 'shop' 
            },
            'zy_2_2_a': { 
                mp3Moment: 'zy_jili',  // 最重要的事
                ambient: 'shop' 
            },
            'zy_2_2_b': { 
                mp3Moment: 'zy_jili',  // 上手技巧
                ambient: 'shop' 
            },
            'zy_2_3': { 
                mp3Moment: 'zy_jili',  // 午餐时间
                ambient: 'shop' 
            },
            'zy_2_3_a': { 
                mp3Moment: 'zy_jili',  // 和170聊天
                ambient: 'shop' 
            },
            'zy_2_3_b': { 
                mp3Moment: 'zy_jili',  // 和方圆聊天
                ambient: 'shop' 
            },
            'zy_2_4': { 
                mp3Moment: 'zy_jili',  // 下午带本
                ambient: 'shop' 
            },
            'zy_2_5': { 
                mp3Moment: 'zy_jili',  // 城限情感本
                ambient: 'shop' 
            },
            'zy_2_5_a': { 
                mp3Moment: 'zy_jili',  // 阅读剧本
                ambient: 'shop' 
            },
            'zy_2_5_b': { 
                mp3Moment: 'zy_jili',  // 木星的感受
                ambient: 'shop' 
            },
            'zy_2_6': { 
                mp3Moment: 'zy_jili',  // 下班时光
                ambient: 'shop' 
            },
            'zy_2_7': { 
                mp3Moment: 'zy_jili',  // 店长的话
                ambient: 'shop' 
            },
            'zy_2_8': { 
                mp3Moment: 'zy_jili',  // 融入
                ambient: 'shop' 
            },
            
            // ========== 夏晚线 第二章 ==========
            // 还伞入口 - 菊次郎的夏天
            'xw_2_1': { mp3Moment: 'xw_jili', ambient: 'dorm' },
            'xw_2_1_xiaotong': { mp3Moment: 'xw_jili', ambient: 'shop' },
            'xw_2_1_longxinheng': { mp3Moment: 'xw_jili', ambient: 'shop' },
            'xw_2_1_ganzhiyu': { mp3Moment: 'xw_jili', ambient: 'shop' },
            'xw_2_1_wuya': { mp3Moment: 'xw_jili', ambient: 'shop' },
            'xw_2_1_suxinyue': { mp3Moment: 'xw_jili', ambient: 'shop' },
            'xw_2_reinvite': { mp3Moment: 'xw_jili', ambient: 'dorm' },
            // 留下阶段 - 岭南小事
            'xw_2_1_stay': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_2_1_leave': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            'xw_2_1_accept': { mp3Moment: 'xw_lingnan', ambient: 'shop' },
            // 培训阶段 - 茶花开了
            'xw_2_2': { mp3Moment: 'xw_chahua', ambient: 'shop' },
            'xw_2_2a': { mp3Moment: 'xw_chahua', ambient: 'shop' },
            'xw_2_2_free': { mp3Moment: 'xw_chahua', ambient: 'shop' },
            'xw_2_2_suxinyue': { mp3Moment: 'xw_chahua', ambient: 'shop' },
            'xw_2_2_chengzi': { mp3Moment: 'xw_chahua', ambient: 'shop' },
            'xw_2_2_yuhaitong': { mp3Moment: 'xw_chahua', ambient: 'shop' },
            'xw_2_2_xiaotong': { mp3Moment: 'xw_chahua', ambient: 'shop' },
            'xw_2_2_longxinheng': { mp3Moment: 'xw_chahua', ambient: 'shop' },
            'xw_2_2_ganzhiyu': { mp3Moment: 'xw_chahua', ambient: 'shop' },
            'xw_2_2_wuya': { mp3Moment: 'xw_chahua', ambient: 'shop' },
            // 测本阶段 - 夏夜最后的烟火
            'xw_2_3': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            'xw_2_3_free': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            'xw_2_3_suxinyue': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            'xw_2_3_chengzi': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            'xw_2_3_yuhaitong': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            'xw_2_3_xiaotong': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            'xw_2_3_longxinheng': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            'xw_2_3_ganzhiyu': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            'xw_2_3_wuya': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            // 聚餐阶段 - 夏夜最后的烟火
            'xw_2_4': { mp3Moment: 'xw_xiaye', ambient: 'restaurant' },
            'xw_2_4a': { mp3Moment: 'xw_xiaye', ambient: 'restaurant' },
            'xw_2_4b': { mp3Moment: 'xw_xiaye', ambient: 'restaurant' },
            'xw_2_4_free': { mp3Moment: 'xw_xiaye', ambient: 'restaurant' },
            'xw_2_4_chengzi': { mp3Moment: 'xw_xiaye', ambient: 'restaurant' },
            'xw_2_4_suxinyue': { mp3Moment: 'xw_xiaye', ambient: 'restaurant' },
            'xw_2_5': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            'xw_2_5a': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            // 心动/日常/离开 - 夏夜最后的烟火
            'xw_2_6': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            'xw_2_6a': { mp3Moment: 'xw_xiaye', ambient: 'street' },
            'xw_2_6b': { mp3Moment: 'xw_xiaye', ambient: 'dorm' },
            'xw_2_6c': { mp3Moment: 'xw_xiaye', ambient: 'dorm' },
            'xw_2_bad_end': { mp3Moment: 'xw_luokong', ambient: 'street' },
            'xw_2_end': { mp3Moment: 'xw_xiaye', ambient: 'street' },
            // ========== 夏晚线 第二章扩展 ==========
            // 【1-11】下完这场雨
            'xw_2_9': { mp3Moment: 'xw_xiaowan', ambient: 'street' },
            'xw_2_9_a': { mp3Moment: 'xw_xiaowan', ambient: 'street' },
            'xw_2_9_b': { mp3Moment: 'xw_xiaowan', ambient: 'phone' },
            'xw_2_9_1': { mp3Moment: 'xw_xiaowan', ambient: 'shop' },
            'xw_2_9_1_a': { mp3Moment: 'xw_xiaowan', ambient: 'shop' },
            'xw_2_9_1_b': { mp3Moment: 'xw_xiaowan', ambient: 'shop' },
            'xw_2_9_1_b_a': { mp3Moment: 'xw_xiaowan', ambient: 'shop' },
            'xw_2_9_1_b_b': { mp3Moment: 'xw_xiaowan', ambient: 'shop' },
            'xw_2_9_1_c': { mp3Moment: 'xw_xiaowan', ambient: 'shop' },
            'xw_2_9_1_c_a': { mp3Moment: 'xw_xiaowan', ambient: 'shop' },
            'xw_2_9_1_c_b': { mp3Moment: 'xw_xiaowan', ambient: 'shop' },
            // 【12-27】照片
            'xw_2_10': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_10_a': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_10_b': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_11': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_11_suxinyue': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_11_yuhaitong': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_11_look': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_12': { mp3Moment: 'xw_zhaopian', ambient: 'restaurant' },
            'xw_2_12_ganzhiyu': { mp3Moment: 'xw_zhaopian', ambient: 'restaurant' },
            'xw_2_12_read': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_13': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_13_a': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_13_b': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_13_c': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_13_d': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_13_e': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_13_e_a': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_13_e_b': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_14': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_14_a': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            'xw_2_14_b': { mp3Moment: 'xw_zhaopian', ambient: 'shop' },
            // 【28-33】某年某月某天
            'xw_2_15': { mp3Moment: 'xw_mounian', ambient: 'shop' },
            'xw_2_15_a': { mp3Moment: 'xw_mounian', ambient: 'shop' },
            'xw_2_15_b': { mp3Moment: 'xw_mounian', ambient: 'street' },
            'xw_2_16': { mp3Moment: 'xw_mounian', ambient: 'shop' },
            'xw_2_16_a': { mp3Moment: 'xw_mounian', ambient: 'shop' },
            'xw_2_16_b': { mp3Moment: 'xw_mounian', ambient: 'shop' },
            // 【34-35】稻香
            'xw_2_17': { mp3Moment: 'xw_daoxiang', ambient: 'shop' },
            'xw_2_18': { mp3Moment: 'xw_daoxiang', ambient: 'shop' },
            
            // ========== 合租日常线 ==========
            'col_1_1': { 
                mp3Scene: 'cohabitation',  // 合租第一天
                ambient: 'dorm' 
            },
            'col_hotpot_1': { 
                mp3Scene: 'hotpot',  // 火锅聚餐 - 热闹温馨
                ambient: 'dorm' 
            },
            'col_hotpot_2': { 
                mp3Scene: 'hotpot',  // 火锅夜谈 - 深夜交心
                ambient: 'night' 
            },
            
            // ========== 夏晚线 第三章 ==========
            // 【木星线】1-12:几分之几 13-21:演员 22-33:恋人
            'xw_3_1': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_1_a': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_1_b': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_2': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_2_a': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_2_b': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_3': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_3_a': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_3_b': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_4': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_4_a': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_4_b': { mp3Moment: 'xw_jifen', ambient: 'shop' },
            'xw_3_5': { mp3Moment: 'xw_yanyuan', ambient: 'shop' },
            'xw_3_5_a': { mp3Moment: 'xw_yanyuan', ambient: 'shop' },
            'xw_3_5_b': { mp3Moment: 'xw_yanyuan', ambient: 'shop' },
            'xw_3_6': { mp3Moment: 'xw_yanyuan', ambient: 'shop' },
            'xw_3_6_a': { mp3Moment: 'xw_yanyuan', ambient: 'shop' },
            'xw_3_6_b': { mp3Moment: 'xw_yanyuan', ambient: 'shop' },
            'xw_3_7': { mp3Moment: 'xw_yanyuan', ambient: 'shop' },
            'xw_3_7_a': { mp3Moment: 'xw_yanyuan', ambient: 'shop' },
            'xw_3_7_b': { mp3Moment: 'xw_yanyuan', ambient: 'shop' },
            'xw_3_8': { mp3Moment: 'xw_lianren', ambient: 'shop' },
            'xw_3_8_a': { mp3Moment: 'xw_lianren', ambient: 'shop' },
            'xw_3_8_b': { mp3Moment: 'xw_lianren', ambient: 'shop' },
            'xw_3_9': { mp3Moment: 'xw_lianren', ambient: 'shop' },
            'xw_3_10': { mp3Moment: 'xw_lianren', ambient: 'street' },
            'xw_3_10_a': { mp3Moment: 'xw_lianren', ambient: 'shop' },
            'xw_3_10_b': { mp3Moment: 'xw_lianren', ambient: 'shop' },
            'xw_3_end_selector': { mp3Moment: 'xw_lianren', ambient: 'shop' },
            'xw_3_end_he': { mp3Moment: 'xw_lianren', ambient: null },
            'xw_3_end_open': { mp3Moment: 'xw_lianren', ambient: null },
            'xw_3_end_friend': { mp3Moment: 'xw_lianren', ambient: null },
            'xw_3_end_be': { mp3Moment: 'xw_lianren', ambient: null },
            
            // 【谨言线】1-5:斑马 7-19:演员
            'xw_3_lr_1': { mp3Moment: 'xw_banma', ambient: 'shop' },
            'xw_3_lr_2': { mp3Moment: 'xw_banma', ambient: 'shop' },
            'xw_3_lr_2_a': { mp3Moment: 'xw_banma', ambient: 'shop' },
            'xw_3_lr_2_a_detail': { mp3Moment: 'xw_banma', ambient: 'street' },
            'xw_3_lr_2_b': { mp3Moment: 'xw_banma', ambient: 'shop' },
            'xw_3_lr_3': { mp3Moment: 'xw_yanyuan', ambient: 'restaurant' },
            'xw_3_lr_4': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_lr_end_choice': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_lr_end_selector': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_lr_confess': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_lr_stay': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_lr_talk': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_lr_competition': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_lr_comp_leave': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_lr_comp_stay': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_lr_comp_join': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_lr_end_he': { mp3Moment: 'xw_yanyuan', ambient: null },
            'xw_3_lr_end_open': { mp3Moment: 'xw_yanyuan', ambient: null },
            'xw_3_lr_end_friend': { mp3Moment: 'xw_yanyuan', ambient: null },
            'xw_3_lr_end_be': { mp3Moment: 'xw_yanyuan', ambient: null },
            
            // 【甘志宇线】1-4:说好不哭 5-19:演员
            'xw_3_gz_1': { mp3Moment: 'xw_shuohaobuku', ambient: 'shop' },
            'xw_3_gz_2': { mp3Moment: 'xw_shuohaobuku', ambient: 'shop' },
            'xw_3_gz_2_a': { mp3Moment: 'xw_shuohaobuku', ambient: 'shop' },
            'xw_3_gz_2_b': { mp3Moment: 'xw_shuohaobuku', ambient: 'shop' },
            'xw_3_gz_3': { mp3Moment: 'xw_yanyuan', ambient: 'restaurant' },
            'xw_3_gz_4': { mp3Moment: 'xw_yanyuan', ambient: 'restaurant' },
            'xw_3_gz_4_detail': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_gz_end_choice': { mp3Moment: 'xw_yanyuan', ambient: 'restaurant' },
            'xw_3_gz_end_selector': { mp3Moment: 'xw_yanyuan', ambient: 'restaurant' },
            'xw_3_gz_confess': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_gz_stay': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_gz_help': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_gz_competition': { mp3Moment: 'xw_yanyuan', ambient: 'restaurant' },
            'xw_3_gz_comp_leave': { mp3Moment: 'xw_yanyuan', ambient: 'restaurant' },
            'xw_3_gz_comp_stay': { mp3Moment: 'xw_yanyuan', ambient: 'restaurant' },
            'xw_3_gz_comp_invite': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_gz_end_he': { mp3Moment: 'xw_yanyuan', ambient: null },
            'xw_3_gz_end_open': { mp3Moment: 'xw_yanyuan', ambient: null },
            'xw_3_gz_end_friend': { mp3Moment: 'xw_yanyuan', ambient: null },
            'xw_3_gz_end_be': { mp3Moment: 'xw_yanyuan', ambient: null },
            
            // 【吴琊线】1-6:落空 7-20:演员
            'xw_3_wy_1': { mp3Moment: 'xw_luokong', ambient: 'shop' },
            'xw_3_wy_2': { mp3Moment: 'xw_luokong', ambient: 'shop' },
            'xw_3_wy_2_a': { mp3Moment: 'xw_luokong', ambient: 'shop' },
            'xw_3_wy_2_b': { mp3Moment: 'xw_luokong', ambient: 'shop' },
            'xw_3_wy_3': { mp3Moment: 'xw_luokong', ambient: 'restaurant' },
            'xw_3_wy_4': { mp3Moment: 'xw_luokong', ambient: 'street' },
            'xw_3_wy_4_detail': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_wy_end_choice': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_wy_invite': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_wy_stay': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_wy_ask': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_wy_competition': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_wy_comp_leave': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_wy_comp_stay': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_wy_comp_invite': { mp3Moment: 'xw_yanyuan', ambient: 'street' },
            'xw_3_wy_end_selector': { mp3Moment: 'xw_yanyuan', ambient: null },
            'xw_3_wy_end_he': { mp3Moment: 'xw_yanyuan', ambient: null },
            'xw_3_wy_end_open': { mp3Moment: 'xw_yanyuan', ambient: null },
            'xw_3_wy_end_friend': { mp3Moment: 'xw_yanyuan', ambient: null },
            'xw_3_wy_end_be': { mp3Moment: 'xw_yanyuan', ambient: null },
            
            // ========== 夏晚线第四章：甜蜜与危机 ==========
            // 【第一部分：阿昊离开】红尘客栈
            'xw_4_1': { mp3Moment: 'xw_hongchen', ambient: 'shop' },
            'xw_4_1_b': { mp3Moment: 'xw_hongchen', ambient: 'shop' },
            'xw_4_1_c': { mp3Moment: 'xw_hongchen', ambient: 'shop' },
            'xw_4_1_c1': { mp3Moment: 'xw_hongchen', ambient: 'shop' },
            
            // 【第二部分：暑假群聊】和你
            'xw_4_2': { mp3Moment: 'xw_heni', ambient: 'dorm' },
            'xw_4_2_b': { mp3Moment: 'xw_heni', ambient: 'dorm' },
            'xw_4_2_c': { mp3Moment: 'xw_heni', ambient: 'dorm' },
            
            // 【第三部分：暑假私聊】和你
            'xw_4_3_xiaotong': { mp3Moment: 'xw_heni', ambient: 'street' },
            'xw_4_3_longxinheng': { mp3Moment: 'xw_heni', ambient: 'street' },
            'xw_4_3_ganzhiyu': { mp3Moment: 'xw_heni', ambient: 'street' },
            'xw_4_3_wuya': { mp3Moment: 'xw_heni', ambient: 'street' },
            
            // 【第四部分：9月返校】Dear D
            'xw_4_4': { mp3Moment: 'xw_dear', ambient: 'shop' },
            'xw_4_4_b': { mp3Moment: 'xw_dear', ambient: 'shop' },
            'xw_4_4_c': { mp3Moment: 'xw_dear', ambient: 'shop' },
            'xw_4_4_c1': { mp3Moment: 'xw_dear', ambient: 'shop' },
            
            // 【第五部分：告白选择】夏夜最后的烟火
            'xw_4_5': { mp3Moment: 'xw_xiaye', ambient: 'shop' },
            'xw_4_5_xiaotong': { mp3Moment: 'xw_xiaye', ambient: 'street' },
            'xw_4_5_longxinheng': { mp3Moment: 'xw_xiaye', ambient: 'street' },
            'xw_4_5_ganzhiyu': { mp3Moment: 'xw_xiaye', ambient: 'street' },
            'xw_4_5_wuya': { mp3Moment: 'xw_xiaye', ambient: 'street' },
            
            // 【告白结果：夏夜最后的烟火】
            'xw_4_6_confession_xiaotong_accept': { mp3Moment: 'xw_xiaye', ambient: 'street' },
            'xw_4_6_confession_longxinheng_accept': { mp3Moment: 'xw_xiaye', ambient: 'street' },
            'xw_4_6_confession_ganzhiyu_accept': { mp3Moment: 'xw_xiaye', ambient: 'street' },
            'xw_4_6_confession_wuya_accept': { mp3Moment: 'xw_xiaye', ambient: 'street' },
            
            // 【犹豫/开放结局：不再联系】
            'xw_4_6_confession_think': { mp3Moment: 'xw_buzai', ambient: 'street' },
            'xw_4_7_open': { mp3Moment: 'xw_buzai', ambient: null },
            
            // 【尾声：不再联系】
            'xw_4_7': { mp3Moment: 'xw_buzai', ambient: null },
            
            // ========== 角色专属场景 ==========
            // 木星专属
            'muxin_story_1': { 
                mp3Moment: 'muxin_firstmeet',  // 木星初遇
                ambient: 'shop' 
            },
            'muxin_story_2': { 
                mp3Moment: 'muxin_acttogether',  // 木星共同演绎
                ambient: 'shop' 
            },
            'muxin_confession': { 
                mp3Moment: 'muxin_confession',  // 木星告白
                ambient: null 
            },
            
            // 龙信衡专属
            'long_story_1': { 
                mp3Moment: 'longxinheng_gentle',  // 龙信衡温柔时刻
                ambient: null 
            },
            'long_story_2': { 
                mp3Moment: 'longxinheng_nighttalk',  // 夜晚深谈
                ambient: 'night' 
            },
            'long_confession': { 
                mp3Moment: 'longxinheng_confession',  // 龙信衡告白
                ambient: null 
            },
            
            // 吴琊专属
            'wuya_story_1': { 
                mp3Moment: 'wuya_funny',  // 吴琊搞笑日常
                ambient: null 
            },
            'wuya_story_2': { 
                mp3Moment: 'wuya_relax',  // 吴琊释放压力
                ambient: 'campus' 
            },
            
            // 甘志宇专属
            'gan_story_1': { 
                mp3Moment: 'ganzhiyu_breakthrough',  // 甘志宇突破自我
                ambient: null 
            },
            'gan_story_2': { 
                mp3Moment: 'ganzhiyu_warm',  // 甘志宇温暖时刻
                ambient: null 
            },
            
            // ========== 离别与结局 ==========
            'farewell_scene': { 
                mp3Moment: 'farewell',  // 离别场景
                ambient: null 
            },
            'ending': { 
                mp3Moment: 'ending_healing',  // 结局 - 治愈
                ambient: null 
            },
            'credits': { 
                mp3Moment: 'credits',  // 制作名单
                ambient: null 
            },
            
            // ========== 默认场景 ==========
            'default': { mp3Mood: 'joyful', ambient: null }
        };
        
        this.init();
    }
    
    init() {
        // 等待用户交互后再初始化音频
        this.preloadAudio();
    }
    
    // 初始化音频上下文（需要用户交互后调用）
    async initAudioContext() {
        if (this.initialized) return;
        
        try {
            // 创建音频上下文
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // 如果音频上下文被暂停，尝试恢复
            if (this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }
            
            this.initialized = true;
            console.log('[音频] 系统已初始化');
        } catch (e) {
            console.log('[音频] 上下文初始化失败:', e);
        }
    }
    
    // 预加载音频
    preloadAudio() {
        // 可以在这里预加载关键音频文件
        // 对于网页游戏，通常采用按需加载
    }
    
    // ========================================
    // MP3播放（按情绪/场景/角色分类）
    // ========================================
    
    /**
     * 按情绪播放MP3（从该情绪的曲目列表中随机选择一首）
     * @param {string} mood - 情绪类型：joyful, romantic, melancholic, healing, nightfall, peaceful
     * @param {number} fadeTime - 淡入淡出时间（毫秒）
     * @param {boolean} forcePlay - 是否强制重新播放
     */
    playMP3ByMood(mood, fadeTime = 2000, forcePlay = false) {
        console.log('[音乐] playMP3ByMood 被调用, mood:', mood, 'muted:', this.muted, 'forcePlay:', forcePlay);
        if (this.muted) {
            console.log('[音乐] 被 muted 阻止');
            return;
        }
        
        const moodList = this.audioPaths.mp3.mood[mood];
        console.log('[音乐] moodList:', moodList);
        if (!moodList || moodList.length === 0) {
            console.log('[音乐] 情绪列表不存在或为空:', mood);
            return;
        }
        
        // 随机选择一首
        const randomPath = moodList[Math.floor(Math.random() * moodList.length)];
        console.log('[音乐] 播放情绪音乐:', mood, '->', randomPath);
        this.playMP3File(randomPath, fadeTime, forcePlay);
    }
    
    /**
     * 按场景播放MP3（从该场景的曲目列表中随机选择一首）
     * @param {string} scene - 场景类型：campus, scriptshop, dorm_night, cohabitation, romantic, farewell, hotpot, ending
     * @param {number} fadeTime - 淡入淡出时间（毫秒）
     * @param {boolean} forcePlay - 是否强制重新播放
     */
    playMP3ByScene(scene, fadeTime = 2000, forcePlay = false) {
        if (this.muted) return;
        
        const sceneList = this.audioPaths.mp3.scene[scene];
        if (!sceneList || sceneList.length === 0) {
            console.log('[音乐] 场景列表不存在或为空:', scene);
            return;
        }
        
        // 随机选择一首
        const randomPath = sceneList[Math.floor(Math.random() * sceneList.length)];
        console.log('[音乐] 播放场景音乐:', scene, '->', randomPath);
        this.playMP3File(randomPath, fadeTime, forcePlay);
    }
    
    /**
     * 按角色播放MP3（从该角色的曲目列表中随机选择一首）
     * @param {string} character - 角色类型：muxin, longxinheng, wuya, ganzhiyu
     * @param {number} fadeTime - 淡入淡出时间（毫秒）
     * @param {boolean} forcePlay - 是否强制重新播放
     */
    playMP3ByCharacter(character, fadeTime = 2000, forcePlay = false) {
        if (this.muted) return;
        
        const charList = this.audioPaths.mp3.character[character];
        if (!charList || charList.length === 0) return;
        
        // 随机选择一首
        const randomPath = charList[Math.floor(Math.random() * charList.length)];
        console.log('[音乐] 播放角色音乐:', character, '->', randomPath);
        this.playMP3File(randomPath, fadeTime, forcePlay);
    }
    
    /**
     * 按剧情节点播放指定MP3（播放固定曲目）
     * @param {string} momentKey - 剧情节点标识
     * @param {number} fadeTime - 淡入淡出时间（毫秒）
     * @param {boolean} forcePlay - 是否强制重新播放
     */
    playMP3ByStoryMoment(momentKey, fadeTime = 2000, forcePlay = false) {
        if (this.muted) return;
        
        const mp3Path = this.audioPaths.mp3.storyMoment[momentKey];
        if (!mp3Path) {
            console.log('未找到剧情节点音乐:', momentKey);
            return;
        }
        
        this.playMP3File(mp3Path, fadeTime, forcePlay);
    }
    
    /**
     * 播放指定MP3文件（带淡入淡出效果）
     * @param {string} path - MP3文件路径
     * @param {number} fadeTime - 淡入淡出时间（毫秒）
     * @param {boolean} forcePlay - 是否强制重新播放（即使路径相同）
     */
    playMP3File(path, fadeTime = 2000, forcePlay = false) {
        console.log('[音乐] playMP3File 被调用, path:', path, 'forcePlay:', forcePlay);
        // 如果正在播放同一文件，不重复播放（除非 forcePlay 为 true）
        if (this.currentMp3 === path && this.mp3 && !forcePlay) {
            console.log('[音乐] 同一文件，无需重新播放');
            return;
        }
        
        const oldMp3 = this.mp3;
        const oldVolume = oldMp3 ? oldMp3.volume : 0;
        const halfFade = fadeTime / 2; // 淡出和淡入各占一半时间
        
        // 创建新音乐
        this.mp3 = new Audio(path);
        this.mp3.loop = true;
        this.mp3.volume = 0;  // 初始音量为0
        this.currentMp3 = path;
        
        // 开始播放新音乐
        const playPromise = this.mp3.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('[音乐] 播放成功');
                // 新音乐淡入
                this.fadeInVolume(this.mp3, halfFade, this.volume.mp3);
            }).catch(e => {
                console.log('[音乐] 播放失败:', e.message);
            });
        }
        
        // 旧音乐淡出（如果存在）
        if (oldMp3) {
            this.fadeOutVolume(oldMp3, halfFade, () => {
                oldMp3.pause();
                oldMp3.src = ''; // 释放内存
            });
        }
    }
    
    /**
     * 淡出音量并回调
     * @param {Audio} audio - Audio对象
     * @param {number} duration - 淡出时间（毫秒）
     * @param {function} callback - 完成后回调
     */
    fadeOutVolume(audio, duration, callback) {
        if (!audio) {
            if (callback) callback();
            return;
        }
        
        const startVolume = audio.volume;
        const startTime = Date.now();
        
        const fade = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            audio.volume = startVolume * (1 - progress);
            
            if (progress < 1) {
                requestAnimationFrame(fade);
            } else {
                audio.volume = 0;
                if (callback) callback();
            }
        };
        
        fade();
    }
    
    /**
     * 淡入音量控制
     * @param {Audio} audio - Audio对象
     * @param {number} duration - 淡入时间
     * @param {number} targetVol - 目标音量
     */
    fadeInVolume(audio, duration, targetVol) {
        const startTime = Date.now();
        
        const fade = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            audio.volume = targetVol * progress;
            
            if (progress < 1) {
                requestAnimationFrame(fade);
            }
        };
        
        fade();
    }
    
    // 播放环境音效
    playAmbient(type) {
        if (this.muted) return;
        
        const ambientPath = this.audioPaths.ambient[type];
        if (!ambientPath) {
            this.stopAmbient();
            return;
        }
        
        // 如果已经在播放同一种环境音，不重复
        if (this.ambient && this.ambient.dataset.type === type) return;
        
        this.stopAmbient();
        
        this.ambient = new Audio(ambientPath);
        this.ambient.loop = true;
        this.ambient.dataset.type = type;
        this.ambient.volume = this.volume.ambient;
        
        this.ambient.play().catch(e => console.log('环境音播放失败:', e));
    }
    
    // 停止环境音效
    stopAmbient() {
        if (this.ambient) {
            this.ambient.pause();
            this.ambient = null;
        }
    }
    
    // 播放音效
    async playSFX(sfxName, duration = null) {
        if (this.muted) return;
        
        // 确保音频上下文已初始化
        if (!this.initialized) {
            await this.initAudioContext();
        }
        
        let sfxPath = this.audioPaths.sfx[sfxName];
        if (!sfxPath) return;
        
        // 如果是数组（多个变体），随机选择一个
        if (Array.isArray(sfxPath)) {
            sfxPath = sfxPath[Math.floor(Math.random() * sfxPath.length)];
        }
        
        const sfx = new Audio(sfxPath);
        // 打字音效使用更低的音量
        if (sfxName === 'typing') {
            sfx.volume = this.volume.sfx * 0.3;
        } else {
            sfx.volume = this.volume.sfx;
        }
        
        // 如果指定了时长，只播放前duration秒
        if (duration) {
            sfx.onplay = () => {
                setTimeout(() => {
                    sfx.pause();
                    sfx.currentTime = 0;
                }, duration * 1000);
            };
        }
        
        try {
            await sfx.play();
        } catch (e) {
            console.log('SFX播放失败:', e);
        }
    }
    
    /**
     * 根据场景ID切换音乐（MP3 + 环境音）
     * @param {string} sceneId - 场景ID
     * @param {object} options - 播放选项
     * @param {boolean} options.useMp3 - 是否播放MP3音乐（默认true）
     * @param {boolean} options.forceSwitch - 强制切换音乐（用于章节切换）
     */
    switchSceneMusic(sceneId, options = {}) {
        // 确保默认值
        const { useMp3 = true, forceSwitch = false } = options;
        console.log('[音乐] switchSceneMusic 被调用, sceneId:', sceneId, 'useMp3:', useMp3, 'forceSwitch:', forceSwitch);
        const moodConfig = this.sceneMoodMap[sceneId];
        if (!moodConfig) {
            console.log('[音乐] 未找到场景配置:', sceneId);
            // 使用默认配置尝试播放
            this.playMP3ByMood('joyful');
            return;
        }
        console.log('[音乐] 找到场景配置:', moodConfig);
        
        // 播放MP3音乐（优先级：moment > character > mood > scene）
        // 音乐只在情绪类型发生变化时切换
        if (useMp3) {
            // 获取当前场景的音乐分类
            let targetMoodType = null;
            let targetMoodCategory = null;
            let targetEmotion = null;  // 情绪分类（joyful, melancholic等）
            
            if (moodConfig.mp3Moment) {
                targetMoodType = 'moment';
                targetMoodCategory = moodConfig.mp3Moment;
            } else if (moodConfig.mp3Character) {
                targetMoodType = 'character';
                targetMoodCategory = moodConfig.mp3Character;
            } else if (moodConfig.mp3Mood) {
                // mood 类型优先级高于 scene
                targetMoodType = 'mood';
                targetMoodCategory = moodConfig.mp3Mood;
                targetEmotion = moodConfig.mp3Mood;
            } else if (moodConfig.mp3Scene) {
                targetMoodType = 'scene';
                targetMoodCategory = moodConfig.mp3Scene;
                // scene 类型也使用情绪变化检测
                targetEmotion = moodConfig.mp3Scene;
            }
            
            // 检查是否需要切换音乐：
            // 1. forceSwitch=true 时强制切换
            // 2. 音乐从未播放过（currentMp3为null）
            // 3. 情绪/场景类型发生变化
            const musicNeverPlayed = this.currentMp3 === null;
            const emotionChanged = targetEmotion && this.currentEmotion !== targetEmotion;
            const categoryChanged = this.currentMoodCategory !== targetMoodCategory;
            
            // 简化逻辑：forceSwitch 优先，其他条件作为补充
            const shouldSwitch = 
                forceSwitch ||
                musicNeverPlayed ||
                this.currentMoodType !== targetMoodType ||
                (this.currentMoodType === targetMoodType && categoryChanged);
            
            console.log('[音乐] 场景:', sceneId, '类型:', targetMoodType, '分类:', targetMoodCategory);
            console.log('[音乐] shouldSwitch:', shouldSwitch, 'forceSwitch:', forceSwitch, '从未播放:', musicNeverPlayed);
            console.log('[音乐] currentMoodType:', this.currentMoodType, 'currentMoodCategory:', this.currentMoodCategory, 'currentEmotion:', this.currentEmotion);
            
            if (shouldSwitch) {
                console.log(`[音乐] ▶ 播放: ${targetMoodCategory}`);
                
                if (moodConfig.mp3Moment) {
                    // 剧情节点专用配乐（固定曲目）
                    this.playMP3ByStoryMoment(moodConfig.mp3Moment, 2000, forceSwitch);
                } else if (moodConfig.mp3Character) {
                    // 角色主题音乐（随机选择）
                    this.playMP3ByCharacter(moodConfig.mp3Character, 2000, forceSwitch);
                } else if (moodConfig.mp3Mood) {
                    // 情绪分类音乐（随机选择）
                    this.playMP3ByMood(moodConfig.mp3Mood, 2000, forceSwitch);
                } else if (moodConfig.mp3Scene) {
                    // 场景分类音乐（随机选择）
                    this.playMP3ByScene(moodConfig.mp3Scene, 2000, forceSwitch);
                }
                
                // 更新状态
                this.currentMoodType = targetMoodType;
                this.currentMoodCategory = targetMoodCategory;
                this.currentEmotion = targetEmotion;
            } else {
                console.log('[音乐] ⏸ 保持当前音乐');
            }
        }
        
        // 切换环境音（环境音保持切换，因为它是连续播放的）
        if (moodConfig.ambient) {
            this.playAmbient(moodConfig.ambient);
        } else {
            this.stopAmbient();
        }
    }
    
    // 淡出
    fadeOut(audio, duration, callback) {
        const startVolume = audio.volume;
        const startTime = Date.now();
        
        const fade = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            audio.volume = startVolume * (1 - progress);
            
            if (progress < 1) {
                requestAnimationFrame(fade);
            } else {
                audio.pause();
                if (callback) callback();
            }
        };
        
        fade();
    }
    
    // 设置音量
    setVolume(type, value) {
        this.volume[type] = value;
        
        if (type === 'mp3' && this.mp3) {
            this.mp3.volume = value;
        } else if (type === 'ambient' && this.ambient) {
            this.ambient.volume = value;
        }
    }
    
    // 静音切换
    toggleMute() {
        this.muted = !this.muted;
        
        if (this.muted) {
            if (this.mp3) this.mp3.pause();
            if (this.ambient) this.ambient.pause();
        } else {
            if (this.mp3) this.mp3.play();
            if (this.ambient) this.ambient.play();
        }
        
        return this.muted;
    }
    
    // 停止背景音乐（MP3）
    stopMusic() {
        if (this.mp3) {
            this.mp3.pause();
            this.mp3 = null;
        }
        this.currentMp3 = null;
        this.currentMoodType = null;
        this.currentMoodCategory = null;
        this.currentEmotion = null;
    }
    
    // 停止所有音频
    stopAll() {
        this.stopMusic();
        this.stopAmbient();
    }
    
    // ========================================
    // 辅助方法
    // ========================================
    
    /**
     * 获取指定情绪的所有曲目名称
     * @param {string} mood - 情绪类型
     * @returns {string[]} 曲目名称列表
     */
    getMoodTracks(mood) {
        const moodList = this.audioPaths.mp3.mood[mood];
        if (!moodList) return [];
        // 从路径中提取歌曲名称
        return moodList.map(path => {
            const filename = path.split('/').pop();
            return filename.replace('.mp3', '');
        });
    }
    
    /**
     * 获取指定场景的所有曲目名称
     * @param {string} scene - 场景类型
     * @returns {string[]} 曲目名称列表
     */
    getSceneTracks(scene) {
        const sceneList = this.audioPaths.mp3.scene[scene];
        if (!sceneList) return [];
        return sceneList.map(path => {
            const filename = path.split('/').pop();
            return filename.replace('.mp3', '');
        });
    }
    
    /**
     * 获取指定角色的所有曲目名称
     * @param {string} character - 角色类型
     * @returns {string[]} 曲目名称列表
     */
    getCharacterTracks(character) {
        const charList = this.audioPaths.mp3.character[character];
        if (!charList) return [];
        return charList.map(path => {
            const filename = path.split('/').pop();
            return filename.replace('.mp3', '');
        });
    }
    
    /**
     * 打印所有可用的音乐配置（调试用）
     */
    printAvailableMusic() {
        console.log('========== 可用音乐配置 ==========');
        
        console.log('\n【情绪分类】');
        Object.keys(this.audioPaths.mp3.mood).forEach(mood => {
            console.log(`  ${mood}: ${this.getMoodTracks(mood).join(', ')}`);
        });
        
        console.log('\n【场景分类】');
        Object.keys(this.audioPaths.mp3.scene).forEach(scene => {
            console.log(`  ${scene}: ${this.getSceneTracks(scene).join(', ')}`);
        });
        
        console.log('\n【角色主题】');
        Object.keys(this.audioPaths.mp3.character).forEach(char => {
            console.log(`  ${char}: ${this.getCharacterTracks(char).join(', ')}`);
        });
        
        console.log('\n【剧情节点】');
        Object.keys(this.audioPaths.mp3.storyMoment).forEach(moment => {
            const path = this.audioPaths.mp3.storyMoment[moment];
            const name = path.split('/').pop().replace('.mp3', '');
            console.log(`  ${moment}: ${name}`);
        });
        
        console.log('\n===================================');
    }
}

// 创建全局音频管理器实例
window.audioManager = new AudioManager();
