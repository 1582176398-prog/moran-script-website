// 墨染之夏 - 游戏剧本数据
const storyData = {
    // 角色信息
    characters: {
        zhou_yan: {
            id: 'zhou_yan',
            name: '周砚',
            emoji: '🌙',
            color: '#667eea',
            description: '内向温柔的大一新生',
            image: 'images/cutout/周砚.png'
        },
        xia_wan: {
            id: 'xia_wan',
            name: '夏晚',
            emoji: '🌸',
            color: '#f5576c',
            description: '内向漂亮的大一新生',
            image: 'images/cutout/夏晚.png'
        },
        // NPC角色
        su_xinyue: {
            id: 'su_xinyue',
            name: '苏馨悦',
            nickname: '虹猫',
            emoji: '🐱',
            color: '#ff6b6b',
            image: 'images/cutout/苏馨悦.png'
        },
        chengzi: {
            id: 'chengzi',
            name: '橙子',
            realname: '刘玥玲',
            emoji: '🍊',
            color: '#ffd3a5',
            image: 'images/cutout/刘玥玲.png'
        },
        yu_haitong: {
            id: 'yu_haitong',
            name: '余海彤',
            nickname: '170',
            emoji: '✨',
            color: '#f5576c',
            image: 'images/cutout/余海彤.png'
        },
        xiao_tong: {
            id: 'xiao_tong',
            name: '肖童',
            nickname: '木星',
            emoji: '⭐',
            color: '#667eea',
            image: 'images/cutout/肖童.png'
        },
        long_xinheng: {
            id: 'long_xinheng',
            name: '龙信衡',
            nickname: '谨言',
            emoji: '😊',
            color: '#4ecdc4',
            image: 'images/cutout/龙信衡.png'
        },
        wu_ya: {
            id: 'wu_ya',
            name: '吴琊',
            nickname: '吴琊',
            emoji: '👔',
            color: '#f093fb',
            image: 'images/cutout/吴琊.png'
        },
        ahao: {
            id: 'ahao',
            name: '阿昊',
            realname: '张浩',
            emoji: '🎮',
            color: '#9b59b6',
            image: 'images/cutout/阿昊.png'
        },
        gan_zhiyu: {
            id: 'gan_zhiyu',
            name: '甘志宇',
            nickname: '方圆',
            emoji: '🌙',
            color: '#a8edea',
            image: 'images/cutout/甘志宇.png'
        },
        gong_qin: {
            id: 'gong_qin',
            name: '龚琴',
            nickname: '小琴',
            emoji: '📞',
            color: '#e74c3c',
            image: 'images/cutout/龚琴.png'
        },
        roommate: {
            id: 'roommate',
            name: '室友',
            emoji: '👤',
            color: '#95a5a6',
            image: null
        },
        narrator: {
            id: 'narrator',
            name: '',
            emoji: '',
            color: '#fff',
            image: null
        }
    },

    // 周砚线 - 第一章：风铃轻响时
    zhou_yan_chapter1: {
        title: '第一章：风铃轻响时',
        theme: '初识剧本杀店，与这家店产生联结',
        scenes: [
            {
                id: 'zy_1_1',
                title: '路过商业街',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '2024年9月，大学城。' },
                    { speaker: 'narrator', text: '一个普通的周末下午，阳光透过树叶的缝隙洒在地上，形成斑驳的光影。' },
                    { speaker: 'zhou_yan', text: '（呼...终于考完试了。）' },
                    { speaker: 'narrator', text: '周砚独自走在大学城的商业街上，手里还拿着刚买的奶茶。' },
                    { speaker: 'narrator', text: '路过一家店铺时，一张招聘海报吸引了他的注意。' },
                    { speaker: 'zhou_yan', text: '「三体剧本杀店」...招聘兼职DM？' },
                    { speaker: 'zhou_yan', text: 'DM是什么...？' },
                    { speaker: 'narrator', text: '周砚站在店门口，透过玻璃门可以看到里面摆放着几张桌子和一些装饰。' },
                    { speaker: 'zhou_yan', text: '（看起来挺有意思的...不过我对这个完全不了解啊。）' },
                    { speaker: 'zhou_yan', text: '（但是...如果能锻炼一下社交能力，好像也不错？）' }
                ],
                choices: [
                    { text: '推门进去看看', next: 'zy_1_1_a', affinity: {} },
                    { text: '先记下来，以后再说', next: 'zy_1_1_b', affinity: {} }
                ]
            },
            {
                id: 'zy_1_1_a',
                title: '走进店里',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '周砚推开门，风铃发出清脆的声响。' },
                    { speaker: 'chengzi', text: '欢迎光临！请问几位呀？' },
                    { speaker: 'zhou_yan', text: '啊...我不是来玩的，我看到门口有招聘海报...' },
                    { speaker: 'chengzi', text: '哦？你想应聘DM吗？' },
                    { speaker: 'narrator', text: '一个扎着马尾的女生从柜台后面探出头来，笑容很灿烂。' },
                    { speaker: 'zhou_yan', text: '那个...DM是做什么的？' },
                    { speaker: 'chengzi', text: 'DM就是主持人，负责带玩家玩游戏~我叫橙子，你先坐，我给你介绍？' }
                ],
                choices: [
                    { text: '好，谢谢橙子姐', next: 'zy_1_1_a1', affinity: {}, friendship: { chengzi: 5 } },
                    { text: '好的，麻烦了', next: 'zy_1_1_a2', affinity: {}, friendship: { chengzi: 3 } }
                ]
            },
            {
                id: 'zy_1_1_a1',
                title: '坦诚相告',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'chengzi', text: '哇，有勇气！DM不难的，主要要有耐心和表达能力。' },
                    { speaker: 'zhou_yan', text: '（被夸了...有点不好意思。）' },
                    { speaker: 'zhou_yan', text: '（橙子笑起来的样子...挺好看的。）' },
                    { speaker: 'chengzi', text: '这样吧，你先留个联系方式，我们店长在的话会联系你。' },
                    { speaker: 'chengzi', text: '有空可以先来体验一下我们的剧本杀，免费的哦！' },
                    { speaker: 'narrator', text: '周砚留下了联系方式，心里对这个地方产生了一丝期待。' }
                ],
                choices: [
                    { text: '橙子姐人真好，期待以后能一起工作', next: 'zy_1_1_a1_a', affinity: { chengzi: 3 }, friendship: { chengzi: 5 } },
                    { text: '谢谢橙子姐，有机会一定来体验', next: 'zy_1_1_a1_b', affinity: {}, friendship: { chengzi: 3 } }
                ]
            },
            {
                id: 'zy_1_1_a1_a',
                title: '期待相遇',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '橙子姐人真好，期待以后能一起工作。' },
                    { speaker: 'chengzi', text: '哈哈，那说定了！' },
                    { speaker: 'narrator', text: '周砚觉得橙子的笑容很温暖，让人感觉很安心。' },
                    { speaker: 'narrator', text: '（第一次见面就觉得...她是个很好相处的人。）' }
                ],
                choices: [],
                next: 'zy_1_2'
            },
            {
                id: 'zy_1_1_a1_b',
                title: '礼貌道别',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '谢谢橙子姐，有机会一定来体验。' },
                    { speaker: 'chengzi', text: '好呀，那我等你哦~' },
                    { speaker: 'narrator', text: '周砚离开了剧本杀店，心里对这个地方多了几分好奇。' }
                ],
                choices: [],
                next: 'zy_1_2'
            },
            {
                id: 'zy_1_1_a2',
                title: '略有耳闻',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'chengzi', text: '听说过就好！剧本杀就像演一出戏，你是导演也是演员。' },
                    { speaker: 'zhou_yan', text: '听起来挺有意思的...' },
                    { speaker: 'chengzi', text: '我们店氛围很好的，大家都像一家人！先留个联系方式吧？' },
                    { speaker: 'zhou_yan', text: '好的，谢谢。' }
                ],
                choices: [],
                next: 'zy_1_2'
            },
            {
                id: 'zy_1_1_b',
                title: '记下联系方式',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'zhou_yan', text: '（先拍个照记下来吧，等想好了再来。）' },
                    { speaker: 'narrator', text: '周砚拿出手机拍下了招聘海报。' },
                    { speaker: 'zhou_yan', text: '（不过...真的要去试试吗？）' },
                    { speaker: 'narrator', text: '他站在店门口犹豫了一会儿，最终还是转身离开了。' },
                    { speaker: 'narrator', text: '但那张照片一直留在他的手机里，像是一颗种子，等待着发芽的时机。' }
                ],
                choices: [],
                next: 'zy_1_2'
            },
            {
                id: 'zy_1_2',
                title: '室友的邀请',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '几天后，宿舍里。' },
                    { speaker: 'roommate', text: '周砚！周末有空吗？' },
                    { speaker: 'zhou_yan', text: '有啊，怎么了？' },
                    { speaker: 'roommate', text: '我们打算去玩密室逃脱，缺一个人，你来不来？' },
                    { speaker: 'zhou_yan', text: '密室逃脱...？' },
                    { speaker: 'narrator', text: '周砚想起了前几天看到的剧本杀店。' },
                    { speaker: 'zhou_yan', text: '（说起来，剧本杀和密室逃脱是不是差不多？）' }
                ],
                choices: [
                    { text: '好啊，我去', next: 'zy_1_2_a', affinity: {} },
                    { text: '我不太擅长这种...', next: 'zy_1_2_b', affinity: {} }
                ]
            },
            {
                id: 'zy_1_2_a',
                title: '密室逃脱',
                background: 'bg-university',
                dialogues: [
                    { speaker: 'narrator', text: '周末，周砚和室友们来到了一家密室逃脱店。' },
                    { speaker: 'roommate', text: '周砚，你负责解谜吧，你脑子好使。' },
                    { speaker: 'zhou_yan', text: '我尽力...' },
                    { speaker: 'narrator', text: '游戏开始后，周砚发现自己虽然内向，但在解谜方面确实有一套。' },
                    { speaker: 'roommate', text: '哇，周砚你也太厉害了吧！' },
                    { speaker: 'zhou_yan', text: '还好啦...' },
                    { speaker: 'narrator', text: '虽然过程中周砚话不多，但他的观察力和逻辑思维帮了大忙。' },
                    { speaker: 'roommate', text: '下次我们再去玩别的！听说剧本杀也很有意思。' },
                    { speaker: 'zhou_yan', text: '剧本杀...？' },
                    { speaker: 'narrator', text: '听到这个词，周砚又想起了那家店。' }
                ],
                choices: [],
                next: 'zy_1_3'
            },
            {
                id: 'zy_1_2_b',
                title: '婉拒邀请',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'zhou_yan', text: '我不太擅长这种团队合作的游戏...' },
                    { speaker: 'roommate', text: '哎呀，试试嘛！不试试怎么知道？' },
                    { speaker: 'zhou_yan', text: '还是算了吧，你们玩得开心。' },
                    { speaker: 'roommate', text: '好吧...那下次再叫你。' },
                    { speaker: 'narrator', text: '室友离开后，宿舍里只剩下周砚一个人。' },
                    { speaker: 'zhou_yan', text: '（我是不是太封闭了...）' },
                    { speaker: 'zhou_yan', text: '（也许...真的该尝试一下新东西？）' },
                    { speaker: 'narrator', text: '周砚打开手机，看着那张招聘海报的照片，陷入了沉思。' }
                ],
                choices: [],
                next: 'zy_1_3'
            },
            {
                id: 'zy_1_3',
                title: '朋友推荐',
                background: 'bg-university',
                dialogues: [
                    { speaker: 'narrator', text: '又过了几天。' },
                    { speaker: 'roommate', text: '周砚！上次密室逃脱太好玩了！' },
                    { speaker: 'roommate', text: '对了，有人推荐我去一家剧本杀店，叫「三体」，就在大学城。' },
                    { speaker: 'zhou_yan', text: '（三体...不就是我前几天看到的那家吗？）' },
                    { speaker: 'roommate', text: '这周末他们组局，缺一个人，你来不来？' },
                    { speaker: 'zhou_yan', text: '我...' },
                    { speaker: 'narrator', text: '周砚犹豫了一下。' },
                    { speaker: 'zhou_yan', text: '（也许这是了解剧本杀的好机会？）' }
                ],
                choices: [
                    { text: '好，我去试试', next: 'zy_1_3_a', affinity: {} },
                    { text: '我还是算了吧', next: 'zy_1_3_b', affinity: {} }
                ]
            },
            {
                id: 'zy_1_3_a',
                title: '第一次玩剧本杀',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '周末，周砚和朋友们来到了「三体」剧本杀店。' },
                    { speaker: 'chengzi', text: '欢迎光临！咦，是你呀！' },
                    { speaker: 'zhou_yan', text: '（是上次那个女生...）' },
                    { speaker: 'long_xinheng', text: '橙子，这边有新朋友？' },
                    { speaker: 'chengzi', text: '对！这是周砚，上次来应聘的那个，今天先来体验一下~' },
                    { speaker: 'long_xinheng', text: '哦？要当新同事了？那我可得好好表演一下！' },
                    { speaker: 'narrator', text: '一个胖胖的男生从旁边探出头来，笑容很有感染力。' },
                    { speaker: 'zhou_yan', text: '（这个人看起来很外向...）' },
                    { speaker: 'long_xinheng', text: '我叫龙信衡，叫我谨言就行！' },
                    { speaker: 'chengzi', text: '谨言是我们店的开心果，保证让你玩得开心~' },
                    { speaker: 'long_xinheng', text: '来来来，我给你讲讲规则，很简单的！' },
                    { speaker: 'narrator', text: '游戏开始后，周砚拿到了一个角色剧本。' },
                    { speaker: 'narrator', text: '虽然一开始有些拘谨，但随着游戏进行，他渐渐进入了角色。' },
                    { speaker: 'long_xinheng', text: '这位朋友，你的发言很有逻辑啊！分析得很到位！' },
                    { speaker: 'zhou_yan', text: '（被夸了...有点不好意思。）' },
                    { speaker: 'long_xinheng', text: '第一次玩就这么投入，很有天赋嘛！' },
                    { speaker: 'narrator', text: '周砚发现，剧本杀比想象中要有趣得多。' }
                ],
                choices: [],
                next: 'zy_1_4'
            },
            {
                id: 'zy_1_3_b',
                title: '再次错过',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'zhou_yan', text: '我还是不去了...' },
                    { speaker: 'roommate', text: '好吧，那下次有机会再叫你。' },
                    { speaker: 'narrator', text: '室友离开后，周砚有些后悔。' },
                    { speaker: 'zhou_yan', text: '（我是不是又在逃避了...）' },
                    { speaker: 'narrator', text: '但他还是没有勇气追上去。' }
                ],
                choices: [],
                next: 'zy_1_4'
            },
            {
                id: 'zy_1_4',
                title: '选修课组队',
                background: 'bg-classroom',
                dialogues: [
                    { speaker: 'narrator', text: '周一，选修课上。' },
                    { speaker: 'teacher', text: '这节课需要大家分组完成任务，每组4-5人。' },
                    { speaker: 'narrator', text: '周砚看了看周围，同学们已经开始组队了。' },
                    { speaker: 'zhou_yan', text: '（又要社交了...好麻烦。）' },
                    { speaker: 'roommate', text: '周砚，过来和我们一组！' },
                    { speaker: 'zhou_yan', text: '哦，好。' },
                    { speaker: 'narrator', text: '组队完成后，老师布置了任务。' },
                    { speaker: 'teacher', text: '这个任务需要大家分工合作，下周 presentation。' },
                    { speaker: 'roommate', text: '周砚，你负责资料收集吧，你比较细心。' },
                    { speaker: 'zhou_yan', text: '好的。' },
                    { speaker: 'narrator', text: '任务进行得很顺利，周砚虽然话不多，但做事很靠谱。' },
                    { speaker: 'roommate', text: '周砚，你真的很适合团队合作诶！' },
                    { speaker: 'zhou_yan', text: '是吗...' },
                    { speaker: 'roommate', text: '对啊！虽然你不怎么说话，但做事很让人放心。' },
                    { speaker: 'zhou_yan', text: '（原来我也可以做好吗...）' }
                ],
                choices: [],
                next: 'zy_1_5'
            },
            {
                id: 'zy_1_5',
                title: '决定应聘',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '一周后，周砚再次来到了商业街。' },
                    { speaker: 'zhou_yan', text: '（上次那节课，让我觉得自己也许可以试试...）' },
                    { speaker: 'narrator', text: '他站在「三体」剧本杀店门口，深吸一口气。' },
                    { speaker: 'zhou_yan', text: '（加油，周砚。）' },
                    { speaker: 'narrator', text: '他推开门，风铃再次响起。' },
                    { speaker: 'chengzi', text: '欢迎...咦，又是你！你是来...？' },
                    { speaker: 'zhou_yan', text: '我想应聘兼职DM。' },
                    { speaker: 'chengzi', text: '真的吗？太好了！店长！有人来应聘！' }
                ],
                choices: [],
                next: 'zy_1_6'
            },
            {
                id: 'zy_1_6',
                title: '初见店长',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'ahao', text: '来了来了，谁啊？' },
                    { speaker: 'narrator', text: '一个看起来有些疲惫但眼神温和的男人从里屋走出来。' },
                    { speaker: 'ahao', text: '你想当DM？玩过剧本杀吗？' },
                    { speaker: 'zhou_yan', text: '是的，我是附近大学的学生，想找个兼职。玩过一次...' },
                    { speaker: 'ahao', text: '只玩过一次就想当DM？' },
                    { speaker: 'chengzi', text: '店长，他逻辑思维很好的！' },
                    { speaker: 'ahao', text: '...行吧，先试用一周，不行的话就别来了。' },
                    { speaker: 'zhou_yan', text: '谢谢！我会努力的！' },
                    { speaker: 'narrator', text: '店长阿昊点点头，转身回到了里屋。' },
                    { speaker: 'chengzi', text: '别在意，店长最近有点累，其实他人很好的。我带你参观一下吧！' }
                ],
                choices: [],
                next: 'zy_1_7'
            },
            {
                id: 'zy_1_7',
                title: '参观店铺',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '橙子正想带周砚参观，对讲机突然响了。' },
                    { speaker: 'narrator', text: '「橙子姐，3号房的空调好像坏了...」' },
                    { speaker: 'chengzi', text: '抱歉，我得去处理一下。木星，帮我带周砚参观一下？' },
                    { speaker: 'xiao_tong', text: '好，我来。' },
                    { speaker: 'narrator', text: '橙子匆匆离开后，木星带着周砚走向另一边。' },
                    { speaker: 'xiao_tong', text: '这边是休息区，那边是储物区，道具都分类存放。' },
                    { speaker: 'narrator', text: '周砚跟着木星走过一条走廊，两边是几个不同风格的房间。' },
                    { speaker: 'xiao_tong', text: '我们有五个主题房间，民国风和现代风利用率最高。' },
                    { speaker: 'zhou_yan', text: '好专业啊...' },
                    { speaker: 'xiao_tong', text: '做这行久了自然就熟悉了。' },
                    { speaker: 'narrator', text: '这时，一个微胖的男生抱着一摞剧本从旁边走过。' }
                ],
                choices: [],
                next: 'zy_1_8'
            },
            {
                id: 'zy_1_8',
                title: '遇见方圆',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xiao_tong', text: '方圆，等一下。' },
                    { speaker: 'narrator', text: '木星叫住了那个抱着剧本的男生。' },
                    { speaker: 'gan_zhiyu', text: '嗯？干嘛？' },
                    { speaker: 'narrator', text: '周砚看到一个微胖的男生停下脚步，脸上带着轻松的笑意。' },
                    { speaker: 'xiao_tong', text: '这是周砚，新来的，你帮忙带一下。' },
                    { speaker: 'gan_zhiyu', text: '哦~新人啊！' },
                    { speaker: 'narrator', text: '方圆上下打量了周砚一眼，眼睛里带着几分好奇和玩味。' },
                    { speaker: 'gan_zhiyu', text: '我是甘志宇，叫我方圆就行。你看起来挺乖的嘛~' },
                    { speaker: 'zhou_yan', text: '你好，我是周砚。' },
                    { speaker: 'gan_zhiyu', text: '知道知道，木星刚才说了~' },
                    { speaker: 'narrator', text: '方圆挥了挥手，怀里抱着的剧本晃了晃。' },
                    { speaker: 'gan_zhiyu', text: '行吧，那我先把这个放回去，等会儿聊~' }
                ],
                choices: [
                    { text: '方圆看起来很随和', next: 'zy_1_8_a', affinity: {}, friendship: { gan_zhiyu: 5 } },
                    { text: '感觉方圆挺好玩的', next: 'zy_1_8_b', affinity: {}, friendship: { gan_zhiyu: 3 } }
                ]
            },
            {
                id: 'zy_1_8_a',
                title: '随和印象',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '（方圆看起来很好相处，和木星的沉稳完全不同。）' },
                    { speaker: 'zhou_yan', text: '他好像挺随和的。' },
                    { speaker: 'xiao_tong', text: '方圆啊，他人挺好的，就是有点懒。' },
                    { speaker: 'xiao_tong', text: '剧本看了不少，但不爱带本。' },
                    { speaker: 'narrator', text: '木星淡淡地补充，语气里没有责怪。' },
                    { speaker: 'zhou_yan', text: '不爱开本？' },
                    { speaker: 'xiao_tong', text: '嗯，他觉得自己演不好。不过认真起来，其实挺厉害的。' }
                ],
                choices: [],
                next: 'zy_1_9'
            },
            {
                id: 'zy_1_8_b',
                title: '有趣印象',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '（方圆笑起来的样子，有点像个调皮的大男孩。）' },
                    { speaker: 'zhou_yan', text: '他好像挺有意思的。' },
                    { speaker: 'xiao_tong', text: '方圆啊，游戏打得好，剧本也熟，就是懒得动。' },
                    { speaker: 'xiao_tong', text: '不过他人不错，有什么事找他帮忙一般不会拒绝。' },
                    { speaker: 'narrator', text: '木星说着，继续带着周砚往前走。' }
                ],
                choices: [],
                next: 'zy_1_9'
            },
            {
                id: 'zy_1_9',
                title: '遇见170',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '木星继续带着周砚参观，走到一个大厅门口时，一个活泼的声音从里面传来。' },
                    { speaker: 'yu_haitong', text: '木星！这个本子放在哪？' },
                    { speaker: 'narrator', text: '一个身材娇小的女生从休息区探出头来，一头长发随着动作飘动。' },
                    { speaker: 'xiao_tong', text: '储物柜第二层，左边那排。' },
                    { speaker: 'yu_haitong', text: '谢啦！' },
                    { speaker: 'narrator', text: '女生注意到周砚，好奇地眨眨眼。' },
                    { speaker: 'yu_haitong', text: '咦，这是新来的？' },
                    { speaker: 'xiao_tong', text: '嗯，周砚，今天刚来的。' },
                    { speaker: 'yu_haitong', text: '你好呀！我是余海彤，大家都叫我170！' },
                    { speaker: 'narrator', text: '女生热情地挥了挥手。' },
                    { speaker: 'zhou_yan', text: '你好，我是周砚。' },
                    { speaker: 'yu_haitong', text: '170是身高啦，我刚好170cm~' },
                    { speaker: 'narrator', text: '她笑着说，语气里带着几分俏皮。' },
                    { speaker: 'yu_haitong', text: '欢迎加入我们！这里氛围可好了，你肯定会喜欢的！' }
                ],
                choices: [
                    { text: '170看起来很开朗', next: 'zy_1_9_a', affinity: { yu_haitong: 3 }, friendship: { yu_haitong: 5 } },
                    { text: '这里的人都很好相处', next: 'zy_1_9_b', affinity: { yu_haitong: 2 }, friendship: { yu_haitong: 3 } }
                ]
            },
            {
                id: 'zy_1_9_a',
                title: '活力印象',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '（170和方圆、木星的风格完全不同，像是一团跳动的火焰。）' },
                    { speaker: 'zhou_yan', text: '（感觉店里的每个人都很有特点...）' },
                    { speaker: 'yu_haitong', text: '对了木星，橙子姐那边怎么样了？' },
                    { speaker: 'xiao_tong', text: '3号房空调的事，应该快处理好了。' },
                    { speaker: 'yu_haitong', text: '那就好！夏天没有空调可不行~' },
                    { speaker: 'narrator', text: '170转头看向周砚，眨眨眼。' },
                    { speaker: 'yu_haitong', text: '有空一起吃饭呀，我给你讲讲店里的事！' }
                ],
                choices: [],
                next: 'zy_1_10'
            },
            {
                id: 'zy_1_9_b',
                title: '融入氛围',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '（看起来这里的人都很好相处...）' },
                    { speaker: 'zhou_yan', text: '谢谢，我会努力的。' },
                    { speaker: 'yu_haitong', text: '加油！有什么不懂的就问，大家都很乐意帮忙的~' },
                    { speaker: 'xiao_tong', text: '差不多了，继续往前看看。' },
                    { speaker: 'narrator', text: '木星拍了拍周砚的肩膀，示意继续参观。' }
                ],
                choices: [],
                next: 'zy_1_10'
            },
            {
                id: 'zy_1_10',
                title: '初见虹猫',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '这时，一个风风火火的身影从门口冲了进来。' },
                    { speaker: 'su_xinyue', text: '累死我了！今天那个情感本玩家太能哭了！' },
                    { speaker: 'narrator', text: '一个穿着休闲的女生把包往沙发上一扔，整个人瘫坐在旁边。' },
                    { speaker: 'xiao_tong', text: '虹猫，这是新来的周砚。' },
                    { speaker: 'narrator', text: '木星淡淡地介绍了一句。' },
                    { speaker: 'su_xinyue', text: '哦？新人？' },
                    { speaker: 'narrator', text: '女生立刻来了精神，从沙发上蹦起来，上下打量着周砚。' },
                    { speaker: 'su_xinyue', text: '哎呦，长得挺清秀的嘛！我是苏馨悦，大家都叫我虹猫！' },
                    { speaker: 'narrator', text: '她伸出手，笑容灿烂得有些晃眼。' },
                    { speaker: 'zhou_yan', text: '你好，我是周砚。' },
                    { speaker: 'su_xinyue', text: '周砚？名字挺好听的！叫我虹猫就行！' },
                    { speaker: 'narrator', text: '她用力握了握周砚的手，力道比想象中大得多。' },
                    { speaker: 'yu_haitong', text: '虹猫姐你轻点！别把人家吓跑了！' },
                    { speaker: 'su_xinyue', text: '哎呀，我这不是热情嘛！' },
                    { speaker: 'narrator', text: '170在一旁捂嘴笑着。' },
                    { speaker: 'su_xinyue', text: '周砚是吧？以后有什么事尽管找姐，姐罩你！' }
                ],
                choices: [
                    { text: '虹猫姐做DM多久了？', next: 'zy_1_10_a', affinity: {}, friendship: { su_xinyue: 5 } },
                    { text: '情感本很难带吗？', next: 'zy_1_10_b', affinity: {}, friendship: { su_xinyue: 3 } }
                ]
            },
            {
                id: 'zy_1_10_a',
                title: '了解虹猫',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '虹猫姐做DM多久了？' },
                    { speaker: 'su_xinyue', text: '我啊？大一就开始做了，现在都大三了！' },
                    { speaker: 'su_xinyue', text: '说起来，当初还是木星带我入门的呢~' },
                    { speaker: 'xiao_tong', text: '是你非要缠着我学。' },
                    { speaker: 'su_xinyue', text: '哎别拆台啊！那不是因为我看好这行嘛！' },
                    { speaker: 'narrator', text: '虹猫丝毫不介意被拆台，反而笑得更开心了。' },
                    { speaker: 'su_xinyue', text: '说实话，带本虽然累，但看到玩家玩得开心，那种成就感...绝了！' },
                    { speaker: 'yu_haitong', text: '虹猫姐每次说到这个就眼睛发光~' },
                    { speaker: 'su_xinyue', text: '那必须的！做自己喜欢的事嘛！' },
                    { speaker: 'narrator', text: '周砚觉得，虹猫的热情像一团火，让人不由自主地被感染。' }
                ],
                choices: [],
                next: 'zy_1_11'
            },
            {
                id: 'zy_1_10_b',
                title: '情感本话题',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '情感本很难带吗？' },
                    { speaker: 'su_xinyue', text: '难！可太难了！' },
                    { speaker: 'su_xinyue', text: '今天带的那个本，玩家哭得稀里哗啦的，我也差点跟着哭。' },
                    { speaker: 'yu_haitong', text: '虹猫姐每次带情感本眼睛都红红的~' },
                    { speaker: 'su_xinyue', text: '那是因为我入戏太深好不好！' },
                    { speaker: 'narrator', text: '她一点都不在意被调侃，反而笑嘻嘻的。' },
                    { speaker: 'su_xinyue', text: '不过说真的，情感本虽然难，但最能打动人了。' },
                    { speaker: 'su_xinyue', text: '等以后有机会，让你体验一下~' },
                    { speaker: 'xiao_tong', text: '先让他熟悉基本功再说。' },
                    { speaker: 'su_xinyue', text: '行行行，木星说了算~' }
                ],
                choices: [],
                next: 'zy_1_11'
            },
            {
                id: 'zy_1_11',
                title: '第一天工作',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '参观完店里，170带着周砚来到休息区。' },
                    { speaker: 'yu_haitong', text: '明天开始正式工作，今天先熟悉熟悉。' },
                    { speaker: 'zhou_yan', text: '我需要做什么准备吗？' },
                    { speaker: 'yu_haitong', text: '先把店里的剧本都看看，了解基本类型。' },
                    { speaker: 'yu_haitong', text: '这个我可以带你，顺便给你讲讲每个本的特色~' },
                    { speaker: 'narrator', text: '170看起来对这个工作非常热情。' },
                    { speaker: 'xiao_tong', text: '有什么不懂的可以随时问我。' },
                    { speaker: 'narrator', text: '木星从旁边经过，留下这句话。' },
                    { speaker: 'zhou_yan', text: '谢谢。' },
                    { speaker: 'narrator', text: '这时，一个温和的声音从旁边传来。' },
                    { speaker: 'gong_qin', text: '170，新人来了？' },
                    { speaker: 'yu_haitong', text: '小琴姐！对，这是周砚，今天刚来。' },
                    { speaker: 'narrator', text: '周砚看到一个穿着工作服的女生走过来，看起来比橙子她们年长一些。' },
                    { speaker: 'gong_qin', text: '你好，我是龚琴，大家都叫我小琴。' },
                    { speaker: 'gong_qin', text: '欢迎加入我们店，有什么事尽管问，大家都很好相处的。' },
                    { speaker: 'zhou_yan', text: '谢谢小琴姐。' },
                    { speaker: 'narrator', text: '龚琴笑着点点头。' },
                    { speaker: 'gong_qin', text: '叫我小琴就好，不用那么客气。' },
                    { speaker: 'gong_qin', text: '我在这家店算是最老的员工了，有什么想知道的都可以问我~' }
                ],
                choices: [
                    { text: '小琴姐是元老级人物吗？', next: 'zy_1_11_a', affinity: {}, friendship: { gong_qin: 5 } },
                    { text: '谢谢小琴姐，我会努力的', next: 'zy_1_11_b', affinity: {}, friendship: { gong_qin: 3 } }
                ]
            },
            // --- 场景11a：了解元老 ---
            {
                id: 'zy_1_11_a',
                title: '元老级员工',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '小琴姐是元老级人物吗？' },
                    { speaker: 'gong_qin', text: '算是吧，我在这家店工作挺久了。' },
                    { speaker: 'gong_qin', text: '看着它从一家小店慢慢变成现在这个样子。' },
                    { speaker: 'narrator', text: '龚琴的眼神里有些怀念。' },
                    { speaker: 'gong_qin', text: '你来对地方了，这里氛围真的很好。' },
                    { speaker: 'gong_qin', text: '大家都是年轻人，相处起来很轻松的。' },
                    { speaker: 'zhou_yan', text: '（小琴姐看起来很可靠，像是可以信任的前辈。）' }
                ],
                choices: [],
                next: 'zy_1_11_end'
            },
            // --- 场景11b：礼貌道谢 ---
            {
                id: 'zy_1_11_b',
                title: '谦虚回应',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '谢谢小琴姐，我会努力的。' },
                    { speaker: 'gong_qin', text: '嗯，加油！' },
                    { speaker: 'gong_qin', text: '有什么不懂的就问，别不好意思。' },
                    { speaker: 'narrator', text: '龚琴拍了拍周砚的肩膀，然后去忙自己的事了。' },
                    { speaker: 'zhou_yan', text: '（感觉这家店的氛围真的很不错。）' }
                ],
                choices: [],
                next: 'zy_1_11_end'
            },
            {
                id: 'zy_1_11_end',
                title: '第一天结束',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '周砚看着店里忙碌而有序的景象，心里充满了期待。' },
                    { speaker: 'narrator', text: '也许，这里会成为他大学生活的一个重要部分。' },
                    { speaker: 'narrator', text: '就这样，周砚开始了他在「三体」剧本杀店的故事。' },
                    { speaker: 'narrator', text: '第一章 完' }
                ],
                choices: [],
                next: null
            }
        ]
    },

    // 夏晚线 - 第一章：相遇
    xia_wan_chapter1: {
        title: '第一章：相遇',
        theme: '玩家认识夏晚，体验第一次玩剧本杀，对木星或其他角色留下第一印象',
        scenes: [
            // --- 节点1.1:初来乍到 ---
            {
                id: 'xw_1_1',
                title: '初来乍到',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '2024年9月。' },
                    { speaker: 'narrator', text: '重庆的九月，热是赖着不走的。夏晚跟着朋友走在大学城的街上，手里攥着一杯冰美式，外壁全是水珠。' },
                    { speaker: 'roommate', text: '到了。' },
                    { speaker: 'narrator', text: '朋友指着前面一家小店，"就这儿，三体。"' },
                    { speaker: 'narrator', text: '她抬头看了一眼。招牌是木质的，两个字写得挺好看，门口摆着两盆绿萝，叶子垂下来，被风吹得一晃一晃的。' },
                    { speaker: 'narrator', text: '推门进去的瞬间，冷气扑面而来。' },
                    { speaker: 'gong_qin', text: '你好，欢迎光临~' },
                    { speaker: 'narrator', text: '前台站着一个姑娘，扎着马尾，露出光洁的额头，笑着迎上来。' },
                    { speaker: 'gong_qin', text: '第一次来吗？' },
                    { speaker: 'xia_wan', text: '嗯。' },
                    { speaker: 'gong_qin', text: '那想玩什么类型呀？推理本有个《暗夜追凶》，最近挺火的，情感本有《那年夏天》，哭倒一片。' },
                    { speaker: 'roommate', text: '那必须推理啊！' },
                    { speaker: 'xia_wan', text: '（灯光是暖的，空气里有淡淡的茶香。窗外的阳光正好照在吧台上，照得一排剧本的封面亮晶晶的。）' }
                ],
                choices: [
                    { text: '那就玩推理本吧', next: 'xw_1_1_a', affinity: { xiao_tong: 20 }, friendship: {} },
                    { text: '情感本是什么感觉？', next: 'xw_1_1_b', affinity: {}, friendship: { chengzi: 10 } }
                ]
            },
            // --- 节点1.1A:选择推理本 ---
            {
                id: 'xw_1_1_a',
                title: '选择推理本',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '那就玩推理本吧。' },
                    { speaker: 'gong_qin', text: '好嘞！《暗夜追凶》，现代背景，还挺有挑战性的。' },
                    { speaker: 'gong_qin', text: '给你们带本的是木星，我们店的专业DM，推理本带得特别稳。' },
                    { speaker: 'roommate', text: '木星？这名字挺特别的。' },
                    { speaker: 'gong_qin', text: '哈哈是啊，你们稍等，马上安排~' },
                    { speaker: 'xia_wan', text: '（今天运气应该还不错。）' }
                ],
                choices: [],
                next: 'xw_1_2_mystery'
            },
            // --- 节点1.1B:选择情感本 ---
            {
                id: 'xw_1_1_b',
                title: '选择情感本',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '情感本……是什么感觉？' },
                    { speaker: 'gong_qin', text: '《那年夏天》，关于友情和成长的，挺感人的。不过一般要凑够人才开，你们愿意等一下吗？' },
                    { speaker: 'roommate', text: '等呗，反正今天没事。' },
                    { speaker: 'gong_qin', text: '好嘞！你们先在大厅坐一下，我去安排~' },
                    { speaker: 'xia_wan', text: '（就是想试试不一样的……但也不抱什么期待。）' }
                ],
                choices: [],
                next: 'xw_1_2_emotion'
            },
            // --- 节点1.2（推理本路线）:等待开场 ---
            {
                id: 'xw_1_2_mystery',
                title: '等待开场',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '等位的时候，夏晚找了个靠窗的位置坐下。' },
                    { speaker: 'narrator', text: '大厅不大，摆着几张原木色的桌子，墙上贴满了照片——全是玩家的合影，笑得歪七扭八的，看起来很开心。' },
                    { speaker: 'roommate', text: '等会儿等会儿，听说这里的DM都很会演。' },
                    { speaker: 'narrator', text: '橙子从走廊那头走过来。长发垂在肩上，说话的时候一直微微低着头，声音软软的，正在跟客人确认预约信息。' },
                    { speaker: 'narrator', text: '170在吧台给客人结账，动作很快，笑起来声音很脆，"好的稍等，马上给你们安排~"' },
                    { speaker: 'narrator', text: '虹猫从角落的房间走出来，抱着一摞剧本，走路带风，看见她们，笑着点了点头。' },
                    { speaker: 'narrator', text: '沙发那边传来一阵笑声——很大声，很放肆的那种。夏晚看过去，是一个男生，举着手机，笑得整个人都在抖。旁边的姑娘头也不抬地说了句什么，他应着，但嘴角还弯着。' },
                    { speaker: 'xia_wan', text: '（这个店，好像还挺有意思的。）' }
                ],
                choices: [
                    { text: '观察谨言（龙信衡）', next: 'xw_1_2_a_mystery', affinity: { long_xinheng: 3 }, friendship: { long_xinheng: 3 } },
                    { text: '观察方圆（甘志宇）', next: 'xw_1_2_b_mystery', affinity: { gan_zhiyu: 3 }, friendship: { gan_zhiyu: 3 } },
                    { text: '观察吴琊', next: 'xw_1_2_c_mystery', affinity: { wu_ya: 3 }, friendship: { wu_ya: 3 } },
                    { text: '观察虹猫（苏馨悦）', next: 'xw_1_2_d_mystery', affinity: {}, friendship: { su_xinyue: 3 } }
                ]
            },
            // --- 节点1.2（情感本路线）:等待开场 ---
            {
                id: 'xw_1_2_emotion',
                title: '等待开场',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '等位的时候，夏晚找了个靠窗的位置坐下。' },
                    { speaker: 'narrator', text: '大厅不大，摆着几张原木色的桌子，墙上贴满了照片——全是玩家的合影，笑得歪七扭八的，看起来很开心。' },
                    { speaker: 'roommate', text: '等会儿等会儿，听说这里的DM都很会演。' },
                    { speaker: 'narrator', text: '橙子从走廊那头走过来。长发垂在肩上，说话的时候一直微微低着头，声音软软的，正在跟客人确认预约信息。' },
                    { speaker: 'narrator', text: '170在吧台给客人结账，动作很快，笑起来声音很脆，"好的稍等，马上给你们安排~"' },
                    { speaker: 'narrator', text: '虹猫从角落的房间走出来，抱着一摞剧本，走路带风，看见她们，笑着点了点头。' },
                    { speaker: 'narrator', text: '沙发那边传来一阵笑声——很大声，很放肆的那种。夏晚看过去，是一个男生，举着手机，笑得整个人都在抖。旁边的姑娘头也不抬地说了句什么，他应着，但嘴角还弯着。' },
                    { speaker: 'xia_wan', text: '（这个店，好像还挺有意思的。）' }
                ],
                choices: [
                    { text: '观察谨言（龙信衡）', next: 'xw_1_2_a_emotion', affinity: { long_xinheng: 3 }, friendship: { long_xinheng: 3 } },
                    { text: '观察方圆（甘志宇）', next: 'xw_1_2_b_emotion', affinity: { gan_zhiyu: 3 }, friendship: { gan_zhiyu: 3 } },
                    { text: '观察吴琊', next: 'xw_1_2_c_emotion', affinity: { wu_ya: 3 }, friendship: { wu_ya: 3 } },
                    { text: '观察虹猫（苏馨悦）', next: 'xw_1_2_d_emotion', affinity: {}, friendship: { su_xinyue: 3 } }
                ]
            },
            // --- 观察谨言（推理本路线·刀子伏笔）---
            {
                id: 'xw_1_2_a_mystery',
                title: '观察谨言',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚的视线扫过休息区，看到一个微胖的男生正窝在沙发里，对着手机哈哈大笑。' },
                    { speaker: 'long_xinheng', text: '（对着手机喊）哈哈哈哈，这人太搞笑了吧！你看你看，他居然……' },
                    { speaker: 'narrator', text: '他笑得前仰后合，完全不顾忌周围人的眼光，声音在安静的大厅里格外响亮。' },
                    { speaker: 'su_xinyue', text: '（无奈地）谨言，小声点，这是在店里……' },
                    { speaker: 'long_xinheng', text: '（收起笑声，但嘴角还忍不住上扬）好好好，我小声点……' },
                    { speaker: 'narrator', text: '夏晚忍不住多看了一眼。' },
                    { speaker: 'narrator', text: '在谨言收起笑声的那一瞬间，夏晚捕捉到了一个细节——' },
                    { speaker: 'narrator', text: '他的笑容消失得很快，快得有点不自然。' },
                    { speaker: 'narrator', text: '当他低下头假装看手机时，脸上的表情变得有些……空洞？' },
                    { speaker: 'narrator', text: '像是一个人在笑完之后，突然不知道该用什么表情面对接下来的空白。' },
                    { speaker: 'narrator', text: '但这个表情只持续了一两秒，很快他又恢复了嘻嘻哈哈的样子，举着手机给旁边的人看搞笑视频。' },
                    { speaker: 'xia_wan', text: '（他刚才……表情变得好快。）' }
                ],
                choices: [
                    { text: '上前搭话', next: 'xw_1_2_a_talk_mystery', affinity: { long_xinheng: 5 }, friendship: { long_xinheng: 5 } },
                    { text: '默默看着', next: 'xw_1_2_continue_mystery', affinity: { long_xinheng: 3 }, friendship: { long_xinheng: 3 } },
                    { text: '觉得他太吵', next: 'xw_1_2_continue_mystery', affinity: { long_xinheng: -3 }, friendship: { long_xinheng: -3 } }
                ]
            },
            // --- 观察谨言·主动搭话后续（推理本路线）---
            {
                id: 'xw_1_2_a_talk_mystery',
                title: '主动搭话·谨言',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚犹豫了一下，最终还是走了过去。' },
                    { speaker: 'xia_wan', text: '"那个……刚才你在看的视频是什么？看起来挺好笑的。"' },
                    { speaker: 'long_xinheng', text: '（抬起头，看到有人主动来搭话，眼睛一下子亮了起来）"哦！你也想看吗？来来来，给你看看这个——"' },
                    { speaker: 'narrator', text: '他热情地把手机屏幕转向夏晚，上面是一个搞笑动物的短视频。' },
                    { speaker: 'long_xinheng', text: '"你看这个猫，它居然在学人说话！哈哈哈哈——"' },
                    { speaker: 'xia_wan', text: '（忍不住笑了起来）"哈哈，真的挺好笑的。"' },
                    { speaker: 'long_xinheng', text: '"是吧是吧！我关注了好多这种博主，每天看看心情都好——"' },
                    { speaker: 'narrator', text: '他说话的时候语速很快，表情夸张，整个人像是有用不完的能量。' },
                    { speaker: 'narrator', text: '但夏晚注意到——' },
                    { speaker: 'narrator', text: '当他讲完一个笑话，停下来等待回应的那一瞬间——' },
                    { speaker: 'narrator', text: '他的眼神有一瞬间的空白。' },
                    { speaker: 'narrator', text: '像是不知道该怎么填满接下来的沉默。' },
                    { speaker: 'narrator', text: '然后他又立刻开口，讲了下一个笑话。' },
                    { speaker: 'xia_wan', text: '（他……好像很怕冷场？）' }
                ],
                choices: [
                    { text: '继续聊下去', next: 'xw_1_2_a_talk_mystery_1', affinity: { long_xinheng: 5 }, friendship: { long_xinheng: 5 } },
                    { text: '"你真的很会逗人开心"', next: 'xw_1_2_a_talk_mystery_2', affinity: { long_xinheng: 8 }, friendship: { long_xinheng: 8 } },
                    { text: '"你平时就这样吗？"', next: 'xw_1_2_a_talk_mystery_3', affinity: { long_xinheng: 3 }, friendship: { long_xinheng: 3 } }
                ]
            },
            // --- 谨言搭话·选择反馈（推理本）---
            {
                id: 'xw_1_2_a_talk_mystery_1',
                title: '继续交流',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你平时也这么能聊吗？"' },
                    { speaker: 'long_xinheng', text: '"那当然！我是这里的开心果嘛~"' },
                    { speaker: 'long_xinheng', text: '"哎，加个微信呗？下次有新本可以一起组局！"' },
                    { speaker: 'narrator', text: '他掏出手机，笑得眼睛眯成了一条缝。' },
                    { speaker: 'xia_wan', text: '（他加微信倒是挺主动的……）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            {
                id: 'xw_1_2_a_talk_mystery_2',
                title: '真诚夸赞',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你真的很会逗人开心。"' },
                    { speaker: 'narrator', text: '谨言愣了一下。' },
                    { speaker: 'long_xinheng', text: '"……哈哈，是吗？"' },
                    { speaker: 'narrator', text: '他的笑容突然变得有些不一样——少了几分夸张，多了几分真实。' },
                    { speaker: 'long_xinheng', text: '"谢谢你啊，你是第一个这么说的人。"' },
                    { speaker: 'xia_wan', text: '（第一个……？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            {
                id: 'xw_1_2_a_talk_mystery_3',
                title: '好奇追问',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你平时就这样吗？一直这么……精力充沛？"' },
                    { speaker: 'long_xinheng', text: '"……"' },
                    { speaker: 'narrator', text: '他愣了一秒，然后笑了笑。' },
                    { speaker: 'long_xinheng', text: '"不然呢？无聊也是一天，开心也是一天嘛~"' },
                    { speaker: 'xia_wan', text: '（这个回答……好像有点敷衍？）' },
                    { speaker: 'long_xinheng', text: '"好啦，我先去忙了，回聊~"' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            // --- 观察方圆（推理本路线·刀子伏笔）---
            {
                id: 'xw_1_2_b_mystery',
                title: '观察方圆',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '另一边，有个男生躺在沙发上，手机盖在脸上，看起来像是睡着了。' },
                    { speaker: 'narrator', text: '仔细一看，手机屏幕还亮着，上面是游戏画面——虽然人闭着眼睛，但手指偶尔还在屏幕上划动。' },
                    { speaker: 'gan_zhiyu', text: '（迷迷糊糊地嘟囔）……再给我五分钟……' },
                    { speaker: 'gong_qin', text: '（走过去轻轻拍了拍他）方圆，别睡了，等下要开会。' },
                    { speaker: 'gan_zhiyu', text: '（懒洋洋地翻了个身）开会叫我……' },
                    { speaker: 'narrator', text: '夏晚看得有点无语。' },
                    { speaker: 'gong_qin', text: '（摇摇头，小声对旁边的人说）方圆以前可不这样，刚来的时候比谁都积极……' },
                    { speaker: 'xia_wan', text: '（以前？听这意思，方圆以前好像不是这样的？）' }
                ],
                choices: [
                    { text: '觉得懒散', next: 'xw_1_2_continue_mystery', affinity: { gan_zhiyu: -3 }, friendship: { gan_zhiyu: -3 } },
                    { text: '觉得有意思', next: 'xw_1_2_b_talk_mystery', affinity: { gan_zhiyu: 3 }, friendship: { gan_zhiyu: 3 } },
                    { text: '无视', next: 'xw_1_2_continue_mystery', affinity: { gan_zhiyu: 0 }, friendship: { gan_zhiyu: 0 } }
                ]
            },
            // --- 观察方圆·主动搭话后续（推理本路线）---
            {
                id: 'xw_1_2_b_talk_mystery',
                title: '主动搭话·方圆',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚看着方圆躺着打游戏的样子，觉得有点好奇。' },
                    { speaker: 'xia_wan', text: '"喂，你这样打游戏不累吗？"' },
                    { speaker: 'gan_zhiyu', text: '（迷迷糊糊地睁开眼睛，看到是个不认识的人在说话，又闭上了眼睛）"……不累。"' },
                    { speaker: 'xia_wan', text: '"躺着玩手机对眼睛不好吧。"' },
                    { speaker: 'gan_zhiyu', text: '（懒洋洋地）"我乐意。"' },
                    { speaker: 'narrator', text: '夏晚有点无语，但也没有离开，继续在旁边看着。' },
                    { speaker: 'narrator', text: '过了一会儿，方圆睁开眼睛，看了夏晚一眼。' },
                    { speaker: 'gan_zhiyu', text: '"你是来玩本的新客人？"' },
                    { speaker: 'xia_wan', text: '"嗯，是啊。"' },
                    { speaker: 'gan_zhiyu', text: '"推理本还是情感本？"' },
                    { speaker: 'xia_wan', text: '"推理本。"' },
                    { speaker: 'gan_zhiyu', text: '（点点头，又闭上了眼睛）"推理本的话，让木星带，他比较专业。"' },
                    { speaker: 'xia_wan', text: '"谢谢……你怎么知道我选了推理本？"' },
                    { speaker: 'gan_zhiyu', text: '（闭着眼睛说）"猜的，一般第一次来的都会选推理本。"' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'gan_zhiyu', text: '"等你玩完出来，要是下雨了，记得找人借伞。这边天气多变。"' },
                    { speaker: 'narrator', text: '说完，他又把手机盖在脸上，继续"睡觉"。' },
                    { speaker: 'xia_wan', text: '（他……刚才是在提醒我吗？）' }
                ],
                choices: [
                    { text: '"你说找人借伞是什么意思？"', next: 'xw_1_2_b_talk_mystery_1', affinity: { gan_zhiyu: 3 }, friendship: { gan_zhiyu: 3 } },
                    { text: '"谢谢提醒"', next: 'xw_1_2_b_talk_mystery_2', affinity: { gan_zhiyu: 5 }, friendship: { gan_zhiyu: 5 } },
                    { text: '"你这人真奇怪"', next: 'xw_1_2_b_talk_mystery_3', affinity: { gan_zhiyu: 0 }, friendship: { gan_zhiyu: 0 } }
                ]
            },
            // --- 方圆搭话·选择反馈（推理本）---
            {
                id: 'xw_1_2_b_talk_mystery_1',
                title: '追问借伞',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你说找人借伞是什么意思？"' },
                    { speaker: 'gan_zhiyu', text: '（沉默了一会儿）' },
                    { speaker: 'gan_zhiyu', text: '"……没什么，就是随口一说。"' },
                    { speaker: 'narrator', text: '他的语气比刚才多了几分疏离。' },
                    { speaker: 'gan_zhiyu', text: '"你快去玩本吧，别迟到了。"' },
                    { speaker: 'xia_wan', text: '（他不想说……）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            {
                id: 'xw_1_2_b_talk_mystery_2',
                title: '礼貌道谢',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"谢谢提醒。"' },
                    { speaker: 'gan_zhiyu', text: '（愣了一下，然后嘴角微微动了动）"……嗯。"' },
                    { speaker: 'narrator', text: '他似乎不太习惯被人道谢。' },
                    { speaker: 'xia_wan', text: '（他刚才……是笑了一下吗？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            {
                id: 'xw_1_2_b_talk_mystery_3',
                title: '吐槽',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你这人真奇怪。"' },
                    { speaker: 'gan_zhiyu', text: '"……"' },
                    { speaker: 'gan_zhiyu', text: '（翻了个身，背对着夏晚）"奇怪的人多了，又不差我一个。"' },
                    { speaker: 'narrator', text: '他的声音闷闷的，听不出情绪。' },
                    { speaker: 'xia_wan', text: '（这话听着……好像有故事？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            // --- 观察吴琊（推理本路线·刀子伏笔）---
            {
                id: 'xw_1_2_c_mystery',
                title: '观察吴琊',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '休息区的角落里，有个男生独自坐着，戴着耳机，低头看书或者手机，整个人安安静静的。' },
                    { speaker: 'narrator', text: '周围的人聊天、打闹、说笑，他完全不受影响，仿佛沉浸在自己的世界里。' },
                    { speaker: 'gong_qin', text: '（对夏晚她们解释）那边那个是吴琊，他平时话不多，但人很好的。' },
                    { speaker: 'narrator', text: '吴琊像是听到了什么，微微抬了下头，但很快又低下头去，没有说话。' },
                    { speaker: 'xia_wan', text: '（感觉他有点难以接近。）' },
                    { speaker: 'narrator', text: '夏晚多看了一眼——' },
                    { speaker: 'narrator', text: '吴琊的手在手机屏幕上停顿了一下，像是想打开某个聊天软件。' },
                    { speaker: 'narrator', text: '他的手指在屏幕上悬停了片刻，然后……又放下了。' },
                    { speaker: 'narrator', text: '吴琊的表情有一瞬间的落寞，但很快又恢复了平静。' },
                    { speaker: 'xia_wan', text: '（他刚才……是想和谁聊天吗？）' }
                ],
                choices: [
                    { text: '主动搭话', next: 'xw_1_2_c_talk_mystery', affinity: { wu_ya: 3 }, friendship: { wu_ya: 3 } },
                    { text: '默默观察', next: 'xw_1_2_continue_mystery', affinity: { wu_ya: 3 }, friendship: { wu_ya: 3 } },
                    { text: '觉得他高冷', next: 'xw_1_2_continue_mystery', affinity: { wu_ya: -3 }, friendship: { wu_ya: -3 } }
                ]
            },
            // --- 观察吴琊·主动搭话后续（推理本路线）---
            {
                id: 'xw_1_2_c_talk_mystery',
                title: '主动搭话·吴琊',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚犹豫了一下，还是走了过去。' },
                    { speaker: 'xia_wan', text: '"你好……"' },
                    { speaker: 'wu_ya', text: '（抬起头，有些惊讶地看着夏晚）' },
                    { speaker: 'narrator', text: '他的眼神里有一丝意外——好像没想到会有人主动来找他说话。' },
                    { speaker: 'wu_ya', text: '"……你好。"' },
                    { speaker: 'narrator', text: '他的声音很轻，像是怕打扰到别人。' },
                    { speaker: 'narrator', text: '夏晚一时不知道该说什么，气氛有点尴尬。' },
                    { speaker: 'xia_wan', text: '"那个……你戴着耳机在听什么？"' },
                    { speaker: 'wu_ya', text: '（愣了一下）"……你想听吗？"' },
                    { speaker: 'narrator', text: '他把耳机分了一只给夏晚。' },
                    { speaker: 'narrator', text: '夏晚戴上耳机，发现是一首轻音乐，很安静的那种。' },
                    { speaker: 'xia_wan', text: '"挺好听的。"' },
                    { speaker: 'wu_ya', text: '"……嗯。"' },
                    { speaker: 'narrator', text: '又是一阵沉默。' },
                    { speaker: 'narrator', text: '但这次的沉默不像之前那么尴尬了——反而有一种奇怪的……舒适感。' },
                    { speaker: 'narrator', text: '吴琊看了夏晚一眼，嘴角微微动了动，像是想说什么，但最终还是没有开口。' },
                    { speaker: 'narrator', text: '他把耳机收回去，又低下了头。' },
                    { speaker: 'narrator', text: '但夏晚注意到——' },
                    { speaker: 'narrator', text: '他的耳朵好像有点红。' },
                    { speaker: 'xia_wan', text: '（他……是不是不太会和陌生人说话？）' }
                ],
                choices: [
                    { text: '"这首歌叫什么名字？"', next: 'xw_1_2_c_talk_mystery_1', affinity: { wu_ya: 8 }, friendship: { wu_ya: 8 } },
                    { text: '"我叫夏晚，你呢？"', next: 'xw_1_2_c_talk_mystery_2', affinity: { wu_ya: 5 }, friendship: { wu_ya: 5 } },
                    { text: '"打扰了，我先走了"', next: 'xw_1_2_c_talk_mystery_3', affinity: { wu_ya: 3 }, friendship: { wu_ya: 3 } }
                ]
            },
            // --- 吴琊搭话·选择反馈（推理本）---
            {
                id: 'xw_1_2_c_talk_mystery_1',
                title: '询问歌名',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"这首歌叫什么名字？"' },
                    { speaker: 'wu_ya', text: '（微微愣了一下，似乎没想到她会问这个）"……《River Flows In You》。"' },
                    { speaker: 'xia_wan', text: '"哦，我知道这首，挺温柔的。"' },
                    { speaker: 'wu_ya', text: '"……嗯。"' },
                    { speaker: 'narrator', text: '他点了点头，嘴角似乎弯了弯。' },
                    { speaker: 'xia_wan', text: '（他好像……挺开心的？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            {
                id: 'xw_1_2_c_talk_mystery_2',
                title: '自我介绍',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"我叫夏晚，你呢？"' },
                    { speaker: 'wu_ya', text: '（沉默了一会儿）"……吴琊。"' },
                    { speaker: 'xia_wan', text: '"吴琊……挺好听的名字。"' },
                    { speaker: 'wu_ya', text: '"……"' },
                    { speaker: 'narrator', text: '他低着头，耳尖又红了一些。' },
                    { speaker: 'xia_wan', text: '（他真的……很不擅长聊天啊。）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            {
                id: 'xw_1_2_c_talk_mystery_3',
                title: '礼貌告辞',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"打扰了，我先走了。"' },
                    { speaker: 'wu_ya', text: '"……嗯。"' },
                    { speaker: 'narrator', text: '他轻轻点了点头，又戴上了耳机。' },
                    { speaker: 'narrator', text: '但在夏晚转身的时候，她好像听到他轻轻说了一句——' },
                    { speaker: 'wu_ya', text: '"……谢谢。"' },
                    { speaker: 'xia_wan', text: '（谢谢？他谢我什么？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            // --- 观察虹猫（推理本路线·刀子伏笔）---
            {
                id: 'xw_1_2_d_mystery',
                title: '观察虹猫',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '休息区另一边，虹猫（苏馨悦）正在整理剧本，动作麻利，说话声音大大咧咧的。' },
                    { speaker: 'su_xinyue', text: '（对着手机发语音）好的好的，那个本子我记下来了，明天安排！' },
                    { speaker: 'narrator', text: '她一边整理一边哼着歌，看起来心情不错。' },
                    { speaker: 'narrator', text: '但夏晚注意到——' },
                    { speaker: 'narrator', text: '苏馨悦整理完剧本后，独自站在窗边，看着窗外的天空，神情有一瞬间的……落寞？' },
                    { speaker: 'narrator', text: '很快，苏馨悦又恢复了大大咧咧的样子，转身继续忙碌。' },
                    { speaker: 'xia_wan', text: '（她刚才……在想什么呢？）' }
                ],
                choices: [
                    { text: '主动搭话', next: 'xw_1_2_d_talk_mystery', affinity: {}, friendship: { su_xinyue: 5 } },
                    { text: '默默观察', next: 'xw_1_2_continue_mystery', affinity: {}, friendship: { su_xinyue: 3 } },
                    { text: '只是看看', next: 'xw_1_2_continue_mystery', affinity: {}, friendship: { su_xinyue: 0 } }
                ]
            },
            // --- 观察虹猫·主动搭话后续（推理本路线）---
            {
                id: 'xw_1_2_d_talk_mystery',
                title: '主动搭话·虹猫',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚走过去，和正在整理剧本的苏馨悦打了个招呼。' },
                    { speaker: 'xia_wan', text: '"你好，你整理得好整齐啊。"' },
                    { speaker: 'su_xinyue', text: '（抬起头，看到有客人来搭话，立刻露出了热情的笑容）"哎呀，谢谢你！第一次来玩吗？"' },
                    { speaker: 'xia_wan', text: '"嗯，是朋友推荐的。"' },
                    { speaker: 'su_xinyue', text: '"哪你们玩什么本呀？"' },
                    { speaker: 'xia_wan', text: '"还没定呢，在等。"' },
                    { speaker: 'su_xinyue', text: '"哦哦，等会儿的话可以找我聊！我叫苏馨悦，大家都叫我虹猫~"' },
                    { speaker: 'narrator', text: '她的声音响亮，笑容很有感染力。' },
                    { speaker: 'su_xinyue', text: '"你是大学生吗？看着像。"' },
                    { speaker: 'xia_wan', text: '"嗯，大一的。"' },
                    { speaker: 'su_xinyue', text: '"我也是大学生哦！不过我已经大三了~"' },
                    { speaker: 'narrator', text: '她一边说，一边继续整理剧本，动作麻利。' },
                    { speaker: 'su_xinyue', text: '"怎么样，对剧本杀感兴趣吗？有没有想过自己当DM？"' },
                    { speaker: 'xia_wan', text: '"DM？那不是要很会演吗？"' },
                    { speaker: 'su_xinyue', text: '（笑了笑）"那当然！不过也可以学嘛，我们店就在招兼职DM哦~"' },
                    { speaker: 'narrator', text: '她朝门口的方向努了努嘴。' },
                    { speaker: 'su_xinyue', text: '"门口有招聘海报，感兴趣的话可以看看~"' },
                    { speaker: 'xia_wan', text: '（想起刚才进门时好像确实看到了一张海报。）' },
                    { speaker: 'su_xinyue', text: '"好啦，不打扰你等了，有空来找我聊~"' },
                    { speaker: 'narrator', text: '她挥了挥手，又继续忙碌起来。' },
                    { speaker: 'narrator', text: '夏晚看着她忙碌的背影——' },
                    { speaker: 'narrator', text: '突然，她转过头，看向窗外的天空，神情有一一瞬间的落寞。' },
                    { speaker: 'narrator', text: '但只是一瞬间，她又恢复了大大咧咧的样子。' },
                    { speaker: 'xia_wan', text: '（她刚才……在想什么呢？）' }
                ],
                choices: [
                    { text: '"你当DM多久了？"', next: 'xw_1_2_d_talk_mystery_1', affinity: {}, friendship: { su_xinyue: 5 } },
                    { text: '"招聘DM要什么条件？"', next: 'xw_1_2_d_talk_mystery_2', affinity: {}, friendship: { su_xinyue: 8 } },
                    { text: '"你刚才在看什么？"', next: 'xw_1_2_d_talk_mystery_3', affinity: {}, friendship: { su_xinyue: 3 } }
                ]
            },
            // --- 虹猫搭话·选择反馈（推理本）---
            {
                id: 'xw_1_2_d_talk_mystery_1',
                title: '询问DM经历',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你当DM多久了？"' },
                    { speaker: 'su_xinyue', text: '"两个多月啦~"' },
                    { speaker: 'xia_wan', text: '"也挺久了"' },
                    { speaker: 'su_xinyue', text: '（笑了笑）"嗯，也算是店里的老员工了~"' },
                    { speaker: 'narrator', text: '她说这话的时候，语气里带着一点骄傲。' },
                    { speaker: 'xia_wan', text: '（两个月……）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            {
                id: 'xw_1_2_d_talk_mystery_2',
                title: '询问招聘',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"招聘DM要什么条件？"' },
                    { speaker: 'su_xinyue', text: '（眼睛一亮）"哎，你有兴趣？"' },
                    { speaker: 'xia_wan', text: '"就是随便问问……"' },
                    { speaker: 'su_xinyue', text: '"不限专业！主要是看能不能放得开、有没有耐心~"' },
                    { speaker: 'su_xinyue', text: '"有兴趣的话真的可以试试哦，店长人超好的！"' },
                    { speaker: 'xia_wan', text: '（她好像……很希望有人来应聘？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            {
                id: 'xw_1_2_d_talk_mystery_3',
                title: '关心询问',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你刚才在看什么？"' },
                    { speaker: 'su_xinyue', text: '（愣了一下）"啊？看什么？"' },
                    { speaker: 'narrator', text: '她的笑容僵了一瞬。' },
                    { speaker: 'su_xinyue', text: '"没什么啦~就是看天气，今天好像要下雨。"' },
                    { speaker: 'narrator', text: '她的语气恢复了自然，但回答得太快了。' },
                    { speaker: 'xia_wan', text: '（她刚才……明明不是在看天气吧？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_mystery'
            },
            // --- 推理本路线汇合：等待继续 ---
            {
                id: 'xw_1_2_continue_mystery',
                title: '等待继续',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'roommate', text: '怎么，还在看帅哥美女呢？' },
                    { speaker: 'xia_wan', text: '没有，随便看看。' },
                    { speaker: 'narrator', text: '没过多久，小琴走过来。' },
                    { speaker: 'gong_qin', text: '两位这边请~房间准备好了，你们的DM已经在里面等你们了。' },
                    { speaker: 'narrator', text: '夏晚和朋友跟着小琴走向游戏房间。' }
                ],
                choices: [],
                next: 'xw_1_3_a'
            },
            // ========================================
            // 情感本路线（xw_1_1_b分支）
            // ========================================
            // --- 观察谨言（情感本路线·刀子伏笔）---
            {
                id: 'xw_1_2_a_emotion',
                title: '观察谨言',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚的视线扫过休息区，看到一个微胖的男生正窝在沙发里，对着手机哈哈大笑。' },
                    { speaker: 'long_xinheng', text: '（对着手机喊）哈哈哈哈，这人太搞笑了吧！你看你看，他居然……' },
                    { speaker: 'narrator', text: '他笑得前仰后合，完全不顾忌周围人的眼光，声音在安静的大厅里格外响亮。' },
                    { speaker: 'su_xinyue', text: '（无奈地）谨言，小声点，这是在店里……' },
                    { speaker: 'long_xinheng', text: '（收起笑声，但嘴角还忍不住上扬）好好好，我小声点……' },
                    { speaker: 'narrator', text: '夏晚忍不住多看了一眼。' },
                    { speaker: 'narrator', text: '在谨言收起笑声的那一瞬间，夏晚捕捉到了一个细节——' },
                    { speaker: 'narrator', text: '他的笑容消失得很快，快得有点不自然。' },
                    { speaker: 'narrator', text: '当他低下头假装看手机时，脸上的表情变得有些……空洞？' },
                    { speaker: 'narrator', text: '像是一个人在笑完之后，突然不知道该用什么表情面对接下来的空白。' },
                    { speaker: 'narrator', text: '但这个表情只持续了一两秒，很快他又恢复了嘻嘻哈哈的样子，举着手机给旁边的人看搞笑视频。' },
                    { speaker: 'xia_wan', text: '（他刚才……表情变得好快。）' }
                ],
                choices: [
                    { text: '上前搭话', next: 'xw_1_2_a_talk_emotion', affinity: { long_xinheng: 5 }, friendship: { long_xinheng: 5 } },
                    { text: '默默看着', next: 'xw_1_2_continue_emotion', affinity: { long_xinheng: 3 }, friendship: { long_xinheng: 3 } },
                    { text: '觉得他太吵', next: 'xw_1_2_continue_emotion', affinity: { long_xinheng: -3 }, friendship: { long_xinheng: -3 } }
                ]
            },
            // --- 观察谨言·主动搭话后续（情感本路线）---
            {
                id: 'xw_1_2_a_talk_emotion',
                title: '主动搭话·谨言',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚犹豫了一下，最终还是走了过去。' },
                    { speaker: 'xia_wan', text: '"那个……刚才你在看的视频是什么？看起来挺好笑的。"' },
                    { speaker: 'long_xinheng', text: '（抬起头，看到有人主动来搭话，眼睛一下子亮了起来）"哦！你也想看吗？来来来，给你看看这个——"' },
                    { speaker: 'narrator', text: '他热情地把手机屏幕转向夏晚，上面是一个搞笑动物的短视频。' },
                    { speaker: 'long_xinheng', text: '"你看这个猫，它居然在学人说话！哈哈哈哈——"' },
                    { speaker: 'xia_wan', text: '（忍不住笑了起来）"哈哈，真的挺好笑的。"' },
                    { speaker: 'long_xinheng', text: '"是吧是吧！我关注了好多这种博主，每天看看心情都好——"' },
                    { speaker: 'narrator', text: '他说话的时候语速很快，表情夸张，整个人像是有用不完的能量。' },
                    { speaker: 'narrator', text: '但夏晚注意到——' },
                    { speaker: 'narrator', text: '当他讲完一个笑话，停下来等待回应的那一瞬间——' },
                    { speaker: 'narrator', text: '他的眼神有一瞬间的空白。' },
                    { speaker: 'narrator', text: '像是不知道该怎么填满接下来的沉默。' },
                    { speaker: 'narrator', text: '然后他又立刻开口，讲了下一个笑话。' },
                    { speaker: 'xia_wan', text: '（他……好像很怕冷场？）' }
                ],
                choices: [
                    { text: '继续聊下去', next: 'xw_1_2_a_talk_emotion_1', affinity: { long_xinheng: 5 }, friendship: { long_xinheng: 5 } },
                    { text: '"你真的很会逗人开心"', next: 'xw_1_2_a_talk_emotion_2', affinity: { long_xinheng: 8 }, friendship: { long_xinheng: 8 } },
                    { text: '"你平时就这样吗？"', next: 'xw_1_2_a_talk_emotion_3', affinity: { long_xinheng: 3 }, friendship: { long_xinheng: 3 } }
                ]
            },
            // --- 谨言搭话·选择反馈（情感本）---
            {
                id: 'xw_1_2_a_talk_emotion_1',
                title: '继续交流',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你平时也这么能聊吗？"' },
                    { speaker: 'long_xinheng', text: '"那当然！我是这里的开心果嘛~"' },
                    { speaker: 'long_xinheng', text: '"哎，加个微信呗？下次有新本可以一起组局！"' },
                    { speaker: 'narrator', text: '他掏出手机，笑得眼睛眯成了一条缝。' },
                    { speaker: 'xia_wan', text: '（他加微信倒是挺主动的……）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            {
                id: 'xw_1_2_a_talk_emotion_2',
                title: '真诚夸赞',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你真的很会逗人开心。"' },
                    { speaker: 'narrator', text: '谨言愣了一下。' },
                    { speaker: 'long_xinheng', text: '"……哈哈，是吗？"' },
                    { speaker: 'narrator', text: '他的笑容突然变得有些不一样——少了几分夸张，多了几分真实。' },
                    { speaker: 'long_xinheng', text: '"谢谢你啊，你是第一个这么说的人。"' },
                    { speaker: 'xia_wan', text: '（第一个……？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            {
                id: 'xw_1_2_a_talk_emotion_3',
                title: '好奇追问',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你平时就这样吗？一直这么……精力充沛？"' },
                    { speaker: 'long_xinheng', text: '"……"' },
                    { speaker: 'narrator', text: '他愣了一秒，然后笑了笑。' },
                    { speaker: 'long_xinheng', text: '"不然呢？无聊也是一天，开心也是一天嘛~"' },
                    { speaker: 'xia_wan', text: '（这个回答……好像有点敷衍？）' },
                    { speaker: 'long_xinheng', text: '"好啦，我先去忙了，回聊~"' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            // --- 观察方圆（情感本路线·刀子伏笔）---
            {
                id: 'xw_1_2_b_emotion',
                title: '观察方圆',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '另一边，有个男生躺在沙发上，手机盖在脸上，看起来像是睡着了。' },
                    { speaker: 'narrator', text: '仔细一看，手机屏幕还亮着，上面是游戏画面——虽然人闭着眼睛，但手指偶尔还在屏幕上划动。' },
                    { speaker: 'gan_zhiyu', text: '（迷迷糊糊地嘟囔）……再给我五分钟……' },
                    { speaker: 'gong_qin', text: '（走过去轻轻拍了拍他）方圆，别睡了，等下要开会。' },
                    { speaker: 'gan_zhiyu', text: '（懒洋洋地翻了个身）开会叫我……' },
                    { speaker: 'narrator', text: '夏晚看得有点无语。' },
                    { speaker: 'gong_qin', text: '（摇摇头，小声对旁边的人说）方圆以前可不这样，刚来的时候比谁都积极……' },
                    { speaker: 'xia_wan', text: '（以前？听这意思，方圆以前好像不是这样的？）' }
                ],
                choices: [
                    { text: '觉得懒散', next: 'xw_1_2_continue_emotion', affinity: { gan_zhiyu: -3 }, friendship: { gan_zhiyu: -3 } },
                    { text: '觉得有意思', next: 'xw_1_2_b_talk_emotion', affinity: { gan_zhiyu: 3 }, friendship: { gan_zhiyu: 3 } },
                    { text: '无视', next: 'xw_1_2_continue_emotion', affinity: { gan_zhiyu: 0 }, friendship: { gan_zhiyu: 0 } }
                ]
            },
            // --- 观察方圆·主动搭话后续（情感本路线）---
            {
                id: 'xw_1_2_b_talk_emotion',
                title: '主动搭话·方圆',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚看着方圆躺着打游戏的样子，觉得有点好奇。' },
                    { speaker: 'xia_wan', text: '"喂，你这样打游戏不累吗？"' },
                    { speaker: 'gan_zhiyu', text: '（迷迷糊糊地睁开眼睛，看到是个不认识的人在说话，又闭上了眼睛）"……不累。"' },
                    { speaker: 'xia_wan', text: '"躺着玩手机对眼睛不好吧。"' },
                    { speaker: 'gan_zhiyu', text: '（懒洋洋地）"我乐意。"' },
                    { speaker: 'narrator', text: '夏晚有点无语，但也没有离开，继续在旁边看着。' },
                    { speaker: 'narrator', text: '过了一会儿，方圆睁开眼睛，看了夏晚一眼。' },
                    { speaker: 'gan_zhiyu', text: '"你是来玩本的新客人？"' },
                    { speaker: 'xia_wan', text: '"嗯，是啊。"' },
                    { speaker: 'gan_zhiyu', text: '"推理本还是情感本？"' },
                    { speaker: 'xia_wan', text: '"情感本。"' },
                    { speaker: 'gan_zhiyu', text: '（点点头，又闭上了眼睛）"情感本的话，让木星带，他会照顾人的情绪。"' },
                    { speaker: 'xia_wan', text: '"谢谢……你怎么知道我选了情感本？"' },
                    { speaker: 'gan_zhiyu', text: '（闭着眼睛说）"猜的，一般第二次来的会选情感本。"' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'gan_zhiyu', text: '"等你玩完出来，要是下雨了，记得找人借伞。这边天气多变。"' },
                    { speaker: 'narrator', text: '说完，他又把手机盖在脸上，继续"睡觉"。' },
                    { speaker: 'xia_wan', text: '（他……刚才是在提醒我吗？）' }
                ],
                choices: [
                    { text: '"你说找人借伞是什么意思？"', next: 'xw_1_2_b_talk_emotion_1', affinity: { gan_zhiyu: 3 }, friendship: { gan_zhiyu: 3 } },
                    { text: '"谢谢提醒"', next: 'xw_1_2_b_talk_emotion_2', affinity: { gan_zhiyu: 5 }, friendship: { gan_zhiyu: 5 } },
                    { text: '"你这人真奇怪"', next: 'xw_1_2_b_talk_emotion_3', affinity: { gan_zhiyu: 0 }, friendship: { gan_zhiyu: 0 } }
                ]
            },
            // --- 方圆搭话·选择反馈（情感本）---
            {
                id: 'xw_1_2_b_talk_emotion_1',
                title: '追问借伞',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你说找人借伞是什么意思？"' },
                    { speaker: 'gan_zhiyu', text: '（沉默了一会儿）' },
                    { speaker: 'gan_zhiyu', text: '"……没什么，就是随口一说。"' },
                    { speaker: 'narrator', text: '他的语气比刚才多了几分疏离。' },
                    { speaker: 'gan_zhiyu', text: '"你快去玩本吧，别迟到了。"' },
                    { speaker: 'xia_wan', text: '（他不想说……）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            {
                id: 'xw_1_2_b_talk_emotion_2',
                title: '礼貌道谢',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"谢谢提醒。"' },
                    { speaker: 'gan_zhiyu', text: '（愣了一下，然后嘴角微微动了动）"……嗯。"' },
                    { speaker: 'narrator', text: '他似乎不太习惯被人道谢。' },
                    { speaker: 'xia_wan', text: '（他刚才……是笑了一下吗？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            {
                id: 'xw_1_2_b_talk_emotion_3',
                title: '吐槽',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你这人真奇怪。"' },
                    { speaker: 'gan_zhiyu', text: '"……"' },
                    { speaker: 'gan_zhiyu', text: '（翻了个身，背对着夏晚）"奇怪的人多了，又不差我一个。"' },
                    { speaker: 'narrator', text: '他的声音闷闷的，听不出情绪。' },
                    { speaker: 'xia_wan', text: '（这话听着……好像有故事？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            // --- 观察吴琊（情感本路线·刀子伏笔）---
            {
                id: 'xw_1_2_c_emotion',
                title: '观察吴琊',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '休息区的角落里，有个男生独自坐着，戴着耳机，低头看书或者手机，整个人安安静静的。' },
                    { speaker: 'narrator', text: '周围的人聊天、打闹、说笑，他完全不受影响，仿佛沉浸在自己的世界里。' },
                    { speaker: 'gong_qin', text: '（对夏晚她们解释）那边那个是吴琊，他平时话不多，但人很好的。' },
                    { speaker: 'narrator', text: '吴琊像是听到了什么，微微抬了下头，但很快又低下头去，没有说话。' },
                    { speaker: 'xia_wan', text: '（感觉他有点难以接近。）' },
                    { speaker: 'narrator', text: '夏晚多看了一眼——' },
                    { speaker: 'narrator', text: '吴琊的手在手机屏幕上停顿了一下，像是想打开某个聊天软件。' },
                    { speaker: 'narrator', text: '他的手指在屏幕上悬停了片刻，然后……又放下了。' },
                    { speaker: 'narrator', text: '吴琊的表情有一一瞬间的落寞，但很快又恢复了平静。' },
                    { speaker: 'xia_wan', text: '（他刚才……是想和谁聊天吗？）' }
                ],
                choices: [
                    { text: '主动搭话', next: 'xw_1_2_c_talk_emotion', affinity: { wu_ya: 3 }, friendship: { wu_ya: 3 } },
                    { text: '默默观察', next: 'xw_1_2_continue_emotion', affinity: { wu_ya: 3 }, friendship: { wu_ya: 3 } },
                    { text: '觉得他高冷', next: 'xw_1_2_continue_emotion', affinity: { wu_ya: -3 }, friendship: { wu_ya: -3 } }
                ]
            },
            // --- 观察吴琊·主动搭话后续（情感本路线）---
            {
                id: 'xw_1_2_c_talk_emotion',
                title: '主动搭话·吴琊',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚犹豫了一下，还是走了过去。' },
                    { speaker: 'xia_wan', text: '"你好……"' },
                    { speaker: 'wu_ya', text: '（抬起头，有些惊讶地看着夏晚）' },
                    { speaker: 'narrator', text: '他的眼神里有一丝意外——好像没想到会有人主动来找他说话。' },
                    { speaker: 'wu_ya', text: '"……你好。"' },
                    { speaker: 'narrator', text: '他的声音很轻，像是怕打扰到别人。' },
                    { speaker: 'narrator', text: '夏晚一时不知道该说什么，气氛有点尴尬。' },
                    { speaker: 'xia_wan', text: '"那个……你戴着耳机在听什么？"' },
                    { speaker: 'wu_ya', text: '（愣了一下）"……你想听吗？"' },
                    { speaker: 'narrator', text: '他把耳机分了一只给夏晚。' },
                    { speaker: 'narrator', text: '夏晚戴上耳机，发现是一首轻音乐，很安静的那种。' },
                    { speaker: 'xia_wan', text: '"挺好听的。"' },
                    { speaker: 'wu_ya', text: '"……嗯。"' },
                    { speaker: 'narrator', text: '又是一阵沉默。' },
                    { speaker: 'narrator', text: '但这次的沉默不像之前那么尴尬了——反而有一种奇怪的……舒适感。' },
                    { speaker: 'narrator', text: '吴琊看了夏晚一眼，嘴角微微动了动，像是想说什么，但最终还是没有开口。' },
                    { speaker: 'narrator', text: '他把耳机收回去，又低下了头。' },
                    { speaker: 'narrator', text: '但夏晚注意到——' },
                    { speaker: 'narrator', text: '他的耳朵好像有点红。' },
                    { speaker: 'xia_wan', text: '（他……是不是不太会和陌生人说话？）' }
                ],
                choices: [
                    { text: '"这首歌叫什么名字？"', next: 'xw_1_2_c_talk_emotion_1', affinity: { wu_ya: 8 }, friendship: { wu_ya: 8 } },
                    { text: '"我叫夏晚，你呢？"', next: 'xw_1_2_c_talk_emotion_2', affinity: { wu_ya: 5 }, friendship: { wu_ya: 5 } },
                    { text: '"打扰了，我先走了"', next: 'xw_1_2_c_talk_emotion_3', affinity: { wu_ya: 3 }, friendship: { wu_ya: 3 } }
                ]
            },
            // --- 吴琊搭话·选择反馈（情感本）---
            {
                id: 'xw_1_2_c_talk_emotion_1',
                title: '询问歌名',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"这首歌叫什么名字？"' },
                    { speaker: 'wu_ya', text: '（微微愣了一下，似乎没想到她会问这个）"……《River Flows In You》。"' },
                    { speaker: 'xia_wan', text: '"哦，我知道这首，挺温柔的。"' },
                    { speaker: 'wu_ya', text: '"……嗯。"' },
                    { speaker: 'narrator', text: '他点了点头，嘴角似乎弯了弯。' },
                    { speaker: 'xia_wan', text: '（他好像……挺开心的？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            {
                id: 'xw_1_2_c_talk_emotion_2',
                title: '自我介绍',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"我叫夏晚，你呢？"' },
                    { speaker: 'wu_ya', text: '（沉默了一会儿）"……吴琊。"' },
                    { speaker: 'xia_wan', text: '"吴琊……挺好听的名字。"' },
                    { speaker: 'wu_ya', text: '"……"' },
                    { speaker: 'narrator', text: '他低着头，耳尖又红了一些。' },
                    { speaker: 'xia_wan', text: '（他真的……很不擅长聊天啊。）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            {
                id: 'xw_1_2_c_talk_emotion_3',
                title: '礼貌告辞',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"打扰了，我先走了。"' },
                    { speaker: 'wu_ya', text: '"……嗯。"' },
                    { speaker: 'narrator', text: '他轻轻点了点头，又戴上了耳机。' },
                    { speaker: 'narrator', text: '但在夏晚转身的时候，她好像听到他轻轻说了一句——' },
                    { speaker: 'wu_ya', text: '"……谢谢。"' },
                    { speaker: 'xia_wan', text: '（谢谢？他谢我什么？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            // --- 观察虹猫（情感本路线·刀子伏笔）---
            {
                id: 'xw_1_2_d_emotion',
                title: '观察虹猫',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '休息区另一边，虹猫（苏馨悦）正在整理剧本，动作麻利，说话声音大大咧咧的。' },
                    { speaker: 'su_xinyue', text: '（对着手机发语音）好的好的，那个本子我记下来了，明天安排！' },
                    { speaker: 'narrator', text: '她一边整理一边哼着歌，看起来心情不错。' },
                    { speaker: 'narrator', text: '但夏晚注意到——' },
                    { speaker: 'narrator', text: '苏馨悦整理完剧本后，独自站在窗边，看着窗外的天空，神情有一瞬间的……落寞？' },
                    { speaker: 'narrator', text: '很快，苏馨悦又恢复了大大咧咧的样子，转身继续忙碌。' },
                    { speaker: 'xia_wan', text: '（她刚才……在想什么呢？）' }
                ],
                choices: [
                    { text: '主动搭话', next: 'xw_1_2_d_talk_emotion', affinity: {}, friendship: { su_xinyue: 5 } },
                    { text: '默默观察', next: 'xw_1_2_continue_emotion', affinity: {}, friendship: { su_xinyue: 3 } },
                    { text: '只是看看', next: 'xw_1_2_continue_emotion', affinity: {}, friendship: { su_xinyue: 0 } }
                ]
            },
            // --- 观察虹猫·主动搭话后续（情感本路线）---
            {
                id: 'xw_1_2_d_talk_emotion',
                title: '主动搭话·虹猫',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚走过去，和正在整理剧本的苏馨悦打了个招呼。' },
                    { speaker: 'xia_wan', text: '"你好，你整理得好整齐啊。"' },
                    { speaker: 'su_xinyue', text: '（抬起头，看到有客人来搭话，立刻露出了热情的笑容）"哎呀，谢谢你！第一次来玩吗？"' },
                    { speaker: 'xia_wan', text: '"嗯，是朋友推荐的。"' },
                    { speaker: 'su_xinyue', text: '"哪你们玩什么本呀？"' },
                    { speaker: 'xia_wan', text: '"还没定呢，在等。"' },
                    { speaker: 'su_xinyue', text: '"哦哦，等会儿的话可以找我聊！我叫苏馨悦，大家都叫我虹猫~"' },
                    { speaker: 'narrator', text: '她的声音响亮，笑容很有感染力。' },
                    { speaker: 'su_xinyue', text: '"你是大学生吗？看着像。"' },
                    { speaker: 'xia_wan', text: '"嗯，大一的。"' },
                    { speaker: 'su_xinyue', text: '"我也是大学生哦！不过我已经大三了~"' },
                    { speaker: 'narrator', text: '她一边说，一边继续整理剧本，动作麻利。' },
                    { speaker: 'su_xinyue', text: '"怎么样，对剧本杀感兴趣吗？有没有想过自己当DM？"' },
                    { speaker: 'xia_wan', text: '"DM？那不是要很会演吗？"' },
                    { speaker: 'su_xinyue', text: '（笑了笑）"那当然！不过也可以学嘛，我们店就在招兼职DM哦~"' },
                    { speaker: 'narrator', text: '她朝门口的方向努了努嘴。' },
                    { speaker: 'su_xinyue', text: '"门口有招聘海报，感兴趣的话可以看看~"' },
                    { speaker: 'xia_wan', text: '（想起刚才进门时好像确实看到了一张海报。）' },
                    { speaker: 'su_xinyue', text: '"好啦，不打扰你等了，有空来找我聊~"' },
                    { speaker: 'narrator', text: '她挥了挥手，又继续忙碌起来。' },
                    { speaker: 'narrator', text: '夏晚看着她忙碌的背影——' },
                    { speaker: 'narrator', text: '突然，她转过头，看向窗外的天空，神情有一瞬间的落寞。' },
                    { speaker: 'narrator', text: '但只是一瞬间，她又恢复了大大咧咧的样子。' },
                    { speaker: 'xia_wan', text: '（她刚才……在想什么呢？）' }
                ],
                choices: [
                    { text: '"你当DM多久了？"', next: 'xw_1_2_d_talk_emotion_1', affinity: {}, friendship: { su_xinyue: 5 } },
                    { text: '"招聘DM要什么条件？"', next: 'xw_1_2_d_talk_emotion_2', affinity: {}, friendship: { su_xinyue: 8 } },
                    { text: '"你刚才在看什么？"', next: 'xw_1_2_d_talk_emotion_3', affinity: {}, friendship: { su_xinyue: 3 } }
                ]
            },
            // --- 虹猫搭话·选择反馈（情感本）---
            {
                id: 'xw_1_2_d_talk_emotion_1',
                title: '询问DM经历',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你当DM多久了？"' },
                    { speaker: 'su_xinyue', text: '"两个多月啦~"' },
                    { speaker: 'xia_wan', text: '"也挺久了。"' },
                    { speaker: 'su_xinyue', text: '（笑了笑）"嗯，算是店里的老员工了~"' },
                    { speaker: 'narrator', text: '她说这话的时候，语气里带着一点骄傲。' },
                    { speaker: 'xia_wan', text: '（两年……）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            {
                id: 'xw_1_2_d_talk_emotion_2',
                title: '询问招聘',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"招聘DM要什么条件？"' },
                    { speaker: 'su_xinyue', text: '（眼睛一亮）"哎，你有兴趣？"' },
                    { speaker: 'xia_wan', text: '"就是随便问问……"' },
                    { speaker: 'su_xinyue', text: '"不限专业！主要是看能不能放得开、有没有耐心~"' },
                    { speaker: 'su_xinyue', text: '"有兴趣的话真的可以试试哦，店长人超好的！"' },
                    { speaker: 'xia_wan', text: '（她好像……很希望有人来应聘？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            {
                id: 'xw_1_2_d_talk_emotion_3',
                title: '关心询问',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '"你刚才在看什么？"' },
                    { speaker: 'su_xinyue', text: '（愣了一下）"啊？看什么？"' },
                    { speaker: 'narrator', text: '她的笑容僵了一瞬。' },
                    { speaker: 'su_xinyue', text: '"没什么啦~就是看天气，今天好像要下雨。"' },
                    { speaker: 'narrator', text: '她的语气恢复了自然，但回答得太快了。' },
                    { speaker: 'xia_wan', text: '（她刚才……明明不是在看天气吧？）' }
                ],
                choices: [],
                next: 'xw_1_2_continue_emotion'
            },
            // --- 情感本路线汇合：等待继续 ---
            {
                id: 'xw_1_2_continue_emotion',
                title: '等待继续',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'roommate', text: '怎么，还在看帅哥美女呢？' },
                    { speaker: 'xia_wan', text: '没有，随便看看。' },
                    { speaker: 'narrator', text: '没过多久，小琴走过来。' },
                    { speaker: 'gong_qin', text: '两位这边请~房间准备好了，你们的DM已经在里面等你们了。' },
                    { speaker: 'narrator', text: '夏晚和朋友跟着小琴走向游戏房间。' }
                ],
                choices: [],
                next: 'xw_1_3_b'
            },
            // --- 节点1.3A:初遇木星（推理本）---
            {
                id: 'xw_1_3_a',
                title: '初遇木星',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '推开房门，一股淡淡的香薰味道飘来。' },
                    { speaker: 'narrator', text: '房间不大，但布置得很用心——墙上挂着复古风格的装饰画，桌上摆着蜡烛灯（道具），氛围感十足。' },
                    { speaker: 'narrator', text: '房间中央坐着一个男生，穿着简单的白T恤，看起来很干净利落。' },
                    { speaker: 'xiao_tong', text: '（站起来，微微一笑）你们好，我是今天的DM木星，欢迎来玩《暗夜追凶》。' },
                    { speaker: 'narrator', text: '木星的声音低沉而有磁性，让人听着很舒服。' },
                    { speaker: 'xiao_tong', text: '你们先坐，还有其他两位玩家马上就到。' },
                    { speaker: 'narrator', text: '夏晚和朋友找了个位置坐下，夏晚不自觉地多看了木星一眼。' },
                    { speaker: 'xia_wan', text: '（……还挺帅的。）' },
                    { speaker: 'narrator', text: '没过多久，另外两位拼桌的玩家也到了——一对情侣，看起来是大学生。' },
                    { speaker: 'xiao_tong', text: '好的，人齐了，那我们开始吧。' },
                    { speaker: 'xiao_tong', text: '（翻开剧本，声音沉稳）各位玩家，欢迎来到《暗夜追凶》的世界……' },
                    { speaker: 'narrator', text: '木星开始介绍剧本背景，语速不紧不慢，条理清晰。' },
                    { speaker: 'xiao_tong', text: '这是一个关于追查真凶的故事，在座的每一位都有可能是嫌疑人……' },
                    { speaker: 'narrator', text: '他的眼神专注而认真，完全沉浸在角色状态中。' },
                    { speaker: 'roommate', text: '（小声）这个DM确实挺帅的诶。' },
                    { speaker: 'xia_wan', text: '（小声）嗯，还行吧……' },
                    { speaker: 'roommate', text: '（小声）你看他在控场的时候特别有范儿。' },
                    { speaker: 'narrator', text: '夏晚一边和朋友聊着，一边观察木星带本的样子。' },
                    { speaker: 'narrator', text: '木星的表现：' },
                    { speaker: 'narrator', text: '• 控场能力强：有条不紊地引导玩家进入剧情' },
                    { speaker: 'narrator', text: '• 逻辑清晰：复盘时把线索梳理得明明白白' },
                    { speaker: 'narrator', text: '• 声音好听：念线索时抑扬顿挫，很有感染力' },
                    { speaker: 'narrator', text: '• 认真负责：随时关注每位玩家的体验' },
                    { speaker: 'xia_wan', text: '（这个DM确实挺专业的……声音也好听。）' },
                    { speaker: 'roommate', text: '（小声）感觉他带本特别稳，全程都在线。' },
                    { speaker: 'xia_wan', text: '嗯。' },
                    { speaker: 'narrator', text: '经过两个多小时的推理，大家终于锁定了真凶。' },
                    { speaker: 'xiao_tong', text: '（满意地点头）恭喜各位，成功破案！' },
                    { speaker: 'xiao_tong', text: '（开始复盘）其实这个剧本有几个关键线索……' },
                    { speaker: 'narrator', text: '复盘时，木星把整个案件的逻辑链条梳理得非常清晰，让人恍然大悟。' },
                    { speaker: 'xiao_tong', text: '感谢大家今天来玩，下次有机会再来~' },
                    { speaker: 'narrator', text: '夏晚和朋友站起来准备离开。' }
                ],
                choices: [],
                next: 'xw_1_4_a'
            },
            // --- 节点1.3B:初遇橙子（情感本）---
            {
                id: 'xw_1_3_b',
                title: '初遇橙子',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '推开房门，一股温馨的香薰味道飘来。' },
                    { speaker: 'narrator', text: '房间布置得很温馨——暖色调的灯光、柔软的沙发、墙上挂着一些感性的装饰画。' },
                    { speaker: 'narrator', text: '房间中央坐着一个女生，长发飘飘，笑起来很甜美。' },
                    { speaker: 'chengzi', text: '（站起来，热情地打招呼）你们好呀！我是今天的DM橙子，欢迎来玩《那年夏天》~' },
                    { speaker: 'narrator', text: '橙子的声音甜甜的，笑容很亲切。' },
                    { speaker: 'chengzi', text: '你们先坐，还有其他玩家马上就到~' },
                    { speaker: 'narrator', text: '夏晚对橙子的第一印象是——很可爱很好相处。' },
                    { speaker: 'xia_wan', text: '（这个DM看起来挺好说话的。）' },
                    { speaker: 'narrator', text: '等其他玩家陆续到齐后，一共六个人——都是年轻人，有大学生也有上班族。' },
                    { speaker: 'chengzi', text: '好的，人齐了，那我们开始吧！' },
                    { speaker: 'chengzi', text: '（翻开剧本，声音温柔）各位玩家，欢迎来到《那年夏天》的世界……' },
                    { speaker: 'narrator', text: '橙子的声音温柔而富有感情，一下子就把人带入到了故事氛围中。' },
                    { speaker: 'chengzi', text: '这是一个关于友情和成长的故事，在座的每一位都有属于自己的秘密……' },
                    { speaker: 'narrator', text: '她一边说，一边观察着每个人的表情，似乎在捕捉大家的情绪。' },
                    { speaker: 'roommate', text: '（小声）这个DM好甜啊，声音也好温柔。' },
                    { speaker: 'xia_wan', text: '（小声）嗯，感觉带情感本应该很会渲染气氛。' },
                    { speaker: 'roommate', text: '（小声）你看她讲故事的时候，眼睛都在发光诶。' },
                    { speaker: 'narrator', text: '橙子的表现：' },
                    { speaker: 'narrator', text: '• 情绪渲染强：很会带动情感氛围，让人很快入戏' },
                    { speaker: 'narrator', text: '• 细心体贴：随时关注每位玩家的情绪状态' },
                    { speaker: 'narrator', text: '• 热情亲切：和玩家互动时很自然，不会有距离感' },
                    { speaker: 'narrator', text: '• 认真负责：精心准备每个环节' },
                    { speaker: 'xia_wan', text: '（她好像真的很喜欢剧本杀……）' },
                    { speaker: 'narrator', text: '夏晚注意到，橙子在讲述某个感人的剧情时，眼眶微微泛红，像是很有共鸣。' },
                    { speaker: 'roommate', text: '（小声）她是不是快要哭了？' },
                    { speaker: 'xia_wan', text: '感觉她真的很有感触……' },
                    { speaker: 'narrator', text: '经过两个多小时的体验，剧本进入尾声。' },
                    { speaker: 'chengzi', text: '（声音有点哽咽）感谢各位今天的陪伴……希望《那年夏天》能给你们留下美好的回忆。' },
                    { speaker: 'narrator', text: '不少玩家都红了眼眶，包括橙子自己。' },
                    { speaker: 'chengzi', text: '好啦，我们来复盘一下今天的体验~' },
                    { speaker: 'narrator', text: '复盘时，橙子很耐心地和每位玩家交流，分享自己对剧本的感受。' },
                    { speaker: 'chengzi', text: '感谢大家今天来玩，下次有机会再来~' },
                    { speaker: 'xia_wan', text: '（她好像真的把剧本杀当成自己的热爱了……）' }
                ],
                choices: [],
                next: 'xw_1_4_b'
            },
            // --- 节点1.4A:离开店铺（推理本路线）---
            {
                id: 'xw_1_4_a',
                title: '离开店铺',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '游戏结束后，大家陆续离开游戏房间。' },
                    { speaker: 'gong_qin', text: '几位玩完了？请问是现金还是扫码~' },
                    { speaker: 'roommate', text: '扫码吧。' },
                    { speaker: 'narrator', text: '夏晚掏出手机，扫码付款。' },
                    { speaker: 'gong_qin', text: '好的，谢谢~欢迎下次再来哦！' },
                    { speaker: 'narrator', text: '夏晚和朋友走向门口，边走边聊着刚才玩本的事。' },
                    { speaker: 'roommate', text: '这个本确实可以，下次再来试试别的。' },
                    { speaker: 'xia_wan', text: '嗯，还行吧。' },
                    { speaker: 'narrator', text: '夏晚说得心不在焉，脑子里还在想着刚才木星带本的样子。' },
                    { speaker: 'roommate', text: '想什么呢？' },
                    { speaker: 'xia_wan', text: '没想什么……' },
                    { speaker: 'narrator', text: '话音未落，夏晚差点撞上迎面走来的人——' },
                    { speaker: 'xiao_tong', text: '（伸手拉了一下夏晚的手臂）小心点，差点摔了。' },
                    { speaker: 'xia_wan', text: '啊……谢谢。' },
                    { speaker: 'xiao_tong', text: '（松开手，微微笑了笑）没事，走路注意看路。' },
                    { speaker: 'xiao_tong', text: '你们玩得开心就好，下次再来~' },
                    { speaker: 'narrator', text: '说完，木星点点头，从她们身边走过，去忙别的事了。' },
                    { speaker: 'narrator', text: '夏晚看着他的背影。' },
                    { speaker: 'roommate', text: '（小声）哎呦，还扶你了一下呢~' },
                    { speaker: 'xia_wan', text: '（脸微微红了）别瞎说，快走吧。' }
                ],
                choices: [],
                next: 'xw_1_5_a'
            },
            // --- 节点1.4B:离开店铺（情感本路线）---
            {
                id: 'xw_1_4_b',
                title: '离开店铺',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '游戏结束后，大家陆续离开游戏房间。' },
                    { speaker: 'gong_qin', text: '几位玩完了？请问是现金还是扫码~' },
                    { speaker: 'roommate', text: '扫码吧。' },
                    { speaker: 'narrator', text: '夏晚掏出手机，扫码付款。' },
                    { speaker: 'gong_qin', text: '好的，谢谢~欢迎下次再来哦！' },
                    { speaker: 'narrator', text: '夏晚和朋友正准备离开，橙子从后面追了上来。' },
                    { speaker: 'chengzi', text: '等一下~' },
                    { speaker: 'narrator', text: '夏晚回头，看到橙子手里拿着一个小本子。' },
                    { speaker: 'chengzi', text: '这是我们店的会员小本子，送你们一人一本~以后来玩可以盖章，集齐一定数量可以打折哦！' },
                    { speaker: 'xia_wan', text: '谢谢……' },
                    { speaker: 'chengzi', text: '不客气！今天的《那年夏天》你们玩得开心吗？' },
                    { speaker: 'roommate', text: '很开心！这个本确实很感人，我眼泪都快出来了。' },
                    { speaker: 'chengzi', text: '（笑了笑）那就好~我带这个本的时候也经常被感动到。' },
                    { speaker: 'narrator', text: '橙子的笑容很真诚，看起来是真的很喜欢这份工作。' },
                    { speaker: 'chengzi', text: '好啦，你们慢走，下次有机会再来玩别的本~' },
                    { speaker: 'xia_wan', text: '嗯，会的。' },
                    { speaker: 'narrator', text: '夏晚和朋友走出店门。' },
                    { speaker: 'roommate', text: '这个DM真的好甜啊，而且感觉她真的很喜欢剧本杀诶。' },
                    { speaker: 'xia_wan', text: '嗯，是挺可爱的。' },
                    { speaker: 'narrator', text: '夏晚走出店门，忍不住回头看了一眼——橙子还站在门口，热情地送别其他客人。' },
                    { speaker: 'xia_wan', text: '（她好像……真的很热爱这份工作。）' }
                ],
                choices: [],
                next: 'xw_1_5_b'
            },
            // --- 节点1.5A:意外事件·借伞（推理本路线） ---
            {
                id: 'xw_1_5_a',
                title: '借伞',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚和朋友刚走出店门，就发现——下雨了。' },
                    { speaker: 'roommate', text: '卧槽，下雨了？！' },
                    { speaker: 'narrator', text: '天空灰蒙蒙的，雨点噼里啪啦地砸下来，看起来一时半会儿停不了。' },
                    { speaker: 'roommate', text: '我们没带伞啊，怎么办？' },
                    { speaker: 'narrator', text: '夏晚也有点傻眼，正准备冲进雨里——' },
                    { speaker: 'su_xinyue', text: '（从店里快步走出来）等一下！' },
                    { speaker: 'narrator', text: '夏晚回头，看到苏馨悦手里拿着两把伞。' },
                    { speaker: 'su_xinyue', text: '你们没带伞吧？拿着。' },
                    { speaker: 'narrator', text: '她把其中一把递给夏晚的朋友，另一把递给夏晚。' },
                    { speaker: 'roommate', text: '谢谢！可是我们只有两个人，你——' },
                    { speaker: 'su_xinyue', text: '（笑着摆摆手）我没事，我等下有人来接。你们先走吧，伞不用还，下次路过店里放下就行。' },
                    { speaker: 'xia_wan', text: '真的可以吗？' },
                    { speaker: 'su_xinyue', text: '当然可以，快走吧，别淋湿了。' },
                    { speaker: 'narrator', text: '夏晚有点不好意思，但雨越下越大，只好接过伞。' },
                    { speaker: 'xia_wan', text: '谢谢……' },
                    { speaker: 'su_xinyue', text: '没事没事，慢走~' },
                    { speaker: 'narrator', text: '说完，苏馨悦退回到店门口的屋檐下，朝她们挥挥手。' },
                    { speaker: 'narrator', text: '夏晚撑着伞，和朋友一起走进雨里。' },
                    { speaker: 'roommate', text: '这家店的人还挺好的诶。' },
                    { speaker: 'xia_wan', text: '嗯……是挺好。' },
                    { speaker: 'narrator', text: '夏晚回头看了一眼，苏馨悦还站在门口，似乎在用手机发消息。' },
                    { speaker: 'narrator', text: '雨幕中，苏馨悦的身影看起来有点孤单。' },
                    { speaker: 'xia_wan', text: '（她好像……挺热心的。）' }
                ],
                choices: [],
                next: 'xw_1_6_a'
            },
            // --- 节点1.5B:意外事件·借伞（情感本路线） ---
            {
                id: 'xw_1_5_b',
                title: '借伞',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚和朋友刚走出店门，就发现——下雨了。' },
                    { speaker: 'roommate', text: '卧槽，下雨了？！' },
                    { speaker: 'narrator', text: '天空灰蒙蒙的，雨点噼里啪啦地砸下来，看起来一时半会儿停不了。' },
                    { speaker: 'roommate', text: '我们没带伞啊，怎么办？' },
                    { speaker: 'narrator', text: '夏晚也有点傻眼，正准备冲进雨里——' },
                    { speaker: 'su_xinyue', text: '（从店里快步走出来）等一下！' },
                    { speaker: 'narrator', text: '夏晚回头，看到苏馨悦手里拿着两把伞。' },
                    { speaker: 'su_xinyue', text: '你们没带伞吧？拿着。' },
                    { speaker: 'narrator', text: '她把其中一把递给夏晚的朋友，另一把递给夏晚。' },
                    { speaker: 'roommate', text: '谢谢！可是我们只有两个人，你——' },
                    { speaker: 'su_xinyue', text: '（笑着摆摆手）我没事，我等下有人来接。你们先走吧，伞不用还，下次路过店里放下就行。' },
                    { speaker: 'xia_wan', text: '真的可以吗？' },
                    { speaker: 'su_xinyue', text: '当然可以，快走吧，别淋湿了。' },
                    { speaker: 'narrator', text: '夏晚有点不好意思，但雨越下越大，只好接过伞。' },
                    { speaker: 'xia_wan', text: '谢谢……' },
                    { speaker: 'su_xinyue', text: '没事没事，慢走~' },
                    { speaker: 'narrator', text: '说完，苏馨悦退回到店门口的屋檐下，朝她们挥挥手。' },
                    { speaker: 'narrator', text: '夏晚撑着伞，和朋友一起走进雨里。' },
                    { speaker: 'roommate', text: '这家店的人还挺好的诶。' },
                    { speaker: 'xia_wan', text: '嗯……是挺好。' },
                    { speaker: 'narrator', text: '夏晚回头看了一眼，苏馨悦还站在门口，似乎在用手机发消息。' },
                    { speaker: 'narrator', text: '雨幕中，苏馨悦的身影看起来有点孤单。' },
                    { speaker: 'xia_wan', text: '（她好像……挺热心的。）' }
                ],
                choices: [],
                next: 'xw_1_6_b'
            },
            // --- 节点1.6A:离开店铺（推理本路线·出现肖童） ---
            {
                id: 'xw_1_6_a',
                title: '离开店铺',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚和朋友走在回学校的路上。' },
                    { speaker: 'roommate', text: '怎么样？好玩吗？' },
                    { speaker: 'xia_wan', text: '还行吧，挺好玩的。' },
                    { speaker: 'roommate', text: '那个DM确实可以，长得帅还专业。' },
                    { speaker: 'xia_wan', text: '（微微一笑）嗯，还行。' },
                    { speaker: 'narrator', text: '夏晚走在回学校的路上，脑海里不自觉地闪过木星的样子。' },
                    { speaker: 'xia_wan', text: '（木星……）' },
                    { speaker: 'xia_wan', text: '（声音确实挺好听的，人也挺帅的。）' },
                    { speaker: 'xia_wan', text: '（刚才还扶了我一下……挺细心的。）' },
                    { speaker: 'xia_wan', text: '（下次……如果再来，能再见到他吗？）' },
                    { speaker: 'narrator', text: '走到门口时，夏晚不经意间瞥见门边贴着一张海报。' },
                    { speaker: 'narrator', text: '【招聘兼职DM】' },
                    { speaker: 'narrator', text: '性别不限，在校大学生优先' },
                    { speaker: 'narrator', text: '喜欢剧本杀、有责任心' },
                    { speaker: 'narrator', text: '有意者请进店咨询' },
                    { speaker: 'narrator', text: '夏晚多看了一眼。' },
                    { speaker: 'roommate', text: '在看什么呢？' },
                    { speaker: 'xia_wan', text: '没什么，就一张招聘海报。' },
                    { speaker: 'roommate', text: '哦，这家店还在招人啊。怎么，想去试试？' },
                    { speaker: 'xia_wan', text: '没有，随便看看。' },
                    { speaker: 'narrator', text: '夏晚收回视线，和朋友一起离开。' },
                    { speaker: 'xia_wan', text: '（招聘DM……）' },
                    { speaker: 'xia_wan', text: '（算了，想想就好。）' },
                    { speaker: 'xia_wan', text: '（反正我也不是很感兴趣。）' },
                    { speaker: 'xia_wan', text: '（……吧。）' },
                    { speaker: 'narrator', text: '第一章 完' }
                ],
                choices: [],
                next: 'chapter2'
            },
            // --- 节点1.6B:离开店铺（情感本路线·不出现肖童） ---
            {
                id: 'xw_1_6_b',
                title: '离开店铺',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚和朋友走在回学校的路上。' },
                    { speaker: 'roommate', text: '怎么样？好玩吗？' },
                    { speaker: 'xia_wan', text: '还行吧，挺好玩的。' },
                    { speaker: 'roommate', text: '那个DM确实可以，好温柔啊。' },
                    { speaker: 'xia_wan', text: '（微微一笑）嗯，是挺甜的。' },
                    { speaker: 'narrator', text: '夏晚走在回学校的路上，脑海里不自觉地闪过橙子的笑容。' },
                    { speaker: 'xia_wan', text: '（橙子……）' },
                    { speaker: 'xia_wan', text: '（她笑起来真的好甜啊。）' },
                    { speaker: 'xia_wan', text: '（好像真的很喜欢剧本杀……）' },
                    { speaker: 'xia_wan', text: '（下次……如果再来，能再见到她吗？）' },
                    { speaker: 'narrator', text: '走到门口时，夏晚不经意间瞥见门边贴着一张海报。' },
                    { speaker: 'narrator', text: '【招聘兼职DM】' },
                    { speaker: 'narrator', text: '性别不限，在校大学生优先' },
                    { speaker: 'narrator', text: '喜欢剧本杀、有责任心' },
                    { speaker: 'narrator', text: '有意者请进店咨询' },
                    { speaker: 'narrator', text: '夏晚多看了一眼。' },
                    { speaker: 'roommate', text: '在看什么呢？' },
                    { speaker: 'xia_wan', text: '没什么，就一张招聘海报。' },
                    { speaker: 'roommate', text: '哦，这家店还在招人啊。怎么，想去试试？' },
                    { speaker: 'xia_wan', text: '没有，随便看看。' },
                    { speaker: 'narrator', text: '夏晚收回视线，和朋友一起离开。' },
                    { speaker: 'xia_wan', text: '（招聘DM……）' },
                    { speaker: 'xia_wan', text: '（算了，想想就好。）' },
                    { speaker: 'xia_wan', text: '（反正我也不是很感兴趣。）' },
                    { speaker: 'xia_wan', text: '（……吧。）' },
                    { speaker: 'narrator', text: '第一章 完' }
                ],
                choices: [],
                next: 'chapter2'
            }
        ]
    },

    // ========================================
    // 周砚线 - 第二章：融入
    // ========================================
    zhou_yan_chapter2: {
        title: '第二章：融入',
        theme: '正式开始工作，与同事们逐渐熟悉',
        scenes: [
            // --- 场景1：正式上班 ---
            {
                id: 'zy_2_1',
                title: '正式上班',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '第二天一早，周砚准时来到了店里。' },
                    { speaker: 'narrator', text: '店还没开门，但他已经看到橙子在里面打扫卫生了。' },
                    { speaker: 'chengzi', text: '周砚！你来得真早！' },
                    { speaker: 'zhou_yan', text: '我怕迟到，就早点来了。' },
                    { speaker: 'chengzi', text: '不错不错，很有觉悟嘛！' },
                    { speaker: 'narrator', text: '橙子笑着打开了门。' },
                    { speaker: 'chengzi', text: '今天你第一天正式工作，我来给你安排一下。' },
                    { speaker: 'narrator', text: '周砚点点头，跟着橙子走进了店里。' }
                ],
                choices: [
                    { text: '先熟悉一下店里的环境', next: 'zy_2_1_a', affinity: {}, friendship: { chengzi: 3 } },
                    { text: '主动询问今天的工作安排', next: 'zy_2_1_b', affinity: {}, friendship: { chengzi: 5 } }
                ]
            },
            // --- 场景1a：先熟悉环境 ---
            {
                id: 'zy_2_1_a',
                title: '熟悉环境',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '周砚决定先自己熟悉一下环境。' },
                    { speaker: 'narrator', text: '他仔细观察着店里的每一个角落。' },
                    { speaker: 'narrator', text: '五个主题房间各具特色，墙上贴满了各种剧本的海报。' },
                    { speaker: 'zhou_yan', text: '（比我想象的要专业很多...）' },
                    { speaker: 'narrator', text: '橙子走过来，手里拿着一本剧本。' },
                    { speaker: 'chengzi', text: '看得怎么样？' },
                    { speaker: 'zhou_yan', text: '店里的装修很有氛围，我很喜欢。' },
                    { speaker: 'chengzi', text: '那就好，你先看看这本剧本的基础知识。' },
                    { speaker: 'narrator', text: '橙子递给周砚一本《剧本杀入门指南》。' }
                ],
                choices: [],
                next: 'zy_2_2'
            },
            // --- 场景1b：主动询问 ---
            {
                id: 'zy_2_1_b',
                title: '主动询问',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '橙子姐，我今天具体需要做什么？' },
                    { speaker: 'chengzi', text: '叫我橙子就好，不用加"姐"。' },
                    { speaker: 'chengzi', text: '今天木星会带你熟悉带本的基本流程。' },
                    { speaker: 'chengzi', text: '他是我们店里最有经验的DM，你跟着他好好学。' },
                    { speaker: 'zhou_yan', text: '好的，我会认真学的。' },
                    { speaker: 'narrator', text: '这时，木星从楼梯上走下来。' },
                    { speaker: 'xiao_tong', text: '你就是新来的周砚？' },
                    { speaker: 'zhou_yan', text: '是的，木星好。' },
                    { speaker: 'xiao_tong', text: '嗯，跟我来吧，我教你基本的带本流程。' }
                ],
                choices: [],
                next: 'zy_2_2'
            },
            // --- 场景2：跟着木星学习 ---
            {
                id: 'zy_2_2',
                title: '学习带本',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '木星带着周砚来到一个空的主题房间。' },
                    { speaker: 'xiao_tong', text: '带本之前，要先了解剧本的全部内容。' },
                    { speaker: 'xiao_tong', text: '包括每个角色的故事、任务，以及整个剧情的走向。' },
                    { speaker: 'narrator', text: '木星翻开一本剧本，开始讲解。' },
                    { speaker: 'xiao_tong', text: 'DM要做的，是引导玩家进入角色，享受这个故事。' },
                    { speaker: 'zhou_yan', text: '听起来不简单...' },
                    { speaker: 'xiao_tong', text: '是不简单，但只要用心，就能做好。' },
                    { speaker: 'narrator', text: '木星看着周砚，眼神温和但认真。' },
                    { speaker: 'xiao_tong', text: '你有什么想问的吗？' }
                ],
                choices: [
                    { text: 'DM最重要的能力是什么？', next: 'zy_2_2_a', affinity: {}, friendship: { xiao_tong: 5 } },
                    { text: '有没有什么快速上手的技巧？', next: 'zy_2_2_b', affinity: {}, friendship: { xiao_tong: 3 } }
                ]
            },
            // --- 场景2a：询问重要能力 ---
            {
                id: 'zy_2_2_a',
                title: '最重要的事',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '木星觉得DM最重要的能力是什么？' },
                    { speaker: 'xiao_tong', text: '是耐心。' },
                    { speaker: 'narrator', text: '木星毫不犹豫地回答。' },
                    { speaker: 'xiao_tong', text: '每个玩家进入角色的节奏不一样。' },
                    { speaker: 'xiao_tong', text: '有的玩家很快就能投入，有的需要时间引导。' },
                    { speaker: 'xiao_tong', text: '作为DM，你要有耐心去等待每一个人。' },
                    { speaker: 'zhou_yan', text: '（耐心...我应该可以的。）' },
                    { speaker: 'xiao_tong', text: '还有一个很重要的，是观察。' },
                    { speaker: 'xiao_tong', text: '你要时刻观察玩家的情绪和反应，适时引导。' },
                    { speaker: 'narrator', text: '周砚认真地点头，把这些话记在心里。' }
                ],
                choices: [],
                next: 'zy_2_3'
            },
            // --- 场景2b：询问技巧 ---
            {
                id: 'zy_2_2_b',
                title: '上手技巧',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '木星有什么快速上手的技巧吗？' },
                    { speaker: 'xiao_tong', text: '技巧啊...' },
                    { speaker: 'narrator', text: '木星想了想，露出一个温和的微笑。' },
                    { speaker: 'xiao_tong', text: '最重要的是多玩、多看、多练。' },
                    { speaker: 'xiao_tong', text: '先把自己当成玩家，体验不同角色的感受。' },
                    { speaker: 'xiao_tong', text: '然后观察其他DM是怎么带的。' },
                    { speaker: 'xiao_tong', text: '最后就是多实操，熟能生巧。' },
                    { speaker: 'zhou_yan', text: '我明白了，我会多练习的。' },
                    { speaker: 'xiao_tong', text: '嗯，有问题随时问我。' }
                ],
                choices: [],
                next: 'zy_2_3'
            },
            // --- 场景3：午餐时间 ---
            {
                id: 'zy_2_3',
                title: '午餐时间',
                background: 'bg-hotpot',
                dialogues: [
                    { speaker: 'narrator', text: '中午，大家聚在休息区吃午饭。' },
                    { speaker: 'narrator', text: '170带来了一大份自热火锅，橙子点了外卖，方圆在吃自己带的便当，小琴姐在整理桌上的餐盒。' },
                    { speaker: 'yu_haitong', text: '来来来，一起吃！' },
                    { speaker: 'narrator', text: '170热情地招呼着。' },
                    { speaker: 'gong_qin', text: '你们先吃，我把这边收拾一下。' },
                    { speaker: 'chengzi', text: '小琴姐，你也来嘛！' },
                    { speaker: 'gong_qin', text: '好，等我一下~' },
                    { speaker: 'narrator', text: '小琴姐笑着加入大家的午餐。' },
                    { speaker: 'chengzi', text: '周砚，你吃辣吗？' },
                    { speaker: 'zhou_yan', text: '可以吃一点。' },
                    { speaker: 'yu_haitong', text: '太好了！这个火锅微辣的，你肯定喜欢！' },
                    { speaker: 'narrator', text: '大家边吃边聊，气氛很轻松。' },
                    { speaker: 'gong_qin', text: '周砚，上午学得怎么样？' },
                    { speaker: 'zhou_yan', text: '木星教了我很多，感觉受益匪浅。' },
                    { speaker: 'yu_haitong', text: '哈哈，木星可是我们店的老前辈了！' },
                    { speaker: 'gong_qin', text: '有什么不懂的随时问，别客气。' }
                ],
                choices: [
                    { text: '和170聊聊', next: 'zy_2_3_a', affinity: { yu_haitong: 3 }, friendship: { yu_haitong: 5 } },
                    { text: '和方圆聊聊', next: 'zy_2_3_b', affinity: {}, friendship: { gan_zhiyu: 3 } }
                ]
            },
            // --- 场景3a：和170聊天 ---
            {
                id: 'zy_2_3_a',
                title: '和170聊天',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'yu_haitong', text: '对了周砚，你为什么想来做DM呀？' },
                    { speaker: 'zhou_yan', text: '其实我也不太确定...就是想试试不一样的事情。' },
                    { speaker: 'yu_haitong', text: '挺好的呀！我当初也是觉得好玩就来了！' },
                    { speaker: 'yu_haitong', text: '结果一做就是半年多，越来越喜欢了！' },
                    { speaker: 'zhou_yan', text: '170是怎么喜欢上这份工作的？' },
                    { speaker: 'yu_haitong', text: '每次带本看到大家开心的样子，就觉得特别有成就感！' },
                    { speaker: 'narrator', text: '170的眼睛亮晶晶的。' },
                    { speaker: 'yu_haitong', text: '而且还能认识各种各样有趣的人！' },
                    { speaker: 'narrator', text: '周砚觉得，170的热情很有感染力。' }
                ],
                choices: [],
                next: 'zy_2_4'
            },
            // --- 场景3b：和方圆聊天 ---
            {
                id: 'zy_2_3_b',
                title: '和方圆聊天',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '方圆平时都看什么类型的剧本？' },
                    { speaker: 'gan_zhiyu', text: '各种类型都会看，情感本、推理本、恐怖本...' },
                    { speaker: 'gan_zhiyu', text: '不过我最喜欢的还是情感本。' },
                    { speaker: 'zhou_yan', text: '为什么呢？' },
                    { speaker: 'gan_zhiyu', text: '因为好的情感本，能让人产生很深的共鸣。' },
                    { speaker: 'narrator', text: '方圆推了推眼镜，神情认真。' },
                    { speaker: 'gan_zhiyu', text: '那种被故事打动的感觉，是很珍贵的体验。' },
                    { speaker: 'zhou_yan', text: '听起来很有道理。' },
                    { speaker: 'narrator', text: '周砚觉得，方圆虽然话不多，但说的都是真心话。' }
                ],
                choices: [],
                next: 'zy_2_4'
            },
            // --- 场景4：下午带本 ---
            {
                id: 'zy_2_4',
                title: '下午带本',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '下午，店里来了一组客人。' },
                    { speaker: 'narrator', text: '木星决定让周砚在旁边观摩学习。' },
                    { speaker: 'xiao_tong', text: '周砚，你仔细看我怎么引导玩家。' },
                    { speaker: 'narrator', text: '周砚认真地看着木星带本。' },
                    { speaker: 'narrator', text: '木星的讲解生动有趣，引导玩家进入角色时恰到好处。' },
                    { speaker: 'zhou_yan', text: '（原来带本是这样的...）' },
                    { speaker: 'narrator', text: '整场游戏进行得很顺利，玩家们玩得很开心。' },
                    { speaker: 'player', text: '今天玩得太开心了！DM带得真好！' },
                    { speaker: 'xiao_tong', text: '谢谢，下次再来玩！' }
                ],
                choices: [],
                next: 'zy_2_5'
            },
            // --- 场景5：城限情感本 ---
            {
                id: 'zy_2_5',
                title: '城限情感本',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '客人离开后，木星拿来了一个新的剧本。' },
                    { speaker: 'xiao_tong', text: '这是我们的城限本，《万仞青山听水寒》。' },
                    { speaker: 'narrator', text: '木星的表情变得认真起来。' },
                    { speaker: 'xiao_tong', text: '这本是我们店的招牌情感本，也是我最喜欢的剧本之一。' },
                    { speaker: 'zhou_yan', text: '城限本是什么？' },
                    { speaker: 'xiao_tong', text: '城限本是指一个城市只有少数店铺有的限定剧本。' },
                    { speaker: 'xiao_tong', text: '这本《万仞青山听水寒》是我们的第一部城限情感本。' },
                    { speaker: 'xiao_tong', text: '它的情感张力非常强，很多玩家玩完都哭了。' },
                    { speaker: 'narrator', text: '木星说着，眼神里有一种特别的光芒。' }
                ],
                choices: [
                    { text: '认真地阅读剧本', next: 'zy_2_5_a', affinity: {}, friendship: { xiao_tong: 5 } },
                    { text: '询问木星为什么喜欢这个剧本', next: 'zy_2_5_b', affinity: {}, friendship: { xiao_tong: 5 } }
                ]
            },
            // --- 场景5a：认真阅读 ---
            {
                id: 'zy_2_5_a',
                title: '阅读剧本',
                background: 'bg-bookstore',
                dialogues: [
                    { speaker: 'narrator', text: '周砚安静地阅读起剧本。' },
                    { speaker: 'narrator', text: '故事讲述的是仙侠世界的爱恨情仇，文字优美而有力。' },
                    { speaker: 'narrator', text: '周砚越读越入迷，被故事中的情感深深打动。' },
                    { speaker: 'zhou_yan', text: '（这个故事...好虐心。）' },
                    { speaker: 'narrator', text: '不知过了多久，周砚才从故事中回过神来。' },
                    { speaker: 'xiao_tong', text: '看完了？' },
                    { speaker: 'zhou_yan', text: '嗯，这个故事真的很好。' },
                    { speaker: 'xiao_tong', text: '能打动你的剧本，才能打动玩家。' },
                    { speaker: 'narrator', text: '木星满意地点点头。' }
                ],
                choices: [],
                next: 'zy_2_6'
            },
            // --- 场景5b：询问木星 ---
            {
                id: 'zy_2_5_b',
                title: '木星的感受',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '木星为什么喜欢这个剧本？' },
                    { speaker: 'narrator', text: '木星沉默了一会儿。' },
                    { speaker: 'xiao_tong', text: '因为我第一次带这个本的时候，被深深地打动了。' },
                    { speaker: 'xiao_tong', text: '那种和角色产生共鸣的感觉...' },
                    { speaker: 'xiao_tong', text: '让我觉得，这份工作是有意义的。' },
                    { speaker: 'narrator', text: '周砚看着木星，发现他的眼神变得柔和。' },
                    { speaker: 'zhou_yan', text: '木星...我也想体验那种感觉。' },
                    { speaker: 'xiao_tong', text: '会的，你会的。' }
                ],
                choices: [],
                next: 'zy_2_6'
            },
            // --- 场景6：下班 ---
            {
                id: 'zy_2_6',
                title: '下班时光',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '一天的工作结束了。' },
                    { speaker: 'narrator', text: '周砚帮店里收拾完，准备离开。' },
                    { speaker: 'yu_haitong', text: '周砚，今天辛苦啦！' },
                    { speaker: 'zhou_yan', text: '你们也辛苦了。' },
                    { speaker: 'chengzi', text: '第一天上班，感觉怎么样？' },
                    { speaker: 'zhou_yan', text: '比想象中要学的东西多，但是很开心。' },
                    { speaker: 'narrator', text: '橙子笑着拍了拍周砚的肩膀。' },
                    { speaker: 'gong_qin', text: '第一天能坚持下来已经很棒了。' },
                    { speaker: 'narrator', text: '小琴姐从柜台后面抬起头，笑着看向周砚。' },
                    { speaker: 'wu_ya', text: '明天见啊，新人。' },
                    { speaker: 'narrator', text: '吴琊靠在墙边，难得开口说了一句话。' },
                    { speaker: 'chengzi', text: '不错不错，明天继续加油！' }
                ],
                choices: [],
                next: 'zy_2_7'
            },
            // --- 场景7：店长肯定 ---
            {
                id: 'zy_2_7',
                title: '店长的话',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '这时，阿昊从办公室走出来。' },
                    { speaker: 'ahao', text: '周砚，第一天感觉如何？' },
                    { speaker: 'zhou_yan', text: '店长好，大家都对我很好，我学到了很多。' },
                    { speaker: 'ahao', text: '嗯，木星跟我说了，你学得很认真。' },
                    { speaker: 'narrator', text: '阿昊点点头，表情温和。' },
                    { speaker: 'ahao', text: '做DM最重要的不是技巧，而是用心。' },
                    { speaker: 'ahao', text: '我看你有这个潜质。' },
                    { speaker: 'zhou_yan', text: '谢谢店长，我会继续努力的。' },
                    { speaker: 'narrator', text: '周砚的心里涌起一股暖流。' }
                ],
                choices: [],
                next: 'zy_2_8'
            },
            // --- 场景8：第二章结束 ---
            {
                id: 'zy_2_8',
                title: '融入',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '走出店门，周砚回头看了一眼。' },
                    { speaker: 'narrator', text: '透过玻璃窗，他能看到橙子、170、木星、方圆忙碌的身影。' },
                    { speaker: 'narrator', text: '虽然才第一天，但他已经开始期待明天了。' },
                    { speaker: 'narrator', text: '也许，这里真的能成为他大学生活中重要的一部分。' },
                    { speaker: 'narrator', text: '而他和木星之间的缘分，似乎才刚刚开始...' },
                    { speaker: 'narrator', text: '第二章（上） 完' }
                ],
                choices: [],
                next: 'zy_2_9'
            },
            // --- 扩展场景1：第一个早班 ---
            {
                id: 'zy_2_9',
                title: '第一个早班',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '第二天早上，周砚比约定时间早到了半小时。' },
                    { speaker: 'narrator', text: '店里很安静，只有橙子在柜台后面整理东西。' },
                    { speaker: 'chengzi', text: '周砚？你来得真早。' },
                    { speaker: 'zhou_yan', text: '我怕迟到，就早点来了。' },
                    { speaker: 'chengzi', text: '你每天都这么早吗？' },
                    { speaker: 'zhou_yan', text: '嗯...习惯了。' },
                    { speaker: 'narrator', text: '橙子笑了笑，眼神里有些欣赏。' },
                    { speaker: 'chengzi', text: '难怪店长说你有潜质。' }
                ],
                choices: [
                    { text: '帮忙整理道具', next: 'zy_2_9_a', affinity: {}, friendship: { yu_haitong: 5 } },
                    { text: '找方圆借剧本看看', next: 'zy_2_9_b', affinity: {}, friendship: { gan_zhiyu: 5 } }
                ]
            },
            // --- 扩展场景1a：帮忙整理 ---
            {
                id: 'zy_2_9_a',
                title: '帮忙整理',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '170，有什么我能帮忙的吗？' },
                    { speaker: 'yu_haitong', text: '太好了！帮我整理一下道具架吧！' },
                    { speaker: 'narrator', text: '周砚认真地整理着道具架上的物品。' },
                    { speaker: 'yu_haitong', text: '哇，你整理得好整齐啊！还按类型分好了！' },
                    { speaker: 'zhou_yan', text: '顺手的事...' },
                    { speaker: 'yu_haitong', text: '谦虚什么！做事认真就是优点！' },
                    { speaker: 'yu_haitong', text: '以后你肯定是那种被玩家点名要的DM类型！' },
                    { speaker: 'narrator', text: '170竖起大拇指，笑得眼睛弯成月牙。' }
                ],
                choices: [],
                next: 'zy_2_10'
            },
            // --- 扩展场景1b：借剧本 ---
            {
                id: 'zy_2_9_b',
                title: '借阅剧本',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '方圆，我能借几本剧本看看吗？' },
                    { speaker: 'gan_zhiyu', text: '当然，你想看什么类型的？' },
                    { speaker: 'zhou_yan', text: '有什么推荐吗？我是新手。' },
                    { speaker: 'narrator', text: '方圆推了推眼镜，认真地思考了一下。' },
                    { speaker: 'gan_zhiyu', text: '这本不错，入门级，剧情清晰，适合新手。' },
                    { speaker: 'gan_zhiyu', text: '还有这本，如果你想做DM的话，这本的DM手册写得很详细。' },
                    { speaker: 'narrator', text: '方圆从架子上抽出两本，递给周砚。' },
                    { speaker: 'zhou_yan', text: '谢谢方圆！' },
                    { speaker: 'gan_zhiyu', text: '嗯，有不懂的随时来问。' }
                ],
                choices: [],
                next: 'zy_2_10'
            },
            {
                id: 'zy_2_9_b_a',
                title: '心动的瞬间',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '（收回心思）好，我会好好学的。' },
                    { speaker: 'narrator', text: '周砚低下头看日程表，试图掩饰自己的心跳。' },
                    { speaker: 'narrator', text: '（刚才那一下...是我想多了吗？）' },
                    { speaker: 'chengzi', text: '怎么了？脸有点红。' },
                    { speaker: 'zhou_yan', text: '没、没什么！可能是店里暖气开太足了。' },
                    { speaker: 'chengzi', text: '哈哈，那你要多喝水哦~' }
                ],
                choices: [],
                next: 'zy_2_10'
            },
            {
                id: 'zy_2_9_b_b',
                title: '保持冷静',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '（故作镇定）好的，期待下午的练习。' },
                    { speaker: 'chengzi', text: '加油！你肯定没问题的！' },
                    { speaker: 'narrator', text: '橙子笑着拍了拍周砚的肩膀。' },
                    { speaker: 'narrator', text: '周砚觉得，她总是这么有活力，让人忍不住想靠近。' }
                ],
                choices: [],
                next: 'zy_2_10'
            },
            // --- 扩展场景2：观摩新手本 ---
            {
                id: 'zy_2_10',
                title: '观摩新手本',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '上午10点，几个年轻人走进店里。' },
                    { speaker: 'long_xinheng', text: '欢迎欢迎！今天由我来带你们玩！' },
                    { speaker: 'narrator', text: '周砚坐在角落里，认真地观察谨言带本。' },
                    { speaker: 'narrator', text: '他发现谨言的风格和木星完全不同。' },
                    { speaker: 'narrator', text: '木星温柔内敛，谨言则是活泼外向。' },
                    { speaker: 'long_xinheng', text: '各位！准备好开始你们的推理之旅了吗？' },
                    { speaker: 'narrator', text: '玩家们被他的热情感染，气氛一下子活跃起来。' },
                    { speaker: 'zhou_yan', text: '（原来带本也可以这么有感染力...）' }
                ],
                choices: [
                    { text: '专注观察谨言的引导技巧', next: 'zy_2_10_a', affinity: {}, friendship: { long_xinheng: 5 } },
                    { text: '留意玩家们的反应', next: 'zy_2_10_b', affinity: { yu_haitong: 3 }, friendship: { yu_haitong: 3 } }
                ]
            },
            // --- 扩展场景2a：观察谨言 ---
            {
                id: 'zy_2_10_a',
                title: '学习谨言',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '周砚仔细观察着谨言的每一个动作。' },
                    { speaker: 'narrator', text: '他发现谨言很会调动气氛，总能在玩家冷场时抛出有趣的话题。' },
                    { speaker: 'long_xinheng', text: '这位朋友，你的分析很有道理啊！' },
                    { speaker: 'narrator', text: '每当有玩家发言，谨言都会给予积极的反馈。' },
                    { speaker: 'zhou_yan', text: '（原来鼓励玩家这么重要...）' },
                    { speaker: 'narrator', text: '游戏结束后，谨言走过来。' },
                    { speaker: 'long_xinheng', text: '怎么样？看出什么门道了吗？' }
                ],
                choices: [],
                next: 'zy_2_11'
            },
            // --- 扩展场景2b：观察玩家 ---
            {
                id: 'zy_2_10_b',
                title: '观察玩家',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '周砚把注意力放在玩家身上。' },
                    { speaker: 'narrator', text: '他注意到有的玩家很投入，眉飞色舞地讨论。' },
                    { speaker: 'narrator', text: '也有的玩家比较沉默，需要被引导才能发言。' },
                    { speaker: 'narrator', text: '这时170悄悄坐到他旁边。' },
                    { speaker: 'yu_haitong', text: '看什么呢？' },
                    { speaker: 'zhou_yan', text: '在看玩家的反应...' },
                    { speaker: 'yu_haitong', text: '嗯，观察玩家很重要。这叫察言观色。' },
                    { speaker: 'narrator', text: '170小声说道。' }
                ],
                choices: [],
                next: 'zy_2_11'
            },
            // --- 扩展场景3：模拟带本练习 ---
            {
                id: 'zy_2_11',
                title: '模拟带本',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '下午，木星安排了一场模拟带本练习。' },
                    { speaker: 'xiao_tong', text: '周砚，今天你来当DM，我们几个当玩家。' },
                    { speaker: 'narrator', text: '橙子、170、方圆、谨言和小琴都坐在桌前，等着周砚。' },
                    { speaker: 'su_xinyue', text: '需要我也参加吗？' },
                    { speaker: 'xiao_tong', text: '虹猫你来的正好，一起吧。' },
                    { speaker: 'narrator', text: '虹猫笑着坐下，看向周砚。' },
                    { speaker: 'su_xinyue', text: '新人DM，我可是很严格的哦~' },
                    { speaker: 'zhou_yan', text: '（更紧张了...）' },
                    { speaker: 'chengzi', text: '别紧张，就当是真的在带本！' },
                    { speaker: 'narrator', text: '周砚深吸一口气，拿起剧本。' },
                    { speaker: 'zhou_yan', text: '各位玩家，欢迎来到《万仞青山听水寒》的世界...' },
                    { speaker: 'narrator', text: '虽然声音有些发抖，但他还是完整地开场了。' }
                ],
                choices: [],
                next: 'zy_2_11_1'
            },
            // --- 扩展场景3.1：模拟进行中 ---
            {
                id: 'zy_2_11_1',
                title: '模拟进行',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '模拟进行到一半，周砚有些卡壳了。' },
                    { speaker: 'zhou_yan', text: '（糟糕，下一句该说什么来着...）' },
                    { speaker: 'long_xinheng', text: 'DM，请问我们的角色之间是什么关系？' },
                    { speaker: 'narrator', text: '周砚紧张地翻着剧本。' },
                    { speaker: 'xiao_tong', text: '别急，按照剧本设定来就好。' },
                    { speaker: 'narrator', text: '木星温和地提醒。' },
                    { speaker: 'zhou_yan', text: '你们三人是...同门师兄弟的关系...' },
                    { speaker: 'narrator', text: '在大家的配合下，周砚慢慢找回了节奏。' }
                ],
                choices: [],
                next: 'zy_2_12'
            },
            // --- 扩展场景4：和谨言聊天 ---
            {
                id: 'zy_2_12',
                title: '和谨言聊天',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'narrator', text: '练习结束后，大家在休息区休息。' },
                    { speaker: 'zhou_yan', text: '（松了口气...还好有大家帮忙。）' },
                    { speaker: 'long_xinheng', text: '周砚！第一次能有这个水平已经很不错了！' },
                    { speaker: 'zhou_yan', text: '可是中间卡壳了好几次...' },
                    { speaker: 'long_xinheng', text: '哈哈，哪个DM没有卡过壳呢？' },
                    { speaker: 'long_xinheng', text: '我第一次带本的时候，直接把剧情讲错了，还是玩家帮我圆回来的！' },
                    { speaker: 'narrator', text: '谨言大笑着分享自己的糗事。' },
                    { speaker: 'zhou_yan', text: '（原来大家都一样啊...）' }
                ],
                choices: [
                    { text: '向谨言请教活跃气氛的技巧', next: 'zy_2_12_a', affinity: {}, friendship: { long_xinheng: 5 } },
                    { text: '安静地听着大家聊天', next: 'zy_2_12_b', affinity: {}, friendship: { long_xinheng: 3 } }
                ]
            },
            // --- 扩展场景4a：请教技巧 ---
            {
                id: 'zy_2_12_a',
                title: '请教活跃气氛',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'zhou_yan', text: '谨言哥，你是怎么做到让气氛这么活跃的？' },
                    { speaker: 'long_xinheng', text: '哦？你想学？' },
                    { speaker: 'long_xinheng', text: '其实没什么秘诀，就是真心享受带本的过程。' },
                    { speaker: 'long_xinheng', text: '当你自己玩得开心，玩家也会被感染。' },
                    { speaker: 'narrator', text: '谨言难得认真起来。' },
                    { speaker: 'long_xinheng', text: '还有就是要多观察，谁状态不好了就拉一把。' },
                    { speaker: 'zhou_yan', text: '我记住了，谢谢谨言哥！' },
                    { speaker: 'long_xinheng', text: '叫我谨言就行！' }
                ],
                choices: [],
                next: 'zy_2_13'
            },
            // --- 扩展场景4b：安静聆听 ---
            {
                id: 'zy_2_12_b',
                title: '安静聆听',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'narrator', text: '周砚安静地坐在一旁，听大家聊天。' },
                    { speaker: 'narrator', text: '他发现店里的氛围真的很好。' },
                    { speaker: 'yu_haitong', text: '说起来，上次那个客人真的太搞笑了！' },
                    { speaker: 'chengzi', text: '哈哈哈哈，你还提那个！' },
                    { speaker: 'narrator', text: '大家都笑了起来。' },
                    { speaker: 'zhou_yan', text: '（这就是...像一家人一样的感觉吗？）' },
                    { speaker: 'narrator', text: '周砚嘴角不自觉地上扬。' }
                ],
                choices: [],
                next: 'zy_2_13'
            },
            // --- 扩展场景5：整理道具房 ---
            {
                id: 'zy_2_13',
                title: '整理道具房',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '傍晚，周砚主动帮忙整理道具房。' },
                    { speaker: 'narrator', text: '各种服装、首饰、道具堆在一起，看起来有些杂乱。' },
                    { speaker: 'gan_zhiyu', text: '周砚，你在这里啊。' },
                    { speaker: 'zhou_yan', text: '方圆哥，我来帮忙整理一下。' },
                    { speaker: 'gan_zhiyu', text: '我帮你吧，这里面有很多门道的。' },
                    { speaker: 'narrator', text: '方圆走进来，开始分类整理。' },
                    { speaker: 'gan_zhiyu', text: '古风的放一起，民国的放一起...' },
                    { speaker: 'zhou_yan', text: '方圆哥对店里的东西好熟悉。' }
                ],
                choices: [
                    { text: '询问方圆的日常工作', next: 'zy_2_13_a', affinity: {}, friendship: { gan_zhiyu: 5 } },
                    { text: '安静地帮忙整理', next: 'zy_2_13_b', affinity: {}, friendship: { gan_zhiyu: 3 } }
                ]
            },
            // --- 扩展场景5a：询问日常工作 ---
            {
                id: 'zy_2_13_a',
                title: '方圆的日常',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '方圆哥平时都做什么工作？' },
                    { speaker: 'gan_zhiyu', text: '我主要是管理剧本和道具。' },
                    { speaker: 'gan_zhiyu', text: '还有就是协助其他DM准备带本需要的东西。' },
                    { speaker: 'zhou_yan', text: '听起来很繁琐...' },
                    { speaker: 'gan_zhiyu', text: '还好，我喜欢整理东西。' },
                    { speaker: 'narrator', text: '方圆推了推眼镜。' },
                    { speaker: 'gan_zhiyu', text: '而且了解每一件道具的位置，带本的时候才能得心应手。' },
                    { speaker: 'zhou_yan', text: '（方圆哥虽然话不多，但真的很细心。）' }
                ],
                choices: [],
                next: 'zy_2_14'
            },
            // --- 扩展场景5b：安静帮忙 ---
            {
                id: 'zy_2_13_b',
                title: '默默帮忙',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '周砚安静地帮忙整理，和方圆一起工作。' },
                    { speaker: 'narrator', text: '两人虽然没怎么说话，但配合得很默契。' },
                    { speaker: 'narrator', text: '整理完一部分道具，方圆递过来一瓶水。' },
                    { speaker: 'gan_zhiyu', text: '辛苦了。' },
                    { speaker: 'zhou_yan', text: '谢谢方圆哥。' },
                    { speaker: 'narrator', text: '周砚觉得，和方圆相处很舒服。' },
                    { speaker: 'zhou_yan', text: '（有些人就是这样，不用说太多，但就是很可靠。）' }
                ],
                choices: [],
                next: 'zy_2_14'
            },
            // --- 扩展场景6：晚上值班 ---
            {
                id: 'zy_2_14',
                title: '夜班时光',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '晚上客人不多，周砚和木星在店里值班。' },
                    { speaker: 'narrator', text: '店里很安静，只有轻柔的背景音乐。' },
                    { speaker: 'zhou_yan', text: '木星，我可以问你一个问题吗？' },
                    { speaker: 'xiao_tong', text: '嗯？' },
                    { speaker: 'zhou_yan', text: '木星当初为什么想做DM？' },
                    { speaker: 'narrator', text: '木星沉默了一会儿。' },
                    { speaker: 'xiao_tong', text: '因为...我喜欢故事。' },
                    { speaker: 'zhou_yan', text: '故事？' }
                ],
                choices: [],
                next: 'zy_2_14_1'
            },
            // --- 扩展场景6.1：木星的故事 ---
            {
                id: 'zy_2_14_1',
                title: '木星的故事',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xiao_tong', text: '每个人都有属于自己的故事。' },
                    { speaker: 'xiao_tong', text: '好的剧本杀，就是让玩家在几个小时里，体验另一种人生。' },
                    { speaker: 'narrator', text: '木星看着窗外的夜色。' },
                    { speaker: 'xiao_tong', text: '我希望自己能成为那个，帮他们打开故事大门的人。' },
                    { speaker: 'zhou_yan', text: '（木星...）' },
                    { speaker: 'narrator', text: '周砚发现，说这些话的木星，眼睛里有光。' },
                    { speaker: 'zhou_yan', text: '木星，我好像有点明白了。' },
                    { speaker: 'xiao_tong', text: '嗯，慢慢来。' }
                ],
                choices: [
                    { text: '继续追问木星的过去', next: 'zy_2_14_1_a', affinity: {}, friendship: { xiao_tong: 5 } },
                    { text: '安静地陪木星坐着', next: 'zy_2_14_1_b', affinity: {}, friendship: { xiao_tong: 3 } }
                ]
            },
            // --- 扩展场景6.1a：追问过去 ---
            {
                id: 'zy_2_14_1_a',
                title: '追问过去',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '木星做这行多久了？' },
                    { speaker: 'xiao_tong', text: '三年多了吧。' },
                    { speaker: 'zhou_yan', text: '这么久？那木星应该经历过很多故事了。' },
                    { speaker: 'xiao_tong', text: '是啊...很多玩家的故事。' },
                    { speaker: 'narrator', text: '木星的眼神有些悠远。' },
                    { speaker: 'xiao_tong', text: '有时候会觉得，自己好像也活过了很多种人生。' },
                    { speaker: 'zhou_yan', text: '木星...听起来有点孤单。' },
                    { speaker: 'xiao_tong', text: '习惯就好。' },
                    { speaker: 'narrator', text: '木星轻轻笑了笑，但那笑容里似乎藏着什么。' }
                ],
                choices: [],
                next: 'zy_2_15'
            },
            // --- 扩展场景6.1b：安静陪伴 ---
            {
                id: 'zy_2_14_1_b',
                title: '安静陪伴',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '周砚没有再问，只是安静地坐在旁边。' },
                    { speaker: 'narrator', text: '两人就这样静静地待着，听着背景音乐。' },
                    { speaker: 'xiao_tong', text: '周砚。' },
                    { speaker: 'zhou_yan', text: '嗯？' },
                    { speaker: 'xiao_tong', text: '谢谢你听我说这些。' },
                    { speaker: 'zhou_yan', text: '（木星...原来也有这样的时刻。）' },
                    { speaker: 'narrator', text: '这一刻，周砚觉得自己好像更了解木星了一些。' }
                ],
                choices: [],
                next: 'zy_2_15'
            },
            // --- 扩展场景7：与170的约定 ---
            {
                id: 'zy_2_15',
                title: '和170的约定',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '第二天，170神神秘秘地拉住了周砚。' },
                    { speaker: 'yu_haitong', text: '周砚周砚，我跟你说个事！' },
                    { speaker: 'zhou_yan', text: '怎么了？' },
                    { speaker: 'yu_haitong', text: '下周末我们要搞团建，去轰趴馆！' },
                    { speaker: 'zhou_yan', text: '团建？' },
                    { speaker: 'yu_haitong', text: '就是大家一起出去玩！你一定要来哦！' },
                    { speaker: 'narrator', text: '170眼睛亮晶晶的。' },
                    { speaker: 'yu_haitong', text: '而且那天店长说他请客！' }
                ],
                choices: [
                    { text: '欣然答应', next: 'zy_2_15_a', affinity: { yu_haitong: 5 }, friendship: { yu_haitong: 5 } },
                    { text: '有点犹豫', next: 'zy_2_15_b', affinity: { yu_haitong: 3 }, friendship: { yu_haitong: 3 } }
                ]
            },
            // --- 扩展场景7a：欣然答应 ---
            {
                id: 'zy_2_15_a',
                title: '答应参加',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '好，我去。' },
                    { speaker: 'yu_haitong', text: '太好了！我就知道你会来！' },
                    { speaker: 'yu_haitong', text: '到时候我们可以一起玩游戏！' },
                    { speaker: 'narrator', text: '170开心地跳了起来。' },
                    { speaker: 'yu_haitong', text: '你不知道，橙子唱歌可好听了！' },
                    { speaker: 'zhou_yan', text: '是吗...' },
                    { speaker: 'yu_haitong', text: '到时候你就知道了！' },
                    { speaker: 'narrator', text: '周砚发现自己已经开始期待了。' }
                ],
                choices: [],
                next: 'zy_2_16'
            },
            // --- 扩展场景7b：有点犹豫 ---
            {
                id: 'zy_2_15_b',
                title: '有些犹豫',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '我...不知道会不会太打扰大家。' },
                    { speaker: 'yu_haitong', text: '什么打扰！你是我们的同事诶！' },
                    { speaker: 'yu_haitong', text: '而且店长说了，所有人必须到！' },
                    { speaker: 'zhou_yan', text: '那...好吧。' },
                    { speaker: 'yu_haitong', text: '这才对嘛！' },
                    { speaker: 'narrator', text: '170满意地点点头。' },
                    { speaker: 'yu_haitong', text: '放心啦，大家人都很好的！' }
                ],
                choices: [],
                next: 'zy_2_16'
            },
            // --- 扩展场景8：第一次正式带本 ---
            {
                id: 'zy_2_16',
                title: '第一次带本',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '这一天，周砚终于要第一次正式带本了。' },
                    { speaker: 'narrator', text: '是一组新手玩家，一共四人。' },
                    { speaker: 'zhou_yan', text: '（好紧张...）' },
                    { speaker: 'xiao_tong', text: '周砚，你可以的。' },
                    { speaker: 'narrator', text: '木星在门外给他打气。' },
                    { speaker: 'zhou_yan', text: '各位玩家，欢迎来到剧本杀的世界...' },
                    { speaker: 'narrator', text: '周砚深吸一口气，开始了开场白。' },
                    { speaker: 'narrator', text: '虽然还是有些紧张，但比昨天好多了。' }
                ],
                choices: [],
                next: 'zy_2_16_1'
            },
            // --- 扩展场景8.1：带本过程 ---
            {
                id: 'zy_2_16_1',
                title: '带本进行中',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '游戏进行到一半，一个玩家突然问了个刁钻的问题。' },
                    { speaker: 'player', text: 'DM，这个NPC为什么会出现在这里？' },
                    { speaker: 'zhou_yan', text: '（糟了，这个我没准备...）' },
                    { speaker: 'narrator', text: '周砚快速回忆剧本内容。' },
                    { speaker: 'zhou_yan', text: '这位NPC是...为了推进剧情而出现的关键人物。' },
                    { speaker: 'zhou_yan', text: '他背负着一个秘密，很快大家就会发现。' },
                    { speaker: 'narrator', text: '玩家点点头，似乎接受了这个回答。' },
                    { speaker: 'zhou_yan', text: '（还好...蒙混过关了。）' }
                ],
                choices: [],
                next: 'zy_2_17'
            },
            // --- 扩展场景9：带本成功 ---
            {
                id: 'zy_2_17',
                title: '带本成功',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '三个小时后，游戏圆满结束。' },
                    { speaker: 'player', text: '今天玩得太开心了！DM带得真好！' },
                    { speaker: 'player2', text: '对啊！虽然是新手，但引导得很好！' },
                    { speaker: 'zhou_yan', text: '谢谢...谢谢大家。' },
                    { speaker: 'narrator', text: '周砚心里涌起一股说不出的满足感。' },
                    { speaker: 'narrator', text: '玩家离开后，大家都围了过来。' },
                    { speaker: 'chengzi', text: '周砚！第一次就能带成这样，太厉害了！' },
                    { speaker: 'xiao_tong', text: '嗯，比我预想的要好。' }
                ],
                choices: [
                    { text: '感谢大家的帮助', next: 'zy_2_17_a', affinity: { chengzi: 3 }, friendship: { xiao_tong: 5, chengzi: 5, yu_haitong: 5 } },
                    { text: '谦虚地说是运气好', next: 'zy_2_17_b', affinity: { yu_haitong: 3 }, friendship: { xiao_tong: 3 } }
                ]
            },
            // --- 扩展场景9附加：虹猫路过 ---
            {
                id: 'zy_2_17_c',
                title: '虹猫的认可',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '这时，虹猫从另一个房间走出来。' },
                    { speaker: 'su_xinyue', text: '我听说周砚第一次带本就成功了？' },
                    { speaker: 'su_xinyue', text: '不错不错！果然没看错人！' },
                    { speaker: 'zhou_yan', text: '虹猫姐过奖了...' },
                    { speaker: 'su_xinyue', text: '哎，什么过奖！你很有天赋的！' },
                    { speaker: 'su_xinyue', text: '以后有空一起吃饭啊，我请客！' },
                    { speaker: 'narrator', text: '周砚觉得，虹猫的热情真的很有感染力。' }
                ],
                choices: [
                    { text: '虹猫姐人真好，改天一定赴约', next: 'zy_2_17_c_a', affinity: { su_xinyue: 3 }, friendship: { su_xinyue: 5 } },
                    { text: '谢谢虹猫姐，下次请你喝奶茶', next: 'zy_2_17_c_b', affinity: { su_xinyue: 5 }, friendship: { su_xinyue: 3 } }
                ]
            },
            {
                id: 'zy_2_17_c_a',
                title: '欣然赴约',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '虹猫姐人真好，改天一定赴约。' },
                    { speaker: 'su_xinyue', text: '好呀！那说定了！' },
                    { speaker: 'narrator', text: '虹猫的笑容很灿烂，让人心生好感。' }
                ],
                choices: [],
                next: 'zy_2_18'
            },
            {
                id: 'zy_2_17_c_b',
                title: '主动邀约',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '谢谢虹猫姐，下次我请你喝奶茶！' },
                    { speaker: 'su_xinyue', text: '哦？你要请我？' },
                    { speaker: 'su_xinyue', text: '哈哈哈，那我要点最贵的！' },
                    { speaker: 'narrator', text: '虹猫的笑声清脆爽朗，周砚觉得她真的很特别。' }
                ],
                choices: [],
                next: 'zy_2_18'
            },
            // --- 扩展场景9a：感谢大家 ---
            {
                id: 'zy_2_17_a',
                title: '感谢大家',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '谢谢大家...都是你们教得好。' },
                    { speaker: 'yu_haitong', text: '哎呀，周砚你也太谦虚了！' },
                    { speaker: 'long_xinheng', text: '就是！自己有能力才是真的！' },
                    { speaker: 'narrator', text: '大家都笑着拍拍周砚的肩膀。' },
                    { speaker: 'chengzi', text: '周砚，你真的很适合这份工作。' },
                    { speaker: 'narrator', text: '周砚的眼眶有些湿润。' },
                    { speaker: 'zhou_yan', text: '（这就是...被认可的感觉吗？）' }
                ],
                choices: [],
                next: 'zy_2_18'
            },
            // --- 扩展场景9b：谦虚回应 ---
            {
                id: 'zy_2_17_b',
                title: '谦虚回应',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'zhou_yan', text: '哪里...运气好而已，中间差点出错了。' },
                    { speaker: 'xiao_tong', text: '那些都是小问题，临场应变能力很重要。' },
                    { speaker: 'xiao_tong', text: '你处理得很好。' },
                    { speaker: 'narrator', text: '木星认真地看着周砚。' },
                    { speaker: 'yu_haitong', text: '方圆都这么说了，你就收下吧！' },
                    { speaker: 'narrator', text: '周砚不好意思地笑了笑。' }
                ],
                choices: [],
                next: 'zy_2_18'
            },
            // --- 扩展场景10：讨论剧本 ---
            {
                id: 'zy_2_18',
                title: '讨论剧本',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'narrator', text: '晚上休息时间，周砚和方圆在讨论剧本。' },
                    { speaker: 'gan_zhiyu', text: '周砚，你觉得《万仞青山听水寒》怎么样？' },
                    { speaker: 'zhou_yan', text: '我看了一部分，觉得故事写得很细腻。' },
                    { speaker: 'gan_zhiyu', text: '嗯，作者对人物情感的刻画很到位。' },
                    { speaker: 'narrator', text: '方圆的眼睛亮了起来。' },
                    { speaker: 'gan_zhiyu', text: '尤其是那个BE结局，看哭了好多人。' },
                    { speaker: 'zhou_yan', text: 'BE结局？' },
                    { speaker: 'gan_zhiyu', text: '就是Bad Ending...悲剧结局。' }
                ],
                choices: [
                    { text: '询问BE结局的内容', next: 'zy_2_18_a', affinity: {}, friendship: { gan_zhiyu: 5 } },
                    { text: '表示想先完整看完剧本', next: 'zy_2_18_b', affinity: {}, friendship: { gan_zhiyu: 3 } }
                ]
            },
            // --- 扩展场景10a：询问BE结局 ---
            {
                id: 'zy_2_18_a',
                title: '了解BE结局',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'zhou_yan', text: '方圆哥能说说那个结局吗？' },
                    { speaker: 'gan_zhiyu', text: '那个结局啊...' },
                    { speaker: 'narrator', text: '方圆沉默了一会儿。' },
                    { speaker: 'gan_zhiyu', text: '主角最后为了救所有人，牺牲了自己。' },
                    { speaker: 'gan_zhiyu', text: '但他的同伴们根本不知道。' },
                    { speaker: 'zhou_yan', text: '这...太虐心了。' },
                    { speaker: 'gan_zhiyu', text: '是啊，但正是这种遗憾，才让人久久难忘。' },
                    { speaker: 'narrator', text: '周砚发现，方圆说起剧本时，就像在讲述自己的故事。' }
                ],
                choices: [],
                next: 'zy_2_19'
            },
            // --- 扩展场景10b：先看完剧本 ---
            {
                id: 'zy_2_18_b',
                title: '先看完剧本',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'zhou_yan', text: '我想先自己完整看完再说。' },
                    { speaker: 'gan_zhiyu', text: '嗯，这样更好。' },
                    { speaker: 'gan_zhiyu', text: '每个人的感受都不一样。' },
                    { speaker: 'narrator', text: '方圆点点头，很认同周砚的想法。' },
                    { speaker: 'gan_zhiyu', text: '等你看完，我们可以再聊聊。' },
                    { speaker: 'zhou_yan', text: '好。' },
                    { speaker: 'narrator', text: '周砚决定要认真把这个剧本看完。' }
                ],
                choices: [],
                next: 'zy_2_19'
            },
            // --- 扩展场景11：客人感谢 ---
            {
                id: 'zy_2_19',
                title: '客人感谢',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '几天后的一个下午。' },
                    { speaker: 'narrator', text: '周砚正在整理道具，一个熟悉的身影走了进来。' },
                    { speaker: 'player', text: '请问...这里是三体剧本杀店吗？' },
                    { speaker: 'zhou_yan', text: '是的，请问...' },
                    { speaker: 'narrator', text: '周砚认出来了，是前几天第一次带本时的一个玩家。' },
                    { speaker: 'player', text: '是我！上次你带的本！' },
                    { speaker: 'player', text: '我特意来感谢你的！' },
                    { speaker: 'zhou_yan', text: '感谢我？' }
                ],
                choices: [],
                next: 'zy_2_19_1'
            },
            // --- 扩展场景11.1：感谢信 ---
            {
                id: 'zy_2_19_1',
                title: '收到感谢',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'player', text: '对啊！那天回去之后，我和朋友们都特别开心。' },
                    { speaker: 'player', text: '我们都是新手，但你的引导让我们很快进入了状态。' },
                    { speaker: 'narrator', text: '玩家递过来一袋水果。' },
                    { speaker: 'player', text: '这是我们的一点心意，请收下。' },
                    { speaker: 'zhou_yan', text: '这...不太好吧...' },
                    { speaker: 'chengzi', text: '收下吧！这是客人对DM最大的认可！' },
                    { speaker: 'narrator', text: '橙子在一旁笑着说。' },
                    { speaker: 'zhou_yan', text: '谢谢...谢谢你们。' },
                    { speaker: 'narrator', text: '周砚捧着水果，心里暖暖的。' }
                ],
                choices: [],
                next: 'zy_2_20'
            },
            // --- 扩展场景12：周砚的成长 ---
            {
                id: 'zy_2_20',
                title: '成长',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '试用期快结束的时候，阿昊把周砚叫到了办公室。' },
                    { speaker: 'ahao', text: '周砚，这段时间你表现得不错。' },
                    { speaker: 'zhou_yan', text: '谢谢店长。' },
                    { speaker: 'ahao', text: '试用期就算过了，欢迎你正式加入我们。' },
                    { speaker: 'narrator', text: '阿昊的脸上带着淡淡的笑容。' },
                    { speaker: 'zhou_yan', text: '我...我一定会继续努力的！' },
                    { speaker: 'ahao', text: '嗯，我相信你。' },
                    { speaker: 'narrator', text: '周砚深深鞠了一躬。' }
                ],
                choices: [],
                next: 'zy_2_20_1'
            },
            // --- 扩展场景12.1：正式员工 ---
            {
                id: 'zy_2_20_1',
                title: '正式员工',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '走出办公室，周砚看到大家都在外面等着。' },
                    { speaker: 'yu_haitong', text: '周砚！怎么样怎么样？' },
                    { speaker: 'zhou_yan', text: '店长说我...通过了。' },
                    { speaker: 'narrator', text: '大家欢呼起来。' },
                    { speaker: 'chengzi', text: '太好了！欢迎正式加入！' }
                ],
                choices: [],
                next: null
            }
        ]
    },
    // ========================================
    // 夏晚线 - 第二章：靠近
    // ========================================
    xia_wan_chapter2: {
        title: '第二章：靠近',
        theme: '身份转变（客人→DM）+ 心动萌芽',
        scenes: [

            // =============================================
            // 场景0：还伞入口（xw_2_1，根据第一章选择重定向到5条路线）
            // =============================================
            {
                id: 'xw_2_1',
                title: '还伞',
                background: 'bg-street',
                dialogues: [],
                choices: [],
                next: 'xw_2_1_xiaotong'
            },

            // =============================================
            // 场景1：还伞（5条路线，根据第一章选择分支）
            // =============================================

            // --- 还伞：木星线 ---
            {
                id: 'xw_2_1_xiaotong',
                title: '还伞',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚推开店门，一阵凉爽的空气扑面而来。' },
                    { speaker: 'narrator', text: '走到吧台前，她把伞轻轻放下。' },
                    { speaker: 'xia_wan', text: '苏馨悦，上次谢谢你的伞...' },
                    { speaker: 'su_xinyue', text: '哎呀！夏晚你来啦！' },
                    { speaker: 'narrator', text: '苏馨悦从吧台后探出头，眼睛亮了起来。' },
                    { speaker: 'su_xinyue', text: '这伞我差点都忘了～谢谢你专门跑一趟！' },
                    { speaker: 'narrator', text: '夏晚环顾四周，店里比上次来玩的时候更热闹了。' },
                    { speaker: 'narrator', text: '橙子在吧台后面调饮料，170坐在一旁看手机。' },
                    { speaker: 'narrator', text: '而在靠窗的沙发上，木星正窝在那里玩手机，听到声音抬起了头。' },
                    { speaker: 'xiao_tong', text: '哦？你来了。' },
                    { speaker: 'narrator', text: '他的声音很轻，目光也只是淡淡地扫过来一眼。' },
                    { speaker: 'xia_wan', text: '（他...好像记得我？）' },
                    { speaker: 'su_xinyue', text: '来来来，正好我们在休息，坐一会儿呗～' },
                    { speaker: 'narrator', text: '苏馨悦热情地招呼着。' }
                ],
                choices: [
                    { text: '留下来坐坐', next: 'xw_2_1_stay', affinity: {}, friendship: { su_xinyue: 3, chengzi: 3, yu_haitong: 3 } },
                    { text: '还完伞就离开', next: 'xw_2_1_leave', affinity: {}, friendship: {} }
                ]
            },

            // --- 还伞：谨言线 ---
            {
                id: 'xw_2_1_longxinheng',
                title: '还伞',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚推开店门，一阵凉爽的空气扑面而来。' },
                    { speaker: 'narrator', text: '走到吧台前，她把伞轻轻放下。' },
                    { speaker: 'xia_wan', text: '苏馨悦，上次谢谢你的伞...' },
                    { speaker: 'su_xinyue', text: '哎呀！夏晚你来啦！' },
                    { speaker: 'narrator', text: '苏馨悦从吧台后探出头，眼睛亮了起来。' },
                    { speaker: 'su_xinyue', text: '这伞我差点都忘了～谢谢你专门跑一趟！' },
                    { speaker: 'narrator', text: '夏晚环顾四周，店里比上次来玩的时候更热闹了。' },
                    { speaker: 'narrator', text: '橙子在吧台后面调饮料，170坐在一旁看手机。' },
                    { speaker: 'narrator', text: '而在角落的桌子旁，谨言正对着电脑敲着什么，听到声音抬起头来。' },
                    { speaker: 'long_xinheng', text: '哟！这不是上次玩本的...夏晚吗？' },
                    { speaker: 'narrator', text: '他放下电脑，笑着走了过来。' },
                    { speaker: 'long_xinheng', text: '我还记得你！上次那个本你玩得挺好的～' },
                    { speaker: 'xia_wan', text: '（他...居然还记得我？）' },
                    { speaker: 'su_xinyue', text: '来来来，正好我们在休息，坐一会儿呗～' },
                    { speaker: 'narrator', text: '苏馨悦热情地招呼着。' }
                ],
                choices: [
                    { text: '留下来坐坐', next: 'xw_2_1_stay', affinity: {}, friendship: { su_xinyue: 3, chengzi: 3, yu_haitong: 3 } },
                    { text: '还完伞就离开', next: 'xw_2_1_leave', affinity: {}, friendship: {} }
                ]
            },

            // --- 还伞：方圆线 ---
            {
                id: 'xw_2_1_ganzhiyu',
                title: '还伞',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚推开店门，一阵凉爽的空气扑面而来。' },
                    { speaker: 'narrator', text: '走到吧台前，她把伞轻轻放下。' },
                    { speaker: 'xia_wan', text: '苏馨悦，上次谢谢你的伞...' },
                    { speaker: 'su_xinyue', text: '哎呀！夏晚你来啦！' },
                    { speaker: 'narrator', text: '苏馨悦从吧台后探出头，眼睛亮了起来。' },
                    { speaker: 'su_xinyue', text: '这伞我差点都忘了～谢谢你专门跑一趟！' },
                    { speaker: 'narrator', text: '夏晚环顾四周，店里比上次来玩的时候更热闹了。' },
                    { speaker: 'narrator', text: '橙子在吧台后面调饮料，170坐在一旁看手机。' },
                    { speaker: 'narrator', text: '而在靠墙的架子上，方圆正踩着凳子整理剧本，听到声音转过头来。' },
                    { speaker: 'gan_zhiyu', text: '哎？这不是上次那个新玩家吗？' },
                    { speaker: 'narrator', text: '他从凳子上跳下来，笑着走过来。' },
                    { speaker: 'gan_zhiyu', text: '我叫甘志宇，大家都叫我方圆。欢迎常来～' },
                    { speaker: 'xia_wan', text: '（他看起来很热情...）' },
                    { speaker: 'su_xinyue', text: '来来来，正好我们在休息，坐一会儿呗～' },
                    { speaker: 'narrator', text: '苏馨悦热情地招呼着。' }
                ],
                choices: [
                    { text: '留下来坐坐', next: 'xw_2_1_stay', affinity: {}, friendship: { su_xinyue: 3, chengzi: 3, yu_haitong: 3 } },
                    { text: '还完伞就离开', next: 'xw_2_1_leave', affinity: {}, friendship: {} }
                ]
            },

            // --- 还伞：吴琊线 ---
            {
                id: 'xw_2_1_wuya',
                title: '还伞',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚推开店门，一阵凉爽的空气扑面而来。' },
                    { speaker: 'narrator', text: '走到吧台前，她把伞轻轻放下。' },
                    { speaker: 'xia_wan', text: '苏馨悦，上次谢谢你的伞...' },
                    { speaker: 'narrator', text: '没人应声。夏晚抬头一看，吧台后站着一个高瘦的身影——' },
                    { speaker: 'narrator', text: '吴琊正低头整理着什么，感觉到目光才缓缓抬起头。' },
                    { speaker: 'wu_ya', text: '...你是？' },
                    { speaker: 'xia_wan', text: '我是夏晚，上次借了伞...我来还。' },
                    { speaker: 'wu_ya', text: '嗯，放那儿就行。' },
                    { speaker: 'narrator', text: '吴琊说完又低下头继续忙。' },
                    { speaker: 'narrator', text: '夏晚有点尴尬地站在那里，不知道该走还是该留。' },
                    { speaker: 'su_xinyue', text: '吴琊你干嘛呢！人家专门来还伞的！' },
                    { speaker: 'narrator', text: '苏馨悦从里间走出来，看到夏晚眼睛一亮。' },
                    { speaker: 'su_xinyue', text: '哎呀！夏晚你来啦！' },
                    { speaker: 'xia_wan', text: '（还好虹猫姐来了...）' },
                    { speaker: 'su_xinyue', text: '来来来，正好我们在休息，坐一会儿呗～' },
                    { speaker: 'narrator', text: '苏馨悦热情地招呼着。' }
                ],
                choices: [
                    { text: '留下来坐坐', next: 'xw_2_1_stay', affinity: {}, friendship: { su_xinyue: 3, chengzi: 3, yu_haitong: 3 } },
                    { text: '还完伞就离开', next: 'xw_2_1_leave', affinity: {}, friendship: {} }
                ]
            },

            // --- 还伞：苏馨悦线 ---
            {
                id: 'xw_2_1_suxinyue',
                title: '还伞',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚推开店门，一阵凉爽的空气扑面而来。' },
                    { speaker: 'narrator', text: '走到吧台前，她把伞轻轻放下。' },
                    { speaker: 'xia_wan', text: '苏馨悦，上次谢谢你的伞...' },
                    { speaker: 'su_xinyue', text: '哎呀！夏晚你来啦！' },
                    { speaker: 'narrator', text: '苏馨悦从吧台后探出头，眼睛亮了起来。' },
                    { speaker: 'su_xinyue', text: '这伞我差点都忘了～谢谢你专门跑一趟！' },
                    { speaker: 'narrator', text: '夏晚环顾四周，店里的氛围和上次来玩的时候一样温馨。' },
                    { speaker: 'narrator', text: '橙子在吧台后面调饮料，170坐在一旁看手机。' },
                    { speaker: 'su_xinyue', text: '来来来，正好我们在休息，坐一会儿呗～' },
                    { speaker: 'narrator', text: '苏馨悦热情地招呼着。' },
                    { speaker: 'xia_wan', text: '（大家都在，好热闹...）' }
                ],
                choices: [
                    { text: '留下来坐坐', next: 'xw_2_1_stay', affinity: {}, friendship: { su_xinyue: 3, chengzi: 3, yu_haitong: 3 } },
                    { text: '还完伞就离开', next: 'xw_2_1_leave', affinity: {}, friendship: {} }
                ]
            },

            // --- 留下聊天（公共汇合点）---
            {
                id: 'xw_2_1_stay',
                title: '留下来',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚被苏馨悦拉着坐到了休息区。' },
                    { speaker: 'chengzi', text: '夏晚！好久不见呀～' },
                    { speaker: 'yu_haitong', text: '对对对，上次你玩本的时候我就觉得你超投入的！' },
                    { speaker: 'narrator', text: '橙子和170热情地围过来。' },
                    { speaker: 'narrator', text: '大家你一言我一语地聊着，气氛轻松愉快。' },
                    { speaker: 'narrator', text: '聊着聊着，小琴突然想起什么。' },
                    { speaker: 'gong_qin', text: '说起来，我们店最近一直在招兼职DM呢。' },
                    { speaker: 'su_xinyue', text: '是啊，一直没找到合适的人...' },
                    { speaker: 'xia_wan', text: '（兼职DM...）' },
                    { speaker: 'narrator', text: '夏晚想起上次玩本时的体验，心里微微一动。' }
                ],
                choices: [
                    { text: '鼓起勇气：我能试试吗？', next: 'xw_2_1_accept', affinity: {}, friendship: { su_xinyue: 3, chengzi: 3, yu_haitong: 3, gong_qin: 3 } },
                    { text: '再考虑一下', next: 'xw_2_1_leave', affinity: {}, friendship: {} }
                ]
            },

            // --- 婉拒离开（几天后收到消息重新来店）---
            {
                id: 'xw_2_1_leave',
                title: '离开',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '谢谢你们，下次再来～' },
                    { speaker: 'su_xinyue', text: '好呀！下次来玩哦！' },
                    { speaker: 'chengzi', text: '常来呀夏晚！' },
                    { speaker: 'narrator', text: '夏晚挥了挥手，走出了店门。' },
                    { speaker: 'narrator', text: '回到家后，她把这件事暂时抛在了脑后。' }
                ],
                choices: [
                    { text: '（几天后，收到橙子的消息）', next: 'xw_2_reinvite', affinity: {}, friendship: { chengzi: 2 } }
                ]
            },

            // --- 重新被邀请来店 ---
            {
                id: 'xw_2_reinvite',
                title: '重新邀请',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '【橙子】夏晚！最近忙吗？' },
                    { speaker: 'narrator', text: '【橙子】我们店最近缺人手，想问问你有兴趣来试试吗？' },
                    { speaker: 'narrator', text: '【橙子】不用全职，就帮忙带带本～包吃还有工资哦！' },
                    { speaker: 'xia_wan', text: '（上次走的时候...确实有点可惜）' }
                ],
                choices: [
                    { text: '好的，我愿意试试！', next: 'xw_2_1_accept', affinity: {}, friendship: { su_xinyue: 2, chengzi: 5, yu_haitong: 2 } },
                    { text: '算了，还是算了...', next: 'xw_2_bad_end', affinity: {}, friendship: {} }
                ]
            },

            // --- 接受兼职邀请 ---
            {
                id: 'xw_2_1_accept',
                title: '新的开始',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '那个...我能试试吗？我对这个挺感兴趣的...' },
                    { speaker: 'narrator', text: '夏晚鼓起勇气说出了这句话。' },
                    { speaker: 'su_xinyue', text: '真的吗！太好了！！' },
                    { speaker: 'chengzi', text: '欢迎欢迎！我们正缺人呢～' },
                    { speaker: 'yu_haitong', text: '以后你就是我们的同事啦！' },
                    { speaker: 'narrator', text: '大家都很开心，夏晚也被这种热情感染了。' },
                    { speaker: 'xia_wan', text: '（新的开始...吗？）' },
                    { speaker: 'narrator', text: '夏晚的嘴角不自觉地上扬。' }
                ],
                choices: [],
                next: 'xw_2_2'
            },

            // =============================================
            // 场景2：培训
            // =============================================
            {
                id: 'xw_2_2',
                title: '培训',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '第二天，夏晚正式来到店里报到。' },
                    { speaker: 'narrator', text: '阿昊已经在等她了。' },
                    { speaker: 'ahao', text: '来了？好，来，我教你。' },
                    { speaker: 'narrator', text: '阿昊的语气简洁直接，带着夏晚走向了一间空房间。' },
                    { speaker: 'ahao', text: '先教你基本的东西。' },
                    { speaker: 'narrator', text: '他拿出一本剧本，翻开讲解。' },
                    { speaker: 'ahao', text: 'DM的核心是引导玩家进入角色。不是背台词，是让人相信这个故事是真的。' },
                    { speaker: 'xia_wan', text: '（好专业...）' }
                ],
                choices: [
                    { text: '认真听讲', next: 'xw_2_2a', affinity: {}, friendship: { ahao: 5 } },
                    { text: '有疑问就提出来', next: 'xw_2_2a', affinity: {}, friendship: { ahao: 3 } }
                ]
            },
            {
                id: 'xw_2_2a',
                title: '继续培训',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'ahao', text: '还有控场，玩家跑偏的时候要拉回来，但不能太生硬...' },
                    { speaker: 'narrator', text: '阿昊讲了一会儿，突然看了看手机。' },
                    { speaker: 'ahao', text: '差不多了，剩下的你以后慢慢学。' },
                    { speaker: 'xia_wan', text: '啊？这就...？' },
                    { speaker: 'narrator', text: '夏晚有些意外。' },
                    { speaker: 'ahao', text: '基础够用了，剩下的实践中摸索。' },
                    { speaker: 'narrator', text: '阿昊说完就走向了另一边，留下夏晚有些茫然。' },
                    { speaker: 'xia_wan', text: '（这和我想的不太一样...）' }
                ],
                choices: [],
                next: 'xw_2_2_free'
            },

            // --- 培训后自由活动 ---
            {
                id: 'xw_2_2_free',
                title: '自由活动',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '培训结束后，夏晚有了些自由时间。' },
                    { speaker: 'narrator', text: '店里的大家都在各自忙碌着...' },
                    { speaker: 'narrator', text: '她可以选择找人说说话，熟悉一下环境。' }
                ],
                choices: [
                    { text: '和苏馨悦聊天', next: 'xw_2_2_suxinyue', affinity: {}, friendship: { su_xinyue: 5 } },
                    { text: '和橙子聊天', next: 'xw_2_2_chengzi', affinity: {}, friendship: { chengzi: 5 } },
                    { text: '和170聊天', next: 'xw_2_2_yuhaitong', affinity: {}, friendship: { yu_haitong: 5 } },
                    { text: '和木星聊天', next: 'xw_2_2_xiaotong', affinity: { xiao_tong: 5 }, friendship: { xiao_tong: 5 } },
                    { text: '和谨言聊天', next: 'xw_2_2_longxinheng', affinity: { long_xinheng: 5 }, friendship: { long_xinheng: 5 } },
                    { text: '和方圆聊天', next: 'xw_2_2_ganzhiyu', affinity: { gan_zhiyu: 5 }, friendship: { gan_zhiyu: 5 } },
                    { text: '和吴琊聊天', next: 'xw_2_2_wuya', affinity: { wu_ya: 5 }, friendship: { wu_ya: 5 } },
                    { text: '自己熟悉环境', next: 'xw_2_3', affinity: {}, friendship: {} }
                ]
            },

            // --- 培训自由活动分支 ---
            {
                id: 'xw_2_2_suxinyue',
                title: '和苏馨悦聊天',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'su_xinyue', text: '夏晚！培训结束了？感觉怎么样？' },
                    { speaker: 'xia_wan', text: '还行...阿昊教得挺快的。' },
                    { speaker: 'su_xinyue', text: '哈哈，他一向这样，实用主义。' },
                    { speaker: 'su_xinyue', text: '有什么不懂的可以问我，我也是从新人过来的～' },
                    { speaker: 'xia_wan', text: '谢谢虹猫姐！' },
                    { speaker: 'narrator', text: '苏馨悦的笑容很有感染力，让人感觉很温暖。' },
                    { speaker: 'xia_wan', text: '（虹猫姐人真好...）' }
                ],
                choices: [],
                next: 'xw_2_3'
            },
            {
                id: 'xw_2_2_chengzi',
                title: '和橙子聊天',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'chengzi', text: '夏晚～培训累不累？' },
                    { speaker: 'xia_wan', text: '还好，就是信息量有点大。' },
                    { speaker: 'chengzi', text: '别担心，慢慢来就好了！' },
                    { speaker: 'chengzi', text: '我刚来的时候比你还紧张呢～' },
                    { speaker: 'xia_wan', text: '真的吗？橙子姐看起来很厉害的样子。' },
                    { speaker: 'chengzi', text: '嘿嘿，多带几本就熟练啦～' },
                    { speaker: 'narrator', text: '橙子的开朗让夏晚放松了不少。' }
                ],
                choices: [],
                next: 'xw_2_3'
            },
            {
                id: 'xw_2_2_yuhaitong',
                title: '和170聊天',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'yu_haitong', text: '夏晚！培训结束了？来来来，休息一下～' },
                    { speaker: 'narrator', text: '170热情地拉着夏晚坐下。' },
                    { speaker: 'yu_haitong', text: '第一次培训是不是有点懵？' },
                    { speaker: 'xia_wan', text: '有一点...阿昊教得挺快的。' },
                    { speaker: 'yu_haitong', text: '哈哈哈，他就这样，你习惯就好！' },
                    { speaker: 'yu_haitong', text: '有什么不懂的随时问我～' },
                    { speaker: 'xia_wan', text: '谢谢170姐！' },
                    { speaker: 'narrator', text: '170的性格很活泼，让人忍不住想亲近。' }
                ],
                choices: [],
                next: 'xw_2_3'
            },
            {
                id: 'xw_2_2_xiaotong',
                title: '和木星聊天',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xiao_tong', text: '培训结束了？' },
                    { speaker: 'xia_wan', text: '嗯...阿昊教得好快，我有点跟不上。' },
                    { speaker: 'xiao_tong', text: '没关系，基础够用就行。' },
                    { speaker: 'xiao_tong', text: '真正重要的东西，都是在带本过程中学会的。' },
                    { speaker: 'xia_wan', text: '你当初也是这样学的吗？' },
                    { speaker: 'xiao_tong', text: '差不多。' },
                    { speaker: 'narrator', text: '木星的声音温和而有磁性，让人不自觉地想听他继续说下去。' },
                    { speaker: 'xia_wan', text: '（他说话好温柔...）' }
                ],
                choices: [],
                next: 'xw_2_3'
            },
            {
                id: 'xw_2_2_longxinheng',
                title: '和谨言聊天',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'long_xinheng', text: '哟！新人！培训感觉怎么样？' },
                    { speaker: 'xia_wan', text: '还...还好。' },
                    { speaker: 'long_xinheng', text: '哈哈，别紧张！阿昊就是那样，其实人还不错的～' },
                    { speaker: 'long_xinheng', text: '以后有什么不懂的可以来问我！' },
                    { speaker: 'xia_wan', text: '谢谢...谨言？' },
                    { speaker: 'long_xinheng', text: '叫我谨言就行，大家都这么叫～' },
                    { speaker: 'narrator', text: '谨言的笑容很有感染力，让人心情也跟着好起来。' }
                ],
                choices: [],
                next: 'xw_2_3'
            },
            {
                id: 'xw_2_2_ganzhiyu',
                title: '和方圆聊天',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'gan_zhiyu', text: '嘿！新来的？' },
                    { speaker: 'xia_wan', text: '嗯，我叫夏晚。' },
                    { speaker: 'gan_zhiyu', text: '我叫甘志宇，大家都叫我方圆。' },
                    { speaker: 'gan_zhiyu', text: '欢迎加入～有什么需要帮忙的尽管说。' },
                    { speaker: 'xia_wan', text: '谢谢方圆！' },
                    { speaker: 'gan_zhiyu', text: '叫我名字就行，大家都这样叫。' },
                    { speaker: 'narrator', text: '方圆看起来很随和，让人感觉很容易相处。' }
                ],
                choices: [],
                next: 'xw_2_3'
            },
            {
                id: 'xw_2_2_wuya',
                title: '和吴琊聊天',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'wu_ya', text: '新人？' },
                    { speaker: 'xia_wan', text: '是的...我叫夏晚。' },
                    { speaker: 'wu_ya', text: '嗯。' },
                    { speaker: 'narrator', text: '吴琊的回答很简短，看起来不太好接近。' },
                    { speaker: 'xia_wan', text: '（他好像有点冷淡...）' },
                    { speaker: 'narrator', text: '但不知道为什么，吴琊的眼神里似乎有一丝不易察觉的温柔。' }
                ],
                choices: [],
                next: 'xw_2_3'
            },

            // =============================================
            // 场景3：午餐
            // =============================================
            {
                id: 'xw_2_3',
                title: '午餐',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '到了午饭时间，大家陆续聚到了休息区。' },
                    { speaker: 'su_xinyue', text: '夏晚，今天你请客吗？' },
                    { speaker: 'xia_wan', text: '诶？我请客？' },
                    { speaker: 'chengzi', text: '新人第一天上班，按惯例要请客的呀～' },
                    { speaker: 'narrator', text: '橙子笑嘻嘻地说。' },
                    { speaker: 'xia_wan', text: '好、好吧...大家想吃什么？' },
                    { speaker: 'narrator', text: '夏晚有点紧张，但大家热情的样子让她觉得也没什么不好。' },
                    { speaker: 'yu_haitong', text: '我要吃麻辣香锅！！' },
                    { speaker: 'long_xinheng', text: '我要奶茶！' },
                    { speaker: 'narrator', text: '大家七嘴八舌地点着餐，夏晚的手机响个不停。' }
                ],
                choices: [],
                next: 'xw_2_3_free'
            },

            // --- 午餐自由活动 ---
            {
                id: 'xw_2_3_free',
                title: '午餐时光',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'narrator', text: '外卖到了，大家围坐在一起吃饭。' },
                    { speaker: 'narrator', text: '夏晚可以和大家聊天，也可以默默观察大家。' }
                ],
                choices: [
                    { text: '和苏馨悦聊天', next: 'xw_2_3_suxinyue', affinity: {}, friendship: { su_xinyue: 5 } },
                    { text: '和橙子聊天', next: 'xw_2_3_chengzi', affinity: {}, friendship: { chengzi: 5 } },
                    { text: '和170聊天', next: 'xw_2_3_yuhaitong', affinity: {}, friendship: { yu_haitong: 5 } },
                    { text: '和木星聊天', next: 'xw_2_3_xiaotong', affinity: { xiao_tong: 5 }, friendship: { xiao_tong: 5 } },
                    { text: '和谨言聊天', next: 'xw_2_3_longxinheng', affinity: { long_xinheng: 5 }, friendship: { long_xinheng: 5 } },
                    { text: '和方圆聊天', next: 'xw_2_3_ganzhiyu', affinity: { gan_zhiyu: 5 }, friendship: { gan_zhiyu: 5 } },
                    { text: '和吴琊聊天', next: 'xw_2_3_wuya', affinity: { wu_ya: 5 }, friendship: { wu_ya: 5 } },
                    { text: '默默吃饭观察大家', next: 'xw_2_4', affinity: {}, friendship: {} }
                ]
            },

            // --- 午餐自由活动分支 ---
            {
                id: 'xw_2_3_suxinyue',
                title: '和苏馨悦午餐',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'xia_wan', text: '虹猫姐，你做这行多久了？' },
                    { speaker: 'su_xinyue', text: '也就几个月吧，之前在准备考试。' },
                    { speaker: 'su_xinyue', text: '最近才正式开始工作的～' },
                    { speaker: 'xia_wan', text: '那姐是怎么想来这里的？' },
                    { speaker: 'su_xinyue', text: '朋友介绍的，结果一发不可收拾～' },
                    { speaker: 'su_xinyue', text: '这工作挺有意思的，能遇到各种各样的人。' },
                    { speaker: 'xia_wan', text: '（原来虹猫姐也是新来的...）' }
                ],
                choices: [],
                next: 'xw_2_4'
            },
            {
                id: 'xw_2_3_chengzi',
                title: '和橙子午餐',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'xia_wan', text: '橙子姐平时带什么类型的本呀？' },
                    { speaker: 'chengzi', text: '情感本比较多，我喜欢那种能让人哭的本～' },
                    { speaker: 'xia_wan', text: '诶，情感本？' },
                    { speaker: 'chengzi', text: '对呀！带情感本的时候，看到玩家哭得稀里哗啦的，特别有成就感！' },
                    { speaker: 'xia_wan', text: '（感觉橙子姐好厉害...）' },
                    { speaker: 'narrator', text: '橙子说起本子的时候眼睛亮晶晶的，看起来真的很热爱这份工作。' }
                ],
                choices: [],
                next: 'xw_2_4'
            },
            {
                id: 'xw_2_3_yuhaitong',
                title: '和170午餐',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'yu_haitong', text: '夏晚，你住校还是走读呀？' },
                    { speaker: 'xia_wan', text: '我住校，离学校不远。' },
                    { speaker: 'yu_haitong', text: '那挺好的！我和吴琊、虹猫一起租房～' },
                    { speaker: 'xia_wan', text: '哇，三个人的合租！' },
                    { speaker: 'yu_haitong', text: '对呀！虽然有时候会有点挤，但是很热闹～' },
                    { speaker: 'narrator', text: '170说话的时候眉飞色舞的，让人忍不住被她的热情感染。' }
                ],
                choices: [],
                next: 'xw_2_4'
            },
            {
                id: 'xw_2_3_xiaotong',
                title: '和木星午餐',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'xia_wan', text: '木星平时喜欢玩什么类型的本？' },
                    { speaker: 'xiao_tong', text: '都玩，推理和情感比较多。' },
                    { speaker: 'xia_wan', text: '木星有什么推荐的吗？' },
                    { speaker: 'xiao_tong', text: '等你能带本了，我带你玩个特别的。' },
                    { speaker: 'narrator', text: '木星说着，嘴角微微上扬。' },
                    { speaker: 'xia_wan', text: '（特别的...？）' },
                    { speaker: 'narrator', text: '夏晚心里莫名有点期待。' }
                ],
                choices: [],
                next: 'xw_2_4'
            },
            {
                id: 'xw_2_3_longxinheng',
                title: '和谨言午餐',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'long_xinheng', text: '夏晚，你知道吗，我之前是盒装本DM！' },
                    { speaker: 'xia_wan', text: '盒装本？和城限有什么区别吗？' },
                    { speaker: 'long_xinheng', text: '城限是一个城市只有几家店有，盒装是随便哪家店都能买～' },
                    { speaker: 'long_xinheng', text: '不过我更喜欢带情感本，能看到玩家哭真的很有成就感！' },
                    { speaker: 'xia_wan', text: '谨言好像很开心的样子。' },
                    { speaker: 'narrator', text: '谨言笑起来眼睛眯成一条缝，让人忍不住也想笑。' }
                ],
                choices: [],
                next: 'xw_2_4'
            },
            {
                id: 'xw_2_3_ganzhiyu',
                title: '和方圆午餐',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'gan_zhiyu', text: '夏晚，你玩过几次剧本杀？' },
                    { speaker: 'xia_wan', text: '算上上次那次的，也就两三次吧。' },
                    { speaker: 'gan_zhiyu', text: '那你运气不错，第一次就遇到我们店～' },
                    { speaker: 'xia_wan', text: '方圆做这行多久了？' },
                    { speaker: 'gan_zhiyu', text: '早几个月吧，比你早不了多少～' },
                    { speaker: 'narrator', text: '方圆说话很随意，但能感觉到他其实挺细心的。' }
                ],
                choices: [],
                next: 'xw_2_4'
            },
            {
                id: 'xw_2_3_wuya',
                title: '和吴琊午餐',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'xia_wan', text: '吴琊...我能问你一个问题吗？' },
                    { speaker: 'wu_ya', text: '说。' },
                    { speaker: 'xia_wan', text: '你为什么会来这里工作？' },
                    { speaker: 'wu_ya', text: '...朋友介绍来的。' },
                    { speaker: 'narrator', text: '吴琊的回答很简短，但不知道为什么，夏晚觉得这个答案背后有故事。' },
                    { speaker: 'xia_wan', text: '（他好像不太愿意说...）' }
                ],
                choices: [],
                next: 'xw_2_4'
            },

            // =============================================
            // 场景4：测本（dynamicDM: true）
            // =============================================
            {
                id: 'xw_2_4',
                title: '测本',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'ahao', text: '下午测个本，轻松点的。' },
                    { speaker: 'narrator', text: '阿昊说道。' },
                    { speaker: 'ahao', text: '夏晚，你作为玩家参与，其他人来带。' },
                    { speaker: 'xia_wan', text: '好...好的。' },
                    { speaker: 'narrator', text: '夏晚有点紧张，但也很期待。' },
                    { speaker: 'su_xinyue', text: '放心，就是个欢乐本，很好玩的～' },
                    { speaker: 'narrator', text: '苏馨悦安慰道。' }
                ],
                choices: [],
                next: 'xw_2_4a'
            },

            // --- 测本进行中 ---
            {
                id: 'xw_2_4a',
                title: '测本中',
                background: 'bg-room',
                dynamicDM: true,
                dialogues: [
                    { speaker: 'narrator', text: '夏晚坐在玩家位上，手里拿着剧本。' },
                    { speaker: 'narrator', text: 'DYNAMIC_DM_INTRO' },
                    { speaker: 'narrator', text: '夏晚认真地看着自己的剧本，试图进入角色。' },
                    { speaker: 'narrator', text: '玩着玩着，她渐渐忘记了紧张，完全沉浸在了故事里。' },
                    { speaker: 'DYNAMIC_DM_CHAR', text: 'DYNAMIC_DM_INGAME' },
                    { speaker: 'narrator', text: '测本结束后，大家围坐在一起复盘。' },
                    { speaker: 'DYNAMIC_DM_CHAR', text: 'DYNAMIC_DM_GLANCE' }
                ],
                choices: [],
                next: 'xw_2_4b'
            },

            // --- 测本结束 ---
            {
                id: 'xw_2_4b',
                title: '测本结束',
                background: 'bg-room',
                dynamicDM: true,
                dialogues: [
                    { speaker: 'DYNAMIC_DM_CHAR', text: 'DYNAMIC_DM_COMPLIMENT' },
                    { speaker: 'xia_wan', text: '（心里咯噔一下）' },
                    { speaker: 'xia_wan', text: '（脸...脸好烫...）' },
                    { speaker: 'narrator', text: '夏晚低下头，假装在整理剧本。' },
                    { speaker: 'su_xinyue', text: '哈哈哈，夏晚脸红了！' },
                    { speaker: 'chengzi', text: 'DYNAMIC_DM_TEASE' },
                    { speaker: 'narrator', text: '大家笑了起来，气氛轻松愉快。' },
                    { speaker: 'narrator', text: '但夏晚的心跳，还是久久没有平复...' }
                ],
                choices: [],
                next: 'xw_2_4_free'
            },

            // --- 测本后自由活动 ---
            {
                id: 'xw_2_4_free',
                title: '测本后',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '测本结束后，大家陆续散去。' },
                    { speaker: 'narrator', text: '夏晚还坐在原位，心跳还没有完全平复...' },
                    { speaker: 'narrator', text: '她可以选择找人聊聊刚才的感受。' }
                ],
                choices: [
                    { text: '和橙子聊聊', next: 'xw_2_4_chengzi', affinity: {}, friendship: { chengzi: 5 } },
                    { text: '和苏馨悦聊聊', next: 'xw_2_4_suxinyue', affinity: {}, friendship: { su_xinyue: 5 } },
                    { text: '自己待一会儿', next: 'xw_2_5', affinity: {}, friendship: {} }
                ]
            },
            {
                id: 'xw_2_4_chengzi',
                title: '和橙子聊聊',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'chengzi', text: '夏晚～刚才玩得怎么样？' },
                    { speaker: 'xia_wan', text: '好好玩！真的太好玩了...' },
                    { speaker: 'chengzi', text: '哈哈哈，第一次当玩家都这样！' },
                    { speaker: 'chengzi', text: '等你正式带本的时候，会更好玩的～' },
                    { speaker: 'xia_wan', text: '真的吗？好期待...' },
                    { speaker: 'narrator', text: '橙子笑嘻嘻地拍了拍夏晚的肩膀。' }
                ],
                choices: [],
                next: 'xw_2_5'
            },
            {
                id: 'xw_2_4_suxinyue',
                title: '和苏馨悦聊聊',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'su_xinyue', text: '夏晚，感觉怎么样？' },
                    { speaker: 'xia_wan', text: '好紧张...但是好开心！' },
                    { speaker: 'su_xinyue', text: '看来你很适合当DM呢～' },
                    { speaker: 'su_xinyue', text: '刚才测本的时候你特别认真，我都看到了哦。' },
                    { speaker: 'xia_wan', text: '真的吗...' },
                    { speaker: 'narrator', text: '苏馨悦的笑容让人安心，夏晚觉得心里暖暖的。' }
                ],
                choices: [],
                next: 'xw_2_5'
            },

            // =============================================
            // 场景5：心动触发（dynamicDM: true）
            // =============================================
            {
                id: 'xw_2_5',
                title: '心动',
                background: 'bg-room',
                dynamicDM: true,
                dialogues: [
                    { speaker: 'narrator', text: '夏晚正准备离开，他叫住了她。' },
                    { speaker: 'DYNAMIC_DM_CHAR', text: 'DYNAMIC_DM_HELP_REQUEST' },
                    { speaker: 'xia_wan', text: '好。' },
                    { speaker: 'narrator', text: '夏晚跟着他走进了房间。' },
                    { speaker: 'narrator', text: '其他人已经走远了，房间里只剩下他们两个人。' },
                    { speaker: 'narrator', text: '整理剧本的时候，他又开口了...' }
                ],
                choices: [],
                next: 'xw_2_5a'
            },
            {
                id: 'xw_2_5a',
                title: '心动瞬间',
                background: 'bg-room',
                dynamicDM: true,
                dialogues: [
                    { speaker: 'narrator', text: 'DYNAMIC_DM_MORE_WORDS' },
                    { speaker: 'xia_wan', text: '真、真的吗...' },
                    { speaker: 'narrator', text: 'DYNAMIC_DM_PRAISE' },
                    { speaker: 'narrator', text: '他说完就转身继续整理剧本，留下夏晚愣在原地。' },
                    { speaker: 'xia_wan', text: '（心跳好快...）' },
                    { speaker: 'narrator', text: '夏晚感觉脸烫得厉害。' },
                    { speaker: 'narrator', text: '她偷偷看向他的背影，心里有种说不清的感觉...' }
                ],
                choices: [],
                next: 'xw_2_6'
            },

            // =============================================
            // 场景6：告别 & 收到微信（dynamicDM: true）
            // =============================================
            {
                id: 'xw_2_6',
                title: '告别',
                background: 'bg-street',
                dynamicDM: true,
                dialogues: [
                    { speaker: 'narrator', text: '离开的时候，夏晚忍不住回头看了一眼。' },
                    { speaker: 'narrator', text: '透过玻璃窗，她能看到DM正在收拾东西的身影。' },
                    { speaker: 'xia_wan', text: '（今天...发生了好多事。）' },
                    { speaker: 'narrator', text: '夏晚走在回家的路上，心里乱糟糟的。' },
                    { speaker: 'narrator', text: '手机突然响了。' }
                ],
                choices: [],
                next: 'xw_2_6a'
            },
            {
                id: 'xw_2_6a',
                title: '微信消息',
                background: 'bg-phone',
                dynamicDM: true,
                dialogues: [
                    { speaker: 'narrator', text: '是他发来的微信。' },
                    { speaker: 'DYNAMIC_DM_CHAR', text: 'DYNAMIC_DM_WEIXIN_1' },
                    { speaker: 'xia_wan', text: '（他还...关心我。）' },
                    { speaker: 'narrator', text: '夏晚的嘴角不自觉地上扬，连忙回复消息。' }
                ],
                choices: [],
                next: 'xw_2_6b'
            },
            {
                id: 'xw_2_6b',
                title: '微信消息',
                background: 'bg-phone',
                dialogues: [
                    { speaker: 'narrator', text: '又一条消息弹出来。' },
                    { speaker: 'narrator', text: '是苏馨悦发来的。' },
                    { speaker: 'narrator', text: '「夏晚～今天辛苦啦！第一天上班感觉怎么样？」' },
                    { speaker: 'narrator', text: '「有什么不懂的随时问我哦～」' },
                    { speaker: 'xia_wan', text: '（虹猫姐人真好...）' },
                    { speaker: 'narrator', text: '夏晚心里暖暖的，一一回复着消息。' }
                ],
                choices: [],
                next: 'xw_2_6c'
            },
            {
                id: 'xw_2_6c',
                title: '微信消息',
                background: 'bg-phone',
                dialogues: [
                    { speaker: 'narrator', text: '手机又响了。' },
                    { speaker: 'narrator', text: '是小琴发来的工作消息。' },
                    { speaker: 'narrator', text: '「夏晚，你的排班表出来了，下周二和周六上班哦～」' },
                    { speaker: 'narrator', text: '「有事提前说～」' },
                    { speaker: 'xia_wan', text: '（正式成为店里的DM了...）' },
                    { speaker: 'narrator', text: '夏晚看着手机屏幕，心里充满了期待。' }
                ],
                choices: [],
                next: 'xw_2_end'
            },

            // =============================================
            // 第二章坏结局
            // =============================================
            {
                id: 'xw_2_bad_end',
                title: '擦肩而过',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚关掉手机，翻了个身。' },
                    { speaker: 'narrator', text: '"下次吧..."她这样想着。' },
                    { speaker: 'narrator', text: '窗外的城市依旧喧嚣。' },
                    { speaker: 'narrator', text: '而那家小店里的故事，还在继续——' },
                    { speaker: 'narrator', text: '只是主角不再是她。' },
                    { speaker: 'narrator', text: '有些人，错过了就是错过了。' },
                    { speaker: 'narrator', text: '夏晚线 第二章「新的开始」 完' },
                    { speaker: 'narrator', text: '【BE · 擦肩而过】' }
                ],
                choices: [],
                next: null
            },

            // =============================================
            // 第二章结局
            // =============================================
            {
                id: 'xw_2_end',
                title: '新的开始',
                background: 'bg-dorm',
                dynamicDM: true,
                dialogues: [
                    { speaker: 'narrator', text: '2024年10月。' },
                    { speaker: 'narrator', text: '夏晚回到家，躺在床上。' },
                    { speaker: 'narrator', text: '脑海里不断回放着今天发生的一切...' },
                    { speaker: 'narrator', text: '阿昊的培训，大家的午餐，测本时的专注...' },
                    { speaker: 'narrator', text: '还有那句轻轻的"DYNAMIC_DM_REVIEW"。' },
                    { speaker: 'xia_wan', text: '（新的故事，要开始了呢。）' },
                    { speaker: 'narrator', text: '夏晚闭上眼睛，嘴角带着微笑。' },
                    { speaker: 'narrator', text: '窗外，月光温柔地洒落。' },
                    { speaker: 'narrator', text: '就像那家店里，某个人的眼神一样...' },
                    { speaker: 'xia_wan', text: '（明天...还能见到他吧？）' }
                ]
            }
        ]
    },
    // ========================================
    // 夏晚线 - 第二章扩展：融入与成长
    // ========================================
    xia_wan_chapter2_extend: {
        title: '第二章扩展：融入与成长',
        theme: '入职后的日子，慢慢融入这个温暖的大家庭',
        scenes: [

            // =============================================
            // 场景9：第二天·清晨
            // =============================================
            {
                id: 'xw_2_9',
                title: '第二天',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '2024年10月，某个微凉的清晨。' },
                    { speaker: 'narrator', text: '夏晚站在剧本杀店门口，手里提着一袋热乎乎的包子。' },
                    { speaker: 'narrator', text: '比约定的上班时间早了二十分钟。' },
                    { speaker: 'xia_wan', text: '（昨天说好要早到的...）' },
                    { speaker: 'xia_wan', text: '（希望不要迟到才好。）' },
                    { speaker: 'narrator', text: '她哈出一口白气，搓了搓有些冻僵的手指。' },
                    { speaker: 'narrator', text: '店门还锁着，门上的风铃在晨风中轻轻摇晃。' },
                    { speaker: 'narrator', text: '夏晚靠在门边等着，视线落在街道上渐渐亮起的店铺灯牌。' },
                    { speaker: 'narrator', text: '这一刻，她突然觉得未来好像也没那么可怕了。' }
                ],
                choices: [
                    { text: '安静地等开门', next: 'xw_2_9_a', affinity: {}, friendship: { ahao: 3 } },
                    { text: '给阿昊发消息说到了', next: 'xw_2_9_b', affinity: {}, friendship: { ahao: 5 } }
                ]
            },

            // --- 场景9a：安静等待 ---
            {
                id: 'xw_2_9_a',
                title: '清晨的街道',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚没有打扰别人，安静地等着。' },
                    { speaker: 'narrator', text: '街上行人渐渐多了起来。' },
                    { speaker: 'narrator', text: '有背着书包的学生，有推着早餐车的小贩。' },
                    { speaker: 'narrator', text: '这座城市正在醒来。' },
                    { speaker: 'narrator', text: '夏晚看着这些陌生的面孔，心里涌起一种奇妙的感觉。' },
                    { speaker: 'xia_wan', text: '（原来一个城市的早晨，是这样子的。）' },
                    { speaker: 'narrator', text: '她觉得自己好像也成了这幅画里的一笔。' },
                    { speaker: 'narrator', text: '不知过了多久，一个熟悉的声音从身后传来。' }
                ],
                choices: [],
                next: 'xw_2_9_1'
            },

            // --- 场景9b：发消息 ---
            {
                id: 'xw_2_9_b',
                title: '收到回复',
                background: 'bg-phone',
                dialogues: [
                    { speaker: 'narrator', text: '「这么早？门还没开，你先等一下，我马上到。」' },
                    { speaker: 'narrator', text: '阿昊的回复来得很快。' },
                    { speaker: 'xia_wan', text: '（店长人真好...）' },
                    { speaker: 'narrator', text: '夏晚收起手机，心里觉得暖暖的。' },
                    { speaker: 'narrator', text: '过了几分钟，她看到一个穿着灰色卫衣的男生从街角走来。' },
                    { speaker: 'narrator', text: '阿昊远远地就朝她挥了挥手。' },
                    { speaker: 'ahao', text: '等很久了吧？不好意思，路上堵了一下。' },
                    { speaker: 'xia_wan', text: '没有没有，我也刚到！' },
                    { speaker: 'narrator', text: '阿昊掏出钥匙开门，动作熟练又自然。' },
                    { speaker: 'ahao', text: '进来吧，外面冷。今天带你去看看我们店里的"家当"。' }
                ],
                choices: [],
                next: 'xw_2_9_1'
            },

            // =============================================
            // 场景9.1：店内参观
            // =============================================
            {
                id: 'xw_2_9_1',
                title: '店里的早晨',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '推开门，熟悉的木香味扑面而来。' },
                    { speaker: 'narrator', text: '白天的店里和昨晚灯火通明时完全不同。' },
                    { speaker: 'narrator', text: '阳光透过落地窗洒进来，照在原木色的桌椅上。' },
                    { speaker: 'narrator', text: '夏晚觉得，这样的店看起来更像是一家咖啡馆。' },
                    { speaker: 'ahao', text: '这是大厅，平时用来接待散客和做活动。' },
                    { speaker: 'narrator', text: '阿昊领着她往里走，一边介绍。' },
                    { speaker: 'ahao', text: '那边是休息区，中午大家一般都在那儿吃饭。' },
                    { speaker: 'xia_wan', text: '店长，这个店开了多久了？' },
                    { speaker: 'ahao', text: '有两年多了吧。我接手的时候前任店长刚走。' },
                    { speaker: 'ahao', text: '其实一开始我也没想到会做这么久。' },
                    { speaker: 'narrator', text: '阿昊说这话的时候，语气里带着点怀念。' }
                ],
                choices: [
                    { text: '好奇地问为什么留下', next: 'xw_2_9_1_a', affinity: {}, friendship: { ahao: 5 } },
                    { text: '安静地听他说完', next: 'xw_2_9_1_b', affinity: {}, friendship: { ahao: 3 } }
                ]
            },

            // --- 场景9.1a：好奇询问 ---
            {
                id: 'xw_2_9_1_a',
                title: '为什么留下',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '那后来为什么一直做到现在呢？' },
                    { speaker: 'ahao', text: '...' },
                    { speaker: 'ahao', text: '大概是舍不得这群人吧。' },
                    { speaker: 'narrator', text: '阿昊笑了笑，往休息区走去。' },
                    { speaker: 'ahao', text: '做剧本杀这行，累是真累。' },
                    { speaker: 'ahao', text: '但每次看到玩家玩完本之后的表情，就觉得值了。' },
                    { speaker: 'xia_wan', text: '（店长的眼神...好像在发光。）' },
                    { speaker: 'narrator', text: '夏晚突然觉得，阿昊比她想象的要温柔得多。' },
                    { speaker: 'ahao', text: '好了，先坐下吧。等会儿人齐了，我让橙子带你熟悉业务。' }
                ],
                choices: [],
                next: 'xw_2_10'
            },

            // --- 场景9.1b：安静倾听 ---
            {
                id: 'xw_2_9_1_b',
                title: '默默记下',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚没有追问，安静地跟着阿昊往前走。' },
                    { speaker: 'narrator', text: '她发现店里有很多细节很有意思。' },
                    { speaker: 'narrator', text: '墙上贴着手绘的海报，角落里摆着旧旧的老式收音机。' },
                    { speaker: 'narrator', text: '看得出来，大家都很用心地在经营这个地方。' },
                    { speaker: 'ahao', text: '怎么了？' },
                    { speaker: 'xia_wan', text: '没什么，就是觉得...这里很温暖。' },
                    { speaker: 'ahao', text: '那就好。希望你能喜欢这里。' },
                    { speaker: 'narrator', text: '阿昊的声音很平和，像是在说一件再自然不过的事。' }
                ],
                choices: [],
                next: 'xw_2_10'
            },

            // =============================================
            // 场景10：观摩带本
            // =============================================
            {
                id: 'xw_2_10',
                title: '第一次观摩',
                background: 'bg-room',
                dialogues: [
                    { speaker: 'narrator', text: '上午九点半，橙子来了。' },
                    { speaker: 'narrator', text: '她今天扎了一个俏皮的丸子头，看起来精神很好。' },
                    { speaker: 'chengzi', text: '夏晚！今天跟我去观摩吧～' },
                    { speaker: 'xia_wan', text: '好！' },
                    { speaker: 'narrator', text: '橙子带着夏晚来到一个古风主题的房间。' },
                    { speaker: 'narrator', text: '房间里布置着仿古的桌椅、纱帘，还有淡淡的檀香味。' },
                    { speaker: 'narrator', text: '木星已经在里面等着了。' },
                    { speaker: 'xiao_tong', text: '橙子，今天你来带本，我让新人观摩。' },
                    { speaker: 'chengzi', text: '收到！夏晚你坐这边看就好～' },
                    { speaker: 'narrator', text: '夏晚乖巧地坐在角落的观摩席上，心跳莫名快了几分。' }
                ],
                choices: [
                    { text: '认真观察橙子的带本方式', next: 'xw_2_10_a', affinity: {}, friendship: { chengzi: 5 } },
                    { text: '偷偷观察房间的布置', next: 'xw_2_10_b', affinity: {}, friendship: { xiao_tong: 3 } }
                ]
            },

            // --- 场景10a：观察橙子 ---
            {
                id: 'xw_2_10_a',
                title: '橙子的魅力',
                background: 'bg-room',
                dialogues: [
                    { speaker: 'narrator', text: '玩家们陆续进场。' },
                    { speaker: 'narrator', text: '橙子站在房间中央，姿态自然又自信。' },
                    { speaker: 'chengzi', text: '各位，欢迎来到这个故事。' },
                    { speaker: 'chengzi', text: '今天你们将扮演一群江湖中人，经历一场爱恨纠葛。' },
                    { speaker: 'narrator', text: '她的声音清脆悦耳，表情灵动多变。' },
                    { speaker: 'narrator', text: '短短几句话，就把玩家们的情绪调动了起来。' },
                    { speaker: 'xia_wan', text: '（橙子姐好厉害...）' },
                    { speaker: 'narrator', text: '夏晚在心里暗暗佩服。' },
                    { speaker: 'narrator', text: '她发现橙子很会观察玩家的反应。' },
                    { speaker: 'narrator', text: '每当有人走神，她就会抛出一个有趣的问题。' },
                    { speaker: 'narrator', text: '每当有人发言精彩，她都会真诚地夸赞。' },
                    { speaker: 'xia_wan', text: '（原来带本还有这么多学问...）' }
                ],
                choices: [],
                next: 'xw_2_11'
            },

            // --- 场景10b：观察房间 ---
            {
                id: 'xw_2_10_b',
                title: '细节之美',
                background: 'bg-room',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚的视线在房间里游走。' },
                    { speaker: 'narrator', text: '她注意到角落里有一盏纸糊的灯笼，上面画着兰花。' },
                    { speaker: 'narrator', text: '桌上摆着一套看起来很有年代感的茶具。' },
                    { speaker: 'narrator', text: '就连窗帘的褶皱都整整齐齐，一看就是用心打理过的。' },
                    { speaker: 'xiao_tong', text: '（悄悄走过来）看什么呢？' },
                    { speaker: 'xia_wan', text: '啊...我在看这些布置，真的好用心。' },
                    { speaker: 'xiao_tong', text: '嗯，每个房间的道具我们都会定期更换和维护。' },
                    { speaker: 'xiao_tong', text: '沉浸感是第一位的。' },
                    { speaker: 'narrator', text: '木星的声音很轻，却带着一种不容置疑的认真。' },
                    { speaker: 'xia_wan', text: '（方圆...好像对这件事很在意。）' },
                    { speaker: 'narrator', text: '夏晚偷偷看了他一眼。' }
                ],
                choices: [],
                next: 'xw_2_11'
            },

            // =============================================
            // 场景11：午餐时光
            // =============================================
            {
                id: 'xw_2_11',
                title: '午餐',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'narrator', text: '中午十二点，大家陆续聚到休息区。' },
                    { speaker: 'narrator', text: '外卖盒摆满了整张桌子，空气里弥漫着各种食物的香味。' },
                    { speaker: 'su_xinyue', text: '夏晚，今天吃得惯吗？' },
                    { speaker: 'xia_wan', text: '嗯！点的什么呀？' },
                    { speaker: 'yu_haitong', text: '麻辣香锅！我点的特辣！' },
                    { speaker: 'long_xinheng', text: '170你上次吃特辣拉了三天肚子忘了？' },
                    { speaker: 'yu_haitong', text: '那是意外！这次肯定没事！' },
                    { speaker: 'narrator', text: '大家笑了起来。' },
                    { speaker: 'narrator', text: '夏晚发现自己已经不知不觉融入了这种氛围里。' },
                    { speaker: 'narrator', text: '就像...认识了很久的朋友一样。' }
                ],
                choices: [
                    { text: '和苏馨悦聊天', next: 'xw_2_11_suxinyue', affinity: {}, friendship: { su_xinyue: 5 } },
                    { text: '和170聊天', next: 'xw_2_11_yuhaitong', affinity: {}, friendship: { yu_haitong: 5 } },
                    { text: '安静吃饭观察大家', next: 'xw_2_11_look', affinity: {}, friendship: {} }
                ]
            },

            // --- 午餐分支：苏馨悦 ---
            {
                id: 'xw_2_11_suxinyue',
                title: '和虹猫姐聊天',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'xia_wan', text: '虹猫姐，你做这行多久了？' },
                    { speaker: 'su_xinyue', text: '也就几个月吧，之前在准备考试。' },
                    { speaker: 'su_xinyue', text: '最近才正式开始工作的～' },
                    { speaker: 'xia_wan', text: '那姐是怎么想来这里的？' },
                    { speaker: 'su_xinyue', text: '朋友介绍的。结果一来就停不下来了。' },
                    { speaker: 'su_xinyue', text: '这工作挺有意思的，能遇到各种各样的人。' },
                    { speaker: 'narrator', text: '苏馨悦说这话的时候，眼睛弯弯的。' },
                    { speaker: 'xia_wan', text: '（虹猫姐笑起来...好温暖。）' }
                ],
                choices: [],
                next: 'xw_2_12'
            },

            // --- 午餐分支：170 ---
            {
                id: 'xw_2_11_yuhaitong',
                title: '和170聊天',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'yu_haitong', text: '夏晚你住校还是走读呀？' },
                    { speaker: 'xia_wan', text: '我住校，离学校不远。' },
                    { speaker: 'yu_haitong', text: '那挺好的！我和吴琊、虹猫姐一起租房～' },
                    { speaker: 'xia_wan', text: '哇，三个人的合租！' },
                    { speaker: 'yu_haitong', text: '对呀！虽然有时候会有点挤，但是很热闹～' },
                    { speaker: 'narrator', text: '170说话的时候眉飞色舞的，让人忍不住被她的热情感染。' },
                    { speaker: 'xia_wan', text: '（170...感觉是个很直接的女孩子。）' }
                ],
                choices: [],
                next: 'xw_2_12'
            },

            // --- 午餐分支：观察 ---
            {
                id: 'xw_2_11_look',
                title: '默默观察',
                background: 'bg-rest-area',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚没有加入聊天，安静地吃着饭。' },
                    { speaker: 'narrator', text: '但她的耳朵在听着大家的对话。' },
                    { speaker: 'narrator', text: '橙子在吐槽早上遇到的一个奇葩玩家。' },
                    { speaker: 'narrator', text: '苏馨悦一边笑一边帮她补充细节。' },
                    { speaker: 'narrator', text: '170抢了谨言碗里的一块肉，被追着打。' },
                    { speaker: 'narrator', text: '方圆在旁边起哄叫好。' },
                    { speaker: 'narrator', text: '木星默默地吃着饭，偶尔被问到才会说几句。' },
                    { speaker: 'narrator', text: '吴琊坐在角落里，嘴上说着"吵死了"，却没有离开。' },
                    { speaker: 'xia_wan', text: '（这样的日常...好羡慕。）' },
                    { speaker: 'narrator', text: '夏晚低下头，嘴角不自觉地上扬。' }
                ],
                choices: [],
                next: 'xw_2_12'
            },

            // =============================================
            // 场景12：下午时光
            // =============================================
            {
                id: 'xw_2_12',
                title: '下午',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '下午没有场次，阿昊安排夏晚熟悉剧本。' },
                    { speaker: 'narrator', text: '她坐在吧台边，面前摆着几本厚厚的剧本。' },
                    { speaker: 'narrator', text: '午后的阳光透过窗户照进来，空气里有淡淡的咖啡香。' },
                    { speaker: 'narrator', text: '店里很安静，只有空调低低运转的声音。' },
                    { speaker: 'xia_wan', text: '（原来工作不忙的时候，时间过得这么慢。）' },
                    { speaker: 'narrator', text: '她翻了翻剧本，发现每个角色都有很详细的背景故事。' },
                    { speaker: 'narrator', text: '有些情节让她笑出声，有些又让她红了眼眶。' },
                    { speaker: 'narrator', text: '不知不觉，天色已经暗了下来。' }
                ],
                choices: [
                    { text: '和方圆聊天', next: 'xw_2_12_ganzhiyu', affinity: { gan_zhiyu: 5 }, friendship: { gan_zhiyu: 0 } },
                    { text: '继续看剧本', next: 'xw_2_12_read', affinity: {}, friendship: {} }
                ]
            },

            // --- 场景12a：和方圆聊天 ---
            {
                id: 'xw_2_12_ganzhiyu',
                title: '方圆的话题',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'gan_zhiyu', text: '看什么呢，看得这么入迷？' },
                    { speaker: 'narrator', text: '方圆端着杯奶茶走过来，凑过来看了一眼。' },
                    { speaker: 'gan_zhiyu', text: '哦，这个本啊，我带过。' },
                    { speaker: 'gan_zhiyu', text: '挺催泪的，最后一幕很多人都哭了。' },
                    { speaker: 'xia_wan', text: '方圆带过本呀？' },
                    { speaker: 'gan_zhiyu', text: '嗯...带过几个。不过我比较懒，不太爱开。' },
                    { speaker: 'xia_wan', text: '（方圆说话好直接...）' },
                    { speaker: 'gan_zhiyu', text: '你是不是在想我这样的人怎么当DM？' },
                    { speaker: 'xia_wan', text: '没、没有！' },
                    { speaker: 'gan_zhiyu', text: '哈哈哈，骗人。你脸红了。' },
                    { speaker: 'narrator', text: '方圆笑得眼睛眯成一条缝。' },
                    { speaker: 'gan_zhiyu', text: '没事，其实我也觉得自己不太适合。' },
                    { speaker: 'gan_zhiyu', text: '但人嘛，总得试试才知道。' },
                    { speaker: 'xia_wan', text: '（方圆...好像没有表面上看起来那么懒散。）' }
                ],
                choices: [],
                next: 'xw_2_13'
            },

            // --- 场景12b：继续看剧本 ---
            {
                id: 'xw_2_12_read',
                title: '沉浸在故事里',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚继续翻着剧本。' },
                    { speaker: 'narrator', text: '她发现好的剧本杀故事，真的能让人感同身受。' },
                    { speaker: 'narrator', text: '每一个角色都像真实存在的人，有自己的喜怒哀乐。' },
                    { speaker: 'xia_wan', text: '（原来这就是剧本杀的魅力吗...）' },
                    { speaker: 'narrator', text: '她开始理解，为什么有人愿意反复来玩同一个本。' },
                    { speaker: 'narrator', text: '因为每一个故事里，都有自己的影子。' }
                ],
                choices: [],
                next: 'xw_2_13'
            },

            // =============================================
            // 场景13：下班路上
            // =============================================
            {
                id: 'xw_2_13',
                title: '下班路上',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '傍晚六点，夏晚准备下班了。' },
                    { speaker: 'narrator', text: '走出店门的时候，天边还残留着最后一抹橙红。' },
                    { speaker: 'su_xinyue', text: '夏晚，一起走吗？顺路！' },
                    { speaker: 'xia_wan', text: '好呀！' },
                    { speaker: 'narrator', text: '苏馨悦和夏晚并肩走在街道上。' },
                    { speaker: 'narrator', text: '路灯一盏接一盏亮起来，在地上拉出长长的影子。' },
                    { speaker: 'narrator', text: '她们聊着今天发生的事，笑声融进了傍晚的风里。' },
                    { speaker: 'xia_wan', text: '虹猫姐，谢谢你今天照顾我。' },
                    { speaker: 'su_xinyue', text: '傻丫头，说什么呢。我们都是同事呀。' },
                    { speaker: 'narrator', text: '苏馨悦的声音很轻，像是傍晚的微风。' },
                    { speaker: 'xia_wan', text: '（同事...）' },
                    { speaker: 'xia_wan', text: '（这个词，听起来好温暖。）' }
                ],
                choices: [
                    { text: '和苏馨悦多聊几句', next: 'xw_2_13_a', affinity: {}, friendship: { su_xinyue: 5 } },
                    { text: '安静地走着，享受这份宁静', next: 'xw_2_13_b', affinity: {}, friendship: {} }
                ]
            },

            // --- 场景13a：多聊几句 ---
            {
                id: 'xw_2_13_a',
                title: '分享心事',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '虹猫姐...你觉得在这里工作开心吗？' },
                    { speaker: 'su_xinyue', text: '开心啊。为什么这么问？' },
                    { speaker: 'xia_wan', text: '就是...今天一天下来，觉得很充实。' },
                    { speaker: 'xia_wan', text: '很久没有这种感觉了。' },
                    { speaker: 'su_xinyue', text: '那就好。这里的人都很善良的。' },
                    { speaker: 'su_xinyue', text: '你慢慢会习惯的。' },
                    { speaker: 'narrator', text: '苏馨悦的声音很柔和。' },
                    { speaker: 'narrator', text: '夏晚突然觉得，她好像比自己年长很多。' },
                    { speaker: 'narrator', text: '但其实，也许只是因为她更懂得如何生活。' }
                ],
                choices: [],
                next: 'xw_2_14'
            },

            // --- 场景13b：安静走着 ---
            {
                id: 'xw_2_13_b',
                title: '沉默的默契',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '她们没有再说话。' },
                    { speaker: 'narrator', text: '但沉默并不让人尴尬。' },
                    { speaker: 'narrator', text: '夏晚喜欢这种安静的感觉。' },
                    { speaker: 'narrator', text: '不用刻意找话题，不用担心冷场。' },
                    { speaker: 'narrator', text: '只是并肩走着，就已经足够美好。' },
                    { speaker: 'narrator', text: '走到地铁站口，苏馨悦挥了挥手。' },
                    { speaker: 'su_xinyue', text: '明天见啦，夏晚。' },
                    { speaker: 'xia_wan', text: '嗯，明天见。' },
                    { speaker: 'narrator', text: '夏晚看着苏馨悦的背影消失在人群里。' },
                    { speaker: 'narrator', text: '她突然对明天多了一份期待。' }
                ],
                choices: [],
                next: 'xw_2_14'
            },

            // =============================================
            // 场景14：一周后
            // =============================================
            {
                id: 'xw_2_14',
                title: '一周后',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '时间过得很快。' },
                    { speaker: 'narrator', text: '转眼间，夏晚已经在店里工作了一周。' },
                    { speaker: 'narrator', text: '她渐渐熟悉了店里的节奏，也和每个人都熟络了起来。' },
                    { speaker: 'narrator', text: '今天下午没有场次，大家难得聚在一起闲聊。' },
                    { speaker: 'long_xinheng', text: '我跟你们说，那个玩家真的绝了！' },
                    { speaker: 'long_xinheng', text: '我问他"你是谁"，他说"我是你爸"！' },
                    { speaker: 'narrator', text: '大家笑成一团。' },
                    { speaker: 'xia_wan', text: '（谨言真的好搞笑...）' },
                    { speaker: 'narrator', text: '夏晚发现自己已经能自然地融入这种氛围了。' },
                    { speaker: 'narrator', text: '不再像第一天那样手足无措。' },
                    { speaker: 'narrator', text: '这种感觉，很奇妙。' }
                ],
                choices: [
                    { text: '参与大家的聊天', next: 'xw_2_14_a', affinity: {}, friendship: { long_xinheng: 5 } },
                    { text: '在旁边安静地听', next: 'xw_2_14_b', affinity: {}, friendship: {} }
                ]
            },

            // --- 场景14a：参与聊天 ---
            {
                id: 'xw_2_14_a',
                title: '融入其中',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '然后呢然后呢？' },
                    { speaker: 'long_xinheng', text: '然后他就一直叫我儿子！' },
                    { speaker: 'narrator', text: '大家又笑了起来。' },
                    { speaker: 'yu_haitong', text: '夏晚你笑了你笑了！' },
                    { speaker: 'xia_wan', text: '啊？我笑了吗？' },
                    { speaker: 'chengzi', text: '对呀，你刚才笑得好开心！' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '她突然意识到，自己好像很久没有这么笑过了。' },
                    { speaker: 'xia_wan', text: '（原来...开心是这么简单的事。）' }
                ],
                choices: [],
                next: 'xw_2_15'
            },

            // --- 场景14b：安静听着 ---
            {
                id: 'xw_2_14_b',
                title: '旁观者的幸福',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚靠在沙发上，看着大家笑闹。' },
                    { speaker: 'narrator', text: '她没有插话，但心里暖暖的。' },
                    { speaker: 'wu_ya', text: '（走过来坐在旁边）不一起去闹？' },
                    { speaker: 'xia_wan', text: '我...我不太会。' },
                    { speaker: 'wu_ya', text: '嗯。' },
                    { speaker: 'narrator', text: '吴琊没有再说什么，只是默默地坐着。' },
                    { speaker: 'narrator', text: '夏晚发现，吴琊其实没有看起来那么冷。' },
                    { speaker: 'narrator', text: '他只是不太擅长表达而已。' },
                    { speaker: 'xia_wan', text: '（刀子嘴豆腐心...大概就是这样的吧。）' }
                ],
                choices: [],
                next: 'xw_2_15'
            },

            // =============================================
            // 场景15：第一次值夜班
            // =============================================
            {
                id: 'xw_2_15',
                title: '第一次值夜班',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '这天晚上，夏晚第一次留下来值夜班。' },
                    { speaker: 'narrator', text: '店里只剩她和木星两个人。' },
                    { speaker: 'narrator', text: '窗外的霓虹灯闪烁着，店里很安静。' },
                    { speaker: 'narrator', text: '木星在吧台后面调着什么饮料。' },
                    { speaker: 'xia_wan', text: '木星，我帮你做什么？' },
                    { speaker: 'xiao_tong', text: '不用，你去休息吧。' },
                    { speaker: 'narrator', text: '他的声音一如既往地平稳。' },
                    { speaker: 'xia_wan', text: '（可是...我不太想走。）' },
                    { speaker: 'narrator', text: '夏晚不知道为什么，就是想在这里多待一会儿。' }
                ],
                choices: [
                    { text: '留下来陪木星', next: 'xw_2_15_a', affinity: { xiao_tong: 5 }, friendship: { xiao_tong: 5 } },
                    { text: '听从安排先回去了', next: 'xw_2_15_b', affinity: { xiao_tong: 2 }, friendship: { xiao_tong: 2 } }
                ]
            },

            // --- 场景15a：留下来 ---
            {
                id: 'xw_2_15_a',
                title: '留下来',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '我...我可以留下来帮忙吗？' },
                    { speaker: 'xiao_tong', text: '随便你。' },
                    { speaker: 'narrator', text: '木星没有拒绝。' },
                    { speaker: 'narrator', text: '他调好两杯热可可，递了一杯给夏晚。' },
                    { speaker: 'xia_wan', text: '谢谢木星！' },
                    { speaker: 'narrator', text: '他们坐在吧台边，窗外是渐渐安静下来的街道。' },
                    { speaker: 'narrator', text: '木星没有说话，夏晚也没有。' },
                    { speaker: 'narrator', text: '但那种沉默，让夏晚觉得很安心。' },
                    { speaker: 'xia_wan', text: '（木星好像...和我想象的不太一样。）' },
                    { speaker: 'xia_wan', text: '（他看起来很冷，但其实很温柔。）' },
                    { speaker: 'narrator', text: '她偷偷看了木星一眼。' },
                    { speaker: 'narrator', text: '灯光下，他的侧脸线条很好看。' },
                    { speaker: 'xia_wan', text: '（心跳...好像漏了一拍。）' }
                ],
                choices: [],
                next: 'xw_2_16'
            },

            // --- 场景15b：先回去 ---
            {
                id: 'xw_2_15_b',
                title: '回去的路上',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '那...木星辛苦了，我先回去了。' },
                    { speaker: 'xiao_tong', text: '嗯，路上小心。' },
                    { speaker: 'narrator', text: '夏晚走出店门，夜风吹在脸上有些凉。' },
                    { speaker: 'narrator', text: '她回头看了一眼，店里的灯还亮着。' },
                    { speaker: 'narrator', text: '透过窗户，能看到木星坐在吧台边的身影。' },
                    { speaker: 'xia_wan', text: '（木星...每天都这么晚下班吗？）' },
                    { speaker: 'narrator', text: '她突然有点后悔，自己没有留下来陪他。' },
                    { speaker: 'xia_wan', text: '（下次吧...下次一定要留下来。）' },
                    { speaker: 'narrator', text: '夏晚这样想着，加快脚步走进了夜色里。' }
                ],
                choices: [],
                next: 'xw_2_16'
            },

            // =============================================
            // 场景16：阿昊的认可
            // =============================================
            {
                id: 'xw_2_16',
                title: '店长的话',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '又过了几天。' },
                    { speaker: 'narrator', text: '阿昊把夏晚叫到了办公室。' },
                    { speaker: 'xia_wan', text: '（店长找我...有什么事吗？）' },
                    { speaker: 'ahao', text: '坐吧，随便聊聊。' },
                    { speaker: 'narrator', text: '阿昊的语气比平时温和。' },
                    { speaker: 'ahao', text: '这段时间观察下来，你进步很快。' },
                    { speaker: 'ahao', text: '橙子和我说，你很适合这行。' },
                    { speaker: 'xia_wan', text: '真的吗...？' },
                    { speaker: 'ahao', text: '嗯。做这行最重要的不是技术，是真诚。' },
                    { speaker: 'ahao', text: '你能感受到玩家的情绪，能和他们共情。' },
                    { speaker: 'ahao', text: '这就是你的优势。' },
                    { speaker: 'narrator', text: '夏晚感觉心里暖暖的。' },
                    { speaker: 'xia_wan', text: '谢谢店长...我会继续努力的。' },
                    { speaker: 'ahao', text: '嗯，好好干。' },
                    { speaker: 'narrator', text: '阿昊的嘴角微微上扬。' },
                    { speaker: 'narrator', text: '这一刻，夏晚觉得所有的付出都值得了。' }
                ],
                choices: [
                    { text: '认真感谢店长', next: 'xw_2_16_a', affinity: { ahao: 5 }, friendship: { ahao: 5 } },
                    { text: '询问店长的期望', next: 'xw_2_16_b', affinity: { ahao: 3 }, friendship: { ahao: 3 } }
                ]
            },

            // --- 场景16a：认真感谢 ---
            {
                id: 'xw_2_16_a',
                title: '心里的话',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '店长，其实我一直想谢谢你。' },
                    { speaker: 'ahao', text: '谢我什么？' },
                    { speaker: 'xia_wan', text: '谢谢你愿意给我这个机会。' },
                    { speaker: 'xia_wan', text: '说实话，我一开始很没自信...' },
                    { speaker: 'ahao', text: '每个人都有不自信的时候。' },
                    { speaker: 'ahao', text: '重要的是你愿意迈出那一步。' },
                    { speaker: 'narrator', text: '阿昊的语气很平和。' },
                    { speaker: 'xia_wan', text: '（店长...比我想象的要温柔多了。）' }
                ],
                choices: [],
                next: 'xw_2_17'
            },

            // --- 场景16b：询问期望 ---
            {
                id: 'xw_2_16_b',
                title: '店长的期望',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '店长对我有什么期望吗？' },
                    { speaker: 'ahao', text: '期望...' },
                    { speaker: 'ahao', text: '没什么特别的。' },
                    { speaker: 'ahao', text: '就希望你能在这里开心就好。' },
                    { speaker: 'narrator', text: '阿昊说得很随意，但夏晚听出了真诚。' },
                    { speaker: 'xia_wan', text: '（开心...就够了。）' },
                    { speaker: 'xia_wan', text: '（店长真的很不一样。）' }
                ],
                choices: [],
                next: 'xw_2_17'
            },

            // =============================================
            // 场景17：融入
            // =============================================
            {
                id: 'xw_2_17',
                title: '真正的融入',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '从那天起，夏晚感觉自己真正融入了这家店。' },
                    { speaker: 'narrator', text: '她开始主动和同事们聊天。' },
                    { speaker: 'narrator', text: '开始学着开大家的玩笑。' },
                    { speaker: 'narrator', text: '开始有了自己的小习惯——比如坐在吧台的第三个位置。' },
                    { speaker: 'narrator', text: '比如喝方圆推荐的那款奶茶。' },
                    { speaker: 'narrator', text: '比如在休息的时候听谨言讲冷笑话。' },
                    { speaker: 'narrator', text: '她发现，自己已经不知不觉地成了这里的一份子。' },
                    { speaker: 'xia_wan', text: '（原来...家的感觉，就是这样的。）' },
                    { speaker: 'narrator', text: '窗外，阳光正好。' },
                    { speaker: 'narrator', text: '店里，大家的笑声此起彼伏。' },
                    { speaker: 'narrator', text: '夏晚闭上眼睛，觉得这一刻很幸福。' }
                ],
                choices: [],
                next: 'xw_2_18'
            },

            // =============================================
            // 场景18：真正的开始
            // =============================================
            {
                id: 'xw_2_18',
                title: '真正的开始',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '一个月后的某个傍晚。' },
                    { speaker: 'narrator', text: '夏晚站在店门口，看着夕阳下的街道。' },
                    { speaker: 'narrator', text: '身后传来熟悉的声音。' },
                    { speaker: 'chengzi', text: '夏晚！发什么呆呢？' },
                    { speaker: 'xia_wan', text: '在想事情...' },
                    { speaker: 'narrator', text: '夏晚回过头，看到大家都站在那里。' },
                    { speaker: 'narrator', text: '橙子、170、方圆、谨言。' },
                    { speaker: 'narrator', text: '还有店长阿昊。' },
                    { speaker: 'narrator', text: '还有...木星。' },
                    { speaker: 'narrator', text: '他们都在对她微笑。' },
                    { speaker: 'xia_wan', text: '没什么，就是在觉得...' },
                    { speaker: 'xia_wan', text: '能遇到你们，真的很好。' },
                    { speaker: 'narrator', text: '夕阳的余晖洒在每个人身上。' },
                    { speaker: 'narrator', text: '夏晚知道，她已经真正融入了这个大家庭。' },
                    { speaker: 'xia_wan', text: '（和这里的每一天...都让我舍不得。）' },
                    { speaker: 'narrator', text: '第二章扩展「融入与成长」 完' }
                ]
            }

        ]
    },

    // ========================================
    // 夏晚线 - 第三章：心动
    // ========================================
    xia_wan_chapter3: {
        title: '第三章：心动',
        theme: '工作稳定期的感情升温（2025年5月-7月，阿昊离开之前）',
        scenes: [

            // =============================================
            // 第一阶段：日常相处
            // =============================================

            // --- 场景1：新的开始 ---
            {
                id: 'xw_3_1',
                title: '新的开始',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '2025年5月。' },
                    { speaker: 'narrator', text: '距离夏晚成为兼职DM，已经过去了几个月。' },
                    { speaker: 'narrator', text: '她渐渐适应了店里的节奏，也和大家都熟悉了起来。' },
                    { speaker: 'narrator', text: '今天，她比平时早到了半小时。' },
                    { speaker: 'xia_wan', text: '（木星今天说要告诉我一件重要的事...）' },
                    { speaker: 'narrator', text: '夏晚推开店门，看到木星已经坐在吧台前。' },
                    { speaker: 'xiao_tong', text: '来了？坐吧。' },
                    { speaker: 'xia_wan', text: '木星早...你说有重要的事？' },
                    { speaker: 'xiao_tong', text: '嗯...' },
                    { speaker: 'xiao_tong', text: '店长找我谈过了。' },
                    { speaker: 'xiao_tong', text: '店里准备转型做城限情感本。' },
                    { speaker: 'xiao_tong', text: '让我开始学习带恋陪DM。' },
                    { speaker: 'xia_wan', text: '（恋陪...）' },
                    { speaker: 'xia_wan', text: '（是那种需要和玩家有肢体接触的...情感陪玩吗？）' },
                    { speaker: 'xia_wan', text: '恭喜木星！这是好事呀。' },
                    { speaker: 'xiao_tong', text: '（看了夏晚一眼）...嗯。' },
                    { speaker: 'narrator', text: '木星的眼神里闪过一丝不易察觉的情绪。' },
                    { speaker: 'xia_wan', text: '（但为什么...我的心里好像有点堵？）' },
                    { speaker: 'xia_wan', text: '（我知道恋陪就是要和玩家有亲密互动的...）' },
                    { speaker: 'xia_wan', text: '（可是想到木星要对别人做那些事...）' },
                    { speaker: 'xia_wan', text: '（算了...一定是我想太多了。）' }
                ],
                choices: [
                    { text: '询问木星的感受', next: 'xw_3_1_a', affinity: { xiao_tong: 5 }, friendship: { xiao_tong: 3 } },
                    { text: '假装不在意，转移话题', next: 'xw_3_1_b', affinity: { xiao_tong: 2 }, friendship: { xiao_tong: 5 } }
                ]
            },

            // --- 场景1a：询问感受 ---
            {
                id: 'xw_3_1_a',
                title: '真心询问',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '木星...你愿意做恋陪吗？' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'xiao_tong', text: '说实话，我也不确定。' },
                    { speaker: 'xiao_tong', text: '但店长觉得我有这个天赋。' },
                    { speaker: 'xiao_tong', text: '而且...城限情感本确实更有发展前景。' },
                    { speaker: 'xia_wan', text: '（木星为了店里的发展，愿意尝试自己不熟悉的领域...）' },
                    { speaker: 'xia_wan', text: '木星加油。不管怎样，我都支持你。' },
                    { speaker: 'xiao_tong', text: '（微微一愣）...谢谢。' },
                    { speaker: 'narrator', text: '木星的嘴角扬起一个淡淡的弧度。' },
                    { speaker: 'xia_wan', text: '（他笑起来...真好看。）' },
                    { speaker: 'narrator', text: '但夏晚没有说出口的是——' },
                    { speaker: 'xia_wan', text: '（如果可以...我希望那个让你笑的人是我。）' }
                ],
                choices: [],
                next: 'xw_3_2'
            },

            // --- 场景1b：转移话题 ---
            {
                id: 'xw_3_1_b',
                title: '假装不在意',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '那挺好的呀！木星肯定能做得很好。' },
                    { speaker: 'xiao_tong', text: '嗯，希望吧。' },
                    { speaker: 'narrator', text: '木星低下头，继续整理吧台上的物品。' },
                    { speaker: 'xia_wan', text: '对了木星，今天有什么需要我帮忙的吗？' },
                    { speaker: 'xiao_tong', text: '上午有个情感本，你可以来观摩。' },
                    { speaker: 'xia_wan', text: '好！' },
                    { speaker: 'narrator', text: '夏晚努力让自己看起来和平时一样。' },
                    { speaker: 'xia_wan', text: '（可是心里那种闷闷的感觉...挥之不去。）' },
                    { speaker: 'narrator', text: '她告诉自己不要多想。' },
                    { speaker: 'xia_wan', text: '（木星只是在做工作...）' },
                    { speaker: 'xia_wan', text: '（我凭什么在意呢...）' }
                ],
                choices: [],
                next: 'xw_3_2'
            },

            // --- 场景2：旁观木星带本 ---
            {
                id: 'xw_3_2',
                title: '旁观',
                background: 'bg-shop',
                dynamicDM: true,
                dialogues: [
                    { speaker: 'narrator', text: '上午十点，玩家们陆续到达。' },
                    { speaker: 'narrator', text: '这是一个四人情感本，主题是关于校园爱情的。' },
                    { speaker: 'narrator', text: '夏晚坐在角落的观摩席上，看着木星开始主持。' },
                    { speaker: 'xiao_tong', text: '欢迎大家来到「那年夏天的你」。' },
                    { speaker: 'xiao_tong', text: '今天，我会带你们回到那个最纯粹的时代。' },
                    { speaker: 'narrator', text: '木星的声音低沉而温柔，带着一种让人安心的力量。' },
                    { speaker: 'narrator', text: '（这就是木星的魅力所在吧...）' },
                    { speaker: 'xia_wan', text: '（难怪店长要让他转型做恋陪DM...）' },
                    { speaker: 'narrator', text: '游戏进行到中段，出现了需要两人配合的亲密环节。' },
                    { speaker: 'xiao_tong', text: '接下来，请男主和女主牵手完成这个环节。' },
                    { speaker: 'narrator', text: '木星自然地伸出手，轻轻握住了扮演女主的女玩家的手。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'narrator', text: '夏晚的心猛地揪了一下。' },
                    { speaker: 'xia_wan', text: '（好自然...好温柔...）' },
                    { speaker: 'xia_wan', text: '（对别人也是这样吗...）' },
                    { speaker: 'narrator', text: '她看到木星引导女玩家做出依偎的动作。' },
                    { speaker: 'narrator', text: '那只手搂住了女孩的肩膀。' },
                    { speaker: 'xia_wan', text: '（原来这就是恋陪的工作...）' },
                    { speaker: 'xia_wan', text: '（我知道的...我早就知道会这样的...）' },
                    { speaker: 'xia_wan', text: '（可是为什么...）' },
                    { speaker: 'xia_wan', text: '（心里会这么难受呢...）' },
                    { speaker: 'narrator', text: '夏晚低下头，不敢再看。' },
                    { speaker: 'narrator', text: '但那种酸涩的感觉，却像潮水一样涌上心头。' }
                ],
                choices: [
                    { text: '继续看下去', next: 'xw_3_2_a', affinity: { xiao_tong: -3 }, friendship: { xiao_tong: -2 } },
                    { text: '找借口离开一下', next: 'xw_3_2_b', affinity: { xiao_tong: 0 }, friendship: { xiao_tong: 0 } }
                ]
            },

            // --- 场景2a：继续看下去 ---
            {
                id: 'xw_3_2_a',
                title: '强撑着看下去',
                background: 'bg-shop',
                dynamicDM: true,
                dialogues: [
                    { speaker: 'narrator', text: '夏晚强迫自己抬起头，继续看着场上的情况。' },
                    { speaker: 'narrator', text: '木星正在引导玩家们进入角色。' },
                    { speaker: 'xiao_tong', text: '闭上眼睛，想象你爱的人就在身边。' },
                    { speaker: 'xiao_tong', text: '他可能不善言辞，但会用行动表达。' },
                    { speaker: 'narrator', text: '木星说着，轻轻握住了女玩家的手。' },
                    { speaker: 'narrator', text: '女玩家靠在木星的肩膀上，脸上带着幸福的笑容。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'xia_wan', text: '（他的手...好温暖。）' },
                    { speaker: 'xia_wan', text: '（可是那种温暖...不是给我的。）' },
                    { speaker: 'narrator', text: '夏晚感觉自己的眼眶有点酸。' },
                    { speaker: 'xia_wan', text: '（不行...我不能在这里哭。）' },
                    { speaker: 'xia_wan', text: '（我只是...只是有点吃醋而已。）' },
                    { speaker: 'xia_wan', text: '（但我有什么资格吃醋呢...）' },
                    { speaker: 'xia_wan', text: '（木星...他不是我的谁。）' }
                ],
                choices: [],
                next: 'xw_3_3'
            },

            // --- 场景2b：找借口离开 ---
            {
                id: 'xw_3_2_b',
                title: '逃离现场',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '"我去...去倒杯水。"' },
                    { speaker: 'xia_wan', text: '夏晚小声说着，起身走向茶水间。' },
                    { speaker: 'narrator', text: '她需要逃离那个场景。' },
                    { speaker: 'narrator', text: '关上茶水间的门，夏晚靠在墙上。' },
                    { speaker: 'xia_wan', text: '（为什么...）' },
                    { speaker: 'xia_wan', text: '（明明知道恋陪就是这样的工作...）' },
                    { speaker: 'xia_wan', text: '（明明知道他对每个玩家都这样...）' },
                    { speaker: 'xia_wan', text: '（可是心里就是好难受。）' },
                    { speaker: 'narrator', text: '夏晚的眼眶湿润了。' },
                    { speaker: 'xia_wan', text: '（我是不是...喜欢上木星了？）' },
                    { speaker: 'narrator', text: '这个认知让她更加慌乱。' },
                    { speaker: 'xia_wan', text: '（可是他...他只是在工作啊...）' },
                    { speaker: 'xia_wan', text: '（我凭什么要求他只对我一个人好...）' },
                    { speaker: 'narrator', text: '她深吸一口气，努力平复自己的情绪。' },
                    { speaker: 'xia_wan', text: '（装作什么都没发生就好...）' },
                    { speaker: 'xia_wan', text: '（我不应该影响木星的。）' }
                ],
                choices: [],
                next: 'xw_3_3'
            },

            // --- 场景3：阿昊摆烂的铺垫 ---
            {
                id: 'xw_3_3',
                title: '阿昊的异常',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '测本结束后，夏晚回到大厅。' },
                    { speaker: 'narrator', text: '她看到阿昊正趴在吧台上打游戏。' },
                    { speaker: 'narrator', text: '这已经是连续第三天了。' },
                    { speaker: 'chengzi', text: '阿昊哥，今天你不带本吗？' },
                    { speaker: 'ahao', text: '啊...我下午有事，你帮我带一下。' },
                    { speaker: 'narrator', text: '阿昊头也不抬地说。' },
                    { speaker: 'xia_wan', text: '（阿昊最近好像总是这样...）' },
                    { speaker: 'narrator', text: '橙子欲言又止，最终还是没说什么。' },
                    { speaker: 'long_xinheng', text: '（小声）阿昊最近怎么了？' },
                    { speaker: 'gan_zhiyu', text: '（小声）谁知道呢...别管他了。' },
                    { speaker: 'narrator', text: '方圆耸耸肩，转移了话题。' },
                    { speaker: 'xia_wan', text: '（大家都劝过他...但好像没什么用。）' },
                    { speaker: 'xia_wan', text: '（他是不是遇到什么困难了？）' },
                    { speaker: 'narrator', text: '夏晚想起几个月前的阿昊。' },
                    { speaker: 'xia_wan', text: '（那时候的他...好像完全不一样。）' },
                    { speaker: 'xia_wan', text: '（算了...现在我自己都一团糟呢。）' }
                ],
                choices: [
                    { text: '去找阿昊聊聊', next: 'xw_3_3_a', friendship: { ahao: 5 } },
                    { text: '先不管了，自己的事更重要', next: 'xw_3_3_b', affinity: { xiao_tong: 3 } }
                ]
            },

            // --- 场景3a：找阿昊聊聊 ---
            {
                id: 'xw_3_3_a',
                title: '关心阿昊',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '阿昊...' },
                    { speaker: 'ahao', text: '嗯？' },
                    { speaker: 'xia_wan', text: '你...还好吗？' },
                    { speaker: 'ahao', text: '...我挺好的啊，怎么了？' },
                    { speaker: 'narrator', text: '阿昊抬起头，眼神有些空洞。' },
                    { speaker: 'xia_wan', text: '我看你最近好像很累的样子...' },
                    { speaker: 'ahao', text: '没事，就是想休息一下。' },
                    { speaker: 'narrator', text: '他的声音听起来没什么力气。' },
                    { speaker: 'xia_wan', text: '有什么事可以和我们说的...大家都很担心你。' },
                    { speaker: 'ahao', text: '...知道了。' },
                    { speaker: 'narrator', text: '阿昊又低下头，继续打游戏。' },
                    { speaker: 'narrator', text: '夏晚知道，他并没有真的听进去。' },
                    { speaker: 'xia_wan', text: '（阿昊...到底怎么了？）' },
                    { speaker: 'xia_wan', text: '（但至少...我试过了。）' }
                ],
                choices: [],
                next: 'xw_3_4'
            },

            // --- 场景3b：不管阿昊 ---
            {
                id: 'xw_3_3_b',
                title: '专注自己',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '（现在最重要的事...是搞清楚自己的心情。）' },
                    { speaker: 'narrator', text: '夏晚找了个角落坐下，整理自己的思绪。' },
                    { speaker: 'xia_wan', text: '（我是不是喜欢上木星了？）' },
                    { speaker: 'xia_wan', text: '（看到他和其他女生亲密...会难受。）' },
                    { speaker: 'xia_wan', text: '（会想独占他的温柔。）' },
                    { speaker: 'xia_wan', text: '（这应该就是...喜欢吧。）' },
                    { speaker: 'narrator', text: '意识到这一点，夏晚反而更慌了。' },
                    { speaker: 'xia_wan', text: '（可我凭什么喜欢他呢...）' },
                    { speaker: 'xia_wan', text: '（我们只是同事关系...）' },
                    { speaker: 'xia_wan', text: '（而且他好像从来没有对我表示过什么...）' },
                    { speaker: 'narrator', text: '她叹了口气，觉得自己很可笑。' },
                    { speaker: 'xia_wan', text: '（还没开始就结束了，真是讽刺。）' }
                ],
                choices: [],
                next: 'xw_3_4'
            },

            // =============================================
            // 第二阶段：触发点出现
            // =============================================

            // --- 场景4：触发点1 - 听到谈论 ---
            {
                id: 'xw_3_4',
                title: '听到议论',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '几天后。' },
                    { speaker: 'narrator', text: '夏晚在整理道具的时候，听到两个玩家的窃窃私语。' },
                    { speaker: 'player1', text: '诶诶，你听说了吗？' },
                    { speaker: 'player1', text: '三体剧本杀店那个木星，超帅的！' },
                    { speaker: 'player2', text: '真的假的？' },
                    { speaker: 'player1', text: '真的！而且他好像开始做恋陪了...' },
                    { speaker: 'player1', text: '听说特别温柔，好多女生都专门来找他！' },
                    { speaker: 'player2', text: '哇...那我下次一定要来体验一下！' },
                    { speaker: 'narrator', text: '夏晚的手顿了一下。' },
                    { speaker: 'xia_wan', text: '（专门来找他...）' },
                    { speaker: 'xia_wan', text: '（原来他已经开始带恋陪了吗...）' },
                    { speaker: 'xia_wan', text: '（而且还这么受欢迎...）' },
                    { speaker: 'narrator', text: '她假装没听到，继续整理道具。' },
                    { speaker: 'xia_wan', text: '（可心里那种闷闷的感觉又来了...）' },
                    { speaker: 'xia_wan', text: '（我是不是太贪心了？）' },
                    { speaker: 'xia_wan', text: '（明明知道不可能...却还是想占有他。）' }
                ],
                choices: [
                    { text: '忍住，告诉自己别多想', next: 'xw_3_4_a', affinity: { xiao_tong: -2 }, friendship: { xiao_tong: 0 } },
                    { text: '去找橙子姐倾诉', next: 'xw_3_4_b', friendship: { chengzi: 5 } }
                ]
            },

            // --- 场景4a：忍住 ---
            {
                id: 'xw_3_4_a',
                title: '独自承受',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '（别想了...工作而已。）' },
                    { speaker: 'narrator', text: '夏晚深吸一口气，强迫自己专注在手上的工作。' },
                    { speaker: 'narrator', text: '但那种酸涩的感觉，始终挥之不去。' },
                    { speaker: 'xia_wan', text: '（为什么我要这样在意呢...）' },
                    { speaker: 'xia_wan', text: '（明明只是同事而已...）' },
                    { speaker: 'narrator', text: '下午的时候，木星路过她身边。' },
                    { speaker: 'xiao_tong', text: '夏晚，在发什么呆？' },
                    { speaker: 'xia_wan', text: '啊...没什么！在整理道具！' },
                    { speaker: 'narrator', text: '夏晚慌忙低下头。' },
                    { speaker: 'xiao_tong', text: '...你最近是不是有什么事？' },
                    { speaker: 'xia_wan', text: '没有！真的没有！' },
                    { speaker: 'xiao_tong', text: '（看了她一眼）...嗯。' },
                    { speaker: 'narrator', text: '木星走开了，留下夏晚一个人心乱如麻。' },
                    { speaker: 'xia_wan', text: '（他好像...察觉到什么了？）' },
                    { speaker: 'xia_wan', text: '（不行...我得控制好自己。）' }
                ],
                choices: [],
                next: 'xw_3_5'
            },

            // --- 场景4b：找橙子倾诉 ---
            {
                id: 'xw_3_4_b',
                title: '找橙子倾诉',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '橙子姐...' },
                    { speaker: 'chengzi', text: '嗯？怎么了？' },
                    { speaker: 'xia_wan', text: '我...我能和你聊聊吗？' },
                    { speaker: 'narrator', text: '橙子放下手里的东西，认真地看着夏晚。' },
                    { speaker: 'chengzi', text: '当然可以啊，怎么了？' },
                    { speaker: 'xia_wan', text: '就是...我不知道怎么说...' },
                    { speaker: 'narrator', text: '夏晚犹豫了一下，还是开口了。' },
                    { speaker: 'xia_wan', text: '我好像...喜欢上一个人了。' },
                    { speaker: 'xia_wan', text: '但我知道我们不可能...' },
                    { speaker: 'xia_wan', text: '而且看到他对别人好，我心里会很难受。' },
                    { speaker: 'narrator', text: '橙子安静地听着，没有打断。' },
                    { speaker: 'chengzi', text: '那个人是谁呀？' },
                    { speaker: 'xia_wan', text: '是...木星。' },
                    { speaker: 'narrator', text: '橙子的表情变得有些微妙。' },
                    { speaker: 'chengzi', text: '...木星啊。' },
                    { speaker: 'xia_wan', text: '橙子姐你觉得我应该怎么办？' },
                    { speaker: 'chengzi', text: '...我觉得你应该先搞清楚自己的心意。' },
                    { speaker: 'chengzi', text: '是真的喜欢，还是只是占有欲作祟？' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'xia_wan', text: '（这个问题...我好像从来没想过。）' }
                ],
                choices: [],
                next: 'xw_3_5'
            },

            // --- 场景5：端午节聚餐 ---
            {
                id: 'xw_3_5',
                title: '端午节活动',
                background: 'bg-restaurant',
                dialogues: [
                    { speaker: 'narrator', text: '端午节到了。' },
                    { speaker: 'narrator', text: '店长阿昊难得组织了一次团建活动——聚餐加唱歌。' },
                    { speaker: 'narrator', text: '大家难得聚在一起，气氛很热闹。' },
                    { speaker: 'ahao', text: '来来来，大家辛苦了！干杯！' },
                    { speaker: 'narrator', text: '阿昊举起酒杯，脸上难得有了笑容。' },
                    { speaker: 'chengzi', text: '干杯！' },
                    { speaker: 'long_xinheng', text: '阿昊哥今天状态不错嘛！' },
                    { speaker: 'ahao', text: '过节嘛，当然要开心点。' },
                    { speaker: 'narrator', text: '夏晚坐在角落里，偷偷看向木星。' },
                    { speaker: 'narrator', text: '他正和方圆聊着什么，嘴角带着淡淡的笑意。' },
                    { speaker: 'xia_wan', text: '（他笑起来真好看...）' },
                    { speaker: 'xia_wan', text: '（可是为什么...他好像从来没有对我这样笑过？）' },
                    { speaker: 'narrator', text: '橙子注意到夏晚的神情。' },
                    { speaker: 'chengzi', text: '（小声）还在想那件事？' },
                    { speaker: 'xia_wan', text: '（小声）...嗯。' },
                    { speaker: 'chengzi', text: '（小声）要不待会找个机会单独和他聊聊？' },
                    { speaker: 'xia_wan', text: '（小声）可是我不知道该说什么...' },
                    { speaker: 'chengzi', text: '（小声）有些话不说出来，永远都不会知道结果。' }
                ],
                choices: [
                    { text: '鼓起勇气找机会单独和木星说话', next: 'xw_3_5_a', affinity: { xiao_tong: 5 }, friendship: { xiao_tong: 3 } },
                    { text: '算了，还是不敢', next: 'xw_3_5_b', affinity: { xiao_tong: -5 }, friendship: { xiao_tong: 0 } }
                ]
            },

            // --- 场景5a：鼓起勇气 ---
            {
                id: 'xw_3_5_a',
                title: '单独相处',
                background: 'bg-cafe-corridor',
                dialogues: [
                    { speaker: 'narrator', text: '聚餐结束后，大家提议去唱歌。' },
                    { speaker: 'narrator', text: '夏晚借口出去透气，在走廊里遇到了木星。' },
                    { speaker: 'xiao_tong', text: '你怎么出来了？' },
                    { speaker: 'xia_wan', text: '里面有点闷...木星也是吗？' },
                    { speaker: 'xiao_tong', text: '嗯，我也出来透透气。' },
                    { speaker: 'narrator', text: '两人并排站在走廊上，看着远处的夜景。' },
                    { speaker: 'xia_wan', text: '木星...' },
                    { speaker: 'xiao_tong', text: '嗯？' },
                    { speaker: 'xia_wan', text: '你...最近做恋陪感觉怎么样？' },
                    { speaker: 'xiao_tong', text: '...还行吧。' },
                    { speaker: 'xiao_tong', text: '习惯了就好。' },
                    { speaker: 'xia_wan', text: '木星...会不会觉得有些不习惯？' },
                    { speaker: 'xia_wan', text: '我是说...和玩家有肢体接触什么的...' },
                    { speaker: 'narrator', text: '木星转过头，看着夏晚。' },
                    { speaker: 'xiao_tong', text: '...你怎么突然问这个？' },
                    { speaker: 'xia_wan', text: '没、没什么！就是随便问问！' },
                    { speaker: 'narrator', text: '夏晚慌忙摆手，脸却红了。' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'narrator', text: '木星看了她一会儿，嘴角微微上扬。' },
                    { speaker: 'xiao_tong', text: '你好像...最近一直在躲着我？' },
                    { speaker: 'xia_wan', text: '我没有！我只是...' },
                    { speaker: 'xiao_tong', text: '只是？' },
                    { speaker: 'xia_wan', text: '（说不出口...）' },
                    { speaker: 'xia_wan', text: '...只是最近事情有点多，有点累。' },
                    { speaker: 'xiao_tong', text: '...要注意休息。' },
                    { speaker: 'narrator', text: '木星说完，转身回去了。' },
                    { speaker: 'xia_wan', text: '（为什么...我说不出来呢...）' },
                    { speaker: 'xia_wan', text: '（明明这么难得的机会...）' }
                ],
                choices: [],
                next: 'xw_3_6'
            },

            // --- 场景5b：算了不敢 ---
            {
                id: 'xw_3_5_b',
                title: '不敢开口',
                background: 'bg-ktv',
                dialogues: [
                    { speaker: 'xia_wan', text: '（算了...还是算了。）' },
                    { speaker: 'narrator', text: '夏晚摇摇头，打消了找木星说话的念头。' },
                    { speaker: 'xia_wan', text: '（我凭什么去问他呢...）' },
                    { speaker: 'xia_wan', text: '（他只是把我当朋友而已...）' },
                    { speaker: 'narrator', text: '她一个人坐在角落里，看着大家热闹。' },
                    { speaker: 'narrator', text: '木星被方圆和谨言拉去唱歌了。' },
                    { speaker: 'narrator', text: '他的声音意外地好听，温柔而有磁性。' },
                    { speaker: 'long_xinheng', text: '木星唱得不错嘛！' },
                    { speaker: 'gan_zhiyu', text: '是啊是啊，再来一首！' },
                    { speaker: 'narrator', text: '大家起哄着，木星笑着摆手。' },
                    { speaker: 'xiao_tong', text: '饶了我吧，我不擅长这个。' },
                    { speaker: 'xia_wan', text: '（原来木星也有这样可爱的一面...）' },
                    { speaker: 'xia_wan', text: '（可是这种笑容...我从来没见他对我这样笑过。）' },
                    { speaker: 'narrator', text: '夏晚的心里涌起一阵失落。' },
                    { speaker: 'xia_wan', text: '（也许我真的不该有什么期待。）' }
                ],
                choices: [],
                next: 'xw_3_6'
            },

            // --- 场景6：触发点2 - 看到木星和玩家单独聊天 ---
            {
                id: 'xw_3_6',
                title: '看到那一幕',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '端午节活动结束后几天。' },
                    { speaker: 'narrator', text: '夏晚来到店里上班。' },
                    { speaker: 'narrator', text: '刚进门，她就看到了让她心碎的一幕。' },
                    { speaker: 'narrator', text: '木星正站在门口，和一个女生说话。' },
                    { speaker: 'narrator', text: '那个女生看起来很年轻，打扮得很漂亮。' },
                    { speaker: 'female_player', text: '木星哥哥，谢谢你上次陪我，那天真的很开心！' },
                    { speaker: 'xiao_tong', text: '客气了，欢迎下次再来。' },
                    { speaker: 'female_player', text: '那我下周预约你带本好不好～' },
                    { speaker: 'xiao_tong', text: '好，我会提前安排。' },
                    { speaker: 'female_player', text: '太好了！那我等你哦～' },
                    { speaker: 'narrator', text: '女生笑盈盈地离开了。' },
                    { speaker: 'narrator', text: '木星转过身，看到了站在门口的夏晚。' },
                    { speaker: 'xiao_tong', text: '来了？' },
                    { speaker: 'xia_wan', text: '嗯...' },
                    { speaker: 'narrator', text: '夏晚低下头，不敢看木星的眼睛。' },
                    { speaker: 'xia_wan', text: '（木星哥哥...叫得真亲热啊...）' },
                    { speaker: 'xia_wan', text: '（他们...是什么关系？）' },
                    { speaker: 'xia_wan', text: '（只是玩家和DM的关系，对吧？）' },
                    { speaker: 'xia_wan', text: '（一定是这样的...）' },
                    { speaker: 'narrator', text: '可她的心，已经开始动摇了。' }
                ],
                choices: [
                    { text: '假装没事，正常工作', next: 'xw_3_6_a', affinity: { xiao_tong: -5 }, friendship: { xiao_tong: -3 } },
                    { text: '忍不住问木星那个人是谁', next: 'xw_3_6_b', affinity: { xiao_tong: 3 }, friendship: { xiao_tong: 0 } }
                ]
            },

            // --- 场景6a：假装没事 ---
            {
                id: 'xw_3_6_a',
                title: '压抑情绪',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '（别想了...只是工作关系而已。）' },
                    { speaker: 'narrator', text: '夏晚深吸一口气，强迫自己镇定下来。' },
                    { speaker: 'xia_wan', text: '木星，我先去换工作了。' },
                    { speaker: 'xiao_tong', text: '嗯，去吧。' },
                    { speaker: 'narrator', text: '一整个下午，夏晚都强撑着正常工作。' },
                    { speaker: 'narrator', text: '但她一直在逃避和木星的眼神接触。' },
                    { speaker: 'xiao_tong', text: '夏晚，这个道具帮我拿一下。' },
                    { speaker: 'xia_wan', text: '好的！' },
                    { speaker: 'narrator', text: '她接过道具，头也不抬地转身。' },
                    { speaker: 'xiao_tong', text: '...你今天怎么了？' },
                    { speaker: 'xia_wan', text: '没什么！有点累！' },
                    { speaker: 'narrator', text: '木星皱起眉头，但没有再问。' },
                    { speaker: 'xia_wan', text: '（他还是发现了吗...）' },
                    { speaker: 'xia_wan', text: '（不行...我不能这样。）' },
                    { speaker: 'xia_wan', text: '（可是我真的忍不住...）' },
                    { speaker: 'narrator', text: '那天回家，夏晚躲在被子里哭了一场。' },
                    { speaker: 'xia_wan', text: '（为什么...）' },
                    { speaker: 'xia_wan', text: '（明明只是工作而已...我凭什么这么难受...）' }
                ],
                choices: [],
                next: 'xw_3_7'
            },

            // --- 场景6b：忍不住问 ---
            {
                id: 'xw_3_6_b',
                title: '忍不住开口',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '木星...' },
                    { speaker: 'xiao_tong', text: '嗯？' },
                    { speaker: 'xia_wan', text: '刚才那个人...是你朋友吗？' },
                    { speaker: 'xiao_tong', text: '...哪个？' },
                    { speaker: 'xia_wan', text: '就...门口那个女生。' },
                    { speaker: 'narrator', text: '木星微微一愣，似乎没想到夏晚会问这个。' },
                    { speaker: 'xiao_tong', text: '哦，她啊...' },
                    { speaker: 'xiao_tong', text: '是之前带过的一个玩家，预约了下次来玩。' },
                    { speaker: 'xia_wan', text: '哦...这样啊。' },
                    { speaker: 'xiao_tong', text: '...你问这个干嘛？' },
                    { speaker: 'xia_wan', text: '没、没什么！就是随便问问！' },
                    { speaker: 'narrator', text: '夏晚慌乱地摇头。' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'narrator', text: '木星看了她一眼，目光有些深邃。' },
                    { speaker: 'xiao_tong', text: '只是玩家和DM的关系。' },
                    { speaker: 'xia_wan', text: '我知道了...' },
                    { speaker: 'xiao_tong', text: '...你最近是不是有什么事想说？' },
                    { speaker: 'xia_wan', text: '没有！真的没有！' },
                    { speaker: 'narrator', text: '夏晚几乎是落荒而逃般地离开了。' },
                    { speaker: 'xia_wan', text: '（为什么...我这么害怕听到答案...）' },
                    { speaker: 'xia_wan', text: '（如果他说那个人只是普通玩家...我会不会更难受？）' },
                    { speaker: 'xia_wan', text: '（还是说...我其实希望他们有什么关系？）' }
                ],
                choices: [],
                next: 'xw_3_7'
            },

            // =============================================
            // 第三阶段：矛盾升级（木星线）
            // =============================================

            // --- 场景7：木星发现异常 ---
            {
                id: 'xw_3_7',
                title: '察觉',
                background: 'bg-shop',
                dynamicDM: true,
                dialogues: [
                    { speaker: 'narrator', text: '这天晚上，店里只剩木星和夏晚在加班。' },
                    { speaker: 'narrator', text: '整理完最后一个房间，两人坐在吧台前休息。' },
                    { speaker: 'xiao_tong', text: '夏晚。' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'xiao_tong', text: '...我有件事想问你。' },
                    { speaker: 'narrator', text: '夏晚的心跳漏了一拍。' },
                    { speaker: 'xiao_tong', text: '你最近是不是在躲着我？' },
                    { speaker: 'xia_wan', text: '...我没有。' },
                    { speaker: 'xiao_tong', text: '...是吗。' },
                    { speaker: 'narrator', text: '木星的声音很平静，但夏晚听出了其中的认真。' },
                    { speaker: 'xiao_tong', text: '那为什么你最近...总是避开我？' },
                    { speaker: 'xiao_tong', text: '而且看到我就脸红，或者干脆低着头不敢看我。' },
                    { speaker: 'xia_wan', text: '！（被看穿了...）' },
                    { speaker: 'xia_wan', text: '木星你想多了...我真的只是最近比较累...' },
                    { speaker: 'xiao_tong', text: '...是吗。' },
                    { speaker: 'narrator', text: '木星没有追问，但眼神变得更加深邃。' },
                    { speaker: 'xia_wan', text: '（他...好像察觉到什么了...）' },
                    { speaker: 'xia_wan', text: '（我该怎么办...）' }
                ],
                choices: [
                    { text: '坦白自己的感受', next: 'xw_3_7_a', affinity: { xiao_tong: 8 }, friendship: { xiao_tong: 5 } },
                    { text: '否认到底', next: 'xw_3_7_b', affinity: { xiao_tong: -3 }, friendship: { xiao_tong: -2 } }
                ]
            },

            // --- 场景7a：坦白 ---
            {
                id: 'xw_3_7_a',
                title: '坦白',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '...木星。' },
                    { speaker: 'xia_wan', text: '其实...我有件事一直想告诉你。' },
                    { speaker: 'narrator', text: '夏晚深吸一口气，抬起头看着木星。' },
                    { speaker: 'xia_wan', text: '我知道你开始做恋陪DM了...' },
                    { speaker: 'xia_wan', text: '我也知道...这是工作需要...' },
                    { speaker: 'xia_wan', text: '可是每次看到你对别人那么温柔...' },
                    { speaker: 'xia_wan', text: '我心里就会很难受...' },
                    { speaker: 'xia_wan', text: '我不知道该怎么说...' },
                    { speaker: 'xia_wan', text: '（终于说出来了...）' },
                    { speaker: 'xia_wan', text: '（不管他怎么想...至少我说出来了...）' },
                    { speaker: 'narrator', text: '木星沉默了很久。' },
                    { speaker: 'narrator', text: '夏晚的心一点一点沉下去。' },
                    { speaker: 'xia_wan', text: '（果然...我不该说的...）' },
                    { speaker: 'xia_wan', text: '（木星一定觉得我很奇怪吧...）' },
                    { speaker: 'xiao_tong', text: '...夏晚。' },
                    { speaker: 'xia_wan', text: '嗯...？' },
                    { speaker: 'xiao_tong', text: '谢谢你告诉我这些。' },
                    { speaker: 'xia_wan', text: '（他说谢谢...是什么意思...）' },
                    { speaker: 'xiao_tong', text: '但...现在还不是时候。' },
                    { speaker: 'xia_wan', text: '...什么意思？' },
                    { speaker: 'xiao_tong', text: '我的意思是...' },
                    { speaker: 'xiao_tong', text: '等我想清楚一些事情，我会给你一个答复。' },
                    { speaker: 'narrator', text: '木星说完，站起身准备离开。' },
                    { speaker: 'xiao_tong', text: '今天的事...先到这里吧。' },
                    { speaker: 'narrator', text: '留下夏晚一个人愣在原地。' },
                    { speaker: 'xia_wan', text: '（不是拒绝...但也不是接受...）' },
                    { speaker: 'xia_wan', text: '（这算什么...）' },
                    { speaker: 'xia_wan', text: '（等你想清楚...是什么时候呢...）' }
                ],
                choices: [],
                next: 'xw_3_8'
            },

            // --- 场景7b：否认 ---
            {
                id: 'xw_3_7_b',
                title: '否认',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '木星你真的想多了...' },
                    { speaker: 'xia_wan', text: '我只是最近事情多，睡不好而已...' },
                    { speaker: 'narrator', text: '夏晚努力让自己的声音听起来平静。' },
                    { speaker: 'xiao_tong', text: '...是吗。' },
                    { speaker: 'narrator', text: '木星没有再追问。' },
                    { speaker: 'xiao_tong', text: '那就好。' },
                    { speaker: 'narrator', text: '他站起身，准备离开。' },
                    { speaker: 'xiao_tong', text: '...早点休息，别太累了。' },
                    { speaker: 'xia_wan', text: '嗯...木星晚安。' },
                    { speaker: 'narrator', text: '木星点点头，转身走了。' },
                    { speaker: 'xia_wan', text: '（我又错过了...）' },
                    { speaker: 'xia_wan', text: '（明明他好像在给我机会...）' },
                    { speaker: 'xia_wan', text: '（可我还是说不出口...）' },
                    { speaker: 'narrator', text: '夏晚趴在吧台上，感觉眼眶有点酸。' },
                    { speaker: 'xia_wan', text: '（我到底在害怕什么呢...）' },
                    { speaker: 'xia_wan', text: '（如果连试都不敢试...我永远不会知道结果。）' }
                ],
                choices: [],
                next: 'xw_3_8'
            },

            // --- 场景8：矛盾爆发 ---
            {
                id: 'xw_3_8',
                title: '矛盾爆发',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '几天后。' },
                    { speaker: 'narrator', text: '夏晚在带本的时候出了失误。' },
                    { speaker: 'narrator', text: '一个关键的线索卡忘记放了，导致玩家卡关了半小时。' },
                    { speaker: 'narrator', text: '复盘的时候，木星指出了问题。' },
                    { speaker: 'xiao_tong', text: '夏晚，那个线索卡应该第三轮就放出来的。' },
                    { speaker: 'xia_wan', text: '对不起...是我疏忽了...' },
                    { speaker: 'xiao_tong', text: '你最近是不是有心事？' },
                    { speaker: 'xia_wan', text: '（他怎么又问这个...）' },
                    { speaker: 'xia_wan', text: '没有！真的没有！' },
                    { speaker: 'xiao_tong', text: '可你最近状态一直不太对...' },
                    { speaker: 'xiao_tong', text: '我觉得你应该调整一下。' },
                    { speaker: 'narrator', text: '木星的声音很平静，但夏晚却觉得格外刺耳。' },
                    { speaker: 'xia_wan', text: '木星你是在怪我吗？！' },
                    { speaker: 'narrator', text: '夏晚的声音突然提高了。' },
                    { speaker: 'narrator', text: '在场的人都愣住了。' },
                    { speaker: 'xiao_tong', text: '...我没有在怪你。' },
                    { speaker: 'xia_wan', text: '那你是什么意思？！' },
                    { speaker: 'xia_wan', text: '我出错是不对，但你也不用一直揪着不放吧！' },
                    { speaker: 'xia_wan', text: '反正你眼里只有你的工作！' },
                    { speaker: 'xia_wan', text: '你对每个人都那么温柔！对每个玩家都那么好！' },
                    { speaker: 'xia_wan', text: '谁知道我算什么东西！' },
                    { speaker: 'narrator', text: '夏晚吼完，空气突然安静了。' },
                    { speaker: 'narrator', text: '她才意识到自己说了什么。' },
                    { speaker: 'xia_wan', text: '（我...我刚才说了什么...）' }
                ],
                choices: [
                    { text: '低头道歉', next: 'xw_3_8_a', affinity: { xiao_tong: 3 }, friendship: { xiao_tong: 5 } },
                    { text: '哭着跑开', next: 'xw_3_8_b', affinity: { xiao_tong: -5 }, friendship: { xiao_tong: -3 } }
                ]
            },

            // --- 场景8a：低头道歉 ---
            {
                id: 'xw_3_8_a',
                title: '道歉',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '对不起...木星...' },
                    { speaker: 'xia_wan', text: '我不是那个意思...我...' },
                    { speaker: 'narrator', text: '夏晚低下头，声音越来越小。' },
                    { speaker: 'xia_wan', text: '我只是...太累了...说了不该说的话...' },
                    { speaker: 'narrator', text: '木星沉默了一会儿。' },
                    { speaker: 'xiao_tong', text: '...去休息一下吧。' },
                    { speaker: 'xia_wan', text: '木星...对不起...' },
                    { speaker: 'xiao_tong', text: '我说过了，去休息。' },
                    { speaker: 'narrator', text: '木星的声音很平静，但夏晚听出了其中的疏离。' },
                    { speaker: 'xia_wan', text: '（他生气了...）' },
                    { speaker: 'xia_wan', text: '（他一定觉得我是个很糟糕的人吧...）' },
                    { speaker: 'narrator', text: '夏晚默默转身，离开了店里。' },
                    { speaker: 'xia_wan', text: '（我不该说那些话的...）' },
                    { speaker: 'xia_wan', text: '（可我真的忍不住...）' },
                    { speaker: 'xia_wan', text: '（看到他那么好地对别人...我真的好难受...）' }
                ],
                choices: [],
                next: 'xw_3_9'
            },

            // --- 场景8b：哭着跑开 ---
            {
                id: 'xw_3_8_b',
                title: '逃离',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚转身跑出了店门。' },
                    { speaker: 'narrator', text: '她一直跑，一直跑，直到跑不动了才停下来。' },
                    { speaker: 'narrator', text: '站在空无一人的街道上，夏晚蹲下身抱住自己。' },
                    { speaker: 'xia_wan', text: '（呜...）' },
                    { speaker: 'xia_wan', text: '（我到底做了什么...）' },
                    { speaker: 'xia_wan', text: '（当众对他发火...还说了那些话...）' },
                    { speaker: 'xia_wan', text: '（他一定讨厌死我了...）' },
                    { speaker: 'narrator', text: '眼泪止不住地流下来。' },
                    { speaker: 'xia_wan', text: '（可是我真的忍不住...）' },
                    { speaker: 'xia_wan', text: '（明明喜欢他...却只能用这种方式伤害他...）' },
                    { speaker: 'xia_wan', text: '（我真是个笨蛋...）' },
                    { speaker: 'narrator', text: '夏晚坐在路边，一直哭到天黑。' },
                    { speaker: 'xia_wan', text: '（我该怎么面对他呢...）' },
                    { speaker: 'xia_wan', text: '（也许...我不该再去店里了...）' }
                ],
                choices: [],
                next: 'xw_3_9'
            },

            // --- 场景9：冷战 ---
            {
                id: 'xw_3_9',
                title: '冷战',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '从那之后，夏晚和木星陷入了冷战。' },
                    { speaker: 'narrator', text: '她故意避开和木星碰面的时间。' },
                    { speaker: 'narrator', text: '有时候宁愿请假，也不愿意去店里。' },
                    { speaker: 'narrator', text: '橙子看在眼里，着急却也不知道该怎么帮忙。' },
                    { speaker: 'chengzi', text: '夏晚，你和木星怎么了？' },
                    { speaker: 'xia_wan', text: '没什么...只是有点矛盾。' },
                    { speaker: 'chengzi', text: '你们俩好好谈谈吧...' },
                    { speaker: 'xia_wan', text: '...我知道。' },
                    { speaker: 'narrator', text: '但夏晚始终迈不出那一步。' },
                    { speaker: 'xia_wan', text: '（我不知道该说什么...）' },
                    { speaker: 'xia_wan', text: '（道歉吗？可那又能改变什么呢...）' },
                    { speaker: 'xia_wan', text: '（他还是不会正眼看我...)' },
                    { speaker: 'narrator', text: '夏晚把自己关在房间里，整夜整夜地睡不着。' },
                    { speaker: 'xia_wan', text: '（明明那么喜欢他...）' },
                    { speaker: 'xia_wan', text: '（却只能看着他离我越来越远...）' },
                    { speaker: 'narrator', text: '她的成绩也开始下滑，整个人瘦了一圈。' },
                    { speaker: 'xia_wan', text: '（这样下去...我真的会失去他的。）' }
                ],
                choices: [],
                next: 'xw_3_10'
            },

            // --- 场景10：被关心 ---
            {
                id: 'xw_3_10',
                title: '被关心',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '这天晚上，夏晚收到了一条微信消息。' },
                    { speaker: 'narrator', text: '不是木星发的，是谨言。' },
                    { speaker: 'long_xinheng', text: '「夏晚，最近怎么了？」' },
                    { speaker: 'long_xinheng', text: '「大家都在担心你。」' },
                    { speaker: 'xia_wan', text: '「没什么...」' },
                    { speaker: 'long_xinheng', text: '「和木星吵架了？」' },
                    { speaker: 'xia_wan', text: '「...嗯。」' },
                    { speaker: 'long_xinheng', text: '「其实他最近也不太好。」' },
                    { speaker: 'xia_wan', text: '「什么意思？」' },
                    { speaker: 'long_xinheng', text: '「就是感觉他心事很重的样子。」' },
                    { speaker: 'long_xinheng', text: '「也不知道在想什么。」' },
                    { speaker: 'xia_wan', text: '「...」' },
                    { speaker: 'long_xinheng', text: '「你们俩好好谈谈吧。」' },
                    { speaker: 'long_xinheng', text: '「逃避不是办法。」' },
                    { speaker: 'xia_wan', text: '「...谢谢你，谨言。」' },
                    { speaker: 'long_xinheng', text: '「哈哈，叫我谨言就行！」' },
                    { speaker: 'long_xinheng', text: '「有什么需要帮忙的尽管说。」' },
                    { speaker: 'narrator', text: '夏晚放下手机，心情复杂。' },
                    { speaker: 'xia_wan', text: '（木星...他也在烦恼吗...）' },
                    { speaker: 'xia_wan', text: '（是不是因为我...）' },
                    { speaker: 'xia_wan', text: '（也许我真的该主动去找他了...）' }
                ],
                choices: [
                    { text: '鼓起勇气去找木星谈谈', next: 'xw_3_10_a', affinity: { xiao_tong: 10 }, friendship: { xiao_tong: 5 } },
                    { text: '还是不敢，再等等', next: 'xw_3_10_b', affinity: { xiao_tong: -3 }, friendship: { xiao_tong: -2 } }
                ]
            },

            // --- 场景10a：鼓起勇气 ---
            {
                id: 'xw_3_10_a',
                title: '主动',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '第二天，夏晚鼓起勇气去了店里。' },
                    { speaker: 'narrator', text: '她特意挑了店里没人的时候。' },
                    { speaker: 'narrator', text: '木星正坐在吧台前整理东西。' },
                    { speaker: 'xia_wan', text: '木星...' },
                    { speaker: 'narrator', text: '木星抬起头，看到夏晚的时候眼神闪了一下。' },
                    { speaker: 'xiao_tong', text: '...你来了。' },
                    { speaker: 'xia_wan', text: '木星，上次的事...对不起。' },
                    { speaker: 'xia_wan', text: '我不该对你发火的。' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'narrator', text: '木星沉默了一会儿。' },
                    { speaker: 'xia_wan', text: '我知道是我不对...' },
                    { speaker: 'xia_wan', text: '我只是...看到你对别人那么好...' },
                    { speaker: 'xia_wan', text: '心里会不舒服...' },
                    { speaker: 'xia_wan', text: '我知道这样很自私...' },
                    { speaker: 'xiao_tong', text: '夏晚。' },
                    { speaker: 'xia_wan', text: '嗯...' },
                    { speaker: 'xiao_tong', text: '其实我也有话想对你说。' },
                    { speaker: 'xia_wan', text: '（他也有话想说...？）' },
                    { speaker: 'xiao_tong', text: '你的那些话...让我想了很多。' },
                    { speaker: 'xiao_tong', text: '关于恋陪这件事...' },
                    { speaker: 'xiao_tong', text: '其实我自己也没有完全想清楚。' },
                    { speaker: 'xia_wan', text: '...嗯。' },
                    { speaker: 'xiao_tong', text: '但有一点我很确定。' },
                    { speaker: 'xia_wan', text: '？' },
                    { speaker: 'xiao_tong', text: '...我不想失去你。' },
                    { speaker: 'xia_wan', text: '！（心跳漏了一拍）' },
                    { speaker: 'narrator', text: '木星说完这句话，就低下头继续整理东西了。' },
                    { speaker: 'xia_wan', text: '（木星...这是什么意思...）' },
                    { speaker: 'xia_wan', text: '（他是说...他也不想我们就这样结束吗...）' },
                    { speaker: 'xia_wan', text: '（看着他认真整理东西的侧脸，夏晚突然觉得心里很暖）' },
                    { speaker: 'xia_wan', text: '（这个平时总是沉默的男生，其实一直在认真对待每一件事）' },
                    { speaker: 'xia_wan', text: '（包括...我们的关系）' }
                ],
                choices: [
                    { text: '认真地看着他，说「我也是」', next: 'xw_3_10_a_detail', affinity: { xiao_tong: 8 }, friendship: { xiao_tong: 5 }, confessionCondition: 'xiaotong' },
                    { text: '只是轻声说「谢谢你告诉我」', next: 'xw_3_10_b_response', affinity: { xiao_tong: 3 }, friendship: { xiao_tong: 3 } }
                ]
            },
            
            // --- 场景10a_detail：认真感受他的认真（触发隐藏条件） ---
            {
                id: 'xw_3_10_a_detail',
                title: '认真',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '木星...' },
                    { speaker: 'xia_wan', text: '我也是。' },
                    { speaker: 'xia_wan', text: '我不想失去你。' },
                    { speaker: 'narrator', text: '夏晚的声音很轻，但很坚定。' },
                    { speaker: 'narrator', text: '木星终于抬起头，看着她。' },
                    { speaker: 'xiao_tong', text: '...真的吗？' },
                    { speaker: 'xia_wan', text: '真的。' },
                    { speaker: 'narrator', text: '木星看着她，嘴角终于浮现出一个淡淡的笑容。' },
                    { speaker: 'narrator', text: '不是平时那种礼貌性的微笑。' },
                    { speaker: 'narrator', text: '是发自内心的，带着一点点不好意思的笑容。' },
                    { speaker: 'xia_wan', text: '（木星笑起来的样子...真好看）' },
                    { speaker: 'narrator', text: '夏晚觉得自己的心跳漏了一拍。' },
                    { speaker: 'xia_wan', text: '（我想...一直看着这样的笑容）' }
                ],
                choices: [],
                next: 'xw_3_end_selector',
                autoTriggerCondition: 'xiaotong'
            },
            
            // --- 场景10b_response：轻声回应 ---
            {
                id: 'xw_3_10_b_response',
                title: '回应',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '木星...' },
                    { speaker: 'xia_wan', text: '谢谢你告诉我这些。' },
                    { speaker: 'xiao_tong', text: '...嗯。' },
                    { speaker: 'narrator', text: '木星低下头，继续整理东西。' },
                    { speaker: 'narrator', text: '但夏晚看到，他的耳朵似乎有点红。' },
                    { speaker: 'xia_wan', text: '（...他果然还是有点害羞啊）' },
                    { speaker: 'narrator', text: '她忍不住轻轻笑了一下。' },
                    { speaker: 'xia_wan', text: '（这样的木星...也挺可爱的）' }
                ],
                choices: [],
                next: 'xw_3_end_selector'
            },

            // --- 场景10b：再等等 ---
            {
                id: 'xw_3_10_b',
                title: '逃避',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'xia_wan', text: '（算了...还是算了...）' },
                    { speaker: 'narrator', text: '夏晚又一次退缩了。' },
                    { speaker: 'xia_wan', text: '（我不知道该说什么...）' },
                    { speaker: 'xia_wan', text: '（也许再过几天就好了吧...）' },
                    { speaker: 'narrator', text: '她继续躲避着木星。' },
                    { speaker: 'narrator', text: '两人之间的距离，似乎越来越远了。' },
                    { speaker: 'xia_wan', text: '（这样下去...真的会结束的...）' },
                    { speaker: 'xia_wan', text: '（可是我真的不知道该怎么办...）' },
                    { speaker: 'narrator', text: '夏晚把自己埋在枕头里，无声地流泪。' },
                    { speaker: 'xia_wan', text: '（如果当时勇敢一点...是不是就不一样了...）' },
                    { speaker: 'xia_wan', text: '（可惜...没有如果。）' }
                ],
                choices: [],
                next: 'xw_3_end_selector'
            },

            // =============================================
            // 木星线多结局入口
            // =============================================
            {
                id: 'xw_3_end_selector',
                title: '心动',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '...' }
                ],
                choices: [],
                next: null,
                isEndingSelector: true
            },

            // =============================================
            // 木星线结局1：甜蜜心动
            // =============================================
            {
                id: 'xw_3_end_he',
                title: '心动 - 甜蜜',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '脑海里不断回放着木星说的那句话。' },
                    { speaker: 'xia_wan', text: '（他说...不想失去我...）' },
                    { speaker: 'xia_wan', text: '（这是不是意味着...他也在意我？）' },
                    { speaker: 'narrator', text: '她的心跳得很快。' },                 
                    { speaker: 'xia_wan', text: '（那岂不是说...他一直把我当作很重要的人？）' },
                    { speaker: 'narrator', text: '就在这时，手机突然亮了。是木星发来的消息。' },
                    { speaker: 'xiao_tong', text: '「还没睡？」' },
                    { speaker: 'xia_wan', text: '！（心跳漏了一拍）' },
                    { speaker: 'xia_wan', text: '「还没。」' },
                    { speaker: 'xiao_tong', text: '「我也是。」' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕，嘴角不自觉地弯了起来。' },
                    { speaker: 'xia_wan', text: '（这个回答...是在说睡不着，还是在说...别的什么？）' },
                    { speaker: 'xiao_tong', text: '「今天说的那些话...我想了很久。」' },
                    { speaker: 'xiao_tong', text: '「我不太会说话。但有件事，我想让你知道。」' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'xiao_tong', text: '「对我来说，你是很特别的存在。」' },
                    { speaker: 'xiao_tong', text: '「不是普通同事那种。」' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'narrator', text: '夏晚把手机紧紧握在手里。' },
                    { speaker: 'narrator', text: '心跳快得几乎要从胸口跳出来。' },
                    { speaker: 'xia_wan', text: '（木星...这是...)' },
                    { speaker: 'xia_wan', text: '（他是在说...）' },
                    { speaker: 'xiao_tong', text: '「明天...能早点来店里吗？」' },
                    { speaker: 'xiao_tong', text: '「我想...当面跟你说清楚。」' },
                    { speaker: 'xia_wan', text: '「好。」' },
                    { speaker: 'xia_wan', text: '（他的心思...我好像懂了一点点...）' },
                    { speaker: 'xia_wan', text: '（那我呢...我是不是也该...）' },
                    { speaker: 'narrator', text: '她鼓起勇气，打出了几个字。' },
                    { speaker: 'xia_wan', text: '「我也是。」' },
                    { speaker: 'narrator', text: '发送。' },
                    { speaker: 'narrator', text: '手机那边沉默了很久。' },
                    { speaker: 'xia_wan', text: '（是不是吓到他了...）' },
                    { speaker: 'narrator', text: '然后，屏幕上跳出三个字。' },
                    { speaker: 'xiao_tong', text: '「谢谢你。」' },
                    { speaker: 'narrator', text: '夏晚笑了。' },
                    { speaker: 'narrator', text: '是那种藏不住的笑。' },
                    { speaker: 'narrator', text: '窗外，月光温柔地洒落。' },
                    { speaker: 'narrator', text: '她的心里，好像有什么东西悄悄开花了。' },
                    { speaker: 'xia_wan', text: '（明天...我也要亲口告诉他。）' },
                    { speaker: 'xia_wan', text: '（我的答案。）' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '第二天。' },
                    { speaker: 'narrator', text: '夏晚比平时早到了半小时。' },
                    { speaker: 'narrator', text: '推开门的时候，她看到木星已经站在吧台后面。' },
                    { speaker: 'narrator', text: '正在整理东西。' },
                    { speaker: 'narrator', text: '听到门响，他抬起头。' },
                    { speaker: 'xiao_tong', text: '...你来了。' },
                    { speaker: 'xia_wan', text: '嗯。' },
                    { speaker: 'narrator', text: '两个人对视了一眼。' },
                    { speaker: 'narrator', text: '然后同时移开了目光。' },
                    { speaker: 'narrator', text: '空气里弥漫着一种微妙的氛围。' },
                    { speaker: 'narrator', text: '好像什么都没说。' },
                    { speaker: 'narrator', text: '但又好像什么都说了。' },
                    { speaker: 'xia_wan', text: '（...原来喜欢一个人，是这种感觉。）' },
                    { speaker: 'xia_wan', text: '（心跳得好快。）' },
                    { speaker: 'xia_wan', text: '（但...不讨厌。）' },
                    { speaker: 'narrator', text: '她走到吧台前。' },
                    { speaker: 'narrator', text: '和木星并肩站着。' },
                    { speaker: 'narrator', text: '不需要说话。' },
                    { speaker: 'narrator', text: '只是这样站着，就觉得很好。' },
                    { speaker: 'xia_wan', text: '（木星...从今天开始...）' },
                    { speaker: 'xia_wan', text: '（请多多指教。）' },
                    { speaker: 'narrator', text: '窗外，阳光正好。' },
                    { speaker: 'narrator', text: '属于他们的夏天，还在继续。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【第三章 完】' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // =============================================
            // 木星线结局2：开放心动
            // =============================================
            {
                id: 'xw_3_end_open',
                title: '心动 - 开放',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '脑海里不断回放着木星说的那句话。' },
                    { speaker: 'xia_wan', text: '（他说...不想失去我...）' },
                    { speaker: 'xia_wan', text: '（这是不是意味着...他也在意我？）' },
                    { speaker: 'xia_wan', text: '（可是我们现在的关系...真的好尴尬...）' },
                    { speaker: 'narrator', text: '她翻了个身，把被子蒙在头上。' },
                    { speaker: 'xia_wan', text: '（至少...他没有完全拒绝我...）' },
                    { speaker: 'xia_wan', text: '（这就是最好的结果了吧...）' },
                    { speaker: 'narrator', text: '窗外，月光静静地洒落。' },
                    { speaker: 'xia_wan', text: '（木星...我还能等到你的回答吗...）' },
                    { speaker: 'narrator', text: '夏晚闭上眼睛，眼角还有未干的泪痕。' },
                    { speaker: 'narrator', text: '她知道，这个问题，要留给时间去回答了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '与此同时，在城市的另一边。' },
                    { speaker: 'narrator', text: '木星坐在窗边，看着夜空发呆。' },
                    { speaker: 'narrator', text: '手里握着的，是夏晚当初还给他的那把伞。' },
                    { speaker: 'xiao_tong', text: '（不想失去...吗...）' },
                    { speaker: 'xiao_tong', text: '（也许...是时候想清楚了。）' },
                    { speaker: 'narrator', text: '两个人，就这样各自怀着心事。' },
                    { speaker: 'narrator', text: '等待着一个还未到来的答案。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏天已经过去了一半。' },
                    { speaker: 'narrator', text: '阿昊离开的日子，也越来越近了。' },
                    { speaker: 'narrator', text: '而属于夏晚和木星的故事，似乎才刚刚开始...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // =============================================
            // 木星线结局3：友情心动
            // =============================================
            {
                id: 'xw_3_end_friend',
                title: '心动 - 友情',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '她想了很久，最终还是叹了口气。' },
                    { speaker: 'xia_wan', text: '（也许...我想太多了。）' },
                    { speaker: 'xia_wan', text: '（木星对我好，可能只是因为我是他的朋友。）' },
                    { speaker: 'xia_wan', text: '（我不应该有什么非分之想的。）' },
                    { speaker: 'narrator', text: '她翻了个身，努力让自己平静下来。' },
                    { speaker: 'xia_wan', text: '（能继续做朋友...已经很不错了。）' },
                    { speaker: 'xia_wan', text: '（我不应该奢求更多的。）' },
                    { speaker: 'narrator', text: '窗外，月光静静地洒落。' },
                    { speaker: 'xia_wan', text: '（木星...希望你能找到属于你的幸福。）' },
                    { speaker: 'xia_wan', text: '（哪怕那个人不是我。）' },
                    { speaker: 'narrator', text: '夏晚闭上眼睛，心里虽然有些酸涩。' },
                    { speaker: 'narrator', text: '但也有一丝释然。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '与此同时，在城市的另一边。' },
                    { speaker: 'narrator', text: '木星坐在窗边，看着夜空发呆。' },
                    { speaker: 'narrator', text: '手里握着的，是夏晚当初还给他的那把伞。' },
                    { speaker: 'xiao_tong', text: '（也许...保持现在的关系就很好。）' },
                    { speaker: 'xiao_tong', text: '（毕竟...她只是我的朋友。）' },
                    { speaker: 'narrator', text: '两个人，各怀心事。' },
                    { speaker: 'narrator', text: '最终都选择了，把那份心意藏在心底。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏天已经过去了一半。' },
                    { speaker: 'narrator', text: '而夏晚和木星，依然是很好的朋友。' },
                    { speaker: 'narrator', text: '只是偶尔...她看向他的时候...' },
                    { speaker: 'narrator', text: '心里会泛起一丝涟漪。' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // =============================================
            // 木星线结局4：遗憾心动
            // =============================================
            {
                id: 'xw_3_end_be',
                title: '心动 - 遗憾',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '眼泪止不住地流下来。' },
                    { speaker: 'xia_wan', text: '（为什么...会变成这样...）' },
                    { speaker: 'xia_wan', text: '（明明那么喜欢他...）' },
                    { speaker: 'xia_wan', text: '（却只能看着他离我越来越远...）' },
                    { speaker: 'narrator', text: '她把脸埋在枕头里，无声地哭泣。' },
                    { speaker: 'xia_wan', text: '（都是我的错...）' },
                    { speaker: 'xia_wan', text: '（如果当时没有说那些话...）' },
                    { speaker: 'xia_wan', text: '（如果当时勇敢一点...）' },
                    { speaker: 'xia_wan', text: '（也许...就不一样了吧...）' },
                    { speaker: 'narrator', text: '窗外，月光冷清地洒落。' },
                    { speaker: 'xia_wan', text: '（木星...对不起...）' },
                    { speaker: 'xia_wan', text: '（我好像...把你推开了。）' },
                    { speaker: 'narrator', text: '夏晚闭上眼睛，心里满是遗憾。' },
                    { speaker: 'narrator', text: '她知道，有些错过，就是一辈子。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '与此同时，在城市的另一边。' },
                    { speaker: 'narrator', text: '木星坐在窗边，看着夜空发呆。' },
                    { speaker: 'narrator', text: '手里的那把伞，他最终还是放下了。' },
                    { speaker: 'xiao_tong', text: '（也许...从一开始就是我的错觉。）' },
                    { speaker: 'xiao_tong', text: '（而我...想太多了。）' },
                    { speaker: 'narrator', text: '两个人，各怀心事。' },
                    { speaker: 'narrator', text: '却都在沉默中，渐行渐远。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏天已经过去了一半。' },
                    { speaker: 'narrator', text: '而夏晚和木星之间的关系...' },
                    { speaker: 'narrator', text: '再也回不到从前了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有些遗憾，注定无法弥补。' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            }
        ]
    },

    // ========================================
    // 夏晚线 - 第三章：心动·谨言篇
    // ========================================
    xia_wan_chapter3_longxinheng: {
        title: '第三章：心动·谨言篇',
        theme: '心动升温与刀子伏笔（2025年5月-7月）',
        scenes: [

            // --- 场景1：日常相处 ---
            {
                id: 'xw_3_lr_1',
                title: '热闹中的孤独',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '2025年5月。' },
                    { speaker: 'narrator', text: '夏晚在店里工作已经有一段时间了。' },
                    { speaker: 'narrator', text: '今天是店里的聚餐日，大家都很开心。' },
                    { speaker: 'long_xinheng', text: '来来来！大家干杯！' },
                    { speaker: 'narrator', text: '谨言举着酒杯，笑得特别灿烂。' },
                    { speaker: 'narrator', text: '他永远是那个带动气氛的人。' },
                    { speaker: 'narrator', text: '说笑话，玩游戏，把每个人都逗得哈哈大笑。' },
                    { speaker: 'xia_wan', text: '（谨言真的好开朗啊...）' },
                    { speaker: 'xia_wan', text: '（不管什么时候都能让气氛活跃起来...）' },
                    { speaker: 'narrator', text: '聚餐结束后，大家陆续散去。' },
                    { speaker: 'narrator', text: '夏晚因为落了东西，回来拿。' },
                    { speaker: 'narrator', text: '经过走廊的时候，她看到了一个意外的场景。' }
                ],
                choices: [],
                next: 'xw_3_lr_2'
            },

            // --- 场景2：发现谨言的异常 ---
            {
                id: 'xw_3_lr_2',
                title: '孤独的角落',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '谨言一个人坐在角落的沙发上。' },
                    { speaker: 'narrator', text: '刚才的热闹仿佛是另一个世界。' },
                    { speaker: 'narrator', text: '他低着头，手指无意识地摩挲着酒杯。' },
                    { speaker: 'narrator', text: '脸上的笑容消失了，取而代之的是一种难以言说的落寞。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'xia_wan', text: '（这还是刚才那个笑容满面的谨言吗...）' },
                    { speaker: 'narrator', text: '夏晚站在原地，不知道该不该打扰他。' },
                    { speaker: 'narrator', text: '但她清楚地看到了——' },
                    { speaker: 'narrator', text: '谨言，此刻看起来是那么孤独。' },
                    { speaker: 'xia_wan', text: '（原来他也会这样吗...）' },
                    { speaker: 'xia_wan', text: '（这种表情...好像在哪里见过...）' }
                ],
                choices: [
                    { text: '走过去关心他', next: 'xw_3_lr_2_a', affinity: { long_xinheng: 5 }, friendship: { long_xinheng: 5 } },
                    { text: '悄悄离开，装作没看见', next: 'xw_3_lr_2_b', affinity: { long_xinheng: 0 }, friendship: { long_xinheng: -2 } }
                ]
            },

            // --- 场景2a：走过去关心 ---
            {
                id: 'xw_3_lr_2_a',
                title: '关心',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '谨言...' },
                    { speaker: 'narrator', text: '谨言猛地抬起头，看到夏晚的时候明显愣了一下。' },
                    { speaker: 'narrator', text: '然后，他脸上又浮现出了那个熟悉的笑容。' },
                    { speaker: 'long_xinheng', text: '哎呀，夏晚！你怎么还在这？' },
                    { speaker: 'xia_wan', text: '我落了东西，回来拿...' },
                    { speaker: 'long_xinheng', text: '哦哦，快去快去，别丢了哦～' },
                    { speaker: 'xia_wan', text: '谨言，你...还好吗？' },
                    { speaker: 'long_xinheng', text: '我？我很好啊！怎么了？' },
                    { speaker: 'narrator', text: '他笑着，但夏晚总觉得那笑容有些勉强。' },
                    { speaker: 'xia_wan', text: '我刚才看到你一个人坐在这里...' },
                    { speaker: 'narrator', text: '谨言的笑容僵了一下。' },
                    { speaker: 'long_xinheng', text: '...啊，那个啊。' },
                    { speaker: 'long_xinheng', text: '我就是想一个人静静...' },
                    { speaker: 'long_xinheng', text: '你知道吗，有时候笑久了也会累的。' },
                    { speaker: 'narrator', text: '他的声音很轻，像是在自言自语。' },
                    { speaker: 'xia_wan', text: '（原来...他也会累吗...）' },
                    { speaker: 'xia_wan', text: '谨言...谢谢你平时照顾大家。' },
                    { speaker: 'xia_wan', text: '（不对...）' },
                    { speaker: 'long_xinheng', text: '？' },
                    { speaker: 'xia_wan', text: '我是说...你不用一直笑着的。' },
                    { speaker: 'xia_wan', text: '至少...在我面前，你不用。' },
                    { speaker: 'narrator', text: '谨言愣住了，看着夏晚的眼神有些复杂。' },
                    { speaker: 'long_xinheng', text: '...你这个人，还真是...' },
                    { speaker: 'long_xinheng', text: '谢谢你啊，夏晚。' },
                    { speaker: 'narrator', text: '这一次，他的笑容变得柔和了许多。' },
                    { speaker: 'xia_wan', text: '（原来他也会脆弱...）' },
                    { speaker: 'xia_wan', text: '（也许每个人都是这样吧...）' },
                    { speaker: 'narrator', text: '夏晚看着眼前的谨言，心里涌起一股复杂的情绪。' },
                    { speaker: 'narrator', text: '原来那个总是嘻嘻哈哈的人，也会一个人躲在角落里。' },
                    { speaker: 'xia_wan', text: '（我想...守护他这一面。）' }
                ],
                choices: [
                    { text: '认真地看着他，告诉他「我懂」', next: 'xw_3_lr_3', affinity: { long_xinheng: 8 }, friendship: { long_xinheng: 5 } },
                    { text: '安静地笑了笑，轻声说「早点休息」', next: 'xw_3_lr_3', affinity: { long_xinheng: 3 }, friendship: { long_xinheng: 3 } }
                ]
            },

            // --- 场景2b：悄悄离开 ---
            {
                id: 'xw_3_lr_2_b',
                title: '假装没看见',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '（还是...不要打扰他了...）' },
                    { speaker: 'narrator', text: '夏晚悄悄退开，假装什么都没看见。' },
                    { speaker: 'xia_wan', text: '（也许他只是需要一个人静静吧...）' },
                    { speaker: 'xia_wan', text: '（可是刚才那个表情...）' },
                    { speaker: 'narrator', text: '她拿完东西离开的时候，又忍不住看了一眼。' },
                    { speaker: 'narrator', text: '谨言已经恢复了往常的笑容，正在和路过的人打招呼。' },
                    { speaker: 'xia_wan', text: '（果然...他真的总是笑着的...）' },
                    { speaker: 'xia_wan', text: '（但那个落寞的表情...我好像忘不掉...）' },
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上的时候。' },
                    { speaker: 'xia_wan', text: '（原来看起来最开朗的人...也会有孤独的一面...）' }
                ],
                choices: [],
                next: 'xw_3_lr_3'
            },

            // --- 场景3：端午节活动 ---
            {
                id: 'xw_3_lr_3',
                title: '端午节',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '端午节到了。' },
                    { speaker: 'narrator', text: '店里组织了聚餐唱歌的活动。' },
                    { speaker: 'narrator', text: '夏晚到的时候，大家已经玩得很开心了。' },
                    { speaker: 'long_xinheng', text: '夏晚来了！快来快来！' },
                    { speaker: 'narrator', text: '谨言朝她招手，脸上是标志性的笑容。' },
                    { speaker: 'xia_wan', text: '（但我好像...忘不掉那天看到的他...）' },
                    { speaker: 'narrator', text: '唱歌的时候，谨言拉着夏晚一起唱了一首。' },
                    { speaker: 'long_xinheng', text: '诶诶，夏晚唱得不错嘛！' },
                    { speaker: 'xia_wan', text: '没有没有，方圆唱得更好...' },
                    { speaker: 'long_xinheng', text: '哈哈，你这孩子就是太谦虚了～' },
                    { speaker: 'narrator', text: '他笑着揉了揉夏晚的头。' },
                    { speaker: 'xia_wan', text: '（他的手...好温暖...）' },
                    { speaker: 'xia_wan', text: '（但我总是在想...那个孤独的谨言...）' },
                    { speaker: 'xia_wan', text: '（他是不是也希望有人能看到他真正的样子？）' }
                ],
                choices: [],
                next: 'xw_3_lr_4'
            },

            // --- 场景4：端午节后·安静的时刻（双向确认） ---
            {
                id: 'xw_3_lr_4',
                title: '不说话也可以',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '端午节聚餐结束了。' },
                    { speaker: 'narrator', text: '大家陆续散去，店里渐渐安静下来。' },
                    { speaker: 'narrator', text: '夏晚没有立刻离开，而是留下来帮谨言收拾。' },
                    { speaker: 'long_xinheng', text: '...你不用帮忙的。' },
                    { speaker: 'xia_wan', text: '没事，反正顺路。' },
                    { speaker: 'narrator', text: '其实她也不知道自己为什么没走。' },
                    { speaker: 'narrator', text: '只是觉得...也许谨言也需要一个人陪。' },
                    { speaker: 'narrator', text: '店里很安静，只有收拾东西的声音。' },
                    { speaker: 'narrator', text: '不像平时那样，谨言总是说着各种玩笑话。' },
                    { speaker: 'narrator', text: '他只是安静地擦着桌子，动作很轻。' },
                    { speaker: 'narrator', text: '夏晚也没有说话，就坐在一旁看着。' },
                    { speaker: 'narrator', text: '不知道过了多久，谨言突然开口了。' },
                    { speaker: 'long_xinheng', text: '夏晚。' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'long_xinheng', text: '...你为什么还不回去？' },
                    { speaker: 'xia_wan', text: '（因为他还在啊...）' },
                    { speaker: 'xia_wan', text: '因为你还没走啊。' },
                    { speaker: 'narrator', text: '话音落下的瞬间，夏晚觉得自己好像说错了什么。' },
                    { speaker: 'narrator', text: '但她没有收回。' },
                    { speaker: 'long_xinheng', text: '...' },
                    { speaker: 'narrator', text: '谨言的动作顿了一下。' },
                    { speaker: 'narrator', text: '他没有看夏晚，只是继续擦着桌子。' },
                    { speaker: 'long_xinheng', text: '你知道吗...' },
                    { speaker: 'long_xinheng', text: '你是第一个让我觉得...' },
                    { speaker: 'long_xinheng', text: '不说话也可以的人。' },
                    { speaker: 'narrator', text: '他的声音很轻，轻得像是在自言自语。' },
                    { speaker: 'narrator', text: '夏晚的心跳漏了一拍。' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'narrator', text: '她不知道该说什么。' },
                    { speaker: 'narrator', text: '但奇怪的是，这种不知道该说什么的感觉...' },
                    { speaker: 'narrator', text: '好像也不坏。' },
                    { speaker: 'xia_wan', text: '...那我就不走了。' },
                    { speaker: 'narrator', text: '夏晚轻声说。' },
                    { speaker: 'long_xinheng', text: '...' },
                    { speaker: 'narrator', text: '谨言终于抬起头，看向夏晚。' },
                    { speaker: 'narrator', text: '他没有说话，只是笑了。' },
                    { speaker: 'narrator', text: '不是平时那种标志性的笑容。' },
                    { speaker: 'narrator', text: '是很轻、很淡的笑。' },
                    { speaker: 'narrator', text: '像是一扇一直紧闭的门，终于开了一条缝。' },
                    { speaker: 'xia_wan', text: '（他的眼睛里有光...）' },
                    { speaker: 'xia_wan', text: '（原来真正的谨言...是这样的。）' },
                    { speaker: 'xia_wan', text: '（我想...一直待在这道光里。）' }
                ],
                choices: [],
                next: 'xw_3_lr_confess',
                autoTriggerCondition: 'longxinheng'
            },

            // --- 谨言线中间选择：要不要表达心意 ---
            {
                id: 'xw_3_lr_end_choice',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚看着谨言的眼睛，心里涌起一股冲动。' },
                    { speaker: 'xia_wan', text: '（他说...让人忍不住想靠近...）' },
                    { speaker: 'xia_wan', text: '（这种感觉...好想告诉他...）' },
                    { speaker: 'narrator', text: '她深吸一口气...' }
                ],
                choices: [
                    { text: '鼓起勇气，告诉他你的心意', next: 'xw_3_lr_confess', affinity: { long_xinheng: 8 }, friendship: { long_xinheng: 3 } },
                    { text: '保持沉默，只是笑了笑', next: 'xw_3_lr_stay', affinity: { long_xinheng: 3 }, friendship: { long_xinheng: 5 } },
                    { text: '转移话题，问他其他的事', next: 'xw_3_lr_talk', affinity: { long_xinheng: 2 }, friendship: { long_xinheng: 3 } }
                ],
                next: null
            },

            // --- 谨言线表白选项 ---
            {
                id: 'xw_3_lr_confess',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '谨言...' },
                    { speaker: 'xia_wan', text: '其实我...' },
                    { speaker: 'narrator', text: '话到嘴边，却又说不出口了。' },
                    { speaker: 'xia_wan', text: '...谢谢你愿意对我说这些。' },
                    { speaker: 'long_xinheng', text: '...' },
                    { speaker: 'narrator', text: '谨言愣了一下，然后轻轻笑了。' },
                    { speaker: 'long_xinheng', text: '你是想说什么吗？' },
                    { speaker: 'xia_wan', text: '...没什么。' },
                    { speaker: 'xia_wan', text: '（算了...还不是时候...）' },
                    { speaker: 'xia_wan', text: '（但至少...他知道我在意他。）' },
                    { speaker: 'long_xinheng', text: '好吧。' },
                    { speaker: 'long_xinheng', text: '不管你想说什么...我都很期待。' },
                    { speaker: 'xia_wan', text: '！（心跳加速）' },
                    { speaker: 'narrator', text: '月光下，两人的距离似乎又近了一点。' }
                ],
                choices: [],
                next: 'xw_3_lr_end_selector'
            },

            // --- 谨言线保持沉默选项 ---
            {
                id: 'xw_3_lr_stay',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '龙信衡...' },
                    { speaker: 'xia_wan', text: '你不用谢我。' },
                    { speaker: 'xia_wan', text: '我只是觉得...' },
                    { speaker: 'xia_wan', text: '能遇到谨言，是一件很幸运的事。' },
                    { speaker: 'long_xinheng', text: '...' },
                    { speaker: 'narrator', text: '谨言看着夏晚，眼神里闪过一丝温柔。' },
                    { speaker: 'long_xinheng', text: '我也是。' },
                    { speaker: 'long_xinheng', text: '能遇到你这样的人...我也很幸运。' },
                    { speaker: 'xia_wan', text: '（他的笑容...好温柔...）' },
                    { speaker: 'xia_wan', text: '（但现在...这样就很好。）' },
                    { speaker: 'narrator', text: '月光下，两人相视一笑。' }
                ],
                choices: [],
                next: 'xw_3_lr_end_selector'
            },

            // --- 谨言线转移话题选项 ---
            {
                id: 'xw_3_lr_talk',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '对了谨言...' },
                    { speaker: 'xia_wan', text: '我听说你以前在学校的时候就很受欢迎？' },
                    { speaker: 'long_xinheng', text: '...算是吧。' },
                    { speaker: 'long_xinheng', text: '不过那时候...我只是觉得不能让气氛尴尬。' },
                    { speaker: 'long_xinheng', text: '所以总是笑着应对每一个人。' },
                    { speaker: 'xia_wan', text: '那谨言...有没有特别在意的人？' },
                    { speaker: 'long_xinheng', text: '...' },
                    { speaker: 'narrator', text: '谨言沉默了一下。' },
                    { speaker: 'long_xinheng', text: '以前...有一个女生追过我很久。' },
                    { speaker: 'long_xinheng', text: '但那时候我没有认真想过这种事。' },
                    { speaker: 'long_xinheng', text: '后来...就没有后来了。' },
                    { speaker: 'xia_wan', text: '（原来谨言也有这样的经历...）' },
                    { speaker: 'xia_wan', text: '（那现在呢...他有没有喜欢的人...）' },
                    { speaker: 'xia_wan', text: '（算了...还是不要问了...）' }
                ],
                choices: [],
                next: 'xw_3_lr_end_selector'
            },

            // --- 谨言线竞争机制：橙子的亲近 ---
            {
                id: 'xw_3_lr_competition',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚和谨言正聊着。' },
                    { speaker: 'narrator', text: '突然，一个清脆的声音打断了他们。' },
                    { speaker: 'chengzi', text: '谨言～终于找到你了！' },
                    { speaker: 'narrator', text: '橙子小跑着过来，自然地挽住了谨言的手臂。' },
                    { speaker: 'narrator', text: '她们经常一起带情感本，配合很默契。' },
                    { speaker: 'narrator', text: '橙子笑容灿烂，像是找到了什么宝贝。' },
                    { speaker: 'chengzi', text: '你跑哪去了啦～大家都在找你呢！' },
                    { speaker: 'long_xinheng', text: '啊...我就出来透透气。' },
                    { speaker: 'chengzi', text: '透气也不带我～小气鬼！' },
                    { speaker: 'narrator', text: '橙子撒着娇，声音软软糯糯的。' },
                    { speaker: 'narrator', text: '夏晚站在一旁，突然觉得自己有些多余。' },
                    { speaker: 'xia_wan', text: '（原来...他和橙子这么熟吗...）' },
                    { speaker: 'xia_wan', text: '（那种自然的亲昵感...）' },
                    { speaker: 'xia_wan', text: '（是我做不到的...）' },
                    { speaker: 'narrator', text: '橙子这才注意到夏晚。' },
                    { speaker: 'chengzi', text: '咦？夏晚姐也在呀！' },
                    { speaker: 'chengzi', text: '你们在聊什么呢～' },
                    { speaker: 'narrator', text: '她的眼神在两人之间来回打量。' },
                    { speaker: 'narrator', text: '夏晚心里突然有点紧张。' }
                ],
                choices: [
                    { text: '微笑着说"你们先聊，我先回去了"', next: 'xw_3_lr_comp_leave', affinity: { long_xinheng: 0 }, friendship: { long_xinheng: 2 } },
                    { text: '找个借口留下来，想看看谨言的反应', next: 'xw_3_lr_comp_stay', affinity: { long_xinheng: -3 }, friendship: { long_xinheng: -1 } },
                    { text: '大方地说"那我们一起聊吧！"', next: 'xw_3_lr_comp_join', affinity: { long_xinheng: 5 }, friendship: { long_xinheng: 3 } }
                ],
                next: null
            },

            {
                id: 'xw_3_lr_comp_leave',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '你们先聊吧，我回去了。' },
                    { speaker: 'narrator', text: '她挤出一个笑容。' },
                    { speaker: 'narrator', text: '尽量让自己看起来自然。' },
                    { speaker: 'chengzi', text: '好呀～夏晚姐慢走～' },
                    { speaker: 'narrator', text: '橙子甜甜地挥了挥手。' },
                    { speaker: 'long_xinheng', text: '夏晚...' },
                    { speaker: 'narrator', text: '谨言欲言又止。' },
                    { speaker: 'narrator', text: '但橙子拉着他不让走。' },
                    { speaker: 'narrator', text: '夏晚转身离开。' },
                    { speaker: 'narrator', text: '脚步比平时快了一些。' },
                    { speaker: 'xia_wan', text: '（果然...他们关系很好吧...）' },
                    { speaker: 'xia_wan', text: '（我算什么呢...）' },
                    { speaker: 'narrator', text: '她不敢回头。' },
                    { speaker: 'narrator', text: '怕看到他们并肩而立的画面。' },
                    { speaker: 'narrator', text: '更怕看到谨言...并不在意她离开的眼神。' }
                ],
                choices: [],
                next: 'xw_3_lr_end_selector'
            },

            {
                id: 'xw_3_lr_comp_stay',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '那个...我等一下还有事...' },
                    { speaker: 'narrator', text: '她找了个借口留下来。' },
                    { speaker: 'narrator', text: '想看看谨言会怎么反应。' },
                    { speaker: 'chengzi', text: '好呀～那夏晚姐先忙～' },
                    { speaker: 'narrator', text: '橙子笑嘻嘻地说。' },
                    { speaker: 'narrator', text: '依然紧紧挽着谨言的手臂。' },
                    { speaker: 'long_xinheng', text: '橙子，松手。' },
                    { speaker: 'chengzi', text: '不要～我好不容易找到你～' },
                    { speaker: 'narrator', text: '橙子撒着娇，却悄悄靠近。' },
                    { speaker: 'narrator', text: '夏晚站在旁边。' },
                    { speaker: 'narrator', text: '看他们说笑，心里像打翻了调味瓶。' },
                    { speaker: 'xia_wan', text: '（他好像...并没有在意我的存在...）' },
                    { speaker: 'xia_wan', text: '（我在这里...只是在自讨没趣吧...）' },
                    { speaker: 'narrator', text: '她低下头，不想再看下去。' }
                ],
                choices: [],
                next: 'xw_3_lr_end_selector'
            },

            {
                id: 'xw_3_lr_comp_join',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '那我们一起聊吧！' },
                    { speaker: 'narrator', text: '她努力让自己的声音听起来轻松。' },
                    { speaker: 'chengzi', text: '好呀～人多热闹嘛！' },
                    { speaker: 'narrator', text: '橙子笑得很开心。' },
                    { speaker: 'narrator', text: '但夏晚注意到...' },
                    { speaker: 'narrator', text: '她的眼神里闪过一丝不易察觉的...审视。' },
                    { speaker: 'long_xinheng', text: '夏晚，你也在这...' },
                    { speaker: 'narrator', text: '谨言看到她，眼神似乎柔和了一些。' },
                    { speaker: 'chengzi', text: '谨言和夏晚姐很熟吗～' },
                    { speaker: 'chengzi', text: '怎么刚才两个人躲在角落里～' },
                    { speaker: 'long_xinheng', text: '橙子。' },
                    { speaker: 'narrator', text: '谨言的语气突然变得有点严肃。' },
                    { speaker: 'narrator', text: '橙子愣了一下，撒娇的表情收敛了。' },
                    { speaker: 'narrator', text: '夏晚心里一动。' },
                    { speaker: 'xia_wan', text: '（他...是在维护我吗...）' }
                ],
                choices: [],
                next: 'xw_3_lr_end_selector'
            },

            // =============================================
            // 谨言线多结局入口
            // =============================================
            {
                id: 'xw_3_lr_end_selector',
                title: '心动',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '...' }
                ],
                choices: [],
                next: null,
                isEndingSelector: true
            },

            // =============================================
            // 谨言线结局1：甜蜜心动
            // =============================================
            {
                id: 'xw_3_lr_end_he',
                title: '心动 - 甜蜜',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚怎么也睡不着。' },
                    { speaker: 'narrator', text: '脑海里一直回放着谨言说的那句话——' },
                    { speaker: 'narrator', text: '"你好像能看穿我所有的伪装。"' },
                    { speaker: 'xia_wan', text: '（原来...他一直都在笑着应付别人吗...）' },
                    { speaker: 'xia_wan', text: '（而他愿意在我面前，展示真正的自己...）' },
                    { speaker: 'narrator', text: '就在她胡思乱想的时候，手机震动了。' },
                    { speaker: 'narrator', text: '是谨言的消息。' },
                    { speaker: 'long_xinheng', text: '「睡了吗？」' },
                    { speaker: 'xia_wan', text: '！（这么晚了...他怎么还没睡？）' },
                    { speaker: 'xia_wan', text: '「还没，谨言也没睡？」' },
                    { speaker: 'long_xinheng', text: '「睡不着。」' },
                    { speaker: 'long_xinheng', text: '「在想一些事情。」' },
                    { speaker: 'long_xinheng', text: '「你呢？」' },
                    { speaker: 'xia_wan', text: '「也在想事情。」' },
                    { speaker: 'long_xinheng', text: '「...是在想我吗？」' },
                    { speaker: 'xia_wan', text: '！！！（心跳到要跳出来）' },
                    { speaker: 'long_xinheng', text: '「开玩笑的。」' },
                    { speaker: 'long_xinheng', text: '「不过...我是在想你。」' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'xia_wan', text: '「谨言今晚怎么这么奇怪。」' },
                    { speaker: 'long_xinheng', text: '「可能是因为...今晚说出了真心话吧。」' },
                    { speaker: 'long_xinheng', text: '「很久没这样了。」' },
                    { speaker: 'long_xinheng', text: '「谢谢你，夏晚。」' },
                    { speaker: 'xia_wan', text: '「...谢我什么？」' },
                    { speaker: 'long_xinheng', text: '「愿意看见我。」' },
                    { speaker: 'narrator', text: '窗外，夏夜的虫鸣格外清晰。' },
                    { speaker: 'narrator', text: '手机屏幕的光映在夏晚脸上。' },
                    { speaker: 'narrator', text: '她知道，这个夏天的某个夜晚...' },
                    { speaker: 'narrator', text: '有什么东西，在两个年轻人之间悄然萌生。' },
                    { speaker: 'xia_wan', text: '「谨言，晚安。」' },
                    { speaker: 'long_xinheng', text: '「晚安，夏晚。」' },
                    { speaker: 'long_xinheng', text: '「明天见。」' },
                    { speaker: 'xia_wan', text: '「明天见。」' },
                    { speaker: 'narrator', text: '她把手机贴在胸口。' },
                    { speaker: 'narrator', text: '心跳还在砰砰地响。' },
                    { speaker: 'narrator', text: '但嘴角却忍不住上扬。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // =============================================
            // 谨言线结局2：开放心动
            // =============================================
            {
                id: 'xw_3_lr_end_open',
                title: '心动 - 开放',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '脑海里一直在回味谨言说的话。' },
                    { speaker: 'xia_wan', text: '（让人忍不住想靠近...）' },
                    { speaker: 'xia_wan', text: '（这句话到底是什么意思...）' },
                    { speaker: 'narrator', text: '她翻来覆去，怎么也睡不着。' },
                    { speaker: 'xia_wan', text: '（他说我不一样...）' },
                    { speaker: 'xia_wan', text: '（可是什么是不一样呢...）' },
                    { speaker: 'xia_wan', text: '（我没有勇气问清楚。）' },
                    { speaker: 'narrator', text: '窗外，城市的灯火渐渐稀疏。' },
                    { speaker: 'xia_wan', text: '（也许...有些答案不需要说出口。）' },
                    { speaker: 'xia_wan', text: '（也许...这样就很好。）' },
                    { speaker: 'narrator', text: '她这样安慰自己。' },
                    { speaker: 'narrator', text: '但心里那种不确定的感觉...' },
                    { speaker: 'narrator', text: '像一根细细的刺，扎在那里。' },
                    { speaker: 'xia_wan', text: '（明天的他...还会对我笑吗...）' },
                    { speaker: 'xia_wan', text: '（还是会继续戴上那副完美的面具...）' },
                    { speaker: 'narrator', text: '她闭上眼睛。' },
                    { speaker: 'narrator', text: '告诉自己不要想太多。' },
                    { speaker: 'narrator', text: '但那个问题，还是悄悄地在心里生了根——' },
                    { speaker: 'narrator', text: '他说的"不一样"...' },
                    { speaker: 'narrator', text: '究竟是什么意思呢？' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // =============================================
            // 谨言线结局3：友情心动
            // =============================================
            {
                id: 'xw_3_lr_end_friend',
                title: '心动 - 友情',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '她没有看手机。' },
                    { speaker: 'narrator', text: '只是盯着天花板发呆。' },
                    { speaker: 'xia_wan', text: '（原来...他一直都不是真的开心啊。）' },
                    { speaker: 'xia_wan', text: '（那些笑着的样子...都是演给别人看的。）' },
                    { speaker: 'narrator', text: '她叹了口气。' },
                    { speaker: 'xia_wan', text: '（也许我不该想太多。）' },
                    { speaker: 'xia_wan', text: '（他愿意在我面前卸下伪装...只是信任我吧。）' },
                    { speaker: 'xia_wan', text: '（我应该感到高兴才对。）' },
                    { speaker: 'narrator', text: '但不知道为什么。' },
                    { speaker: 'narrator', text: '心里有一种说不清的失落感。' },
                    { speaker: 'xia_wan', text: '（也许...我想太多了。）' },
                    { speaker: 'xia_wan', text: '（能做一个被他信任的朋友...已经很好了。）' },
                    { speaker: 'narrator', text: '她这样告诉自己。' },
                    { speaker: 'xia_wan', text: '（不应该奢求更多的。）' },
                    { speaker: 'narrator', text: '窗外，月光清冷地洒落。' },
                    { speaker: 'xia_wan', text: '（谨言...以后还会对我敞开心扉吗...）' },
                    { speaker: 'xia_wan', text: '（还是说...那只是今晚的例外...）' },
                    { speaker: 'narrator', text: '她翻了个身，闭上眼睛。' },
                    { speaker: 'narrator', text: '告诉自己，有些事情，不需要答案。' },
                    { speaker: 'narrator', text: '至少现在这样，就已经足够了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // =============================================
            // 谨言线结局4：遗憾心动
            // =============================================
            {
                id: 'xw_3_lr_end_be',
                title: '心动 - 遗憾',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躲在被子里。' },
                    { speaker: 'narrator', text: '无声地流着眼泪。' },
                    { speaker: 'xia_wan', text: '（为什么要赶走他...）' },
                    { speaker: 'xia_wan', text: '（明明...我想靠近他的...）' },
                    { speaker: 'narrator', text: '她想起自己说出口的那句话。' },
                    { speaker: 'narrator', text: '"谨言，你真的很烦。"' },
                    { speaker: 'narrator', text: '像一把锋利的刀。' },
                    { speaker: 'narrator', text: '割断了两个人之间刚刚建立起来的联系。' },
                    { speaker: 'xia_wan', text: '（我不是那个意思的...）' },
                    { speaker: 'xia_wan', text: '（我只是...不知道该怎么面对他...）' },
                    { speaker: 'xia_wan', text: '（他那些脆弱的样子...让我手足无措...）' },
                    { speaker: 'narrator', text: '窗外，月光被云层遮住了。' },
                    { speaker: 'narrator', text: '房间里一片昏暗。' },
                    { speaker: 'xia_wan', text: '（明天见面...该怎么面对他...）' },
                    { speaker: 'xia_wan', text: '（他会恨我吗...）' },
                    { speaker: 'xia_wan', text: '（还是说...从此就疏远我了...）' },
                    { speaker: 'narrator', text: '她不敢往下想。' },
                    { speaker: 'narrator', text: '只把自己缩成一团。' },
                    { speaker: 'narrator', text: '在这个寂静的夜晚。' },
                    { speaker: 'narrator', text: '任由后悔和遗憾，慢慢将她淹没。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '第二天在店里。' },
                    { speaker: 'narrator', text: '夏晚和谨言擦肩而过。' },
                    { speaker: 'narrator', text: '他没有看她。' },
                    { speaker: 'narrator', text: '就像什么都没发生过一样。' },
                    { speaker: 'narrator', text: '但那种疏离感...' },
                    { speaker: 'narrator', text: '让夏晚的心一阵阵地疼。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            }
        ]
    },

    // ========================================
    // 夏晚线 - 第三章：心动·方圆篇
    // ========================================
    xia_wan_chapter3_ganzhiyu: {
        title: '第三章：心动·方圆篇',
        theme: '心动升温与刀子伏笔（2025年5月-7月）',
        scenes: [

            // --- 场景1：日常相处 ---
            {
                id: 'xw_3_gz_1',
                title: '变化',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '2025年5月。' },
                    { speaker: 'narrator', text: '夏晚在店里工作已经有一段时间了。' },
                    { speaker: 'narrator', text: '她注意到，方圆最近好像有些不一样了。' },
                    { speaker: 'narrator', text: '以前的方圆，总是第一个到店里。' },
                    { speaker: 'narrator', text: '帮忙整理道具，主动带新人，笑起来特别有感染力。' },
                    { speaker: 'narrator', text: '但最近...他好像变懒散了。' },
                    { speaker: 'narrator', text: '经常迟到，有时候甚至直接请假不来。' },
                    { speaker: 'xia_wan', text: '（方圆最近怎么了...）' },
                    { speaker: 'xia_wan', text: '（以前他不是这样的...）' }
                ],
                choices: [],
                next: 'xw_3_gz_2'
            },

            // --- 场景2：发现异常 ---
            {
                id: 'xw_3_gz_2',
                title: '敷衍',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '今天夏晚主动找方圆请教问题。' },
                    { speaker: 'xia_wan', text: '方圆，这个剧本的节奏要怎么把握？' },
                    { speaker: 'gan_zhiyu', text: '啊...这个啊...' },
                    { speaker: 'narrator', text: '方圆看了一眼夏晚，然后又低下头看手机。' },
                    { speaker: 'gan_zhiyu', text: '就是...按剧本走呗，没什么特别的。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'xia_wan', text: '（方圆以前不是这样回答的...）' },
                    { speaker: 'xia_wan', text: '方圆...你是不是有心事？' },
                    { speaker: 'gan_zhiyu', text: '没有啊，怎么了？' },
                    { speaker: 'narrator', text: '他的语气听起来很敷衍。' },
                    { speaker: 'xia_wan', text: '没什么...谢谢方圆。' },
                    { speaker: 'gan_zhiyu', text: '嗯，不客气。' },
                    { speaker: 'narrator', text: '方圆又低下头，继续看手机。' },
                    { speaker: 'xia_wan', text: '（他以前...会认真回答我的问题的...）' },
                    { speaker: 'xia_wan', text: '（现在却...）' },
                    { speaker: 'narrator', text: '夏晚的心里涌起一阵失落。' },
                    { speaker: 'xia_wan', text: '（是他变了...还是我哪里做得不好？）' }
                ],
                choices: [
                    { text: '主动关心方圆', next: 'xw_3_gz_2_a', affinity: { gan_zhiyu: 5 }, friendship: { gan_zhiyu: 0 } },
                    { text: '默默观察，不打扰他', next: 'xw_3_gz_2_b', affinity: { gan_zhiyu: 0 }, friendship: { gan_zhiyu: 0 } }
                ]
            },

            // --- 场景2a：主动关心 ---
            {
                id: 'xw_3_gz_2_a',
                title: '关心',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '方圆...' },
                    { speaker: 'gan_zhiyu', text: '嗯？' },
                    { speaker: 'xia_wan', text: '你最近是不是遇到什么事了？' },
                    { speaker: 'gan_zhiyu', text: '...你想多了。' },
                    { speaker: 'xia_wan', text: '可是你以前不是这样的...' },
                    { speaker: 'xia_wan', text: '以前的你会认真回答我的问题...' },
                    { speaker: 'xia_wan', text: '会主动帮忙，会...' },
                    { speaker: 'gan_zhiyu', text: '夏晚。' },
                    { speaker: 'xia_wan', text: '嗯...？' },
                    { speaker: 'gan_zhiyu', text: '你很烦诶。' },
                    { speaker: 'narrator', text: '方圆说完就站起身走了。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'xia_wan', text: '（他是不是讨厌我了...）' },
                    { speaker: 'narrator', text: '夏晚站在原地，眼眶有点酸。' },
                    { speaker: 'xia_wan', text: '（我做错了什么吗...）' },
                    { speaker: 'xia_wan', text: '（为什么他突然对我这么冷淡...）' }
                ],
                choices: [],
                next: 'xw_3_gz_3'
            },

            // --- 场景2b：默默观察 ---
            {
                id: 'xw_3_gz_2_b',
                title: '观察',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '（算了...也许他只是需要空间吧...）' },
                    { speaker: 'narrator', text: '夏晚没有再追问。' },
                    { speaker: 'narrator', text: '但她开始默默观察方圆。' },
                    { speaker: 'narrator', text: '他还是会笑，但那种笑和以前不一样了。' },
                    { speaker: 'narrator', text: '以前是发自内心的，现在看起来像是在敷衍。' },
                    { speaker: 'narrator', text: '他还是会帮忙，但总是心不在焉的样子。' },
                    { speaker: 'xia_wan', text: '（他到底怎么了...）' },
                    { speaker: 'xia_wan', text: '（以前的方圆...真的好怀念啊...）' }
                ],
                choices: [],
                next: 'xw_3_gz_3'
            },

            // --- 场景3：端午节 ---
            {
                id: 'xw_3_gz_3',
                title: '端午节',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '端午节到了。' },
                    { speaker: 'narrator', text: '店里组织了聚餐唱歌。' },
                    { speaker: 'narrator', text: '方圆也来了，但看起来兴致不高。' },
                    { speaker: 'narrator', text: '大家都在热闹地聊天、唱歌。' },
                    { speaker: 'narrator', text: '方圆一个人坐在角落玩手机。' },
                    { speaker: 'xia_wan', text: '（他好像和这里格格不入...）' },
                    { speaker: 'xia_wan', text: '（以前的方圆...）' },
                    { speaker: 'xia_wan', text: '（一定是带动气氛的那个人...）' },
                    { speaker: 'narrator', text: '夏晚犹豫了一下，还是走了过去。' }
                ],
                choices: [],
                next: 'xw_3_gz_4'
            },

            // --- 场景4：单独聊天 ---
            {
                id: 'xw_3_gz_4',
                title: '角落里',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '方圆。' },
                    { speaker: 'gan_zhiyu', text: '嗯？你怎么过来了？' },
                    { speaker: 'xia_wan', text: '想找你聊聊。' },
                    { speaker: 'gan_zhiyu', text: '聊什么？' },
                    { speaker: 'xia_wan', text: '就...随便聊聊。' },
                    { speaker: 'narrator', text: '方圆看了她一眼，没有拒绝。' },
                    { speaker: 'xia_wan', text: '方圆...你还记得我们第一次见面吗？' },
                    { speaker: 'gan_zhiyu', text: '...记得。' },
                    { speaker: 'xia_wan', text: '那时候你特别热情，主动带我熟悉店里...' },
                    { speaker: 'xia_wan', text: '笑起来特别有感染力。' },
                    { speaker: 'xia_wan', text: '我一直在想...如果能变成像方圆一样的人就好了。' },
                    { speaker: 'narrator', text: '方圆沉默了很久。' },
                    { speaker: 'gan_zhiyu', text: '...夏晚。' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'gan_zhiyu', text: '谢谢你还记得那时候的我。' },
                    { speaker: 'gan_zhiyu', text: '说实话...我自己都快忘了。' },
                    { speaker: 'xia_wan', text: '方圆...？' },
                    { speaker: 'gan_zhiyu', text: '可能就是...热情用完了吧。' },
                    { speaker: 'gan_zhiyu', text: '一开始觉得什么都新鲜...后来就...' },
                    { speaker: 'narrator', text: '他没有说完，但夏晚听懂了。' },
                    { speaker: 'xia_wan', text: '（原来是这样...）' },
                    { speaker: 'xia_wan', text: '方圆...我理解你的感受。' },
                    { speaker: 'xia_wan', text: '但我还是想说...' },
                    { speaker: 'xia_wan', text: '不管你变成什么样，你都是那个方圆。' },
                    { speaker: 'xia_wan', text: '至少对我来说...一直都是。' },
                    { speaker: 'narrator', text: '方圆愣住了。' },
                    { speaker: 'gan_zhiyu', text: '...你这个人啊。' },
                    { speaker: 'gan_zhiyu', text: '真是...让人不知道该说什么好。' },
                    { speaker: 'narrator', text: '他的嘴角微微上扬。' },
                    { speaker: 'narrator', text: '那是夏晚好久没见过的笑容。' },
                    { speaker: 'xia_wan', text: '（这个笑容...和以前一样了...）' },
                    { speaker: 'narrator', text: '夏晚看着方圆，心里有个声音在说——' },
                    { speaker: 'xia_wan', text: '（我真的很想...让他找回以前的自己。）' },
                    { speaker: 'xia_wan', text: '方圆...你知道吗？' },
                    { speaker: 'xia_wan', text: '我当初来面试的时候，就是你面试的我。' },
                    { speaker: 'xia_wan', text: '你那时候跟我讲了很多关于怎么带本的事...' },
                    { speaker: 'xia_wan', text: '特别专业，特别有条理。' },
                    { speaker: 'xia_wan', text: '我当时就想，这个方圆好厉害啊。' },
                    { speaker: 'xia_wan', text: '（那时候的他...真的很耀眼。）' }
                ],
                choices: [
                    { text: '认真地说「方圆真的很厉害」', next: 'xw_3_gz_4_detail', affinity: { gan_zhiyu: 8 }, friendship: { gan_zhiyu: 5 }, confessionCondition: 'ganzhiyu' },
                    { text: '笑了笑，说「方圆要开心一点啊」', next: 'xw_3_gz_end_choice', affinity: { gan_zhiyu: 3 }, friendship: { gan_zhiyu: 3 } }
                ]
            },
            // --- 场景4_detail：眼睛里的光（双向确认·触发隐藏条件） ---
            {
                id: 'xw_3_gz_4_detail',
                title: '重新亮起的光',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '方圆...' },
                    { speaker: 'xia_wan', text: '你讲的时候，眼睛里有光。' },
                    { speaker: 'narrator', text: '夏晚的声音很轻。' },
                    { speaker: 'narrator', text: '像是在陈述一件很普通的事。' },
                    { speaker: 'narrator', text: '但方圆的动作停住了。' },
                    { speaker: 'gan_zhiyu', text: '...' },
                    { speaker: 'narrator', text: '他没有说话。' },
                    { speaker: 'narrator', text: '夏晚也没有追问。' },
                    { speaker: 'narrator', text: '两个人就这样安静地走着。' },
                    { speaker: 'narrator', text: '路灯把他们的影子拉得很长。' },
                    { speaker: 'narrator', text: '不知道过了多久，方圆终于开口了。' },
                    { speaker: 'gan_zhiyu', text: '...夏晚。' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'gan_zhiyu', text: '你知道吗...' },
                    { speaker: 'gan_zhiyu', text: '我好久没跟人说过这些了。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'gan_zhiyu', text: '说实话...' },
                    { speaker: 'gan_zhiyu', text: '我都快忘了自己以前是什么样子了。' },
                    { speaker: 'gan_zhiyu', text: '每天就是上班、下班...' },
                    { speaker: 'gan_zhiyu', text: '好像什么都无所谓一样。' },
                    { speaker: 'narrator', text: '他的声音很平静。' },
                    { speaker: 'narrator', text: '但夏晚听出了一丝不一样的东西。' },
                    { speaker: 'xia_wan', text: '方圆...' },
                    { speaker: 'xia_wan', text: '我很喜欢你刚才讲那些的样子。' },
                    { speaker: 'xia_wan', text: '认真的样子...特别好看。' },
                    { speaker: 'narrator', text: '方圆停下脚步。' },
                    { speaker: 'narrator', text: '他转过头，看着夏晚。' },
                    { speaker: 'narrator', text: '路灯在他眼睛里映出一点光。' },
                    { speaker: 'narrator', text: '很淡，但确实在那里。' },
                    { speaker: 'gan_zhiyu', text: '...谢谢你。' },
                    { speaker: 'narrator', text: '他的声音很轻。' },
                    { speaker: 'gan_zhiyu', text: '因为你...我想起了一些事。' },
                    { speaker: 'narrator', text: '夏晚的心跳漏了一拍。' },
                    { speaker: 'narrator', text: '她不知道该说什么，只是安静地看着他。' },
                    { speaker: 'gan_zhiyu', text: '以后...' },
                    { speaker: 'gan_zhiyu', text: '也可以跟你说吗？' },
                    { speaker: 'narrator', text: '夏晚笑了。' },
                    { speaker: 'xia_wan', text: '当然。' },
                    { speaker: 'xia_wan', text: '随时都可以。' },
                    { speaker: 'narrator', text: '方圆也笑了。' },
                    { speaker: 'narrator', text: '不是平时那种礼貌性的笑。' },
                    { speaker: 'narrator', text: '是真的在笑。' },
                    { speaker: 'narrator', text: '眼睛里的光，比刚才更亮了一点。' },
                    { speaker: 'xia_wan', text: '（他的眼睛...重新亮起来了...）' },
                    { speaker: 'xia_wan', text: '（我想...一直看着他这样的眼神。）' }
                ],
                choices: [],
                next: 'xw_3_gz_confess',
                autoTriggerCondition: 'ganzhiyu'
            },

            // --- 方圆线中间选择 ---
            {
                id: 'xw_3_gz_end_choice',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚看着方圆的笑容，心里涌起一股暖意。' },
                    { speaker: 'xia_wan', text: '（他好久没有这样笑过了...）' },
                    { speaker: 'xia_wan', text: '（我想...让他一直这样笑下去...）' },
                    { speaker: 'narrator', text: '她深吸一口气...' }
                ],
                choices: [
                    { text: '鼓起勇气，告诉他你的心意', next: 'xw_3_gz_confess', affinity: { gan_zhiyu: 8 }, friendship: { gan_zhiyu: 3 } },
                    { text: '保持沉默，只是笑了笑', next: 'xw_3_gz_stay', affinity: { gan_zhiyu: 3 }, friendship: { gan_zhiyu: 5 } },
                    { text: '主动提出帮他找回热情', next: 'xw_3_gz_help', affinity: { gan_zhiyu: 5 }, friendship: { gan_zhiyu: 4 } }
                ],
                next: null
            },

            {
                id: 'xw_3_gz_confess',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '方圆...' },
                    { speaker: 'xia_wan', text: '其实我...' },
                    { speaker: 'narrator', text: '话到嘴边，却又说不出口了。' },
                    { speaker: 'xia_wan', text: '...其实我很高兴，能看到方圆这样的笑容。' },
                    { speaker: 'gan_zhiyu', text: '...' },
                    { speaker: 'narrator', text: '方圆愣了一下，然后轻轻笑了。' },
                    { speaker: 'gan_zhiyu', text: '你这家伙...说话总是这么直接。' },
                    { speaker: 'xia_wan', text: '因为是对方圆说的嘛。' },
                    { speaker: 'gan_zhiyu', text: '...什么意思？' },
                    { speaker: 'xia_wan', text: '（算了...还不是时候...）' },
                    { speaker: 'xia_wan', text: '没什么！' },
                    { speaker: 'narrator', text: '月光下，方圆的眼神变得柔和了一些。' }
                ],
                choices: [],
                next: 'xw_3_gz_competition'
            },

            {
                id: 'xw_3_gz_stay',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '方圆...' },
                    { speaker: 'xia_wan', text: '你不用谢我。' },
                    { speaker: 'xia_wan', text: '我只是觉得...' },
                    { speaker: 'xia_wan', text: '能遇到方圆，是一件很幸运的事。' },
                    { speaker: 'gan_zhiyu', text: '...' },
                    { speaker: 'narrator', text: '方圆看着夏晚，眼神里闪过一丝复杂的情绪。' },
                    { speaker: 'gan_zhiyu', text: '你这家伙...说话总是这么认真。' },
                    { speaker: 'gan_zhiyu', text: '...不过，谢谢你。' },
                    { speaker: 'xia_wan', text: '（他的眼神...好温柔...）' },
                    { speaker: 'narrator', text: '月光下，两人相视一笑。' }
                ],
                choices: [],
                next: 'xw_3_gz_competition'
            },

            {
                id: 'xw_3_gz_help',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '方圆...' },
                    { speaker: 'xia_wan', text: '既然热情用完了...' },
                    { speaker: 'xia_wan', text: '那我们一起找回来吧？' },
                    { speaker: 'gan_zhiyu', text: '...找回来？' },
                    { speaker: 'xia_wan', text: '嗯！我可以陪方圆一起！' },
                    { speaker: 'xia_wan', text: '不管是带本还是做任何事...' },
                    { speaker: 'xia_wan', text: '我都可以当方圆的搭档！' },
                    { speaker: 'gan_zhiyu', text: '...' },
                    { speaker: 'narrator', text: '方圆愣了一下，然后笑了。' },
                    { speaker: 'gan_zhiyu', text: '你这个人啊...' },
                    { speaker: 'gan_zhiyu', text: '还真是让人不知道该怎么拒绝。' },
                    { speaker: 'xia_wan', text: '那方圆是答应了？' },
                    { speaker: 'gan_zhiyu', text: '...算是吧。' },
                    { speaker: 'xia_wan', text: '（这样就能...一直陪在方圆身边了...）' }
                ],
                choices: [],
                next: 'xw_3_gz_competition'
            },

            // --- 方圆线竞争机制：170的接近 ---
            {
                id: 'xw_3_gz_competition',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚和方圆正聊着。' },
                    { speaker: 'narrator', text: '突然，一个高挑的身影出现在不远处。' },
                    { speaker: 'narrator', text: '是170，她小跑着过来。' },
                    { speaker: 'narrator', text: '她和方圆是搭档，经常一起研究新本。' },
                    { speaker: 'yu_haitong', text: '方圆～我找你半天了！' },
                    { speaker: 'narrator', text: '她一过来就自然地挽住了方圆的手臂。' },
                    { speaker: 'narrator', text: '像是已经做过无数次一样。' },
                    { speaker: 'yu_haitong', text: '新到了个城限本，你知道吗！我超想开的！' },
                    { speaker: 'gan_zhiyu', text: '...是吗。' },
                    { speaker: 'yu_haitong', text: '你陪我开嘛～你带本最好了！' },
                    { speaker: 'narrator', text: '方圆被她拉着说话。' },
                    { speaker: 'narrator', text: '但眼神却有意无意地往夏晚这边瞟。' },
                    { speaker: 'xia_wan', text: '（170和方圆...好像很熟的样子...）' },
                    { speaker: 'xia_wan', text: '（那种自然的亲近感...）' },
                    { speaker: 'xia_wan', text: '（是我做不到的...）' },
                    { speaker: 'narrator', text: '170这才注意到夏晚。' },
                    { speaker: 'yu_haitong', text: '哎？夏晚也在呀！' },
                    { speaker: 'yu_haitong', text: '你们刚才在聊什么呢～' },
                    { speaker: 'narrator', text: '她的眼神里带着一丝探究。' },
                    { speaker: 'narrator', text: '夏晚心里突然有点紧张。' }
                ],
                choices: [
                    { text: '微笑着说"你们先聊吧，我先回去了"', next: 'xw_3_gz_comp_leave', affinity: { gan_zhiyu: 0 }, friendship: { gan_zhiyu: 2 } },
                    { text: '找个借口留下来，想看看方圆会不会理我', next: 'xw_3_gz_comp_stay', affinity: { gan_zhiyu: 3 }, friendship: { gan_zhiyu: 3 } },
                    { text: '提醒方圆之前答应过教你带动气氛', next: 'xw_3_gz_comp_invite', affinity: { gan_zhiyu: 5 }, friendship: { gan_zhiyu: 2 } }
                ],
                next: null
            },

            {
                id: 'xw_3_gz_comp_leave',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '那个...你们先聊吧，我先回去了。' },
                    { speaker: 'narrator', text: '她挤出一个笑容。' },
                    { speaker: 'narrator', text: '尽量让自己看起来无所谓。' },
                    { speaker: 'yu_haitong', text: '好呀～夏晚慢走～' },
                    { speaker: 'narrator', text: '170甜甜地挥了挥手。' },
                    { speaker: 'gan_zhiyu', text: '...这么快就走？' },
                    { speaker: 'narrator', text: '方圆的声音听起来有些意外。' },
                    { speaker: 'xia_wan', text: '嗯...我还有点事。' },
                    { speaker: 'narrator', text: '她没有看方圆的眼睛。' },
                    { speaker: 'narrator', text: '转身快步离开了。' },
                    { speaker: 'xia_wan', text: '（他刚才说...这么快就走？）' },
                    { speaker: 'xia_wan', text: '（是在意我吗...）' },
                    { speaker: 'xia_wan', text: '（还是只是客气...）' },
                    { speaker: 'narrator', text: '她不敢回头确认。' },
                    { speaker: 'narrator', text: '怕自己会期待更多。' }
                ],
                choices: [],
                next: 'xw_3_gz_end_selector'
            },

            {
                id: 'xw_3_gz_comp_stay',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '那个...我再等一下...' },
                    { speaker: 'narrator', text: '她找了个借口留下来。' },
                    { speaker: 'narrator', text: '想看看方圆会不会主动理她。' },
                    { speaker: 'yu _haitong', text: '好呀～那夏晚一起听呗～' },
                    { speaker: 'narrator', text: '170笑着说。' },
                    { speaker: 'narrator', text: '依然挽着方圆的手臂，没有松手。' },
                    { speaker: 'gan_zhiyu', text: '170，你这样我怎么走路。' },
                    { speaker: 'yu _haitong', text: '哼，小气鬼～' },
                    { speaker: 'narrator', text: '170撅着嘴，但还是松开了。' },
                    { speaker: 'narrator', text: '夏晚站在旁边。' },
                    { speaker: 'narrator', text: '看他们有说有笑，心里酸酸的。' },
                    { speaker: 'xia_wan', text: '（他们真的好熟...）' },
                    { speaker: 'xia_wan', text: '（我在这里...是不是很多余...）' },
                    { speaker: 'narrator', text: '她低下头，不想再看。' }
                ],
                choices: [],
                next: 'xw_3_gz_end_selector'
            },

            {
                id: 'xw_3_gz_comp_invite',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '方圆...' },
                    { speaker: 'xia_wan', text: '你之前说答应教我带动气氛的...' },
                    { speaker: 'xia_wan', text: '还说想找回当初的热情...？' },
                    { speaker: 'narrator', text: '她的声音有点小。' },
                    { speaker: 'narrator', text: '但还是说出来了。' },
                    { speaker: 'yu _haitong', text: '哎？可是我在问方圆事情诶...' },
                    { speaker: 'narrator', text: '170的语气里带着一丝不悦。' },
                    { speaker: 'narrator', text: '方圆看了夏晚一眼。' },
                    { speaker: 'narrator', text: '又看了170一眼。' },
                    { speaker: 'gan_zhiyu', text: '...下次吧，170。' },
                    { speaker: 'gan_zhiyu', text: '我答应她的事，得先做完。' },
                    { speaker: 'yu _haitong', text: '哼...那下次一定要说哦！' },
                    { speaker: 'narrator', text: '170撅着嘴走了。' },
                    { speaker: 'narrator', text: '夏晚愣在原地。' },
                    { speaker: 'xia_wan', text: '（他...真的选了我？）' }
                ],
                choices: [],
                next: 'xw_3_gz_end_selector'
            },

            // 方圆线多结局入口
            {
                id: 'xw_3_gz_end_selector',
                title: '心动',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '...' }
                ],
                choices: [],
                next: null,
                isEndingSelector: true
            },

            // 方圆线结局1：甜蜜心动
            {
                id: 'xw_3_gz_end_he',
                title: '心动 - 甜蜜',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '翻看着手机相册里今天的照片。' },
                    { speaker: 'narrator', text: '有大家一起吃饭的。' },
                    { speaker: 'narrator', text: '有她偷拍的方圆的侧脸。' },
                    { speaker: 'narrator', text: '还有最后那个...他真正笑起来的模样。' },
                    { speaker: 'xia_wan', text: '（原来方圆笑起来...是这个样子的啊。）' },
                    { speaker: 'xia_wan', text: '（好久没看到了。）' },
                    { speaker: 'narrator', text: '手机突然震动了。' },
                    { speaker: 'narrator', text: '是方圆的消息。' },
                    { speaker: 'gan_zhiyu', text: '「睡了吗？」' },
                    { speaker: 'xia_wan', text: '！（方圆居然主动发消息？）' },
                    { speaker: 'xia_wan', text: '「还没～方圆也没睡？」' },
                    { speaker: 'gan_zhiyu', text: '「在打游戏。」' },
                    { speaker: 'gan_zhiyu', text: '「睡不着。」' },
                    { speaker: 'xia_wan', text: '「...是有什么事吗？」' },
                    { speaker: 'gan_zhiyu', text: '「没有。」' },
                    { speaker: 'gan_zhiyu', text: '「就是...想起今天你说的话了。」' },
                    { speaker: 'xia_wan', text: '（我的话？）' },
                    { speaker: 'gan_zhiyu', text: '「你说，不管我变成什么样，都是那个方圆。」' },
                    { speaker: 'gan_zhiyu', text: '「至少对你来说，一直都是。」' },
                    { speaker: 'gan_zhiyu', text: '「...挺让人高兴的。」' },
                    { speaker: 'xia_wan', text: '「...方圆。」' },
                    { speaker: 'xia_wan', text: '「我会一直这么说的。」' },
                    { speaker: 'gan_zhiyu', text: '「...」' },
                    { speaker: 'gan_zhiyu', text: '「那就这么说定了。」' },
                    { speaker: 'gan_zhiyu', text: '「明天店里见。」' },
                    { speaker: 'xia_wan', text: '「好！晚安方圆！」' },
                    { speaker: 'gan_zhiyu', text: '「晚安，小搭档。」' },
                    { speaker: 'xia_wan', text: '（小搭档...！）' },
                    { speaker: 'narrator', text: '夏晚抱着手机，在床上滚了好几圈。' },
                    { speaker: 'narrator', text: '嘴角怎么都压不下去。' },
                    { speaker: 'narrator', text: '窗外的月光洒进来。' },
                    { speaker: 'narrator', text: '照在她红扑扑的脸上。' },
                    { speaker: 'narrator', text: '这个夏天...' },
                    { speaker: 'narrator', text: '好像变得不太一样了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // 方圆线结局2：开放心动
            {
                id: 'xw_3_gz_end_open',
                title: '心动 - 开放',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '回想着今天方圆的那个笑容。' },
                    { speaker: 'narrator', text: '很久没见到的那种。' },
                    { speaker: 'narrator', text: '像是冬日里突然洒进来的一缕阳光。' },
                    { speaker: 'xia_wan', text: '（是我让他笑的吗...）' },
                    { speaker: 'xia_wan', text: '（还是说...只是碰巧？）' },
                    { speaker: 'narrator', text: '她不敢问。' },
                    { speaker: 'narrator', text: '怕答案不是她期待的那样。' },
                    { speaker: 'xia_wan', text: '（也许...保持这样就好了。）' },
                    { speaker: 'xia_wan', text: '（能让他偶尔笑一笑...）' },
                    { speaker: 'xia_wan', text: '（也许就够了。）' },
                    { speaker: 'narrator', text: '但心里总有一个小小的声音在说。' },
                    { speaker: 'xia_wan', text: '（真的...够了吗？）' },
                    { speaker: 'narrator', text: '窗外，城市的霓虹渐渐暗淡。' },
                    { speaker: 'narrator', text: '夏晚把那个问题压在心底。' },
                    { speaker: 'narrator', text: '告诉自己，有些事情不要想太多。' },
                    { speaker: 'narrator', text: '明天的事，明天再说。' },
                    { speaker: 'narrator', text: '至少今天...那个笑容是真的。' },
                    { speaker: 'narrator', text: '至于明天，后天，以后的每一天...' },
                    { speaker: 'narrator', text: '就交给时间来回答吧。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // 方圆线结局3：友情心动
            {
                id: 'xw_3_gz_end_friend',
                title: '心动 - 友情',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '想起今天方圆说的那些话。' },
                    { speaker: 'narrator', text: '关于热情用完了。' },
                    { speaker: 'narrator', text: '关于不知道想要什么。' },
                    { speaker: 'xia_wan', text: '（原来方圆也会有这样的时候啊...）' },
                    { speaker: 'xia_wan', text: '（看起来那么耀眼的人...）' },
                    { speaker: 'xia_wan', text: '（也会有找不到方向的时候。）' },
                    { speaker: 'narrator', text: '她翻了个身，叹了口气。' },
                    { speaker: 'xia_wan', text: '（也许我不该奢望太多。）' },
                    { speaker: 'xia_wan', text: '（能当一个让他信任的朋友...）' },
                    { speaker: 'xia_wan', text: '（能在他需要的时候陪他说说话...）' },
                    { speaker: 'xia_wan', text: '（这样就够了。）' },
                    { speaker: 'narrator', text: '窗外，月光静静地洒落。' },
                    { speaker: 'xia_wan', text: '（方圆...）' },
                    { speaker: 'xia_wan', text: '（希望你能找回当初的热情。）' },
                    { speaker: 'xia_wan', text: '（不管最后能不能找到。）' },
                    { speaker: 'xia_wan', text: '（我都会支持你的。）' },
                    { speaker: 'narrator', text: '她闭上眼睛。' },
                    { speaker: 'narrator', text: '心里虽然有些失落。' },
                    { speaker: 'narrator', text: '但更多的是一种平静的温暖。' },
                    { speaker: 'narrator', text: '能陪在他身边...就已经很好了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // 方圆线结局4：遗憾心动
            {
                id: 'xw_3_gz_end_be',
                title: '心动 - 遗憾',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '眼泪止不住地流。' },
                    { speaker: 'xia_wan', text: '（我说什么了...）' },
                    { speaker: 'xia_wan', text: '（为什么要说他"你很烦"...）' },
                    { speaker: 'narrator', text: '她想起方圆当时的表情。' },
                    { speaker: 'narrator', text: '愣了一下，然后转身离开。' },
                    { speaker: 'narrator', text: '从那以后，他就没有再主动和她说过话。' },
                    { speaker: 'xia_wan', text: '（明明...我想说的是别的...）' },
                    { speaker: 'xia_wan', text: '（明明...我想让他振作起来的...）' },
                    { speaker: 'xia_wan', text: '（为什么变成这样了...）' },
                    { speaker: 'narrator', text: '窗外的月光清冷。' },
                    { speaker: 'xia_wan', text: '（是因为我说错话了吗...）' },
                    { speaker: 'xia_wan', text: '（还是说...他本来就不想对我敞开心扉...）' },
                    { speaker: 'narrator', text: '她不敢去问。' },
                    { speaker: 'narrator', text: '怕得到的答案，会让一切变得更糟。' },
                    { speaker: 'narrator', text: '只能把那些没说出口的话...' },
                    { speaker: 'narrator', text: '都埋在心底。' },
                    { speaker: 'narrator', text: '变成一道越来越深的裂痕。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '第二天在店里。' },
                    { speaker: 'narrator', text: '夏晚远远地看着方圆。' },
                    { speaker: 'narrator', text: '他在笑，和往常一样。' },
                    { speaker: 'narrator', text: '但那种笑容...好像离她很远很远。' },
                    { speaker: 'narrator', text: '再也没有那天晚上的温度了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // --- 方圆线结局 ---
            {
                id: 'xw_3_gz_end',
                title: '心动',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '脑海里回放着和方圆的对话。' },
                    { speaker: 'xia_wan', text: '（他说的热情用完了...）' },
                    { speaker: 'xia_wan', text: '（听起来好像很疲惫...）' },
                    { speaker: 'xia_wan', text: '（我能为他做什么呢...）' },
                    { speaker: 'narrator', text: '她翻了个身，叹了口气。' },
                    { speaker: 'xia_wan', text: '（但至少...我看到了他那个笑容...）' },
                    { speaker: 'xia_wan', text: '（和以前一样的那个笑容...）' },
                    { speaker: 'narrator', text: '（也许这就是...心动的感觉吧...）' },
                    { speaker: 'narrator', text: '窗外，月光静静地洒落。' },
                    { speaker: 'xia_wan', text: '（方圆...）' },
                    { speaker: 'xia_wan', text: '（不管你变成什么样...）' },
                    { speaker: 'xia_wan', text: '（我都希望你能开心。）' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '与此同时，在城市的另一边。' },
                    { speaker: 'narrator', text: '方圆躺在床上，看着手机发呆。' },
                    { speaker: 'gan_zhiyu', text: '（夏晚那个家伙...）' },
                    { speaker: 'gan_zhiyu', text: '（说的话还挺让人在意的...）' },
                    { speaker: 'gan_zhiyu', text: '（至少对我来说...一直都是...）' },
                    { speaker: 'gan_zhiyu', text: '（切...谁要你这样说啊。）' },
                    { speaker: 'narrator', text: '他嘴上这么说，心里却觉得暖暖的。' },
                    { speaker: 'narrator', text: '两个人，各怀心事。' },
                    { speaker: 'narrator', text: '却都在这个夏天，开始了对彼此的期待...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            }
        ]
    },

    // ========================================
    // 夏晚线 - 第三章：心动·吴琊篇
    // ========================================
    xia_wan_chapter3_wuya: {
        title: '第三章：心动·吴琊篇',
        theme: '心动升温与刀子伏笔（2025年5月-7月）',
        scenes: [

            // --- 场景1：日常相处 ---
            {
                id: 'xw_3_wy_1',
                title: '吴琊',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '2025年5月。' },
                    { speaker: 'narrator', text: '夏晚在店里工作已经有一段时间了。' },
                    { speaker: 'narrator', text: '她注意到，吴琊总是独来独往。' },
                    { speaker: 'narrator', text: '和其他人相比，他好像总是显得很安静。' },
                    { speaker: 'narrator', text: '有时候店里很热闹，他却一个人站在旁边。' },
                    { speaker: 'narrator', text: '看起来好像想融入大家，但又不知道该怎么做。' },
                    { speaker: 'xia_wan', text: '（吴琊...好像有点孤独...）' },
                    { speaker: 'xia_wan', text: '（他是不是不知道该怎么和人相处...）' }
                ],
                choices: [],
                next: 'xw_3_wy_2'
            },

            // --- 场景2：观察 ---
            {
                id: 'xw_3_wy_2',
                title: '想靠近',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '这天，夏晚在观察吴琊。' },
                    { speaker: 'narrator', text: '大家围在一起聊天，吴琊站在不远处。' },
                    { speaker: 'narrator', text: '他好像想加入，但不知道该怎么开口。' },
                    { speaker: 'narrator', text: '站在那里，欲言又止。' },
                    { speaker: 'narrator', text: '最后还是默默地走开了。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'xia_wan', text: '（他看起来好像很想加入...）' },
                    { speaker: 'xia_wan', text: '（但又不知道该怎么开口...）' },
                    { speaker: 'narrator', text: '夏晚的心里涌起一种奇怪的感觉。' },
                    { speaker: 'xia_wan', text: '（这种感觉...好像能理解...）' },
                    { speaker: 'xia_wan', text: '（我也曾经这样过...想融入却不知道怎么做...）' }
                ],
                choices: [
                    { text: '主动去和吴琊说话', next: 'xw_3_wy_2_a', affinity: { wu_ya: 5 }, friendship: { wu_ya: 0 } },
                    { text: '默默观察，不打扰他', next: 'xw_3_wy_2_b', affinity: { wu_ya: 0 }, friendship: { wu_ya: 0 } }
                ]
            },

            // --- 场景2a：主动说话 ---
            {
                id: 'xw_3_wy_2_a',
                title: '主动',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '吴琊...' },
                    { speaker: 'narrator', text: '吴琊转过头，看到是夏晚，微微愣了一下。' },
                    { speaker: 'wu_ya', text: '...怎么了？' },
                    { speaker: 'xia_wan', text: '那个...我想请教你一个问题...' },
                    { speaker: 'wu_ya', text: '...说。' },
                    { speaker: 'xia_wan', text: '（他看起来有点紧张...）' },
                    { speaker: 'xia_wan', text: '（原来他也会这样啊...）' },
                    { speaker: 'xia_wan', text: '就是...关于带本的时候怎么带动气氛...？' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'wu_ya', text: '你去找别人吧。' },
                    { speaker: 'xia_wan', text: '诶？可是我想问你啊...' },
                    { speaker: 'narrator', text: '吴琊又愣了一下。' },
                    { speaker: 'wu_ya', text: '...你为什么想问问我？' },
                    { speaker: 'xia_wan', text: '因为我觉得你一定有自己的经验啊...' },
                    { speaker: 'xia_wan', text: '虽然你话不多，但肯定很厉害。' },
                    { speaker: 'narrator', text: '吴琊沉默了一会儿。' },
                    { speaker: 'wu_ya', text: '...你这个人，还挺奇怪的。' },
                    { speaker: 'xia_wan', text: '诶？' },
                    { speaker: 'wu_ya', text: '没什么。' },
                    { speaker: 'wu_ya', text: '...那我简单说说吧。' },
                    { speaker: 'narrator', text: '他的语气还是冷冷的，但夏晚能感觉到——' },
                    { speaker: 'narrator', text: '他好像...比刚才放松了一点。' },
                    { speaker: 'xia_wan', text: '（原来他也会紧张啊...）' },
                    { speaker: 'xia_wan', text: '（想和人说话但不知道怎么开口...）' },
                    { speaker: 'xia_wan', text: '（这种感觉...我好像能理解。）' }
                ],
                choices: [],
                next: 'xw_3_wy_3'
            },

            // --- 场景2b：默默观察 ---
            {
                id: 'xw_3_wy_2_b',
                title: '观察',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '（算了...也许他只是想一个人待着...）' },
                    { speaker: 'narrator', text: '夏晚没有打扰他。' },
                    { speaker: 'narrator', text: '但她一直在远处观察。' },
                    { speaker: 'narrator', text: '吴琊总是独来独往。' },
                    { speaker: 'narrator', text: '虽然看起来冷冷的，但夏晚总觉得——' },
                    { speaker: 'narrator', text: '他好像不是不想和人相处。' },
                    { speaker: 'narrator', text: '而是不太知道该怎么做。' },
                    { speaker: 'xia_wan', text: '（这种感觉...好像似曾相识...）' },
                    { speaker: 'xia_wan', text: '（我也曾经这样过...）' },
                    { speaker: 'xia_wan', text: '（想融入却不知道该做什么...）' },
                    { speaker: 'xia_wan', text: '（也许...他也只是需要一个机会？）' }
                ],
                choices: [],
                next: 'xw_3_wy_3'
            },

            // --- 场景3：端午节 ---
            {
                id: 'xw_3_wy_3',
                title: '端午节',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '端午节到了。' },
                    { speaker: 'narrator', text: '店里组织了聚餐唱歌。' },
                    { speaker: 'narrator', text: '夏晚注意到，吴琊一个人坐在角落里。' },
                    { speaker: 'narrator', text: '看着大家热闹，他好像也想加入。' },
                    { speaker: 'narrator', text: '但每次想开口，又不知道该说什么。' },
                    { speaker: 'narrator', text: '最后还是默默地低下了头。' },
                    { speaker: 'xia_wan', text: '（他看起来...有点落寞...）' },
                    { speaker: 'xia_wan', text: '（明明想和大家在一起，却不知道怎么做...）' },
                    { speaker: 'xia_wan', text: '（这种感觉...我太懂了...）' },
                    { speaker: 'xia_wan', text: '（也许我可以...）' }
                ],
                choices: [],
                next: 'xw_3_wy_4'
            },

            // --- 场景4：单独相处 ---
            {
                id: 'xw_3_wy_4',
                title: '角落里的对话',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚借口出去透气。' },
                    { speaker: 'narrator', text: '走到走廊的时候，看到吴琊也站在那里。' },
                    { speaker: 'narrator', text: '他一个人看着窗外，不知道在想什么。' },
                    { speaker: 'xia_wan', text: '吴琊...' },
                    { speaker: 'narrator', text: '吴琊转过头，看到夏晚，眼神有点意外。' },
                    { speaker: 'wu_ya', text: '...你怎么出来了？' },
                    { speaker: 'xia_wan', text: '里面有点闷，出来透透气。' },
                    { speaker: 'xia_wan', text: '吴琊不出来一起玩吗？' },
                    { speaker: 'wu_ya', text: '...我不太擅长这种。' },
                    { speaker: 'xia_wan', text: '（果然...）' },
                    { speaker: 'xia_wan', text: '我也是。' },
                    { speaker: 'wu_ya', text: '...你？' },
                    { speaker: 'xia_wan', text: '嗯，我以前也是那种不知道该怎么和人相处的类型。' },
                    { speaker: 'xia_wan', text: '但后来我发现...也许不需要刻意做什么。' },
                    { speaker: 'xia_wan', text: '只要找到让自己舒服的方式就好。' },
                    { speaker: 'narrator', text: '吴琊沉默了一会儿。' },
                    { speaker: 'wu_ya', text: '...你很奇怪。' },
                    { speaker: 'xia_wan', text: '诶？' },
                    { speaker: 'wu_ya', text: '为什么要来找我说话。' },
                    { speaker: 'xia_wan', text: '因为...我觉得吴琊一个人待着好像有点孤单。' },
                    { speaker: 'xia_wan', text: '而且我好像...能理解那种感觉。' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '吴琊转过头，看着夏晚。' },
                    { speaker: 'wu_ya', text: '...谢谢。' },
                    { speaker: 'xia_wan', text: '诶？' },
                    { speaker: 'wu_ya', text: '你是第一个...这样直接和我说的人。' },
                    { speaker: 'narrator', text: '他的声音很轻，但夏晚听出了其中的认真。' },
                    { speaker: 'xia_wan', text: '（他的眼睛...好亮...）' },
                    { speaker: 'xia_wan', text: '吴琊不用谢我。' },
                    { speaker: 'xia_wan', text: '我只是...希望吴琊也能开心。' },
                    { speaker: 'narrator', text: '吴琊没有说话。' },
                    { speaker: 'narrator', text: '但他站在那里，好像比刚才放松了一点。' },
                    { speaker: 'narrator', text: '夜风吹过，吴琊突然开口——' },
                    { speaker: 'wu_ya', text: '...外面有点冷。' },
                    { speaker: 'xia_wan', text: '嗯...？' },
                    { speaker: 'wu_ya', text: '你穿得太少了。' },
                    { speaker: 'narrator', text: '他说着，脱下自己的外套，轻轻披在夏晚身上。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'xia_wan', text: '（他的外套...好温暖。）' },
                    { speaker: 'xia_wan', text: '（原来他也会...这样温柔。）' },
                    { speaker: 'xia_wan', text: '（这种感觉...是心动吗？）' }
                ],
                choices: [
                    { text: '轻声说「谢谢吴琊」，认真感受这一刻', next: 'xw_3_wy_4_detail', affinity: { wu_ya: 8 }, friendship: { wu_ya: 5 }, confessionCondition: 'wuya' },
                    { text: '笑着说「吴琊也冷吧」，把外套还给他', next: 'xw_3_wy_end_choice', affinity: { wu_ya: 3 }, friendship: { wu_ya: 3 } }
                ]
            },
            // --- 场景4_detail：不紧张了（双向确认·触发隐藏条件） ---
            {
                id: 'xw_3_wy_4_detail',
                title: '笨拙的温柔',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '谢谢吴琊...' },
                    { speaker: 'narrator', text: '夏晚的声音很轻。' },
                    { speaker: 'narrator', text: '她把外套拢了拢，裹紧了一点。' },
                    { speaker: 'narrator', text: '外套上有吴琊的味道。' },
                    { speaker: 'narrator', text: '很淡，像是雨后的空气。' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '吴琊没有说话。' },
                    { speaker: 'narrator', text: '他只是站在夏晚旁边，看着窗外的夜空。' },
                    { speaker: 'narrator', text: '夜风吹过，带着一点凉意。' },
                    { speaker: 'narrator', text: '但夏晚觉得身上很暖。' },
                    { speaker: 'narrator', text: '可能是因为外套。' },
                    { speaker: 'narrator', text: '也可能是因为旁边的人。' },
                    { speaker: 'narrator', text: '不知道过了多久，吴琊突然开口了。' },
                    { speaker: 'wu_ya', text: '夏晚。' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '他好像在犹豫要不要说。' },
                    { speaker: 'narrator', text: '夏晚安静地等着，没有追问。' },
                    { speaker: 'wu_ya', text: '和你在一起的时候...' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'wu_ya', text: '好像...没那么紧张了。' },
                    { speaker: 'narrator', text: '他的声音很轻。' },
                    { speaker: 'narrator', text: '夏晚的心跳漏了一拍。' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'narrator', text: '她转过头，看着吴琊。' },
                    { speaker: 'narrator', text: '他没有看她，只是低着头。' },
                    { speaker: 'narrator', text: '耳朵有点红。' },
                    { speaker: 'xia_wan', text: '（...原来他也会害羞啊。）' },
                    { speaker: 'xia_wan', text: '（这种笨拙的样子...好可爱。）' },
                    { speaker: 'narrator', text: '夏晚忍不住笑了。' },
                    { speaker: 'xia_wan', text: '我也是。' },
                    { speaker: 'narrator', text: '很轻的一句话。' },
                    { speaker: 'narrator', text: '但夏晚知道，吴琊听到了。' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '吴琊没有说话。' },
                    { speaker: 'narrator', text: '但他的耳朵更红了。' },
                    { speaker: 'narrator', text: '夏晚低下头，嘴角忍不住上扬。' },
                    { speaker: 'xia_wan', text: '（他笨拙的温柔...只对我展现。）' },
                    { speaker: 'xia_wan', text: '（我想...一直被他这样温柔地对待。）' }
                ],
                choices: [],
                next: 'xw_3_wy_confess',
                autoTriggerCondition: 'wuya'
            },

            // --- 吴琊线中间选择 ---
            {
                id: 'xw_3_wy_end_choice',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚看着吴琊的背影，心里涌起一股暖意。' },
                    { speaker: 'xia_wan', text: '（他好像...比刚才放松了一点...）' },
                    { speaker: 'xia_wan', text: '（这种感觉...好想继续靠近他...）' },
                    { speaker: 'narrator', text: '她做出了决定...' }
                ],
                choices: [
                    { text: '鼓起勇气，约他下次单独出来', next: 'xw_3_wy_invite', affinity: { wu_ya: 8 }, friendship: { wu_ya: 3 } },
                    { text: '保持沉默，只是对他笑了笑', next: 'xw_3_wy_stay', affinity: { wu_ya: 3 }, friendship: { wu_ya: 5 } },
                    { text: '问他更多关于他自己的事', next: 'xw_3_wy_ask', affinity: { wu_ya: 5 }, friendship: { wu_ya: 4 } }
                ],
                next: null
            },

            {
                id: 'xw_3_wy_invite',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '吴琊...' },
                    { speaker: 'xia_wan', text: '下次...能单独和你聊聊吗？' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '吴琊愣住了，显然没想到夏晚会这么说。' },
                    { speaker: 'wu_ya', text: '为什么...要单独？' },
                    { speaker: 'xia_wan', text: '因为我想多了解你啊。' },
                    { speaker: 'xia_wan', text: '而且我觉得...你也需要一个愿意听你说话的人吧？' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '吴琊沉默了很久。' },
                    { speaker: 'wu_ya', text: '...好。' },
                    { speaker: 'xia_wan', text: '！（心跳加速）' },
                    { speaker: 'xia_wan', text: '（他...答应了？）' },
                    { speaker: 'narrator', text: '月光下，吴琊的眼神变得柔和了一些。' }
                ],
                choices: [],
                next: 'xw_3_wy_competition'
            },

            {
                id: 'xw_3_wy_stay',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '吴琊...' },
                    { speaker: 'xia_wan', text: '你不用谢我。' },
                    { speaker: 'xia_wan', text: '我只是觉得...' },
                    { speaker: 'xia_wan', text: '能遇到吴琊，是一件很幸运的事。' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '吴琊看着夏晚，眼神里闪过一丝复杂的情绪。' },
                    { speaker: 'wu_ya', text: '你这人...说话总是这么直接。' },
                    { speaker: 'wu_ya', text: '...不过，谢谢你。' },
                    { speaker: 'xia_wan', text: '（他的眼神...好温柔...）' },
                    { speaker: 'narrator', text: '月光下，两人相视一笑。' }
                ],
                choices: [],
                next: 'xw_3_wy_competition'
            },

            {
                id: 'xw_3_wy_ask',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '吴琊...' },
                    { speaker: 'xia_wan', text: '我能问你一个问题吗？' },
                    { speaker: 'wu_ya', text: '...说。' },
                    { speaker: 'xia_wan', text: '你为什么...总是独来独往的？' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '吴琊沉默了很久。' },
                    { speaker: 'wu_ya', text: '...不知道怎么和人相处。' },
                    { speaker: 'xia_wan', text: '那吴琊...为什么不试试主动一点呢？' },
                    { speaker: 'wu_ya', text: '试过。没用。' },
                    { speaker: 'xia_wan', text: '那现在呢？有我在啊！' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '吴琊愣了一下，然后轻轻笑了。' },
                    { speaker: 'xia_wan', text: '（他笑了...！）' }
                ],
                choices: [],
                next: 'xw_3_wy_competition'
            },

            // --- 吴琊线竞争机制：橙子的主动 ---
            {
                id: 'xw_3_wy_competition',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚和吴琊正聊着。' },
                    { speaker: 'narrator', text: '突然，一个活泼的声音从身后传来。' },
                    { speaker: 'chengzi', text: '吴琊～原来你在这里！' },
                    { speaker: 'narrator', text: '橙子像一阵风似的跑过来。' },
                    { speaker: 'narrator', text: '吴琊玩过的本多，橙子有事没事总爱找他请教。' },
                    { speaker: 'narrator', text: '一把拉住了吴琊的袖子。' },
                    { speaker: 'chengzi', text: '找你好久啦！有个桌游想请教你～' },
                    { speaker: 'wu_ya', text: '...啊？' },
                    { speaker: 'narrator', text: '吴琊明显愣了一下。' },
                    { speaker: 'narrator', text: '他不太习惯被人这样亲近。' },
                    { speaker: 'chengzi', text: '就是那个新出的剧本嘛！你肯定玩过吧～' },
                    { speaker: 'narrator', text: '橙子完全没有注意到他的不自在。' },
                    { speaker: 'narrator', text: '依然热情地拉着他的袖子说个不停。' },
                    { speaker: 'xia_wan', text: '...' },
                    { speaker: 'narrator', text: '夏晚站在旁边。' },
                    { speaker: 'narrator', text: '看着橙子像只小鸟一样叽叽喳喳。' },
                    { speaker: 'narrator', text: '而吴琊只是沉默地站在那里。' },
                    { speaker: 'narrator', text: '看起来有些手足无措。' },
                    { speaker: 'xia_wan', text: '（橙子好主动啊...）' },
                    { speaker: 'xia_wan', text: '（我...好像做不到这样...）' }
                ],
                choices: [
                    { text: '悄悄地说"你们先聊吧"，然后安静离开', next: 'xw_3_wy_comp_leave', affinity: { wu_ya: 0 }, friendship: { wu_ya: 2 } },
                    { text: '安静地站在旁边，看看吴琊会不会注意到我', next: 'xw_3_wy_comp_stay', affinity: { wu_ya: 3 }, friendship: { wu_ya: 3 } },
                    { text: '小声说"吴琊之前答应过要教我带动气氛的..."', next: 'xw_3_wy_comp_invite', affinity: { wu_ya: 5 }, friendship: { wu_ya: 2 } }
                ],
                next: null
            },

            {
                id: 'xw_3_wy_comp_leave',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '那个...你们先聊吧...' },
                    { speaker: 'narrator', text: '她小声说。' },
                    { speaker: 'narrator', text: '尽量让自己显得不那么突兀。' },
                    { speaker: 'chengzi', text: '好呀～夏晚姐慢走～' },
                    { speaker: 'narrator', text: '橙子甜甜地挥了挥手。' },
                    { speaker: 'wu_ya', text: '夏晚...' },
                    { speaker: 'narrator', text: '吴琊叫了她一声。' },
                    { speaker: 'narrator', text: '但橙子又凑了过来。' },
                    { speaker: 'chengzi', text: '吴琊，你快看这个～' },
                    { speaker: 'narrator', text: '吴琊欲言又止。' },
                    { speaker: 'narrator', text: '最后还是低下了头。' },
                    { speaker: 'xia_wan', text: '（他...好像想说什么...）' },
                    { speaker: 'xia_wan', text: '（但橙子那么热情...）' },
                    { speaker: 'xia_wan', text: '（也许我不该打扰他们...）' },
                    { speaker: 'narrator', text: '她转身离开了。' },
                    { speaker: 'narrator', text: '心里有些空落落的。' }
                ],
                choices: [],
                next: 'xw_3_wy_end_selector'
            },

            {
                id: 'xw_3_wy_comp_stay',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '（我再待一会儿吧...）' },
                    { speaker: 'narrator', text: '她安静地站在旁边。' },
                    { speaker: 'narrator', text: '希望吴琊能看到她。' },
                    { speaker: 'chengzi', text: '吴琊你帮我分析一下这个角色呗～' },
                    { speaker: 'wu_ya', text: '...嗯。' },
                    { speaker: 'narrator', text: '吴琊被橙子拉着说话。' },
                    { speaker: 'narrator', text: '但他的眼神却不时往夏晚这边瞟。' },
                    { speaker: 'narrator', text: '像是在确认她还在不在。' },
                    { speaker: 'xia_wan', text: '（他在看我吗...？）' },
                    { speaker: 'xia_wan', text: '（还是我多想了...）' },
                    { speaker: 'narrator', text: '橙子完全没有注意到这些。' },
                    { speaker: 'narrator', text: '依然自顾自地说着。' },
                    { speaker: 'narrator', text: '但夏晚觉得...' },
                    { speaker: 'narrator', text: '能被他注意到。' },
                    { speaker: 'narrator', text: '好像就已经足够了。' }
                ],
                choices: [],
                next: 'xw_3_wy_end_selector'
            },

            {
                id: 'xw_3_wy_comp_invite',
                title: '心动',
                background: 'bg-street',
                dialogues: [
                    { speaker: 'xia_wan', text: '吴琊...' },
                    { speaker: 'xia_wan', text: '（鼓起勇气）' },
                    { speaker: 'xia_wan', text: '你之前答应过要教我带动气氛的...' },
                    { speaker: 'xia_wan', text: '现在...方便吗？' },
                    { speaker: 'narrator', text: '她的声音很小。' },
                    { speaker: 'narrator', text: '但还是说出来了。' },
                    { speaker: 'chengzi', text: '哎？可是我在问吴琊事情诶～' },
                    { speaker: 'narrator', text: '橙子撅起嘴。' },
                    { speaker: 'narrator', text: '吴琊看了看橙子。' },
                    { speaker: 'narrator', text: '又看了看夏晚。' },
                    { speaker: 'wu_ya', text: '...橙子。' },
                    { speaker: 'wu_ya', text: '下次吧。' },
                    { speaker: 'wu_ya', text: '既然答应了要教她...' },
                    { speaker: 'wu_ya', text: '得先做到。' },
                    { speaker: 'chengzi', text: '哼...那你记得欠我的！' },
                    { speaker: 'narrator', text: '橙子撅着嘴走了。' },
                    { speaker: 'narrator', text: '夏晚愣在原地。' },
                    { speaker: 'xia_wan', text: '（他...选了我...）' }
                ],
                choices: [],
                next: 'xw_3_wy_end_selector'
            },

            // =============================================
            // 吴琊线多结局入口
            // =============================================
            {
                id: 'xw_3_wy_end_selector',
                title: '心动',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '...' }
                ],
                choices: [],
                next: null,
                isEndingSelector: true
            },

            // 吴琊线结局1：甜蜜心动
            {
                id: 'xw_3_wy_end_he',
                title: '心动 - 甜蜜',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '心跳还是很快。' },
                    { speaker: 'narrator', text: '她刚才和吴琊互加了微信。' },
                    { speaker: 'narrator', text: '他居然主动提出来的。' },
                    { speaker: 'xia_wan', text: '（吴琊他...居然愿意主动加我...）' },
                    { speaker: 'xia_wan', text: '（是不是说明...他也想和我做朋友？）' },
                    { speaker: 'narrator', text: '就在她胡思乱想的时候。' },
                    { speaker: 'narrator', text: '手机震动了一下。' },
                    { speaker: 'narrator', text: '是吴琊的消息。' },
                    { speaker: 'wu_ya', text: '「那个...」' },
                    { speaker: 'wu_ya', text: '「今天谢谢你愿意主动找我说话。」' },
                    { speaker: 'xia_wan', text: '！（他居然主动发消息了！）' },
                    { speaker: 'xia_wan', text: '「不用谢！我也很高兴！」' },
                    { speaker: 'narrator', text: '过了好一会儿。' },
                    { speaker: 'narrator', text: '吴琊才发来下一条消息。' },
                    { speaker: 'wu_ya', text: '「其实...我不太会聊天。」' },
                    { speaker: 'wu_ya', text: '「但你好像不会让人觉得有压力。」' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'xia_wan', text: '「吴琊想说什么就说什么就好！」' },
                    { speaker: 'xia_wan', text: '「我不会介意的～」' },
                    { speaker: 'wu_ya', text: '「...好。」' },
                    { speaker: 'wu_ya', text: '「那...晚安。」' },
                    { speaker: 'xia_wan', text: '「晚安吴琊！」' },
                    { speaker: 'narrator', text: '夏晚盯着那句"晚安"。' },
                    { speaker: 'narrator', text: '看了好久好久。' },
                    { speaker: 'narrator', text: '吴琊平时那么沉默。' },
                    { speaker: 'narrator', text: '居然会主动说晚安。' },
                    { speaker: 'narrator', text: '这对她来说...' },
                    { speaker: 'narrator', text: '比任何情话都让人心动。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // 吴琊线结局2：开放心动
            {
                id: 'xw_3_wy_end_open',
                title: '心动 - 开放',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '翻看着和吴琊的聊天记录。' },
                    { speaker: 'narrator', text: '只有那么简单的几句话。' },
                    { speaker: 'narrator', text: '但她却看了很久。' },
                    { speaker: 'xia_wan', text: '（他说我是第一个这样直接和他说话的人...）' },
                    { speaker: 'xia_wan', text: '（这是什么意思...）' },
                    { speaker: 'xia_wan', text: '（还是说...只是客套话？）' },
                    { speaker: 'narrator', text: '她不敢去确认。' },
                    { speaker: 'xia_wan', text: '（万一...他只是出于礼貌呢...）' },
                    { speaker: 'xia_wan', text: '（万一...我想太多了呢...）' },
                    { speaker: 'narrator', text: '窗外，夜色越来越深。' },
                    { speaker: 'xia_wan', text: '（明天见面的时候...）' },
                    { speaker: 'xia_wan', text: '（他还会愿意和我说话吗...）' },
                    { speaker: 'xia_wan', text: '（还是说...又变回那个独来独往的吴琊？）' },
                    { speaker: 'narrator', text: '她把手机放下。' },
                    { speaker: 'narrator', text: '告诉自己不要想太多。' },
                    { speaker: 'narrator', text: '但心里那种隐隐的期待...' },
                    { speaker: 'narrator', text: '怎么也压不下去。' },
                    { speaker: 'narrator', text: '..."晚安"。' },
                    { speaker: 'narrator', text: '她对着空气轻轻说了一句。' },
                    { speaker: 'narrator', text: '不知道是说给明天的自己听的...' },
                    { speaker: 'narrator', text: '还是说给那个沉默寡言的吴琊的。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // 吴琊线结局3：友情心动
            {
                id: 'xw_3_wy_end_friend',
                title: '心动 - 友情',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '想着今天和吴琊的对话。' },
                    { speaker: 'xia_wan', text: '（原来他不是不想说话...）' },
                    { speaker: 'xia_wan', text: '（只是不知道怎么开口啊...）' },
                    { speaker: 'xia_wan', text: '（和我以前好像...）' },
                    { speaker: 'narrator', text: '她想起自己刚来这个城市的时候。' },
                    { speaker: 'narrator', text: '也是一个人，不知道怎么和人相处。' },
                    { speaker: 'narrator', text: '那种孤独的感觉，她太懂了。' },
                    { speaker: 'xia_wan', text: '（也许我不能帮他更多...）' },
                    { speaker: 'xia_wan', text: '（但至少...他知道我愿意和他说话。）' },
                    { speaker: 'xia_wan', text: '（这样就够了。）' },
                    { speaker: 'narrator', text: '她翻了个身，闭上眼睛。' },
                    { speaker: 'xia_wan', text: '（吴琊...）' },
                    { speaker: 'xia_wan', text: '（希望有一天你能找到属于你的方式。）' },
                    { speaker: 'xia_wan', text: '（能让你不再害怕开口。）' },
                    { speaker: 'narrator', text: '窗外，月光很温柔。' },
                    { speaker: 'narrator', text: '夏晚的嘴角浮起一丝微笑。' },
                    { speaker: 'narrator', text: '能成为他愿意开口的理由之一...' },
                    { speaker: 'narrator', text: '好像也是一件很幸福的事呢。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            },

            // 吴琊线结局4：遗憾心动
            {
                id: 'xw_3_wy_end_be',
                title: '心动 - 遗憾',
                background: 'bg-dorm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                    { speaker: 'narrator', text: '脑海里一直回放着聚餐时的场景。' },
                    { speaker: 'narrator', text: '她看到吴琊一个人站在角落。' },
                    { speaker: 'narrator', text: '想加入大家，但始终迈不出那一步。' },
                    { speaker: 'xia_wan', text: '（我应该去和他说话的...）' },
                    { speaker: 'xia_wan', text: '（为什么我没有去...）' },
                    { speaker: 'narrator', text: '她想起吴琊看她时的眼神。' },
                    { speaker: 'narrator', text: '那种渴望又闪躲的目光。' },
                    { speaker: 'xia_wan', text: '（他一定很孤独吧...）' },
                    { speaker: 'xia_wan', text: '（而我...明明可以靠近他的...）' },
                    { speaker: 'xia_wan', text: '（为什么就是不敢呢...）' },
                    { speaker: 'narrator', text: '窗外，月光清冷。' },
                    { speaker: 'xia_wan', text: '（明天一定要去和他说话...）' },
                    { speaker: 'xia_wan', text: '（一定要...）' },
                    { speaker: 'narrator', text: '但她知道。' },
                    { speaker: 'narrator', text: '有些机会错过了就是错过了。' },
                    { speaker: 'narrator', text: '明天见面的时候...' },
                    { speaker: 'narrator', text: '吴琊还会记得她是谁吗？' },
                    { speaker: 'narrator', text: '还是会继续一个人站在那里...' },
                    { speaker: 'narrator', text: '看着热闹的人群，默默等待着什么。' },
                    { speaker: 'narrator', text: '..."为什么我不敢呢..."' },
                    { speaker: 'narrator', text: '她把这句话咽进肚子里。' },
                    { speaker: 'narrator', text: '闭上眼睛，假装睡着。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
                ],
                choices: [],
                next: null
            }
        ]
    },

    // 夏晚线 - 第四章：抉择
    xia_wan_chapter4: {
        title: '第四章：抉择',
        theme: '感情线发展 + 告白（2025年7月-11月）',
        scenes: [

            // =============================================
            // 第一部分：阿昊离开
            // =============================================

            {
                id: 'xw_4_1',
                title: '告别',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '2025年7月初。' },
                    { speaker: 'narrator', text: '暑假开始了。' },
                    { speaker: 'narrator', text: '但对夏晚来说，这个夏天来得比往年都要沉重。' },
                    { speaker: 'narrator', text: '因为今天，是阿昊最后一天上班。' },
                    { speaker: 'narrator', text: '大家聚在休息室里，气氛有些微妙。' },
                    { speaker: 'ahao', text: '好了，人都到齐了？' },
                    { speaker: 'narrator', text: '阿昊站在中间，脸上带着有些勉强的笑容。' },
                    { speaker: 'ahao', text: '我就直说了吧...' },
                    { speaker: 'ahao', text: '这个月底，我就不来了。' },
                    { speaker: 'narrator', text: '没有人说话。' },
                    { speaker: 'narrator', text: '橙子低着头，手指绞着衣角。' },
                    { speaker: 'narrator', text: '170的眼眶有点红。' },
                    { speaker: 'narrator', text: '方圆靠在墙边，脸上没了平时的玩世不恭。' },
                    { speaker: 'narrator', text: '谨言欲言又止，最后只是叹了口气。' },
                    { speaker: 'narrator', text: '木星沉默地站在一旁。' },
                    { speaker: 'narrator', text: '吴琊低着头，不知道在想什么。' },
                    { speaker: 'xia_wan', text: '（阿昊...真的要走了...）' },
                    { speaker: 'xia_wan', text: '（明明几个月前，他还是那个认真负责的店长...）' },
                    { speaker: 'xia_wan', text: '（是什么时候开始变的呢...）' },
                    { speaker: 'narrator', text: '夏晚想起几个月前的阿昊。' },
                    { speaker: 'narrator', text: '那时候的他，虽然话不多，但眼神里有光。' },
                    { speaker: 'narrator', text: '会认真检查每一个房间的布置。' },
                    { speaker: 'narrator', text: '会耐心地给新人讲解每一个流程。' },
                    { speaker: 'narrator', text: '会给大家默默买奶茶。' },
                    { speaker: 'narrator', text: '可是后来...他开始打游戏。' },
                    { speaker: 'narrator', text: '开始迟到早退。' },
                    { speaker: 'narrator', text: '开始把工作推给别人。' },
                    { speaker: 'narrator', text: '大家劝过他，也恨过他。' },
                    { speaker: 'narrator', text: '但现在真的要走了...' },
                    { speaker: 'narrator', text: '心里只剩下一种说不清的滋味。' },
                    { speaker: 'xia_wan', text: '（又可怜，又恨。）' },
                    { speaker: 'xia_wan', text: '（怀念以前的他，也讨厌现在的他。）' },
                    { speaker: 'narrator', text: '阿昊看了看大家，清了清嗓子。' },
                    { speaker: 'ahao', text: '...行了，别这副表情。' },
                    { speaker: 'ahao', text: '又不是见不到了。' },
                    { speaker: 'narrator', text: '他的语气很轻松，但夏晚听出了其中的勉强。' },
                    { speaker: 'ahao', text: '以后有机会，还是可以一起吃饭的。' },
                    { speaker: 'ahao', text: '你们...好好的。' },
                    { speaker: 'narrator', text: '他说完这句话，就转身离开了。' },
                    { speaker: 'narrator', text: '夏晚看着他的背影。' },
                    { speaker: 'narrator', text: '那个曾经给过她第一份工作机会的人。' },
                    { speaker: 'narrator', text: '就这样走出了店门。' },
                    { speaker: 'narrator', text: '不知道以后还会不会再见。' }
                ],
                choices: [],
                next: 'xw_4_1_b'
            },

            {
                id: 'xw_4_1_b',
                title: '沉默',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '阿昊走后，休息室里安静了好一会儿。' },
                    { speaker: 'chengzi', text: '...好了，大家也别太伤感了。' },
                    { speaker: 'chengzi', text: '他走了，店还是要继续开的嘛。' },
                    { speaker: 'narrator', text: '橙子的声音有些沙哑，但努力保持着平静。' },
                    { speaker: 'yu_haitong', text: '（小声）橙子姐...你没事吧...' },
                    { speaker: 'chengzi', text: '我没事，就是有点感慨。' },
                    { speaker: 'chengzi', text: '毕竟阿昊哥是面试我进来的人...' },
                    { speaker: 'narrator', text: '橙子说着，眼眶又红了一圈。' },
                    { speaker: 'wu_ya', text: '...店里的事，我来接手。' },
                    { speaker: 'narrator', text: '一直沉默的吴琊突然开口了。' },
                    { speaker: 'narrator', text: '大家都愣了一下。' },
                    { speaker: 'xiao_tong', text: '吴琊...你确定？' },
                    { speaker: 'wu_ya', text: '嗯。' },
                    { speaker: 'wu_ya', text: '阿昊走了，总要有人负责。' },
                    { speaker: 'narrator', text: '他的语气很平静，但夏晚听出了其中的决心。' },
                    { speaker: 'long_xinheng', text: '卧槽，吴琊你认真的？' },
                    { speaker: 'wu_ya', text: '...你废话很多。' },
                    { speaker: 'long_xinheng', text: '行行行，我不说了。' },
                    { speaker: 'long_xinheng', text: '但是吴琊，有什么需要帮忙的尽管说。' },
                    { speaker: 'wu_ya', text: '...知道了。' },
                    { speaker: 'narrator', text: '夏晚看着大家。' },
                    { speaker: 'narrator', text: '虽然阿昊走了，但好像店里并没有乱。' },
                    { speaker: 'narrator', text: '吴琊站了出来，方圆和谨言也表示支持。' },
                    { speaker: 'narrator', text: '橙子和170虽然难过，但也在努力调整。' },
                    { speaker: 'xia_wan', text: '（这个夏天...好像要发生很多事呢...）' }
                ],
                choices: [],
                next: 'xw_4_1_c'
            },

            {
                id: 'xw_4_1_c',
                title: '离别前夕',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'narrator', text: '第二天。' },
                    { speaker: 'narrator', text: '夏晚来到店里收拾东西。' },
                    { speaker: 'narrator', text: '再过几天，她就要回老家过暑假了。' },
                    { speaker: 'narrator', text: '推开休息室的门，看到木星正在整理货架。' },
                    { speaker: 'xiao_tong', text: '来了？' },
                    { speaker: 'xia_wan', text: '嗯，来收东西。' },
                    { speaker: 'narrator', text: '夏晚走到自己的柜子前，开始整理。' },
                    { speaker: 'narrator', text: '木星继续手上的工作，没有多说什么。' },
                    { speaker: 'narrator', text: '但夏晚能感觉到，他的目光偶尔会落在她身上。' },
                    { speaker: 'xia_wan', text: '木星...' },
                    { speaker: 'xiao_tong', text: '嗯？' },
                    { speaker: 'xia_wan', text: '暑假...你会好好休息吗？' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'xiao_tong', text: '店里人手不够，我可能休息不了。' },
                    { speaker: 'xia_wan', text: '（人手不够...是因为阿昊走了吗...）' },
                    { speaker: 'xia_wan', text: '木星辛苦了...' },
                    { speaker: 'xiao_tong', text: '你也是。' },
                    { speaker: 'xiao_tong', text: '暑假好好陪陪家人。' },
                    { speaker: 'xia_wan', text: '嗯，我会的。' },
                    { speaker: 'narrator', text: '夏晚把东西收进包里。' },
                    { speaker: 'narrator', text: '木星不知什么时候走到了她身边。' },
                    { speaker: 'xiao_tong', text: '夏晚。' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'narrator', text: '木星犹豫了一下。' },
                    { speaker: 'xiao_tong', text: '...开学见。' },
                    { speaker: 'narrator', text: '就只是这简单的三个字。' },
                    { speaker: 'narrator', text: '但夏晚听出了其中的重量。' },
                    { speaker: 'xia_wan', text: '（开学见...）' },
                    { speaker: 'xia_wan', text: '（木星是在期待我回来吗...）' },
                    { speaker: 'xia_wan', text: '嗯，开学见。' },
                    { speaker: 'narrator', text: '她露出一个微笑。' },
                    { speaker: 'narrator', text: '虽然不知道这个夏天会发生什么。' },
                    { speaker: 'narrator', text: '但至少...她有了期待。' }
                ],
                choices: [
                    { text: '和木星多聊几句', next: 'xw_4_1_c1', affinity: { xiao_tong: 5 }, friendship: { xiao_tong: 3 } },
                    { text: '告别后离开', next: 'xw_4_2', affinity: { xiao_tong: 2 }, friendship: { xiao_tong: 5 } }
                ]
            },

            {
                id: 'xw_4_1_c1',
                title: '短暂相处',
                background: 'bg-shop',
                dialogues: [
                    { speaker: 'xia_wan', text: '木星...暑假你一个人没事吧？' },
                    { speaker: 'xiao_tong', text: '...为什么这么问？' },
                    { speaker: 'xia_wan', text: '就是觉得你平时话不多...' },
                    { speaker: 'xia_wan', text: '有什么事可以和我说。' },
                    { speaker: 'narrator', text: '木星愣了一下。' },
                    { speaker: 'narrator', text: '他好像没想到夏晚会说这样的话。' },
                    { speaker: 'xiao_tong', text: '...谢谢。' },
                    { speaker: 'xiao_tong', text: '你也是。' },
                    { speaker: 'xiao_tong', text: '暑假有什么事，也可以和我说。' },
                    { speaker: 'xia_wan', text: '！' },
                    { speaker: 'narrator', text: '夏晚的心跳漏了一拍。' },
                    { speaker: 'narrator', text: '木星说完就转过身去，继续整理货架。' },
                    { speaker: 'narrator', text: '但夏晚发现，他的耳尖好像有点红。' },
                    { speaker: 'xia_wan', text: '（肖童...）' },
                    { speaker: 'narrator', text: '她想再多说几句，但又不知道该说什么。' },
                    { speaker: 'xia_wan', text: '那我先走了，木星。' },
                    { speaker: 'xiao_tong', text: '嗯，路上小心。' },
                    { speaker: 'narrator', text: '夏晚抱着包走出休息室。' },
                    { speaker: 'narrator', text: '心里暖暖的。' },
                    { speaker: 'xia_wan', text: '（这个夏天...好像也没那么难熬了。）' }
                ],
                choices: [],
                next: 'xw_4_2'
            },

            // =============================================
            // 第二部分：暑假期间（群聊）
            // =============================================

            {
                id: 'xw_4_2',
                title: '群消息',
                background: 'bg-dorm',
                mood: 'melancholy',
                dialogues: [
                    { speaker: 'narrator', text: '回到家后，夏晚躺在自己的房间里。' },
                    { speaker: 'narrator', text: '手机震动了一下。' },
                    { speaker: 'narrator', text: '是店里的工作群。' },
                    { speaker: 'narrator', text: '吴琊：各位，通知一下，阿昊这个月离职了。以后店里的事我来负责。' },
                    { speaker: 'narrator', text: '橙子：收到，吴琊哥辛苦了。' },
                    { speaker: 'narrator', text: '170：吴琊当店长了吗！感觉好厉害！' },
                    { speaker: 'narrator', text: '方圆：行啊吴琊，以后罩着点兄弟们。' },
                    { speaker: 'narrator', text: '谨言：欢迎吴琊新店长～撒花撒花～' },
                    { speaker: 'narrator', text: '木星：欢迎。' },
                    { speaker: 'narrator', text: '夏晚看着群里的消息。' },
                    { speaker: 'narrator', text: '大家好像很快就接受了吴琊当店长的事。' },
                    { speaker: 'narrator', text: '只有她...还沉浸在阿昊离开的失落里。' },
                    { speaker: 'xia_wan', text: '（又可怜，又恨。）' },
                    { speaker: 'xia_wan', text: '（这句话...真的很准确。）' },
                    { speaker: 'narrator', text: '她往上翻了翻聊天记录。' },
                    { speaker: 'narrator', text: '几个月前的阿昊，每天都会在群里发工作安排。' },
                    { speaker: 'narrator', text: '现在却只剩下空荡荡的通知。' },
                    { speaker: 'xia_wan', text: '（人走了，群也变了。）' }
                ],
                choices: [],
                next: 'xw_4_2_b'
            },

            {
                id: 'xw_4_2_b',
                title: '工作安排',
                background: 'bg-dorm',
                mood: 'normal',
                dialogues: [
                    { speaker: 'narrator', text: '几天后。' },
                    { speaker: 'narrator', text: '吴琊在群里发了一条消息。' },
                    { speaker: 'narrator', text: '吴琊：这个月排班表我重新排了一下，人手有点紧，大家多担待。' },
                    { speaker: 'narrator', text: '木星：我多带几个本没问题。' },
                    { speaker: 'narrator', text: '方圆：我这边盒装本来就行，城限我不太熟练。' },
                    { speaker: 'narrator', text: '橙子：我和170可以多分担一些～' },
                    { speaker: 'narrator', text: '170：没问题！我最近空闲时间多！' },
                    { speaker: 'narrator', text: '谨言：我这边也OK～随时待命！' },
                    { speaker: 'narrator', text: '吴琊：嗯。另外，城限本《流芳》下周到店，大家有空看看本。' },
                    { speaker: 'narrator', text: '橙子：流芳！听说超好哭的！' },
                    { speaker: 'narrator', text: '木星：我来带。' },
                    { speaker: 'narrator', text: '夏晚看着群里的消息。' },
                    { speaker: 'narrator', text: '（大家都在努力撑着...）' },
                    { speaker: 'xia_wan', text: '（而我却在老家...什么忙都帮不上。）' },
                    { speaker: 'narrator', text: '她犹豫了一下，在群里发了一条消息。' },
                    { speaker: 'xia_wan', text: '大家辛苦了！有什么我能帮的尽管说～' },
                    { speaker: 'narrator', text: '橙子：夏晚好好陪家人！这边有我们呢～' },
                    { speaker: 'narrator', text: '木星：嗯。' },
                    { speaker: 'narrator', text: '只有这一个字。' },
                    { speaker: 'narrator', text: '但夏晚看着那个「嗯」字。' },
                    { speaker: 'narrator', text: '嘴角不自觉地弯了起来。' },
                    { speaker: 'xia_wan', text: '（木星他...在群里也会回我的消息呢。）' }
                ],
                choices: [],
                next: 'xw_4_2_c'
            },

            {
                id: 'xw_4_2_c',
                title: '日常闲聊',
                background: 'bg-dorm',
                mood: 'joyful',
                dialogues: [
                    { speaker: 'narrator', text: '又过了几天。' },
                    { speaker: 'narrator', text: '群里的气氛渐渐轻松了一些。' },
                    { speaker: 'narrator', text: '橙子：今天带了一个情感本，玩家哭得稀里哗啦的！' },
                    { speaker: 'narrator', text: '橙子：超有成就感的！' },
                    { speaker: 'narrator', text: '170：橙子姐厉害～我今天遇到一个超纠结的玩家，选a还是选b纠结了十分钟哈哈哈' },
                    { speaker: 'narrator', text: '方圆：哈哈哈哈哈哈太真实了' },
                    { speaker: 'narrator', text: '方圆：对了，你们听说那个新来的DM了吗？' },
                    { speaker: 'narrator', text: '橙子：周砚吗？对的对的，他最近带本越来越好了！' },
                    { speaker: 'narrator', text: '谨言：周砚那小子挺上道的！学东西快！' },
                    { speaker: 'narrator', text: '木星：嗯，他在进步。' },
                    { speaker: 'narrator', text: '橙子：夏晚～你什么时候回来呀？' },
                    { speaker: 'xia_wan', text: '应该八月底吧～' },
                    { speaker: 'narrator', text: '橙子：好哦好哦～等你回来一起吃饭！' },
                    { speaker: 'narrator', text: '夏晚看着群里的消息。' },
                    { speaker: 'narrator', text: '虽然人在老家。' },
                    { speaker: 'narrator', text: '但感觉和大家的距离并没有变远。' },
                    { speaker: 'xia_wan', text: '（这就是店里的氛围吧...）' },
                    { speaker: 'narrator', text: '她翻看着聊天记录，嘴角带着笑意。' },
                    { speaker: 'narrator', text: '（真想快点回去...）' }
                ],
                choices: [],
                next: 'xw_4_3_xiaotong'
            },

            // =============================================
            // 第三部分：暑假私聊（自动依次触发）
            // =============================================

            {
                id: 'xw_4_3_xiaotong',
                title: '木星的私聊',
                background: 'bg-dorm',
                mood: 'normal',
                dialogues: [
                    { speaker: 'narrator', text: '一天晚上。' },
                    { speaker: 'narrator', text: '夏晚正在床上玩手机。' },
                    { speaker: 'narrator', text: '突然收到了一条私信。' },
                    { speaker: 'narrator', text: '是木星发来的。' },
                    { speaker: 'xiao_tong', text: '「在吗？」' },
                    { speaker: 'xia_wan', text: '（！！！木星主动找我聊天？！）' },
                    { speaker: 'xia_wan', text: '在的木星～有什么事吗？' },
                    { speaker: 'narrator', text: '等了好一会儿。' },
                    { speaker: 'narrator', text: '对方正在输入的提示闪了又灭，灭了又闪。' },
                    { speaker: 'xiao_tong', text: '「没什么事。」' },
                    { speaker: 'xiao_tong', text: '「就是想问一下你那边情况怎么样。」' },
                    { speaker: 'xia_wan', text: '（木星他在...关心我？）' },
                    { speaker: 'xia_wan', text: '我这边挺好的～就是每天在家陪爸妈，有点无聊哈哈哈' },
                    { speaker: 'xiao_tong', text: '「那就好。」' },
                    { speaker: 'xiao_tong', text: '「店里最近人手确实有点紧。」' },
                    { speaker: 'xiao_tong', text: '「不过你不用担心。」' },
                    { speaker: 'xia_wan', text: '木星辛苦了！' },
                    { speaker: 'xia_wan', text: '有什么我能帮忙的吗？虽然我在老家，但能做的一定做！' },
                    { speaker: 'narrator', text: '对面又沉默了一会儿。' },
                    { speaker: 'xiao_tong', text: '「...没什么特别的。」' },
                    { speaker: 'xiao_tong', text: '「你好好休息就行。」' },
                    { speaker: 'xia_wan', text: '（木星还是这样...话不多，但能感觉到他在意。）' },
                    { speaker: 'xia_wan', text: '好的木星～你也要注意休息哦' },
                    { speaker: 'xiao_tong', text: '「嗯。」' },
                    { speaker: 'xiao_tong', text: '「晚安。」' },
                    { speaker: 'xia_wan', text: '晚安木星！' },
                    { speaker: 'narrator', text: '夏晚盯着那句「晚安」。' },
                    { speaker: 'narrator', text: '看了好久好久。' },
                    { speaker: 'narrator', text: '木星平时那么沉默。' },
                    { speaker: 'narrator', text: '居然会主动发消息。' },
                    { speaker: 'narrator', text: '虽然只是简单的几句。' },
                    { speaker: 'narrator', text: '但她心里暖暖的。' },
                    { speaker: 'xia_wan', text: '（木星...开学见。）' }
                ],
                choices: [],
                next: 'xw_4_3_longxinheng'
            },

            {
                id: 'xw_4_3_longxinheng',
                title: '谨言的私聊',
                background: 'bg-dorm',
                mood: 'joyful',
                dialogues: [
                    { speaker: 'narrator', text: '某天中午。' },
                    { speaker: 'narrator', text: '夏晚正在吃饭，手机震动了。' },
                    { speaker: 'narrator', text: '是谨言发来的消息。' },
                    { speaker: 'long_xinheng', text: '夏晚夏晚～在干嘛呀～' },
                    { speaker: 'xia_wan', text: '在吃饭～谨言哥有什么事吗？' },
                    { speaker: 'long_xinheng', text: '没什么事！就是想你了嘛～' },
                    { speaker: 'long_xinheng', text: '店里最近可热闹了！' },
                    { speaker: 'long_xinheng', text: '《流芳》到店之后玩家超多的！' },
                    { speaker: 'long_xinheng', text: '不过木星那家伙天天加班，都瘦了...' },
                    { speaker: 'xia_wan', text: '（木星瘦了...）' },
                    { speaker: 'xia_wan', text: '真的吗？木星要注意身体啊...' },
                    { speaker: 'long_xinheng', text: '是呗是呗～我也说他了，他不听' },
                    { speaker: 'long_xinheng', text: '不过今天吴琊给他放了半天假，让他休息休息' },
                    { speaker: 'long_xinheng', text: '哦对了对了！夏晚你知道吗！' },
                    { speaker: 'long_xinheng', text: '橙子最近好像有情况！' },
                    { speaker: 'xia_wan', text: '诶？什么情况？' },
                    { speaker: 'long_xinheng', text: '她老是一个人偷偷笑！我问她她还不说！' },
                    { speaker: 'long_xinheng', text: '我觉得她肯定是谈恋爱了嘿嘿嘿～' },
                    { speaker: 'narrator', text: '夏晚被谨言的话逗笑了。' },
                    { speaker: 'xia_wan', text: '哈哈哈真的吗～好八卦啊～' },
                    { speaker: 'long_xinheng', text: '是吧是吧！等她告诉我们的时候肯定很精彩！' },
                    { speaker: 'long_xinheng', text: '哎呀不说了～我先去带本了！' },
                    { speaker: 'long_xinheng', text: '夏晚你想我们了就回来呀～' },
                    { speaker: 'xia_wan', text: '哈哈哈好的～我很快就回去～' },
                    { speaker: 'narrator', text: '放下手机。' },
                    { speaker: 'narrator', text: '夏晚心里有点复杂。' },
                    { speaker: 'narrator', text: '一方面，她很高兴谨言会主动和她分享这些。' },
                    { speaker: 'narrator', text: '另一方面...' },
                    { speaker: 'xia_wan', text: '（木星瘦了...）' },
                    { speaker: 'xia_wan', text: '（都怪我不在...帮不上忙。）' },
                    { speaker: 'narrator', text: '她默默在心里算了算日子。' },
                    { speaker: 'narrator', text: '（还有二十天就能回去了...）' }
                ],
                choices: [],
                next: 'xw_4_3_ganzhiyu'
            },

            {
                id: 'xw_4_3_ganzhiyu',
                title: '方圆的私聊',
                background: 'bg-dorm',
                mood: 'joyful',
                dialogues: [
                    { speaker: 'narrator', text: '几天后。' },
                    { speaker: 'narrator', text: '夏晚收到了一条消息。' },
                    { speaker: 'gan_zhiyu', text: '嘿，在吗？' },
                    { speaker: 'xia_wan', text: '在的～方圆哥有什么事？' },
                    { speaker: 'gan_zhiyu', text: '没什么事，就是无聊' },
                    { speaker: 'gan_zhiyu', text: '最近店里忙得要死，我闲得要死' },
                    { speaker: 'gan_zhiyu', text: '主要是我不怎么会带城限本，只能打打下手' },
                    { speaker: 'xia_wan', text: '（方圆哥好像有点失落...）' },
                    { speaker: 'xia_wan', text: '方圆哥平时可以看看本学习一下呀～' },
                    { speaker: 'gan_zhiyu', text: '看本太无聊了，我坐不住' },
                    { speaker: 'gan_zhiyu', text: '算了不说这个了' },
                    { speaker: 'gan_zhiyu', text: '对了，你什么时候回来？' },
                    { speaker: 'xia_wan', text: '应该八月底吧～' },
                    { speaker: 'gan_zhiyu', text: '行，到时候一起吃饭' },
                    { speaker: 'gan_zhiyu', text: '有家新开的烧烤店好像不错' },
                    { speaker: 'xia_wan', text: '好呀好呀～听起来不错～' },
                    { speaker: 'gan_zhiyu', text: '那说定了' },
                    { speaker: 'gan_zhiyu', text: '行了，我去打游戏了，回聊' },
                    { speaker: 'xia_wan', text: '哈哈哈好的～方圆哥加油打游戏～' },
                    { speaker: 'narrator', text: '夏晚放下手机。' },
                    { speaker: 'narrator', text: '方圆哥好像...有点不一样了。' },
                    { speaker: 'narrator', text: '以前的他，总是玩世不恭的样子。' },
                    { speaker: 'narrator', text: '现在却会主动找人聊天。' },
                    { speaker: 'narrator', text: '会约人吃饭。' },
                    { speaker: 'xia_wan', text: '（是因为店里变化了吗...）' },
                    { speaker: 'narrator', text: '她想起群里方圆说的那些话。' },
                    { speaker: 'narrator', text: '「我不怎么会带城限本，只能打打下手」' },
                    { speaker: 'xia_wan', text: '（方圆哥他...在努力吗...）' }
                ],
                choices: [],
                next: 'xw_4_3_wuya'
            },

            {
                id: 'xw_4_3_wuya',
                title: '吴琊的私聊',
                background: 'bg-dorm',
                mood: 'normal',
                dialogues: [
                    { speaker: 'narrator', text: '一天晚上。' },
                    { speaker: 'narrator', text: '夏晚正准备睡觉。' },
                    { speaker: 'narrator', text: '手机突然震动了一下。' },
                    { speaker: 'narrator', text: '是吴琊发来的。' },
                    { speaker: 'wu_ya', text: '「下周的排班表你看了吗。」' },
                    { speaker: 'xia_wan', text: '（吴琊？他怎么突然找我...）' },
                    { speaker: 'xia_wan', text: '我看了～吴琊是有什么安排吗？' },
                    { speaker: 'wu_ya', text: '你回来之后第一个周末能来上班吗。' },
                    { speaker: 'xia_wan', text: '可以的！没问题！' },
                    { speaker: 'wu_ya', text: '嗯。人手不够。' },
                    { speaker: 'xia_wan', text: '（吴琊当店长之后...话好像更少了。）' },
                    { speaker: 'xia_wan', text: '吴琊辛苦了～有什么我能帮忙的一定说！' },
                    { speaker: 'wu_ya', text: '...嗯。' },
                    { speaker: 'wu_ya', text: '你那边还好吗。' },
                    { speaker: 'xia_wan', text: '（...？）' },
                    { speaker: 'xia_wan', text: '我这边挺好的～就是有点无聊哈哈哈' },
                    { speaker: 'wu_ya', text: '嗯。那就好。' },
                    { speaker: 'narrator', text: '对话又陷入了沉默。' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕。' },
                    { speaker: 'narrator', text: '吴琊平时那么沉默。' },
                    { speaker: 'narrator', text: '居然会主动问她「还好吗」。' },
                    { speaker: 'xia_wan', text: '吴琊也是～要注意休息哦' },
                    { speaker: 'wu_ya', text: '...知道了。' },
                    { speaker: 'wu_ya', text: '晚安。' },
                    { speaker: 'xia_wan', text: '晚安吴琊！' },
                    { speaker: 'narrator', text: '夏晚看着那句「晚安」。' },
                    { speaker: 'narrator', text: '和木星一样。' },
                    { speaker: 'narrator', text: '虽然只是简单的两个字。' },
                    { speaker: 'narrator', text: '但从吴琊嘴里说出来...' },
                    { speaker: 'narrator', text: '好像格外珍贵。' },
                    { speaker: 'xia_wan', text: '（吴琊...也在努力呢。）' },
                    { speaker: 'narrator', text: '她把手机放在枕边。' },
                    { speaker: 'narrator', text: '闭上眼睛，心里暖暖的。' }
                ],
                choices: [],
                next: 'xw_4_4'
            },

            // =============================================
            // 第四部分：9月返校
            // =============================================

            {
                id: 'xw_4_4',
                title: '回到店里',
                background: 'bg-shop',
                mood: 'normal',
                dialogues: [
                    { speaker: 'narrator', text: '八月底。' },
                    { speaker: 'narrator', text: '夏晚拖着行李箱，回到了店里。' },
                    { speaker: 'narrator', text: '推开门的瞬间，她愣了一下。' },
                    { speaker: 'narrator', text: '好像有什么不一样了。' },
                    { speaker: 'narrator', text: '店里的摆设变了。' },
                    { speaker: 'narrator', text: '多了很多新的道具和装饰。' },
                    { speaker: 'narrator', text: '墙上贴了几张城限本的海报。' },
                    { speaker: 'narrator', text: '看起来比以前更专业了。' },
                    { speaker: 'chengzi', text: '夏晚！你回来啦！' },
                    { speaker: 'narrator', text: '橙子从吧台后面探出头来，笑容灿烂。' },
                    { speaker: 'xia_wan', text: '橙子姐！我回来了！' },
                    { speaker: 'narrator', text: '夏晚放下行李箱，快步走过去。' },
                    { speaker: 'narrator', text: '橙子给了她一个大大的拥抱。' },
                    { speaker: 'chengzi', text: '想死你了！瘦了没？让我看看！' },
                    { speaker: 'xia_wan', text: '哈哈哈胖了！我妈天天做好吃的...' },
                    { speaker: 'chengzi', text: '真好～不像我～天天加班都累瘦了～' },
                    { speaker: 'narrator', text: '夏晚看着橙子。' },
                    { speaker: 'narrator', text: '她确实比几个月前瘦了一点。' },
                    { speaker: 'narrator', text: '但眼睛里的光还在。' },
                    { speaker: 'narrator', text: '甚至比以前更亮了。' },
                    { speaker: 'xia_wan', text: '橙子姐辛苦了～' },
                    { speaker: 'chengzi', text: '不辛苦不辛苦～对了，吴琊当店长之后店里变化挺大的！' },
                    { speaker: 'chengzi', text: '你待会儿看到就知道了～' },
                    { speaker: 'narrator', text: '橙子神秘兮兮地眨眨眼。' },
                    { speaker: 'xia_wan', text: '（变化...是什么样的变化呢...）' }
                ],
                choices: [],
                next: 'xw_4_4_b'
            },

            {
                id: 'xw_4_4_b',
                title: '吴琊的变化',
                background: 'bg-shop',
                mood: 'normal',
                dialogues: [
                    { speaker: 'narrator', text: '这时，休息室的门开了。' },
                    { speaker: 'narrator', text: '吴琊走了出来。' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '她差点没认出来。' },
                    { speaker: 'narrator', text: '吴琊...好像不一样了。' },
                    { speaker: 'narrator', text: '他的眼神比以前更沉稳。' },
                    { speaker: 'narrator', text: '走路的姿态也更有气场。' },
                    { speaker: 'narrator', text: '不再是那个站在角落里不知道说什么的人。' },
                    { speaker: 'narrator', text: '而是一个真正的店长。' },
                    { speaker: 'wu_ya', text: '回来了？' },
                    { speaker: 'xia_wan', text: '嗯...吴琊...' },
                    { speaker: 'wu_ya', text: '嗯。先休息一下。' },
                    { speaker: 'wu_ya', text: '明天再来上班。' },
                    { speaker: 'narrator', text: '他的语气还是那样简短。' },
                    { speaker: 'narrator', text: '但夏晚能感觉到其中的关心。' },
                    { speaker: 'wu_ya', text: '（离开）' },
                    { speaker: 'chengzi', text: '怎么样？吴琊变化大吧？' },
                    { speaker: 'xia_wan', text: '好大...我都差点没认出来...' },
                    { speaker: 'chengzi', text: '是吧是吧～当了店长之后整个人都不一样了！' },
                    { speaker: 'chengzi', text: '虽然话还是不多，但是做事特别靠谱。' },
                    { speaker: 'xia_wan', text: '（吴琊...真的在努力呢。）' },
                    { speaker: 'narrator', text: '夏晚心里有点感慨。' },
                    { speaker: 'narrator', text: '阿昊走了之后。' },
                    { speaker: 'narrator', text: '大家都在努力撑着这个店。' },
                    { speaker: 'narrator', text: '吴琊、木星、橙子、170、谨言...' },
                    { speaker: 'xia_wan', text: '（我也要加油...）' }
                ],
                choices: [],
                next: 'xw_4_4_c'
            },

            {
                id: 'xw_4_4_c',
                title: '木星的变化',
                background: 'bg-shop',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '傍晚。' },
                    { speaker: 'narrator', text: '夏晚正在吧台整理东西。' },
                    { speaker: 'narrator', text: '门开了。' },
                    { speaker: 'narrator', text: '是木星带本回来了。' },
                    { speaker: 'narrator', text: '夏晚的心跳漏了一拍。' },
                    { speaker: 'narrator', text: '他确实瘦了一点。' },
                    { speaker: 'narrator', text: '但眼神还是那样温柔。' },
                    { speaker: 'narrator', text: '带着一种让人安心的力量。' },
                    { speaker: 'xiao_tong', text: '回来了？' },
                    { speaker: 'xia_wan', text: '嗯，木星辛苦了...' },
                    { speaker: 'narrator', text: '木星看了她一眼。' },
                    { speaker: 'narrator', text: '只是一眼。' },
                    { speaker: 'narrator', text: '但夏晚觉得心跳都停了一瞬。' },
                    { speaker: 'xiao_tong', text: '...嗯。' },
                    { speaker: 'narrator', text: '他走到吧台边，拿起水杯喝了一口。' },
                    { speaker: 'narrator', text: '夏晚注意到。' },
                    { speaker: 'narrator', text: '他的动作比以前更成熟了。' },
                    { speaker: 'narrator', text: '带着一种经历过什么的沉淀感。' },
                    { speaker: 'xiao_tong', text: '暑假...怎么样？' },
                    { speaker: 'xia_wan', text: '（木星他在...关心我？）' },
                    { speaker: 'xia_wan', text: '挺好的～就是有点想店里...' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'narrator', text: '木星没有说话。' },
                    { speaker: 'narrator', text: '但他的嘴角微微弯了一下。' },
                    { speaker: 'narrator', text: '很淡。' },
                    { speaker: 'narrator', text: '但夏晚看到了。' },
                    { speaker: 'xia_wan', text: '（木星他...笑了？）' },
                    { speaker: 'narrator', text: '她觉得自己脸有点热。' },
                    { speaker: 'xia_wan', text: '（想店里...其实是想你。）' },
                    { speaker: 'narrator', text: '但这句话，她说不出口。' }
                ],
                choices: [
                    { text: '鼓起勇气和木星多聊几句', next: 'xw_4_4_c1', affinity: { xiao_tong: 5 }, friendship: { xiao_tong: 3 } },
                    { text: '只是微笑回应', next: 'xw_4_5', affinity: { xiao_tong: 2 }, friendship: { xiao_tong: 5 } }
                ]
            },

            {
                id: 'xw_4_4_c1',
                title: '短暂相处',
                background: 'bg-shop',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'xia_wan', text: '木星...你最近是不是很累？' },
                    { speaker: 'xiao_tong', text: '...还好。' },
                    { speaker: 'xia_wan', text: '可是你瘦了...要多注意休息啊...' },
                    { speaker: 'narrator', text: '木星愣了一下。' },
                    { speaker: 'narrator', text: '他好像不太习惯被人这样关心。' },
                    { speaker: 'xiao_tong', text: '...嗯。你也是。' },
                    { speaker: 'xia_wan', text: '我？' },
                    { speaker: 'xiao_tong', text: '你刚回来，也要适应一下。' },
                    { speaker: 'xiao_tong', text: '有什么事可以和我说。' },
                    { speaker: 'xia_wan', text: '（！！）' },
                    { speaker: 'narrator', text: '夏晚的心跳漏了一拍。' },
                    { speaker: 'narrator', text: '木星说...有事可以和他说。' },
                    { speaker: 'narrator', text: '这句话...' },
                    { speaker: 'narrator', text: '像是一颗小小的种子。' },
                    { speaker: 'narrator', text: '落在她心里。' },
                    { speaker: 'xia_wan', text: '嗯...木星也是...' },
                    { speaker: 'narrator', text: '两人沉默了一会儿。' },
                    { speaker: 'narrator', text: '但不是尴尬的沉默。' },
                    { speaker: 'narrator', text: '而是一种...舒服的沉默。' },
                    { speaker: 'narrator', text: '好像什么都不用说。' },
                    { speaker: 'narrator', text: '只要待在一起就很好。' },
                    { speaker: 'xiao_tong', text: '...那我去休息了。' },
                    { speaker: 'xia_wan', text: '嗯，木星晚安。' },
                    { speaker: 'xiao_tong', text: '晚安。' },
                    { speaker: 'narrator', text: '木星转身离开。' },
                    { speaker: 'narrator', text: '夏晚看着他的背影。' },
                    { speaker: 'narrator', text: '心里暖暖的。' },
                    { speaker: 'xia_wan', text: '（木星...这个学期...）' },
                    { speaker: 'narrator', text: '（我想离你更近一点。）' }
                ],
                choices: [],
                next: 'xw_4_5'
            },

            // =============================================
            // 第五部分：告白之夜（混合模式）
            // =============================================

            {
                id: 'xw_4_5',
                title: '告白之夜',
                background: 'bg-shop',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '某天晚上。' },
                    { speaker: 'narrator', text: '店里只剩夏晚在整理最后的东西。' },
                    { speaker: 'narrator', text: '大家都陆续离开了。' },
                    { speaker: 'narrator', text: '她正准备收拾东西走人的时候。' },
                    { speaker: 'narrator', text: '手机震动了。' },
                    { speaker: 'narrator', text: '是一条私信。' },
                    { speaker: 'narrator', text: '她看了一眼屏幕。' },
                    { speaker: 'narrator', text: '心跳突然漏了一拍。' },
                    { speaker: 'xia_wan', text: '（...是他？）' },
                    { speaker: 'narrator', text: '夏晚看着手机屏幕。' },
                    { speaker: 'narrator', text: '消息还没来得及看。' },
                    { speaker: 'narrator', text: '但她的脑海里突然闪过一个念头——' },
                    { speaker: 'xia_wan', text: '（今晚...要不要主动一点？）' },
                    { speaker: 'xia_wan', text: '（与其等他来找我...' },
                    { speaker: 'xia_wan', text: '不如我先...）' }
                ],
                choices: [
                    { text: '等他来找我（被动）', next: 'xw_4_5_passive', affinity: {}, friendship: {} },
                    { text: '主动去找他告白（主动）', next: 'xw_4_5_active', affinity: {}, friendship: {} }
                ]
            },

            // =============================================
            // 被动告白场景（由game.js动态处理）
            // =============================================

            {
                id: 'xw_4_5_passive',
                title: '某个夜晚',
                background: 'bg-shop',
                mood: 'normal',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚打开手机。' },
                    { speaker: 'narrator', text: '消息还在那里等着她。' }
                ],
                choices: [
                    { text: '去见木星', next: 'xw_4_5_xiaotong', affinity: { xiao_tong: 5 }, friendship: { xiao_tong: 3 } },
                    { text: '去见谨言', next: 'xw_4_5_longxinheng', affinity: { long_xinheng: 5 }, friendship: { long_xinheng: 3 } },
                    { text: '去见方圆', next: 'xw_4_5_ganzhiyu', affinity: { gan_zhiyu: 5 }, friendship: { gan_zhiyu: 3 } },
                    { text: '去见吴琊', next: 'xw_4_5_wuya', affinity: { wu_ya: 5 }, friendship: { wu_ya: 3 } }
                ]
            },

            // =============================================
            // 主动告白入口
            // =============================================

            {
                id: 'xw_4_5_active',
                title: '告白的勇气',
                background: 'bg-shop',
                mood: 'nervous',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚深吸一口气。' },
                    { speaker: 'narrator', text: '她知道自己想见谁。' },
                    { speaker: 'narrator', text: '也知道今晚...她想告诉他什么。' },
                    { speaker: 'xia_wan', text: '（鼓起勇气...）' },
                    { speaker: 'narrator', text: '她走出店门。' },
                    { speaker: 'narrator', text: '秋夜的风有点凉。' },
                    { speaker: 'narrator', text: '但她的心是热的。' }
                ],
                choices: [
                    { text: '去找木星', next: 'xw_4_5_active_xiaotong', affinity: {}, friendship: {} },
                    { text: '去找谨言', next: 'xw_4_5_active_longxinheng', affinity: {}, friendship: {} },
                    { text: '去找方圆', next: 'xw_4_5_active_ganzhiyu', affinity: {}, friendship: {} },
                    { text: '去找吴琊', next: 'xw_4_5_active_wuya', affinity: {}, friendship: {} },
                    { text: '算了...还是等他来找我吧', next: 'xw_4_5_passive', affinity: { xiao_tong: -2 }, friendship: {} }
                ]
            },

            // --- 木星线 ---
            {
                id: 'xw_4_5_xiaotong',
                title: '木星的心意',
                background: 'bg-shop',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚走出店门。' },
                    { speaker: 'narrator', text: '木星站在门口。' },
                    { speaker: 'narrator', text: '秋夜的风有点凉。' },
                    { speaker: 'narrator', text: '但夏晚的心是热的。' },
                    { speaker: 'xiao_tong', text: '...你来了。' },
                    { speaker: 'xia_wan', text: '嗯...木星有什么事吗？' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'narrator', text: '沉默了很久。' },
                    { speaker: 'narrator', text: '木星张了张嘴。' },
                    { speaker: 'narrator', text: '又闭上。' },
                    { speaker: 'narrator', text: '好像不知道该从何说起。' },
                    { speaker: 'xia_wan', text: '木星...' },
                    { speaker: 'xiao_tong', text: '这个暑假。' },
                    { speaker: 'xiao_tong', text: '你不在的时候。' },
                    { speaker: 'narrator', text: '他的声音很轻。' },
                    { speaker: 'xiao_tong', text: '我发现我...有点不习惯。' },
                    { speaker: 'xia_wan', text: '（木星...）' },
                    { speaker: 'xiao_tong', text: '每天都想你什么时候回来。' },
                    { speaker: 'xiao_tong', text: '想你在老家过得好不好。' },
                    { speaker: 'xiao_tong', text: '想你会不会也想店里。' },
                    { speaker: 'narrator', text: '他停顿了一下。' },
                    { speaker: 'xiao_tong', text: '想你是不是也会想我。' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'narrator', text: '夏晚的心跳快得像要跳出胸腔。' },
                    { speaker: 'narrator', text: '她没想到。' },
                    { speaker: 'narrator', text: '那个平时沉默寡言的人。' },
                    { speaker: 'narrator', text: '会说出这样的话。' },
                    { speaker: 'xia_wan', text: '木星...' },
                    { speaker: 'narrator', text: '她的声音有点颤抖。' },
                    { speaker: 'xia_wan', text: '我...' },
                    { speaker: 'xiao_tong', text: '夏晚。' },
                    { speaker: 'narrator', text: '他转过身。' },
                    { speaker: 'narrator', text: '看着她的眼睛。' },
                    { speaker: 'xiao_tong', text: '我喜欢你。' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'narrator', text: ' 四个字。' },
                    { speaker: 'narrator', text: '说得很轻。' },
                    { speaker: 'narrator', text: '但夏晚觉得那是她听过最重的话。' }
                ],
                choices: [
                    { text: '接受告白', next: 'xw_4_6_confession_xiaotong_accept', affinity: { xiao_tong: 20 }, friendship: { xiao_tong: 10 } },
                    { text: '再考虑一下', next: 'xw_4_6_confession_think', affinity: { xiao_tong: -5 }, friendship: { xiao_tong: 5 } }
                ]
            },

            // --- 谨言线 ---
            {
                id: 'xw_4_5_longxinheng',
                title: '真实的谨言',
                background: 'bg-shop',
                mood: 'normal',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚走出店门。' },
                    { speaker: 'narrator', text: '谨言靠在墙边。' },
                    { speaker: 'narrator', text: '看到夏晚出来，他笑了笑。' },
                    { speaker: 'long_xinheng', text: '夏晚～你真出来了～' },
                    { speaker: 'xia_wan', text: '谨言哥？你怎么在这...' },
                    { speaker: 'long_xinheng', text: '我在等你啊～' },
                    { speaker: 'xia_wan', text: '等我？' },
                    { speaker: 'long_xinheng', text: '嗯。' },
                    { speaker: 'narrator', text: '他的语气变了。' },
                    { speaker: 'narrator', text: '不再是平时那种嬉皮笑脸的调调。' },
                    { speaker: 'narrator', text: '变得认真了起来。' },
                    { speaker: 'long_xinheng', text: '其实我有件事想和你说。' },
                    { speaker: 'xia_wan', text: '什么事...' },
                    { speaker: 'long_xinheng', text: '你还记得那次吗？' },
                    { speaker: 'long_xinheng', text: '我一个人坐在休息室里。' },
                    { speaker: 'xia_wan', text: '（...他知道我看到了？）' },
                    { speaker: 'long_xinheng', text: '你进来陪我坐了一会儿。' },
                    { speaker: 'long_xinheng', text: '什么都没说，就只是陪着我。' },
                    { speaker: 'long_xinheng', text: '那时候我就在想...' },
                    { speaker: 'long_xinheng', text: '你这个人，真的很好。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'long_xinheng', text: '后来我就一直在想...' },
                    { speaker: 'long_xinheng', text: '想你是不是也会在意我。' },
                    { speaker: 'long_xinheng', text: '想你是不是也会因为我笑而笑。' },
                    { speaker: 'long_xinheng', text: '想...你愿不愿意做我女朋友。' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'narrator', text: '夏晚愣住了。' },
                    { speaker: 'narrator', text: '那个总是笑着的人。' },
                    { speaker: 'narrator', text: '原来也会认真。' }
                ],
                choices: [
                    { text: '接受告白', next: 'xw_4_6_confession_longxinheng_accept', affinity: { long_xinheng: 20 }, friendship: { long_xinheng: 10 } },
                    { text: '再考虑一下', next: 'xw_4_6_confession_think', affinity: { long_xinheng: -5 }, friendship: { long_xinheng: 5 } }
                ]
            },

            // --- 方圆线 ---
            {
                id: 'xw_4_5_ganzhiyu',
                title: '方圆的改变',
                background: 'bg-shop',
                mood: 'joyful',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚走出店门。' },
                    { speaker: 'narrator', text: '方圆站在门口。' },
                    { speaker: 'narrator', text: '手里拿着两罐饮料。' },
                    { speaker: 'gan_zhiyu', text: '嘿，夏晚。' },
                    { speaker: 'xia_wan', text: '方圆哥？你怎么在这...' },
                    { speaker: 'gan_zhiyu', text: '等你啊。' },
                    { speaker: 'gan_zhiyu', text: '要不要喝点东西？' },
                    { speaker: 'xia_wan', text: '（方圆哥怎么突然找我...）' },
                    { speaker: 'xia_wan', text: '谢谢方圆哥～' },
                    { speaker: 'narrator', text: '两人并排坐在店门口的长椅上。' },
                    { speaker: 'gan_zhiyu', text: '夏晚，我问你个事儿。' },
                    { speaker: 'xia_wan', text: '什么事？' },
                    { speaker: 'gan_zhiyu', text: '你觉得我最近怎么样？' },
                    { speaker: 'xia_wan', text: '方圆哥最近...很努力啊。' },
                    { speaker: 'xia_wan', text: '城限本带得越来越好了。' },
                    { speaker: 'gan_zhiyu', text: '是吗～' },
                    { speaker: 'gan_zhiyu', text: '其实...我这么努力。' },
                    { speaker: 'gan_zhiyu', text: '有一部分原因是因为你。' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'gan_zhiyu', text: '你还记得吗？' },
                    { speaker: 'gan_zhiyu', text: '那天你帮我看本。' },
                    { speaker: 'gan_zhiyu', text: '你说我「很厉害」。' },
                    { speaker: 'gan_zhiyu', text: '那一刻我就在想...' },
                    { speaker: 'gan_zhiyu', text: '原来被认可的感觉是这样的。' },
                    { speaker: 'gan_zhiyu', text: '原来被人看到的感觉是这样的。' },
                    { speaker: 'gan_zhiyu', text: '所以我就想...' },
                    { speaker: 'gan_zhiyu', text: '既然有人愿意看到我。' },
                    { speaker: 'gan_zhiyu', text: '那我也想让你看到更好的我。' },
                    { speaker: 'gan_zhiyu', text: '所以夏晚...' },
                    { speaker: 'gan_zhiyu', text: '你愿不愿意...做我女朋友？' },
                    { speaker: 'xia_wan', text: '（...！）' }
                ],
                choices: [
                    { text: '接受告白', next: 'xw_4_6_confession_ganzhiyu_accept', affinity: { gan_zhiyu: 20 }, friendship: { gan_zhiyu: 10 } },
                    { text: '再考虑一下', next: 'xw_4_6_confession_think', affinity: { gan_zhiyu: -5 }, friendship: { gan_zhiyu: 5 } }
                ]
            },

            // --- 吴琊线 ---
            {
                id: 'xw_4_5_wuya',
                title: '吴琊的心意',
                background: 'bg-shop',
                mood: 'normal',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚走出店门。' },
                    { speaker: 'narrator', text: '吴琊站在不远处。' },
                    { speaker: 'narrator', text: '看到她出来，他走了过来。' },
                    { speaker: 'wu_ya', text: '...来了。' },
                    { speaker: 'xia_wan', text: '吴琊...你怎么在这？' },
                    { speaker: 'wu_ya', text: '...等你。' },
                    { speaker: 'xia_wan', text: '（...等我？）' },
                    { speaker: 'wu_ya', text: '有件事...一直想和你说。' },
                    { speaker: 'xia_wan', text: '什么事...？' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '他沉默了很久。' },
                    { speaker: 'narrator', text: '久到夏晚以为他不会再开口了。' },
                    { speaker: 'wu_ya', text: '那天晚上。' },
                    { speaker: 'wu_ya', text: '你给我送水的时候。' },
                    { speaker: 'xia_wan', text: '（...他记得？）' },
                    { speaker: 'wu_ya', text: '你说「木星辛苦了」。' },
                    { speaker: 'wu_ya', text: '那时候我就在想...' },
                    { speaker: 'wu_ya', text: '原来被人关心的感觉是这样的。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'wu_ya', text: '我不太会说话。' },
                    { speaker: 'wu_ya', text: '也不太会表达。' },
                    { speaker: 'wu_ya', text: '但我想了很久...' },
                    { speaker: 'wu_ya', text: '我想让你知道。' },
                    { speaker: 'wu_ya', text: '我...喜欢你。' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'narrator', text: '三个字。' },
                    { speaker: 'narrator', text: '从他嘴里说出来。' },
                    { speaker: 'narrator', text: '好像用了很大的勇气。' }
                ],
                choices: [
                    { text: '接受告白', next: 'xw_4_6_confession_wuya_accept', affinity: { wu_ya: 20 }, friendship: { wu_ya: 10 } },
                    { text: '再考虑一下', next: 'xw_4_6_confession_think', affinity: { wu_ya: -5 }, friendship: { wu_ya: 5 } }
                ]
            },

            // =============================================
            // 主动告白场景（玩家先告白）
            // =============================================

            {
                id: 'xw_4_5_active_xiaotong',
                title: '主动告白·木星',
                background: 'bg-shop',
                mood: 'nervous',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚找到了木星。' },
                    { speaker: 'narrator', text: '他正站在后门附近。' },
                    { speaker: 'narrator', text: '手里拿着一瓶水。' },
                    { speaker: 'narrator', text: '看到夏晚过来，他愣了一下。' },
                    { speaker: 'xiao_tong', text: '...你怎么在这？' },
                    { speaker: 'xia_wan', text: '我...' },
                    { speaker: 'narrator', text: '夏晚深吸一口气。' },
                    { speaker: 'xia_wan', text: '木星，我有话想跟你说。' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'narrator', text: '木星看着她。' },
                    { speaker: 'narrator', text: '没有说话。' },
                    { speaker: 'narrator', text: '但他的眼神在问：什么？' },
                    { speaker: 'xia_wan', text: '其实...这个暑假我一直在想一件事。' },
                    { speaker: 'xia_wan', text: '想店里的大家。' },
                    { speaker: 'xia_wan', text: '想你。' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'xia_wan', text: '木星。' },
                    { speaker: 'xia_wan', text: '我喜欢你。' },
                    { speaker: 'narrator', text: '她说完这句话。' },
                    { speaker: 'narrator', text: '感觉心跳都快停了。' },
                    { speaker: 'xia_wan', text: '（说出来了...）' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'narrator', text: '沉默了很久。' },
                    { speaker: 'narrator', text: '木星低下头。' },
                    { speaker: 'narrator', text: '夏晚的心一点点往下沉。' },
                    { speaker: 'xia_wan', text: '（是我太唐突了吗...）' },
                    { speaker: 'xiao_tong', text: '其实...' },
                    { speaker: 'narrator', text: '木星的声音很轻。' },
                    { speaker: 'xiao_tong', text: '我本来想今晚告诉你的。' },
                    { speaker: 'xia_wan', text: '...什么？' },
                    { speaker: 'xiao_tong', text: '我喜欢你。' },
                    { speaker: 'narrator', text: '他抬起头。' },
                    { speaker: 'narrator', text: '眼神里有一种她从没见过的温柔。' },
                    { speaker: 'xiao_tong', text: '谢谢你来告诉我。' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'narrator', text: '夏晚愣在原地。' },
                    { speaker: 'narrator', text: '然后慢慢红了眼眶。' },
                    { speaker: 'xia_wan', text: '木星...' },
                    { speaker: 'narrator', text: '秋夜的风有点凉。' },
                    { speaker: 'narrator', text: '但夏晚觉得这是她经历过最温暖的夜晚。' }
                ],
                choices: [
                    { text: '（紧紧抱住他）', next: 'xw_4_6_active_xiaotong_success', affinity: { xiao_tong: 25 }, friendship: { xiao_tong: 5 } },
                    { text: '（轻轻牵起他的手）', next: 'xw_4_6_active_xiaotong_success', affinity: { xiao_tong: 20 }, friendship: { xiao_tong: 3 } }
                ]
            },

            {
                id: 'xw_4_5_active_longxinheng',
                title: '主动告白·谨言',
                background: 'bg-shop',
                mood: 'nervous',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚找到了谨言。' },
                    { speaker: 'narrator', text: '他正靠在窗边看月亮。' },
                    { speaker: 'narrator', text: '今晚的他看起来有些不一样。' },
                    { speaker: 'narrator', text: '没有平时那种嬉皮笑脸的感觉。' },
                    { speaker: 'xia_wan', text: '谨言。' },
                    { speaker: 'long_xinheng', text: '嗯？夏晚～' },
                    { speaker: 'narrator', text: '他转过头笑了笑。' },
                    { speaker: 'narrator', text: '但夏晚看得出来。' },
                    { speaker: 'narrator', text: '那笑容背后藏着什么。' },
                    { speaker: 'xia_wan', text: '我有话想跟你说。' },
                    { speaker: 'long_xinheng', text: '...什么？' },
                    { speaker: 'narrator', text: '他的语气变了。' },
                    { speaker: 'narrator', text: '变得认真了起来。' },
                    { speaker: 'xia_wan', text: '其实我一直记得。' },
                    { speaker: 'xia_wan', text: '那天你在休息室里。' },
                    { speaker: 'xia_wan', text: '我进来陪你坐了一会儿。' },
                    { speaker: 'long_xinheng', text: '...' },
                    { speaker: 'xia_wan', text: '那时候我就在想。' },
                    { speaker: 'xia_wan', text: '你这个人，其实很好。' },
                    { speaker: 'xia_wan', text: '只是大家都不太了解你。' },
                    { speaker: 'long_xinheng', text: '...你还记得那件事。' },
                    { speaker: 'narrator', text: '他的声音有点不一样了。' },
                    { speaker: 'xia_wan', text: '我今天来是想告诉你。' },
                    { speaker: 'xia_wan', text: '我喜欢你。' },
                    { speaker: 'narrator', text: '夏晚说出这句话的时候。' },
                    { speaker: 'narrator', text: '心里反而平静了下来。' },
                    { speaker: 'xia_wan', text: '（说出来了...）' },
                    { speaker: 'long_xinheng', text: '...' },
                    { speaker: 'narrator', text: '沉默了一会儿。' },
                    { speaker: 'narrator', text: '然后他笑了。' },
                    { speaker: 'narrator', text: '不是平时那种嬉皮的笑。' },
                    { speaker: 'narrator', text: '而是一种...释然的笑。' },
                    { speaker: 'long_xinheng', text: '其实我一直觉得自己藏得很好。' },
                    { speaker: 'long_xinheng', text: '没想到被你发现了。' },
                    { speaker: 'long_xinheng', text: '谢谢你，夏晚。' },
                    { speaker: 'xia_wan', text: '所以...？' },
                    { speaker: 'long_xinheng', text: '所以...' },
                    { speaker: 'narrator', text: '他走近了一步。' },
                    { speaker: 'long_xinheng', text: '我也喜欢你啊。' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'narrator', text: '月光洒在他身上。' },
                    { speaker: 'narrator', text: '夏晚第一次觉得。' },
                    { speaker: 'narrator', text: '这个爱笑的男孩，原来这么耀眼。' }
                ],
                choices: [
                    { text: '（笑着拍拍他的肩）以后别藏着了', next: 'xw_4_6_active_longxinheng_success', affinity: { long_xinheng: 25 }, friendship: { long_xinheng: 5 } },
                    { text: '（轻轻握住他的手）谢谢你愿意告诉我', next: 'xw_4_6_active_longxinheng_success', affinity: { long_xinheng: 20 }, friendship: { long_xinheng: 3 } }
                ]
            },

            {
                id: 'xw_4_5_active_ganzhiyu',
                title: '主动告白·方圆',
                background: 'bg-shop',
                mood: 'nervous',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚找到了方圆。' },
                    { speaker: 'narrator', text: '他正在吧台整理东西。' },
                    { speaker: 'narrator', text: '看到夏晚过来，他抬起头。' },
                    { speaker: 'gan_zhiyu', text: '还没走？' },
                    { speaker: 'xia_wan', text: '嗯...方圆，我有话想跟你说。' },
                    { speaker: 'gan_zhiyu', text: '...' },
                    { speaker: 'narrator', text: '方圆放下手里的东西。' },
                    { speaker: 'narrator', text: '看着她。' },
                    { speaker: 'gan_zhiyu', text: '什么事？' },
                    { speaker: 'xia_wan', text: '其实我一直想说。' },
                    { speaker: 'xia_wan', text: '你真的很厉害。' },
                    { speaker: 'xia_wan', text: '不管是带本还是管理店。' },
                    { speaker: 'xia_wan', text: '你都做得很好。' },
                    { speaker: 'gan_zhiyu', text: '...谢谢。' },
                    { speaker: 'xia_wan', text: '还有...' },
                    { speaker: 'narrator', text: '夏晚深吸一口气。' },
                    { speaker: 'xia_wan', text: '方圆。' },
                    { speaker: 'xia_wan', text: '我喜欢你。' },
                    { speaker: 'narrator', text: '她说完这句话。' },
                    { speaker: 'narrator', text: '感觉脸有点热。' },
                    { speaker: 'xia_wan', text: '（说出来了...）' },
                    { speaker: 'gan_zhiyu', text: '...' },
                    { speaker: 'narrator', text: '方圆愣了一下。' },
                    { speaker: 'narrator', text: '然后笑了。' },
                    { speaker: 'gan_zhiyu', text: '没想到是你先说。' },
                    { speaker: 'xia_wan', text: '...什么？' },
                    { speaker: 'gan_zhiyu', text: '本来想等店里稳定一点再说的。' },
                    { speaker: 'narrator', text: '他轻轻叹了口气。' },
                    { speaker: 'gan_zhiyu', text: '其实我一直在想怎么开口。' },
                    { speaker: 'gan_zhiyu', text: '没想到你比我勇敢。' },
                    { speaker: 'xia_wan', text: '所以...？' },
                    { speaker: 'gan_zhiyu', text: '所以...' },
                    { speaker: 'narrator', text: '他伸出手。' },
                    { speaker: 'narrator', text: '轻轻揉了揉她的头发。' },
                    { speaker: 'gan_zhiyu', text: '我也喜欢你啊。' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'narrator', text: '夏晚感觉心跳快得要飞出来。' },
                    { speaker: 'narrator', text: '她没想到。' },
                    { speaker: 'narrator', text: '那个平时看起来游刃有余的人。' },
                    { speaker: 'narrator', text: '也有这么温柔的一面。' }
                ],
                choices: [
                    { text: '（踮起脚尖亲了他一下）', next: 'xw_4_6_active_ganzhiyu_success', affinity: { gan_zhiyu: 25 }, friendship: { gan_zhiyu: 5 } },
                    { text: '（低头笑了）那以后请多指教了', next: 'xw_4_6_active_ganzhiyu_success', affinity: { gan_zhiyu: 20 }, friendship: { gan_zhiyu: 3 } }
                ]
            },

            {
                id: 'xw_4_5_active_wuya',
                title: '主动告白·吴琊',
                background: 'bg-shop',
                mood: 'nervous',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚找到了吴琊。' },
                    { speaker: 'narrator', text: '他正站在门口。' },
                    { speaker: 'narrator', text: '像是在想什么事情。' },
                    { speaker: 'narrator', text: '看到夏晚过来，他的眼神动了动。' },
                    { speaker: 'wu_ya', text: '...还没走？' },
                    { speaker: 'xia_wan', text: '嗯...吴琊，我有话想跟你说。' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '他点点头。' },
                    { speaker: 'narrator', text: '没有说话。' },
                    { speaker: 'narrator', text: '但那种安静的等待。' },
                    { speaker: 'narrator', text: '让夏晚觉得...他是在认真听的。' },
                    { speaker: 'xia_wan', text: '我一直记得。' },
                    { speaker: 'xia_wan', text: '你来当店长之后。' },
                    { speaker: 'xia_wan', text: '变了很多。' },
                    { speaker: 'xia_wan', text: '从那个不知道说什么的人。' },
                    { speaker: 'xia_wan', text: '变成了现在这样...可靠的人。' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'xia_wan', text: '我一直觉得。' },
                    { speaker: 'xia_wan', text: '你很好。' },
                    { speaker: 'xia_wan', text: '只是不太会表达。' },
                    { speaker: 'xia_wan', text: '吴琊...' },
                    { speaker: 'xia_wan', text: '我喜欢你。' },
                    { speaker: 'narrator', text: '夏晚说完这句话。' },
                    { speaker: 'narrator', text: '有点紧张地看着他。' },
                    { speaker: 'xia_wan', text: '（他会怎么回答...）' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '沉默了很久。' },
                    { speaker: 'narrator', text: '吴琊低下头。' },
                    { speaker: 'xia_wan', text: '（是我太直接了吗...）' },
                    { speaker: 'wu_ya', text: '谢谢。' },
                    { speaker: 'narrator', text: '他的声音很轻。' },
                    { speaker: 'xia_wan', text: '...嗯？' },
                    { speaker: 'wu_ya', text: '谢谢你说出来。' },
                    { speaker: 'wu_ya', text: '其实我一直觉得自己不擅长这些。' },
                    { speaker: 'narrator', text: '他抬起头。' },
                    { speaker: 'narrator', text: '看着夏晚的眼睛。' },
                    { speaker: 'wu_ya', text: '但既然你都说了...' },
                    { speaker: 'wu_ya', text: '那我也不藏着了。' },
                    { speaker: 'wu_ya', text: '我也喜欢你。' },
                    { speaker: 'xia_wan', text: '（...！）' },
                    { speaker: 'narrator', text: '夏晚愣住了。' },
                    { speaker: 'narrator', text: '她第一次听到吴琊说这么多话。' },
                    { speaker: 'narrator', text: '也是第一次看到他眼睛里这么亮的光。' }
                ],
                choices: [
                    { text: '（轻轻握住他的手）谢谢你', next: 'xw_4_6_active_wuya_success', affinity: { wu_ya: 25 }, friendship: { wu_ya: 5 } },
                    { text: '（笑了）原来你也会说这么多话', next: 'xw_4_6_active_wuya_success', affinity: { wu_ya: 20 }, friendship: { wu_ya: 3 } }
                ]
            },

            // =============================================
            // 主动告白成功场景
            // =============================================

            {
                id: 'xw_4_6_active_xiaotong_success',
                title: '确定关系',
                background: 'bg-shop',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚紧紧抱住木星。' },
                    { speaker: 'narrator', text: '他的怀抱很温暖。' },
                    { speaker: 'narrator', text: '带着淡淡的洗衣液香味。' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'narrator', text: '木星轻轻回抱住她。' },
                    { speaker: 'xiao_tong', text: '谢谢你。' },
                    { speaker: 'xia_wan', text: '谢什么...' },
                    { speaker: 'xiao_tong', text: '谢谢你愿意喜欢我。' },
                    { speaker: 'xia_wan', text: '（木星...）' },
                    { speaker: 'narrator', text: '秋夜的风有点凉。' },
                    { speaker: 'narrator', text: '但夏晚一点都不觉得冷。' },
                    { speaker: 'narrator', text: '因为此刻。' },
                    { speaker: 'narrator', text: '她觉得自己是世界上最幸福的人。' }
                ],
                choices: [],
                next: 'xw_4_7',
                confession: { character: 'xiao_tong' }
            },

            {
                id: 'xw_4_6_active_longxinheng_success',
                title: '确定关系',
                background: 'bg-shop',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚笑着拍了拍他的肩。' },
                    { speaker: 'xia_wan', text: '以后别藏着了，知道吗？' },
                    { speaker: 'long_xinheng', text: '...好。' },
                    { speaker: 'narrator', text: '他轻轻笑了。' },
                    { speaker: 'narrator', text: '那笑容里有一种她从没见过的释然。' },
                    { speaker: 'long_xinheng', text: '夏晚。' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'long_xinheng', text: '谢谢你来找我。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'narrator', text: '月光洒在他们身上。' },
                    { speaker: 'narrator', text: '这个夜晚很安静。' },
                    { speaker: 'narrator', text: '但夏晚知道。' },
                    { speaker: 'narrator', text: '从今晚开始。' },
                    { speaker: 'narrator', text: '一切都会不一样了。' }
                ],
                choices: [],
                next: 'xw_4_7',
                confession: { character: 'long_xinheng' }
            },

            {
                id: 'xw_4_6_active_ganzhiyu_success',
                title: '确定关系',
                background: 'bg-shop',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚踮起脚尖。' },
                    { speaker: 'narrator', text: '在他脸颊上轻轻亲了一下。' },
                    { speaker: 'gan_zhiyu', text: '...' },
                    { speaker: 'narrator', text: '方圆愣了一下。' },
                    { speaker: 'narrator', text: '然后笑了。' },
                    { speaker: 'narrator', text: '那笑容里有一种她从没见过的温柔。' },
                    { speaker: 'gan_zhiyu', text: '你啊...' },
                    { speaker: 'xia_wan', text: '怎么？不行吗？' },
                    { speaker: 'gan_zhiyu', text: '没有不行。' },
                    { speaker: 'narrator', text: '他轻轻揉了揉她的头发。' },
                    { speaker: 'gan_zhiyu', text: '只是没想到你这么主动。' },
                    { speaker: 'xia_wan', text: '（脸红了）喜欢就要说出来嘛...' },
                    { speaker: 'narrator', text: '他笑了。' },
                    { speaker: 'narrator', text: '那笑容在吧台的灯光下显得格外温暖。' }
                ],
                choices: [],
                next: 'xw_4_7',
                confession: { character: 'gan_zhiyu' }
            },

            {
                id: 'xw_4_6_active_wuya_success',
                title: '确定关系',
                background: 'bg-shop',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚轻轻握住吴琊的手。' },
                    { speaker: 'xia_wan', text: '谢谢你。' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '他愣了一下。' },
                    { speaker: 'narrator', text: '然后轻轻回握住她的手。' },
                    { speaker: 'wu_ya', text: '谢谢你说出来。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'narrator', text: '月光洒在他们身上。' },
                    { speaker: 'narrator', text: '很安静。' },
                    { speaker: 'narrator', text: '但那种安静不再是尴尬。' },
                    { speaker: 'narrator', text: '而是一种...默契。' },
                    { speaker: 'narrator', text: '不需要太多话。' },
                    { speaker: 'narrator', text: '只要在一起就很好的默契。' }
                ],
                choices: [],
                next: 'xw_4_7',
                confession: { character: 'wu_ya' }
            },

            // =============================================
            // 告白接受场景
            // =============================================

            {
                id: 'xw_4_6_confession_xiaotong_accept',
                title: '确定关系',
                background: 'bg-shop',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'xia_wan', text: '我也...喜欢你。' },
                    { speaker: 'narrator', text: '夏晚的声音有点颤抖。' },
                    { speaker: 'narrator', text: '但她的眼神很坚定。' },
                    { speaker: 'xiao_tong', text: '...' },
                    { speaker: 'narrator', text: '木星愣了一下。' },
                    { speaker: 'narrator', text: '然后他笑了。' },
                    { speaker: 'narrator', text: '那个总是沉默的人。' },
                    { speaker: 'narrator', text: '此刻笑得像个孩子。' },
                    { speaker: 'xiao_tong', text: '...谢谢你。' },
                    { speaker: 'xia_wan', text: '谢什么...' },
                    { speaker: 'xiao_tong', text: '谢谢你愿意喜欢我。' },
                    { speaker: 'xia_wan', text: '（木星...）' },
                    { speaker: 'narrator', text: '秋夜的风有点凉。' },
                    { speaker: 'narrator', text: '但夏晚觉得很暖。' },
                    { speaker: 'narrator', text: '因为身边的人。' },
                    { speaker: 'narrator', text: '因为这份感情。' },
                    { speaker: 'narrator', text: '等了那么久。' },
                    { speaker: 'narrator', text: '终于有了回应。' },
                    { speaker: 'xiao_tong', text: '...回去吧。' },
                    { speaker: 'xiao_tong', text: '外面凉。' },
                    { speaker: 'xia_wan', text: '嗯...' },
                    { speaker: 'narrator', text: '两人并肩走向店里。' },
                    { speaker: 'narrator', text: '月光洒在他们身上。' },
                    { speaker: 'narrator', text: '像是一幅画。' },
                    { speaker: 'narrator', text: '一个属于他们的画。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【进入恋爱关系】' }
                ],
                choices: [],
                next: 'xw_4_7'
            },

            {
                id: 'xw_4_6_confession_longxinheng_accept',
                title: '确定关系',
                background: 'bg-shop',
                mood: 'joyful',
                dialogues: [
                    { speaker: 'xia_wan', text: '我也...喜欢你。' },
                    { speaker: 'long_xinheng', text: '...真的吗？' },
                    { speaker: 'xia_wan', text: '真的。' },
                    { speaker: 'xia_wan', text: '其实我也不知道从什么时候开始...' },
                    { speaker: 'xia_wan', text: '看到你笑，我就会很开心。' },
                    { speaker: 'xia_wan', text: '你不在的时候，我会想你。' },
                    { speaker: 'long_xinheng', text: '...夏晚。' },
                    { speaker: 'narrator', text: '他的声音有点哽咽。' },
                    { speaker: 'xia_wan', text: '（...他在哭吗？）' },
                    { speaker: 'long_xinheng', text: '谢谢你...愿意喜欢我。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'narrator', text: '他笑着擦了擦眼睛。' },
                    { speaker: 'narrator', text: '那个总是笑着的人。' },
                    { speaker: 'narrator', text: '原来也会哭。' },
                    { speaker: 'narrator', text: '但他的笑...比夏晚见过的任何一次都要真实。' },
                    { speaker: 'long_xinheng', text: '那我们就...在一起啦？' },
                    { speaker: 'xia_wan', text: '嗯。' },
                    { speaker: 'narrator', text: '夏晚点点头。' },
                    { speaker: 'narrator', text: '嘴角不自觉地弯了起来。' },
                    { speaker: 'narrator', text: '原来喜欢一个人。' },
                    { speaker: 'narrator', text: '被一个人喜欢。' },
                    { speaker: 'narrator', text: '是这样的感觉。' },
                    { speaker: 'narrator', text: '很暖。' },
                    { speaker: 'narrator', text: '很幸福。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【进入恋爱关系】' }
                ],
                choices: [],
                next: 'xw_4_7'
            },

            {
                id: 'xw_4_6_confession_ganzhiyu_accept',
                title: '确定关系',
                background: 'bg-shop',
                mood: 'joyful',
                dialogues: [
                    { speaker: 'xia_wan', text: '我愿意。' },
                    { speaker: 'narrator', text: '夏晚的声音很轻。' },
                    { speaker: 'narrator', text: '但很坚定。' },
                    { speaker: 'gan_zhiyu', text: '...真的吗？' },
                    { speaker: 'xia_wan', text: '真的。' },
                    { speaker: 'xia_wan', text: '方圆哥...' },
                    { speaker: 'xia_wan', text: '其实我早就想说了。' },
                    { speaker: 'xia_wan', text: '你努力的样子，真的很帅。' },
                    { speaker: 'gan_zhiyu', text: '...我帅吗？' },
                    { speaker: 'xia_wan', text: '嗯。很帅。' },
                    { speaker: 'narrator', text: '方圆愣了一下。' },
                    { speaker: 'narrator', text: '然后他笑了。' },
                    { speaker: 'narrator', text: '是那种很真的笑。' },
                    { speaker: 'narrator', text: '不是平时那种玩世不恭的笑。' },
                    { speaker: 'gan_zhiyu', text: '那我可得继续保持帅气的形象了～' },
                    { speaker: 'xia_wan', text: '哈哈哈方圆哥你又来了～' },
                    { speaker: 'gan_zhiyu', text: '嘿嘿～' },
                    { speaker: 'narrator', text: '他伸出手，轻轻揉了揉夏晚的头。' },
                    { speaker: 'narrator', text: '那个动作...' },
                    { speaker: 'narrator', text: '带着一点宠溺。' },
                    { speaker: 'narrator', text: '和一点小心翼翼。' },
                    { speaker: 'narrator', text: '夏晚觉得自己很幸运。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【进入恋爱关系】' }
                ],
                choices: [],
                next: 'xw_4_7'
            },

            {
                id: 'xw_4_6_confession_wuya_accept',
                title: '确定关系',
                background: 'bg-shop',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'xia_wan', text: '我也...喜欢你。' },
                    { speaker: 'wu_ya', text: '...' },
                    { speaker: 'narrator', text: '沉默了很久。' },
                    { speaker: 'narrator', text: '然后吴琊笑了。' },
                    { speaker: 'narrator', text: '只是轻轻弯了一下嘴角。' },
                    { speaker: 'narrator', text: '但夏晚看到了。' },
                    { speaker: 'narrator', text: '那是一个很真的笑。' },
                    { speaker: 'narrator', text: '好像心里的某块石头终于落了地。' },
                    { speaker: 'wu_ya', text: '...谢谢。' },
                    { speaker: 'xia_wan', text: '谢什么...' },
                    { speaker: 'wu_ya', text: '谢谢你愿意喜欢我。' },
                    { speaker: 'wu_ya', text: '我以为我会一直一个人。' },
                    { speaker: 'xia_wan', text: '（...吴琊...）' },
                    { speaker: 'narrator', text: '他说完就转过身去。' },
                    { speaker: 'narrator', text: '但夏晚注意到了。' },
                    { speaker: 'narrator', text: '他的耳朵红了。' },
                    { speaker: 'xia_wan', text: '（吴琊...你真的很可爱。）' },
                    { speaker: 'narrator', text: '她忍不住笑了。' },
                    { speaker: 'narrator', text: '原来喜欢一个人。' },
                    { speaker: 'narrator', text: '不需要说太多话。' },
                    { speaker: 'narrator', text: '只要他在那里。' },
                    { speaker: 'narrator', text: '就觉得很安心。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【进入恋爱关系】' }
                ],
                choices: [],
                next: 'xw_4_7'
            },

            {
                id: 'xw_4_6_confession_think',
                title: '犹豫',
                background: 'bg-shop',
                mood: 'melancholy',
                dialogues: [
                    { speaker: 'xia_wan', text: '我...我想再考虑一下...' },
                    { speaker: 'narrator', text: '夏晚低下头。' },
                    { speaker: 'narrator', text: '沉默了一会儿。' },
                    { speaker: 'narrator', text: '对方轻轻叹了口气。' },
                    { speaker: 'narrator', text: '没关系。' },
                    { speaker: 'narrator', text: '我等你。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'narrator', text: '这种温柔...' },
                    { speaker: 'narrator', text: '让她更心疼了。' },
                    { speaker: 'xia_wan', text: '对不起...' },
                    { speaker: 'narrator', text: '不用道歉。' },
                    { speaker: 'narrator', text: '你的感受比什么都重要。' },
                    { speaker: 'xia_wan', text: '（...再给我一点时间...）' }
                ],
                next: 'xw_4_7_open'
            },
            
            // =============================================
            // 开放结局尾声
            // =============================================
            {
                id: 'xw_4_7_open',
                title: '未完待续',
                background: 'bg-shop',
                mood: 'melancholy',
                dialogues: [
                    { speaker: 'narrator', text: '那天之后。' },
                    { speaker: 'narrator', text: '夏晚一直在想。' },
                    { speaker: 'narrator', text: '那份感情是真的。' },
                    { speaker: 'narrator', text: '但她还没准备好。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '2025年11月。' },
                    { speaker: 'narrator', text: '店里传来消息。' },
                    { speaker: 'narrator', text: '要搬迁了。' },
                    { speaker: 'narrator', text: '新的店名叫「墨染剧本杀」。' },
                    { speaker: 'narrator', text: '从盒装店正式转型为城限情感本专门店。' },
                    { speaker: 'narrator', text: '阿昊走了。' },
                    { speaker: 'narrator', text: '吴琊当了店长。' },
                    { speaker: 'narrator', text: '而她...' },
                    { speaker: 'narrator', text: '还是没能给出答案。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她的手机震动了。' },
                    { speaker: 'narrator', text: '是那个人发来的消息。' },
                    { speaker: 'narrator', text: '「不管你怎么选择，我都在。」' },
                    { speaker: 'xia_wan', text: '（...谢谢你。）' },
                    { speaker: 'narrator', text: '夏晚看着那句话。' },
                    { speaker: 'narrator', text: '眼眶有些湿润。' },
                    { speaker: 'narrator', text: '这个秋天。' },
                    { speaker: 'narrator', text: '有些遗憾。' },
                    { speaker: 'narrator', text: '但也许...' },
                    { speaker: 'narrator', text: '故事还没有结束。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【开放结局】' },
                    { speaker: 'narrator', text: '夏晚线 第四章「甜蜜与危机」 完' }
                ],
                choices: [],
                next: null
            },

            // =============================================
            // 尾声
            // =============================================

            {
                id: 'xw_4_7',
                title: '尾声',
                background: 'bg-shop',
                mood: 'joyful',
                dialogues: [
                    { speaker: 'narrator', text: '确定关系后的日子。' },
                    { speaker: 'narrator', text: '夏晚觉得一切都不一样了。' },
                    { speaker: 'narrator', text: '每次去店里。' },
                    { speaker: 'narrator', text: '看到那个人的时候。' },
                    { speaker: 'narrator', text: '心跳都会漏一拍。' },
                    { speaker: 'narrator', text: '而那个人...' },
                    { speaker: 'narrator', text: '虽然还是那样沉默。' },
                    { speaker: 'narrator', text: '但夏晚能感觉到。' },
                    { speaker: 'narrator', text: '他的目光会不自觉地跟着她。' },
                    { speaker: 'narrator', text: '他的手会不经意间碰到她的手。' },
                    { speaker: 'narrator', text: '虽然只是一瞬间。' },
                    { speaker: 'narrator', text: '但夏晚觉得很幸福。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '2025年11月。' },
                    { speaker: 'narrator', text: '店里传来消息。' },
                    { speaker: 'narrator', text: '要搬迁了。' },
                    { speaker: 'narrator', text: '新的店名叫「墨染剧本杀」。' },
                    { speaker: 'narrator', text: '从盒装店正式转型为城限情感本专门店。' },
                    { speaker: 'narrator', text: '夏晚看着群里的消息。' },
                    { speaker: 'narrator', text: '心里有些感慨。' },
                    { speaker: 'xia_wan', text: '（一切都变了呢...）' },
                    { speaker: 'narrator', text: '阿昊走了。' },
                    { speaker: 'narrator', text: '吴琊当了店长。' },
                    { speaker: 'narrator', text: '而她...' },
                    { speaker: 'narrator', text: '收获了一份感情。' },
                    { speaker: 'narrator', text: '一个属于这个夏天的故事。' },
                    { speaker: 'narrator', text: '才刚刚开始。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她的手机震动了。' },
                    { speaker: 'narrator', text: '是那个人发来的消息。' },
                    { speaker: 'narrator', text: '「明天见。」' },
                    { speaker: 'xia_wan', text: '「嗯，明天见。」' },
                    { speaker: 'narrator', text: '夏晚看着那句「明天见」。' },
                    { speaker: 'narrator', text: '嘴角不自觉地弯了起来。' },
                    { speaker: 'narrator', text: '这个秋天。' },
                    { speaker: 'narrator', text: '因为有了喜欢的人。' },
                    { speaker: 'narrator', text: '一切都变得很美好。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第四章「甜蜜与危机」 完' }
                ],
                choices: [],
                next: 'xw_5_start'
            },
            
            // --- 没有告白的日常延续 ---
            {
                id: 'xw_4_8',
                title: '日常',
                background: 'bg-shop',
                mood: 'peaceful',
                dialogues: [
                    { speaker: 'narrator', text: '日子一天天过去。' },
                    { speaker: 'narrator', text: '夏晚继续在店里工作。' },
                    { speaker: 'narrator', text: '和木星、谨言、方圆、吴琊相处。' },
                    { speaker: 'narrator', text: '每天都很忙碌。' },
                    { speaker: 'narrator', text: '也很充实。' },
                    { speaker: 'narrator', text: '虽然没有发生什么特别的事。' },
                    { speaker: 'narrator', text: '但夏晚觉得。' },
                    { speaker: 'narrator', text: '现在的生活也很好。' },
                    { speaker: 'narrator', text: '有朋友。' },
                    { speaker: 'narrator', text: '有工作。' },
                    { speaker: 'narrator', text: '有值得期待的事。' },
                    { speaker: 'narrator', text: '至于感情的事...' },
                    { speaker: 'xia_wan', text: '（顺其自然吧）' },
                    { speaker: 'narrator', text: '夏晚这样想着。' },
                    { speaker: 'narrator', text: '窗外阳光正好。' },
                    { speaker: 'narrator', text: '又是新的一天。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚线 第四章「甜蜜与危机」 完' }
                ],
                choices: [],
                next: 'xw_5_start'
            }

        ]
    },

    // ================================================================
    // 夏晚线 第五章：山海（恋人线）/ 遥遥（单身线）
    // 时间：2025年11月 - 2026年新年
    // 入口：xw_5_start → game.js动态分流
    // ================================================================
    xia_wan_chapter5: {
        title: '第五章',
        subtitle: '山海 / 遥遥',
        scenes: [

            // ============================================================
            // 【过渡入口】xw_5_start
            // game.js在此处检测 this.relationship 状态：
            //   有恋人 → 进入 xw_5_lover_[charKey]（对应角色线）
            //   无恋人 → 进入 xw_5_single_1（单身线）
            // ============================================================
            {
                id: 'xw_5_start',
                title: '过渡',
                background: 'bg-shop',
                mood: 'peaceful',
                dialogues: [
                    { speaker: 'narrator', text: '十一月。' },
                    { speaker: 'narrator', text: '剧本杀店要搬迁了。' },
                    { speaker: 'narrator', text: '新的店址在另一条街上，更大，也更安静。' },
                    { speaker: 'narrator', text: '大家都在帮忙收拾东西。' },
                    { speaker: 'narrator', text: '夏晚站在角落，看着眼前这一片熟悉的混乱。' },
                    { speaker: 'narrator', text: '她来这里的第一天，就是在这扇窗前坐的。' },
                    { speaker: 'narrator', text: '不知不觉，快一年了。' }
                ],
                choices: [],
                next: null   // game.js动态跳转
            },

            // ============================================================
            // 【恋人线·木星】xw_5_lover_xiaotong_*
            // 主题：日常甜蜜 + 新年一起倒数 + 吃醋矛盾 + 信任考验
            // ============================================================
            {
                id: 'xw_5_lover_xiaotong_1',
                title: '那我们现在是什么关系',
                background: 'bg-street',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '告白后的第三天。' },
                    { speaker: 'narrator', text: '夏晚一直没有主动提。' },
                    { speaker: 'narrator', text: '木星也没有提。' },
                    { speaker: 'narrator', text: '就好像两个人都在等对方先开口。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天下班，木星把她截在店门口。' },
                    { speaker: 'xiao_tong', text: '等一下。' },
                    { speaker: 'narrator', text: '夏晚回过头，他把一个小盒子塞进她手里。' },
                    { speaker: 'narrator', text: '是一枚对戒。' },
                    { speaker: 'narrator', text: '两枚，一大一小，装在同一个盒子里。' },
                    { speaker: 'xia_wan', text: '...' },
                    { speaker: 'xiao_tong', text: '我想说清楚我们的关系。' },
                    { speaker: 'xiao_tong', text: '如果你也这么想的话。' },
                    { speaker: 'narrator', text: '他低着头，声音有点哑。' },
                    { speaker: 'narrator', text: '夏晚看着手里的盒子，忽然觉得鼻子有点酸。' },
                    { speaker: 'narrator', text: '明明才过了三天。' },
                    { speaker: 'narrator', text: '他已经去买戒指了。' }
                ],
                choices: [
                    { text: '（打开盒子，把小的那枚套上）', next: 'xw_5_lover_xiaotong_1b', affinity: { xiao_tong: 20 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_1b',
                title: '戴戒指',
                background: 'bg-street',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚打开盒子。' },
                    { speaker: 'narrator', text: '把小的那个取出来，套在无名指上。' },
                    { speaker: 'narrator', text: '戒指有点凉，碰到皮肤的时候她抖了一下。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '木星低着头，一直没看她。' },
                    { speaker: 'narrator', text: '但夏晚注意到，他的手放在口袋里，好像在攥着什么。' },
                    { speaker: 'xia_wan', text: '……我戴上了。' },
                    { speaker: 'narrator', text: '她的声音很轻。' },
                    { speaker: 'narrator', text: '木星终于抬起头。' },
                    { speaker: 'narrator', text: '他看了一眼她的手指。' },
                    { speaker: 'narrator', text: '然后很快移开了目光。' },
                    { speaker: 'xiao_tong', text: '嗯。' },
                    { speaker: 'narrator', text: '就一个字。' },
                    { speaker: 'narrator', text: '但他的耳根红了。' },
                    { speaker: 'narrator', text: '夏晚看着他，忍不住笑了。' },
                    { speaker: 'narrator', text: '这个人，平时那么冷淡。' },
                    { speaker: 'narrator', text: '原来紧张起来是这个样子。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他把自己那枚也拿出来，套上。' },
                    { speaker: 'narrator', text: '动作有点生涩，像是不太习惯。' },
                    { speaker: 'narrator', text: '夏晚伸出手，和他并在一起。' },
                    { speaker: 'narrator', text: '两枚戒指挨在一起，在路灯下闪着光。' },
                    { speaker: 'xiao_tong', text: '……走吧。' },
                    { speaker: 'xiao_tong', text: '送你回去。' },
                    { speaker: 'narrator', text: '他说完就往前走，步子迈得很快。' },
                    { speaker: 'narrator', text: '夏晚跟在后面，看着他的背影。' },
                    { speaker: 'narrator', text: '她低头看了看手上的戒指。' },
                    { speaker: 'narrator', text: '嘴角一直压不下去。' }
                ],
                choices: [
                    { text: '（小跑两步牵住他的手）', next: 'xw_5_lover_xiaotong_1c', affinity: { xiao_tong: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_1c',
                title: '告白之后',
                background: 'bg-street',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '她小跑两步，追上他。' },
                    { speaker: 'narrator', text: '然后伸出手，牵住了他的手指。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '木星的步子顿了一下。' },
                    { speaker: 'narrator', text: '然后，没有抽开。' },
                    { speaker: 'narrator', text: '他只是把她的手握紧了一点。' },
                    { speaker: 'narrator', text: '两个人就这样走在路灯下。' },
                    { speaker: 'narrator', text: '手牵着手。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚偷偷看他。' },
                    { speaker: 'narrator', text: '他看着前方，表情很淡。' },
                    { speaker: 'narrator', text: '但他的耳朵，红得能滴血。' },
                    { speaker: 'narrator', text: '她忍不住笑出声。' },
                    { speaker: 'xiao_tong', text: '……笑什么。' },
                    { speaker: 'xia_wan', text: '没什么。' },
                    { speaker: 'xia_wan', text: '就是觉得你耳朵好红。' },
                    { speaker: 'narrator', text: '他没说话。' },
                    { speaker: 'narrator', text: '但空着的那只手抬起来，摸了一下自己的耳朵。' },
                    { speaker: 'narrator', text: '然后很快放下来。' },
                    { speaker: 'narrator', text: '假装什么都没发生。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚把头靠在他肩上。' },
                    { speaker: 'narrator', text: '他没有躲开。' },
                    { speaker: 'narrator', text: '只是步子慢了一点。' },
                    { speaker: 'narrator', text: '好像在配合她的节奏。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那条路其实不长。' },
                    { speaker: 'narrator', text: '但那天晚上，走得格外慢。' },
                    { speaker: 'narrator', text: '好像谁都不想那么快到终点。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '到了宿舍楼下。' },
                    { speaker: 'narrator', text: '木星停下脚步。' },
                    { speaker: 'narrator', text: '他低头看着她，有点欲言又止。' },
                    { speaker: 'xia_wan', text: '怎么了？' },
                    { speaker: 'xiao_tong', text: '……明天见。' },
                    { speaker: 'narrator', text: '他说得很轻。' },
                    { speaker: 'narrator', text: '但夏晚听得很清楚。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '明天见。' },
                    { speaker: 'narrator', text: '不是"再见"，是"明天见"。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她笑着踮起脚尖，在他脸上亲了一下。' },
                    { speaker: 'narrator', text: '然后转身跑进了宿舍楼。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '跑进电梯的时候，她回头看了一眼。' },
                    { speaker: 'narrator', text: '他还站在楼下。' },
                    { speaker: 'narrator', text: '看着她进去，才转身离开。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她躺在床上的时候，还在笑。' },
                    { speaker: 'narrator', text: '室友问她怎么了。' },
                    { speaker: 'narrator', text: '她说没什么。' },
                    { speaker: 'narrator', text: '然后把被子蒙在头上。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '室友说：你恋爱了吧。' },
                    { speaker: 'narrator', text: '她没有回答。' },
                    { speaker: 'narrator', text: '但嘴角压不下去。' }
                ],
                choices: [
                    { text: '（第二天，搬店）', next: 'xw_5_lover_xiaotong_2', affinity: {} }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_2',
                title: '搬店',
                background: 'bg-shop',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '搬店的那周。' },
                    { speaker: 'narrator', text: '大家分工明确。' },
                    { speaker: 'narrator', text: '橙子和170负责装饰，谨言和方圆搬东西，吴琊居中调度。' },
                    { speaker: 'narrator', text: '夏晚负责整理剧本。' },
                    { speaker: 'narrator', text: '木星站在她旁边，帮她搬箱子。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他的动作很稳。' },
                    { speaker: 'narrator', text: '一箱一箱地搬，从老店到新车，不紧不慢。' },
                    { speaker: 'narrator', text: '夏晚蹲在旁边整理剧本，时不时抬头看他一眼。' },
                    { speaker: 'narrator', text: '他额头上有汗，但没去擦。' },
                    { speaker: 'narrator', text: '只是把箱子放下的时候，顺手把她手边的水杯推了推。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '橙子从旁边经过，小声说：' },
                    { speaker: 'chengzi', text: '（拖长音）哎哟——终于在一起了吗？' },
                    { speaker: 'yu_haitong', text: '橙子你别瞎说。' },
                    { speaker: 'narrator', text: '170笑着推了橙子一下。' },
                    { speaker: 'narrator', text: '夏晚耳根一热，低下头继续整理剧本。' },
                    { speaker: 'narrator', text: '假装什么都没听见。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但她注意到，木星也假装没听见。' },
                    { speaker: 'narrator', text: '只是嘴角翘了一下。' },
                    { speaker: 'narrator', text: '她低下头，心里像有东西在轻轻冒泡。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '过了一会儿，木星把最后一箱剧本搬过来。' },
                    { speaker: 'narrator', text: '蹲在她旁边，帮她一起拆封。' },
                    { speaker: 'narrator', text: '没说话。' },
                    { speaker: 'narrator', text: '但他的肩膀偶尔碰一下她的肩膀。' },
                    { speaker: 'narrator', text: '夏晚低头笑了。' },
                    { speaker: 'narrator', text: '他什么都没说。' },
                    { speaker: 'narrator', text: '但他做的每一件事，都像在说。' }
                ],
                choices: [
                    { text: '（故意没回答，继续整理）', next: 'xw_5_lover_xiaotong_2b', affinity: { xiao_tong: 5 } },
                    { text: '「闭嘴，干活。」', next: 'xw_5_lover_xiaotong_2b', affinity: { xiao_tong: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_2b',
                title: '搬店之后',
                background: 'bg-shop',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '搬完最后一箱，天已经黑了。' },
                    { speaker: 'narrator', text: '大家都陆续走了。' },
                    { speaker: 'narrator', text: '只剩他们两个在新店里。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚坐在地上，看着刚挂好的「墨染」招牌。' },
                    { speaker: 'narrator', text: '木星走过来，在她旁边坐下。' },
                    { speaker: 'narrator', text: '也不说话。' },
                    { speaker: 'narrator', text: '就那样并肩坐着。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '过了很久，他开口。' },
                    { speaker: 'xiao_tong', text: '累吗？' },
                    { speaker: 'xia_wan', text: '还好。' },
                    { speaker: 'xiao_tong', text: '明天休息。' },
                    { speaker: 'xia_wan', text: '你呢？' },
                    { speaker: 'xiao_tong', text: '我没事。' },
                    { speaker: 'narrator', text: '夏晚看了他一眼。' },
                    { speaker: 'narrator', text: '他的脸上有灰，不知道什么时候蹭上去的。' },
                    { speaker: 'xia_wan', text: '你脸上有东西。' },
                    { speaker: 'narrator', text: '她伸手，帮他擦了一下。' },
                    { speaker: 'narrator', text: '木星愣了一下。' },
                    { speaker: 'narrator', text: '然后侧过头，让她擦。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚收回手，发现他的耳根又红了。' },
                    { speaker: 'narrator', text: '她忽然觉得，他这个人真的很奇怪。' },
                    { speaker: 'narrator', text: '平时那么冷。' },
                    { speaker: 'narrator', text: '脸红起来却那么容易。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但就是这样的他，让她觉得。' },
                    { speaker: 'narrator', text: '安心。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_xiaotong_3', affinity: { xiao_tong: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_3',
                title: '新年夜',
                background: 'bg-metro',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '十二月三十一号。' },
                    { speaker: 'narrator', text: '大家各自回老家了。' },
                    { speaker: 'narrator', text: '木星送夏晚到高铁站。' },
                    { speaker: 'narrator', text: '还有二十分钟检票。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他们站在候车厅外面。' },
                    { speaker: 'narrator', text: '周围人来人往，广播里一遍遍播报着站台信息。' },
                    { speaker: 'narrator', text: '谁都没说话。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '木星从口袋里掏出一个东西。' },
                    { speaker: 'narrator', text: '是一条红绳编的手链。' },
                    { speaker: 'narrator', text: '上面挂着一个小小的生肖。' },
                    { speaker: 'xiao_tong', text: '给你。' },
                    { speaker: 'narrator', text: '他说话的时候没看她。' },
                    { speaker: 'xia_wan', text: '……新年礼物？' },
                    { speaker: 'xiao_tong', text: '嗯。' },
                    { speaker: 'xiao_tong', text: '我编的。' },
                    { speaker: 'narrator', text: '夏晚接过来。' },
                    { speaker: 'narrator', text: '编得很丑，歪歪扭扭的。' },
                    { speaker: 'narrator', text: '但她看着那个歪歪扭扭的结，忽然觉得鼻子有点酸。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她把红绳系在手腕上。' },
                    { speaker: 'narrator', text: '和戒指并排。' },
                    { speaker: 'xia_wan', text: '好看。' },
                    { speaker: 'xiao_tong', text: '……手笨。' },
                    { speaker: 'narrator', text: '他终于抬起头，看了她一眼。' },
                    { speaker: 'xiao_tong', text: '明年给你编个好点的。' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他的耳根又红了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她忽然想，明年。' },
                    { speaker: 'narrator', text: '他说的是明年。' },
                    { speaker: 'narrator', text: '不是随便说说的那种。' },
                    { speaker: 'narrator', text: '是真的在计划着以后。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '检票开始了。' },
                    { speaker: 'narrator', text: '他帮她拖着行李箱走到闸机前。' },
                    { speaker: 'narrator', text: '放下，然后转过来看她。' },
                    { speaker: 'narrator', text: '夏晚站在那里，没动。' },
                    { speaker: 'xiao_tong', text: '快去。' },
                    { speaker: 'narrator', text: '他说。' },
                    { speaker: 'narrator', text: '声音有点低。' },
                    { speaker: 'xia_wan', text: '嗯。' },
                    { speaker: 'narrator', text: '夏晚把行李拖进去。' },
                    { speaker: 'narrator', text: '走了几步，回头。' },
                    { speaker: 'narrator', text: '他还站在那里，一动不动地看着她。' },
                    { speaker: 'narrator', text: '夏晚对他挥了挥手。' },
                    { speaker: 'narrator', text: '他也挥了挥。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '新年夜，深圳，凌晨零点。' },
                    { speaker: 'narrator', text: '夏晚的手机震了。' },
                    { speaker: 'xiao_tong', text: '「新年快乐。」' },
                    { speaker: 'xiao_tong', text: '「第一条消息给你。」' },
                    { speaker: 'narrator', text: '夏晚看着手机屏幕。' },
                    { speaker: 'narrator', text: '窗外烟花在响。' },
                    { speaker: 'narrator', text: '她低头看了看手腕上的红绳。' },
                    { speaker: 'narrator', text: '还有手上的戒指。' },
                    { speaker: 'narrator', text: '忽然就笑了。' }
                ],
                choices: [
                    { text: '「新年快乐。明年一起倒数。」', next: 'xw_5_lover_xiaotong_4', affinity: { xiao_tong: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_4',
                title: '青梅竹马',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '新年后的第一周。' },
                    { speaker: 'narrator', text: '橙子在群里发了一张截图。' },
                    { speaker: 'narrator', text: '是微博上有人晒出一张照片：一个女生和木星并肩站着，背景是云阳县的江边。' },
                    { speaker: 'narrator', text: '配文是：「故人相聚，新年快乐。」' },
                    { speaker: 'chengzi', text: '（私聊夏晚）夏晚你看到没有……' },
                    { speaker: 'narrator', text: '夏晚盯着那张照片。' },
                    { speaker: 'narrator', text: '那个女生笑得很开心。' },
                    { speaker: 'narrator', text: '木星也笑着。' },
                    { speaker: 'narrator', text: '她把手机放下。' },
                    { speaker: 'narrator', text: '又拿起来。' },
                    { speaker: 'narrator', text: '又放下。' },
                    { speaker: 'narrator', text: '心里有一块地方开始不舒服。' },
                    { speaker: 'narrator', text: '但她告诉自己：他回家了，见见朋友很正常。' }
                ],
                choices: [
                    { text: '（直接问木星）', next: 'xw_5_lover_xiaotong_4a', affinity: { xiao_tong: -5 } },
                    { text: '（憋着，什么都不说）', next: 'xw_5_lover_xiaotong_4b', affinity: { xiao_tong: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_4a',
                title: '直接问',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'xia_wan', text: '「微博上那个和你一起拍照的是谁。」' },
                    { speaker: 'narrator', text: '发出去之后，夏晚就后悔了。' },
                    { speaker: 'narrator', text: '语气听起来像在质问。' },
                    { speaker: 'narrator', text: '她等了三分钟。' },
                    { speaker: 'xiao_tong', text: '「小学同学，青梅竹马那种。」' },
                    { speaker: 'xiao_tong', text: '「你看到了？」' },
                    { speaker: 'xia_wan', text: '「嗯。」' },
                    { speaker: 'xiao_tong', text: '「她喜欢我。但我不喜欢她。」' },
                    { speaker: 'xiao_tong', text: '「我跟她说清楚了。」' },
                    { speaker: 'narrator', text: '夏晚盯着那几行字。' },
                    { speaker: 'narrator', text: '他主动说清楚了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但不知道为什么，心里还是有点难受。' },
                    { speaker: 'narrator', text: '不是因为不信任他。' },
                    { speaker: 'narrator', text: '是因为……自己做不到那么淡定。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '青梅竹马的事暂时过去了。' },
                    { speaker: 'narrator', text: '但几天后，另一个更大的炸弹来了。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_xiaotong_5', affinity: { xiao_tong: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_4b',
                title: '憋着',
                background: 'bg-bedroom',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚什么都没说。' },
                    { speaker: 'narrator', text: '木星后来发来消息。' },
                    { speaker: 'xiao_tong', text: '「你有没有看到微博的事？」' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '原来他知道她会看到。' },
                    { speaker: 'xiao_tong', text: '「是小学同学，青梅竹马。她喜欢我。」' },
                    { speaker: 'xiao_tong', text: '「我跟她说了。不可能的。」' },
                    { speaker: 'narrator', text: '夏晚看着这几行字。' },
                    { speaker: 'narrator', text: '他主动说的。' },
                    { speaker: 'narrator', text: '她什么都没问，他就把所有的来龙去脉都说了。' },
                    { speaker: 'xiao_tong', text: '「你在吗。」' },
                    { speaker: 'xia_wan', text: '「在。」' },
                    { speaker: 'xia_wan', text: '「谢谢你告诉我。」' },
                    { speaker: 'narrator', text: '发完，她把手机翻过来扣在桌上。' },
                    { speaker: 'narrator', text: '她知道自己憋着是不对的。' },
                    { speaker: 'narrator', text: '但她说不出口。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那道墙，还在那里。' },
                    { speaker: 'narrator', text: '但几天后，另一个更大的炸弹来了。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_xiaotong_5', affinity: { xiao_tong: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5',
                title: '出国',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '开学后的第二周。' },
                    { speaker: 'narrator', text: '那天夏晚刚下课，收到一个陌生号码的来电。' },
                    { speaker: 'narrator', text: '她犹豫了一下，接了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '「是夏晚吧？我是木星的妈妈。」' },
                    { speaker: 'narrator', text: '对面是个陌生的女声，听起来很客气。' },
                    { speaker: 'xia_wan', text: '「阿姨好。」' },
                    { speaker: 'narrator', text: '夏晚下意识站直了身子。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '「夏晚啊，阿姨知道你是个好孩子，木星也常提起你。」' },
                    { speaker: 'narrator', text: '「但是阿姨想跟你说，木星马上要毕业了，家里已经在给他准备去英国读研的事情。你也知道，我们家就木星一个男孩……」' },
                    { speaker: 'narrator', text: '后面的话，夏晚没怎么听进去。' },
                    { speaker: 'narrator', text: '她只记得最后一句。' },
                    { speaker: 'narrator', text: '「希望你能理解。」' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '挂了电话，她站在走廊里发呆。' },
                    { speaker: 'narrator', text: '来来往往的学生从她身边走过。' },
                    { speaker: 'narrator', text: '她什么都感觉不到。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '英国。' },
                    { speaker: 'narrator', text: '研究生。' },
                    { speaker: 'narrator', text: '木星从来没跟她提过。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起前几天那张微博的照片。' },
                    { speaker: 'narrator', text: '想起他说的"青梅竹马"。' },
                    { speaker: 'narrator', text: '想起他说"我跟她说了，不可能"。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那他呢？' },
                    { speaker: 'narrator', text: '他有没有跟她说，他要去英国？' },
                    { speaker: 'narrator', text: '他有没有跟她说过他们之间的事？' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '心里的那根刺，忽然变得很长。' }
                ],
                choices: [
                    { text: '（直接问木星）', next: 'xw_5_lover_xiaotong_5a', affinity: { xiao_tong: -5 } },
                    { text: '（憋着，什么都不说）', next: 'xw_5_lover_xiaotong_5b', affinity: { xiao_tong: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5a',
                title: '直接问',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚终于忍不住了。' },
                    { speaker: 'narrator', text: '她打开对话框，手指悬在键盘上，打了又删，删了又打。' },
                    { speaker: 'narrator', text: '最后发出去的，只有几个字。' },
                    { speaker: 'xia_wan', text: '「你是不是要出国？」' },
                    { speaker: 'narrator', text: '发出去之后，她盯着屏幕，心跳得很快。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '十分钟后，回复来了。' },
                    { speaker: 'xiao_tong', text: '「我妈给你打电话了？」' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '他没有否认。' },
                    { speaker: 'xia_wan', text: '「嗯。」' },
                    { speaker: 'xia_wan', text: '「你打算瞒我到什么时候？」' },
                    { speaker: 'narrator', text: '她终于问出了那句话。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我没有想瞒你。」' },
                    { speaker: 'xiao_tong', text: '「我只是不知道怎么开口。」' },
                    { speaker: 'narrator', text: '夏晚盯着那两行字。' },
                    { speaker: 'narrator', text: '不知道怎么开口。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想问更多。' },
                    { speaker: 'narrator', text: '想问你是自己想去还是家里逼的。' },
                    { speaker: 'narrator', text: '想问那个青梅竹马知不知道你要出国。' },
                    { speaker: 'narrator', text: '想问你的未来里有没有我。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但她打不出来。' },
                    { speaker: 'narrator', text: '她怕问了，得到的答案是她不想听的。' }
                ],
                choices: [
                    { text: '「英国的研究生，是你自己想去的吗？」', next: 'xw_5_lover_xiaotong_5a_detail', affinity: { xiao_tong: 10 } },
                    { text: '「你到底有没有想过我们的未来？」', next: 'xw_5_lover_xiaotong_5a_future', affinity: { xiao_tong: -5 } },
                    { text: '（沉默，不知道该说什么）', next: 'xw_5_lover_xiaotong_5a_silent', affinity: { xiao_tong: 0 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5a_detail',
                title: '他的答案',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚鼓起勇气，问出了那个问题。' },
                    { speaker: 'xia_wan', text: '「英国的研究生，是你自己想去的吗？」' },
                    { speaker: 'narrator', text: '发出去之后，她盯着屏幕。' },
                    { speaker: 'narrator', text: '很久没有回复。' },
                    { speaker: 'narrator', text: '五分钟。十分钟。十五分钟。' },
                    { speaker: 'narrator', text: '就在她以为他不会回复的时候——' },
                    { speaker: 'xiao_tong', text: '「是我妈想让我去的。」' },
                    { speaker: 'xiao_tong', text: '「她说一个本科毕业能找到什么好工作。」' },
                    { speaker: 'xiao_tong', text: '「家里就我一个男孩，以后总要回来的。」' },
                    { speaker: 'narrator', text: '夏晚看着这几行字。' },
                    { speaker: 'narrator', text: '她知道这不是全部的答案。' },
                    { speaker: 'narrator', text: '但至少，他开始说了。' }
                ],
                choices: [
                    { text: '「你自己呢？你自己想吗？」', next: 'xw_5_lover_xiaotong_5a_want', affinity: { xiao_tong: 5 }, repair: 5 },
                    { text: '「那你打算怎么办？去还是不去？」', next: 'xw_5_lover_xiaotong_5a_decide', affinity: { xiao_tong: 0 }, repair: -5 },
                    { text: '「嗯，我知道了。」', next: 'xw_5_lover_xiaotong_5a_ok', affinity: { xiao_tong: -5 }, repair: -10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5a_future',
                title: '未来',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚深吸一口气。' },
                    { speaker: 'xia_wan', text: '「你到底有没有想过我们的未来？」' },
                    { speaker: 'narrator', text: '这个问题憋了很久了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '很久。' },
                    { speaker: 'narrator', text: '很久很久。' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕，心一点点往下沉。' },
                    { speaker: 'narrator', text: '他沉默得越久，她的答案就越明显。' },
                    { speaker: 'xiao_tong', text: '「夏晚。」' },
                    { speaker: 'narrator', text: '他终于回复了。' },
                    { speaker: 'xiao_tong', text: '「我想过。」' },
                    { speaker: 'xiao_tong', text: '「但我不知道该怎么选。」' },
                    { speaker: 'narrator', text: '夏晚盯着这两行字。' },
                    { speaker: 'narrator', text: '不知道该怎么选。' },
                    { speaker: 'narrator', text: '不是"不需要选"。' },
                    { speaker: 'narrator', text: '是"不知道该怎么选"。' }
                ],
                choices: [
                    { text: '「那你现在告诉我，你选什么？」', next: 'xw_5_lover_xiaotong_5a_force', affinity: { xiao_tong: -10 }, repair: -15 },
                    { text: '「……我等你。」', next: 'xw_5_lover_xiaotong_5a_wait', affinity: { xiao_tong: 10 }, repair: 10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5a_silent',
                title: '沉默',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚盯着屏幕。' },
                    { speaker: 'narrator', text: '她不知道该说什么。' },
                    { speaker: 'narrator', text: '想问的太多，能说出口的太少。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '最后，她什么都没打。' },
                    { speaker: 'narrator', text: '她把对话框关了。' },
                    { speaker: 'narrator', text: '躺到床上，盯着天花板。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '木星的消息很快来了。' },
                    { speaker: 'xiao_tong', text: '「夏晚？」' },
                    { speaker: 'xiao_tong', text: '「你还在吗？」' },
                    { speaker: 'narrator', text: '她看着那两条消息。' },
                    { speaker: 'narrator', text: '手指在屏幕上悬了很久。' },
                    { speaker: 'narrator', text: '最后，她打了两个字。' }
                ],
                choices: [
                    { text: '「在。」', next: 'xw_5_lover_xiaotong_5a_respond', affinity: { xiao_tong: 5 }, repair: 0 },
                    { text: '（不回，假装睡了）', next: 'xw_5_lover_xiaotong_5b', affinity: { xiao_tong: -5 }, repair: -10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5a_want',
                title: '他自己想吗',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'xia_wan', text: '「你自己呢？你自己想吗？」' },
                    { speaker: 'narrator', text: '她又追问了一句。' },
                    { speaker: 'narrator', text: '这次，她没打算让他逃。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我不知道。」' },
                    { speaker: 'narrator', text: '四个字。' },
                    { speaker: 'xiao_tong', text: '「说实话，我不知道。」' },
                    { speaker: 'xiao_tong', text: '「我妈说的也有道理。」' },
                    { speaker: 'xiao_tong', text: '「但我不想离开你。」' },
                    { speaker: 'narrator', text: '夏晚看着最后那句话。' },
                    { speaker: 'narrator', text: '心里有什么东西松了一下。' },
                    { speaker: 'narrator', text: '但也只是一下。' },
                    { speaker: 'narrator', text: '不想离开你——' },
                    { speaker: 'narrator', text: '但"不想"不能当答案。' }
                ],
                choices: [
                    { text: '「那我们好好谈谈。」', next: 'xw_5_lover_xiaotong_6', affinity: { xiao_tong: 5 }, repair: 5 },
                    { text: '「你这样说，我不知道该怎么办。」', next: 'xw_5_lover_xiaotong_6b', affinity: { xiao_tong: -5 }, repair: -5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5a_decide',
                title: '逼他决定',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'xia_wan', text: '「那你打算怎么办？去还是不去？」' },
                    { speaker: 'narrator', text: '她把问题抛了回去。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「……你不要逼我。」' },
                    { speaker: 'narrator', text: '夏晚愣住了。' },
                    { speaker: 'narrator', text: '逼他？' },
                    { speaker: 'narrator', text: '她只是想问一句他的打算。' },
                    { speaker: 'narrator', text: '这叫逼吗？' },
                    { speaker: 'xia_wan', text: '「我没有逼你。」' },
                    { speaker: 'xia_wan', text: '「我只是想知道你有没有把我放进你的计划里。」' },
                    { speaker: 'narrator', text: '发完这句，她盯着屏幕。' },
                    { speaker: 'narrator', text: '那边很久没有回复。' }
                ],
                choices: [
                    { text: '（继续等）', next: 'xw_5_lover_xiaotong_6b', affinity: { xiao_tong: -5 }, repair: -5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5a_ok',
                title: '知道了',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'xia_wan', text: '「嗯，我知道了。」' },
                    { speaker: 'narrator', text: '夏晚打完这几个字，愣了一下。' },
                    { speaker: 'narrator', text: '这不像是她的风格。' },
                    { speaker: 'narrator', text: '但她不知道该说什么。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「夏晚。」' },
                    { speaker: 'xiao_tong', text: '「你生气了吗？」' },
                    { speaker: 'narrator', text: '夏晚看着这条消息。' },
                    { speaker: 'narrator', text: '生气？' },
                    { speaker: 'narrator', text: '她不知道自己在气什么。' },
                    { speaker: 'narrator', text: '气他要出国？气他瞒着她？' },
                    { speaker: 'narrator', text: '还是气他到现在都还没给她一个答案？' }
                ],
                choices: [
                    { text: '「我在生气。但我不知道在气什么。」', next: 'xw_5_lover_xiaotong_6', affinity: { xiao_tong: 5 }, repair: 5 },
                    { text: '「没有。」', next: 'xw_5_lover_xiaotong_6b', affinity: { xiao_tong: -5 }, repair: -5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5a_force',
                title: '逼他',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'xia_wan', text: '「那你现在告诉我，你选什么？」' },
                    { speaker: 'narrator', text: '夏晚把问题扔了回去。' },
                    { speaker: 'narrator', text: '她知道这样做可能会让他更逃避。' },
                    { speaker: 'narrator', text: '但她不想再等了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '很久没有回复。' },
                    { speaker: 'narrator', text: '十分钟。二十分钟。三十分钟。' },
                    { speaker: 'narrator', text: '夏晚的心一点点往下沉。' },
                    { speaker: 'narrator', text: '她突然意识到——' },
                    { speaker: 'narrator', text: '他不回复，本身就是一种答案。' }
                ],
                choices: [
                    { text: '「……算了，当我没问。」', next: 'xw_5_lover_xiaotong_6b', affinity: { xiao_tong: -10 }, repair: -10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5a_wait',
                title: '我等你',
                background: 'bg-phone',
                mood: 'touched',
                dialogues: [
                    { speaker: 'xia_wan', text: '「……我等你。」' },
                    { speaker: 'narrator', text: '夏晚打完这三个字。' },
                    { speaker: 'narrator', text: '她不知道自己哪来的勇气。' },
                    { speaker: 'narrator', text: '但她知道，这是她能给的最大的信任。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「夏晚。」' },
                    { speaker: 'xiao_tong', text: '「谢谢你。」' },
                    { speaker: 'narrator', text: '夏晚看着这三个字。' },
                    { speaker: 'narrator', text: '心里那块石头，没有完全放下。' },
                    { speaker: 'narrator', text: '但至少，他说谢谢了。' },
                    { speaker: 'narrator', text: '至少，他没有沉默。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_xiaotong_7', affinity: { xiao_tong: 10 }, repair: 10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5a_respond',
                title: '回应',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'xia_wan', text: '「在。」' },
                    { speaker: 'narrator', text: '就一个字。' },
                    { speaker: 'narrator', text: '发完之后，她盯着屏幕。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「今天的事……对不起。」' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '他道歉了。' },
                    { speaker: 'narrator', text: '但她不知道该说什么。' },
                    { speaker: 'narrator', text: '对不起——' },
                    { speaker: 'narrator', text: '这三个字什么都解决不了。' }
                ],
                choices: [
                    { text: '「不是你的错。」', next: 'xw_5_lover_xiaotong_6', affinity: { xiao_tong: 5 }, repair: 5 },
                    { text: '「嗯。」', next: 'xw_5_lover_xiaotong_6b', affinity: { xiao_tong: -5 }, repair: -5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5a_end',
                title: '等待',
                background: 'bg-room',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，夏晚没有再发消息。' },
                    { speaker: 'narrator', text: '木星也没有。' },
                    { speaker: 'narrator', text: '两个人就这样沉默了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '窗外的风吹过，树叶沙沙作响。' },
                    { speaker: 'narrator', text: '夏晚躺在床上，盯着天花板。' },
                    { speaker: 'narrator', text: '她不知道明天会怎样。' },
                    { speaker: 'narrator', text: '她只知道，他们之间，有什么东西变了。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_xiaotong_6b', affinity: { xiao_tong: 0 }, repair: 0 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_5b',
                title: '憋着',
                background: 'bg-bedroom',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚什么都没说。' },
                    { speaker: 'narrator', text: '她假装什么都没发生。' },
                    { speaker: 'narrator', text: '假装那个电话从来没打过。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '木星照常发消息。' },
                    { speaker: 'narrator', text: '早安。晚安。今天吃了什么。' },
                    { speaker: 'narrator', text: '夏晚回得很慢。' },
                    { speaker: 'narrator', text: '有时候只有一两个字。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「你最近是不是有心事？」' },
                    { speaker: 'narrator', text: '那天他问。' },
                    { speaker: 'xia_wan', text: '「没有。」' },
                    { speaker: 'narrator', text: '夏晚说。' },
                    { speaker: 'narrator', text: '她知道自己在逃避。' },
                    { speaker: 'narrator', text: '但她不知道该怎么问。' },
                    { speaker: 'narrator', text: '该怎么开口说"你妈妈告诉我你要出国"。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那道墙，还在那里。' },
                    { speaker: 'narrator', text: '而现在，那道墙上又多了一道裂缝。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_xiaotong_6', affinity: { xiao_tong: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_6',
                title: '争吵',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '几天后。' },
                    { speaker: 'narrator', text: '木星越来越忙。' },
                    { speaker: 'narrator', text: '消息回得越来越慢。' },
                    { speaker: 'narrator', text: '有时候夏晚发出去的消息，要等半天才有回复。' },
                    { speaker: 'narrator', text: '有时候甚至没有回复。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天晚上，她打电话，他接了，但声音很疲。' },
                    { speaker: 'xiao_tong', text: '喂。' },
                    { speaker: 'xia_wan', text: '你最近是不是有点忙？' },
                    { speaker: 'xiao_tong', text: '嗯，店里的事比较多。' },
                    { speaker: 'narrator', text: '夏晚把心里那句话又咽了回去。' },
                    { speaker: 'narrator', text: '沉默了几秒。' },
                    { speaker: 'xiao_tong', text: '还有什么事吗？' },
                    { speaker: 'narrator', text: '她听出他语气里的疲惫，那句话就更说不出口了。' },
                    { speaker: 'xia_wan', text: '没事，就是想打给你。' },
                    { speaker: 'narrator', text: '又沉默了几秒。' },
                    { speaker: 'narrator', text: '她想问英国的事。' },
                    { speaker: 'narrator', text: '想问他是真的想出国，还是家里逼的。' },
                    { speaker: 'narrator', text: '想问他的未来里有没有她。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但最后，她什么都没问。' },
                    { speaker: 'xia_wan', text: '那你先忙吧，晚安。' },
                    { speaker: 'xiao_tong', text: '嗯，晚安。' },
                    { speaker: 'narrator', text: '嘟——' },
                    { speaker: 'narrator', text: '电话挂了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那种憋着的感觉越来越重。' },
                    { speaker: 'narrator', text: '直到三天后的那晚。' },
                    { speaker: 'narrator', text: '她又看到那张微博照片被橙子转发了。' },
                    { speaker: 'narrator', text: '配文是：「青梅竹马什么的最好嗑了！」' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚盯着那张照片看了很久。' },
                    { speaker: 'narrator', text: '木星在笑。' },
                    { speaker: 'narrator', text: '那个女生也在笑。' },
                    { speaker: 'narrator', text: '她又想起木星妈妈的那通电话。' },
                    { speaker: 'narrator', text: '想起「英国」。' },
                    { speaker: 'narrator', text: '想起「希望你能理解」。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她忽然觉得很难受。' },
                    { speaker: 'narrator', text: '不是吃醋。' },
                    { speaker: 'narrator', text: '是那种，明明有女朋友，却要被瞒着所有事情的憋屈感。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她按下了拨打键。' },
                    { speaker: 'xiao_tong', text: '喂？' },
                    { speaker: 'xia_wan', text: '「你到底有没有想过我们的未来？」' },
                    { speaker: 'narrator', text: '话一出口，她自己都愣了一下。' },
                    { speaker: 'narrator', text: '她本来想问青梅竹马的事。' },
                    { speaker: 'narrator', text: '但出口的，却是这句话。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '电话那端沉默了很久。' },
                    { speaker: 'xiao_tong', text: '「……你到底想说什么？」' },
                    { speaker: 'narrator', text: '他的声音听起来很累。' },
                    { speaker: 'xia_wan', text: '「你妈妈告诉我你要去英国。」' },
                    { speaker: 'xia_wan', text: '「你打算瞒我到什么时候？」' },
                    { speaker: 'narrator', text: '夏晚终于问出来了。' },
                    { speaker: 'narrator', text: '那句话憋了很久的话。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我没有瞒你。」' },
                    { speaker: 'xiao_tong', text: '「我只是不知道怎么开口。」' },
                    { speaker: 'xia_wan', text: '「不知道怎么开口？」' },
                    { speaker: 'xia_wan', text: '「你是不知道怎么开口，还是根本没想过要告诉我？」' },
                    { speaker: 'narrator', text: '她的声音在发抖。' },
                    { speaker: 'narrator', text: '不只是出国的事。' },
                    { speaker: 'narrator', text: '还有那张微博照片。' },
                    { speaker: 'narrator', text: '还有他越来越慢的回复。' },
                    { speaker: 'narrator', text: '还有她一直憋着的所有情绪。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「你和那个青梅竹马拍照的时候，有没有想过我？」' },
                    { speaker: 'xia_wan', text: '「你去英国的时候，有没有想过我？」' },
                    { speaker: 'xia_wan', text: '「你到底有没有想过我们的未来？」' },
                    { speaker: 'narrator', text: '三个问题，一次性全问出来了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '电话那端沉默了。' },
                    { speaker: 'narrator', text: '很久。' },
                    { speaker: 'xiao_tong', text: '「夏晚。」' },
                    { speaker: 'narrator', text: '他叫她名字。' },
                    { speaker: 'xiao_tong', text: '「你别逼我。」' },
                    { speaker: 'narrator', text: '这句话像一盆冷水。' },
                    { speaker: 'narrator', text: '夏晚愣在那里。' },
                    { speaker: 'narrator', text: '她逼他了吗。' },
                    { speaker: 'narrator', text: '她只是想问一句，他有没有把她放进他的未来里。' },
                    { speaker: 'narrator', text: '这叫逼吗。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她没有回复。' },
                    { speaker: 'narrator', text: '他也没有再发。' },
                    { speaker: 'narrator', text: '那天晚上，他们就这样沉默了。' }
                ],
                choices: [
                    { text: '（主动发消息道歉）', next: 'xw_5_lover_xiaotong_6a', affinity: { xiao_tong: 10 }, repair: 10 },
                    { text: '（等他先开口）', next: 'xw_5_lover_xiaotong_6b', affinity: { xiao_tong: -5 }, repair: -10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_6a',
                title: '先低头',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚打开对话框。' },
                    { speaker: 'narrator', text: '打字，删掉。再打，再删。' },
                    { speaker: 'narrator', text: '最后她发出去的，只有三个字。' },
                    { speaker: 'xia_wan', text: '「对不起。」' },
                    { speaker: 'narrator', text: '发完，她把手机扔到床上，躺着盯天花板。' },
                    { speaker: 'narrator', text: '一分钟。五分钟。十分钟。' },
                    { speaker: 'narrator', text: '手机震了。' },
                    { speaker: 'xiao_tong', text: '「我也是。」' },
                    { speaker: 'narrator', text: '就四个字。' },
                    { speaker: 'narrator', text: '夏晚把手机按在胸口。' },
                    { speaker: 'narrator', text: '那道裂缝还在。' },
                    { speaker: 'narrator', text: '但至少，他们还在一起。' },
                    { speaker: 'narrator', text: '至少，还没有放弃。' }
                ],
                choices: [
                    { text: '「我们能不能好好谈谈？」', next: 'xw_5_lover_xiaotong_7', affinity: { xiao_tong: 10 }, repair: 10 },
                    { text: '「嗯，早点睡吧。」', next: 'xw_5_lover_xiaotong_7b', affinity: { xiao_tong: 5 }, repair: -5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_6b',
                title: '冷战',
                background: 'bg-room',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '三天过去了。' },
                    { speaker: 'narrator', text: '他没有联系她。' },
                    { speaker: 'narrator', text: '她也没有联系他。' },
                    { speaker: 'narrator', text: '夏晚每天打开对话框无数次。' },
                    { speaker: 'narrator', text: '每次都退出来。' },
                    { speaker: 'narrator', text: '她不知道在等什么。' },
                    { speaker: 'narrator', text: '等他先说对不起？' },
                    { speaker: 'narrator', text: '可是那句"你要的关注我给不起，那就算了"。' },
                    { speaker: 'narrator', text: '她不知道那到底是气头上说的，还是他真的这么想的。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '第五天的晚上，他终于发来消息。' },
                    { speaker: 'xiao_tong', text: '「对不起。那天说的话有点过了。」' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕。' },
                    { speaker: 'narrator', text: '手指动了好几次，才打出那句话。' },
                    { speaker: 'xia_wan', text: '「我也对不起。」' },
                    { speaker: 'narrator', text: '裂缝还在那里。' },
                    { speaker: 'narrator', text: '只是暂时停战了。' }
                ],
                choices: [
                    { text: '「我们能不能好好谈谈？」', next: 'xw_5_lover_xiaotong_7', affinity: { xiao_tong: 10 }, repair: 5 },
                    { text: '「嗯，先这样吧。」', next: 'xw_5_lover_xiaotong_7b', affinity: { xiao_tong: 0 }, repair: -10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_7',
                title: '裂缝之后',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '消息发出去之后，夏晚等了很久。' },
                    { speaker: 'narrator', text: '十分钟。二十分钟。半小时。' },
                    { speaker: 'narrator', text: '她以为他又要很久才回。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '手机震了。' },
                    { speaker: 'xiao_tong', text: '「好。」' },
                    { speaker: 'xiao_tong', text: '「什么时候？」' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '她没想到他答应得这么快。' },
                    { speaker: 'xia_wan', text: '「这周末？」' },
                    { speaker: 'xiao_tong', text: '「好。我去找你。」' },
                    { speaker: 'narrator', text: '就五个字。' },
                    { speaker: 'narrator', text: '但夏晚盯着看了很久。' },
                    { speaker: 'narrator', text: '他愿意来找她。' },
                    { speaker: 'narrator', text: '他没有说"忙"，没有说"没时间"。' },
                    { speaker: 'narrator', text: '他说"我去找你"。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她忽然觉得，那道墙好像没那么高了。' }
                ],
                choices: [
                    { text: '「那我等你。」', next: 'xw_5_lover_xiaotong_7a', affinity: { xiao_tong: 10 }, repair: 5 },
                    { text: '「不用了，我去找你吧。」', next: 'xw_5_lover_xiaotong_7b_detail', affinity: { xiao_tong: 15 }, repair: 10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_7a',
                title: '等待',
                background: 'bg-metro',
                mood: 'nervous',
                dialogues: [
                    { speaker: 'narrator', text: '那几天过得很慢。' },
                    { speaker: 'narrator', text: '夏晚每天都看日历，数着日子。' },
                    { speaker: 'narrator', text: '周四。周五。周六。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '周六早上，木星发来消息。' },
                    { speaker: 'xiao_tong', text: '「出发了。」' },
                    { speaker: 'narrator', text: '夏晚看着那三个字，心跳漏了一拍。' },
                    { speaker: 'narrator', text: '他真的来了。' },
                    { speaker: 'narrator', text: '从云阳，坐几个小时的高铁。' },
                    { speaker: 'narrator', text: '就为了见她一面。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她站在地铁站出口等他。' },
                    { speaker: 'narrator', text: '远远地看见他从扶梯上来。' },
                    { speaker: 'narrator', text: '还是那个样子。' },
                    { speaker: 'narrator', text: '黑色外套，单肩包，走路很快。' },
                    { speaker: 'narrator', text: '但看见她的时候，他的脚步慢了下来。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他没有笑。' },
                    { speaker: 'narrator', text: '她也没有笑。' },
                    { speaker: 'narrator', text: '两个人就那样站着，隔了两米远。' }
                ],
                choices: [
                    { text: '（先开口）「你来了。」', next: 'xw_5_lover_xiaotong_8', affinity: { xiao_tong: 10 }, repair: 5 },
                    { text: '（不说话，走过去牵他的手）', next: 'xw_5_lover_xiaotong_8', affinity: { xiao_tong: 15 }, repair: 10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_7b_detail',
                title: '我去找你',
                background: 'bg-phone',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚犹豫了一下。' },
                    { speaker: 'xia_wan', text: '「还是我去找你吧。」' },
                    { speaker: 'narrator', text: '发出去她就后悔了。' },
                    { speaker: 'narrator', text: '会不会显得太主动？' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「不用。」' },
                    { speaker: 'xiao_tong', text: '「我去找你。」' },
                    { speaker: 'narrator', text: '又是这几个字。' },
                    { speaker: 'xiao_tong', text: '「上次是我不对。」' },
                    { speaker: 'xiao_tong', text: '「该我来找你。」' },
                    { speaker: 'narrator', text: '夏晚看着屏幕。' },
                    { speaker: 'narrator', text: '他什么时候变得这么会说话了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「好。」' },
                    { speaker: 'xia_wan', text: '「那我等你。」' },
                    { speaker: 'narrator', text: '这次，她终于打出了这三个字。' },
                    { speaker: 'narrator', text: '我等你。' },
                    { speaker: 'narrator', text: '以前都是他在等她。' },
                    { speaker: 'narrator', text: '现在，轮到她等他了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '周六早上，他发来消息。' },
                    { speaker: 'xiao_tong', text: '「到了。」' },
                    { speaker: 'narrator', text: '夏晚抓起包就往外跑。' }
                ],
                choices: [
                    { text: '（去见他）', next: 'xw_5_lover_xiaotong_8', affinity: { xiao_tong: 10 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_7b',
                title: '沉默之后',
                background: 'bg-phone',
                mood: 'cold',
                dialogues: [
                    { speaker: 'narrator', text: '「嗯，先这样吧。」' },
                    { speaker: 'narrator', text: '夏晚发出去之后，把手机放在一边。' },
                    { speaker: 'narrator', text: '她不知道自己在赌什么气。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「好。」' },
                    { speaker: 'narrator', text: '就一个字。' },
                    { speaker: 'narrator', text: '夏晚盯着那个字看了很久。' },
                    { speaker: 'narrator', text: '她以为他会多说点什么。' },
                    { speaker: 'narrator', text: '结果他什么都没说。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那之后，两人的聊天变得很少。' },
                    { speaker: 'narrator', text: '早安。晚安。偶尔一句。' },
                    { speaker: 'narrator', text: '就像例行公事。' },
                    { speaker: 'narrator', text: '夏晚不知道这段感情还剩下什么。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '两周后的某天，木星突然发来消息。' },
                    { speaker: 'xiao_tong', text: '「周末有空吗？」' },
                    { speaker: 'xiao_tong', text: '「我来找你。」' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '她没想到他会主动来。' }
                ],
                choices: [
                    { text: '「好。」', next: 'xw_5_lover_xiaotong_8', affinity: { xiao_tong: 5 }, repair: 5 },
                    { text: '「不用了。」', next: 'xw_5_lover_xiaotong_8b', affinity: { xiao_tong: -10 }, repair: -15 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_8',
                title: '见面',
                background: 'bg-street',
                mood: 'nervous',
                dialogues: [
                    { speaker: 'narrator', text: '两个人走在街上。' },
                    { speaker: 'narrator', text: '谁都没有先开口。' },
                    { speaker: 'narrator', text: '就像两个陌生人。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '最后还是木星先打破了沉默。' },
                    { speaker: 'xiao_tong', text: '那天的话……' },
                    { speaker: 'narrator', text: '他说得很慢，像是在斟酌每一个字。' },
                    { speaker: 'xiao_tong', text: '我不是那个意思。' },
                    { speaker: 'xia_wan', text: '...' },
                    { speaker: 'xiao_tong', text: '我是真的很忙。' },
                    { speaker: 'xiao_tong', text: '但这不是借口。' },
                    { speaker: 'narrator', text: '他停下脚步，转过来看着她。' },
                    { speaker: 'xiao_tong', text: '我以后会注意的。' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他的眼睛里没有平时的冷淡。' },
                    { speaker: 'narrator', text: '只有认真。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '我知道你忙。' },
                    { speaker: 'narrator', text: '夏晚开口。' },
                    { speaker: 'xia_wan', text: '只是……' },
                    { speaker: 'xia_wan', text: '她不知道该怎么说下去。' },
                    { speaker: 'xiao_tong', text: '只是什么？' },
                    { speaker: 'narrator', text: '他问。' },
                    { speaker: 'narrator', text: '声音很轻。' },
                    { speaker: 'narrator', text: '但夏晚能感觉到，他在等。' }
                ],
                choices: [
                    { text: '「只是异地太难了。」', next: 'xw_5_lover_xiaotong_8a', affinity: { xiao_tong: 5 }, repair: 5 },
                    { text: '「只是我太没安全感了。」', next: 'xw_5_lover_xiaotong_8a', affinity: { xiao_tong: 10 }, repair: 10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_8a',
                title: '坦白',
                background: 'bg-street',
                mood: 'sad',
                dialogues: [
                    { speaker: 'xia_wan', text: '「是我不好。」' },
                    { speaker: 'narrator', text: '她低下头。' },
                    { speaker: 'xia_wan', text: '我知道你不是故意的。' },
                    { speaker: 'xia_wan', text: '可是每次你不回消息的时候，我就会想……' },
                    { speaker: 'narrator', text: '她说不下去了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '会想什么？' },
                    { speaker: 'narrator', text: '他的声音很轻。' },
                    { speaker: 'narrator', text: '但夏晚能感觉到，他是真的想知道。' },
                    { speaker: 'xia_wan', text: '「会想你是不是不喜欢我了。」' },
                    { speaker: 'narrator', text: '声音很小。' },
                    { speaker: 'narrator', text: '小到她说完就后悔了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '木星没有说话。' },
                    { speaker: 'narrator', text: '夏晚不敢抬头看他。' },
                    { speaker: 'narrator', text: '她怕看到他失望的表情。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '然后，一只手伸过来。' },
                    { speaker: 'narrator', text: '握住了她的手。' },
                    { speaker: 'xiao_tong', text: '我不会不喜欢你。' },
                    { speaker: 'narrator', text: '他说。' },
                    { speaker: 'xiao_tong', text: '永远不会。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚的眼泪一下子涌上来。' },
                    { speaker: 'narrator', text: '她没有说话。' },
                    { speaker: 'narrator', text: '只是紧紧握住了他的手。' }
                ],
                choices: [
                    { text: '「我也永远不会不喜欢你。」', next: 'xw_5_lover_xiaotong_9', affinity: { xiao_tong: 15 }, repair: 10 },
                    { text: '（不说话，只是握紧他的手）', next: 'xw_5_lover_xiaotong_9', affinity: { xiao_tong: 10 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_8b',
                title: '拒绝',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'xia_wan', text: '「不用了。」' },
                    { speaker: 'narrator', text: '发出去之后，夏晚就后悔了。' },
                    { speaker: 'narrator', text: '可是她不知道该说什么。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「为什么？」' },
                    { speaker: 'xia_wan', text: '「没什么。」' },
                    { speaker: 'narrator', text: '对话框沉默了。' },
                    { speaker: 'narrator', text: '很久。' },
                    { speaker: 'narrator', text: '夏晚以为他会追问。' },
                    { speaker: 'narrator', text: '或者生气。' },
                    { speaker: 'narrator', text: '或者干脆不回。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「夏晚。」' },
                    { speaker: 'narrator', text: '他叫她名字。' },
                    { speaker: 'narrator', text: '不是平时那种懒洋洋的语气。' },
                    { speaker: 'narrator', text: '是很认真的那种。' },
                    { speaker: 'xiao_tong', text: '「我们谈谈吧。」' },
                    { speaker: 'xiao_tong', text: '「视频也行。」' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕。' },
                    { speaker: 'narrator', text: '她的手抖了一下。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「好。」' }
                ],
                choices: [
                    { text: '（接受视频通话）', next: 'xw_5_lover_xiaotong_8c', affinity: { xiao_tong: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_8c',
                title: '视频通话',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '视频接通了。' },
                    { speaker: 'narrator', text: '屏幕上出现木星的脸。' },
                    { speaker: 'narrator', text: '他看起来有点憔悴，眼睛下面有淡淡的青。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「你瘦了。」' },
                    { speaker: 'narrator', text: '他先开口。' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '她以为自己会先开口质问他。' },
                    { speaker: 'narrator', text: '结果听到这句话的时候，眼眶一下子就红了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「夏晚。」' },
                    { speaker: 'narrator', text: '他叫她名字。' },
                    { speaker: 'xiao_tong', text: '「那天的话……我不是那个意思。」' },
                    { speaker: 'narrator', text: '他说得很慢，像是在斟酌每一个字。' },
                    { speaker: 'xiao_tong', text: '「我是真的很忙。但这不是借口。」' },
                    { speaker: 'narrator', text: '夏晚看着屏幕。' },
                    { speaker: 'narrator', text: '他的眼睛里没有平时的冷淡。' },
                    { speaker: 'narrator', text: '只有认真。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我知道异地很难。」' },
                    { speaker: 'narrator', text: '他继续说。' },
                    { speaker: 'xiao_tong', text: '「是我做得不好。」' },
                    { speaker: 'narrator', text: '夏晚的眼泪一下子涌上来。' },
                    { speaker: 'narrator', text: '她没想到他会先认错。' }
                ],
                choices: [
                    { text: '「是我不好……异地太难了，我太没安全感了。」', next: 'xw_5_lover_xiaotong_8d', affinity: { xiao_tong: 10 }, repair: 5 },
                    { text: '「你说得对，我不该逼你。」', next: 'xw_5_lover_xiaotong_8d', affinity: { xiao_tong: 5 }, repair: 5 },
                    { text: '（不说话，只是看着他）', next: 'xw_5_lover_xiaotong_8d', affinity: { xiao_tong: 0 }, repair: 0 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_8d',
                title: '视频里的坦白',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚擦了擦眼泪。' },
                    { speaker: 'xia_wan', text: '「是我不好。」' },
                    { speaker: 'narrator', text: '她开口。' },
                    { speaker: 'xia_wan', text: '「我知道你不是故意的。」' },
                    { speaker: 'xia_wan', text: '「可是每次你不回消息的时候，我就会想……」' },
                    { speaker: 'narrator', text: '她说不下去了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「会想什么？」' },
                    { speaker: 'narrator', text: '他的声音很轻。' },
                    { speaker: 'narrator', text: '但夏晚能感觉到，他是真的想知道。' },
                    { speaker: 'xia_wan', text: '「会想你是不是不喜欢我了。」' },
                    { speaker: 'narrator', text: '声音很小。' },
                    { speaker: 'narrator', text: '小到她说完就后悔了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '屏幕那边沉默了。' },
                    { speaker: 'narrator', text: '夏晚不敢看屏幕。' },
                    { speaker: 'narrator', text: '她怕看到他失望的表情。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「夏晚。」' },
                    { speaker: 'narrator', text: '他又叫她名字。' },
                    { speaker: 'xiao_tong', text: '「我不会不喜欢你。」' },
                    { speaker: 'narrator', text: '他说。' },
                    { speaker: 'xiao_tong', text: '「永远不会。」' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚的眼泪又涌了上来。' },
                    { speaker: 'narrator', text: '她伸手擦了擦屏幕——' },
                    { speaker: 'narrator', text: '屏幕上，木星也在擦掉她的眼泪。' }
                ],
                choices: [
                    { text: '「我也永远不会不喜欢你。」', next: 'xw_5_lover_xiaotong_9', affinity: { xiao_tong: 15 }, repair: 10 },
                    { text: '（不说话，只是点点头）', next: 'xw_5_lover_xiaotong_9', affinity: { xiao_tong: 10 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_9',
                title: '改变',
                background: 'bg-phone',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '那之后，木星变了。' },
                    { speaker: 'narrator', text: '不是那种轰轰烈烈的变化。' },
                    { speaker: 'narrator', text: '是那种……润物细无声的那种。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他开始每天主动发消息。' },
                    { speaker: 'narrator', text: '早上发，晚上发。' },
                    { speaker: 'narrator', text: '不是在吗，而是在干嘛。' },
                    { speaker: 'narrator', text: '吃了什么。睡了多久。' },
                    { speaker: 'narrator', text: '都是些琐碎的小事。' },
                    { speaker: 'narrator', text: '但夏晚每一条都看了好几遍。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有时候他在忙，但忙完一定会补。' },
                    { speaker: 'narrator', text: '「刚才在带本。」' },
                    { speaker: 'narrator', text: '「现在有空了。」' },
                    { speaker: 'narrator', text: '「你想听什么？」' },
                    { speaker: 'narrator', text: '夏晚说想听他讲今天遇到的奇葩顾客。' },
                    { speaker: 'narrator', text: '他就真的给她讲。' },
                    { speaker: 'narrator', text: '一条一条的语音。' },
                    { speaker: 'narrator', text: '讲得很认真，像在汇报工作。' },
                    { speaker: 'narrator', text: '但夏晚听着听着就笑了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他不知道怎么说甜言蜜语。' },
                    { speaker: 'narrator', text: '但他在用他的方式，让她安心。' }
                ],
                choices: [
                    { text: '「肖童，谢谢你。」', next: 'xw_5_lover_xiaotong_9a', affinity: { xiao_tong: 10 }, repair: 5 },
                    { text: '「你不用这样，我知道你忙。」', next: 'xw_5_lover_xiaotong_9b', affinity: { xiao_tong: -5 }, repair: -10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_9a',
                title: '谢谢你',
                background: 'bg-phone',
                mood: 'warm',
                dialogues: [
                    { speaker: 'xia_wan', text: '「肖童，谢谢你。」' },
                    { speaker: 'narrator', text: '发出去之后，她又补了一句。' },
                    { speaker: 'xia_wan', text: '「我知道你不喜欢说太多话。」' },
                    { speaker: 'xia_wan', text: '「但你每天愿意跟我说这些，我就很开心了。」' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '过了很久。' },
                    { speaker: 'narrator', text: '久到夏晚以为他不会回了。' },
                    { speaker: 'xiao_tong', text: '「我不会说话。」' },
                    { speaker: 'xiao_tong', text: '「但你开心，我就开心。」' },
                    { speaker: 'narrator', text: '就这两句。' },
                    { speaker: 'narrator', text: '夏晚盯着看了很久。' },
                    { speaker: 'narrator', text: '她忽然觉得，这个人真的很奇怪。' },
                    { speaker: 'narrator', text: '明明那么冷淡。' },
                    { speaker: 'narrator', text: '说出来的话却总是这么暖。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她把手机贴在胸口。' },
                    { speaker: 'narrator', text: '那天的月亮很亮。' },
                    { speaker: 'narrator', text: '她拍了张照片发给他。' },
                    { speaker: 'xia_wan', text: '「今晚的月亮很好看。」' },
                    { speaker: 'xiao_tong', text: '「我这边也有。」' },
                    { speaker: 'xiao_tong', text: '「给你看。」' },
                    { speaker: 'narrator', text: '他发来一张照片。' },
                    { speaker: 'narrator', text: '是同一轮月亮。' },
                    { speaker: 'narrator', text: '她在深圳，他在云阳。' },
                    { speaker: 'narrator', text: '但他们看的是同一轮月亮。' }
                ],
                choices: [
                    { text: '「同一轮月亮。」', next: 'xw_5_lover_xiaotong_10', affinity: { xiao_tong: 15 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_9b',
                title: '不用特意',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'xia_wan', text: '「你不用这样，我知道你忙。」' },
                    { speaker: 'narrator', text: '发出去她就后悔了。' },
                    { speaker: 'narrator', text: '这不是她想说的。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「不忙。」' },
                    { speaker: 'narrator', text: '他说。' },
                    { speaker: 'xiao_tong', text: '「和你聊天不忙。」' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'xiao_tong', text: '「以前是我不好。」' },
                    { speaker: 'xiao_tong', text: '「我以为只要心里有你就够了。」' },
                    { speaker: 'xiao_tong', text: '「但异地不一样。」' },
                    { speaker: 'xiao_tong', text: '「我得让你感觉到。」' },
                    { speaker: 'narrator', text: '她盯着屏幕。' },
                    { speaker: 'narrator', text: '他说得那么认真。' },
                    { speaker: 'narrator', text: '像是在做检讨。' },
                    { speaker: 'narrator', text: '但夏晚知道，这不是检讨。' },
                    { speaker: 'narrator', text: '这是他笨拙的、认真的一面。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「我也会多理解你的。」' },
                    { speaker: 'xia_wan', text: '「我们一起努力。」' },
                    { speaker: 'xiao_tong', text: '「好。」' }
                ],
                choices: [
                    { text: '「一起努力。」', next: 'xw_5_lover_xiaotong_10', affinity: { xiao_tong: 10 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_10',
                title: '再次起疑',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '一个月后。' },
                    { speaker: 'narrator', text: '夏晚以为一切都在变好。' },
                    { speaker: 'narrator', text: '直到那天橙子发来消息。' },
                    { speaker: 'chengzi', text: '「夏晚你看到微博了吗？」' },
                    { speaker: 'chengzi', text: '「肖童和那个女生又一起吃饭了。」' },
                    { speaker: 'narrator', text: '配了一张截图。' },
                    { speaker: 'narrator', text: '是那个女生的微博。' },
                    { speaker: 'narrator', text: '照片里，肖童和她坐在一家餐厅里。' },
                    { speaker: 'narrator', text: '肖童在笑。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚看着那张照片。' },
                    { speaker: 'narrator', text: '心里那根刺又竖起来了。' },
                    { speaker: 'narrator', text: '上次他明明说清楚了。' },
                    { speaker: 'narrator', text: '上次他说不可能。' },
                    { speaker: 'narrator', text: '可是这张照片……' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她把手机放下。' },
                    { speaker: 'narrator', text: '又拿起来。' },
                    { speaker: 'narrator', text: '又放下。' },
                    { speaker: 'narrator', text: '这次，她没有发消息给肖童。' },
                    { speaker: 'narrator', text: '她不知道该问什么。' },
                    { speaker: 'narrator', text: '也不知道他会不会觉得她又在无理取闹。' }
                ],
                choices: [
                    { text: '（直接问他）', next: 'xw_5_lover_xiaotong_10a', affinity: { xiao_tong: 5 }, repair: 5 },
                    { text: '（憋着不说）', next: 'xw_5_lover_xiaotong_10b', affinity: { xiao_tong: -5 }, repair: -10 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_10a',
                title: '直接问',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚犹豫了很久。' },
                    { speaker: 'narrator', text: '最后还是打开了对话框。' },
                    { speaker: 'xia_wan', text: '「你今天和她吃饭了？」' },
                    { speaker: 'narrator', text: '她尽量让语气显得平静。' },
                    { speaker: 'narrator', text: '但心跳得很快。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「嗯。」' },
                    { speaker: 'narrator', text: '就一个字。' },
                    { speaker: 'narrator', text: '夏晚的心沉了一下。' },
                    { speaker: 'xiao_tong', text: '「她约的我。」' },
                    { speaker: 'xiao_tong', text: '「说有重要的事。」' },
                    { speaker: 'xiao_tong', text: '「她有男朋友了。」' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'xia_wan', text: '「……什么？」' },
                    { speaker: 'xiao_tong', text: '「她说想通了。」' },
                    { speaker: 'xiao_tong', text: '「有了喜欢的人，想好好谈。」' },
                    { speaker: 'xiao_tong', text: '「叫我去，是想说清楚。」' },
                    { speaker: 'xiao_tong', text: '「以后就当普通朋友。」' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕。' },
                    { speaker: 'narrator', text: '她不知道该说什么。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「你看到那张照片了吧。」' },
                    { speaker: 'xiao_tong', text: '「那是她拍的。」' },
                    { speaker: 'xiao_tong', text: '「我本来想删的。」' },
                    { speaker: 'xiao_tong', text: '「但她说发都发了，无所谓。」' },
                    { speaker: 'xiao_tong', text: '「是我考虑不周。」' },
                    { speaker: 'narrator', text: '他又道歉了。' },
                    { speaker: 'narrator', text: '夏晚忽然觉得有点愧疚。' },
                    { speaker: 'narrator', text: '她不该不问就乱想的。' }
                ],
                choices: [
                    { text: '「对不起，我应该先问你的。」', next: 'xw_5_lover_xiaotong_11', affinity: { xiao_tong: 10 }, repair: 5 },
                    { text: '「你应该早点告诉我的。」', next: 'xw_5_lover_xiaotong_11b', affinity: { xiao_tong: 5 }, repair: -5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_10b',
                title: '憋着',
                background: 'bg-room',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚什么都没说。' },
                    { speaker: 'narrator', text: '她假装没看到那张照片。' },
                    { speaker: 'narrator', text: '假装什么都没发生。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但那天晚上，木星发消息的时候。' },
                    { speaker: 'narrator', text: '她回得很慢。' },
                    { speaker: 'narrator', text: '只有一个字，两个字。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「你怎么了？」' },
                    { speaker: 'xia_wan', text: '「没什么。」' },
                    { speaker: 'xiao_tong', text: '「是不是看到什么了？」' },
                    { speaker: 'narrator', text: '夏晚没回。' },
                    { speaker: 'narrator', text: '她不知道该怎么回答。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「是微博的事吗？」' },
                    { speaker: 'narrator', text: '他还是问了。' },
                    { speaker: 'xia_wan', text: '「……」' },
                    { speaker: 'xiao_tong', text: '「我跟你解释。」' },
                    { speaker: 'xiao_tong', text: '「她有男朋友了。」' },
                    { speaker: 'xiao_tong', text: '「今天是来说清楚的。」' },
                    { speaker: 'narrator', text: '他一条接一条地发。' },
                    { speaker: 'narrator', text: '夏晚看着，眼眶有点酸。' },
                    { speaker: 'narrator', text: '他什么都没做错。' },
                    { speaker: 'narrator', text: '是她在胡思乱想。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「对不起。」' },
                    { speaker: 'xiao_tong', text: '「不用道歉。」' },
                    { speaker: 'xiao_tong', text: '「以后有事直接说。」' },
                    { speaker: 'xiao_tong', text: '「我不想你一个人乱想。」' }
                ],
                choices: [
                    { text: '「我知道了，以后会直接问你的。」', next: 'xw_5_lover_xiaotong_11', affinity: { xiao_tong: 10 }, repair: 5 }
                ]
            },
               {
                id: 'xw_5_lover_xiaotong_11',
                title: '约定',
                background: 'bg-phone',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上，他们聊到很晚。' },
                    { speaker: 'narrator', text: '窗外有虫鸣，远处偶尔有车经过。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「其实我也不知道怎么面对你。」' },
                    { speaker: 'narrator', text: '他说得很慢。' },
                    { speaker: 'xiao_tong', text: '「每次你问我怎么了，我都不知道怎么答。」' },
                    { speaker: 'xiao_tong', text: '「有些事……我自己都没想清楚。」' },
                    { speaker: 'narrator', text: '夏晚握着手机，盯着屏幕。' },
                    { speaker: 'narrator', text: '她想追问，想问那是什么事。' },
                    { speaker: 'narrator', text: '但她忍住了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「那你可以慢慢想。」' },
                    { speaker: 'xia_wan', text: '「但你不能什么都不说。」' },
                    { speaker: 'xia_wan', text: '「就算没想清楚，也可以先告诉我你在想。」' },
                    { speaker: 'narrator', text: '发完这条，夏晚有点紧张。' },
                    { speaker: 'narrator', text: '会不会太强势了？' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '很久，消息来了。' },
                    { speaker: 'xiao_tong', text: '「嗯。」' },
                    { speaker: 'xiao_tong', text: '「我尽量。」' },
                    { speaker: 'narrator', text: '又是这种很肖童的回答。' },
                    { speaker: 'narrator', text: '简短，克制，不像承诺。' },
                    { speaker: 'narrator', text: '但夏晚知道，这已经是他能说出口的极限了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「过几天店里见。」' },
                    { speaker: 'xia_wan', text: '「好。晚安。」' },
                    { speaker: 'narrator', text: '她放下手机，躺下来。' },
                    { speaker: 'narrator', text: '天花板黑漆漆的，什么都看不见。' },
                    { speaker: 'narrator', text: '但夏晚的脑子很乱。' },
                    { speaker: 'narrator', text: '他想说什么？' },
                    { speaker: 'narrator', text: '什么事没想清楚？' },
                    { speaker: 'narrator', text: '她想问，又不敢问。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '算了。' },
                    { speaker: 'narrator', text: '等他准备好了再说吧。' },
                    { speaker: 'narrator', text: '她翻了个身，闭上眼睛。' },
                    { speaker: 'narrator', text: '但愿明天，能是个好日子。' }
                ],
                choices: [
                    { text: '（算了，先睡吧）', next: 'xw_5_lover_xiaotong_12', affinity: { xiao_tong: 5 }, repair: 0 },
                    { text: '「还有什么想说的吗？」', next: 'xw_5_lover_xiaotong_11_detail', affinity: { xiao_tong: 10 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_11_detail',
                title: '追问',
                background: 'bg-phone',
                mood: 'warm',
                dialogues: [
                    { speaker: 'xia_wan', text: '「还有什么想说的吗？」' },
                    { speaker: 'narrator', text: '发完她又后悔了。' },
                    { speaker: 'narrator', text: '说好让他慢慢想的。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '一分钟。两分钟。' },
                    { speaker: 'narrator', text: '她以为他不会回了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「有。」' },
                    { speaker: 'narrator', text: '就一个字。' },
                    { speaker: 'narrator', text: '夏晚屏住呼吸。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「但不是现在。」' },
                    { speaker: 'xiao_tong', text: '「等我理清楚再说。」' },
                    { speaker: 'xiao_tong', text: '「不会太久。」' },
                    { speaker: 'narrator', text: '夏晚盯着那句"不会太久"。' },
                    { speaker: 'narrator', text: '她不知道那是安慰她，还是真的。' },
                    { speaker: 'narrator', text: '但至少，他说了"不会太久"。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「好。」' },
                    { speaker: 'xia_wan', text: '「那我等你。」' },
                    { speaker: 'narrator', text: '她把手机放在枕边。' },
                    { speaker: 'narrator', text: '屏幕暗下去。' },
                    { speaker: 'narrator', text: '但夏晚知道，今晚她大概睡不着了。' }
                ],
                choices: [
                    { text: '（期待他说清楚的那天）', next: 'xw_5_lover_xiaotong_12', affinity: { xiao_tong: 10 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_12',
                title: '开学后的日常',
                background: 'bg-moyan',
                mood: 'normal',
                dialogues: [
                    { speaker: 'narrator', text: '开学了。' },
                    { speaker: 'narrator', text: '大家陆续回到重庆。' },
                    { speaker: 'narrator', text: '墨染也恢复了往日的热闹。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但肖童好像变了。' },
                    { speaker: 'narrator', text: '不是那种很明显的变化。' },
                    { speaker: 'narrator', text: '只是……话少了。' },
                    { speaker: 'narrator', text: '以前开本的时候，他偶尔会跟她开开玩笑。' },
                    { speaker: 'narrator', text: '现在只剩下公事公办的眼神。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '明明每天都见面。' },
                    { speaker: 'narrator', text: '但夏晚觉得，他们之间好像隔了什么。' },
                    { speaker: 'narrator', text: '不是异地，却比异地还远。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天晚上下班。' },
                    { speaker: 'narrator', text: '夏晚在店门口等他。' },
                    { speaker: 'narrator', text: '肖童推门出来，看见她，顿了一下。' },
                    { speaker: 'narrator', text: '然后若无其事地走过来。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「怎么还没走？」' },
                    { speaker: 'xia_wan', text: '「等你。」' },
                    { speaker: 'narrator', text: '肖童没说话。' },
                    { speaker: 'narrator', text: '只是接过了她的包。' },
                    { speaker: 'narrator', text: '两个人并排走着。' },
                    { speaker: 'narrator', text: '路灯把影子拉得很长。' },
                    { speaker: 'narrator', text: '风从江面吹过来，带着一点点凉意。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「今天那桌客人怎么样？」' },
                    { speaker: 'xiao_tong', text: '「还行。」' },
                    { speaker: 'narrator', text: '两个字。' },
                    { speaker: 'narrator', text: '夏晚想问他是不是有心事。' },
                    { speaker: 'narrator', text: '但想起那晚的约定，她忍住了。' },
                    { speaker: 'narrator', text: '他说等他理清楚。' },
                    { speaker: 'narrator', text: '她不想逼他。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '走到地铁站口。' },
                    { speaker: 'narrator', text: '该分开了。' },
                    { speaker: 'narrator', text: '肖童把包递还给她。' },
                    { speaker: 'narrator', text: '她伸手去接，指尖碰到了他的手。' },
                    { speaker: 'narrator', text: '他的手指冰凉的。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「早点回去。」' },
                    { speaker: 'xia_wan', text: '「嗯。」' },
                    { speaker: 'narrator', text: '她转身要走。' },
                    { speaker: 'narrator', text: '他忽然开口。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「夏晚。」' },
                    { speaker: 'narrator', text: '她回过头。' },
                    { speaker: 'narrator', text: '他站在那里，路灯在他身后。' },
                    { speaker: 'narrator', text: '看不清表情。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「这个周末……有空吗？」' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '这是开学以来，他第一次主动约她。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「有。」' },
                    { speaker: 'narrator', text: '她怕自己答得太快，又补了一句。' },
                    { speaker: 'xia_wan', text: '「什么事？」' },
                    { speaker: 'narrator', text: '肖童沉默了几秒。' },
                    { speaker: 'narrator', text: '然后他说——' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「想跟你聊聊。」' },
                    { speaker: 'xiao_tong', text: '「那天说的……我想清楚了。」' }
                ],
                choices: [
                    { text: '（期待又紧张）', next: 'xw_5_lover_xiaotong_12a', affinity: { xiao_tong: 10 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_12a',
                title: '周末',
                background: 'bg-street',
                mood: 'nervous',
                dialogues: [
                    { speaker: 'narrator', text: '周末来得很快。' },
                    { speaker: 'narrator', text: '又很慢。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚一整天都心不在焉。' },
                    { speaker: 'narrator', text: '想问他想清楚什么了，又怕给他压力。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '下午四点。' },
                    { speaker: 'narrator', text: '肖童发消息说来接她。' },
                    { speaker: 'narrator', text: '夏晚站在学校门口等他。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他走过来的时候，表情很平静。' },
                    { speaker: 'narrator', text: '不是平时那种淡淡的平静。' },
                    { speaker: 'narrator', text: '是那种……做好了什么决定的平静。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「去哪？」' },
                    { speaker: 'xiao_tong', text: '「随便走走。」' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'xiao_tong', text: '「想找个安静的地方。」' },
                    { speaker: 'narrator', text: '夏晚的心跳漏了一拍。' },
                    { speaker: 'narrator', text: '她有一种预感。' },
                    { speaker: 'narrator', text: '可能要发生什么大事了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他们沿着江边走。' },
                    { speaker: 'narrator', text: '人不多，风很大。' },
                    { speaker: 'narrator', text: '肖童走在她旁边，一直没说话。' },
                    { speaker: 'narrator', text: '夏晚也没有问。' },
                    { speaker: 'narrator', text: '她只是安静地陪他走着。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '走了很久。' },
                    { speaker: 'narrator', text: '走到一个没什么人的江边。' },
                    { speaker: 'narrator', text: '肖童停下来，看着江面。' },
                    { speaker: 'narrator', text: '夏晚站在他旁边。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我妈又给我打电话了。」' },
                    { speaker: 'narrator', text: '他的声音很平静。' },
                    { speaker: 'narrator', text: '平静得有点可怕。' },
                    { speaker: 'xiao_tong', text: '「让我准备雅思。」' },
                    { speaker: 'xiao_tong', text: '「说最迟明年九月就要出去。」' },
                    { speaker: 'narrator', text: '夏晚的心沉了下去。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '英国。' },
                    { speaker: 'narrator', text: '明年九月。' },
                    { speaker: 'narrator', text: '他妈妈还在催。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「你怎么想的？」' },
                    { speaker: 'narrator', text: '她问。' },
                    { speaker: 'narrator', text: '声音比自己想象的要稳。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我不知道。」' },
                    { speaker: 'narrator', text: '他说。' },
                    { speaker: 'xiao_tong', text: '「这几个月我一直在想。」' },
                    { speaker: 'narrator', text: '风吹过来，把他的头发吹乱了。' },
                    { speaker: 'narrator', text: '他伸手按了按，没按好。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我妈说的没错。」' },
                    { speaker: 'xiao_tong', text: '「出国对我有好处。」' },
                    { speaker: 'xiao_tong', text: '「但我不想去。」' },
                    { speaker: 'narrator', text: '他转过头，看着她。' },
                    { speaker: 'narrator', text: '这是他今天第一次正视她。' },
                    { speaker: 'narrator', text: '眼睛里有她没见过的东西。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我不想去一个没有你的地方。」' }
                ],
                choices: [
                    { text: '（心跳漏了一拍）', next: 'xw_5_lover_xiaotong_13', affinity: { xiao_tong: 15 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_13',
                title: '坦白',
                background: 'bg-street',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚愣住了。' },
                    { speaker: 'narrator', text: '她没想到他会这么说。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我知道我没用。」' },
                    { speaker: 'narrator', text: '他继续说。' },
                    { speaker: 'xiao_tong', text: '「没本事给家里一个交代，也没法给你一个承诺。」' },
                    { speaker: 'xiao_tong', text: '「所以我一直拖着。」' },
                    { speaker: 'narrator', text: '他的声音很轻。' },
                    { speaker: 'narrator', text: '轻到几乎被风吹散。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「但这几天我想通了。」' },
                    { speaker: 'xiao_tong', text: '「我不能两边都拖着。」' },
                    { speaker: 'narrator', text: '他深吸一口气。' },
                    { speaker: 'narrator', text: '然后说——' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我不去了。」' },
                    { speaker: 'xiao_tong', text: '「英国，我不去了。」' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他看着江面。' },
                    { speaker: 'narrator', text: '风继续吹着。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我会跟我妈说清楚的。」' },
                    { speaker: 'xiao_tong', text: '「然后好好找工作。」' },
                    { speaker: 'xiao_tong', text: '「不管以后怎么样……」' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'narrator', text: '转过头，看着她。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我想留在重庆。」' },
                    { speaker: 'xiao_tong', text: '「留在你身边。」' },
                    { speaker: 'narrator', text: '夏晚的眼眶一下子红了。' },
                    { speaker: 'narrator', text: '她不知道该说什么。' },
                    { speaker: 'narrator', text: '他做了决定。' },
                    { speaker: 'narrator', text: '他选择留下。' },
                    { speaker: 'narrator', text: '为了她。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「你确定吗？」' },
                    { speaker: 'narrator', text: '她问。' },
                    { speaker: 'xia_wan', text: '「那是你的前途。」' },
                    { speaker: 'narrator', text: '肖童摇了摇头。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「前途重要。」' },
                    { speaker: 'narrator', text: '他说。' },
                    { speaker: 'xiao_tong', text: '「但不是最重要的。」' },
                    { speaker: 'narrator', text: '他伸出手，握住了她的手。' },
                    { speaker: 'narrator', text: '手指还是有点凉。' },
                    { speaker: 'narrator', text: '但夏晚觉得很暖。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「你是最重要的。」' }
                ],
                choices: [
                    { text: '（紧紧握住他的手）', next: 'xw_5_lover_xiaotong_14', affinity: { xiao_tong: 15 }, repair: 10 },
                    { text: '「你不后悔吗？」', next: 'xw_5_lover_xiaotong_14', affinity: { xiao_tong: 10 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_14',
                title: '未来',
                background: 'bg-street',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚没有说话。' },
                    { speaker: 'narrator', text: '她只是反握住他的手。' },
                    { speaker: 'narrator', text: '握得很紧。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '风吹过来。' },
                    { speaker: 'narrator', text: '江面上有光。' },
                    { speaker: 'narrator', text: '不知道是夕阳，还是远处的灯。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他们就这样站着。' },
                    { speaker: 'narrator', text: '手握着手。' },
                    { speaker: 'narrator', text: '谁都没有松手。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '很久。' },
                    { speaker: 'narrator', text: '肖童开口。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「不管以后怎么样。」' },
                    { speaker: 'narrator', text: '他的声音很轻。' },
                    { speaker: 'narrator', text: '但很认真。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我都会好好努力。」' },
                    { speaker: 'xiao_tong', text: '「不让你后悔。」' },
                    { speaker: 'narrator', text: '夏晚抬起头，看着他。' },
                    { speaker: 'narrator', text: '他的眼睛里，有夕阳的颜色。' },
                    { speaker: 'narrator', text: '也有她的倒影。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「我等你。」' },
                    { speaker: 'narrator', text: '她说。' },
                    { speaker: 'xia_wan', text: '「多久都等。」' },
                    { speaker: 'narrator', text: '肖童愣了一下。' },
                    { speaker: 'narrator', text: '然后他笑了。' },
                    { speaker: 'narrator', text: '是那种很少见的、很温柔的笑。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「不用多久。」' },
                    { speaker: 'xiao_tong', text: '「我很快就会追上来的。」' },
                    { speaker: 'narrator', text: '他把她的手握得更紧了。' },
                    { speaker: 'narrator', text: '夏晚靠过去，头抵在他肩上。' },
                    { speaker: 'narrator', text: '他身上有洗衣液的味道。' },
                    { speaker: 'narrator', text: '很干净，很安心。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '江边的风还是很大。' },
                    { speaker: 'narrator', text: '但夏晚觉得，这是她经历过最暖的傍晚。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他们不知道未来会怎么样。' },
                    { speaker: 'narrator', text: '不知道肖童妈妈会不会妥协。' },
                    { speaker: 'narrator', text: '不知道肖童能不能找到好工作。' },
                    { speaker: 'narrator', text: '不知道这段感情能走多远。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但至少。' },
                    { speaker: 'narrator', text: '这一刻。' },
                    { speaker: 'narrator', text: '他们在一起。' },
                    { speaker: 'narrator', text: '这就够了。' }
                ],
                choices: [
                    { text: '（希望时间停在这一刻）', next: 'xw_5_lover_xiaotong_end', affinity: { xiao_tong: 10 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_xiaotong_end_sweet',
                title: '山海（跨越）',
                background: 'bg-seaside',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '后来的一个周末。' },
                    { speaker: 'narrator', text: '肖童约夏晚去江边走走。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '江边的风很舒服。' },
                    { speaker: 'narrator', text: '路灯把两个人的影子拉得很长。' },
                    { speaker: 'narrator', text: '肖童走在夏晚旁边，比平时安静。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我想好了。」' },
                    { speaker: 'narrator', text: '他忽然开口。' },
                    { speaker: 'xia_wan', text: '「想好什么？」' },
                    { speaker: 'narrator', text: '夏晚的心提了一下。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「不出国了。」' },
                    { speaker: 'narrator', text: '他说得很轻，像是在说一件很小的事。' },
                    { speaker: 'narrator', text: '但夏晚听出了那句话里的重量。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「我妈……刚开始不同意。吵了很多次。」' },
                    { speaker: 'xiao_tong', text: '「但我跟她说，我没有你不行。」' },
                    { speaker: 'narrator', text: '他停下脚步，转过身看着夏晚。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「她问我是不是认真的。」' },
                    { speaker: 'xiao_tong', text: '「我说是。」' },
                    { speaker: 'xiao_tong', text: '「她就没再说什么了。」' },
                    { speaker: 'narrator', text: '江风吹过，把肖童的头发吹乱了一点。' },
                    { speaker: 'narrator', text: '夏晚看着他，忽然觉得鼻子有点酸。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「你哭什么。」' },
                    { speaker: 'narrator', text: '他伸手揉了揉她的头发。' },
                    { speaker: 'xia_wan', text: '「没哭。」' },
                    { speaker: 'narrator', text: '夏晚偏过头，假装看江面。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '江面波光粼粼。' },
                    { speaker: 'narrator', text: '远处的船开过，汽笛声悠长。' },
                    { speaker: 'narrator', text: '夏晚想，这就是她想要的日子吧。' },
                    { speaker: 'narrator', text: '不用轰轰烈烈。' },
                    { speaker: 'narrator', text: '就江边走走，吵吵闹闹，然后一起回家。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '天上的星星很亮。' },
                    { speaker: 'narrator', text: '城市的光污染很严重，但还是能看见几颗。' },
                    { speaker: 'narrator', text: '夏晚想，山海是什么。' },
                    { speaker: 'narrator', text: '是英国的距离？' },
                    { speaker: 'narrator', text: '是肖童妈妈的不理解？' },
                    { speaker: 'narrator', text: '是未来的不确定？' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '可能都是。' },
                    { speaker: 'narrator', text: '但也都可以跨越。' },
                    { speaker: 'narrator', text: '只要他们在一起。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '山海虽远。' },
                    { speaker: 'narrator', text: '但两颗心靠在一起。' },
                    { speaker: 'narrator', text: '就什么都不怕了。' },
                    { speaker: 'narrator', text: '【甜蜜和好】' },
                    { speaker: 'narrator', text: '— 山海·完 —' }
                ],
                choices: [
                    { text: '（山海可平，未来可期）', next: 'chapter_end', affinity: { xiao_tong: 20 }, repair: 10 }
                ]
            },

            // 【恋人线·木星】普通和好结局（repairScore 5-14）
            // 主题：默契不提，但隐患还在
            {
                id: 'xw_5_lover_xiaotong_end_normal',
                title: '山海（沉默）',
                background: 'bg-seaside',
                mood: 'peaceful',
                dialogues: [
                    { speaker: 'narrator', text: '后来的日子，好像什么都没发生过。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '肖童还是每天来接夏晚下课。' },
                    { speaker: 'narrator', text: '他们还是一起去吃饭，一起在江边散步。' },
                    { speaker: 'narrator', text: '看起来和以前一模一样。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '只是他们不再提英国的事了。' },
                    { speaker: 'narrator', text: '好像不提，就不会发生。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚有时候会想。' },
                    { speaker: 'narrator', text: '他是不是还在纠结？' },
                    { speaker: 'narrator', text: '他是不是随时会告诉她要走了？' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但她不敢问。' },
                    { speaker: 'narrator', text: '她怕问了，就真的会发生。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他们很少再提英国的事。' },
                    { speaker: 'narrator', text: '好像不提，就不会发生。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有一天晚上。' },
                    { speaker: 'narrator', text: '肖童送她到校门口。' },
                    { speaker: 'xiao_tong', text: '「早点睡。」' },
                    { speaker: 'xia_wan', text: '「嗯。」' },
                    { speaker: 'narrator', text: '夏晚转身走了几步。' },
                    { speaker: 'narrator', text: '又停下来。' },
                    { speaker: 'narrator', text: '回过头。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「你……还会去英国吗？」' },
                    { speaker: 'narrator', text: '她还是问出口了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '肖童愣了一下。' },
                    { speaker: 'narrator', text: '他站在那里，路灯把他的脸照得忽明忽暗。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「……以后再说吧。」' },
                    { speaker: 'narrator', text: '他说。' },
                    { speaker: 'narrator', text: '和稀泥一样。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「……好。」' },
                    { speaker: 'narrator', text: '夏晚没再问。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她转身走进校门。' },
                    { speaker: 'narrator', text: '走了几步，泪就掉下来了。' },
                    { speaker: 'narrator', text: '她没擦。' },
                    { speaker: 'narrator', text: '反正没人看见。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他们还在一起。' },
                    { speaker: 'narrator', text: '但那个问题，像一根刺。' },
                    { speaker: 'narrator', text: '永远扎在那里。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【普通和好】' },
                    { speaker: 'narrator', text: '— 山海·未完 —' }
                ],
                choices: [
                    { text: '（未完待续……）', next: 'chapter_end', affinity: { xiao_tong: 10 }, repair: 5 }
                ]
            },

            // 【恋人线·木星】冷淡疏远结局（repairScore < 5）
            // 主题：山海不可平
            {
                id: 'xw_5_lover_xiaotong_end_cold',
                title: '山海（尽头）',
                background: 'bg-seaside',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '后来的事情，发生在七月。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '肖童告诉她，他妈妈帮他申请了英国的大学。' },
                    { speaker: 'narrator', text: '九月份就走。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚听完，没说话。' },
                    { speaker: 'narrator', text: '肖童也没说话。' },
                    { speaker: 'narrator', text: '两个人就这样沉默着。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '后来的几天。' },
                    { speaker: 'narrator', text: '他们还是一起上班，一起下班。' },
                    { speaker: 'narrator', text: '但话越来越少。' },
                    { speaker: 'narrator', text: '明明近在咫尺，却像隔着山海。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚开始收拾行李。' },
                    { speaker: 'narrator', text: '她订了回家的票。' },
                    { speaker: 'narrator', text: '比往年早了半个月。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '走的那天。' },
                    { speaker: 'narrator', text: '肖童说来送她。' },
                    { speaker: 'narrator', text: '夏晚说不用。' },
                    { speaker: 'narrator', text: '他说那他偏要。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '高铁站。' },
                    { speaker: 'narrator', text: '肖童站在安检口外面。' },
                    { speaker: 'narrator', text: '夏晚站在安检口里面。' },
                    { speaker: 'narrator', text: '隔着人来人往。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「到了给我发消息。」' },
                    { speaker: 'xia_wan', text: '「嗯。」' },
                    { speaker: 'narrator', text: '夏晚应了一声。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚转身走进离开。' },
                    { speaker: 'narrator', text: '走了几步。' },
                    { speaker: 'narrator', text: '忽然听到身后有人在喊。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xiao_tong', text: '「对不起！」' },
                    { speaker: 'narrator', text: '是肖童的声音。' },
                    { speaker: 'narrator', text: '很大声。' },
                    { speaker: 'narrator', text: '周围的人都看过来了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她不知道这是第几次了。' },
                    { speaker: 'narrator', text: '夏晚没回头。' },
                    { speaker: 'narrator', text: '她加快脚步，消失在人群里。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '飞机开动了。' },
                    { speaker: 'narrator', text: '窗外的风景开始倒退。' },
                    { speaker: 'narrator', text: '重庆的山，模糊成一片。' },
                    { speaker: 'narrator', text: '夏晚想。' },
                    { speaker: 'narrator', text: '山海可平。' },
                    { speaker: 'narrator', text: '但人心的山海。' },
                    { speaker: 'narrator', text: '要怎么跨呢。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她没哭。' },
                    { speaker: 'narrator', text: '只是望着回家的窗外。' },
                    { speaker: 'narrator', text: '发呆。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【冷淡疏远】' },
                    { speaker: 'narrator', text: '— 山海·完 —' }
                ],
                choices: [
                    { text: '（……）', next: 'chapter_end', affinity: { xiao_tong: 0 }, repair: 0 }
                ]
            },

            // ============================================================
            // 【恋人线·谨言】xw_5_lover_longxinheng_*
            // 主题：更真实的相处 + 新年夜的真心话 + 压抑爆发
            // ============================================================
            {
                id: 'xw_5_lover_longxinheng_1',
                title: '那我们现在是什么关系',
                background: 'bg-shop',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '告白后。' },
                    { speaker: 'narrator', text: '谨言照样嬉皮笑脸，照样热闹，照样和大家打成一片。' },
                    { speaker: 'narrator', text: '只是在人少的时候，他会靠过来，小声说些什么。' },
                    { speaker: 'narrator', text: '只有夏晚才听得见。' },
                    { speaker: 'narrator', text: '那天他们最后一个下班。' },
                    { speaker: 'narrator', text: '店里只剩他们两个。' },
                    { speaker: 'narrator', text: '夏晚正在收拾最后的剧本，谨言忽然从背后拿出一张纸。' },
                    { speaker: 'narrator', text: '上面写着歪歪扭扭的几个字：「我喜欢你。」' },
                    { speaker: 'long_xinheng', text: '（小声）这个……送你。' },
                    { speaker: 'narrator', text: '他递过来的是一条银色的细项链。' },
                    { speaker: 'narrator', text: '吊坠是一颗小小的星星。' },
                    { speaker: 'narrator', text: '他说得很轻，像怕被别人听见。' },
                    { speaker: 'narrator', text: '但眼睛一直看着她，等着。' },
                    { speaker: 'xia_wan', text: '…你什么时候买的？' },
                    { speaker: 'long_xinheng', text: '上周就买了。' },
                    { speaker: 'long_xinheng', text: '想亲手给你，一直没找到机会。' },
                    { speaker: 'narrator', text: '他说得很平，但耳根有点红。' },
                    { speaker: 'narrator', text: '夏晚看着那条项链，想起他平时嘻嘻哈哈的样子。' },
                    { speaker: 'narrator', text: '原来在他心里，藏了这么多话没说。' },
                    { speaker: 'narrator', text: '心里忽然觉得很软。' }
                ],
                choices: [
                    { text: '（让他帮你戴上）', next: 'xw_5_lover_longxinheng_2', affinity: { long_xinheng: 20 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_2',
                title: '他的心意',
                background: 'bg-shop',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚转过身，微微低下头。' },
                    { speaker: 'narrator', text: '她感觉到谨言的手指有点发抖。' },
                    { speaker: 'narrator', text: '笨拙地扣了好几次才把项链扣好。' },
                    { speaker: 'long_xinheng', text: '好了。' },
                    { speaker: 'narrator', text: '他的声音很轻。' },
                    { speaker: 'narrator', text: '夏晚低头看了看胸前的星星吊坠，在灯光下闪着微弱的光。' },
                    { speaker: 'xia_wan', text: '谢谢。' },
                    { speaker: 'long_xinheng', text: '不客气。' },
                    { speaker: 'narrator', text: '他说得很简短，像是不知道该说什么。' },
                    { speaker: 'narrator', text: '但他一直看着她，眼睛里有点不一样的东西。' },
                    { speaker: 'narrator', text: '不是平时那种嘻嘻哈哈的笑。' },
                    { speaker: 'narrator', text: '是更深的，更认真的。' },
                    { speaker: 'narrator', text: '过了很久，他才又开口。' },
                    { speaker: 'long_xinheng', text: '那个纸条……你看完了吗？' },
                    { speaker: 'xia_wan', text: '看了。' },
                    { speaker: 'long_xinheng', text: '上面写的是真的。' },
                    { speaker: 'long_xinheng', text: '不是开玩笑。' },
                    { speaker: 'narrator', text: '他说完就移开了视线，耳根红得像要滴血。' },
                    { speaker: 'narrator', text: '但他的声音很稳。' },
                    { speaker: 'narrator', text: '是真的认真。' }
                ],
                choices: [
                    { text: '「我知道。」', next: 'xw_5_lover_longxinheng_2b', affinity: { long_xinheng: 15 } },
                    { text: '「我也是。」', next: 'xw_5_lover_longxinheng_2b', affinity: { long_xinheng: 20 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_2b',
                title: '搬店',
                background: 'bg-shop',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '搬店的那几天，谨言干活很卖力。' },
                    { speaker: 'narrator', text: '一个人搬了好几趟，满头大汗。' },
                    { speaker: 'narrator', text: '橙子递给他水，他咕咚咕咚一口气喝完，然后继续去搬。' },
                    { speaker: 'narrator', text: '夏晚在一旁看着，忽然想起第一次见他。' },
                    { speaker: 'narrator', text: '他窝在沙发里笑得那么大声。' },
                    { speaker: 'narrator', text: '后来才知道那里面藏着多少东西。' },
                    { speaker: 'long_xinheng', text: '（走过来）发什么呆呢。' },
                    { speaker: 'xia_wan', text: '没什么，想起来以前的事。' },
                    { speaker: 'long_xinheng', text: '想我啊？' },
                    { speaker: 'narrator', text: '他笑得贱兮兮的。' },
                    { speaker: 'narrator', text: '夏晚忍不住笑了一下，转过头继续干活。' },
                    { speaker: 'narrator', text: '他跟在她后面，一起去搬最后几箱剧本。' },
                    { speaker: 'narrator', text: '没说什么。' },
                    { speaker: 'narrator', text: '但肩膀碰着肩膀。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_longxinheng_2c', affinity: { long_xinheng: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_2c',
                title: '他的墙',
                background: 'bg-street',
                mood: 'reflective',
                dialogues: [
                    { speaker: 'narrator', text: '那天搬完东西，大家都走了。' },
                    { speaker: 'narrator', text: '只剩他们两个在新店里。' },
                    { speaker: 'narrator', text: '夏晚坐在地上，看着刚挂好的「墨染」招牌。' },
                    { speaker: 'narrator', text: '她摸了摸胸前的项链，星星吊坠在灯光下闪着光。' },
                    { speaker: 'long_xinheng', text: '（走过来，在她旁边坐下）想什么呢。' },
                    { speaker: 'xia_wan', text: '在想，我们在一起好像也没多久。' },
                    { speaker: 'long_xinheng', text: '怎么，觉得亏了？' },
                    { speaker: 'narrator', text: '他又开始嘴贱了。' },
                    { speaker: 'narrator', text: '但夏晚没接话，只是看着他。' },
                    { speaker: 'narrator', text: '他被看得有点不自在，别过头去。' },
                    { speaker: 'long_xinheng', text: '……看什么。' },
                    { speaker: 'xia_wan', text: '你平时那么能说，怎么跟我在一起的时候，有时候就不说话了？' },
                    { speaker: 'narrator', text: '他愣了一下。' },
                    { speaker: 'narrator', text: '然后笑了一下，但这次的笑容不太一样。' },
                    { speaker: 'long_xinheng', text: '因为有些话，不知道怎么说。' },
                    { speaker: 'narrator', text: '他看着窗外的夜色。' },
                    { speaker: 'long_xinheng', text: '有些人热闹是因为害怕安静。' },
                    { speaker: 'long_xinheng', text: '你不知道吗？' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '这是他第一次在她面前，说这样的话。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她忽然明白了。' },
                    { speaker: 'narrator', text: '他那些热闹的声音，有时候是一堵墙。' },
                    { speaker: 'narrator', text: '挡住了别人，也挡住了自己。' }
                ],
                choices: [
                    { text: '（握住他的手）', next: 'xw_5_lover_longxinheng_3', affinity: { long_xinheng: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_3',
                title: '新年夜·真心话',
                background: 'bg-phone',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '新年夜。' },
                    { speaker: 'narrator', text: '凌晨十一点五十八分。' },
                    { speaker: 'narrator', text: '谨言发来视频通话请求。' },
                    { speaker: 'narrator', text: '夏晚接了。' },
                    { speaker: 'narrator', text: '他在老家的院子里，背后是山东冬天的夜空。' },
                    { speaker: 'narrator', text: '很冷，他呼出的气都是白色的。' },
                    { speaker: 'long_xinheng', text: '等我一下。' },
                    { speaker: 'narrator', text: '他转过去，看向夜空。' },
                    { speaker: 'narrator', text: '倒数开始了。' },
                    { speaker: 'narrator', text: '十、九、八……' },
                    { speaker: 'narrator', text: '三、二、一。' },
                    { speaker: 'narrator', text: '他转过来，看着镜头。' },
                    { speaker: 'long_xinheng', text: '新年快乐。' },
                    { speaker: 'narrator', text: '就三个字。' },
                    { speaker: 'narrator', text: '没有平时的嬉皮笑脸。' },
                    { speaker: 'narrator', text: '只是认真地看着她说。' },
                    { speaker: 'xia_wan', text: '新年快乐。' },
                    { speaker: 'narrator', text: '他低下头，像是在笑，但没出声。' },
                    { speaker: 'long_xinheng', text: '我想你了。' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '他第一次说这种话，说得这么直。' },
                    { speaker: 'narrator', text: '她的鼻子有点酸。' },
                    { speaker: 'xia_wan', text: '我也是。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_longxinheng_4', affinity: { long_xinheng: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_4',
                title: '沉默',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '开学后的第二周。' },
                    { speaker: 'narrator', text: '夏晚发现，谨言变了。' },
                    { speaker: 'narrator', text: '不是那种慢慢变化的感觉。' },
                    { speaker: 'narrator', text: '是突然就……不一样了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '以前他每天都会给她发消息。' },
                    { speaker: 'narrator', text: '讲笑话，发搞笑视频，说些有的没的。' },
                    { speaker: 'narrator', text: '现在，他很少发了。' },
                    { speaker: 'narrator', text: '就算发了，也只是几个字。' },
                    { speaker: 'narrator', text: '"嗯"。"好"。"忙"。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚问他在忙什么。' },
                    { speaker: 'long_xinheng', text: '「没什么。」' },
                    { speaker: 'narrator', text: '就三个字。' },
                    { speaker: 'narrator', text: '以前他会说一大段，说店里谁谁谁闹了笑话，说他今天遇到一个奇葩顾客。' },
                    { speaker: 'narrator', text: '现在，什么都没有。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天夏晚忍不住了。' },
                    { speaker: 'xia_wan', text: '「你最近是不是有心事？」' },
                    { speaker: 'narrator', text: '过了很久。' },
                    { speaker: 'long_xinheng', text: '「没有。」' },
                    { speaker: 'narrator', text: '又是两个字。' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕，不知道该说什么。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起过年时那个在院子里对她说"我想你了"的人。' },
                    { speaker: 'narrator', text: '才过了多久。' },
                    { speaker: 'narrator', text: '怎么就变成这样了。' }
                ],
                choices: [
                    { text: '（追问到底怎么了）', next: 'xw_5_lover_longxinheng_4a', affinity: { long_xinheng: -5 }, repair: 0 },
                    { text: '（先不追问，等他愿意说）', next: 'xw_5_lover_longxinheng_4b', affinity: { long_xinheng: 10 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_4a',
                title: '追问',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'xia_wan', text: '「真的没有吗？」' },
                    { speaker: 'xia_wan', text: '「你以前不是这样的。」' },
                    { speaker: 'narrator', text: '过了很久。' },
                    { speaker: 'long_xinheng', text: '「你想太多了。」' },
                    { speaker: 'narrator', text: '又是这句话。' },
                    { speaker: 'xia_wan', text: '「我没有想太多。」' },
                    { speaker: 'xia_wan', text: '「我只是担心你。」' },
                    { speaker: 'narrator', text: '对话框沉默了。' },
                    { speaker: 'narrator', text: '很久。' },
                    { speaker: 'long_xinheng', text: '「我说了没什么。」' },
                    { speaker: 'long_xinheng', text: '「你就不能让我安静一下吗。」' },
                    { speaker: 'narrator', text: '夏晚愣住了。' },
                    { speaker: 'narrator', text: '他从来没有这样跟她说过话。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「……好。」' },
                    { speaker: 'narrator', text: '她关掉了对话框。' },
                    { speaker: 'narrator', text: '心里堵得难受。' },
                    { speaker: 'narrator', text: '那道墙，好像又竖起来了。' }
                ],
                choices: [
                    { text: '（冷战几天）', next: 'xw_5_lover_longxinheng_4b', affinity: { long_xinheng: -5 }, repair: 0 }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_4b',
                title: '冷战',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '那天之后，他们冷战了三天。' },
                    { speaker: 'narrator', text: '不是那种吵架后的冷战。' },
                    { speaker: 'narrator', text: '是那种，谁也不肯先开口的僵持。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚每天看他的朋友圈。' },
                    { speaker: 'narrator', text: '他照样发搞笑视频，照样和橙子他们互动。' },
                    { speaker: 'narrator', text: '像什么都没发生过一样。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她忽然觉得，他好像不需要她。' },
                    { speaker: 'narrator', text: '他有那么多的朋友，那么多的热闹。' },
                    { speaker: 'narrator', text: '少她一个，好像也没什么区别。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '第四天。' },
                    { speaker: 'narrator', text: '夏晚发烧了。' },
                    { speaker: 'narrator', text: '一个人窝在被子里，头疼得要裂开。' },
                    { speaker: 'narrator', text: '她发了一条朋友圈。' },
                    { speaker: 'narrator', text: '就三个字：\"发烧了。\"' },
                    { speaker: 'narrator', text: '没指望谁来。' },
                    { speaker: 'narrator', text: '只是想说点什么。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_longxinheng_4c', affinity: { long_xinheng: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_4c',
                title: '他来了',
                background: 'bg-room',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '半小时后。' },
                    { speaker: 'narrator', text: '门铃响了。' },
                    { speaker: 'narrator', text: '夏晚裹着被子去开门。' },
                    { speaker: 'narrator', text: '是谨言。' },
                    { speaker: 'narrator', text: '他站在门口，手里提着一袋药。' },
                    { speaker: 'narrator', text: '头发有点乱，像是赶过来的。' },
                    { speaker: 'long_xinheng', text: '怎么搞的，发烧了也不说？' },
                    { speaker: 'narrator', text: '他语气有点冲。' },
                    { speaker: 'narrator', text: '但他已经在往里走了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他给她倒了水，看着她把药吃了。' },
                    { speaker: 'narrator', text: '然后坐在床边，不知道该说什么。' },
                    { speaker: 'long_xinheng', text: '……你那天说的话。' },
                    { speaker: 'narrator', text: '他开口，声音有点闷。' },
                    { speaker: 'long_xinheng', text: '我不是那个意思。' },
                    { speaker: 'xia_wan', text: '那你是什么意思？' },
                    { speaker: 'narrator', text: '他沉默了很久。' },
                    { speaker: 'long_xinheng', text: '我就是……不知道怎么跟你说。' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他低着头，看着自己的手。' },
                    { speaker: 'long_xinheng', text: '家里……出了点事。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他的声音很轻。' },
                    { speaker: 'narrator', text: '轻到夏晚以为自己听错了。' },
                    { speaker: 'xia_wan', text: '……什么事？' },
                    { speaker: 'long_xinheng', text: '我爸和我妈吵架了。' },
                    { speaker: 'long_xinheng', text: '很严重的那种。' },
                    { speaker: 'narrator', text: '他看着窗外。' },
                    { speaker: 'long_xinheng', text: '我妈打电话给我哭。' },
                    { speaker: 'long_xinheng', text: '我不知道该怎么办。' },
                    { speaker: 'long_xinheng', text: '我不想让你担心。' },
                    { speaker: 'long_xinheng', text: '所以就……躲着你了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚愣住了。' },
                    { speaker: 'narrator', text: '原来是这样。' },
                    { speaker: 'narrator', text: '那些天他的沉默、他的冷淡、他的"没什么"。' },
                    { speaker: 'narrator', text: '不是不想理她。' },
                    { speaker: 'narrator', text: '是他在扛着。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那道墙，不是她进不去。' },
                    { speaker: 'narrator', text: '是他不知道该怎么让她进来。' }
                ],
                choices: [
                    { text: '「那你为什么不告诉我？」', next: 'xw_5_lover_longxinheng_4d', affinity: { long_xinheng: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_4d',
                title: '各自的墙',
                background: 'bg-room',
                mood: 'reflective',
                dialogues: [
                    { speaker: 'xia_wan', text: '那你为什么不告诉我？' },
                    { speaker: 'narrator', text: '夏晚的声音有点哑。' },
                    { speaker: 'long_xinheng', text: '……我不知道。' },
                    { speaker: 'narrator', text: '他低着头。' },
                    { speaker: 'long_xinheng', text: '我爸和我妈吵架的时候，我就想，如果我早点有出息。' },
                    { speaker: 'long_xinheng', text: '如果我能赚钱了，我妈就不用看他的脸色。' },
                    { speaker: 'long_xinheng', text: '我就……想快点证明自己。' },
                    { speaker: 'long_xinheng', text: '然后就越想越烦。' },
                    { speaker: 'long_xinheng', text: '然后就不想说话了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他一直那么热闹，那么嘻嘻哈哈。' },
                    { speaker: 'narrator', text: '原来他一直在扛着这些。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '你有一道墙。' },
                    { speaker: 'xia_wan', text: '我也有一道。' },
                    { speaker: 'narrator', text: '他抬起头。' },
                    { speaker: 'xia_wan', text: '我总是希望你主动，希望你懂。' },
                    { speaker: 'xia_wan', text: '但我不说，你怎么会懂呢。' },
                    { speaker: 'xia_wan', text: '所以我们都有墙。' },
                    { speaker: 'xia_wan', text: '你的墙挡住了别人。' },
                    { speaker: 'xia_wan', text: '我的墙挡住了自己。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他没说话。' },
                    { speaker: 'narrator', text: '但夏晚看见他的眼眶有点红。' },
                    { speaker: 'narrator', text: '他在忍。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '过了很久，他伸手，轻轻碰了碰她的额头。' },
                    { speaker: 'long_xinheng', text: '还烫。' },
                    { speaker: 'long_xinheng', text: '你先睡。' },
                    { speaker: 'long_xinheng', text: '明天我再来。' },
                    { speaker: 'narrator', text: '他站起来，走到门口。' },
                    { speaker: 'long_xinheng', text: '（回头）夏晚。' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'long_xinheng', text: '我在试了。' },
                    { speaker: 'narrator', text: '然后他开门，走了。' },
                    { speaker: 'narrator', text: '留下夏晚一个人坐在床上。' },
                    { speaker: 'narrator', text: '他在试了。' },
                    { speaker: 'narrator', text: '这就够了。' }
                ],
                choices: [
                    { text: '「谢谢你愿意试。」', next: 'xw_5_lover_longxinheng_5', affinity: { long_xinheng: 10 }, repair: 12 },
                    { text: '（不说话，看着他离开）', next: 'xw_5_lover_longxinheng_5', affinity: { long_xinheng: 5 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_5',
                title: '裂缝之后',
                background: 'bg-phone',
                mood: 'nervous',
                dialogues: [
                    { speaker: 'narrator', text: '那天之后，他们的关系变得微妙。' },
                    { speaker: 'narrator', text: '不是不好，而是……小心翼翼。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他每天会发消息。' },
                    { speaker: 'narrator', text: '但不像以前那么多。' },
                    { speaker: 'narrator', text: '夏晚也会回。' },
                    { speaker: 'narrator', text: '但不像以前那么随便。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '一周后，橙子私聊夏晚。' },
                    { speaker: 'chengzi', text: '「你和谨言怎么了？」' },
                    { speaker: 'xia_wan', text: '「没怎么啊。」' },
                    { speaker: 'chengzi', text: '「他最近不太对劲。」' },
                    { speaker: 'chengzi', text: '「带本的时候走神了好几次。」' },
                    { speaker: 'chengzi', text: '「以前从来没有过。」' },
                    { speaker: 'narrator', text: '夏晚看着屏幕，心里一紧。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天晚上，她犹豫了很久。' },
                    { speaker: 'narrator', text: '最后还是打开了对话框。' }
                ],
                choices: [
                    { text: '「你最近是不是有心事？」', next: 'xw_5_lover_longxinheng_5a', affinity: { long_xinheng: 10 }, repair: 10 },
                    { text: '「你还好吗？」', next: 'xw_5_lover_longxinheng_5b', affinity: { long_xinheng: 5 }, repair: 3 }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_5a',
                title: '主动关心',
                background: 'bg-phone',
                mood: 'warm',
                dialogues: [
                    { speaker: 'xia_wan', text: '「你最近是不是有心事？」' },
                    { speaker: 'narrator', text: '发出去之后，她有点紧张。' },
                    { speaker: 'narrator', text: '不知道他会怎么回答。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '过了很久。' },
                    { speaker: 'narrator', text: '比平时久很多。' },
                    { speaker: 'long_xinheng', text: '「你怎么突然问这个。」' },
                    { speaker: 'xia_wan', text: '「橙子说你带本的时候走神了。」' },
                    { speaker: 'narrator', text: '这次他回得很快。' },
                    { speaker: 'long_xinheng', text: '「被发现了。」' },
                    { speaker: 'long_xinheng', text: '「我在想一些事。」' },
                    { speaker: 'xia_wan', text: '「什么事？」' },
                    { speaker: 'long_xinheng', text: '「在想……我是不是真的很逊。」' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '他还在想那天的事。' },
                    { speaker: 'xia_wan', text: '「你不逊。」' },
                    { speaker: 'xia_wan', text: '「你只是不习惯说而已。」' },
                    { speaker: 'long_xinheng', text: '「嗯。」' },
                    { speaker: 'long_xinheng', text: '「但我确实应该学着说。」' },
                    { speaker: 'long_xinheng', text: '「不然你会觉得我不重视你。」' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕。' },
                    { speaker: 'narrator', text: '他真的在试了。' }
                ],
                choices: [
                    { text: '「你已经做得很好了。」', next: 'xw_5_lover_longxinheng_6', affinity: { long_xinheng: 10 }, repair: 8 },
                    { text: '「那你想说什么？」', next: 'xw_5_lover_longxinheng_6', affinity: { long_xinheng: 15 }, repair: 15 }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_5b',
                title: '简单问候',
                background: 'bg-phone',
                mood: 'neutral',
                dialogues: [
                    { speaker: 'xia_wan', text: '「你还好吗？」' },
                    { speaker: 'narrator', text: '发出去之后，夏晚觉得自己问得很敷衍。' },
                    { speaker: 'narrator', text: '但她不知道该怎么说。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'long_xinheng', text: '「还行。」' },
                    { speaker: 'narrator', text: '就两个字。' },
                    { speaker: 'narrator', text: '夏晚盯着那两个字，不知道该说什么。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'long_xinheng', text: '「你呢？」' },
                    { speaker: 'xia_wan', text: '「我也还行。」' },
                    { speaker: 'narrator', text: '对话又陷入了沉默。' },
                    { speaker: 'narrator', text: '夏晚看着屏幕，忽然有点沮丧。' },
                    { speaker: 'narrator', text: '他们之间好像有一道墙。' },
                    { speaker: 'narrator', text: '而这道墙，好像比以前更高了。' }
                ],
                choices: [
                    { text: '「要不我们见面聊？」', next: 'xw_5_lover_longxinheng_6', affinity: { long_xinheng: 10 }, repair: 10 },
                    { text: '「那早点休息吧。」', next: 'xw_5_lover_longxinheng_6b', affinity: { long_xinheng: 5 }, repair: 0 }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_6',
                title: '见面',
                background: 'bg-street',
                mood: 'nervous',
                dialogues: [
                    { speaker: 'narrator', text: '那周六。' },
                    { speaker: 'narrator', text: '他们约在店附近的那家咖啡店。' },
                    { speaker: 'narrator', text: '不是约会，只是想好好谈谈。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '谨言坐在她对面。' },
                    { speaker: 'narrator', text: '手里捧着一杯美式，但一直没喝。' },
                    { speaker: 'narrator', text: '夏晚看着他的样子，忽然觉得有点心疼。' },
                    { speaker: 'narrator', text: '他不是那种会藏着掖着的人。' },
                    { speaker: 'narrator', text: '但他现在明显有心事。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '你今天想说点什么吗？' },
                    { speaker: 'narrator', text: '她先开口了。' },
                    { speaker: 'long_xinheng', text: '...' },
                    { speaker: 'narrator', text: '他沉默了很久。' },
                    { speaker: 'narrator', text: '然后开口。' },
                    { speaker: 'long_xinheng', text: '我其实……一直不太会表达。' },
                    { speaker: 'long_xinheng', text: '不是因为不想。' },
                    { speaker: 'long_xinheng', text: '是因为不知道怎么开口。' },
                    { speaker: 'long_xinheng', text: '说好听的话，我觉得假。' },
                    { speaker: 'long_xinheng', text: '说心里话，我觉得丢人。' },
                    { speaker: 'narrator', text: '他低着头，看着咖啡杯。' },
                    { speaker: 'long_xinheng', text: '但那天你说的那些话……' },
                    { speaker: 'long_xinheng', text: '我一直在想。' }
                ],
                choices: [
                    { text: '「想通什么了？」', next: 'xw_5_lover_longxinheng_7', affinity: { long_xinheng: 10 } },
                    { text: '（安静等他继续说）', next: 'xw_5_lover_longxinheng_7', affinity: { long_xinheng: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_6b',
                title: '错过',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'xia_wan', text: '「那早点休息吧。」' },
                    { speaker: 'long_xinheng', text: '「嗯。晚安。」' },
                    { speaker: 'narrator', text: '就这样。' },
                    { speaker: 'narrator', text: '夏晚放下手机，心里空落落的。' },
                    { speaker: 'narrator', text: '她想问他更多。' },
                    { speaker: 'narrator', text: '但她没有开口。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那周，谨言很少发消息。' },
                    { speaker: 'narrator', text: '夏晚也没有问。' },
                    { speaker: 'narrator', text: '两个人就这样沉默着。' },
                    { speaker: 'narrator', text: '直到橙子再次私聊她。' },
                    { speaker: 'chengzi', text: '「谨言这两天状态很差。」' },
                    { speaker: 'chengzi', text: '「带本的时候差点出错。」' },
                    { speaker: 'chengzi', text: '「你能不能去看看他？」' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕。' },
                    { speaker: 'narrator', text: '她知道自己应该做点什么了。' }
                ],
                choices: [
                    { text: '「我去看看他。」', next: 'xw_5_lover_longxinheng_6', affinity: { long_xinheng: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_7',
                title: '真心话',
                background: 'bg-street',
                mood: 'warm',
                dialogues: [
                    { speaker: 'long_xinheng', text: '我想通了一件事。' },
                    { speaker: 'narrator', text: '他抬起头，看着她。' },
                    { speaker: 'long_xinheng', text: '我不能一直这样。' },
                    { speaker: 'long_xinheng', text: '嘴上不说，心里其实很在乎。' },
                    { speaker: 'long_xinheng', text: '然后让你猜。' },
                    { speaker: 'long_xinheng', text: '这样不公平。' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他今天说了很多。' },
                    { speaker: 'narrator', text: '比以前任何时候都多。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'long_xinheng', text: '所以我想试试。' },
                    { speaker: 'long_xinheng', text: '试试多说一点。' },
                    { speaker: 'long_xinheng', text: '就算很丢人。' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'long_xinheng', text: '比如……' },
                    { speaker: 'long_xinheng', text: '我想你。' },
                    { speaker: 'narrator', text: '说完他就低下头。' },
                    { speaker: 'narrator', text: '耳根红了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '然后笑了。' },
                    { speaker: 'xia_wan', text: '「你刚才说什么？」' },
                    { speaker: 'long_xinheng', text: '「……没什么。」' },
                    { speaker: 'xia_wan', text: '「我听到了。」' },
                    { speaker: 'narrator', text: '他也笑了。' },
                    { speaker: 'narrator', text: '有点腼腆。' },
                    { speaker: 'narrator', text: '不像平时那个嬉皮笑脸的谨言。' },
                    { speaker: 'narrator', text: '但夏晚觉得，这样的他更好看。' }
                ],
                choices: [
                    { text: '「我也想你。」', next: 'xw_5_lover_longxinheng_8', affinity: { long_xinheng: 15 }, repair: 15 },
                    { text: '（伸手握住他的手）', next: 'xw_5_lover_longxinheng_8', affinity: { long_xinheng: 10 }, repair: 10 }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_8',
                title: '改变',
                background: 'bg-phone',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '那之后，谨言变了。' },
                    { speaker: 'narrator', text: '不是那种翻天覆地的变化。' },
                    { speaker: 'narrator', text: '是那种……一点一点的变化。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他开始会说"我想你"了。' },
                    { speaker: 'narrator', text: '虽然每次说完都会装作没事一样。' },
                    { speaker: 'narrator', text: '但夏晚能感觉到，他在努力。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他开始会主动报备了。' },
                    { speaker: 'narrator', text: '「我现在在带本。」' },
                    { speaker: 'narrator', text: '「等会儿聊。」' },
                    { speaker: 'narrator', text: '「本结束了。」' },
                    { speaker: 'narrator', text: '「想你了。」' },
                    { speaker: 'narrator', text: '每次都是这种简短的句子。' },
                    { speaker: 'narrator', text: '但夏晚每一条都看了好几遍。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有一天，她问他。' },
                    { speaker: 'xia_wan', text: '「你最近变化好大。」' },
                    { speaker: 'long_xinheng', text: '「是吗？」' },
                    { speaker: 'xia_wan', text: '「嗯。感觉你更愿意说了。」' },
                    { speaker: 'long_xinheng', text: '「被你逼的。」' },
                    { speaker: 'narrator', text: '他又开始嬉皮笑脸了。' },
                    { speaker: 'xia_wan', text: '「明明是你自己想变的。」' },
                    { speaker: 'long_xinheng', text: '「……嗯。」' },
                    { speaker: 'narrator', text: '难得的，他承认了。' }
                ],
                choices: [
                    { text: '「五一你来找我？」', next: 'xw_5_lover_longxinheng_9', affinity: { long_xinheng: 10 } },
                    { text: '「继续保持哦。」', next: 'xw_5_lover_longxinheng_9', affinity: { long_xinheng: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_9',
                title: '五一',
                background: 'bg-street',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '五一小长假。' },
                    { speaker: 'narrator', text: '谨言来深圳找她。' },
                    { speaker: 'narrator', text: '这次他订了一家很好的酒店。' },
                    { speaker: 'narrator', text: '说是要补偿上次住快捷酒店的遗憾。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那几天，他们去了很多地方。' },
                    { speaker: 'narrator', text: '世界之窗。欢乐谷。深圳湾。' },
                    { speaker: 'narrator', text: '他帮她拍了很多照片。' },
                    { speaker: 'narrator', text: '虽然技术一般，但每张都很认真。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '最后一天晚上。' },
                    { speaker: 'narrator', text: '他们坐在海边的长椅上。' },
                    { speaker: 'narrator', text: '海风吹过来，带着咸咸的味道。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'long_xinheng', text: '夏晚。' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'long_xinheng', text: '我有个事想跟你说。' },
                    { speaker: 'narrator', text: '他的语气忽然变得认真。' },
                    { speaker: 'narrator', text: '和平时不太一样。' },
                    { speaker: 'xia_wan', text: '你说。' },
                    { speaker: 'long_xinheng', text: '我想好了。' },
                    { speaker: 'long_xinheng', text: '毕业之后，我想来深圳。' }
                ],
                choices: [
                    { text: '「你来深圳？」', next: 'xw_5_lover_longxinheng_10', affinity: { long_xinheng: 15 } },
                    { text: '「为什么？」', next: 'xw_5_lover_longxinheng_10', affinity: { long_xinheng: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_10',
                title: '决定',
                background: 'bg-street',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'long_xinheng', text: '嗯。' },
                    { speaker: 'long_xinheng', text: '我想好了。' },
                    { speaker: 'narrator', text: '他看着海面。' },
                    { speaker: 'long_xinheng', text: '我不想再异地了。' },
                    { speaker: 'long_xinheng', text: '我想每天都能见到你。' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'long_xinheng', text: '而且……' },
                    { speaker: 'long_xinheng', text: '我在想，以后要不要自己开店。' },
                    { speaker: 'long_xinheng', text: '在深圳。' },
                    { speaker: 'narrator', text: '夏晚愣住了。' },
                    { speaker: 'narrator', text: '他从来没有说过这么远的计划。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '你想开什么店？' },
                    { speaker: 'long_xinheng', text: '剧本杀吧。' },
                    { speaker: 'long_xinheng', text: '我好像只会这个。' },
                    { speaker: 'narrator', text: '他笑了。' },
                    { speaker: 'long_xinheng', text: '不过这都是以后的事。' },
                    { speaker: 'long_xinheng', text: '现在最重要的是……' },
                    { speaker: 'narrator', text: '他转过头，看着她。' },
                    { speaker: 'long_xinheng', text: '我想和你在一起。' },
                    { speaker: 'long_xinheng', text: '不是隔着手机的在一起。' },
                    { speaker: 'long_xinheng', text: '是真的在一起。' },
                    { speaker: 'narrator', text: '海风吹过来。' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他的眼睛里映着远处的高楼灯火。' },
                    { speaker: 'narrator', text: '还有她的倒影。' }
                ],
                choices: [
                    { text: '「我也是。」', next: 'xw_5_lover_longxinheng_11', affinity: { long_xinheng: 15 }, repair: 12 },
                    { text: '（靠在他肩上）', next: 'xw_5_lover_longxinheng_11', affinity: { long_xinheng: 10 }, repair: 8 }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_11',
                title: '在一起',
                background: 'bg-street',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚靠在他肩上。' },
                    { speaker: 'narrator', text: '他的身体僵了一下。' },
                    { speaker: 'narrator', text: '然后慢慢放松下来。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '海浪声一阵一阵。' },
                    { speaker: 'narrator', text: '远处有人在放烟花。' },
                    { speaker: 'narrator', text: '五彩斑斓的光映在海面上。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'long_xinheng', text: '夏晚。' },
                    { speaker: 'xia_wan', text: '嗯。' },
                    { speaker: 'long_xinheng', text: '谢谢你。' },
                    { speaker: 'xia_wan', text: '谢我什么？' },
                    { speaker: 'long_xinheng', text: '谢谢你愿意等我。' },
                    { speaker: 'long_xinheng', text: '谢谢你没有放弃我。' },
                    { speaker: 'narrator', text: '他的声音很轻。' },
                    { speaker: 'narrator', text: '夏晚忽然觉得鼻子有点酸。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '你以前不说这些的。' },
                    { speaker: 'long_xinheng', text: '「我在学。」' },
                    { speaker: 'narrator', text: '他笑了。' },
                    { speaker: 'long_xinheng', text: '「慢慢说，总会说的。」' },
                    { speaker: 'narrator', text: '夏晚抬起头，看着他。' },
                    { speaker: 'narrator', text: '他的眼睛里有什么东西变了。' },
                    { speaker: 'narrator', text: '那道墙，好像矮了一点。' }
                ],
                choices: [
                    { text: '「那你继续努力。」', next: 'xw_5_lover_longxinheng_12', affinity: { long_xinheng: 10 }, repair: 5 },
                    { text: '「我会一直等你。」', next: 'xw_5_lover_longxinheng_12', affinity: { long_xinheng: 15 }, repair: 15 }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_12',
                title: '毕业',
                background: 'bg-street',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '一年后。' },
                    { speaker: 'narrator', text: '毕业典礼那天。' },
                    { speaker: 'narrator', text: '夏晚站在深圳北站出口。' },
                    { speaker: 'narrator', text: '手里捧着一束满天星。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她看着他从闸机口走出来。' },
                    { speaker: 'narrator', text: '还是那个样子。' },
                    { speaker: 'narrator', text: '但好像又不一样了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他看见她，眼睛亮了一下。' },
                    { speaker: 'narrator', text: '然后大步走过来。' },
                    { speaker: 'long_xinheng', text: '「毕业快乐。」' },
                    { speaker: 'narrator', text: '他接过花，然后把她拉进怀里。' },
                    { speaker: 'narrator', text: '抱得很紧。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚埋在他怀里。' },
                    { speaker: 'narrator', text: '闻到他身上熟悉的味道。' },
                    { speaker: 'narrator', text: '还有一点点长途旅行的疲惫。' },
                    { speaker: 'xia_wan', text: '「你怎么来了？」' },
                    { speaker: 'long_xinheng', text: '「你毕业这么大的事，我能不来吗？」' },
                    { speaker: 'long_xinheng', text: '「而且……」' },
                    { speaker: 'narrator', text: '他松开她，从口袋里掏出一样东西。' },
                    { speaker: 'narrator', text: '是一把钥匙。' },
                    { speaker: 'long_xinheng', text: '「我在深圳找到工作了。」' },
                    { speaker: 'long_xinheng', text: '「房子也租好了。」' },
                    { speaker: 'long_xinheng', text: '「就在你学校附近。」' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他什么时候……' },
                    { speaker: 'long_xinheng', text: '「想给你一个惊喜。」' },
                    { speaker: 'narrator', text: '他笑了。' },
                    { speaker: 'narrator', text: '是那种很温柔的笑。' },
                    { speaker: 'narrator', text: '和以前那种嬉皮笑脸不一样。' }
                ],
                choices: [
                    { text: '「你……你怎么不早点告诉我！」', next: 'xw_5_lover_longxinheng_13', affinity: { long_xinheng: 10 } },
                    { text: '（抱紧他）', next: 'xw_5_lover_longxinheng_13', affinity: { long_xinheng: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_13',
                title: '新生活',
                background: 'bg-street',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '那之后，他们开始了新的生活。' },
                    { speaker: 'narrator', text: '不是隔着手机的异地恋。' },
                    { speaker: 'narrator', text: '是真的每天都能见面的在一起。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他住在她学校附近。' },
                    { speaker: 'narrator', text: '每天早上，他会给她发消息。' },
                    { speaker: 'narrator', text: '「起床了吗？」' },
                    { speaker: 'narrator', text: '「今天想吃什么早餐？」' },
                    { speaker: 'narrator', text: '「我去买。」' },
                    { speaker: 'narrator', text: '夏晚每次都觉得很不真实。' },
                    { speaker: 'narrator', text: '那个嘴上说着"不会说好听的话"的人。' },
                    { speaker: 'narrator', text: '现在每天都在说。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有一天晚上。' },
                    { speaker: 'narrator', text: '他们坐在他租的房子里。' },
                    { speaker: 'narrator', text: '电视开着，但谁都没在看。' },
                    { speaker: 'narrator', text: '她靠在他身上。' },
                    { speaker: 'long_xinheng', text: '夏晚。' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'long_xinheng', text: '我觉得……我以前那些墙。' },
                    { speaker: 'long_xinheng', text: '好像都不见了。' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'long_xinheng', text: '至少在你面前没有了。' },
                    { speaker: 'narrator', text: '夏晚抬起头看他。' },
                    { speaker: 'narrator', text: '他正看着她。' },
                    { speaker: 'narrator', text: '眼睛里没有平时的嬉皮笑脸。' },
                    { speaker: 'narrator', text: '只有认真。' }
                ],
                choices: [
                    { text: '「我也是。」', next: 'xw_5_lover_longxinheng_14', affinity: { long_xinheng: 15 } },
                    { text: '「那以后别建回去了。」', next: 'xw_5_lover_longxinheng_14', affinity: { long_xinheng: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_14',
                title: '未来',
                background: 'bg-room',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '半年后。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业了。' },
                    { speaker: 'narrator', text: '夏晚是副店长。' },
                    { speaker: 'narrator', text: '谨言负责带本和培训新人。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '大家又聚在一起了。' },
                    { speaker: 'narrator', text: '橙子、170、方圆、吴琊。' },
                    { speaker: 'narrator', text: '一个都不少。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '橙子举着酒杯。' },
                    { speaker: 'chengzi', text: '「来来来，敬我们的新店！」' },
                    { speaker: 'ganzhiyu', text: '「敬新店！」' },
                    { speaker: 'long_xinheng', text: '「敬新店！」' },
                    { speaker: 'narrator', text: '大家笑着碰杯。' },
                    { speaker: 'narrator', text: '夏晚坐在角落里，看着这一切。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '谨言走过来。' },
                    { speaker: 'long_xinheng', text: '「想什么呢？」' },
                    { speaker: 'xia_wan', text: '「在想……我们第一次见面的时候。」' },
                    { speaker: 'long_xinheng', text: '「那时候你还说我不靠谱。」' },
                    { speaker: 'xia_wan', text: '「你确实不靠谱。」' },
                    { speaker: 'long_xinheng', text: '「……」' },
                    { speaker: 'narrator', text: '他无语地看着她。' },
                    { speaker: 'narrator', text: '然后笑了。' },
                    { speaker: 'long_xinheng', text: '「现在靠谱了吗？」' },
                    { speaker: 'xia_wan', text: '「还行吧。」' },
                    { speaker: 'narrator', text: '她看着他。' },
                    { speaker: 'narrator', text: '外面的喧嚣还在继续。' },
                    { speaker: 'narrator', text: '但她觉得这一刻很安静。' }
                ],
                choices: [
                    { text: '「你比以前靠谱多了。」', next: 'xw_5_lover_longxinheng_15', affinity: { long_xinheng: 10 } },
                    { text: '「不过还是有点不靠谱。」', next: 'xw_5_lover_longxinheng_15', affinity: { long_xinheng: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_longxinheng_15',
                title: '那道墙',
                background: 'bg-street',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '那天打烊之后。' },
                    { speaker: 'narrator', text: '夏晚和谨言走在回家的路上。' },
                    { speaker: 'narrator', text: '深圳的夜晚很安静。' },
                    { speaker: 'narrator', text: '路灯把两个人的影子拉得很长。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'long_xinheng', text: '夏晚。' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'long_xinheng', text: '你还记得吗？' },
                    { speaker: 'long_xinheng', text: '那天你说我有一道墙。' },
                    { speaker: 'xia_wan', text: '记得。' },
                    { speaker: 'long_xinheng', text: '我那时候真的有一道墙。' },
                    { speaker: 'long_xinheng', text: '挡住所有人。' },
                    { speaker: 'long_xinheng', text: '谁都进不来。' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'long_xinheng', text: '但你把它拆了。' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他正看着前方的路。' },
                    { speaker: 'narrator', text: '表情很平静。' },
                    { speaker: 'long_xinheng', text: '谢谢你。' },
                    { speaker: 'narrator', text: '他说。' },
                    { speaker: 'long_xinheng', text: '谢谢你没有放弃。' },
                    { speaker: 'narrator', text: '夏晚没说话。' },
                    { speaker: 'narrator', text: '只是伸出手，握住了他的手。' },
                    { speaker: 'narrator', text: '他的手心有点热。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那道墙。' },
                    { speaker: 'narrator', text: '现在真的不见了。' },
                    { speaker: 'narrator', text: '只留下一扇窗。' },
                    { speaker: 'narrator', text: '透过那扇窗，她能看见他的全部。' },
                    { speaker: 'narrator', text: '而他，也能看见她的全部。' }
                ],
                choices: [
                    { text: '（牵着他的手继续走）', next: 'xw_5_lover_longxinheng_end', affinity: { long_xinheng: 15 } }
                ]
            },

            // 【恋人线·谨言】甜蜜和好结局（repairScore >= 15）
            {
                id: 'xw_5_lover_longxinheng_end_sweet',
                title: '那道墙',
                background: 'bg-street',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '学期末。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业。' },
                    { speaker: 'narrator', text: '夏晚是副店长。' },
                    { speaker: 'narrator', text: '谨言负责带本和培训新人。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '大家又聚在一起了。' },
                    { speaker: 'narrator', text: '橙子、170、方圆、吴琊。' },
                    { speaker: 'narrator', text: '一个都不少。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '橙子举着酒杯。' },
                    { speaker: 'chengzi', text: '「来来来，敬我们的新店！」' },
                    { speaker: 'ganzhiyu', text: '「敬新店！」' },
                    { speaker: 'long_xinheng', text: '「敬新店！」' },
                    { speaker: 'narrator', text: '大家笑着碰杯。' },
                    { speaker: 'narrator', text: '夏晚坐在角落里，看着这一切。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起第一次见谨言的时候。' },
                    { speaker: 'narrator', text: '他窝在沙发里笑得那么大声。' },
                    { speaker: 'narrator', text: '那时候她不知道。' },
                    { speaker: 'narrator', text: '那笑声里藏着多少东西。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '现在她知道了。' },
                    { speaker: 'narrator', text: '那道墙。' },
                    { speaker: 'narrator', text: '他们一起拆掉了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【甜蜜和好】' },
                    { speaker: 'narrator', text: '— 那道墙·完 —' }
                ],
                choices: [
                    { text: '（重新开始）', next: 'start', affinity: {} }
                ]
            },

            // 【恋人线·谨言】普通和好结局（repairScore 5-14）
            {
                id: 'xw_5_lover_longxinheng_end_normal',
                title: '那道墙',
                background: 'bg-street',
                mood: 'peaceful',
                dialogues: [
                    { speaker: 'narrator', text: '学期末。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业。' },
                    { speaker: 'narrator', text: '夏晚坐在角落里，看着大家忙碌。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '大家笑着碰杯。' },
                    { speaker: 'narrator', text: '橙子、170、方圆、吴琊，一个都不少。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚看着这一切。' },
                    { speaker: 'narrator', text: '她和谨言坐在一边。' },
                    { speaker: 'narrator', text: '他偶尔会说几句话。' },
                    { speaker: 'narrator', text: '比从前多，但也没有那么多。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那道墙。' },
                    { speaker: 'narrator', text: '没有完全拆掉。' },
                    { speaker: 'narrator', text: '但他们找到了相处的方式。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他愿意说，她愿意听。' },
                    { speaker: 'narrator', text: '这就够了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【普通和好】' },
                    { speaker: 'narrator', text: '— 那道墙·完 —' }
                ],
                choices: [
                    { text: '（重新开始）', next: 'start', affinity: {} }
                ]
            },

            // 【恋人线·谨言】冷淡疏远结局（repairScore < 5）
            {
                id: 'xw_5_lover_longxinheng_end_cold',
                title: '那道墙',
                background: 'bg-street',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '学期末。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业。' },
                    { speaker: 'narrator', text: '夏晚坐在角落里，看着大家忙碌。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '橙子举着酒杯，笑着和方圆碰杯。' },
                    { speaker: 'narrator', text: '170和吴琊在旁边聊天。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚看着这一切。' },
                    { speaker: 'narrator', text: '她和谨言坐在一边。' },
                    { speaker: 'narrator', text: '他没怎么说话。' },
                    { speaker: 'narrator', text: '她也不知道该说什么。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那道墙。' },
                    { speaker: 'narrator', text: '还在那里。' },
                    { speaker: 'narrator', text: '比以前更高了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他们还是在一起了。' },
                    { speaker: 'narrator', text: '但好像有什么东西变了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【冷淡疏远】' },
                    { speaker: 'narrator', text: '— 那道墙·完 —' }
                ],
                choices: [
                    { text: '（重新开始）', next: 'start', affinity: {} }
                ]
            },

            // ============================================================
            // 【恋人线·方圆】xw_5_lover_ganzhiyu_*
            // 主题：找回初心 + 新年愿望 + 热情消退
            // ============================================================
            {
                id: 'xw_5_lover_ganzhiyu_1',
                title: '那我们现在是什么关系',
                background: 'bg-shop',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '告白之后。' },
                    { speaker: 'narrator', text: '方圆明显开心了很多。' },
                    { speaker: 'narrator', text: '他去买了一对对戒，悄悄放在夏晚的工位上。' },
                    { speaker: 'narrator', text: '上面贴了一张便利贴，写着：「如果你愿意的话。」' },
                    { speaker: 'narrator', text: '夏晚看着那个盒子，低头笑了很久。' },
                    { speaker: 'narrator', text: '他总是这样。' },
                    { speaker: 'narrator', text: '说不出口的话就用别的方式说。' },
                    { speaker: 'narrator', text: '但每一次，她都接住了。' }
                ],
                choices: [
                    { text: '（戴上，然后去找他）', next: 'xw_5_lover_ganzhiyu_2', affinity: { gan_zhiyu: 20 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_2',
                title: '搬店 + 新年',
                background: 'bg-shop',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '搬店的时候，方圆很活跃。' },
                    { speaker: 'narrator', text: '帮人搬东西，和大家说说笑笑，跑来跑去。' },
                    { speaker: 'narrator', text: '偶尔跑到夏晚身边，帮她抬箱子，然后又跑走了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚看着他跑来跑去的样子。' },
                    { speaker: 'narrator', text: '忽然想起刚认识他那会儿。' },
                    { speaker: 'narrator', text: '他窝在沙发里，眼睛空空的。' },
                    { speaker: 'narrator', text: '说"没意思"。' },
                    { speaker: 'narrator', text: '现在的他，好像又有点亮了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但夏晚知道，这种状态不会持续太久。' },
                    { speaker: 'narrator', text: '方圆就是这样。' },
                    { speaker: 'narrator', text: '热起来的时候像一团火。' },
                    { speaker: 'narrator', text: '退下去的时候又像什么都没发生过。' },
                    { speaker: 'narrator', text: '她能做的，就是在他还亮着的时候，多陪他一会儿。' }
                ],
                choices: [
                    { text: '（等他忙完了找他）', next: 'xw_5_lover_ganzhiyu_2b', affinity: { gan_zhiyu: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_2b',
                title: '他的眼睛',
                background: 'bg-street',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '搬店那天收工很晚。' },
                    { speaker: 'narrator', text: '大家都走了，只剩他们两个。' },
                    { speaker: 'narrator', text: '夏晚坐在新店的沙发上，看着窗外。' },
                    { speaker: 'narrator', text: '方圆走过来，在她旁边坐下。' },
                    { speaker: 'gan_zhiyu', text: '发什么呆呢？' },
                    { speaker: 'xia_wan', text: '在看新店。以后这就是"墨染"了。' },
                    { speaker: 'gan_zhiyu', text: '嗯。' },
                    { speaker: 'narrator', text: '他应了一声，没再说话。' },
                    { speaker: 'narrator', text: '但他没有走。' },
                    { speaker: 'narrator', text: '就那样坐在她旁边，肩膀靠着肩膀。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '过了很久，他忽然开口。' },
                    { speaker: 'gan_zhiyu', text: '你知道我为什么一直待在店里吗？' },
                    { speaker: 'xia_wan', text: '为什么？' },
                    { speaker: 'gan_zhiyu', text: '因为这里有人让我想留下。' },
                    { speaker: 'narrator', text: '夏晚转头看他。' },
                    { speaker: 'narrator', text: '他没有看她，眼睛望着窗外。' },
                    { speaker: 'narrator', text: '但他的耳根红了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚忽然觉得，他的眼睛好像又亮了一点。' },
                    { speaker: 'narrator', text: '是被点亮了的那种亮。' }
                ],
                choices: [
                    { text: '（握一下他的手）', next: 'xw_5_lover_ganzhiyu_2c', affinity: { gan_zhiyu: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_2c',
                title: '新年愿望',
                background: 'bg-phone',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '新年夜。' },
                    { speaker: 'narrator', text: '夏晚躺在深圳家里的床上，看着天花板。' },
                    { speaker: 'narrator', text: '手机亮了。' },
                    { speaker: 'gan_zhiyu', text: '「你许了什么愿？」' },
                    { speaker: 'xia_wan', text: '「没许，我不信这个。你呢？」' },
                    { speaker: 'gan_zhiyu', text: '「我许了。」' },
                    { speaker: 'xia_wan', text: '「许了什么？」' },
                    { speaker: 'gan_zhiyu', text: '「希望你一直喜欢我。」' },
                    { speaker: 'narrator', text: '夏晚盯着那条消息。' },
                    { speaker: 'narrator', text: '上一次见到他满眼都是光，还是他在台上带本的时候。' },
                    { speaker: 'narrator', text: '那时候她想，这个人好像重新活过来了。' },
                    { speaker: 'narrator', text: '她想让他一直是那个样子的。' },
                    { speaker: 'xia_wan', text: '「我会的。你也要一直喜欢我。」' },
                    { speaker: 'narrator', text: '他回了一个表情包。' },
                    { speaker: 'narrator', text: '是一只狗狗点头的图。' },
                    { speaker: 'narrator', text: '夏晚笑了。' },
                    { speaker: 'narrator', text: '他就是这样。' },
                    { speaker: 'narrator', text: '说不出口的话，就用别的方式说。' },
                    { speaker: 'narrator', text: '但每一次，她都接住了。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_ganzhiyu_2d', affinity: { gan_zhiyu: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_2d',
                title: '亮了一下',
                background: 'bg-phone',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '过了一会儿，他又发来一条。' },
                    { speaker: 'gan_zhiyu', text: '「你有没有看过四川的星星。」' },
                    { speaker: 'gan_zhiyu', text: '「我这里今晚很亮，想拍给你看。」' },
                    { speaker: 'narrator', text: '然后发来一张照片。' },
                    { speaker: 'narrator', text: '是窗外深蓝色的天空，星星很多。' },
                    { speaker: 'narrator', text: '拍得模糊，但很美。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚看着那张照片。' },
                    { speaker: 'narrator', text: '忽然觉得，他还在。' },
                    { speaker: 'narrator', text: '就是有时候退潮了，但海还在那里。' }
                ],
                choices: [
                    { text: '「很好看。早点睡。」', next: 'xw_5_lover_ganzhiyu_3', affinity: { gan_zhiyu: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_3',
                title: '热情消退',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '开学后。' },
                    { speaker: 'narrator', text: '方圆又开始打游戏了。' },
                    { speaker: 'narrator', text: '不是那种偶尔打的，是天天打，打到很晚。' },
                    { speaker: 'narrator', text: '夏晚发消息，他回得越来越慢。' },
                    { speaker: 'narrator', text: '有时候一个「嗯」，有时候什么都没有。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚问他：「你最近怎么了？」' },
                    { speaker: 'gan_zhiyu', text: '「没怎么，就是有点累。」' },
                    { speaker: 'narrator', text: '她等了一下，没有然后了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起第一次见他的样子。' },
                    { speaker: 'narrator', text: '他躺在沙发上，眼睛空空的，说：「没意思。」' },
                    { speaker: 'narrator', text: '后来慢慢好了。' },
                    { speaker: 'narrator', text: '但她不知道，那个「好了」是不是真的好了。' },
                    { speaker: 'narrator', text: '还是只是暂时的。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚发了很多条消息，他只回了零星几个字。' },
                    { speaker: 'narrator', text: '她越来越觉得自己像是在单方面维系。' },
                    { speaker: 'narrator', text: '终于有一天，她把情绪都倒出来了。' },
                    { speaker: 'xia_wan', text: '「你到底还喜不喜欢我？」' },
                    { speaker: 'narrator', text: '沉默了很久很久。' },
                    { speaker: 'gan_zhiyu', text: '「喜欢。只是最近状态不好。」' },
                    { speaker: 'gan_zhiyu', text: '「对不起，我没有照顾好你的感受。」' },
                    { speaker: 'narrator', text: '夏晚看着这条道歉。' },
                    { speaker: 'narrator', text: '他主动低头来找她了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但那个问题，她还是问了。' },
                    { speaker: 'narrator', text: '她的心里，还是有一根刺。' }
                ],
                choices: [
                    { text: '「没事，我等你。」', next: 'xw_5_lover_ganzhiyu_3b', affinity: { gan_zhiyu: 10 } },
                    { text: '「我需要你告诉我你还在。」', next: 'xw_5_lover_ganzhiyu_3b', affinity: { gan_zhiyu: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_3b',
                title: '冷战的滋味',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '道完歉之后。' },
                    { speaker: 'narrator', text: '他确实好了一点。' },
                    { speaker: 'narrator', text: '会主动发消息问她吃饭了没。' },
                    { speaker: 'narrator', text: '会在她说晚安的时候回一句。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但也就这样了。' },
                    { speaker: 'narrator', text: '像是什么都没发生过一样。' },
                    { speaker: 'narrator', text: '那些让她心里发凉的感觉，还是在那里。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有一天，她在朋友圈看到他发了游戏截图。' },
                    { speaker: 'narrator', text: '配文是：「又通宵了。」' },
                    { speaker: 'narrator', text: '时间是凌晨三点。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她突然觉得很累。' },
                    { speaker: 'narrator', text: '不是生气。' },
                    { speaker: 'narrator', text: '是那种，明知道他就是这样的人，还是会失望的累。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她没有点赞。' },
                    { speaker: 'narrator', text: '也没有评论。' },
                    { speaker: 'narrator', text: '就那样划过去了。' }
                ],
                choices: [
                    { text: '（继续冷战）', next: 'xw_5_lover_ganzhiyu_3c', affinity: { gan_zhiyu: -5 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_3c',
                title: '他也累了',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '冷战持续了一个星期。' },
                    { speaker: 'narrator', text: '他发的消息，她回得很敷衍。' },
                    { speaker: 'narrator', text: '她发的消息，他也开始回得很慢。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有一天晚上。' },
                    { speaker: 'narrator', text: '他突然打来电话。' },
                    { speaker: 'narrator', text: '夏晚愣了一下，接了。' },
                    { speaker: 'gan_zhiyu', text: '你到底想怎样？' },
                    { speaker: 'narrator', text: '他的声音听起来很累。' },
                    { speaker: 'narrator', text: '不是那种不耐烦的累。' },
                    { speaker: 'narrator', text: '是真的很累。' },
                    { speaker: 'xia_wan', text: '我……' },
                    { speaker: 'gan_zhiyu', text: '我知道我最近状态不好。我知道你失望。' },
                    { speaker: 'gan_zhiyu', text: '但你能不能不要这样对我？' },
                    { speaker: 'narrator', text: '夏晚愣住了。' },
                    { speaker: 'narrator', text: '她没想到他会这样问。' },
                    { speaker: 'narrator', text: '她一直以为自己是那个受伤的人。' },
                    { speaker: 'narrator', text: '原来他也是。' }
                ],
                choices: [
                    { text: '「对不起。」', next: 'xw_5_lover_ganzhiyu_3d', affinity: { gan_zhiyu: 5 }, repair: 8 }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_3d',
                title: '他也很迷茫',
                background: 'bg-phone',
                mood: 'reflective',
                dialogues: [
                    { speaker: 'xia_wan', text: '对不起。' },
                    { speaker: 'narrator', text: '电话那头沉默了很久。' },
                    { speaker: 'gan_zhiyu', text: '我知道你想我好好的。' },
                    { speaker: 'gan_zhiyu', text: '我也想。' },
                    { speaker: 'gan_zhiyu', text: '但我有时候真的不知道该怎么办。' },
                    { speaker: 'narrator', text: '他的声音闷闷的。' },
                    { speaker: 'gan_zhiyu', text: '以前打游戏，是因为无聊。' },
                    { speaker: 'gan_zhiyu', text: '现在打游戏，是因为不知道该干什么。' },
                    { speaker: 'gan_zhiyu', text: '只有打游戏的时候，我不用想这些。' },
                    { speaker: 'narrator', text: '夏晚握着电话，不知道该说什么。' },
                    { speaker: 'narrator', text: '她想起第一次见他的时候。' },
                    { speaker: 'narrator', text: '他说\"没意思\"的样子。' },
                    { speaker: 'narrator', text: '那时候她觉得，这个人好可怜。' },
                    { speaker: 'narrator', text: '现在她知道了。' },
                    { speaker: 'narrator', text: '他一直是这样的人。' },
                    { speaker: 'narrator', text: '只是她以为爱可以改变他。' }
                ],
                choices: [
                    { text: '「我知道了。我们慢慢来。」', next: 'xw_5_lover_ganzhiyu_4', affinity: { gan_zhiyu: 15 }, repair: 12 }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_4',
                title: '冷静之后',
                background: 'bg-phone',
                mood: 'nervous',
                dialogues: [
                    { speaker: 'narrator', text: '那天之后，他们的关系变得很微妙。' },
                    { speaker: 'narrator', text: '不是不好，而是……小心翼翼。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '方圆开始尝试改变了。' },
                    { speaker: 'narrator', text: '不是那种大刀阔斧的改变。' },
                    { speaker: 'narrator', text: '只是每天会多发一条消息。' },
                    { speaker: 'narrator', text: '以前只会说"早"或"晚安"。' },
                    { speaker: 'narrator', text: '现在会多说一句。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '比如。' },
                    { speaker: 'gan_zhiyu', text: '「早。今天天气不错。」' },
                    { speaker: 'gan_zhiyu', text: '「晚安。早点睡。」' },
                    { speaker: 'gan_zhiyu', text: '「今天吃了什么？」' },
                    { speaker: 'narrator', text: '都是很普通的话。' },
                    { speaker: 'narrator', text: '但夏晚能感觉到，他在努力。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有一天，170私聊她。' },
                    { speaker: 'yu_haitong', text: '「夏晚，方圆最近状态好像好一点了。」' },
                    { speaker: 'yu_haitong', text: '「是不是因为你？」' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' }
                ],
                choices: [
                    { text: '「可能是吧。」', next: 'xw_5_lover_ganzhiyu_4a', affinity: { gan_zhiyu: 10 }, repair: 10 },
                    { text: '「我不知道。」', next: 'xw_5_lover_ganzhiyu_4b', affinity: { gan_zhiyu: 5 }, repair: 3 }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_4a',
                title: '他的变化',
                background: 'bg-phone',
                mood: 'warm',
                dialogues: [
                    { speaker: 'xia_wan', text: '「可能是吧。」' },
                    { speaker: 'yu_haitong', text: '「那你多鼓励鼓励他。」' },
                    { speaker: 'yu_haitong', text: '「他这个人，嘴上不说，其实很在乎你。」' },
                    { speaker: 'narrator', text: '夏晚看着屏幕。' },
                    { speaker: 'narrator', text: '170一直是个很温柔的人。' },
                    { speaker: 'narrator', text: '她说出的话，总是让人觉得很暖。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「我会的。」' },
                    { speaker: 'narrator', text: '那天晚上，夏晚想了很久。' },
                    { speaker: 'narrator', text: '方圆确实在变。' },
                    { speaker: 'narrator', text: '虽然变化很小。' },
                    { speaker: 'narrator', text: '但她在认真看的话，是能看到的。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她打开对话框。' },
                    { speaker: 'xia_wan', text: '「方圆。」' },
                    { speaker: 'xia_wan', text: '「谢谢你最近的变化。」' },
                    { speaker: 'xia_wan', text: '「我看到了。」' },
                    { speaker: 'narrator', text: '发出去之后，她有点紧张。' },
                    { speaker: 'narrator', text: '不知道他会怎么回。' }
                ],
                choices: [
                    { text: '（等他回复）', next: 'xw_5_lover_ganzhiyu_5', affinity: { gan_zhiyu: 10 }, repair: 8 }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_4b',
                title: '不确定',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'xia_wan', text: '「我不知道。」' },
                    { speaker: 'yu_haitong', text: '「没关系，慢慢来。」' },
                    { speaker: 'yu_haitong', text: '「感情这种事，急不来的。」' },
                    { speaker: 'narrator', text: '170总是这样。' },
                    { speaker: 'narrator', text: '说话慢悠悠的，但每句都在点上。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚放下手机。' },
                    { speaker: 'narrator', text: '她确实不确定。' },
                    { speaker: 'narrator', text: '方圆的变化，她看到了。' },
                    { speaker: 'narrator', text: '但这种变化能持续多久？' },
                    { speaker: 'narrator', text: '她不知道。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那周，方圆的消息确实变多了。' },
                    { speaker: 'narrator', text: '但夏晚回得有点敷衍。' },
                    { speaker: 'narrator', text: '她怕自己太期待。' },
                    { speaker: 'narrator', text: '期待越多，失望越大。' }
                ],
                choices: [
                    { text: '「方圆，你最近还好吗？」', next: 'xw_5_lover_ganzhiyu_5', affinity: { gan_zhiyu: 5 }, repair: 5 },
                    { text: '（再观察一段时间）', next: 'xw_5_lover_ganzhiyu_5b', affinity: { gan_zhiyu: 0 }, repair: 0 }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_5',
                title: '五一',
                background: 'bg-phone',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '五一假期。' },
                    { speaker: 'narrator', text: '夏晚问方圆要不要来深圳。' },
                    { speaker: 'narrator', text: '他答应了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天她去接他。' },
                    { speaker: 'narrator', text: '他站在高铁站出口。' },
                    { speaker: 'narrator', text: '还是那个样子。' },
                    { speaker: 'narrator', text: '有点懒散，有点无所谓。' },
                    { speaker: 'narrator', text: '但看见她的时候，他的眼睛亮了一下。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他没有像以前一样站着等她走过去。' },
                    { speaker: 'narrator', text: '而是主动走过来。' },
                    { speaker: 'gan_zhiyu', text: '「走吧。」' },
                    { speaker: 'narrator', text: '他顺手接过她的包。' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '以前他不会这样的。' },
                    { speaker: 'narrator', text: '以前他会站在原地，等她过去。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他好像在慢慢变。' },
                    { speaker: 'narrator', text: '虽然还是那个方圆。' },
                    { speaker: 'narrator', text: '但好像……更主动了一点。' }
                ],
                choices: [
                    { text: '「你最近变化挺大的。」', next: 'xw_5_lover_ganzhiyu_5a', affinity: { gan_zhiyu: 10 }, repair: 8 },
                    { text: '（挽住他的胳膊）', next: 'xw_5_lover_ganzhiyu_5a', affinity: { gan_zhiyu: 15 }, repair: 15 }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_5a',
                title: '牵手',
                background: 'bg-street',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚挽住他的胳膊。' },
                    { speaker: 'narrator', text: '他愣了一下。' },
                    { speaker: 'narrator', text: '然后低头看了她一眼。' },
                    { speaker: 'gan_zhiyu', text: '「怎么突然……」' },
                    { speaker: 'xia_wan', text: '「不可以吗？」' },
                    { speaker: 'gan_zhiyu', text: '「……可以。」' },
                    { speaker: 'narrator', text: '他没有躲开。' },
                    { speaker: 'narrator', text: '夏晚靠在他肩上。' },
                    { speaker: 'narrator', text: '他身上有一点点汗味。' },
                    { speaker: 'narrator', text: '还有一点点洗衣液的味道。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他们走在路上。' },
                    { speaker: 'narrator', text: '他忽然开口。' },
                    { speaker: 'gan_zhiyu', text: '「夏晚。」' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'gan_zhiyu', text: '「我知道我最近状态不好。」' },
                    { speaker: 'gan_zhiyu', text: '「让你担心了。」' },
                    { speaker: 'narrator', text: '夏晚抬起头看他。' },
                    { speaker: 'narrator', text: '他正看着前方。' },
                    { speaker: 'narrator', text: '表情很认真。' },
                    { speaker: 'gan_zhiyu', text: '「我会慢慢调整的。」' },
                    { speaker: 'gan_zhiyu', text: '「给我一点时间。」' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他很少这样说话。' },
                    { speaker: 'narrator', text: '平时都是嘻嘻哈哈的。' },
                    { speaker: 'narrator', text: '但现在，他很认真。' }
                ],
                choices: [
                    { text: '「好，我等你。」', next: 'xw_5_lover_ganzhiyu_6', affinity: { gan_zhiyu: 15 }, repair: 15 },
                    { text: '「我相信你。」', next: 'xw_5_lover_ganzhiyu_6', affinity: { gan_zhiyu: 10 }, repair: 10 }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_5b',
                title: '错过',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚决定再观察一段时间。' },
                    { speaker: 'narrator', text: '但她的态度还是有点冷淡。' },
                    { speaker: 'narrator', text: '方圆发的消息，她回得很慢。' },
                    { speaker: 'narrator', text: '方圆好像感觉到了什么。' },
                    { speaker: 'narrator', text: '消息也越来越少了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '五一假期。' },
                    { speaker: 'narrator', text: '方圆问她要不要来深圳。' },
                    { speaker: 'narrator', text: '她犹豫了一下。' },
                    { speaker: 'xia_wan', text: '「算了吧，最近有点忙。」' },
                    { speaker: 'narrator', text: '其实她不忙。' },
                    { speaker: 'narrator', text: '她只是不知道该怎么面对他。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'gan_zhiyu', text: '「好。」' },
                    { speaker: 'narrator', text: '就一个字。' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕，心里空落落的。' },
                    { speaker: 'narrator', text: '她好像又把事情搞砸了。' }
                ],
                choices: [
                    { text: '「其实……你要来的话我也可以。」', next: 'xw_5_lover_ganzhiyu_5a', affinity: { gan_zhiyu: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_6',
                title: '海边',
                background: 'bg-street',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '那几天，他们去了很多地方。' },
                    { speaker: 'narrator', text: '世界之窗、欢乐谷、深圳湾。' },
                    { speaker: 'narrator', text: '他帮她拍照。' },
                    { speaker: 'narrator', text: '虽然拍得很敷衍。' },
                    { speaker: 'narrator', text: '但夏晚每次都很开心。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '最后一天晚上。' },
                    { speaker: 'narrator', text: '他们坐在海边的长椅上。' },
                    { speaker: 'narrator', text: '海风吹过来。' },
                    { speaker: 'narrator', text: '很舒服。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'gan_zhiyu', text: '「夏晚。」' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'gan_zhiyu', text: '「我有个事想跟你说。」' },
                    { speaker: 'narrator', text: '他的语气有点不一样。' },
                    { speaker: 'narrator', text: '夏晚转过头看他。' },
                    { speaker: 'gan_zhiyu', text: '「毕业之后……」' },
                    { speaker: 'gan_zhiyu', text: '他顿了顿。' },
                    { speaker: 'gan_zhiyu', text: '「我想去深圳。」' },
                    { speaker: 'narrator', text: '夏晚愣住了。' },
                    { speaker: 'gan_zhiyu', text: '「不是开玩笑。」' },
                    { speaker: 'gan_zhiyu', text: '「我是认真的。」' }
                ],
                choices: [
                    { text: '「为什么？」', next: 'xw_5_lover_ganzhiyu_7', affinity: { gan_zhiyu: 10 }, repair: 8 },
                    { text: '「你来深圳……做什么？」', next: 'xw_5_lover_ganzhiyu_7', affinity: { gan_zhiyu: 15 }, repair: 12 }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_7',
                title: '决定',
                background: 'bg-street',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'gan_zhiyu', text: '「我想过了。」' },
                    { speaker: 'gan_zhiyu', text: '「我不想再这样下去了。」' },
                    { speaker: 'narrator', text: '他看着海面。' },
                    { speaker: 'gan_zhiyu', text: '「在四川，我找不到方向。」' },
                    { speaker: 'gan_zhiyu', text: '「每天打游戏，不是真的开心。」' },
                    { speaker: 'gan_zhiyu', text: '「只是不知道怎么打发时间。」' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'gan_zhiyu', text: '「但和你在一起的时候不一样。」' },
                    { speaker: 'gan_zhiyu', text: '「我会想变得好一点。」' },
                    { speaker: 'gan_zhiyu', text: '「会想好好规划以后。」' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他很少说这么多话。' },
                    { speaker: 'narrator', text: '更少说这么认真的话。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'gan_zhiyu', text: '「深圳有剧本杀店。」' },
                    { speaker: 'gan_zhiyu', text: '「我可以继续做这行。」' },
                    { speaker: 'gan_zhiyu', text: '「而且……离你近。」' },
                    { speaker: 'narrator', text: '他说完就低下头。' },
                    { speaker: 'narrator', text: '耳根有点红。' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '忽然觉得，他真的变了。' },
                    { speaker: 'narrator', text: '以前那个说"没意思"的人。' },
                    { speaker: 'narrator', text: '现在在说以后了。' }
                ],
                choices: [
                    { text: '「那……你来深圳吧。」', next: 'xw_5_lover_ganzhiyu_8', affinity: { gan_zhiyu: 15 }, repair: 12 },
                    { text: '「你想清楚了吗？」', next: 'xw_5_lover_ganzhiyu_8', affinity: { gan_zhiyu: 10 }, repair: 8 }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_8',
                title: '希望',
                background: 'bg-street',
                mood: 'warm',
                dialogues: [
                    { speaker: 'gan_zhiyu', text: '「我想清楚了。」' },
                    { speaker: 'gan_zhiyu', text: '「从上次那通电话之后，我就开始想了。」' },
                    { speaker: 'narrator', text: '他转过头，看着她。' },
                    { speaker: 'gan_zhiyu', text: '「你说你觉得我很可怜。」' },
                    { speaker: 'gan_zhiyu', text: '「我当时觉得……」' },
                    { speaker: 'gan_zhiyu', text: '「有点难受。」' },
                    { speaker: 'gan_zhiyu', text: '「但后来想想，你说得对。」' },
                    { speaker: 'gan_zhiyu', text: '「我一直这样，不是个办法。」' },
                    { speaker: 'narrator', text: '夏晚没说话。' },
                    { speaker: 'narrator', text: '她只是握住了他的手。' },
                    { speaker: 'narrator', text: '他的手心有点热。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'gan_zhiyu', text: '「夏晚。」' },
                    { speaker: 'xia_wan', text: '嗯。' },
                    { speaker: 'gan_zhiyu', text: '「谢谢你。」' },
                    { speaker: 'xia_wan', text: '「谢我什么？」' },
                    { speaker: 'gan_zhiyu', text: '「谢谢你愿意等我。」' },
                    { speaker: 'gan_zhiyu', text: '「换个人，可能早就走了。」' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他正看着远处的海面。' },
                    { speaker: 'narrator', text: '眼睛里映着远处的灯火。' },
                    { speaker: 'narrator', text: '还有一点点光。' },
                    { speaker: 'narrator', text: '以前没有的那种光。' }
                ],
                choices: [
                    { text: '「我不会走的。」', next: 'xw_5_lover_ganzhiyu_9', affinity: { gan_zhiyu: 15 }, repair: 15 },
                    { text: '（靠在他肩上）', next: 'xw_5_lover_ganzhiyu_9', affinity: { gan_zhiyu: 10 }, repair: 10 }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_9',
                title: '毕业',
                background: 'bg-street',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '一年后。' },
                    { speaker: 'narrator', text: '毕业典礼那天。' },
                    { speaker: 'narrator', text: '夏晚站在学校门口。' },
                    { speaker: 'narrator', text: '方圆站在那里等她。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他已经来深圳两个月了。' },
                    { speaker: 'narrator', text: '在一家剧本杀店做DM。' },
                    { speaker: 'narrator', text: '状态比以前好了很多。' },
                    { speaker: 'narrator', text: '虽然还是有点懒散。' },
                    { speaker: 'narrator', text: '但至少有了方向。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'gan_zhiyu', text: '「毕业快乐。」' },
                    { speaker: 'narrator', text: '他递过来一束花。' },
                    { speaker: 'narrator', text: '是向日葵。' },
                    { speaker: 'narrator', text: '夏晚最喜欢的。' },
                    { speaker: 'xia_wan', text: '「你怎么知道我喜欢向日葵？」' },
                    { speaker: 'gan_zhiyu', text: '「你以前说过。」' },
                    { speaker: 'narrator', text: '他记得。' },
                    { speaker: 'narrator', text: '夏晚接过花，忽然觉得鼻子有点酸。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他走过来，轻轻揽住她的肩膀。' },
                    { speaker: 'gan_zhiyu', text: '「走吧。」' },
                    { speaker: 'gan_zhiyu', text: '「带你吃饭。」' },
                    { speaker: 'narrator', text: '夏晚靠在他身上。' },
                    { speaker: 'narrator', text: '她想起一年前。' },
                    { speaker: 'narrator', text: '他还在四川打游戏。' },
                    { speaker: 'narrator', text: '她还在担心这段感情能不能走下去。' },
                    { speaker: 'narrator', text: '现在，一切都变了。' }
                ],
                choices: [
                    { text: '「你想吃什么？」', next: 'xw_5_lover_ganzhiyu_10', affinity: { gan_zhiyu: 10 } },
                    { text: '「你最近工作怎么样？」', next: 'xw_5_lover_ganzhiyu_10', affinity: { gan_zhiyu: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_10',
                title: '新生活',
                background: 'bg-room',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '半年后。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业。' },
                    { speaker: 'narrator', text: '夏晚是副店长。' },
                    { speaker: 'narrator', text: '方圆是带本最好的DM。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '大家又聚在一起了。' },
                    { speaker: 'narrator', text: '橙子、170、谨言、吴琊。' },
                    { speaker: 'narrator', text: '一个都不少。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '橙子举着酒杯。' },
                    { speaker: 'chengzi', text: '「来来来，敬新店！」' },
                    { speaker: 'ganzhiyu', text: '「敬新店！」' },
                    { speaker: 'long_xinheng', text: '「敬新店！」' },
                    { speaker: 'narrator', text: '大家笑着碰杯。' },
                    { speaker: 'narrator', text: '夏晚坐在角落里。' },
                    { speaker: 'narrator', text: '方圆坐在她旁边。' },
                    { speaker: 'narrator', text: '他的手放在桌下，握着她的手。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她忽然想起第一次见他的时候。' },
                    { speaker: 'narrator', text: '他说"没意思"的样子。' },
                    { speaker: 'narrator', text: '她当时觉得，这个人好可怜。' },
                    { speaker: 'narrator', text: '现在呢？' },
                    { speaker: 'narrator', text: '现在他的眼睛里有光了。' },
                    { speaker: 'narrator', text: '是她帮他找回来的。' }
                ],
                choices: [
                    { text: '「方圆。」', next: 'xw_5_lover_ganzhiyu_11', affinity: { gan_zhiyu: 10 } },
                    { text: '（握紧他的手）', next: 'xw_5_lover_ganzhiyu_11', affinity: { gan_zhiyu: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_11',
                title: '点亮',
                background: 'bg-room',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '那天打烊之后。' },
                    { speaker: 'narrator', text: '夏晚和方圆走在回家的路上。' },
                    { speaker: 'narrator', text: '深圳的夜晚很安静。' },
                    { speaker: 'narrator', text: '路灯把两个人的影子拉得很长。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'gan_zhiyu', text: '「夏晚。」' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'gan_zhiyu', text: '「你有没有觉得……我变了？」' },
                    { speaker: 'xia_wan', text: '「变了。」' },
                    { speaker: 'xia_wan', text: '「比以前好了。」' },
                    { speaker: 'gan_zhiyu', text: '「是吗？」' },
                    { speaker: 'xia_wan', text: '「嗯。你的眼睛亮了。」' },
                    { speaker: 'narrator', text: '他愣了一下。' },
                    { speaker: 'gan_zhiyu', text: '「以前很暗吗？」' },
                    { speaker: 'xia_wan', text: '「以前……像一潭死水。」' },
                    { speaker: 'narrator', text: '夏晚说得很直接。' },
                    { speaker: 'narrator', text: '他也没生气。' },
                    { speaker: 'gan_zhiyu', text: '「那我以后继续保持。」' },
                    { speaker: 'narrator', text: '他笑了。' },
                    { speaker: 'narrator', text: '是那种很干净的笑。' },
                    { speaker: 'narrator', text: '没有以前那种懒洋洋的感觉。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「方圆。」' },
                    { speaker: 'gan_zhiyu', text: '嗯？' },
                    { speaker: 'xia_wan', text: '「谢谢你。」' },
                    { speaker: 'gan_zhiyu', text: '「谢我什么？」' },
                    { speaker: 'xia_wan', text: '「谢谢你愿意为我改变。」' },
                    { speaker: 'narrator', text: '他停下脚步。' },
                    { speaker: 'gan_zhiyu', text: '「不客气。」' },
                    { speaker: 'gan_zhiyu', text: '「毕竟是为了我自己。」' },
                    { speaker: 'narrator', text: '他伸手，轻轻揽住她的肩膀。' },
                    { speaker: 'gan_zhiyu', text: '「而且……」' },
                    { speaker: 'gan_zhiyu', text: '「你值得。」' }
                ],
                choices: [
                    { text: '（靠在他怀里）', next: 'xw_5_lover_ganzhiyu_12', affinity: { gan_zhiyu: 15 } },
                    { text: '「你什么时候变得这么会说话了。」', next: 'xw_5_lover_ganzhiyu_12', affinity: { gan_zhiyu: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_12',
                title: '未来',
                background: 'bg-room',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上。' },
                    { speaker: 'narrator', text: '夏晚躺在床上。' },
                    { speaker: 'narrator', text: '方圆已经回去了。' },
                    { speaker: 'narrator', text: '他们住得很近。' },
                    { speaker: 'narrator', text: '走路十分钟就到。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起一年前。' },
                    { speaker: 'narrator', text: '她第一次见方圆。' },
                    { speaker: 'narrator', text: '他窝在沙发里打游戏。' },
                    { speaker: 'narrator', text: '橙子问他有没有合适的剧本。' },
                    { speaker: 'narrator', text: '他头也不抬地说"没意思"。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那时候她觉得。' },
                    { speaker: 'narrator', text: '这个人好可怜。' },
                    { speaker: 'narrator', text: '但她没想到。' },
                    { speaker: 'narrator', text: '有一天，她会爱上他。' },
                    { speaker: 'narrator', text: '更没想到。' },
                    { speaker: 'narrator', text: '她会亲眼看着他一点一点变好。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '手机震了。' },
                    { speaker: 'gan_zhiyu', text: '「睡了吗？」' },
                    { speaker: 'xia_wan', text: '「还没。」' },
                    { speaker: 'gan_zhiyu', text: '「我也睡不着。」' },
                    { speaker: 'gan_zhiyu', text: '「在想你。」' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕。' },
                    { speaker: 'narrator', text: '他什么时候变得这么会说话了。' },
                    { speaker: 'narrator', text: '但她喜欢。' }
                ],
                choices: [
                    { text: '「我也是。」', next: 'xw_5_lover_ganzhiyu_13', affinity: { gan_zhiyu: 15 } },
                    { text: '「明天见。」', next: 'xw_5_lover_ganzhiyu_13', affinity: { gan_zhiyu: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_13',
                title: '两年后',
                background: 'bg-street',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '两年后。' },
                    { speaker: 'narrator', text: '「墨染」已经是深圳最好的剧本杀店之一了。' },
                    { speaker: 'narrator', text: '夏晚是店长。' },
                    { speaker: 'narrator', text: '方圆是首席DM。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天打烊之后。' },
                    { speaker: 'narrator', text: '大家陆续走了。' },
                    { speaker: 'narrator', text: '只剩他们两个。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '方圆从口袋里掏出一个小盒子。' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'gan_zhiyu', text: '「给你。」' },
                    { speaker: 'narrator', text: '他打开盒子。' },
                    { speaker: 'narrator', text: '是一枚戒指。' },
                    { speaker: 'narrator', text: '很简单的款式。' },
                    { speaker: 'narrator', text: '但夏晚一眼就喜欢上了。' },
                    { speaker: 'gan_zhiyu', text: '「我想了很久了。」' },
                    { speaker: 'gan_zhiyu', text: '「觉得差不多了。」' },
                    { speaker: 'gan_zhiyu', text: '「所以……」' },
                    { speaker: 'narrator', text: '他单膝跪地。' },
                    { speaker: 'gan_zhiyu', text: '「夏晚，你愿意嫁给我吗？」' }
                ],
                choices: [
                    { text: '「我愿意。」', next: 'xw_5_lover_ganzhiyu_14', affinity: { gan_zhiyu: 20 } },
                    { text: '（哭出来）', next: 'xw_5_lover_ganzhiyu_14', affinity: { gan_zhiyu: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_14',
                title: '点亮与等待',
                background: 'bg-room',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚的眼泪一下子涌了出来。' },
                    { speaker: 'narrator', text: '她用力点头。' },
                    { speaker: 'xia_wan', text: '「我愿意。」' },
                    { speaker: 'narrator', text: '方圆站起来，把戒指套在她手上。' },
                    { speaker: 'narrator', text: '动作有点生涩。' },
                    { speaker: 'narrator', text: '但很认真。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '然后他抱住她。' },
                    { speaker: 'narrator', text: '抱得很紧。' },
                    { speaker: 'narrator', text: '夏晚埋在他怀里。' },
                    { speaker: 'narrator', text: '她想起一年前。' },
                    { speaker: 'narrator', text: '他说"没意思"的样子。' },
                    { speaker: 'narrator', text: '想起她第一次来店里。' },
                    { speaker: 'narrator', text: '他躲在角落打游戏。' },
                    { speaker: 'narrator', text: '眼睛里什么都没有。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '现在呢？' },
                    { speaker: 'narrator', text: '他的眼睛里有光了。' },
                    { speaker: 'narrator', text: '是她帮他点亮的。' },
                    { speaker: 'narrator', text: '他也在帮她点亮。' },
                    { speaker: 'narrator', text: '点亮彼此的生活。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'gan_zhiyu', text: '「夏晚。」' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'gan_zhiyu', text: '「谢谢你。」' },
                    { speaker: 'xia_wan', text: '「又谢我。」' },
                    { speaker: 'gan_zhiyu', text: '「谢谢你愿意等我。」' },
                    { speaker: 'gan_zhiyu', text: '「等我想清楚。」' },
                    { speaker: 'gan_zhiyu', text: '「等我有勇气改变。」' },
                    { speaker: 'gan_zhiyu', text: '「等我有勇气……向你求婚。」' }
                ],
                choices: [
                    { text: '「我说过的。我等你。」', next: 'xw_5_lover_ganzhiyu_15', affinity: { gan_zhiyu: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_15',
                title: '点亮与等待',
                background: 'bg-street',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上。' },
                    { speaker: 'narrator', text: '夏晚和方圆坐在店门口的长椅上。' },
                    { speaker: 'narrator', text: '看星星。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '深圳的夜空看不到多少星星。' },
                    { speaker: 'narrator', text: '但她想起他以前发的那张照片。' },
                    { speaker: 'narrator', text: '四川的星空。' },
                    { speaker: 'narrator', text: '拍得模模糊糊的。' },
                    { speaker: 'narrator', text: '但很美。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'gan_zhiyu', text: '「在想什么？」' },
                    { speaker: 'xia_wan', text: '「在想……你以前给我发的那张照片。」' },
                    { speaker: 'gan_zhiyu', text: '「哪张？」' },
                    { speaker: 'xia_wan', text: '「星星那张。」' },
                    { speaker: 'gan_zhiyu', text: '「哦。那个。」' },
                    { speaker: 'gan_zhiyu', text: '「拍得很丑。」' },
                    { speaker: 'xia_wan', text: '「但我很喜欢。」' },
                    { speaker: 'narrator', text: '他转过头看她。' },
                    { speaker: 'gan_zhiyu', text: '「为什么？」' },
                    { speaker: 'xia_wan', text: '「因为那是你第一次主动给我分享东西。」' },
                    { speaker: 'xia_wan', text: '「之前你都是问一句答一句。」' },
                    { speaker: 'xia_wan', text: '「但那张照片不一样。」' },
                    { speaker: 'xia_wan', text: '「那是你的眼睛。」' },
                    { speaker: 'narrator', text: '他愣了一下。' },
                    { speaker: 'gan_zhiyu', text: '「我的眼睛？」' },
                    { speaker: 'xia_wan', text: '「嗯。你看到的东西。」' },
                    { speaker: 'xia_wan', text: '你想和我分享。' },
                    { speaker: 'narrator', text: '他没说话。' },
                    { speaker: 'narrator', text: '只是伸手，揽住了她的肩膀。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天的星星很少。' },
                    { speaker: 'narrator', text: '但夏晚觉得。' },
                    { speaker: 'narrator', text: '她的星星，已经在身边了。' }
                ],
                choices: [
                    { text: '（靠在他怀里）', next: 'xw_5_lover_ganzhiyu_end', affinity: { gan_zhiyu: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_ganzhiyu_end_sweet',
                title: '点亮与等待',
                background: 'bg-room',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '学期末。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业。' },
                    { speaker: 'narrator', text: '夏晚是店长。' },
                    { speaker: 'narrator', text: '方圆是首席DM。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '大家又聚在一起了。' },
                    { speaker: 'narrator', text: '橙子、170、谨言、吴琊。' },
                    { speaker: 'narrator', text: '一个都不少。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '橙子举着酒杯。' },
                    { speaker: 'chengzi', text: '「来来来，敬新店！」' },
                    { speaker: 'ganzhiyu', text: '「敬新店！」' },
                    { speaker: 'long_xinheng', text: '「敬新店！」' },
                    { speaker: 'narrator', text: '大家笑着碰杯。' },
                    { speaker: 'narrator', text: '夏晚坐在角落里。' },
                    { speaker: 'narrator', text: '方圆坐在她旁边。' },
                    { speaker: 'narrator', text: '他的手放在桌下，握着她的手。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她忽然想起第一次见他的时候。' },
                    { speaker: 'narrator', text: '他说"没意思"的样子。' },
                    { speaker: 'narrator', text: '她当时觉得，这个人好可怜。' },
                    { speaker: 'narrator', text: '现在呢？' },
                    { speaker: 'narrator', text: '现在他的眼睛里有光了。' },
                    { speaker: 'narrator', text: '是她帮他找回来的。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【甜蜜和好】' },
                    { speaker: 'narrator', text: '「点亮与等待」— 完 —' }
                ],
                choices: [
                    { text: '（重新开始）', next: 'start', affinity: {} }
                ]
            },

            // 【恋人线·方圆】普通和好结局（repairScore 5-14）
            {
                id: 'xw_5_lover_ganzhiyu_end_normal',
                title: '点亮与等待',
                background: 'bg-room',
                mood: 'peaceful',
                dialogues: [
                    { speaker: 'narrator', text: '学期末。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业。' },
                    { speaker: 'narrator', text: '夏晚是店长。' },
                    { speaker: 'narrator', text: '方圆是DM。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '大家笑着碰杯。' },
                    { speaker: 'narrator', text: '橙子、170、谨言、吴琊。' },
                    { speaker: 'narrator', text: '一个都不少。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚坐在角落里。' },
                    { speaker: 'narrator', text: '方圆坐在她旁边。' },
                    { speaker: 'narrator', text: '他们偶尔说几句话。' },
                    { speaker: 'narrator', text: '比以前多，但也没有那么多。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起第一次见他的时候。' },
                    { speaker: 'narrator', text: '他说"没意思"的样子。' },
                    { speaker: 'narrator', text: '现在呢？' },
                    { speaker: 'narrator', text: '现在他还是会打游戏。' },
                    { speaker: 'narrator', text: '还是会说"没意思"。' },
                    { speaker: 'narrator', text: '但次数少了一点。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想，可能这样就够了。' },
                    { speaker: 'narrator', text: '改变一个人太难了。' },
                    { speaker: 'narrator', text: '她能做的，就是陪着他。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【普通和好】' },
                    { speaker: 'narrator', text: '「点亮与等待」— 完 —' }
                ],
                choices: [
                    { text: '（重新开始）', next: 'start', affinity: {} }
                ]
            },

            // 【恋人线·方圆】冷淡疏远结局（repairScore < 5）
            {
                id: 'xw_5_lover_ganzhiyu_end_cold',
                title: '点亮与等待',
                background: 'bg-room',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '学期末。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业。' },
                    { speaker: 'narrator', text: '夏晚坐在角落里，看着大家忙碌。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '橙子笑着和方圆碰杯。' },
                    { speaker: 'narrator', text: '170在旁边聊天。' },
                    { speaker: 'narrator', text: '谨言和吴琊在另一边。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚看着这一切。' },
                    { speaker: 'narrator', text: '方圆坐在她旁边。' },
                    { speaker: 'narrator', text: '他在玩手机。' },
                    { speaker: 'narrator', text: '她不知道他在看什么。' },
                    { speaker: 'narrator', text: '也没问。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起第一次见他的时候。' },
                    { speaker: 'narrator', text: '他说"没意思"的样子。' },
                    { speaker: 'narrator', text: '现在呢？' },
                    { speaker: 'narrator', text: '现在他还是会打游戏。' },
                    { speaker: 'narrator', text: '还是会说"没意思"。' },
                    { speaker: 'narrator', text: '好像什么都没变。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想，可能一开始她就错了。' },
                    { speaker: 'narrator', text: '不该以为自己能改变他。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【冷淡疏远】' },
                    { speaker: 'narrator', text: '「点亮与等待」— 完 —' }
                ],
                choices: [
                    { text: '（重新开始）', next: 'start', affinity: {} }
                ]
            },

            // ============================================================
            // 【恋人线·吴琊】xw_5_lover_wuya_*
            // 主题：工作压力下的相互支持 + 女主年后回来陪他 + 沉默的矛盾
            // ============================================================
            {
                id: 'xw_5_lover_wuya_1',
                title: '那我们现在是什么关系',
                background: 'bg-shop',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '告白之后。' },
                    { speaker: 'narrator', text: '吴琊没有说太多。' },
                    { speaker: 'narrator', text: '只是某天下班，把一个小盒子放在夏晚面前。' },
                    { speaker: 'wu_ya', text: '打开看。' },
                    { speaker: 'narrator', text: '是两枚对戒。' },
                    { speaker: 'narrator', text: '简单的款式，银色，很素。' },
                    { speaker: 'narrator', text: '夏晚抬起头看他。' },
                    { speaker: 'wu_ya', text: '不喜欢就别戴。' },
                    { speaker: 'narrator', text: '他把脸转向别处，耳根有点红。' },
                    { speaker: 'narrator', text: '夏晚把那枚小一点的取出来，套在手上。' },
                    { speaker: 'narrator', text: '然后把另一枚递给他。' },
                    { speaker: 'xia_wan', text: '帮我戴上那个。' },
                    { speaker: 'narrator', text: '他愣了一下。' },
                    { speaker: 'narrator', text: '然后低下头，把那枚戒指套进她的无名指里。' },
                    { speaker: 'narrator', text: '动作很轻。' },
                    { speaker: 'narrator', text: '像是在确认什么重要的事。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_wuya_1b', affinity: { wu_ya: 20 } }
                ]
            },
            {
                id: 'xw_5_lover_wuya_1b',
                title: '笨拙',
                background: 'bg-shop',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '戴上戒指之后。' },
                    { speaker: 'narrator', text: '吴琊就回吧台后面去了。' },
                    { speaker: 'narrator', text: '像什么都没发生过一样。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但夏晚注意到。' },
                    { speaker: 'narrator', text: '他给她倒了杯热水，放在她能拿到的地方。' },
                    { speaker: 'narrator', text: '他把她坐的那张沙发的靠垫扶正了。' },
                    { speaker: 'narrator', text: '他把她散落的头发拨到耳后，然后收回手。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他不说话。' },
                    { speaker: 'narrator', text: '但他一直在做。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '橙子从旁边经过，小声说：' },
                    { speaker: 'chengzi', text: '你看他，一直在偷看你。' },
                    { speaker: 'narrator', text: '夏晚抬头，正好对上他的目光。' },
                    { speaker: 'narrator', text: '他迅速低下头，装作在整理账本。' },
                    { speaker: 'narrator', text: '但他的耳根，红了。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_wuya_1c', affinity: { wu_ya: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_wuya_1c',
                title: '搬店',
                background: 'bg-street',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '搬店那天。' },
                    { speaker: 'narrator', text: '吴琊话不多，只是埋头干活。' },
                    { speaker: 'narrator', text: '搬箱子、搬家具、搬剧本。' },
                    { speaker: 'narrator', text: '一趟又一趟，汗流浃背。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚在旁边帮忙。' },
                    { speaker: 'narrator', text: '他走过来，从口袋里掏出一瓶水。' },
                    { speaker: 'wu_ya', text: '喝点水。' },
                    { speaker: 'narrator', text: '就三个字。' },
                    { speaker: 'narrator', text: '然后他就走了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚看着手里的水。' },
                    { speaker: 'narrator', text: '是他提前冰好的。' },
                    { speaker: 'narrator', text: '瓶身还有水珠。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他什么时候准备的？' },
                    { speaker: 'narrator', text: '她看着他忙碌的背影。' },
                    { speaker: 'narrator', text: '他把重的箱子都搬了。' },
                    { speaker: 'narrator', text: '把轻的都留给她。' },
                    { speaker: 'narrator', text: '但他什么都没说。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '吴琊就是这样的人。' },
                    { speaker: 'narrator', text: '你不说，他不说。' },
                    { speaker: 'narrator', text: '但你需要的，他都记得。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_wuya_2', affinity: { wu_ya: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_wuya_2',
                title: '新年·吴琊独守',
                background: 'bg-shop',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '大家都回老家了。' },
                    { speaker: 'narrator', text: '吴琊没有回。' },
                    { speaker: 'narrator', text: '过年那几天店里人手不够，他留下来撑着。' },
                    { speaker: 'narrator', text: '夏晚回深圳之前，问他：「你真的不回去吗？」' },
                    { speaker: 'wu_ya', text: '过完年再说。' },
                    { speaker: 'narrator', text: '他说得很平，像是在说一件很正常的事。' },
                    { speaker: 'narrator', text: '夏晚没有再问。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '新年夜，深圳。' },
                    { speaker: 'narrator', text: '夏晚和家人吃完饭，一个人坐在窗边。' },
                    { speaker: 'narrator', text: '她想着那个一个人守着空店的人。' },
                    { speaker: 'narrator', text: '不知道他新年夜一个人吃什么。' },
                    { speaker: 'narrator', text: '不知道他一个人坐在店里，听着外面的烟花声，是什么感觉。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她发了条消息。' },
                    { speaker: 'xia_wan', text: '「新年快乐。吃饭了吗。」' },
                    { speaker: 'narrator', text: '等了十几分钟。' },
                    { speaker: 'wu_ya', text: '「吃了。你呢。」' },
                    { speaker: 'xia_wan', text: '「吃了。外面烟花很响。」' },
                    { speaker: 'wu_ya', text: '「嗯。」' },
                    { speaker: 'narrator', text: '就这样。' },
                    { speaker: 'narrator', text: '三句话，然后没有然后。' },
                    { speaker: 'narrator', text: '但夏晚觉得，那三句话已经很重了。' }
                ],
                choices: [
                    { text: '（决定年后早点回去）', next: 'xw_5_lover_wuya_3', affinity: { wu_ya: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_wuya_3',
                title: '年后重逢',
                background: 'bg-shop',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '年后。' },
                    { speaker: 'narrator', text: '吴琊终于给自己放了几天假。' },
                    { speaker: 'narrator', text: '夏晚提前告诉他自己要回来。' },
                    { speaker: 'narrator', text: '那天她推开店门。' },
                    { speaker: 'narrator', text: '吴琊站在吧台后面，看到她进来，愣了一下。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他没说话。' },
                    { speaker: 'narrator', text: '只是看了她一眼，然后转身去拿杯子。' },
                    { speaker: 'narrator', text: '倒了一杯热水，放在吧台上。' },
                    { speaker: 'narrator', text: '给她。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚端着那杯水。' },
                    { speaker: 'narrator', text: '很烫。' },
                    { speaker: 'narrator', text: '但她觉得心里有什么东西慢慢暖了起来。' },
                    { speaker: 'narrator', text: '他没有说"你来了"。' },
                    { speaker: 'narrator', text: '也没有说"等你好久了"。' },
                    { speaker: 'narrator', text: '但那杯热水，已经是吴琊式的欢迎了。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_wuya_4', affinity: { wu_ya: 15 }, repair: 8 }
                ]
            },
            {
                id: 'xw_5_lover_wuya_4',
                title: '沉默的矛盾',
                background: 'bg-phone',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '开学后。' },
                    { speaker: 'narrator', text: '夏晚回了深圳继续上学。' },
                    { speaker: 'narrator', text: '吴琊还是那样，消息不多，打电话沉默。' },
                    { speaker: 'narrator', text: '但这一次，她慢慢有点受不了了。' },
                    { speaker: 'narrator', text: '她需要他告诉她，他想她。' },
                    { speaker: 'narrator', text: '她需要他哪怕多说一句话。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她发消息说：「你好像从来不主动联系我。」' },
                    { speaker: 'wu_ya', text: '「不是有在联系？」' },
                    { speaker: 'xia_wan', text: '「我发了你才回，你从来不主动发。」' },
                    { speaker: 'narrator', text: '他沉默了很久。' },
                    { speaker: 'wu_ya', text: '「不擅长。」' },
                    { speaker: 'narrator', text: '两个字。' },
                    { speaker: 'narrator', text: '夏晚盯着那两个字。' },
                    { speaker: 'narrator', text: '"不擅长"。' },
                    { speaker: 'narrator', text: '她知道他说的是真的。' },
                    { speaker: 'narrator', text: '但就是觉得……这个理由说了等于没说。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她没有再说什么。' },
                    { speaker: 'narrator', text: '他也没有。' },
                    { speaker: 'narrator', text: '就这样不了了之了。' }
                ],
                choices: [
                    { text: '（主动回来找他）', next: 'xw_5_lover_wuya_4b', affinity: { wu_ya: 15 }, repair: 12 },
                    { text: '（再等等）', next: 'xw_5_lover_wuya_4b', affinity: { wu_ya: 0 }, repair: 0 }
                ]
            },
            {
                id: 'xw_5_lover_wuya_4b',
                title: '各自的沉默',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '那次之后。' },
                    { speaker: 'narrator', text: '他们还是每天联系。' },
                    { speaker: 'narrator', text: '早安、晚安、吃了没。' },
                    { speaker: 'narrator', text: '但夏晚觉得，这些话越来越像打卡。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有一天，她发了一条消息。' },
                    { speaker: 'xia_wan', text: '「我今天在学校看到一个很像你的人。」' },
                    { speaker: 'narrator', text: '他没回。' },
                    { speaker: 'narrator', text: '过了一个小时，他回了一个字。' },
                    { speaker: 'wu_ya', text: '「哦。」' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚盯着那个「哦」。' },
                    { speaker: 'narrator', text: '忽然就不想说话了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她知道他就是这样的人。' },
                    { speaker: 'narrator', text: '但心里还是会有点失落。' },
                    { speaker: 'narrator', text: '这种失落又说不出口。' },
                    { speaker: 'narrator', text: '说出来就像在撒娇。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她开始怀疑自己。' },
                    { speaker: 'narrator', text: '是不是要求太多了？' },
                    { speaker: 'narrator', text: '他明明有在联系。' },
                    { speaker: 'narrator', text: '是她自己太贪心了吗？' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_wuya_4c', affinity: { wu_ya: 0 }, repair: 0 }
                ]
            },
            {
                id: 'xw_5_lover_wuya_4c',
                title: '一通电话',
                background: 'bg-room',
                mood: 'tense',
                dialogues: [
                    { speaker: 'narrator', text: '那周周五晚上。' },
                    { speaker: 'narrator', text: '夏晚躺在床上，翻来覆去睡不着。' },
                    { speaker: 'narrator', text: '她拿起手机，看了看和吴琊的聊天记录。' },
                    { speaker: 'narrator', text: '最多的就是「嗯」「哦」「好」。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她忽然很想哭。' },
                    { speaker: 'narrator', text: '不是因为他不爱她。' },
                    { speaker: 'narrator', text: '是因为她不知道该怎么跟一个不说爱的人相处。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她打了他的电话。' },
                    { speaker: 'narrator', text: '响了三声，他接了。' },
                    { speaker: 'wu_ya', text: '嗯？' },
                    { speaker: 'xia_wan', text: '你在干嘛？' },
                    { speaker: 'wu_ya', text: '在店里。' },
                    { speaker: 'xia_wan', text: '……忙吗？' },
                    { speaker: 'wu_ya', text: '还好。' },
                    { speaker: 'narrator', text: '电话两端都沉默了。' },
                    { speaker: 'narrator', text: '夏晚想找话说，但不知道说什么。' },
                    { speaker: 'xia_wan', text: '那个……你今天怎么样？' },
                    { speaker: 'wu_ya', text: '还行。' },
                    { speaker: 'narrator', text: '又是两个字。' },
                    { speaker: 'narrator', text: '夏晚忽然就说不出话了。' },
                    { speaker: 'xia_wan', text: '那……我先挂了。' },
                    { speaker: 'wu_ya', text: '嗯。' },
                    { speaker: 'narrator', text: '电话挂了。' },
                    { speaker: 'narrator', text: '夏晚躺在床上，盯着天花板。' },
                    { speaker: 'narrator', text: '她不知道问题出在哪里。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_lover_wuya_4d', affinity: { wu_ya: 0 }, repair: 3 }
                ]
            },
            {
                id: 'xw_5_lover_wuya_4d',
                title: '他也一样',
                background: 'bg-phone',
                mood: 'reflective',
                dialogues: [
                    { speaker: 'narrator', text: '第二天。' },
                    { speaker: 'narrator', text: '夏晚收到了吴琊的消息。' },
                    { speaker: 'wu_ya', text: '「昨天那通电话。」' },
                    { speaker: 'wu_ya', text: '「我不知道该说什么。」' },
                    { speaker: 'wu_ya', text: '「你问我在干嘛，我说在店里。」' },
                    { speaker: 'wu_ya', text: '「其实我在想昨天你问我的那句。」' },
                    { speaker: 'wu_ya', text: '「你今天怎么样。」' },
                    { speaker: 'wu_ya', text: '「我想说我想你了。」' },
                    { speaker: 'wu_ya', text: '「但我说不出口。」' },
                    { speaker: 'narrator', text: '夏晚盯着那些消息。' },
                    { speaker: 'narrator', text: '他的手指在屏幕上打了很久。' },
                    { speaker: 'narrator', text: '最后发出来的就是这些。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她忽然就明白了。' },
                    { speaker: 'narrator', text: '他不是不在乎。' },
                    { speaker: 'narrator', text: '他是在乎了，不知道怎么说。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起橙子说过的话。' },
                    { speaker: 'narrator', text: '「吴琊那个人，话不多，但什么都记着。」' },
                    { speaker: 'narrator', text: '「你说过一次喜欢吃草莓。」' },
                    { speaker: 'narrator', text: '「他第二年夏天就给你买了。」' },
                    { speaker: 'narrator', text: '「但他从来没说过。」' }
                ],
                choices: [
                    { text: '「下次，想说就说。」', next: 'xw_5_lover_wuya_5', affinity: { wu_ya: 15 }, repair: 15 }
                ]
            },
            {
                id: 'xw_5_lover_wuya_5',
                title: '裂缝之后',
                background: 'bg-phone',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '那通电话之后，吴琊变了。' },
                    { speaker: 'narrator', text: '不是那种翻天覆地的变化。' },
                    { speaker: 'narrator', text: '只是……每天都会主动发消息了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '以前他只会说"早"、"晚安"。' },
                    { speaker: 'narrator', text: '现在会多说一句。' },
                    { speaker: 'narrator', text: '「今天店里来了个很搞笑的客人。」' },
                    { speaker: 'narrator', text: '「橙子笑了一整天。」' },
                    { speaker: 'narrator', text: '「你觉得好笑吗？」' },
                    { speaker: 'narrator', text: '夏晚看着那些消息。' },
                    { speaker: 'narrator', text: '他以前从来不会分享这些。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有一天，她问他。' },
                    { speaker: 'xia_wan', text: '「吴琊，你怎么突然话变多了？」' },
                    { speaker: 'narrator', text: '他过了很久才回。' },
                    { speaker: 'wu_ya', text: '「我在练。」' },
                    { speaker: 'xia_wan', text: '「练什么？」' },
                    { speaker: 'wu_ya', text: '「练说话。」' },
                    { speaker: 'wu_ya', text: '「你让我想说就说。」' },
                    { speaker: 'wu_ya', text: '「我在学。」' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕。' },
                    { speaker: 'narrator', text: '他真的在学。' }
                ],
                choices: [
                    { text: '「谢谢你愿意为我改变。」', next: 'xw_5_lover_wuya_5a', affinity: { wu_ya: 10 }, repair: 12 },
                    { text: '「继续加油。」', next: 'xw_5_lover_wuya_5a', affinity: { wu_ya: 5 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_wuya_5a',
                title: '五一',
                background: 'bg-street',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '五一小长假。' },
                    { speaker: 'narrator', text: '吴琊来深圳找她。' },
                    { speaker: 'narrator', text: '夏晚去接他。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他站在高铁站出口。' },
                    { speaker: 'narrator', text: '还是那个样子。' },
                    { speaker: 'narrator', text: '有点木讷，有点不善言辞。' },
                    { speaker: 'narrator', text: '但看见她的时候，眼睛亮了一下。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他走过来。' },
                    { speaker: 'narrator', text: '没有说话。' },
                    { speaker: 'narrator', text: '只是伸手，接过她的包。' },
                    { speaker: 'narrator', text: '然后牵住她的手。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '他以前不会这样的。' },
                    { speaker: 'narrator', text: '以前他总是走在她旁边，保持一点距离。' },
                    { speaker: 'narrator', text: '现在他主动牵她的手了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他什么都没说。' },
                    { speaker: 'narrator', text: '但夏晚觉得，这样已经够了。' }
                ],
                choices: [
                    { text: '（回握他的手）', next: 'xw_5_lover_wuya_6', affinity: { wu_ya: 10 }, repair: 10 },
                    { text: '「走吧。」', next: 'xw_5_lover_wuya_6', affinity: { wu_ya: 5 }, repair: 5 }
                ]
            },
            {
                id: 'xw_5_lover_wuya_6',
                title: '海边',
                background: 'bg-street',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'narrator', text: '那几天，他们去了很多地方。' },
                    { speaker: 'narrator', text: '他不太会说话。' },
                    { speaker: 'narrator', text: '但他会做。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '走累了，他会默默递水。' },
                    { speaker: 'narrator', text: '太阳大了，他会默默撑伞。' },
                    { speaker: 'narrator', text: '她喜欢的店，他会记住。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '最后一天晚上。' },
                    { speaker: 'narrator', text: '他们坐在海边的长椅上。' },
                    { speaker: 'narrator', text: '海风吹过来。' },
                    { speaker: 'narrator', text: '很舒服。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'wu_ya', text: '「夏晚。」' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'wu_ya', text: '「我想说个事。」' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'wu_ya', text: '「可能说出来不太好听。」' },
                    { speaker: 'xia_wan', text: '你说。' },
                    { speaker: 'wu_ya', text: '「毕业之后……」' },
                    { speaker: 'wu_ya', text: '他停顿了很久。' },
                    { speaker: 'narrator', text: '夏晚等着。' },
                    { speaker: 'narrator', text: '她知道他在努力。' }
                ],
                choices: [
                    { text: '「不急，你慢慢说。」', next: 'xw_5_lover_wuya_7', affinity: { wu_ya: 15 }, repair: 15 },
                    { text: '（安静等他继续）', next: 'xw_5_lover_wuya_7', affinity: { wu_ya: 10 }, repair: 10 }
                ]
            },
            {
                id: 'xw_5_lover_wuya_7',
                title: '决定',
                background: 'bg-street',
                mood: 'romantic',
                dialogues: [
                    { speaker: 'wu_ya', text: '「我想……去深圳。」' },
                    { speaker: 'narrator', text: '他说完就低下头。' },
                    { speaker: 'narrator', text: '好像用尽了所有勇气。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「为什么？」' },
                    { speaker: 'wu_ya', text: '「深圳有剧本杀店。」' },
                    { speaker: 'wu_ya', text: '「我可以继续做这行。」' },
                    { speaker: 'wu_ya', text: '「而且……」' },
                    { speaker: 'narrator', text: '他又停顿了很久。' },
                    { speaker: 'narrator', text: '久到夏晚以为他不会说了。' },
                    { speaker: 'wu_ya', text: '「离你近。」' },
                    { speaker: 'narrator', text: '三个字。' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他正看着海面。' },
                    { speaker: 'narrator', text: '耳根有点红。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她忽然觉得，他真的变了。' },
                    { speaker: 'narrator', text: '以前那个说一句话要憋半天的人。' },
                    { speaker: 'narrator', text: '现在会说"离你近"了。' }
                ],
                choices: [
                    { text: '「那……你来吧。」', next: 'xw_5_lover_wuya_8', affinity: { wu_ya: 15 }, repair: 12 },
                    { text: '「你想清楚了吗？」', next: 'xw_5_lover_wuya_8', affinity: { wu_ya: 10 }, repair: 8 }
                ]
            },
            {
                id: 'xw_5_lover_wuya_8',
                title: '希望',
                background: 'bg-street',
                mood: 'warm',
                dialogues: [
                    { speaker: 'wu_ya', text: '「我想清楚了。」' },
                    { speaker: 'narrator', text: '他转过头，看着她。' },
                    { speaker: 'wu_ya', text: '「我知道我不擅长说话。」' },
                    { speaker: 'wu_ya', text: '「但我会努力学的。」' },
                    { speaker: 'wu_ya', text: '「学着用说的方式，让你知道我在乎你。」' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他很少说这么多话。' },
                    { speaker: 'narrator', text: '更少说这么认真的话。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她伸出手，握住了他的手。' },
                    { speaker: 'narrator', text: '他的手心有点热。' },
                    { speaker: 'wu_ya', text: '「夏晚。」' },
                    { speaker: 'xia_wan', text: '嗯。' },
                    { speaker: 'wu_ya', text: '「谢谢你。」' },
                    { speaker: 'xia_wan', text: '「谢我什么？」' },
                    { speaker: 'wu_ya', text: '「谢谢你愿意等我。」' },
                    { speaker: 'wu_ya', text: '「等我慢慢学会说话。」' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他正看着远处的海面。' },
                    { speaker: 'narrator', text: '眼睛里有什么东西在闪。' },
                    { speaker: 'narrator', text: '以前没有的那种光。' }
                ],
                choices: [
                    { text: '「我会一直等的。」', next: 'xw_5_lover_wuya_9', affinity: { wu_ya: 15 } },
                    { text: '（靠在他肩上）', next: 'xw_5_lover_wuya_9', affinity: { wu_ya: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_wuya_9',
                title: '毕业',
                background: 'bg-street',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '一年后。' },
                    { speaker: 'narrator', text: '毕业典礼那天。' },
                    { speaker: 'narrator', text: '夏晚站在学校门口。' },
                    { speaker: 'narrator', text: '吴琊站在那里等她。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他已经来深圳三个月了。' },
                    { speaker: 'narrator', text: '在一家剧本杀店做DM。' },
                    { speaker: 'narrator', text: '状态比以前好了很多。' },
                    { speaker: 'narrator', text: '他还是不太会说话。' },
                    { speaker: 'narrator', text: '但至少愿意说了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'wu_ya', text: '「毕业快乐。」' },
                    { speaker: 'narrator', text: '他递过来一束花。' },
                    { speaker: 'narrator', text: '是满天星。' },
                    { speaker: 'narrator', text: '夏晚最喜欢的。' },
                    { speaker: 'xia_wan', text: '「你怎么知道我喜欢满天星？」' },
                    { speaker: 'wu_ya', text: '「你以前说过。」' },
                    { speaker: 'narrator', text: '他记得。' },
                    { speaker: 'narrator', text: '夏晚接过花，忽然觉得鼻子有点酸。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他走过来，轻轻揽住她的肩膀。' },
                    { speaker: 'wu_ya', text: '「走吧。」' },
                    { speaker: 'wu_ya', text: '「带你吃饭。」' },
                    { speaker: 'narrator', text: '夏晚靠在他身上。' },
                    { speaker: 'narrator', text: '她想起一年前。' },
                    { speaker: 'narrator', text: '他还在店里沉默着。' },
                    { speaker: 'narrator', text: '她还在担心这段感情能不能走下去。' },
                    { speaker: 'narrator', text: '现在，一切都变了。' }
                ],
                choices: [
                    { text: '「你想吃什么？」', next: 'xw_5_lover_wuya_10', affinity: { wu_ya: 10 } },
                    { text: '「你最近工作怎么样？」', next: 'xw_5_lover_wuya_10', affinity: { wu_ya: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_wuya_10',
                title: '新生活',
                background: 'bg-room',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '半年后。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业。' },
                    { speaker: 'narrator', text: '夏晚是副店长。' },
                    { speaker: 'narrator', text: '吴琊负责后勤和采购。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '大家又聚在一起了。' },
                    { speaker: 'narrator', text: '橙子、170、方圆、谨言。' },
                    { speaker: 'narrator', text: '一个都不少。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '橙子举着酒杯。' },
                    { speaker: 'chengzi', text: '「来来来，敬新店！」' },
                    { speaker: 'ganzhiyu', text: '「敬新店！」' },
                    { speaker: 'long_xinheng', text: '「敬新店！」' },
                    { speaker: 'wu_ya', text: '「……敬新店。」' },
                    { speaker: 'narrator', text: '他说完就低下头。' },
                    { speaker: 'narrator', text: '橙子笑着拍他肩膀。' },
                    { speaker: 'chengzi', text: '「吴琊你还是这么闷。」' },
                    { speaker: 'wu_ya', text: '「……」' },
                    { speaker: 'narrator', text: '他没反驳。' },
                    { speaker: 'narrator', text: '但夏晚注意到，他的手放在桌下。' },
                    { speaker: 'narrator', text: '一直牵着她的手。' }
                ],
                choices: [
                    { text: '（握紧他的手）', next: 'xw_5_lover_wuya_11', affinity: { wu_ya: 10 } },
                    { text: '「吴琊。」', next: 'xw_5_lover_wuya_11', affinity: { wu_ya: 5 } }
                ]
            },
            {
                id: 'xw_5_lover_wuya_11',
                title: '不说',
                background: 'bg-room',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '那天打烊之后。' },
                    { speaker: 'narrator', text: '夏晚和吴琊走在回家的路上。' },
                    { speaker: 'narrator', text: '深圳的夜晚很安静。' },
                    { speaker: 'narrator', text: '路灯把两个人的影子拉得很长。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他们牵着手。' },
                    { speaker: 'narrator', text: '谁都没有说话。' },
                    { speaker: 'narrator', text: '但夏晚觉得很安心。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '走到一半，他忽然开口。' },
                    { speaker: 'wu_ya', text: '「夏晚。」' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'wu_ya', text: '「我不会说话。」' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'wu_ya', text: '「但我会一直在。」' },
                    { speaker: 'narrator', text: '夏晚看着他。' },
                    { speaker: 'narrator', text: '他正看着前方的路。' },
                    { speaker: 'narrator', text: '表情很平静。' },
                    { speaker: 'narrator', text: '但夏晚觉得，这样就够了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'xia_wan', text: '「我知道。」' },
                    { speaker: 'xia_wan', text: '「你在就够了。」' },
                    { speaker: 'narrator', text: '他没说话。' },
                    { speaker: 'narrator', text: '只是握紧了她的手。' }
                ],
                choices: [
                    { text: '（靠在他怀里）', next: 'xw_5_lover_wuya_12', affinity: { wu_ya: 15 } },
                    { text: '「吴琊，谢谢你。」', next: 'xw_5_lover_wuya_12', affinity: { wu_ya: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_wuya_12',
                title: '未来',
                background: 'bg-room',
                mood: 'warm',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上。' },
                    { speaker: 'narrator', text: '夏晚躺在床上。' },
                    { speaker: 'narrator', text: '吴琊已经回去了。' },
                    { speaker: 'narrator', text: '他们住得很近。' },
                    { speaker: 'narrator', text: '走路五分钟就到。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起一年前。' },
                    { speaker: 'narrator', text: '她第一次见吴琊。' },
                    { speaker: 'narrator', text: '他站在吧台后面，沉默着擦杯子。' },
                    { speaker: 'narrator', text: '橙子问他话，他就回一两个字。' },
                    { speaker: 'narrator', text: '那时候她觉得，这个人好闷。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但现在她知道了。' },
                    { speaker: 'narrator', text: '他不是不在乎。' },
                    { speaker: 'narrator', text: '他只是不知道怎么说。' },
                    { speaker: 'narrator', text: '他做的每一件事，都在说。' },
                    { speaker: 'narrator', text: '只是用他自己的方式。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '手机震了。' },
                    { speaker: 'wu_ya', text: '「睡了吗？」' },
                    { speaker: 'xia_wan', text: '「还没。」' },
                    { speaker: 'wu_ya', text: '「我也睡不着。」' },
                    { speaker: 'wu_ya', text: '「在想你。」' },
                    { speaker: 'narrator', text: '夏晚盯着屏幕。' },
                    { speaker: 'narrator', text: '他说"在想你"了。' },
                    { speaker: 'narrator', text: '三个字。以前他想都不敢想的三个字。' }
                ],
                choices: [
                    { text: '「我也是。」', next: 'xw_5_lover_wuya_13', affinity: { wu_ya: 15 } },
                    { text: '「明天见。」', next: 'xw_5_lover_wuya_13', affinity: { wu_ya: 10 } }
                ]
            },
            {
                id: 'xw_5_lover_wuya_13',
                title: '两年后',
                background: 'bg-street',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '两年后。' },
                    { speaker: 'narrator', text: '「墨染」已经是深圳最好的剧本杀店之一了。' },
                    { speaker: 'narrator', text: '夏晚是店长。' },
                    { speaker: 'narrator', text: '吴琊是副店长。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天打烊之后。' },
                    { speaker: 'narrator', text: '大家陆续走了。' },
                    { speaker: 'narrator', text: '只剩他们两个。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '吴琊从口袋里掏出一个小盒子。' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'wu_ya', text: '「给你。」' },
                    { speaker: 'narrator', text: '他打开盒子。' },
                    { speaker: 'narrator', text: '是一枚戒指。' },
                    { speaker: 'narrator', text: '很简单的款式。' },
                    { speaker: 'narrator', text: '夏晚一眼就喜欢上了。' },
                    { speaker: 'wu_ya', text: '「我想了很久。」' },
                    { speaker: 'wu_ya', text: '「不知道怎么开口。」' },
                    { speaker: 'wu_ya', text: '「但还是要说。」' },
                    { speaker: 'narrator', text: '他顿了顿。' },
                    { speaker: 'wu_ya', text: '「夏晚。」' },
                    { speaker: 'wu_ya', text: '「你愿意嫁给我吗？」' }
                ],
                choices: [
                    { text: '「我愿意。」', next: 'xw_5_lover_wuya_14', affinity: { wu_ya: 20 } },
                    { text: '（哭出来）', next: 'xw_5_lover_wuya_14', affinity: { wu_ya: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_wuya_14',
                title: '不说，但在',
                background: 'bg-room',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚的眼泪一下子涌了出来。' },
                    { speaker: 'narrator', text: '她用力点头。' },
                    { speaker: 'xia_wan', text: '「我愿意。」' },
                    { speaker: 'narrator', text: '吴琊站起来，把戒指套在她手上。' },
                    { speaker: 'narrator', text: '动作有点生涩。' },
                    { speaker: 'narrator', text: '但很认真。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '然后他抱住她。' },
                    { speaker: 'narrator', text: '抱得很紧。' },
                    { speaker: 'narrator', text: '夏晚埋在他怀里。' },
                    { speaker: 'narrator', text: '他身上有熟悉的味道。' },
                    { speaker: 'narrator', text: '淡淡的，很安心。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '他很少说话。' },
                    { speaker: 'narrator', text: '但这一刻，夏晚觉得。' },
                    { speaker: 'narrator', text: '他的拥抱已经说了所有的话。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'wu_ya', text: '「夏晚。」' },
                    { speaker: 'xia_wan', text: '嗯？' },
                    { speaker: 'wu_ya', text: '「谢谢你。」' },
                    { speaker: 'xia_wan', text: '「又谢我。」' },
                    { speaker: 'wu_ya', text: '「谢谢你愿意等我。」' },
                    { speaker: 'wu_ya', text: '「等我慢慢学会开口。」' },
                    { speaker: 'wu_ya', text: '「等我有勇气求婚。」' }
                ],
                choices: [
                    { text: '「我愿意等。」', next: 'xw_5_lover_wuya_15', affinity: { wu_ya: 15 } }
                ]
            },
            {
                id: 'xw_5_lover_wuya_15',
                title: '不说，但在',
                background: 'bg-room',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '那天晚上。' },
                    { speaker: 'narrator', text: '夏晚和吴琊坐在店门口的长椅上。' },
                    { speaker: 'narrator', text: '看星星。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '深圳的夜空看不到多少星星。' },
                    { speaker: 'narrator', text: '但她想起第一次见他的时候。' },
                    { speaker: 'narrator', text: '他站在吧台后面。' },
                    { speaker: 'narrator', text: '一句话都不说。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那时候她觉得。' },
                    { speaker: 'narrator', text: '这个人好闷。' },
                    { speaker: 'narrator', text: '现在她知道了。' },
                    { speaker: 'narrator', text: '他不是不在乎。' },
                    { speaker: 'narrator', text: '他只是不说。' },
                    { speaker: 'narrator', text: '但他做的每一件事，都在说。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'wu_ya', text: '「在想什么？」' },
                    { speaker: 'xia_wan', text: '「在想……你第一次见我的时候。」' },
                    { speaker: 'wu_ya', text: '「那时候我很闷吧。」' },
                    { speaker: 'xia_wan', text: '「嗯。很闷。」' },
                    { speaker: 'wu_ya', text: '「……」' },
                    { speaker: 'xia_wan', text: '「但我喜欢。」' },
                    { speaker: 'narrator', text: '他转过头看她。' },
                    { speaker: 'wu_ya', text: '「为什么？」' },
                    { speaker: 'xia_wan', text: '「因为你虽然不说。」' },
                    { speaker: 'xia_wan', text: '「但你一直在。」' },
                    { speaker: 'narrator', text: '他没说话。' },
                    { speaker: 'narrator', text: '只是伸手，揽住了她的肩膀。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天的星星很少。' },
                    { speaker: 'narrator', text: '但夏晚觉得。' },
                    { speaker: 'narrator', text: '她的星星，已经在身边了。' }
                ],
                choices: [
                    { text: '（靠在他怀里）', next: 'xw_5_lover_wuya_end', affinity: { wu_ya: 15 } }
                ]
            },

            // 【恋人线·吴琊】甜蜜和好结局（repairScore >= 15）
            {
                id: 'xw_5_lover_wuya_end_sweet',
                title: '不说，但在',
                background: 'bg-room',
                mood: 'happy',
                dialogues: [
                    { speaker: 'narrator', text: '学期末。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业。' },
                    { speaker: 'narrator', text: '夏晚是店长。' },
                    { speaker: 'narrator', text: '吴琊是副店长。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '大家又聚在一起了。' },
                    { speaker: 'narrator', text: '橙子、170、方圆、谨言。' },
                    { speaker: 'narrator', text: '一个都不少。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '橙子举着酒杯。' },
                    { speaker: 'chengzi', text: '「来来来，敬新店！」' },
                    { speaker: 'ganzhiyu', text: '「敬新店！」' },
                    { speaker: 'long_xinheng', text: '「敬新店！」' },
                    { speaker: 'wu_ya', text: '「……敬新店。」' },
                    { speaker: 'narrator', text: '他说完就低下头。' },
                    { speaker: 'narrator', text: '橙子笑着拍他肩膀。' },
                    { speaker: 'chengzi', text: '「吴琊你还是这么闷。」' },
                    { speaker: 'wu_ya', text: '「……」' },
                    { speaker: 'narrator', text: '他没反驳。' },
                    { speaker: 'narrator', text: '但夏晚注意到，他的手放在桌下。' },
                    { speaker: 'narrator', text: '一直牵着她的手。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起第一次见他的时候。' },
                    { speaker: 'narrator', text: '他站在吧台后面，沉默着擦杯子。' },
                    { speaker: 'narrator', text: '那时候她觉得，这个人好闷。' },
                    { speaker: 'narrator', text: '现在她知道了。' },
                    { speaker: 'narrator', text: '他不是不在乎。' },
                    { speaker: 'narrator', text: '他只是不知道怎么说。' },
                    { speaker: 'narrator', text: '他做的每一件事，都在说。' },
                    { speaker: 'narrator', text: '只是用他自己的方式。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【甜蜜和好】' },
                    { speaker: 'narrator', text: '「不说，但在」— 完 —' }
                ],
                choices: [
                    { text: '（重新开始）', next: 'start', affinity: {} }
                ]
            },

            // 【恋人线·吴琊】普通和好结局（repairScore 5-14）
            {
                id: 'xw_5_lover_wuya_end_normal',
                title: '不说，但在',
                background: 'bg-room',
                mood: 'peaceful',
                dialogues: [
                    { speaker: 'narrator', text: '学期末。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业。' },
                    { speaker: 'narrator', text: '夏晚是店长。' },
                    { speaker: 'narrator', text: '吴琊是副店长。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '大家笑着碰杯。' },
                    { speaker: 'narrator', text: '橙子、170、方圆、谨言，一个都不少。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '橙子举着酒杯。' },
                    { speaker: 'chengzi', text: '「来来来，敬新店！」' },
                    { speaker: 'wu_ya', text: '「……敬新店。」' },
                    { speaker: 'narrator', text: '他说完就低下头。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚坐在他旁边。' },
                    { speaker: 'narrator', text: '他还是会时不时发消息。' },
                    { speaker: 'narrator', text: '比从前多了一点。' },
                    { speaker: 'narrator', text: '但本质上还是那个样子。' },
                    { speaker: 'narrator', text: '话不多，但什么都在做。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起第一次见他的时候。' },
                    { speaker: 'narrator', text: '那时候她觉得，这个人好闷。' },
                    { speaker: 'narrator', text: '现在她知道了。' },
                    { speaker: 'narrator', text: '他就是这样的人。' },
                    { speaker: 'narrator', text: '不会变，也变不了。' },
                    { speaker: 'narrator', text: '但她愿意接受。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【普通和好】' },
                    { speaker: 'narrator', text: '「不说，但在」— 完 —' }
                ],
                choices: [
                    { text: '（重新开始）', next: 'start', affinity: {} }
                ]
            },

            // 【恋人线·吴琊】冷淡疏远结局（repairScore < 5）
            {
                id: 'xw_5_lover_wuya_end_cold',
                title: '不说，但在',
                background: 'bg-room',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '学期末。' },
                    { speaker: 'narrator', text: '「墨染」的新店开业。' },
                    { speaker: 'narrator', text: '夏晚坐在角落里，看着大家忙碌。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天开业聚会。' },
                    { speaker: 'narrator', text: '橙子笑着和方圆碰杯。' },
                    { speaker: 'narrator', text: '170在旁边聊天。' },
                    { speaker: 'narrator', text: '谨言在另一边笑。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚看着这一切。' },
                    { speaker: 'narrator', text: '吴琊坐在她旁边。' },
                    { speaker: 'narrator', text: '他在玩手机。' },
                    { speaker: 'narrator', text: '她不知道他在看什么。' },
                    { speaker: 'narrator', text: '也没问。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起第一次见他的时候。' },
                    { speaker: 'narrator', text: '那时候她觉得，这个人好闷。' },
                    { speaker: 'narrator', text: '现在呢？' },
                    { speaker: 'narrator', text: '现在他还是会沉默。' },
                    { speaker: 'narrator', text: '还是会什么都不说。' },
                    { speaker: 'narrator', text: '好像什么都没变。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想，可能一开始她就错了。' },
                    { speaker: 'narrator', text: '不该以为自己能改变他。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '【冷淡疏远】' },
                    { speaker: 'narrator', text: '「不说，但在」— 完 —' }
                ],
                choices: [
                    { text: '（重新开始）', next: 'start', affinity: {} }
                ]
            },

            // ============================================================
            // 【单身线】xw_5_single_*
            // 章节标题：遥遥
            // 主题：微妙变化 + 前任 + 看着那个人渐行渐远 + 默默离开
            // ============================================================
            {
                id: 'xw_5_single_1',
                title: '微妙的变化',
                background: 'bg-shop',
                mood: 'melancholic',
                dialogues: [
                    { speaker: 'narrator', text: '十一月。' },
                    { speaker: 'narrator', text: '告白的事没有发生。' },
                    { speaker: 'narrator', text: '夏晚和那个人，还是原来的关系。' },
                    { speaker: 'narrator', text: '或者说，是她以为的原来。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她说不清是从什么时候开始的。' },
                    { speaker: 'narrator', text: '也许是他接她电话的时候少了一点。' },
                    { speaker: 'narrator', text: '也许是他回消息的速度慢了一点。' },
                    { speaker: 'narrator', text: '也许只是他路过她身边的时候，没有像从前那样多看她一眼。' },
                    { speaker: 'narrator', text: '都是很小的事。' },
                    { speaker: 'narrator', text: '小到她开口说会显得很矫情。' },
                    { speaker: 'narrator', text: '但小到一起，就成了一件很大的事。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚在心里告诉自己：你想太多了。' },
                    { speaker: 'narrator', text: '但她知道，自己没有想太多。' },
                    { speaker: 'narrator', text: '她只是很敏感。' },
                    { speaker: 'narrator', text: '敏感的人，最先察觉到那些细小的变化。' }
                ],
                choices: [
                    { text: '（继续观察）', next: 'xw_5_single_2', affinity: {} },
                    { text: '（试着转移注意力）', next: 'xw_5_single_2', affinity: {} }
                ]
            },
            {
                id: 'xw_5_single_2',
                title: '搬店',
                background: 'bg-shop',
                mood: 'melancholic',
                dialogues: [
                    { speaker: 'narrator', text: '搬店的那周，大家都很忙。' },
                    { speaker: 'narrator', text: '夏晚忙着整理剧本，也没有时间想太多。' },
                    { speaker: 'narrator', text: '偶尔会看到那个人在不远处干活。' },
                    { speaker: 'narrator', text: '他和橙子说话，和170说话，和谨言说话。' },
                    { speaker: 'narrator', text: '他笑的样子，和她认识他的第一天一样。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚低下头。' },
                    { speaker: 'narrator', text: '继续整理剧本。' },
                    { speaker: 'narrator', text: '橙子走过来，看了她一眼。' },
                    { speaker: 'chengzi', text: '夏晚，你没事吧？' },
                    { speaker: 'xia_wan', text: '没事，有点累。' },
                    { speaker: 'narrator', text: '橙子欲言又止。' },
                    { speaker: 'narrator', text: '最终还是没有说什么，拍了拍她的肩膀。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有些事情，朋友知道，但没有办法插嘴。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_single_3', affinity: {} }
                ]
            },
            {
                id: 'xw_5_single_3',
                title: '回老家',
                background: 'bg-home',
                mood: 'melancholic',
                dialogues: [
                    { speaker: 'narrator', text: '年底。' },
                    { speaker: 'narrator', text: '夏晚回深圳了。' },
                    { speaker: 'narrator', text: '坐在回家的高铁上，看着窗外的风景一点一点后退。' },
                    { speaker: 'narrator', text: '手机里有他之前发过的消息。' },
                    { speaker: 'narrator', text: '她不知道翻了多少遍。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '回家第二天，前任发来消息。' },
                    { speaker: 'narrator', text: '说新年快到了，问她在哪，问能不能见一面。' },
                    { speaker: 'xia_wan', text: '（心里）不想见。' },
                    { speaker: 'narrator', text: '她没有回。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '前任又发来一条：「就叙叙旧，没别的意思。」' },
                    { speaker: 'narrator', text: '夏晚放下手机，盯着天花板。' },
                    { speaker: 'narrator', text: '她不想见。' },
                    { speaker: 'narrator', text: '不是因为她放不下。' },
                    { speaker: 'narrator', text: '是因为她放下了，然后把那份心思放在了另一个人身上。' },
                    { speaker: 'narrator', text: '而那个人，好像在慢慢走远。' }
                ],
                choices: [
                    { text: '（拒绝前任，不见）', next: 'xw_5_single_4', affinity: {} },
                    { text: '（见一面，就叙叙旧）', next: 'xw_5_single_4b', affinity: {} }
                ]
            },
            {
                id: 'xw_5_single_4',
                title: '拒绝',
                background: 'bg-phone',
                mood: 'melancholic',
                dialogues: [
                    { speaker: 'xia_wan', text: '「不了，我最近挺忙的。」' },
                    { speaker: 'narrator', text: '其实她不忙。' },
                    { speaker: 'narrator', text: '放假了，每天就是发呆，刷手机，发呆。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '前任没有再说什么。' },
                    { speaker: 'narrator', text: '夏晚把手机放下，继续盯着天花板。' },
                    { speaker: 'narrator', text: '她翻出和那个人的聊天记录，从头到尾看了一遍。' },
                    { speaker: 'narrator', text: '从第一条消息到上周的最后那条。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她看见他发来「最近挺忙的」时，她回了「嗯，那先忙吧」。' },
                    { speaker: 'narrator', text: '她看见那条「嗯」之后就没有然后了的消息。' },
                    { speaker: 'narrator', text: '她一条一条地看。' },
                    { speaker: 'narrator', text: '像是在找什么。' },
                    { speaker: 'narrator', text: '也不知道在找什么。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_single_5', affinity: {} }
                ]
            },
            {
                id: 'xw_5_single_4b',
                title: '见一面',
                background: 'bg-street',
                mood: 'melancholic',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚和前任在街边见了一面。' },
                    { speaker: 'narrator', text: '他说了很多，问她过得怎么样，说最近的状态，说他想她。' },
                    { speaker: 'narrator', text: '夏晚就坐在那里，听着，嗯嗯地应着。' },
                    { speaker: 'narrator', text: '但她的心思在别处。' },
                    { speaker: 'narrator', text: '她想着，不知道那个人今天在做什么。' },
                    { speaker: 'narrator', text: '有没有人陪他。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '前任说：「你好像不在这里。」' },
                    { speaker: 'xia_wan', text: '有点走神，不好意思。' },
                    { speaker: 'narrator', text: '他看着她，叹了口气。' },
                    { speaker: 'narrator', text: '「是心里有人了吧。」' },
                    { speaker: 'narrator', text: '夏晚没有回答。' },
                    { speaker: 'narrator', text: '就是沉默着。' },
                    { speaker: 'narrator', text: '他说：「那我懂了。」' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '回家路上，夏晚一个人走着。' },
                    { speaker: 'narrator', text: '其实前任没有做错什么。' },
                    { speaker: 'narrator', text: '她只是。' },
                    { speaker: 'narrator', text: '心里装了另一个人。' },
                    { speaker: 'narrator', text: '装不下其他任何人了。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_single_5', affinity: {} }
                ]
            },
            {
                id: 'xw_5_single_5',
                title: '新年夜',
                background: 'bg-home',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '新年夜。' },
                    { speaker: 'narrator', text: '家里很热闹。' },
                    { speaker: 'narrator', text: '夏晚坐在人群里，笑着，说话，看烟花。' },
                    { speaker: 'narrator', text: '但她的手机一直放在口袋里。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '零点到了。' },
                    { speaker: 'narrator', text: '烟花在天上绽开。' },
                    { speaker: 'narrator', text: '手机震了。' },
                    { speaker: 'narrator', text: '是大家群里的新年快乐。' },
                    { speaker: 'narrator', text: '橙子，170，谨言，方圆，吴琊……' },
                    { speaker: 'narrator', text: '还有他。' },
                    { speaker: 'narrator', text: '他在群里发了一条：「新年快乐。」' },
                    { speaker: 'narrator', text: '就这样。' },
                    { speaker: 'narrator', text: '发给所有人的。' },
                    { speaker: 'narrator', text: '没有单独发给她。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚把手机放回口袋。' },
                    { speaker: 'narrator', text: '继续看烟花。' },
                    { speaker: 'narrator', text: '继续笑。' },
                    { speaker: 'narrator', text: '但眼眶有点热。' },
                    { speaker: 'narrator', text: '她没有让它落下来。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_single_6', affinity: {} }
                ]
            },
            {
                id: 'xw_5_single_6',
                title: '看到他身边的人',
                background: 'bg-shop',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '返校之后。' },
                    { speaker: 'narrator', text: '夏晚照常去店里。' },
                    { speaker: 'narrator', text: '新店开张，比以前更热闹了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '那天店里来了个新客人。' },
                    { speaker: 'narrator', text: '一个女生，很活泼，一直在找那个人说话。' },
                    { speaker: 'narrator', text: '他也在跟她说话。' },
                    { speaker: 'narrator', text: '说说笑笑的，很自然。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚坐在角落，低着头整理剧本。' },
                    { speaker: 'narrator', text: '她告诉自己：这没什么。' },
                    { speaker: 'narrator', text: '他就是这样，对谁都好，对谁都笑。' },
                    { speaker: 'narrator', text: '但她控制不了那种感觉。' },
                    { speaker: 'narrator', text: '心里有一块地方，一点一点地往下沉。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她把剧本整理好，站起来，往门口走。' },
                    { speaker: 'narrator', text: '橙子叫住她：「夏晚，还有一会儿才下班——」' },
                    { speaker: 'xia_wan', text: '我有点不舒服，先走了。' },
                    { speaker: 'narrator', text: '她推开门，走出去。' },
                    { speaker: 'narrator', text: '外面风很冷。' },
                    { speaker: 'narrator', text: '她站在店门口，深呼吸了一下。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她知道自己做不到若无其事地继续在里面坐着。' },
                    { speaker: 'narrator', text: '她太敏感了。' },
                    { speaker: 'narrator', text: '她不质问。' },
                    { speaker: 'narrator', text: '她只是……待不住了。' }
                ],
                choices: [
                    { text: '（给他发消息，问他最近怎么样）', next: 'xw_5_single_7a', affinity: {} },
                    { text: '（什么都不做，默默离开）', next: 'xw_5_single_7b', affinity: {} }
                ]
            },
            {
                id: 'xw_5_single_7a',
                title: '发出的消息',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '回家的路上，她犹豫了很久。' },
                    { speaker: 'narrator', text: '手指在屏幕上悬了半天。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '最后还是发出去了。' },
                    { speaker: 'narrator', text: '「最近怎么样？」' },
                    { speaker: 'narrator', text: '很普通的问候。' },
                    { speaker: 'narrator', text: '发完之后她就后悔了。' },
                    { speaker: 'narrator', text: '会不会太突兀？会不会打扰到他？' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她盯着屏幕等。' },
                    { speaker: 'narrator', text: '一分钟。' },
                    { speaker: 'narrator', text: '五分钟。' },
                    { speaker: 'narrator', text: '十分钟。' },
                    { speaker: 'narrator', text: '...二十三分钟。' },
                    { speaker: 'narrator', text: '他回了。' },
                    { speaker: 'narrator', text: '「挺好的，你呢？」' },
                    { speaker: 'narrator', text: '就这样。' },
                    { speaker: 'narrator', text: '很正常的回复。' },
                    { speaker: 'narrator', text: '客气，疏离，恰到好处。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚放下手机。' },
                    { speaker: 'narrator', text: '她盯着天花板，忽然很想笑。' },
                    { speaker: 'narrator', text: '原来这就是答案。' },
                    { speaker: 'narrator', text: '不用任何解释，不用任何告别。' },
                    { speaker: 'narrator', text: '就是这样，慢慢地，悄悄地，就远了。' }
                ],
                choices: [
                    { text: '（回复：我也挺好的）', next: 'xw_5_single_8', affinity: {} },
                    { text: '（不回了）', next: 'xw_5_single_8', affinity: {} }
                ]
            },
            {
                id: 'xw_5_single_7b',
                title: '沉默',
                background: 'bg-street',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '她没有发消息。' },
                    { speaker: 'narrator', text: '一个字都没有。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '回到学校，她把这件事压在心底。' },
                    { speaker: 'narrator', text: '不去想，不去看，不去问。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '可有些事情，不去想，不代表不存在。' },
                    { speaker: 'narrator', text: '每次手机响起，她都会下意识地看一眼。' },
                    { speaker: 'narrator', text: '每次都不是他。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '橙子给她发消息：「你最近怎么了？」' },
                    { speaker: 'narrator', text: '她回：「没什么。」' },
                    { speaker: 'narrator', text: '橙子发了一个表情包，没再问。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '有些事情，朋友们都看在眼里。' },
                    { speaker: 'narrator', text: '但感情的事，旁人也插不上嘴。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她继续去店里。' },
                    { speaker: 'narrator', text: '继续整理剧本，继续听他们聊天，继续笑。' },
                    { speaker: 'narrator', text: '假装什么都没变。' },
                    { speaker: 'narrator', text: '假装心里那块空洞不存在。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_single_8', affinity: {} }
                ]
            },
            {
                id: 'xw_5_single_8',
                title: '春天',
                background: 'bg-street',
                mood: 'melancholic',
                dialogues: [
                    { speaker: 'narrator', text: '春天来了。' },
                    { speaker: 'narrator', text: '南方的春天来得很早。' },
                    { speaker: 'narrator', text: '路边的树发了新芽，开了小花。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚走在路上，看着那些新生的绿。' },
                    { speaker: 'narrator', text: '她想起去年夏天刚认识他的时候。' },
                    { speaker: 'narrator', text: '那时候一切都那么新鲜。' },
                    { speaker: 'narrator', text: '他的笑，他的眼神，他说的话。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '什么时候开始变的呢？' },
                    { speaker: 'narrator', text: '她说不清。' },
                    { speaker: 'narrator', text: '也许从某个她没抓住的瞬间开始。' },
                    { speaker: 'narrator', text: '也许从她没说出口的那句话开始。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她打开手机。' },
                    { speaker: 'narrator', text: '聊天记录还停在上个月的「我也挺好的」。' },
                    { speaker: 'narrator', text: '再往上翻，是他曾经发来的那些消息。' },
                    { speaker: 'narrator', text: '那些让她心跳加速的字句。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她没有删。' },
                    { speaker: 'narrator', text: '舍不得删。' },
                    { speaker: 'narrator', text: '也许这辈子都舍不得。' }
                ],
                choices: [
                    { text: '（继续）', next: 'xw_5_single_8b', affinity: {} }
                ]
            },
            {
                id: 'xw_5_single_8b',
                title: '听说',
                background: 'bg-phone',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '四月。' },
                    { speaker: 'narrator', text: '橙子给她发消息：「你知道吗，他要走了。」' },
                    { speaker: 'narrator', text: '夏晚愣了一下。' },
                    { speaker: 'narrator', text: '「去哪？」' },
                    { speaker: 'narrator', text: '「老家吧，说是要回去发展。」' },
                    { speaker: 'narrator', text: '橙子又发：「最近店里聚餐多，你要不要来？」' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '夏晚看着屏幕，很久没有回复。' },
                    { speaker: 'narrator', text: '要走啊。' },
                    { speaker: 'narrator', text: '要离开这里了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想起第一次见到他的样子。' },
                    { speaker: 'narrator', text: '想起他笑起来眼睛弯弯的样子。' },
                    { speaker: 'narrator', text: '想起那些她以为会一直持续下去的日子。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '原来已经结束了。' },
                    { speaker: 'narrator', text: '在她还没来得及开始的时候，就结束了。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她犹豫了很久。' },
                    { speaker: 'narrator', text: '最后回橙子：「好啊，我去。」' },
                    { speaker: 'narrator', text: '这是最后一次了。' },
                    { speaker: 'narrator', text: '至少，要好好告个别吧。' }
                ],
                choices: [
                    { text: '（去聚餐）', next: 'xw_5_single_end', affinity: {} }
                ]
            },
            {
                id: 'xw_5_single_end',
                title: '遥遥',
                background: 'bg-room',
                mood: 'sad',
                dialogues: [
                    { speaker: 'narrator', text: '夏晚回到宿舍，把书包扔在床上。' },
                    { speaker: 'narrator', text: '躺下来，盯着上铺的床板。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她打开和他的聊天记录，又看了一遍。' },
                    { speaker: 'narrator', text: '从头看到尾。' },
                    { speaker: 'narrator', text: '然后关上。' },
                    { speaker: 'narrator', text: '然后又打开。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她想着，如果当时她说了呢。' },
                    { speaker: 'narrator', text: '如果她在某个夜晚，某个节点，把那句话说出口，会怎么样。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '但那都是"如果"。' },
                    { speaker: 'narrator', text: '没有"如果"。' },
                    { speaker: 'narrator', text: '那句话没有说出口。' },
                    { speaker: 'narrator', text: '就是没有说出口。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她把手机放在胸口，闭上眼睛。' },
                    { speaker: 'narrator', text: '外面的路灯还亮着。' },
                    { speaker: 'narrator', text: '宿舍里很安静。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '她还没有放下。' },
                    { speaker: 'narrator', text: '她不知道什么时候能放下。' },
                    { speaker: 'narrator', text: '也许还要很久。' },
                    { speaker: 'narrator', text: '也许一直放不下。' },
                    { speaker: 'narrator', text: '...' },
                    { speaker: 'narrator', text: '遥遥。' },
                    { speaker: 'narrator', text: '隔着山，隔着海，隔着那句没说出口的话。' },
                    { speaker: 'narrator', text: '第五章「遥遥」 完' }
                ],
                choices: [],
                next: null
            }
        ]
    }
};