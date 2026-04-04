// 墨染之夏 - 游戏引擎
class VisualNovelGame {
    constructor() {
        this.currentRoute = null;
        this.currentScene = null;
        this.currentDialogueIndex = 0;
        this.dialogueHistory = [];  // 对话历史记录（用于返回上一句）
        this.affinity = {};
        this.isTyping = false;
        this.autoMode = false;
        this.skipMode = false;
        this.textSpeed = 50;
        this.typingInterval = null;
        
        // 第一章路线选择追踪（夏晚线用）
        this.firstChapterChoice = null;  // 'mystery'（推理本）或 'emotion'（情感本）
        this.observedCharacter = null;   // 第一章观察的角色
        
        // 第四章告白系统
        this.relationship = null;        // 当前恋爱关系（null 或角色ID）
        this.chapter3EndingType = null; // 第三章结局类型（'he', 'open', 'friend', 'be'）
        this.confessionFlags = {        // 告白隐藏条件触发标记
            xiaotong: false,            // 木星隐藏条件：看到他认真工作的样子
            longxinheng: false,          // 谨言隐藏条件：看到他孤独的一面
            ganzhiyu: false,             // 方圆隐藏条件：认可他的能力
            wuya: false                  // 吴琊隐藏条件：感受到他的温柔
        };
        // 第五章修复指数系统（多条选择累积决定和好程度）
        this.repairScore = 0;          // 当前恋人线的修复指数
        
        // 初始化好感度（构造函数中不设置特殊初始值）
        this.initAffinity();
        
        // 绑定事件
        this.bindEvents();
    }

    // 初始化好感度 - 每个主角有独立的好感度系统
    initAffinity(route = null) {
        if (route === 'xia_wan') {
            // 夏晚线好感度系统
            this.affinity = {
                // 可攻略角色（男性，有爱情线）
                xiao_tong: { love: 0, friend: 0 },      // 木星
                long_xinheng: { love: 0, friend: 0 },    // 谨言
                wu_ya: { love: 0, friend: 0 },           // 吴琊
                gan_zhiyu: { love: 0, friend: 0 },        // 方圆
                // 友情角色（女性，只有友情线）
                chengzi: { friend: 0 },                  // 橙子
                su_xinyue: { friend: 0 },                 // 虹猫
                yu_haitong: { friend: 0 },                // 170
                gong_qin: { friend: 0 }                   // 龚琴
            };
        } else {
            // 周砚线好感度系统
            this.affinity = {
                // 可攻略角色（女性，有爱情线）
                chengzi: { love: 0, friend: 0 },         // 橙子
                su_xinyue: { love: 0, friend: 0 },       // 虹猫
                yu_haitong: { love: 0, friend: 0 },      // 170
                // 友情角色（男性）
                xiao_tong: { friend: 0 },                // 木星
                long_xinheng: { friend: 0 },             // 谨言
                wu_ya: { friend: 0 },                    // 吴琊
                gan_zhiyu: { friend: 0 },                // 方圆
                // 友情角色（女性，只有友情线）
                gong_qin: { friend: 0 }                  // 龚琴
            };
        }
    }

    // 绑定事件
    bindEvents() {
        // 点击对话框继续
        const dialogueBox = document.getElementById('dialogue-box');
        if (dialogueBox) {
            dialogueBox.addEventListener('click', () => this.advanceDialogue());
        }

        // 键盘事件
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                this.advanceDialogue();
            }
            if (e.code === 'Escape') {
                this.toggleMenu();
            }
        });

        // 设置滑块事件
        const textSpeedSlider = document.getElementById('text-speed');
        if (textSpeedSlider) {
            textSpeedSlider.addEventListener('input', (e) => {
                this.textSpeed = 110 - parseInt(e.target.value);
            });
        }
    }

    // 开始新游戏
    startNewGame() {
        this.showScreen('character-select');
    }

    // 选择角色
    async selectCharacter(characterId) {
        // 重置所有游戏状态
        this.currentRoute = characterId;
        this.currentScene = null;
        this.currentDialogueIndex = 0;
        
        // 重置好感度系统
        this.initAffinity(characterId);
        
        // 重置对话历史
        this.dialogueHistory = [];
        
        // 重置游戏进程追踪
        this.firstChapterChoice = null;
        this.observedCharacter = null;
        
        // 重置第四章告白系统
        this.relationship = null;
        this.chapter3EndingType = null;
        this.confessionFlags = {
            xiaotong: false,
            longxinheng: false,
            ganzhiyu: false,
            wuya: false
        };
        
        // 根据角色加载第一章
        if (characterId === 'zhou_yan') {
            this.loadChapter('zhou_yan_chapter1');
        } else if (characterId === 'xia_wan') {
            this.loadChapter('xia_wan_chapter1');
        }
        
        this.showScreen('game-screen');
        
        // 选择角色后，初始化音频上下文并播放音乐
        await this.initAudioAndPlay();
    }
    
    // 初始化音频并播放背景音乐
    async initAudioAndPlay() {
        if (!window.audioManager) {
            console.log('[游戏] 音频管理器未加载');
            return;
        }
        
        if (!this.currentScene) {
            console.log('[游戏] 当前无场景，无法播放音乐');
            return;
        }
        
        console.log('[游戏] initAudioAndPlay 开始, 场景ID:', this.currentScene.id);
        
        try {
            // 初始化音频上下文
            await audioManager.initAudioContext();
            console.log('[游戏] 音频上下文初始化完成, initialized:', audioManager.initialized);
            
            // 播放当前场景的音乐
            audioManager.switchSceneMusic(this.currentScene.id, { forceSwitch: true });
            console.log('[游戏] 场景音乐切换完成:', this.currentScene.id);
        } catch (e) {
            console.error('[游戏] 音频播放失败:', e);
            this.showToast('音频播放失败，请点击BGM按钮重试');
        }
    }

    // 加载章节
    // 第二个参数可以是：
    // - 布尔值 true: 跳过动画，直接加载第0个场景
    // - 字符串 sceneId: 跳过动画，加载指定场景
    // - 省略或 false: 正常显示章节切换动画
    loadChapter(chapterKey, option = false) {
        const chapter = storyData[chapterKey];
        if (!chapter) {
            console.error('章节不存在:', chapterKey);
            return;
        }

        this.currentChapter = chapter;
        this.currentSceneIndex = 0;
        
        if (option === true || (typeof option === 'string' && option)) {
            // 跳过动画模式
            this.showChapterTransition(chapter.title, chapter.subtitle || '', true);
            
            setTimeout(() => {
                if (typeof option === 'string') {
                    // 加载指定场景
                    const sceneIndex = chapter.scenes.findIndex(s => s.id === option);
                    if (sceneIndex !== -1) {
                        this.loadScene(sceneIndex);
                    } else {
                        this.loadScene(0);
                    }
                } else {
                    this.loadScene(0);
                }
                this.updateChapterDisplay();
                this.initAudioAndPlay();
            }, 500);
        } else {
            // 正常模式：显示章节切换动画
            this.showChapterTransition(chapter.title, chapter.subtitle || '');
            
            // 延迟加载场景，等待动画完成
            setTimeout(() => {
                this.loadScene(0);
                this.updateChapterDisplay();
                
                // 章节开始时播放音乐
                this.initAudioAndPlay();
            }, 1500);
        }
    }

    // 显示章节切换动画
    // skipAnimation: 是否跳过动画（快速过渡）
    showChapterTransition(title, subtitle, skipAnimation = false) {
        // 创建过渡动画元素
        let transition = document.getElementById('chapter-transition');
        if (!transition) {
            transition = document.createElement('div');
            transition.id = 'chapter-transition';
            transition.innerHTML = `
                <div class="transition-bg">
                    <div class="transition-gradient"></div>
                    <video autoplay muted loop playsinline id="transition-video">
                    </video>
                    <div class="transition-video-overlay"></div>
                    <div class="transition-glow top"></div>
                    <div class="transition-glow bottom"></div>
                </div>
                <div class="transition-content">
                    <div class="chapter-number"></div>
                    <div class="chapter-title"></div>
                    <div class="chapter-subtitle"></div>
                </div>
            `;
            document.body.appendChild(transition);
            
            // 添加样式
            const style = document.createElement('style');
            style.textContent = `
                #chapter-transition {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.8s ease;
                }
                #chapter-transition.active {
                    opacity: 1;
                    pointer-events: all;
                }
                .transition-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                .transition-gradient {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    z-index: -2;
                }
                /* 动态光效 - 全透明 */
                .transition-gradient::before,
                .transition-gradient::after {
                    display: none;
                }
                #transition-video {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    min-width: 100%;
                    min-height: 100%;
                    transform: translate(-50%, -50%);
                    object-fit: cover;
                    z-index: -1;
                }
                .transition-video-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                }
                .transition-content {
                    position: relative;
                    z-index: 1;
                    text-align: center;
                    color: #fff;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                #chapter-transition.active .transition-content {
                    opacity: 1;
                    transform: translateY(0);
                }
                .chapter-number {
                    font-size: 0.9rem;
                    letter-spacing: 0.6rem;
                    opacity: 0.5;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    font-weight: 300;
                }
                .chapter-title {
                    font-size: 3.5rem;
                    font-weight: 300;
                    letter-spacing: 0.4rem;
                    margin-bottom: 1rem;
                    text-shadow: 0 0 60px rgba(255,255,255,0.3);
                    position: relative;
                }
                .chapter-title::before,
                .chapter-title::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    width: 60px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                }
                .chapter-title::before {
                    right: 100%;
                    margin-right: 20px;
                }
                .chapter-title::after {
                    left: 100%;
                    margin-left: 20px;
                }
                .chapter-subtitle {
                    font-size: 1.1rem;
                    opacity: 0.6;
                    font-weight: 300;
                    letter-spacing: 0.2em;
                    font-style: italic;
                }
                /* 装饰性竖线 */
                .transition-content::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: 120%;
                    width: 1px;
                    height: 50px;
                    background: linear-gradient(to top, transparent, rgba(255,255,255,0.3));
                }
                /* 装饰性光点 */
                .transition-glow {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 20px 5px rgba(255,255,255,0.3);
                    animation: glow-pulse 2s ease-in-out infinite;
                }
                .transition-glow.top { top: 15%; left: 20%; animation-delay: 0s; }
                .transition-glow.bottom { bottom: 20%; right: 25%; animation-delay: 1s; }
                @keyframes glow-pulse {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.5); }
                }
                #chapter-transition.exiting {
                    opacity: 0;
                    transition: opacity 1s ease;
                }
                #chapter-transition.exiting .transition-content {
                    opacity: 0;
                    transform: translateY(-20px);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
            `;
            document.head.appendChild(style);
        }
        
        // 提取章节编号
        const chapterMatch = title.match(/第([一二三四五六七八九十\d]+)章/);
        const chapterNum = chapterMatch ? chapterMatch[1] : '';
        const chapterTitle = title.replace(/第[一二三四五六七八九十\d]+章[：:]?\s*/, '');
        
        transition.querySelector('.chapter-number').textContent = chapterNum ? `CHAPTER ${chapterNum}` : '';
        transition.querySelector('.chapter-title').textContent = chapterTitle || title;
        transition.querySelector('.chapter-subtitle').textContent = subtitle;
        
        // 显示动画
        transition.classList.add('active');
        transition.classList.remove('exiting');
        
        // 延迟时间：正常4.5秒，跳过动画1.2秒
        const delay = skipAnimation ? 1200 : 4500;
        const fadeTime = skipAnimation ? 400 : 1000;
        
        setTimeout(() => {
            transition.classList.add('exiting');
            setTimeout(() => {
                transition.classList.remove('active', 'exiting');
            }, fadeTime);
        }, delay);
    }

    // 更新章节显示
    updateChapterDisplay() {
        const chapterInfo = document.getElementById('chapter-info');
        if (chapterInfo && this.currentChapter) {
            const sceneNum = this.currentSceneIndex + 1;
            const totalScenes = this.currentChapter.scenes.length;
            
            // 添加更新动画
            chapterInfo.classList.add('updating');
            
            chapterInfo.innerHTML = `
                <span class="chapter-main">${this.currentChapter.title}</span>
                <span class="chapter-divider">|</span>
                <span class="chapter-sub">${sceneNum} / ${totalScenes}</span>
            `;
            
            // 移除动画类
            setTimeout(() => {
                chapterInfo.classList.remove('updating');
            }, 500);
        }
    }

    // 加载场景
    loadScene(sceneIndex) {
        const scene = this.currentChapter.scenes[sceneIndex];
        if (!scene) {
            console.error('场景不存在:', sceneIndex);
            return;
        }

        this.currentScene = scene;
        this.currentSceneIndex = sceneIndex;
        this.currentDialogueIndex = 0;

        // 更新章节显示（小章节进度）
        this.updateChapterDisplay();

        // 设置背景
        this.setBackground(scene.background);

        // 切换场景音乐和音效
        if (window.audioManager) {
            // 存储场景的背景音乐情绪（用于playBGM显示）
            scene.bgMood = scene.mood || 'joyful';
            console.log('[游戏] 场景切换到:', scene.id, 'bgMood:', scene.bgMood, 'initialized:', audioManager.initialized);
            
            if (audioManager.initialized) {
                audioManager.switchSceneMusic(scene.id, { forceSwitch: false });
                console.log('[游戏] 场景音乐已切换:', scene.id);
            } else {
                console.log('[游戏] 音频未初始化，将在用户点击后播放');
            }
        }

        // 清空角色层
        const characterLayer = document.getElementById('character-layer');
        if (characterLayer) {
            characterLayer.innerHTML = '';
        }

        // 隐藏选项
        this.hideChoices();

        // ============================================================
        // 第二章动态场景处理（从还伞开始）
        // ============================================================

        // ---------- 获取love最高的可攻略角色 ----------
        const getTopRomanceChar = () => {
            const charKeys = ['xiao_tong', 'long_xinheng', 'wu_ya', 'gan_zhiyu'];
            let topChar = 'xiao_tong';
            let maxLove = 0;
            for (const charKey of charKeys) {
                if (this.affinity[charKey]) {
                    const loveValue = this.affinity[charKey].love || 0;
                    if (loveValue > maxLove) {
                        maxLove = loveValue;
                        topChar = charKey;
                    }
                }
            }
            console.log('[game] 当前love最高的角色:', topChar, 'love:', maxLove);
            return topChar;
        };

        // ---------- xw_2_1 还伞入口场景处理 ----------
        // 根据第一章选择重定向到5条不同的还伞路线
        if (scene.id === 'xw_2_1' && this.currentRoute === 'xia_wan') {
            // 还伞路线映射
            const routeMap = {
                'xiao_tong': 'xw_2_1_xiaotong',      // 木星线
                'long_xinheng': 'xw_2_1_longxinheng', // 谨言线
                'gan_zhiyu': 'xw_2_1_ganzhiyu',       // 方圆线
                'wu_ya': 'xw_2_1_wuya',               // 吴琊线
                'su_xinyue': 'xw_2_1_suxinyue'        // 苏馨悦线
            };

            // 根据第一章的选择决定路线
            let targetRoute;
            if (this.firstChapterChoice === 'mystery') {
                // 如果第一章选择玩推理本，重定向到木星线
                targetRoute = 'xw_2_1_xiaotong';
            } else {
                // 否则根据观察的角色决定路线
                targetRoute = routeMap[this.observedCharacter] || 'xw_2_1_longxinheng';
            }

            scene.next = targetRoute;
            scene.choices = [];
            console.log('[game] xw_2_1 重定向到:', targetRoute);
        }

        // ---------- xw_2_4a 测本进行中 ----------
        // 根据love最高的角色动态生成测本DM的对话
        if (scene.id === 'xw_2_4a' && this.currentRoute === 'xia_wan') {
            const dmChar = getTopRomanceChar();
            const dmLines = {
                'xiao_tong': {
                    // 木星：专业稳重、含蓄认真
                    intro: '嗯...大家都看过本了吗？我来梳理一下剧情线。',
                    ingame: '（走到夏晚身边，压低声音）你的角色线和这个NPC有联动，可以从这个角度切入。',
                    glance: '（收回视线，看向手中的复盘笔记）'
                },
                'long_xinheng': {
                    // 谨言：阳光搞笑、话多活跃、自来熟
                    intro: '哎呀～各位帅哥美女们！本DM闪亮登场！今天我们玩个欢乐局，保证让你们笑得肚子疼！',
                    ingame: '（突然凑近夏晚）诶诶诶！这位小姐姐，你是不是发现了什么？说出来让大家羡慕羡慕！',
                    glance: '（对夏晚挤挤眼）不错不错，这位同学很有潜力嘛～'
                },
                'gan_zhiyu': {
                    // 方圆：随性接地气、有点懒、自信
                    intro: '行了行了，都坐好，我来给你们讲讲规则。放心，很简单的。',
                    ingame: '（一屁股滑到夏晚旁边）诶，你这思路可以啊，比我第一次玩的时候强多了。',
                    glance: '（懒洋洋地靠在椅背上，冲夏晚竖了个大拇指）'
                },
                'wu_ya': {
                    // 吴琊：刀子嘴豆腐心、高冷傲娇、外冷内热
                    intro: '...这个本我带过，照我说的来就行。',
                    ingame: '（在夏晚身边顿了一下，轻声）你的分析方向是对的。继续。',
                    glance: '（扫了一眼夏晚，很快移开视线）'
                }
            };
            const lines = dmLines[dmChar];
            scene.dialogues = [
                { speaker: 'narrator', text: '夏晚坐在玩家位上，手里拿着剧本。' },
                { speaker: dmChar, text: lines.intro },
                { speaker: 'narrator', text: '夏晚认真地看着自己的剧本，试图进入角色。' },
                { speaker: 'narrator', text: '玩着玩着，她渐渐忘记了紧张，完全沉浸在了故事里。' },
                { speaker: dmChar, text: lines.ingame },
                { speaker: 'narrator', text: '测本结束后，大家围坐在一起复盘。' },
                { speaker: dmChar, text: lines.glance }
            ];
        }

        // ---------- xw_2_4b 测本结束 ----------
        if (scene.id === 'xw_2_4b' && this.currentRoute === 'xia_wan') {
            const dmChar = getTopRomanceChar();
            const dmLines = {
                'xiao_tong': {
                    // 木星：含蓄认真，不会直接夸
                    compliment: '...你上手比我想象中快。继续保持。',
                    tease: '（忍不住轻笑）咳...木星这是在夸人吗，太阳打西边出来了。'
                },
                'long_xinheng': {
                    // 谨言：话多活跃，爱开玩笑
                    compliment: '哇塞！夏晚你也太厉害了吧！第一次玩就这么入戏！下次必到啊！',
                    tease: '（夸张地捂住心口）哎呦呦～阿衡这是心动了啊～'
                },
                'gan_zhiyu': {
                    // 方圆：随意接地气，不正经
                    compliment: '可以啊你！有点东西的嘛，比我第一次玩强多了。',
                    tease: '（被戳中一样跳起来）不是...我就随口一说！别乱说！'
                },
                'wu_ya': {
                    // 吴琊：傲娇高冷，嘴硬心软
                    compliment: '...还行。比有些人强。',
                    tease: '（倒吸一口气，小声）我没听错吧？吴琊居然夸人了？？'
                }
            };
            const lines = dmLines[dmChar];
            scene.dialogues = [
                { speaker: dmChar, text: lines.compliment },
                { speaker: 'xia_wan', text: '（心跳漏了一拍）' },
                { speaker: 'xia_wan', text: '（脸...脸好烫...）' },
                { speaker: 'narrator', text: '夏晚低下头，假装在整理剧本。' },
                { speaker: 'su_xinyue', text: '哈哈哈，夏晚脸红了！' },
                { speaker: 'chengzi', text: lines.tease },
                { speaker: 'narrator', text: '大家笑了起来，气氛轻松愉快。' },
                { speaker: 'narrator', text: '但夏晚的心跳，还是久久没有平复...' }
            ];
        }

        // ---------- xw_2_5 心动触发：DM请求帮忙 ----------
        if (scene.id === 'xw_2_5' && this.currentRoute === 'xia_wan') {
            const dmChar = getTopRomanceChar();
            const dmLines = {
                'xiao_tong': '夏晚，方便的话...能帮我收一下本吗？',
                'long_xinheng': '夏晚夏晚～帮个忙呗！和我一起收拾一下呗～两个人快嘛～',
                'gan_zhiyu': '嘿，新人，来都来了，帮我收拾收拾呗。',
                'wu_ya': '夏晚。帮个忙收一下本。'
            };
            scene.dialogues = [
                { speaker: 'narrator', text: '夏晚正准备离开，他叫住了她。' },
                { speaker: dmChar, text: dmLines[dmChar] },
                { speaker: 'xia_wan', text: '好。' },
                { speaker: 'narrator', text: '夏晚跟着他走进了房间。' },
                { speaker: 'narrator', text: '其他人已经走远了，房间里只剩下他们两个人。' },
                { speaker: 'narrator', text: '整理剧本的时候，他又开口了...' }
            ];
        }

        // ---------- xw_2_5a 心动瞬间 ----------
        if (scene.id === 'xw_2_5a' && this.currentRoute === 'xia_wan') {
            const dmChar = getTopRomanceChar();
            const dmLines = {
                'xiao_tong': {
                    // 木星：含蓄认真，不会直接说喜欢，但会认真表达
                    more: '其实...你刚才测本的时候，我想了很久。',
                    praise: '你认真的样子...很好看。'
                },
                'long_xinheng': {
                    // 谨言：阳光温暖，直接但真诚
                    more: '说真的，夏晚...你今天给我的感觉不太一样。',
                    praise: '你不笑的时候也挺好看的，但笑起来的时候...我好像有点心动。'
                },
                'gan_zhiyu': {
                    // 方圆：随意自信，有点害羞但会直说
                    more: '我也不知道怎么说...就突然觉得...',
                    praise: '你这种认真的劲儿，还挺戳我的。挺、挺加分的。'
                },
                'wu_ya': {
                    // 吴琊：傲娇高冷，但会说出让人心动的话
                    more: '...有件事我一直没说。',
                    praise: '你测本的时候很专注。我...记住了。'
                }
            };
            const lines = dmLines[dmChar];
            scene.dialogues = [
                { speaker: dmChar, text: lines.more },
                { speaker: 'xia_wan', text: '真、真的吗...' },
                { speaker: dmChar, text: lines.praise },
                { speaker: 'narrator', text: '他说完就转身继续整理剧本，留下夏晚愣在原地。' },
                { speaker: 'xia_wan', text: '（心跳好快...）' },
                { speaker: 'narrator', text: '夏晚感觉脸烫得厉害。' },
                { speaker: 'narrator', text: '她偷偷看向他的背影，心里有种说不清的感觉...' }
            ];
        }

        // ---------- xw_2_6 告别 ----------
        // xw_2_6 没有 dynamicDM 标记，保持原有对话即可
        // 此场景为过渡场景

        // ---------- xw_2_6a 微信消息 ----------
        if (scene.id === 'xw_2_6a' && this.currentRoute === 'xia_wan') {
            const dmChar = getTopRomanceChar();
            const dmLines = {
                'xiao_tong': '「今天辛苦了。路上...小心点。」',
                'long_xinheng': '「夏晚～到家了吗～今天的夏晚也超棒的！记得想我哦～」',
                'gan_zhiyu': '「回去了？记得吃饭啊，别饿着。下次有空一起打游戏。」',
                'wu_ya': '「...安全到家了吗。」'
            };
            scene.dialogues = [
                { speaker: 'narrator', text: '是他发来的微信。' },
                { speaker: dmChar, text: dmLines[dmChar] },
                { speaker: 'xia_wan', text: '（他还...关心我。）' },
                { speaker: 'narrator', text: '夏晚的嘴角不自觉地上扬，连忙回复消息。' }
            ];
        }

        // ---------- xw_2_end 第二章结尾 ----------
        if (scene.id === 'xw_2_end' && this.currentRoute === 'xia_wan') {
            const dmChar = getTopRomanceChar();
            const reviewLines = {
                'xiao_tong': '「你认真的样子...很好看」',
                'long_xinheng': '「你笑起来...我有点心动」',
                'gan_zhiyu': '「你认真的劲儿挺戳我的」',
                'wu_ya': '「你...我记住了」'
            };
            scene.dialogues = [
                { speaker: 'narrator', text: '夏晚回到家，躺在床上。' },
                { speaker: 'narrator', text: '脑海里不断回放着今天发生的一切...' },
                { speaker: 'narrator', text: '阿昊的培训，大家的午餐，测本时的专注...' },
                { speaker: 'narrator', text: '还有那句轻轻的' + reviewLines[dmChar] + '...' },
                { speaker: 'xia_wan', text: '（新的故事，要开始了呢。）' },
                { speaker: 'narrator', text: '夏晚闭上眼睛，嘴角带着微笑。' },
                { speaker: 'narrator', text: '窗外，月光温柔地洒落。' },
                { speaker: 'narrator', text: '就像那家店里，某个人的眼神一样...' },
                { speaker: 'narrator', text: '心动的种子，已经悄悄种下...' },
                { speaker: 'narrator', text: '夏晚线 第二章「新的开始」 完' }
            ];
        }

        // =============================================
        // 第三章场景重定向
        // =============================================
        
        // ---------- 第二章结尾 → 第三章入口 ----------
        // 第二章结束（xw_2_18）后，进入第三章
        // 根据木星爱情度是否最高，决定进入哪条第三章路线
        if (scene.id === 'xw_2_18' && this.currentRoute === 'xia_wan') {
            const topChar = getTopRomanceChar();
            
            // 木星线：木星爱情度最高
            if (topChar === 'xiao_tong') {
                scene.next = 'xw_3_1';  // 进入木星单独章节
            }
            // 谨言线：谨言爱情度最高
            else if (topChar === 'long_xinheng') {
                scene.next = 'xw_3_lr_1';  // 进入谨言路线
            }
            // 方圆线：方圆爱情度最高
            else if (topChar === 'gan_zhiyu') {
                scene.next = 'xw_3_gz_1';  // 进入方圆路线
            }
            // 吴琊线：吴琊爱情度最高
            else if (topChar === 'wu_ya') {
                scene.next = 'xw_3_wy_1';  // 进入吴琊路线
            }
            console.log('[game] 第二章结束 → 第三章路线:', topChar);
        }

        // =============================================
        // 第三章动态场景处理
        // =============================================

        // ---------- 木星线 dynamicDM 处理 ----------
        // 木星线的旁观场景需要根据木星身份显示对话
        const isMuxingRoute = () => {
            return this.currentRoute === 'xia_wan' && getTopRomanceChar() === 'xiao_tong';
        };

        // xw_3_2 旁观木星带本
        if (scene.id === 'xw_3_2' && isMuxingRoute()) {
            scene.dialogues = [
                { speaker: 'narrator', text: '上午十点，玩家们陆续到达。' },
                { speaker: 'narrator', text: '这是一个四人情感本，主题是关于校园爱情的。' },
                { speaker: 'narrator', text: '夏晚坐在角落的观摩席上，看着木星开始主持。' },
                { speaker: 'xiao_tong', text: '欢迎大家来到「那年夏天的你」。' },
                { speaker: 'xiao_tong', text: '今天，我会带你们回到那个最纯粹的时代。' },
                { speaker: 'narrator', text: '木星的声音低沉而温柔，带着一种让人安心的力量。' },
                { speaker: 'narrator', text: '（这就是木星学长的魅力所在吧...）' },
                { speaker: 'xia_wan', text: '（难怪店长要让他转型做恋陪DM...）' },
                { speaker: 'narrator', text: '游戏进行到中段，出现了需要两人配合的亲密环节。' },
                { speaker: 'xiao_tong', text: '接下来，请男主和女主牵手完成这个环节。' },
                { speaker: 'narrator', text: '木星自然地伸出手，轻轻握住了扮演女主的女玩家的手。' },
                { speaker: 'xia_wan', text: '（...）' },
                { speaker: 'narrator', text: '夏晚的心猛地揪了一下。' },
                { speaker: 'xia_wan', text: '（好自然...好温柔...）' },
                { speaker: 'xia_wan', text: '（原来这就是恋陪的工作...）' },
                { speaker: 'narrator', text: '夏晚低下头，不敢再看。' },
                { speaker: 'narrator', text: '但那种酸涩的感觉，却像潮水一样涌上心头。' }
            ];
        }

        // xw_3_2_a 继续看下去（木星线）
        if (scene.id === 'xw_3_2_a' && isMuxingRoute()) {
            scene.dialogues = [
                { speaker: 'narrator', text: '夏晚强迫自己抬起头，继续看着场上的情况。' },
                { speaker: 'narrator', text: '木星正在引导玩家们进入角色。' },
                { speaker: 'xiao_tong', text: '闭上眼睛，想象你爱的人就在身边。' },
                { speaker: 'xiao_tong', text: '他可能不善言辞，但会用行动表达。' },
                { speaker: 'narrator', text: '木星说着，轻轻握住了女玩家的手。' },
                { speaker: 'narrator', text: '女玩家靠在木星的肩膀上，脸上带着幸福的笑容。' },
                { speaker: 'xia_wan', text: '（...）' },
                { speaker: 'xia_wan', text: '（他的手...好温暖。）' },
                { speaker: 'xia_wan', text: '（可是那种温暖...不是给我的。）' },
                { speaker: 'narrator', text: '夏晚感觉自己的眼眶有点酸。' }
            ];
        }

        // xw_3_7 木星发现异常（木星线）
        if (scene.id === 'xw_3_7' && isMuxingRoute()) {
            scene.dialogues = [
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
                { speaker: 'xia_wan', text: '学长你真的想多了...' },
                { speaker: 'narrator', text: '夏晚慌忙摆手。' },
                { speaker: 'narrator', text: '但心里却在翻涌。' },
                { speaker: 'xia_wan', text: '（他...他是不是察觉到了...）' }
            ];
        }

        // ---------- 木星线结局对话 ----------
        if (scene.id === 'xw_3_end' && isMuxingRoute()) {
            scene.dialogues = [
                { speaker: 'narrator', text: '那天晚上，夏晚躺在床上。' },
                { speaker: 'narrator', text: '脑海里不断回放着木星说的那句话。' },
                { speaker: 'xia_wan', text: '（他说...不想失去我...）' },
                { speaker: 'xia_wan', text: '（这是不是意味着...他也在意我？）' },
                { speaker: 'xia_wan', text: '（可是我们现在的关系...真的好尴尬...）' },
                { speaker: 'narrator', text: '她翻了个身，把被子蒙在头上。' },
                { speaker: 'xia_wan', text: '（至少...他没有完全拒绝我...）' },
                { speaker: 'xia_wan', text: '（这就是最好的结果了吧...）' },
                { speaker: 'narrator', text: '窗外，月光静静地洒落。' },
                { speaker: 'xia_wan', text: '（木星学长...）' },
                { speaker: 'xia_wan', text: '（我还能等到你的回答吗...）' },
                { speaker: 'narrator', text: '夏晚闭上眼睛，眼角还有未干的泪痕。' },
                { speaker: 'narrator', text: '她知道，这个问题，要留给时间去回答了。' },
                { speaker: 'narrator', text: '...' },
                { speaker: 'narrator', text: '与此同时，在城市的另一边。' },
                { speaker: 'narrator', text: '木星坐在窗边，看着夜空发呆。' },
                { speaker: 'narrator', text: '手里握着的，是夏晚当初还给他的那把伞。' },
                { speaker: 'xiao_tong', text: '（不想失去...吗...）' },
                { speaker: 'xiao_tong', text: '（也许...是时候想清楚了。）' },
                { speaker: 'narrator', text: '他的目光，落在手机屏幕上。' },
                { speaker: 'narrator', text: '那是夏晚的微信头像。' },
                { speaker: 'narrator', text: '两个人，就这样各自怀着心事。' },
                { speaker: 'narrator', text: '等待着一个还未到来的答案。' },
                { speaker: 'narrator', text: '...' },
                { speaker: 'narrator', text: '夏天已经过去了一半。' },
                { speaker: 'narrator', text: '阿昊离开的日子，也越来越近了。' },
                { speaker: 'narrator', text: '而属于夏晚和木星的故事，似乎才刚刚开始...' },
                { speaker: 'narrator', text: '夏晚线 第三章「心动」 完' }
            ];
        }

        // =============================================
        // 第二章聊天场景：根据爱情/友情生成不同对话
        // =============================================
        
        // 判断关系类型：love > friend → 爱情风格，否则 → 友情风格
        const getRelationshipStyle = (charKey) => {
            if (this.affinity[charKey]) {
                const love = this.affinity[charKey].love || 0;
                const friend = this.affinity[charKey].friend || 0;
                return love > friend ? 'romance' : 'friend';
            }
            return 'friend';
        };

        // ---------- 培训中聊天：xw_2_2_xiaotong ----------
        if (scene.id === 'xw_2_2_xiaotong' && this.currentRoute === 'xia_wan') {
            const style = getRelationshipStyle('xiao_tong');
            if (style === 'romance') {
                // 爱情风格：更暧昧、温馨
                scene.dialogues = [
                    { speaker: 'xiao_tong', text: '培训结束了？' },
                    { speaker: 'xia_wan', text: '嗯...学长，阿昊教得好快，我有点跟不上。' },
                    { speaker: 'xiao_tong', text: '没关系。' },
                    { speaker: 'xiao_tong', text: '……其实你刚才认真的样子，我觉得挺好的。' },
                    { speaker: 'xia_wan', text: '诶？' },
                    { speaker: 'xiao_tong', text: '没什么。' },
                    { speaker: 'narrator', text: '木星说完就转过头去，但夏晚发现他的耳朵好像有点红。' },
                    { speaker: 'xia_wan', text: '（学长的侧脸...还挺好看的。）' }
                ];
            } else {
                // 友情风格：轻松、朋友感
                scene.dialogues = [
                    { speaker: 'xiao_tong', text: '培训结束了？' },
                    { speaker: 'xia_wan', text: '嗯...学长，阿昊教得好快，我有点跟不上。' },
                    { speaker: 'xiao_tong', text: '没关系，基础够用就行。' },
                    { speaker: 'xiao_tong', text: '真正重要的东西，都是在带本过程中学会的。' },
                    { speaker: 'xia_wan', text: '学长当初也是这样学的吗？' },
                    { speaker: 'xiao_tong', text: '差不多。' },
                    { speaker: 'narrator', text: '木星的声音温和而有磁性，让人不自觉地想听他继续说下去。' },
                    { speaker: 'xia_wan', text: '（他说话好温柔...）' }
                ];
            }
        }

        // ---------- 培训中聊天：xw_2_2_longxinheng ----------
        if (scene.id === 'xw_2_2_longxinheng' && this.currentRoute === 'xia_wan') {
            const style = getRelationshipStyle('long_xinheng');
            if (style === 'romance') {
                scene.dialogues = [
                    { speaker: 'long_xinheng', text: '哟！新人！培训感觉怎么样？' },
                    { speaker: 'xia_wan', text: '还...还好。' },
                    { speaker: 'long_xinheng', text: '别紧张嘛～' },
                    { speaker: 'long_xinheng', text: '诶，夏晚你笑起来真好看，以后要多笑笑啊～' },
                    { speaker: 'xia_wan', text: '诶？我...我有笑吗？' },
                    { speaker: 'long_xinheng', text: '有啊，现在就在笑～' },
                    { speaker: 'narrator', text: '谨言笑嘻嘻地看着夏晚，眼睛亮晶晶的。' },
                    { speaker: 'xia_wan', text: '（他怎么...突然说这种话...）' }
                ];
            } else {
                scene.dialogues = [
                    { speaker: 'long_xinheng', text: '哟！新人！培训感觉怎么样？' },
                    { speaker: 'xia_wan', text: '还...还好。' },
                    { speaker: 'long_xinheng', text: '哈哈，别紧张！阿昊就是那样，其实人还不错的～' },
                    { speaker: 'long_xinheng', text: '以后有什么不懂的可以来问我！' },
                    { speaker: 'xia_wan', text: '谢谢...谨言？' },
                    { speaker: 'long_xinheng', text: '叫我谨言就行，大家都这么叫～' },
                    { speaker: 'narrator', text: '谨言的笑容很有感染力，让人心情也跟着好起来。' }
                ];
            }
        }

        // ---------- 培训中聊天：xw_2_2_ganzhiyu ----------
        if (scene.id === 'xw_2_2_ganzhiyu' && this.currentRoute === 'xia_wan') {
            const style = getRelationshipStyle('gan_zhiyu');
            if (style === 'romance') {
                scene.dialogues = [
                    { speaker: 'gan_zhiyu', text: '嘿！新来的？' },
                    { speaker: 'xia_wan', text: '嗯，我叫夏晚。' },
                    { speaker: 'gan_zhiyu', text: '我叫甘志宇，大家都叫我方圆。' },
                    { speaker: 'gan_zhiyu', text: '诶，你长得还挺好看的。' },
                    { speaker: 'xia_wan', text: '诶？谢...谢谢？' },
                    { speaker: 'gan_zhiyu', text: '哈哈，开玩笑的～别这么紧张嘛。' },
                    { speaker: 'narrator', text: '方圆笑起来的样子很有感染力，让人不知不觉就放松下来。' },
                    { speaker: 'xia_wan', text: '（方圆学长...好像很容易让人放下戒备。）' }
                ];
            } else {
                scene.dialogues = [
                    { speaker: 'gan_zhiyu', text: '嘿！新来的？' },
                    { speaker: 'xia_wan', text: '嗯，我叫夏晚。' },
                    { speaker: 'gan_zhiyu', text: '我叫甘志宇，大家都叫我方圆。' },
                    { speaker: 'gan_zhiyu', text: '欢迎加入～有什么需要帮忙的尽管说。' },
                    { speaker: 'xia_wan', text: '谢谢方圆学长！' },
                    { speaker: 'gan_zhiyu', text: '叫我名字就行，大家都这样叫。' },
                    { speaker: 'narrator', text: '方圆看起来很随和，让人感觉很容易相处。' }
                ];
            }
        }

        // ---------- 培训中聊天：xw_2_2_wuya ----------
        if (scene.id === 'xw_2_2_wuya' && this.currentRoute === 'xia_wan') {
            const style = getRelationshipStyle('wu_ya');
            if (style === 'romance') {
                scene.dialogues = [
                    { speaker: 'wu_ya', text: '新人？' },
                    { speaker: 'xia_wan', text: '是的...我叫夏晚。' },
                    { speaker: 'wu_ya', text: '嗯。' },
                    { speaker: 'narrator', text: '吴琊的回答很简短，看起来不太好接近。' },
                    { speaker: 'xia_wan', text: '（他好像有点冷淡...）' },
                    { speaker: 'wu_ya', text: '……你刚才培训的时候，我看了。' },
                    { speaker: 'xia_wan', text: '诶？' },
                    { speaker: 'wu_ya', text: '……没什么。就是觉得，你好像挺认真的。' },
                    { speaker: 'narrator', text: '吴琊说完就转过身去，但夏晚总觉得他的语气里有一丝不易察觉的温柔。' },
                    { speaker: 'xia_wan', text: '（他...其实有在关注我吗？）' }
                ];
            } else {
                scene.dialogues = [
                    { speaker: 'wu_ya', text: '新人？' },
                    { speaker: 'xia_wan', text: '是的...我叫夏晚。' },
                    { speaker: 'wu_ya', text: '嗯。' },
                    { speaker: 'narrator', text: '吴琊的回答很简短，看起来不太好接近。' },
                    { speaker: 'xia_wan', text: '（他好像有点冷淡...）' },
                    { speaker: 'narrator', text: '但不知道为什么，吴琊的眼神里似乎有一丝不易察觉的温柔。' }
                ];
            }
        }

        // ---------- 午餐聊天：xw_2_3_xiaotong ----------
        if (scene.id === 'xw_2_3_xiaotong' && this.currentRoute === 'xia_wan') {
            const style = getRelationshipStyle('xiao_tong');
            if (style === 'romance') {
                scene.dialogues = [
                    { speaker: 'xia_wan', text: '学长平时喜欢玩什么类型的本？' },
                    { speaker: 'xiao_tong', text: '都玩，推理和情感比较多。' },
                    { speaker: 'xia_wan', text: '学长有什么推荐的吗？' },
                    { speaker: 'xiao_tong', text: '……' },
                    { speaker: 'xiao_tong', text: '等你能带本了，我带你玩个特别的。' },
                    { speaker: 'xia_wan', text: '特别的？' },
                    { speaker: 'xiao_tong', text: '……嗯。适合你的那种。' },
                    { speaker: 'narrator', text: '木星说着，嘴角微微上扬。' },
                    { speaker: 'xia_wan', text: '（适合我的...是什么意思？）' },
                    { speaker: 'narrator', text: '夏晚心里莫名有点期待，脸也跟着有点热。' }
                ];
            } else {
                scene.dialogues = [
                    { speaker: 'xia_wan', text: '学长平时喜欢玩什么类型的本？' },
                    { speaker: 'xiao_tong', text: '都玩，推理和情感比较多。' },
                    { speaker: 'xia_wan', text: '学长有什么推荐的吗？' },
                    { speaker: 'xiao_tong', text: '等你能带本了，我带你玩个特别的。' },
                    { speaker: 'narrator', text: '木星说着，嘴角微微上扬。' },
                    { speaker: 'xia_wan', text: '（特别的...？）' },
                    { speaker: 'narrator', text: '夏晚心里莫名有点期待。' }
                ];
            }
        }

        // ---------- 午餐聊天：xw_2_3_longxinheng ----------
        if (scene.id === 'xw_2_3_longxinheng' && this.currentRoute === 'xia_wan') {
            const style = getRelationshipStyle('long_xinheng');
            if (style === 'romance') {
                scene.dialogues = [
                    { speaker: 'long_xinheng', text: '夏晚，你知道吗，我之前是盒装本DM！' },
                    { speaker: 'xia_wan', text: '盒装本？和城限有什么区别吗？' },
                    { speaker: 'long_xinheng', text: '城限是一个城市只有几家店有，盒装是随便哪家店都能买～' },
                    { speaker: 'long_xinheng', text: '不过我更喜欢带情感本，能看到玩家哭真的很有成就感！' },
                    { speaker: 'xia_wan', text: '谨言好像很开心的样子。' },
                    { speaker: 'long_xinheng', text: '诶，夏晚你今天看起来心情不错嘛～' },
                    { speaker: 'long_xinheng', text: '是不是因为...有人在旁边？' },
                    { speaker: 'xia_wan', text: '什...什么啊！' },
                    { speaker: 'narrator', text: '谨言笑着眯起眼睛，一脸看穿一切的表情。' },
                    { speaker: 'xia_wan', text: '（被他发现了...？）' }
                ];
            } else {
                scene.dialogues = [
                    { speaker: 'long_xinheng', text: '夏晚，你知道吗，我之前是盒装本DM！' },
                    { speaker: 'xia_wan', text: '盒装本？和城限有什么区别吗？' },
                    { speaker: 'long_xinheng', text: '城限是一个城市只有几家店有，盒装是随便哪家店都能买～' },
                    { speaker: 'long_xinheng', text: '不过我更喜欢带情感本，能看到玩家哭真的很有成就感！' },
                    { speaker: 'xia_wan', text: '谨言好像很开心的样子。' },
                    { speaker: 'narrator', text: '谨言笑起来眼睛眯成一条缝，让人忍不住也想笑。' }
                ];
            }
        }

        // ---------- 午餐聊天：xw_2_3_ganzhiyu ----------
        if (scene.id === 'xw_2_3_ganzhiyu' && this.currentRoute === 'xia_wan') {
            const style = getRelationshipStyle('gan_zhiyu');
            if (style === 'romance') {
                scene.dialogues = [
                    { speaker: 'gan_zhiyu', text: '夏晚，你玩过几次剧本杀？' },
                    { speaker: 'xia_wan', text: '算上上次那次的，也就两三次吧。' },
                    { speaker: 'gan_zhiyu', text: '那你运气不错，第一次就遇到我们店～' },
                    { speaker: 'xia_wan', text: '方圆学长做这行多久了？' },
                    { speaker: 'gan_zhiyu', text: '也就几个月吧，其实我也不算久。' },
                    { speaker: 'gan_zhiyu', text: '不过...感觉你挺适合这里的。' },
                    { speaker: 'xia_wan', text: '真的吗？' },
                    { speaker: 'gan_zhiyu', text: '嗯。就是那种...让人忍不住想多看两眼的感觉。' },
                    { speaker: 'narrator', text: '方圆说完自己也有点不好意思，挠了挠头。' },
                    { speaker: 'xia_wan', text: '（忍不住想多看两眼...？）' }
                ];
            } else {
                scene.dialogues = [
                    { speaker: 'gan_zhiyu', text: '夏晚，你玩过几次剧本杀？' },
                    { speaker: 'xia_wan', text: '算上上次那次的，也就两三次吧。' },
                    { speaker: 'gan_zhiyu', text: '那你运气不错，第一次就遇到我们店～' },
                    { speaker: 'xia_wan', text: '方圆学长做这行多久了？' },
                    { speaker: 'gan_zhiyu', text: '也就几个月吧，其实我也不算久。' },
                    { speaker: 'gan_zhiyu', text: '不过感觉你挺适合这里的，慢慢来就好。' },
                    { speaker: 'narrator', text: '方圆看起来很随和，让人感觉很亲切。' }
                ];
            }
        }

        // ---------- 午餐聊天：xw_2_3_wuya ----------
        if (scene.id === 'xw_2_3_wuya' && this.currentRoute === 'xia_wan') {
            const style = getRelationshipStyle('wu_ya');
            if (style === 'romance') {
                scene.dialogues = [
                    { speaker: 'xia_wan', text: '吴琊学长平时话也不多吗？' },
                    { speaker: 'wu_ya', text: '……看情况。' },
                    { speaker: 'xia_wan', text: '（好惜字如金...）' },
                    { speaker: 'wu_ya', text: '……你倒是挺能说的。' },
                    { speaker: 'xia_wan', text: '诶？' },
                    { speaker: 'wu_ya', text: '没什么。就是觉得……' },
                    { speaker: 'wu_ya', text: '……你在这里挺好的。' },
                    { speaker: 'narrator', text: '吴琊说完就低头吃饭，不再看她。' },
                    { speaker: 'xia_wan', text: '（他说我在这里...挺好的？）' },
                    { speaker: 'xia_wan', text: '（心跳怎么突然快了一点...）' }
                ];
            } else {
                scene.dialogues = [
                    { speaker: 'xia_wan', text: '吴琊学长平时话也不多吗？' },
                    { speaker: 'wu_ya', text: '……嗯。' },
                    { speaker: 'xia_wan', text: '（好惜字如金...）' },
                    { speaker: 'wu_ya', text: '……能吃饭就行，话多不多不重要。' },
                    { speaker: 'narrator', text: '吴琊说完就低头吃饭，不再说话。' },
                    { speaker: 'xia_wan', text: '（感觉他...好像不太习惯和人聊天。）' }
                ];
            }
        }

        // =============================================
        // 第四章告白场景动态处理（混合模式）
        // =============================================
        
        // xw_4_5 告白入口（选择主动还是被动）
        if (scene.id === 'xw_4_5' && this.currentRoute === 'xia_wan') {
            // 检查是否已经处于恋爱关系
            if (this.isInRelationship()) {
                const currentPartner = this.getCurrentPartner();
                const partnerNames = {
                    'xiao_tong': '木星',
                    'long_xinheng': '谨言',
                    'gan_zhiyu': '方圆',
                    'wu_ya': '吴琊'
                };
                
                scene.dialogues = [
                    { speaker: 'narrator', text: '某天晚上。' },
                    { speaker: 'narrator', text: '店里只剩夏晚在整理最后的东西。' },
                    { speaker: 'narrator', text: '她正准备收拾东西走人的时候。' },
                    { speaker: 'narrator', text: '手机震动了。' },
                    { speaker: 'narrator', text: `是${partnerNames[currentPartner]}发来的消息。` },
                    { speaker: currentPartner, text: '「在店里吗？我在门口等你。」' },
                    { speaker: 'xia_wan', text: '（...是他。）' },
                    { speaker: 'narrator', text: '夏晚的嘴角不自觉地弯了起来。' }
                ];
                
                scene.choices = [
                    { text: `去见${partnerNames[currentPartner]}`, next: 'xw_4_7', affinity: {}, friendship: {} }
                ];
                
                console.log('[game] 已处于恋爱关系，只能选择当前恋人:', currentPartner);
            }
            // 如果未恋爱，xw_4_5保持原样，让玩家选择主动或被动
        }
        
        // xw_4_5_passive 被动告白场景（被告白）
        if (scene.id === 'xw_4_5_passive' && this.currentRoute === 'xia_wan') {
            const confessors = [];
            const characterNames = {
                'xiao_tong': '木星',
                'long_xinheng': '谨言',
                'gan_zhiyu': '方圆',
                'wu_ya': '吴琊'
            };
            
            // 检查是否已经处于恋爱关系
            if (this.isInRelationship()) {
                const currentPartner = this.getCurrentPartner();
                scene.dialogues = [
                    { speaker: 'narrator', text: `手机屏幕上是${characterNames[currentPartner]}的消息。` },
                    { speaker: currentPartner, text: '「在店里吗？我在门口等你。」' },
                    { speaker: 'xia_wan', text: '（...是他。）' },
                    { speaker: 'narrator', text: '夏晚的嘴角不自觉地弯了起来。' }
                ];
                scene.choices = [
                    { text: `去见${characterNames[currentPartner]}`, next: `xw_4_5_${currentPartner}`, affinity: {}, friendship: {} }
                ];
                return;
            }
            
            // 检查各角色是否可以告白（爱情度>60 且 隐藏条件满足）
            if (this.affinity.xiao_tong && 
                this.affinity.xiao_tong.love > 60 && 
                this.confessionFlags.xiaotong) {
                confessors.push('xiao_tong');
            }
            if (this.affinity.long_xinheng && 
                this.affinity.long_xinheng.love > 60 && 
                this.confessionFlags.longxinheng) {
                confessors.push('long_xinheng');
            }
            if (this.affinity.gan_zhiyu && 
                this.affinity.gan_zhiyu.love > 60 && 
                this.confessionFlags.ganzhiyu) {
                confessors.push('gan_zhiyu');
            }
            if (this.affinity.wu_ya && 
                this.affinity.wu_ya.love > 60 && 
                this.confessionFlags.wuya) {
                confessors.push('wu_ya');
            }
            
            console.log('[game] 被动告白 - 可被告白的角色:', confessors);
            
            // 动态生成被动告白场景
            if (confessors.length > 0) {
                // 取爱情度最高的角色
                confessors.sort((a, b) => {
                    const loveA = this.affinity[a]?.love || 0;
                    const loveB = this.affinity[b]?.love || 0;
                    return loveB - loveA;
                });
                
                const topConfessor = confessors[0];
                const charName = characterNames[topConfessor];
                
                scene.dialogues = [
                    { speaker: 'narrator', text: `是${charName}发来的消息。` },
                    { speaker: topConfessor, text: '「你还在店里吗。」' },
                    { speaker: 'xia_wan', text: `（${charName}怎么突然发消息...）` },
                    { speaker: 'xia_wan', text: `在的～${charName}有什么事吗？` },
                    { speaker: topConfessor, text: '「...我在门口。」' },
                    { speaker: topConfessor, text: '「能出来一下吗。」' },
                    { speaker: 'xia_wan', text: '（...？）' },
                    { speaker: 'narrator', text: '夏晚的心跳突然快了起来。' },
                    { speaker: 'narrator', text: '她不知道会发生什么。' },
                    { speaker: 'narrator', text: '但她有一种预感。' },
                    { speaker: 'narrator', text: '一种让她心跳加速的预感。' },
                    { speaker: 'xia_wan', text: `（${charName}...他想说什么...）` }
                ];
                
                // 角色key转换为scene id格式（xiao_tong -> xiaotong）
                const charKeyToScene = {
                    'xiao_tong': 'xiaotong',
                    'long_xinheng': 'longxinheng',
                    'gan_zhiyu': 'ganzhiyu',
                    'wu_ya': 'wuya'
                };
                
                // 如果有多个符合条件的角色，让玩家选择
                if (confessors.length > 1) {
                    scene.choices = confessors.map(charKey => ({
                        text: `去见${characterNames[charKey]}`,
                        next: `xw_4_6_confession_${charKeyToScene[charKey]}_accept`,
                        affinity: { [charKey]: 5 },
                        friendship: { [charKey]: 3 }
                    }));
                } else {
                    scene.choices = [
                        { text: `去见${charName}`, next: `xw_4_6_confession_${charKeyToScene[topConfessor]}_accept`, affinity: { [topConfessor]: 5 }, friendship: { [topConfessor]: 3 } }
                    ];
                }
            } else {
                // 没有符合条件的角色
                scene.dialogues = [
                    { speaker: 'narrator', text: '手机没有新消息。' },
                    { speaker: 'narrator', text: '也许今晚不会有人来找她了。' },
                    { speaker: 'xia_wan', text: '（...）' },
                    { speaker: 'narrator', text: '夏晚收拾好东西。' },
                    { speaker: 'narrator', text: '准备离开。' },
                    { speaker: 'narrator', text: '她抬头看了看店里的天花板。' },
                    { speaker: 'xia_wan', text: '（算了...感情的事急不来）' },
                    { speaker: 'xia_wan', text: '（先把工作做好吧）' },
                    { speaker: 'narrator', text: '她这样想着，推开了店门。' },
                    { speaker: 'narrator', text: '夜风有点凉，但她的心却很平静。' }
                ];
                scene.choices = [
                    { text: '（继续日常）', next: 'xw_4_8', affinity: {}, friendship: {} }
                ];
            }
        }
        
        // xw_4_5_active 主动告白入口
        if (scene.id === 'xw_4_5_active' && this.currentRoute === 'xia_wan') {
            const activatableChars = [];
            const characterNames = {
                'xiao_tong': '木星',
                'long_xinheng': '谨言',
                'gan_zhiyu': '方圆',
                'wu_ya': '吴琊'
            };
            
            // 检查是否已经处于恋爱关系
            if (this.isInRelationship()) {
                const currentPartner = this.getCurrentPartner();
                scene.dialogues = [
                    { speaker: 'narrator', text: '夏晚看着手机屏幕。' },
                    { speaker: 'narrator', text: '已经有了那个人的消息。' },
                    { speaker: 'narrator', text: '她已经不需要主动了。' },
                    { speaker: 'xia_wan', text: '（...已经在等我了啊。）' }
                ];
                // charKey转scene id
                const activeCharKeyToScene = {
                    'xiao_tong': 'xiaotong',
                    'long_xinheng': 'longxinheng',
                    'gan_zhiyu': 'ganzhiyu',
                    'wu_ya': 'wuya'
                };
                scene.choices = [
                    { text: '（去找他）', next: `xw_4_5_active_${activeCharKeyToScene[currentPartner]}`, affinity: {}, friendship: {} }
                ];
                return;
            }
            
            // 主动告白条件：爱情度>=50 且 隐藏条件满足
            if (this.affinity.xiao_tong && 
                this.affinity.xiao_tong.love >= 50 && 
                this.confessionFlags.xiaotong) {
                activatableChars.push('xiao_tong');
            }
            if (this.affinity.long_xinheng && 
                this.affinity.long_xinheng.love >= 50 && 
                this.confessionFlags.longxinheng) {
                activatableChars.push('long_xinheng');
            }
            if (this.affinity.gan_zhiyu && 
                this.affinity.gan_zhiyu.love >= 50 && 
                this.confessionFlags.ganzhiyu) {
                activatableChars.push('gan_zhiyu');
            }
            if (this.affinity.wu_ya && 
                this.affinity.wu_ya.love >= 50 && 
                this.confessionFlags.wuya) {
                activatableChars.push('wu_ya');
            }
            
            console.log('[game] 主动告白 - 可主动告白的角色:', activatableChars);
            
            // charKey转scene id（xiao_tong -> xiaotong）
            const activeCharToScene = {
                'xiao_tong': 'xiaotong',
                'long_xinheng': 'longxinheng',
                'gan_zhiyu': 'ganzhiyu',
                'wu_ya': 'wuya'
            };
            
            // 动态生成主动告白选项
            if (activatableChars.length > 0) {
                scene.choices = activatableChars.map(charKey => ({
                    text: `去找${characterNames[charKey]}`,
                    next: `xw_4_5_active_${activeCharToScene[charKey]}`,
                    affinity: {},
                    friendship: {}
                }));
                // 添加返回选项
                scene.choices.push({ text: '算了...还是等他来找我吧', next: 'xw_4_5_passive', affinity: { xiao_tong: -2 }, friendship: {} });
            } else {
                // 没有符合条件的角色
                scene.dialogues = [
                    { speaker: 'narrator', text: '夏晚想了想...' },
                    { speaker: 'narrator', text: '觉得自己还没准备好。' },
                    { speaker: 'xia_wan', text: '（...再等等吧。）' },
                    { speaker: 'narrator', text: '她决定还是保守一点。' }
                ];
                scene.choices = [
                    { text: '（等他来找我）', next: 'xw_4_5_passive', affinity: {}, friendship: {} }
                ];
            }
        }

        // =============================================
        // 第五章入口：xw_5_start 动态分流
        // 有恋人 → 进入对应角色的恋人线
        // 无恋人 → 进入单身线
        // =============================================
        if (scene.id === 'xw_5_start' && this.currentRoute === 'xia_wan') {
            const partnerRouteMap = {
                'xiao_tong':    'xw_5_lover_xiaotong_1',
                'long_xinheng': 'xw_5_lover_longxinheng_1',
                'gan_zhiyu':    'xw_5_lover_ganzhiyu_1',
                'wu_ya':        'xw_5_lover_wuya_1'
            };

            // 先播完过渡对话，然后动态决定去哪里
            scene.next = null;   // 清掉默认next，防止走章节结束
            scene.choices = [];  // 清掉选项

            // 在最后一句话之后追加一个隐藏的 autoNext
            scene.autoNext = this.isInRelationship()
                ? (partnerRouteMap[this.getCurrentPartner()] || 'xw_5_single_1')
                : 'xw_5_single_1';

            console.log('[game] xw_5_start 分流 → ', scene.autoNext, '  恋人:', this.getCurrentPartner());
        }

        // 显示第一句对话
        this.showDialogue(0);
    }

    // 生成多角色告白场景的对话
    generateMultiConfessionDialogue(confessors) {
        const characterNames = {
            'xiao_tong': '木星',
            'long_xinheng': '谨言',
            'gan_zhiyu': '方圆',
            'wu_ya': '吴琊'
        };
        
        const dialogues = [
            { speaker: 'narrator', text: '某天晚上。' },
            { speaker: 'narrator', text: '店里只剩夏晚在整理最后的东西。' },
            { speaker: 'narrator', text: '大家都陆续离开了。' }
        ];
        
        // 如果有多个人发来消息
        if (confessors.length > 1) {
            dialogues.push(
                { speaker: 'narrator', text: '她正准备收拾东西走人的时候。' },
                { speaker: 'narrator', text: '手机突然震动了。' },
                { speaker: 'narrator', text: '不是一条。' },
                { speaker: 'narrator', text: '是好几条消息同时发来。' }
            );
            
            confessors.forEach(charKey => {
                const name = characterNames[charKey];
                const messages = {
                    'xiao_tong': `「你还在店里吗。」「...我在门口。能出来一下吗。」`,
                    'long_xinheng': `「夏晚～在吗～」「我有话想和你说，你现在方便吗～」`,
                    'gan_zhiyu': `「嘿，在吗？」「我在门口等你，有点事想跟你说。」`,
                    'wu_ya': `「...」「在店里吗。」「...出来一下。」`
                };
                dialogues.push(
                    { speaker: 'narrator', text: `${name}发来了消息...` },
                    { speaker: charKey, text: messages[charKey] }
                );
            });
            
            dialogues.push(
                { speaker: 'xia_wan', text: '（...！）' },
                { speaker: 'narrator', text: '夏晚的心跳突然快了起来。' },
                { speaker: 'narrator', text: '不止一个人...想见她？' },
                { speaker: 'xia_wan', text: '（我该...去见谁...）' }
            );
        } else {
            // 只有一个角色
            const charKey = confessors[0];
            const name = characterNames[charKey];
            const messages = {
                'xiao_tong': { msg1: '「你还在店里吗。」', msg2: '「...我在门口。」「能出来一下吗。」' },
                'long_xinheng': { msg1: '「夏晚～在吗～」', msg2: '「我有话想和你说，你现在方便吗～」' },
                'gan_zhiyu': { msg1: '「嘿，在吗？」', msg2: '「我在门口等你，有点事想跟你说。」' },
                'wu_ya': { msg1: '「...」', msg2: '「在店里吗。」「...出来一下。」' }
            };
            
            dialogues.push(
                { speaker: 'narrator', text: '她正准备收拾东西走人的时候。' },
                { speaker: 'narrator', text: '手机突然震动了。' },
                { speaker: 'narrator', text: `是${name}发来的消息。` },
                { speaker: charKey, text: messages[charKey].msg1 },
                { speaker: charKey, text: messages[charKey].msg2 },
                { speaker: 'xia_wan', text: '（...！）' },
                { speaker: 'narrator', text: '夏晚的心跳突然快了起来。' },
                { speaker: 'xia_wan', text: `（${name}...他想说什么...）` }
            );
        }
        
        return dialogues;
    }

    // 设置背景
    setBackground(bgClass) {
        const bg = document.getElementById('game-bg');
        if (bg) {
            // 将背景类名映射到实际图片文件
            const bgMap = {
                'bg-street': 'images/bg-street.png',
                'bg-shop': 'images/bg-shop.png',
                'bg-dorm': 'images/bg-dorm.png',
                'bg-university': 'images/bg-university.png',
                'bg-classroom': 'images/bg-classroom.png',
                'bg-phone': 'images/bg-phone.png',
                'bg-rest-area': 'images/bg-rest-area.png',
                'bg-room': 'images/bg-room.png',
                'bg-restaurant': 'images/bg-rest-area.png',  // 餐厅用休息区图片
                'bg-hotpot': 'images/bg-rest-area.png',       // 火锅用休息区图片
                'bg-rooftop': 'images/bg-rooftop.png',        // 天台
                'bg-seaside': 'images/bg-seaside.png',        // 海边
                'bg-alley': 'images/bg-alley.png',            // 小巷
                'bg-bar': 'images/bg-bar.png',               // 酒吧
                'bg-bedroom': 'images/bg-bedroom.png',         // 卧室
                'bg-bookstore': 'images/bg-bookstore.png',    // 书店
                'bg-cafe-corridor': 'images/bg-cafe-corridor.png',  // 咖啡馆走廊
                'bg-cafe-day': 'images/bg-cafe-day.png',      // 咖啡馆白天
                'bg-cafe-room': 'images/bg-cafe-room.png',   // 咖啡馆包间
                'bg-convenience': 'images/bg-convenience.png',// 便利店
                'bg-hongyadong': 'images/bg-hongyadong.png', // 洪崖洞
                'bg-ktv': 'images/bg-ktv.png',               // KTV
                'bg-metro': 'images/bg-metro.png',            // 地铁
            };
            
            const imagePath = bgMap[bgClass];
            if (imagePath) {
                // 清除之前的背景类，避免CSS渐变覆盖图片
                bg.className = 'game-bg';
                // 设置背景图片
                bg.style.backgroundImage = `url('${imagePath}')`;
                console.log('背景已切换:', imagePath);
            } else {
                console.warn('未知的背景:', bgClass);
            }
        }
    }

    // 显示对话
    showDialogue(index) {
        const dialogue = this.currentScene.dialogues[index];
        if (!dialogue) {
            // 当前场景对话结束，显示选项或进入下一场景
            this.handleSceneEnd();
            return;
        }

        const speakerEl = document.getElementById('speaker-name');
        const textEl = document.getElementById('dialogue-text');

        // 获取角色信息
        const character = storyData.characters[dialogue.speaker];
        
        // 设置说话人名称（优先显示昵称/花名）
        if (speakerEl) {
            if (character) {
                // 优先显示昵称（花名），否则显示真名
                speakerEl.textContent = character.nickname || character.name;
                speakerEl.style.color = character.color || '#ffd700';
            } else {
                speakerEl.textContent = '';
            }
        }

        // 打字机效果显示文本
        this.typeText(textEl, dialogue.text);

        // 只显示当前说话角色
        this.updateCharacterSprite(dialogue.speaker);

        // 检查是否是进入恋爱关系的对话
        if (dialogue.text && dialogue.text.includes('【进入恋爱关系】')) {
            // 从对话文本中提取角色ID
            const confessionScenes = {
                'xw_4_6_confession_xiaotong_accept': 'xiao_tong',
                'xw_4_6_confession_longxinheng_accept': 'long_xinheng',
                'xw_4_6_confession_ganzhiyu_accept': 'gan_zhiyu',
                'xw_4_6_confession_wuya_accept': 'wu_ya',
                // 主动告白成功场景
                'xw_4_6_active_xiaotong_success': 'xiao_tong',
                'xw_4_6_active_longxinheng_success': 'long_xinheng',
                'xw_4_6_active_ganzhiyu_success': 'gan_zhiyu',
                'xw_4_6_active_wuya_success': 'wu_ya'
            };
            const characterId = confessionScenes[this.currentScene.id];
            if (characterId && !this.isInRelationship()) {
                // 延迟触发，因为打字机效果需要时间
                setTimeout(() => {
                    this.showRelationshipNotification(characterId);
                }, 500);
            }
        }
    }

    // 打字机效果
    typeText(element, text) {
        this.isTyping = true;
        element.textContent = '';
        element.classList.add('typing-cursor');

        let index = 0;
        
        if (this.typingInterval) {
            clearInterval(this.typingInterval);
        }

        this.typingInterval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                
                // 播放打字音效（每3个字符播放一次，只播放前0.08秒）
                if (index % 3 === 0 && window.audioManager) {
                    audioManager.playSFX('typing', 0.08);
                }
            } else {
                clearInterval(this.typingInterval);
                this.isTyping = false;
                element.classList.remove('typing-cursor');
                
                if (this.autoMode) {
                    setTimeout(() => this.advanceDialogue(), 2000);
                }
            }
        }, this.textSpeed);
    }

    // 更新角色立绘
    updateCharacterSprite(characterId) {
        const character = storyData.characters[characterId];
        if (!character || characterId === 'narrator' || characterId === 'roommate') {
            // 旁白或室友，清空角色层
            const layer = document.getElementById('character-layer');
            if (layer) layer.innerHTML = '';
            return;
        }

        const layer = document.getElementById('character-layer');
        if (!layer) return;

        // 清空之前的角色立绘
        layer.innerHTML = '';

        // 每个角色的底部偏移量（让立绘最下方紧贴文本框最上方）
        const bottomOffsets = {
            'zhou_yan': '-80px',    // 周砚 - 坐姿，需要向上偏移
            'chengzi': '-20px',     // 橙子/苏馨悦 - 站姿
            'xia_wan': '-40px',     // 夏晚 - 半身照
            'xia_tong': '-30px',    // 肖童/木星
            'wu_ya': '-20px',       // 吴琊
            'long_xinheng': '-30px', // 龙信衡/谨言
            'gan_zhiyu': '-25px',   // 甘志宇/方圆
            'yu_haitong': '-20px'   // 余海彤/170
        };

        // 创建新的立绘
        const sprite = document.createElement('img');
        sprite.className = 'character-sprite';
        sprite.dataset.char = characterId;
        const bottomOffset = bottomOffsets[characterId] || '0px';
        sprite.style.cssText = `
            height: 90vh;
            max-width: 600px;
            object-fit: contain;
            filter: drop-shadow(0 10px 30px rgba(0,0,0,0.5));
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: absolute;
            bottom: ${bottomOffset};
            left: 50%;
            transform: translateX(-50%) scale(1);
            z-index: 10;
            opacity: 1;
        `;
        
        // 设置立绘图片
        if (character.image) {
            sprite.src = character.image;
            sprite.alt = character.name;
        }
        
        layer.appendChild(sprite);
    }

    // 推进对话
    advanceDialogue() {
        if (this.isTyping) {
            // 如果正在打字，直接显示完整文本
            clearInterval(this.typingInterval);
            const textEl = document.getElementById('dialogue-text');
            const dialogue = this.currentScene.dialogues[this.currentDialogueIndex];
            if (textEl && dialogue) {
                textEl.textContent = dialogue.text;
                textEl.classList.remove('typing-cursor');
            }
            this.isTyping = false;
            return;
        }

        // 播放翻页音效
        if (window.audioManager) {
            audioManager.playSFX('next');
        }

        // 记录当前对话到历史（用于返回功能）
        this.dialogueHistory.push({
            sceneId: this.currentScene.id,
            dialogueIndex: this.currentDialogueIndex
        });
        // 限制历史记录数量（最多保存50条）
        if (this.dialogueHistory.length > 50) {
            this.dialogueHistory.shift();
        }

        this.currentDialogueIndex++;

        this.showDialogue(this.currentDialogueIndex);
    }

    // 记录场景切换到历史（用于返回功能）
    recordSceneTransition(targetSceneId) {
        this.dialogueHistory.push({
            sceneId: this.currentScene.id,
            dialogueIndex: this.currentDialogueIndex,
            nextSceneId: targetSceneId  // 记录目标场景，方便返回
        });
        if (this.dialogueHistory.length > 50) {
            this.dialogueHistory.shift();
        }
    }

    // 返回上一句对话
    goBackDialogue() {
        // 如果没有历史记录，无法返回
        if (this.dialogueHistory.length === 0) {
            console.log('没有可以返回的历史记录');
            return;
        }

        // 获取上一条历史记录
        const lastHistory = this.dialogueHistory.pop();

        // 如果历史记录中的场景与当前场景不同，需要切换场景
        if (lastHistory.sceneId !== this.currentScene.id) {
            // 先切换场景
            const sceneData = this.findScene(lastHistory.sceneId);
            if (sceneData) {
                this.currentScene = sceneData;
                this.currentSceneIndex = this.currentChapter.scenes.findIndex(s => s.id === sceneData.id);
                this.updateUI();
                // 切换场景后，显示最后一条对话（而不是从0开始）
                // 如果历史记录有保存的对话索引，用它；否则显示最后一条
                if (lastHistory.dialogueIndex !== undefined) {
                    const targetIndex = Math.min(lastHistory.dialogueIndex, this.currentScene.dialogues.length - 1);
                    this.currentDialogueIndex = Math.max(0, targetIndex);
                } else {
                    this.currentDialogueIndex = Math.max(0, this.currentScene.dialogues.length - 1);
                }
            } else {
                console.error('无法找到场景:', lastHistory.sceneId);
                return;
            }
        } else {
            // 同一场景内返回，直接恢复对话索引
            this.currentDialogueIndex = lastHistory.dialogueIndex;
        }

        // 播放返回音效
        if (window.audioManager) {
            audioManager.playSFX('next');
        }

        // 重新显示当前对话
        this.showDialogue(this.currentDialogueIndex);
    }

    // 查找场景数据
    findScene(sceneId) {
        for (const chapter of storyData.chapters) {
            for (const scene of chapter.scenes) {
                if (scene.id === sceneId) {
                    return scene;
                }
            }
        }
        return null;
    }

    // 处理场景结束
    handleSceneEnd() {
        const scene = this.currentScene;
        
        // 调试日志
        console.log('handleSceneEnd called:', { route: this.currentRoute, sceneId: scene.id, chapter: this.currentChapter.title });
        
        // =============================================
        // 第二章结束，自动跳转到第二章扩展
        // =============================================
        if (this.currentRoute === 'xia_wan' && scene.id === 'xw_2_end') {
            console.log('第二章结束，准备跳转第二章扩展');
            this.loadChapter('xia_wan_chapter2_extend', 'xw_2_9');
            return;
        }
        
        // =============================================
        // 第二章扩展章节结束，自动跳转到第三章
        // =============================================
        if (this.currentRoute === 'xia_wan' && scene.id === 'xw_2_18') {
            console.log('第二章扩展章节结束，准备跳转第三章');
            // 获取当前love最高的可攻略角色
            const charKeys = ['xiao_tong', 'long_xinheng', 'wu_ya', 'gan_zhiyu'];
            let topChar = 'xiao_tong';
            let maxLove = 0;
            for (const charKey of charKeys) {
                if (this.affinity[charKey]) {
                    const loveValue = this.affinity[charKey].love || 0;
                    if (loveValue > maxLove) {
                        maxLove = loveValue;
                        topChar = charKey;
                    }
                }
            }
            // 根据最高好感角色进入对应第三章
            const chapter3Map = {
                'xiao_tong': 'xia_wan_chapter3',
                'long_xinheng': 'xia_wan_chapter3_longxinheng',
                'gan_zhiyu': 'xia_wan_chapter3_ganzhiyu',
                'wu_ya': 'xia_wan_chapter3_wuya'
            };
            this.loadChapter(chapter3Map[topChar] || 'xia_wan_chapter3', 'xw_3_1');
            return;
        }
        
        // =============================================
        // 夏晚线第三章结束后进入第四章（需要提前检测，因为结局场景next=null且choices=[]）
        // =============================================
        if (this.currentRoute === 'xia_wan' && 
            (scene.id === 'xw_3_end_he' || scene.id === 'xw_3_end_open' || 
             scene.id === 'xw_3_end_friend' || scene.id === 'xw_3_end_be' ||
             scene.id === 'xw_3_lr_end_he' || scene.id === 'xw_3_lr_end_open' ||
             scene.id === 'xw_3_lr_end_friend' || scene.id === 'xw_3_lr_end_be' ||
             scene.id === 'xw_3_gz_end_he' || scene.id === 'xw_3_gz_end_open' ||
             scene.id === 'xw_3_gz_end_friend' || scene.id === 'xw_3_gz_end_be' ||
             scene.id === 'xw_3_wy_end_he' || scene.id === 'xw_3_wy_end_open' ||
             scene.id === 'xw_3_wy_end_friend' || scene.id === 'xw_3_wy_end_be')) {
            
            // 确定第三章结局类型
            if (scene.id.includes('_he')) {
                this.chapter3EndingType = 'he';
            } else if (scene.id.includes('_open')) {
                this.chapter3EndingType = 'open';
            } else if (scene.id.includes('_friend')) {
                this.chapter3EndingType = 'friend';
            } else {
                this.chapter3EndingType = 'be';
            }
            
            console.log('[game] 第三章结束，结局类型:', this.chapter3EndingType, '，准备进入第四章');
            
            // 如果是BE结局，先显示"擦肩而过"弹窗，再显示章节结束弹窗
            if (this.chapter3EndingType === 'be') {
                const endingNames = {
                    'xw_3_end_be': '擦肩而过',
                    'xw_3_lr_end_be': '各自安好',
                    'xw_3_gz_end_be': '渐行渐远',
                    'xw_3_wy_end_be': '错失良机'
                };
                const beEndingName = endingNames[scene.id] || '遗憾结局';
                
                this.showBEEndingPopup(beEndingName);
                
                // 3秒后显示章节结束弹窗
                setTimeout(() => {
                    this.showChapter3EndScreen();
                }, 3000);
                return;
            }
            
            // 显示章节结束提示，然后进入第四章
            this.showChapter3EndScreen();
            return;
        }

        // =============================================
        // 夏晚线第三章多结局选择入口（自动跳转到对应结局）
        // =============================================
        if (this.currentRoute === 'xia_wan' && 
            (scene.id === 'xw_3_end_selector' || scene.id === 'xw_3_lr_end_selector' ||
             scene.id === 'xw_3_gz_end_selector' || scene.id === 'xw_3_wy_end_selector')) {
            
            console.log('[game] 检测到第三章结局选择入口，准备跳转到具体结局');
            
            // 调用findAndLoadScene来处理选择
            this.findAndLoadScene(scene.id);
            return;
        }

        // 【已删除强制跳转逻辑，让xw_2_end正常显示choices选项】
        
        if (scene.choices && scene.choices.length > 0) {
            // 显示选项
            this.showChoices(scene.choices);
        } else if (scene.conditionNext) {
            // 处理条件跳转
            console.log('[debug] handleSceneEnd - 当前场景ID:', scene.id, 'confessionFlags:', JSON.stringify(this.confessionFlags));
            const conditionMet = this.checkCondition(scene.conditionNext.condition);
            console.log('[debug] conditionNext - condition:', scene.conditionNext.condition, 'met:', conditionMet);
            const targetScene = conditionMet ? scene.conditionNext.ifTrue : scene.conditionNext.ifFalse;
            console.log('[debug] conditionNext - targetScene:', targetScene);
            this.findAndLoadScene(targetScene);
        } else if (scene.autoNext) {
            // 动态分流（如 xw_5_start 根据恋爱状态自动跳转）
            console.log('[game] autoNext 跳转 →', scene.autoNext);
            this.findAndLoadScene(scene.autoNext);
        } else if (scene.next) {
            // 检查是否有自动触发条件（用于无选项场景触发隐藏条件）
            if (scene.autoTriggerCondition) {
                this.triggerConfessionCondition(scene.autoTriggerCondition);
            }
            // 进入下一场景
            const nextSceneIndex = this.currentChapter.scenes.findIndex(s => s.id === scene.next);
            if (nextSceneIndex !== -1) {
                this.loadScene(nextSceneIndex);
            } else {
                // 可能是跨场景ID，查找所有场景
                this.findAndLoadScene(scene.next);
            }
        } else {
            // 章节结束
            this.showChapterEnd();
        }
    }
    
    // 检查条件是否满足
    checkCondition(condition) {
        if (!condition) return false;
        
        // 格式: "confessionCondition:xxx"
        if (condition.startsWith('confessionCondition:')) {
            const target = condition.replace('confessionCondition:', '');
            console.log('[debug] checkCondition - 完整confessionFlags:', JSON.stringify(this.confessionFlags));
            const result = this.confessionFlags && this.confessionFlags[target] === true;
            console.log('[debug] checkCondition - condition:', condition, 'target:', target, 'result:', result);
            return result;
        }
        
        // 其他条件类型可以在这里扩展
        return false;
    }

    // 查找并加载场景
    findAndLoadScene(sceneId) {
        // 记录场景切换历史
        this.recordSceneTransition(sceneId);
        
        // 木星线多结局选择
        if (sceneId === 'xw_3_end_selector') {
            const love = this.affinity.xiao_tong ? this.affinity.xiao_tong.love || 0 : 0;
            if (love >= 25) this.loadChapter('xia_wan_chapter3', 'xw_3_end_he');
            else if (love >= 15) this.loadChapter('xia_wan_chapter3', 'xw_3_end_open');
            else if (love >= 5) this.loadChapter('xia_wan_chapter3', 'xw_3_end_friend');
            else this.loadChapter('xia_wan_chapter3', 'xw_3_end_be');
            return;
        }
        // 谨言线多结局选择
        if (sceneId === 'xw_3_lr_end_selector') {
            const love = this.affinity.long_xinheng ? this.affinity.long_xinheng.love || 0 : 0;
            if (love >= 25) this.loadChapter('xia_wan_chapter3_longxinheng', 'xw_3_lr_end_he');
            else if (love >= 15) this.loadChapter('xia_wan_chapter3_longxinheng', 'xw_3_lr_end_open');
            else if (love >= 5) this.loadChapter('xia_wan_chapter3_longxinheng', 'xw_3_lr_end_friend');
            else this.loadChapter('xia_wan_chapter3_longxinheng', 'xw_3_lr_end_be');
            return;
        }
        // 方圆线多结局选择
        if (sceneId === 'xw_3_gz_end_selector') {
            const love = this.affinity.gan_zhiyu ? this.affinity.gan_zhiyu.love || 0 : 0;
            if (love >= 25) this.loadChapter('xia_wan_chapter3_ganzhiyu', 'xw_3_gz_end_he');
            else if (love >= 15) this.loadChapter('xia_wan_chapter3_ganzhiyu', 'xw_3_gz_end_open');
            else if (love >= 5) this.loadChapter('xia_wan_chapter3_ganzhiyu', 'xw_3_gz_end_friend');
            else this.loadChapter('xia_wan_chapter3_ganzhiyu', 'xw_3_gz_end_be');
            return;
        }
        // 吴琊线多结局选择
        if (sceneId === 'xw_3_wy_end_selector') {
            const love = this.affinity.wu_ya ? this.affinity.wu_ya.love || 0 : 0;
            if (love >= 25) this.loadChapter('xia_wan_chapter3_wuya', 'xw_3_wy_end_he');
            else if (love >= 15) this.loadChapter('xia_wan_chapter3_wuya', 'xw_3_wy_end_open');
            else if (love >= 5) this.loadChapter('xia_wan_chapter3_wuya', 'xw_3_wy_end_friend');
            else this.loadChapter('xia_wan_chapter3_wuya', 'xw_3_wy_end_be');
            return;
        }
        // 在当前章节中查找
        const sceneIndex = this.currentChapter.scenes.findIndex(s => s.id === sceneId);
        if (sceneIndex !== -1) {
            this.loadScene(sceneIndex);
            return;
        }
        
        // 特殊处理：加载下一章
        if (sceneId === 'chapter2' || sceneId === 'next_chapter') {
            this.loadNextChapter();
            return;
        }

        // =============================================
        // 第三章入口处理
        // =============================================
        // 如果是夏晚线，且场景ID是第三章的场景，则加载第三章
        if (this.currentRoute === 'xia_wan') {
            // 木星线入口
            if (sceneId.startsWith('xw_3_') && !sceneId.startsWith('xw_3_lr_') && !sceneId.startsWith('xw_3_gz_') && !sceneId.startsWith('xw_3_wy_')) {
                this.loadChapter('xia_wan_chapter3');
                return;
            }
            // 谨言线入口
            if (sceneId.startsWith('xw_3_lr_')) {
                this.loadChapter('xia_wan_chapter3_longxinheng');
                return;
            }
            // 方圆线入口
            if (sceneId.startsWith('xw_3_gz_')) {
                this.loadChapter('xia_wan_chapter3_ganzhiyu');
                return;
            }
            // 吴琊线入口
            if (sceneId.startsWith('xw_3_wy_')) {
                this.loadChapter('xia_wan_chapter3_wuya');
                return;
            }
        }

        // =============================================
        // 第五章入口处理（恋人线 + 单身线统一在 xia_wan_chapter5）
        // =============================================
        if (this.currentRoute === 'xia_wan' && sceneId.startsWith('xw_5_')) {
            this.loadChapter('xia_wan_chapter5', sceneId);
            return;
        }

        // 如果找不到，显示章节结束
        this.showChapterEnd();
    }
    
    // 加载下一章
    loadNextChapter() {
        if (this.currentRoute === 'xia_wan') {
            this.loadChapter('xia_wan_chapter2');
        } else if (this.currentRoute === 'zhou_yan') {
            this.loadChapter('zhou_yan_chapter2');
        }
    }

    // 显示选项
    showChoices(choices) {
        const container = document.getElementById('choices-container');
        if (!container) return;

        container.innerHTML = '';
        container.classList.add('show');

        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.onclick = () => this.makeChoice(choice);
            container.appendChild(btn);
        });
    }

    // 隐藏选项
    hideChoices() {
        const container = document.getElementById('choices-container');
        if (container) {
            container.classList.remove('show');
        }
    }

    // 做出选择
    makeChoice(choice) {
        // 播放选择音效
        if (window.audioManager) {
            audioManager.playSFX('select');
        }

        // 追踪第一章选择（夏晚线）
        if (choice.next === 'xw_1_1_a') {
            this.firstChapterChoice = 'mystery';
        } else if (choice.next === 'xw_1_1_b') {
            this.firstChapterChoice = 'emotion';
        }
        
        // 追踪观察角色（夏晚线推理本/情感本等待开场时的观察选择）
        if (this.currentRoute === 'xia_wan' && choice.next) {
            // 观察谨言
            if (choice.next === 'xw_1_2_a_mystery' || choice.next === 'xw_1_2_a_emotion') {
                this.observedCharacter = 'long_xinheng';
            }
            // 观察方圆
            else if (choice.next === 'xw_1_2_b_mystery' || choice.next === 'xw_1_2_b_emotion') {
                this.observedCharacter = 'gan_zhiyu';
            }
            // 观察吴琊
            else if (choice.next === 'xw_1_2_c_mystery' || choice.next === 'xw_1_2_c_emotion') {
                this.observedCharacter = 'wu_ya';
            }
            // 观察虹猫/苏馨悦
            else if (choice.next === 'xw_1_2_d_mystery' || choice.next === 'xw_1_2_d_emotion') {
                this.observedCharacter = 'su_xinyue';
            }
        }

        // 应用好感度变化
        if (choice.affinity) {
            Object.entries(choice.affinity).forEach(([char, value]) => {
                this.updateAffinity(char, value, 'love');
            });
        }
        
        // 处理友情值变化
        if (choice.friendship) {
            Object.entries(choice.friendship).forEach(([char, value]) => {
                this.updateAffinity(char, value, 'friend');
            });
        }

        // 处理修复指数变化（第五章和好系统）
        if (choice.repair !== undefined && choice.repair !== 0) {
            const oldScore = this.repairScore;
            this.repairScore += choice.repair;
            // 限制在-30到+30之间
            this.repairScore = Math.max(-30, Math.min(30, this.repairScore));
            console.log(`[修复指数] ${oldScore} -> ${this.repairScore} (${choice.repair > 0 ? '+' : ''}${choice.repair})`);
        }

        // 处理告白隐藏条件触发
        if (choice.confessionCondition) {
            console.log('[debug] handleChoiceClick - confessionCondition:', choice.confessionCondition);
            this.triggerConfessionCondition(choice.confessionCondition);
        }

        this.hideChoices();

        // 处理章节跳转（如果choice指定了loadChapter）
        if (choice.loadChapter) {
            // 记录章节切换历史
            const targetSceneId = typeof choice.next === 'string' ? choice.next : 'chapter_start';
            this.recordSceneTransition(targetSceneId);
            this.loadChapter(choice.loadChapter, choice.next || true);
            return;
        }

        // 进入下一场景
        if (choice.next) {
            // 检查是否是第五章各线结局入口（需要根据repairScore跳转）
            let targetScene = choice.next;
            if (this.relationship && targetScene.startsWith('xw_5_lover_') && targetScene.endsWith('_end')) {
                targetScene = this.getRepairEndingScene(targetScene);
            }

            // 记录场景切换历史
            this.recordSceneTransition(targetScene);
            const nextSceneIndex = this.currentChapter.scenes.findIndex(s => s.id === targetScene);
            if (nextSceneIndex !== -1) {
                this.loadScene(nextSceneIndex);
            } else {
                this.findAndLoadScene(targetScene);
            }
        }
    }

    // 根据修复指数获取对应的结局场景ID
    getRepairEndingScene(baseEndScene) {
        // baseEndScene格式：xw_5_lover_longxinheng_end 或 xw_5_lover_ganzhiyu_end 等
        // 根据repairScore决定结局类型
        if (this.repairScore >= 15) {
            // 甜蜜和好
            return baseEndScene.replace('_end', '_end_sweet');
        } else if (this.repairScore >= 5) {
            // 普通和好
            return baseEndScene.replace('_end', '_end_normal');
        } else {
            // 冷淡疏远
            return baseEndScene.replace('_end', '_end_cold');
        }
    }

    // 更新好感度
    updateAffinity(character, value, type = 'love') {
        if (!this.affinity[character]) {
            console.warn(`好感度更新失败: 角色 ${character} 不存在`);
            return;
        }
        
        const oldValue = this.affinity[character][type];
        this.affinity[character][type] += value;
        // 限制在0-100之间
        this.affinity[character][type] = Math.max(0, Math.min(100, this.affinity[character][type]));
        
        console.log(`好感度更新 (${type}): ${character} ${oldValue} -> ${this.affinity[character][type]} (+${value})`);
        
        // 显示好感度变化提示
        this.showAffinityChangeNotification(character, value, type);
        
        // 如果好感度面板是打开的，实时更新显示
        const panel = document.getElementById('affinity-panel');
        if (panel && panel.classList.contains('show')) {
            this.updateAffinityDisplay();
        }
    }

    // 显示好感度变化提示
    showAffinityChangeNotification(character, value, type = 'love') {
        const characterData = storyData.characters[character];
        if (!characterData) return;

        const notification = document.createElement('div');
        notification.className = 'affinity-notification';
        
        const isPositive = value > 0;
        const sign = isPositive ? '+' : '';
        // 爱情线用红色心形，友情线用绿色星星
        const icon = type === 'love' ? (isPositive ? '♥' : '♡') : (isPositive ? '★' : '☆');
        
        // 根据类型设置颜色：爱情线红色，友情线绿色
        const bgColor = type === 'love' 
            ? 'linear-gradient(135deg, rgba(255,182,193,0.95), rgba(255,150,150,0.95))'
            : 'linear-gradient(135deg, rgba(144,238,144,0.95), rgba(152,251,152,0.95))';
        const shadowColor = type === 'love' ? 'rgba(255,182,193,0.4)' : 'rgba(144,238,144,0.4)';
        const valueColor = type === 'love' ? '#e91e63' : '#2e7d32';
        
        notification.innerHTML = `
            <span class="affinity-icon">${icon}</span>
            <span class="affinity-char">${characterData.name}</span>
            <span class="affinity-value ${isPositive ? 'positive' : 'negative'}" style="color: ${valueColor}">${sign}${value}</span>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${bgColor};
            color: #333;
            padding: 12px 20px;
            border-radius: 25px;
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0 4px 15px ${shadowColor};
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1000;
            animation: affinityPopup 0.5s ease-out;
            border: 2px solid rgba(255,255,255,0.5);
        `;
        
        // 添加动画样式（如果还没有）
        if (!document.getElementById('affinity-anim-style')) {
            const style = document.createElement('style');
            style.id = 'affinity-anim-style';
            style.textContent = `
                @keyframes affinityPopup {
                    0% { transform: translateX(100px); opacity: 0; }
                    50% { transform: translateX(-10px); opacity: 1; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                @keyframes affinityFadeOut {
                    0% { transform: translateX(0); opacity: 1; }
                    100% { transform: translateX(20px); opacity: 0; }
                }
                .affinity-notification .affinity-icon {
                    font-size: 20px;
                }
                .affinity-notification .affinity-value.positive {
                    color: #e91e63;
                }
                .affinity-notification .affinity-value.negative {
                    color: #666;
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // 2秒后自动消失
        setTimeout(() => {
            notification.style.animation = 'affinityFadeOut 0.5s ease-out forwards';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 2000);
    }

    // 显示美观弹窗
    showModalPopup(options) {
        const {
            title = '',
            subtitle = '',
            endingType = null,  // 'he', 'open', 'friend', 'be'
            message = '',
            buttonText = '确定',
            buttonAction = null,
            showDecorations = true
        } = options;

        // 结局类型对应的颜色和图标
        const endingConfig = {
            'he': { color: '#ffd700', icon: '💕', text: '好结局', glow: 'rgba(255, 215, 0, 0.5)' },
            'open': { color: '#87ceeb', icon: '✨', text: '开放结局', glow: 'rgba(135, 206, 235, 0.5)' },
            'friend': { color: '#98d8aa', icon: '🌿', text: '友情结局', glow: 'rgba(152, 216, 170, 0.5)' },
            'be': { color: '#ff6b6b', icon: '💔', text: '遗憾结局', glow: 'rgba(255, 107, 107, 0.5)' }
        };

        const config = endingType ? endingConfig[endingType] : { color: '#ffd700', icon: '🌟', text: '', glow: 'rgba(255, 215, 0, 0.3)' };

        // 隐藏对话框
        const dialogueBox = document.getElementById('dialogue-box');
        if (dialogueBox) dialogueBox.style.display = 'none';

        // 创建弹窗背景
        const overlay = document.createElement('div');
        overlay.id = 'modal-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.5s ease;
        `;

        // 创建弹窗
        const modal = document.createElement('div');
        modal.id = 'modal-popup';
        modal.style.cssText = `
            background: linear-gradient(135deg, rgba(20, 20, 40, 0.95), rgba(40, 20, 60, 0.95));
            border: 2px solid ${config.color};
            border-radius: 20px;
            padding: 40px 50px;
            text-align: center;
            max-width: 500px;
            box-shadow: 0 0 60px ${config.glow}, 0 20px 60px rgba(0,0,0,0.5);
            animation: modalPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
        `;

        // 装饰元素
        let decorations = '';
        if (showDecorations) {
            decorations = `
                <div style="position: absolute; top: -20px; left: -20px; width: 60px; height: 60px; border: 2px solid ${config.color}; border-radius: 50%; opacity: 0.3;"></div>
                <div style="position: absolute; bottom: -30px; right: -30px; width: 80px; height: 80px; border: 2px solid ${config.color}; border-radius: 50%; opacity: 0.2;"></div>
                <div style="position: absolute; top: 10px; right: 20px; font-size: 40px; opacity: 0.1;">✦</div>
                <div style="position: absolute; bottom: 20px; left: 20px; font-size: 30px; opacity: 0.1;">✦</div>
            `;
        }

        // 结局图标（大）
        let endingIconHtml = '';
        if (endingType && config.icon) {
            endingIconHtml = `<div style="font-size: 60px; margin-bottom: 15px; animation: pulse 2s infinite;">${config.icon}</div>`;
        }

        // 副标题
        let subtitleHtml = '';
        if (subtitle) {
            subtitleHtml = `<p style="font-size: 1rem; color: rgba(255,255,255,0.6); margin-top: 8px;">${subtitle}</p>`;
        }

        // 消息
        let messageHtml = '';
        if (message) {
            messageHtml = `<p style="font-size: 1.1rem; color: rgba(255,255,255,0.8); margin: 20px 0; line-height: 1.6;">${message}</p>`;
        }

        modal.innerHTML = `
            ${decorations}
            ${endingIconHtml}
            ${title ? `<h2 style="color: ${config.color}; font-size: 1.8rem; margin: 0; text-shadow: 0 0 20px ${config.glow};">${title}</h2>` : ''}
            ${subtitleHtml}
            ${messageHtml}
            <button id="modal-btn" style="
                margin-top: 25px;
                padding: 12px 40px;
                font-size: 1.1rem;
                background: linear-gradient(135deg, ${config.color}, ${config.color}88);
                border: none;
                border-radius: 30px;
                color: #1a1a2e;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 20px ${config.glow};
            ">${buttonText}</button>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // 添加按钮事件
        const btn = document.getElementById('modal-btn');
        if (btn) {
            btn.onmouseover = () => {
                btn.style.transform = 'scale(1.05)';
                btn.style.boxShadow = `0 6px 30px ${config.glow}`;
            };
            btn.onmouseout = () => {
                btn.style.transform = 'scale(1)';
                btn.style.boxShadow = `0 4px 20px ${config.glow}`;
            };
            btn.onclick = () => {
                this.closeModal();
                if (buttonAction) buttonAction();
            };
        }

        // 点击背景关闭
        overlay.onclick = (e) => {
            if (e.target === overlay) {
                this.closeModal();
                if (buttonAction) buttonAction();
            }
        };

        // 添加动画样式
        this.addModalStyles();
    }

    // 关闭弹窗
    closeModal() {
        const overlay = document.getElementById('modal-overlay');
        if (overlay) {
            overlay.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => overlay.remove(), 300);
        }
        // 恢复对话框显示
        const dialogueBox = document.getElementById('dialogue-box');
        if (dialogueBox) dialogueBox.style.display = 'block';
    }

    // 添加弹窗动画样式
    addModalStyles() {
        if (document.getElementById('modal-animations')) return;
        const style = document.createElement('style');
        style.id = 'modal-animations';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            @keyframes modalPop {
                from { transform: scale(0.8); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        `;
        document.head.appendChild(style);
    }

    // 显示章节结束
    showChapterEnd() {
        this.showModalPopup({
            title: '完',
            subtitle: '感谢游玩Demo版本',
            buttonText: '返回主菜单',
            buttonAction: () => this.backToMenu()
        });
    }

    // 显示第三章结束屏幕并进入第四章
    showChapter3EndScreen() {
        const endingTypeText = {
            'he': '好结局',
            'open': '开放结局',
            'friend': '友情结局',
            'be': '遗憾结局'
        };
        const endingName = endingTypeText[this.chapter3EndingType] || '结局';

        this.showModalPopup({
            title: `第三章「心动」${endingName}`,
            subtitle: '完',
            endingType: this.chapter3EndingType,
            message: '即将进入第四章「甜蜜与危机」',
            buttonText: '继续',
            buttonAction: () => this.enterChapter4()
        });
    }

    // 显示BE结局提示（擦肩而过）
    showBEEndingPopup(endingName) {
        this.showModalPopup({
            title: `【BE · ${endingName}】`,
            subtitle: '擦肩而过',
            endingType: 'be',
            message: '有些人，错过了就是一辈子...',
            buttonText: '确定',
            buttonAction: null
        });
    }

    // 进入第四章
    enterChapter4() {
        console.log('[game] 进入第四章');
        
        // 重置第四章告白相关状态（如果是新进入第四章）
        if (!this.relationship) {
            // 初始化告白隐藏条件（根据之前的互动）
            this.initConfessionFlags();
        }
        
        this.loadChapter('xia_wan_chapter4');
    }

    // 触发告白隐藏条件
    triggerConfessionCondition(condition) {
        const conditionMap = {
            'xiaotong': 'xiaotong',      // 木星：看到他认真工作的样子
            'longxinheng': 'longxinheng', // 谨言：看到他孤独的一面
            'ganzhiyu': 'ganzhiyu',       // 方圆：认可他的能力
            'wuya': 'wuya'                // 吴琊：感受到他的温柔
        };

        const flagKey = conditionMap[condition];
        if (flagKey) {
            this.confessionFlags[flagKey] = true;
            console.log(`[game] 告白隐藏条件已触发: ${condition} -> confessionFlags.${flagKey} = true`);
            
            // 显示隐藏条件触发通知
            const conditionNames = {
                'xiaotong': '木星',
                'longxinheng': '谨言',
                'ganzhiyu': '方圆',
                'wuya': '吴琊'
            };
            this.showConfessionConditionNotification(conditionNames[flagKey], flagKey);
        }
    }
    
    // 显示隐藏条件触发通知
    showConfessionConditionNotification(characterName, flagKey) {
        // 条件描述
        const conditionDescriptions = {
            'xiaotong': '「我们都害怕失去对方」',
            'longxinheng': '「他是第一个愿意在我面前安静的人」',
            'ganzhiyu': '「他的眼睛因为我重新亮起来」',
            'wuya': '「他笨拙的温柔，只对我展现」'
        };
        
        const description = conditionDescriptions[flagKey] || '';
        
        // 创建通知
        const notification = document.createElement('div');
        notification.id = 'confession-condition-notification';
        notification.innerHTML = `
            <div class="condition-content">
                <div class="condition-icon">✦</div>
                <div class="condition-text">
                    <div class="condition-title">告白条件已解锁</div>
                    <div class="condition-character">${characterName}</div>
                    <div class="condition-desc">${description}</div>
                </div>
            </div>
        `;
        
        // 添加样式
        const style = document.createElement('style');
        style.id = 'confession-condition-style';
        style.textContent = `
            #confession-condition-notification {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 9999;
                animation: conditionShow 3s ease forwards;
            }
            #confession-condition-notification .condition-content {
                background: linear-gradient(135deg, rgba(147,112,219,0.95), rgba(138,43,226,0.95));
                border-radius: 16px;
                padding: 25px 40px;
                text-align: center;
                box-shadow: 0 10px 40px rgba(138,43,226,0.4);
                border: 2px solid rgba(255,255,255,0.4);
            }
            #confession-condition-notification .condition-icon {
                font-size: 3rem;
                color: #fff;
                text-shadow: 0 0 15px rgba(255,255,255,0.8);
                animation: starTwinkle 1s ease infinite;
            }
            #confession-condition-notification .condition-title {
                font-size: 1.3rem;
                color: #fff;
                font-weight: bold;
                margin-top: 8px;
                text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            #confession-condition-notification .condition-character {
                font-size: 1.1rem;
                color: rgba(255,255,255,0.95);
                margin-top: 5px;
            }
            #confession-condition-notification .condition-desc {
                font-size: 0.9rem;
                color: rgba(255,255,255,0.8);
                margin-top: 8px;
                font-style: italic;
            }
            @keyframes conditionShow {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                15% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
                25% { transform: translate(-50%, -50%) scale(1); }
                75% { opacity: 1; }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
            }
            @keyframes starTwinkle {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.7; transform: scale(1.1); }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // 3秒后移除
        setTimeout(() => {
            notification.remove();
            const oldStyle = document.getElementById('confession-condition-style');
            if (oldStyle) oldStyle.remove();
        }, 3000);
        
        console.log('[game] 告白条件解锁通知:', characterName, description);
    }

    // 初始化告白隐藏条件（从存档恢复）
    initConfessionFlags() {
        // 注意：隐藏条件由玩家在游戏过程中通过选择触发
        // 此函数仅用于从存档恢复时确保flag状态正确
        // 不再自动根据爱情度设置，需要玩家主动选择触发

        // 检查是否有任何隐藏条件已经被触发过
        const anyTriggered = Object.values(this.confessionFlags).some(v => v === true);
        if (!anyTriggered) {
            // 如果没有任何触发条件，尝试从存档恢复
            // 实际上存档已经在loadGameState中恢复了，这里只是打印日志
            console.log('[game] 告白隐藏条件（从存档恢复）:', this.confessionFlags);
        } else {
            console.log('[game] 告白隐藏条件初始化:', this.confessionFlags);
        }
    }

    // 显示恋爱关系确立通知
    showRelationshipNotification(characterId) {
        // 设定恋爱关系（恋爱关系唯一）
        this.relationship = characterId;
        
        const characterNames = {
            'xiao_tong': '木星',
            'long_xinheng': '谨言',
            'gan_zhiyu': '方圆',
            'wu_ya': '吴琊'
        };
        
        const name = characterNames[characterId] || characterId;
        
        // 创建通知
        const notification = document.createElement('div');
        notification.id = 'relationship-notification';
        notification.innerHTML = `
            <div class="relationship-content">
                <div class="relationship-icon">♥</div>
                <div class="relationship-text">
                    <div class="relationship-title">进入恋爱关系</div>
                    <div class="relationship-partner">与 ${name}</div>
                </div>
            </div>
        `;
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            #relationship-notification {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 9999;
                animation: relationshipShow 3s ease forwards;
            }
            #relationship-notification .relationship-content {
                background: linear-gradient(135deg, rgba(255,182,193,0.95), rgba(255,105,180,0.95));
                border-radius: 20px;
                padding: 30px 50px;
                text-align: center;
                box-shadow: 0 10px 40px rgba(255,105,180,0.5);
                border: 3px solid rgba(255,255,255,0.5);
            }
            #relationship-notification .relationship-icon {
                font-size: 4rem;
                color: #fff;
                text-shadow: 0 0 20px rgba(255,255,255,0.8);
                animation: heartBeat 1s ease infinite;
            }
            #relationship-notification .relationship-title {
                font-size: 1.5rem;
                color: #fff;
                font-weight: bold;
                margin-top: 10px;
                text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            #relationship-notification .relationship-partner {
                font-size: 1.2rem;
                color: rgba(255,255,255,0.9);
                margin-top: 5px;
            }
            @keyframes relationshipShow {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                30% { transform: translate(-50%, -50%) scale(1); }
                80% { opacity: 1; }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            }
            @keyframes heartBeat {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // 3秒后移除
        setTimeout(() => {
            notification.remove();
        }, 3000);
        
        // 更新好感度面板显示
        this.updateAffinityDisplayWithRelationship();
        
        console.log('[game] 恋爱关系确立:', name);
    }

    // 更新好感度面板显示（带恋爱关系标记）
    updateAffinityDisplayWithRelationship() {
        // 检查好感度面板是否存在
        const panel = document.getElementById('affinity-panel');
        if (panel) {
            this.updateAffinityDisplay();
        }
    }

    // 检查是否已经处于恋爱关系
    isInRelationship() {
        return this.relationship !== null;
    }

    // 获取当前恋爱对象
    getCurrentPartner() {
        return this.relationship;
    }

    // 切换屏幕
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const target = document.getElementById(screenId);
        if (target) {
            target.classList.add('active');
        }
    }

    // 返回主菜单
    backToMenu() {
        // 停止背景音乐
        if (window.audioManager) {
            audioManager.stopMusic();
        }
        this.showScreen('main-menu');
    }

    // 切换游戏菜单
    toggleMenu() {
        const menu = document.getElementById('game-menu');
        if (menu) {
            menu.classList.toggle('show');
        }
    }

    // 切换开发者面板
    toggleDevPanel() {
        const devPanel = document.getElementById('dev-panel');
        const menu = document.getElementById('game-menu');
        if (devPanel) {
            if (devPanel.classList.contains('show')) {
                // 关闭开发者面板
                devPanel.classList.remove('show');
            } else {
                // 关闭游戏菜单，打开开发者面板
                if (menu) menu.classList.remove('show');
                devPanel.classList.add('show');
                // 打开时刷新状态显示
                this.devSyncRelationshipDisplay();
                this.devUpdateStatus();
            }
        }
    }

    // 同步情侣关系显示
    devSyncRelationshipDisplay() {
        const names = {
            'xiao_tong': '木星',
            'long_xinheng': '谨言',
            'gan_zhiyu': '方圆',
            'wu_ya': '吴琊',
        };
        const statusEl = document.getElementById('dev-relationship-status');
        if (statusEl) {
            statusEl.textContent = this.relationship ? (names[this.relationship] || this.relationship) : '无';
        }
    }

    // 开发者：跳转到指定节点
    devJump(nodeId) {
        // 确定路线
        let route = 'xia_wan';
        if (nodeId.startsWith('zy_')) {
            route = 'zhou_yan';
        } else if (nodeId.startsWith('xw_')) {
            route = 'xia_wan';
        }
        
        // 初始化好感度
        this.initAffinity(route);
        this.currentRoute = route;
        
        // 在所有章节中查找节点（周砚线1-2章，夏晚线1-5章+扩展）
        const chapterKeys = [route + '_chapter1', route + '_chapter2', route + '_chapter3', route + '_chapter4', route + '_chapter5'];
        // 添加夏晚线扩展章节
        if (route === 'xia_wan') {
            chapterKeys.push('xia_wan_chapter2_extend', 'xia_wan_chapter3_longxinheng', 'xia_wan_chapter3_ganzhiyu', 'xia_wan_chapter3_wuya');
        }
        let foundChapter = null;
        let foundIndex = -1;
        
        for (const chapterKey of chapterKeys) {
            const chapterData = storyData[chapterKey];
            if (!chapterData || !chapterData.scenes) continue;
            
            const index = chapterData.scenes.findIndex(scene => scene.id === nodeId);
            if (index >= 0) {
                foundChapter = chapterKey;
                foundIndex = index;
                break;
            }
        }
        
        if (foundChapter && foundIndex >= 0) {
            // 直接加载章节（跳过动画）并跳转
            this.loadChapterDirect(foundChapter, foundIndex);
            this.showToast(`已跳转: ${nodeId}`);
        } else {
            this.showToast(`未找到节点: ${nodeId}`);
        }
        
        this.toggleDevPanel();
        const menu = document.getElementById('game-menu');
        if (menu) menu.classList.remove('show');
    }

    // 开发者：直接加载章节并跳转（无动画）
    loadChapterDirect(chapterKey, sceneIndex) {
        const chapter = storyData[chapterKey];
        if (!chapter) {
            console.error('章节不存在:', chapterKey);
            return;
        }

        this.currentChapter = chapter;
        this.loadScene(sceneIndex);
        this.updateChapterDisplay();
        this.initAudioAndPlay();
    }

    // 开发者：通过节点ID跳转
    devJumpById() {
        const nodeId = document.getElementById('dev-node-id')?.value?.trim();
        if (!nodeId) {
            this.showToast('请输入节点ID');
            return;
        }
        this.devJump(nodeId);
    }

    // 开发者：重置好感度
    devResetAffinity(route) {
        this.initAffinity(route);
        this.currentRoute = route;
        this.updateAffinityDisplay();
        this.showToast(`已重置 ${route === 'xia_wan' ? '夏晚线' : '周砚线'} 好感度`);
    }

    // 开发者：好感度增加
    devAddAffinity(route, charId, amount) {
        if (!this.affinity[charId]) {
            this.affinity[charId] = { love: 0, friendship: 0 };
        }
        this.affinity[charId].love += amount;
        this.affinity[charId].friendship += amount;
        this.updateAffinityDisplay();
        this.showToast(`${charId} 好感+${amount}`);
    }

    // 开发者：播放测试音乐
    devPlayMusic(musicKey) {
        if (musicKey === 'stop') {
            if (window.audioManager) {
                audioManager.stopBGM();
            }
            this.showToast('音乐已停止');
            return;
        }
        if (window.audioManager && window.storyMoment) {
            const musicPath = storyMoment[musicKey];
            if (musicPath) {
                audioManager.playBGM(musicPath, true);
                this.showToast(`播放: ${musicKey}`);
            } else {
                this.showToast(`未找到音乐: ${musicKey}`);
            }
        }
    }

    // 开发者：更新状态显示
    // 开发者工具：设置情侣关系
    devSetRelationship(characterId) {
        const names = {
            'xiao_tong': '木星',
            'long_xinheng': '谨言',
            'gan_zhiyu': '方圆',
            'wu_ya': '吴琊',
        };
        this.relationship = characterId;
        const statusEl = document.getElementById('dev-relationship-status');
        if (statusEl) {
            statusEl.textContent = characterId ? (names[characterId] || characterId) : '无';
        }
        // 同步更新当前状态面板
        this.devUpdateStatus();
        console.log('[dev] 情侣关系设置为:', characterId || '无');
    }

    devUpdateStatus() {
        const statusDiv = document.getElementById('dev-status');
        if (!statusDiv) return;
        
        const currentNode = this.currentScene?.id || '无';
        const route = this.currentRoute || '无';
        const chapter = this.currentChapter?.title || '无';
        const relationship = this.isInRelationship() ? this.relationship : '无';
        
        let affinityInfo = '';
        if (this.affinity) {
            const charNames = {
                'xiao_tong': '木星',
                'long_xinheng': '谨言',
                'gan_zhiyu': '方圆',
                'wu_ya': '吴琊'
            };
            for (const [charId, values] of Object.entries(this.affinity)) {
                if (values.love !== undefined) {
                    const name = charNames[charId] || charId;
                    affinityInfo += `${name}: ♥${values.love} ★${values.friendship}\n`;
                }
            }
        }
        
        statusDiv.innerHTML = `
            <div>当前路线: <span style="color:#88f;">${route}</span></div>
            <div>当前章节: <span style="color:#8f8;">${chapter}</span></div>
            <div>当前节点: <span style="color:#ff8;">${currentNode}</span></div>
            <div>恋爱关系: <span style="color:#f88;">${relationship}</span></div>
            ${affinityInfo ? '<div style="margin-top:8px;border-top:1px solid #444;padding-top:8px;">好感度:</div>' + affinityInfo : ''}
        `;
    }

    // ==================== 音乐测试面板 ====================
    
    // 选中的音乐
    _selectedMusic = null;
    
    // 切换音乐测试面板
    toggleMusicPanel() {
        const panel = document.getElementById('music-panel');
        const menu = document.getElementById('game-menu');
        if (panel) {
            if (panel.classList.contains('show')) {
                // 关闭
                panel.classList.remove('show');
            } else {
                // 关闭游戏菜单，打开音乐面板
                if (menu) menu.classList.remove('show');
                panel.classList.add('show');
                // 更新当前节点显示
                this._updateMusicPanelInfo();
            }
        }
    }
    
    // 更新音乐面板信息
    _updateMusicPanelInfo() {
        const currentNode = this.currentScene?.id || '无';
        const currentMusicEl = document.getElementById('music-current-node');
        const currentMusicInfoEl = document.getElementById('music-current-music');
        
        if (currentMusicEl) {
            currentMusicEl.textContent = currentNode;
        }
        if (currentMusicInfoEl) {
            // 获取当前节点配置的音乐
            const moodConfig = window.audioManager?.sceneMoodMap?.[currentNode];
            const musicKey = moodConfig?.mp3Moment || '无';
            currentMusicInfoEl.textContent = `当前配置: ${musicKey}`;
        }
    }
    
    // 选择音乐
    musicSelect(musicKey) {
        this._selectedMusic = musicKey;
        
        // 更新按钮样式
        document.querySelectorAll('.music-select-btn').forEach(btn => {
            if (btn.dataset.music === musicKey) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        });
        
        // 更新显示
        const selectedEl = document.getElementById('music-selected');
        if (selectedEl) {
            selectedEl.textContent = musicKey || '无';
        }
    }
    
    // 播放选中的音乐
    musicTestPlay() {
        if (!this._selectedMusic) {
            alert('请先选择一个音乐');
            return;
        }
        
        if (window.audioManager) {
            window.audioManager.playMP3ByStoryMoment(this._selectedMusic, 1000, true);
            console.log('[音乐测试] 播放:', this._selectedMusic);
        }
    }
    
    // 停止音乐
    musicTestStop() {
        if (window.audioManager) {
            window.audioManager.stopMusic();
            console.log('[音乐测试] 停止播放');
        }
    }
    
    // 跳转到第五章入口
    musicJumpChapter5() {
        this.devJump('xw_5_start');
        this._updateMusicPanelInfo();
    }
    
    // 跳转各条线
    musicJumpLine(line) {
        const nodes = {
            'xiaotong': 'xw_5_lover_xiaotong_1',
            'longxinheng': 'xw_5_lover_longxinheng_1',
            'ganzhiyu': 'xw_5_lover_ganzhiyu_1',
            'wuya': 'xw_5_lover_wuya_1',
            'single': 'xw_5_single_1'
        };
        if (nodes[line]) {
            this.devJump(nodes[line]);
            this._updateMusicPanelInfo();
        }
    }
    
    // 跳转到指定节点
    musicJumpToNode() {
        const input = document.getElementById('music-node-input');
        if (input && input.value.trim()) {
            this.devJump(input.value.trim());
            this._updateMusicPanelInfo();
        }
    }
    
    // 保存音乐配置 → 自动写入 audio.js
    async musicSaveConfig() {
        if (!this._selectedMusic) {
            alert('请先选择一个音乐');
            return;
        }

        const currentNode = this.currentScene?.id;
        if (!currentNode) {
            alert('当前没有节点');
            return;
        }

        // 1. 先更新内存中的 sceneMoodMap（立即生效）
        if (window.audioManager?.sceneMoodMap) {
            window.audioManager.sceneMoodMap[currentNode] = {
                mp3Moment: this._selectedMusic,
                ambient: 'shop'
            };
        }

        // 2. 发送到服务器自动写入 audio.js
        const serverUrl = 'http://localhost:8080/save-music';
        const configPayload = {
            nodeId: currentNode,
            mp3Moment: this._selectedMusic,
            ambient: 'shop'
        };

        try {
            const response = await fetch(serverUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(configPayload)
            });
            const result = await response.json();

            if (result.success) {
                const configText = `'${currentNode}': { mp3Moment: '${this._selectedMusic}', ambient: 'shop' },`;
                console.log('[音乐配置] 已写入 audio.js:', configText);
                alert(`✓ 配置已自动保存到 audio.js！\n\n节点: ${currentNode}\n音乐: ${this._selectedMusic}\n\n如需下次游戏也生效，请刷新页面（F5）让 audio.js 重新加载。`);
            } else {
                alert(`服务器保存失败: ${result.message}\n\n配置文本已复制到剪贴板，请手动添加到 audio.js。`);
                this._copyConfigToClipboard(configText);
            }
        } catch (e) {
            // 服务器未启动，降级为手动复制
            console.warn('[音乐配置] 服务器未启动，降级为手动模式:', e.message);
            const configText = `'${currentNode}': { mp3Moment: '${this._selectedMusic}', ambient: 'shop' },`;
            const hint = `服务器未启动，请先运行:\n\n  python music_server.py\n\n或者手动复制以下配置到 audio.js 的 sceneMoodMap 中:\n\n${configText}`;
            alert(hint);
            this._copyConfigToClipboard(configText);
        }
    }

    // 复制配置到剪贴板（降级备用）
    _copyConfigToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        }
        console.log('[音乐配置]', text);
    }

    // 切换好感度面板
    toggleAffinity() {
        const panel = document.getElementById('affinity-panel');
        if (panel) {
            panel.classList.toggle('show');
            if (panel.classList.contains('show')) {
                this.updateAffinityDisplay();
            }
        }
    }

    // 更新好感度显示
    updateAffinityDisplay() {
        const list = document.getElementById('affinity-list');
        if (!list) return;

        list.innerHTML = '';
        
        // 根据当前路线显示对应的好感度
        const isXiaWanRoute = this.currentRoute === 'xia_wan';
        
        // 如果处于恋爱关系，显示当前恋人
        if (this.isInRelationship()) {
            const partnerNames = {
                'xiao_tong': '木星',
                'long_xinheng': '谨言',
                'gan_zhiyu': '方圆',
                'wu_ya': '吴琊'
            };
            const partnerName = partnerNames[this.relationship] || this.relationship;
            
            const relationshipBanner = document.createElement('div');
            relationshipBanner.innerHTML = `
                <div style="background: linear-gradient(135deg, rgba(255,105,180,0.3), rgba(255,182,193,0.3)); border-radius: 10px; padding: 10px; margin-bottom: 10px; text-align: center; border: 1px solid rgba(255,105,180,0.5);">
                    <div style="color: #ff69b4; font-size: 12px;">♥ 恋人 ♥</div>
                    <div style="color: #fff; font-size: 16px; font-weight: bold; margin-top: 5px;">${partnerName}</div>
                </div>
            `;
            list.appendChild(relationshipBanner);
        }
        
        // 显示可攻略角色（有爱情线）
        const loveTitle = document.createElement('div');
        loveTitle.innerHTML = `<span style="color: #e91e63; font-weight: bold;">♥ ${isXiaWanRoute ? '可攻略' : '可攻略'}</span>`;
        loveTitle.style.cssText = 'margin: 10px 0 5px 0; padding: 5px; border-bottom: 1px solid rgba(233,30,99,0.3);';
        list.appendChild(loveTitle);
        
        Object.entries(this.affinity).forEach(([charId, values]) => {
            if (values.love === undefined) return; // 跳过只有友情线的角色
            
            const character = storyData.characters[charId];
            if (!character) return;

            // 如果当前角色是恋人，标记为已锁定
            const isLocked = this.relationship === charId;
            const lockIcon = isLocked ? ' 🔒' : '';
            
            const item = document.createElement('div');
            item.className = 'affinity-item';
            item.style.cssText = 'margin-bottom: 10px;';
            item.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
                    <span style="font-weight: bold; font-size: 14px; ${isLocked ? 'color: #ff69b4;' : ''}">${character.name}${lockIcon}</span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 3px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: #e91e63; font-size: 11px; width: 20px;">♥</span>
                        <div class="affinity-bar" style="flex: 1; height: 6px;">
                            <div class="affinity-fill" style="width: ${values.love}%; height: 100%; background: linear-gradient(90deg, #ff6b6b, #ee5a6f); border-radius: 3px;"></div>
                        </div>
                        <span style="color: #e91e63; font-size: 11px; width: 25px; text-align: right;">${values.love}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: #2e7d32; font-size: 11px; width: 20px;">★</span>
                        <div class="affinity-bar" style="flex: 1; height: 6px;">
                            <div class="affinity-fill" style="width: ${values.friend}%; height: 100%; background: linear-gradient(90deg, #66bb6a, #43a047); border-radius: 3px;"></div>
                        </div>
                        <span style="color: #2e7d32; font-size: 11px; width: 25px; text-align: right;">${values.friend}</span>
                    </div>
                </div>
            `;
            list.appendChild(item);
        });
        
        // 显示友情角色（只有友情线）
        const friendTitle = document.createElement('div');
        friendTitle.innerHTML = '<span style="color: #2e7d32; font-weight: bold;">★ 友情</span>';
        friendTitle.style.cssText = 'margin: 15px 0 5px 0; padding: 5px; border-bottom: 1px solid rgba(46,125,50,0.3);';
        list.appendChild(friendTitle);
        
        Object.entries(this.affinity).forEach(([charId, values]) => {
            if (values.love !== undefined) return; // 跳过有爱情线的角色
            
            const character = storyData.characters[charId];
            if (!character) return;

            const item = document.createElement('div');
            item.className = 'affinity-item';
            item.style.cssText = 'margin-bottom: 8px;';
            item.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 14px;">${character.name}</span>
                    <div style="display: flex; align-items: center; gap: 8px; flex: 1; margin-left: 10px;">
                        <div class="affinity-bar" style="flex: 1; height: 6px;">
                            <div class="affinity-fill" style="width: ${values.friend}%; height: 100%; background: linear-gradient(90deg, #66bb6a, #43a047); border-radius: 3px;"></div>
                        </div>
                        <span style="color: #2e7d32; font-size: 11px; width: 25px; text-align: right;">${values.friend}</span>
                    </div>
                </div>
            `;
            list.appendChild(item);
        });
    }

    // 切换自动模式
    toggleAuto() {
        this.autoMode = !this.autoMode;
        this.skipMode = false;
        
        const btn = document.querySelector('.auto-btn');
        if (btn) {
            btn.style.background = this.autoMode ? 'rgba(255,215,0,0.3)' : '';
        }
    }

    // 切换跳过模式
    toggleSkip() {
        this.skipMode = !this.skipMode;
        this.autoMode = false;
        
        const btn = document.querySelector('.skip-btn');
        if (btn) {
            btn.style.background = this.skipMode ? 'rgba(255,215,0,0.3)' : '';
        }

        if (this.skipMode) {
            this.skipDialogues();
        }
    }

    // 跳过对话（单句快进模式）
    skipDialogues() {
        if (!this.skipMode) return;
        
        // 只跳一句
        if (this.currentDialogueIndex < this.currentScene.dialogues.length - 1) {
            this.currentDialogueIndex++;
            this.showDialogue(this.currentDialogueIndex);
        } else {
            // 已经到最后一句了，关闭跳过模式
            this.skipMode = false;
            const btn = document.querySelector('.skip-btn');
            if (btn) {
                btn.style.background = '';
            }
        }
    }

    // 显示存档界面
    showSaveMenu() {
        this.showSlotMenu('save');
    }

    // 显示读档界面
    showLoadMenu() {
        this.showSlotMenu('load');
    }

    // 显示存档位选择界面
    showSlotMenu(mode) {
        // 创建存档界面
        let slotMenu = document.getElementById('slot-menu');
        if (!slotMenu) {
            slotMenu = document.createElement('div');
            slotMenu.id = 'slot-menu';
            slotMenu.className = 'overlay';
            slotMenu.innerHTML = `
                <div class="slot-panel">
                    <h3>${mode === 'save' ? '保存游戏' : '读取游戏'}</h3>
                    <div class="slot-list" id="slot-list"></div>
                    <button class="back-btn" onclick="game.closeSlotMenu()">返回</button>
                </div>
            `;
            document.body.appendChild(slotMenu);
            
            // 添加样式
            const style = document.createElement('style');
            style.textContent = `
                #slot-menu {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.8);
                    display: none;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                }
                #slot-menu.show {
                    display: flex;
                }
                .slot-panel {
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                    border-radius: 15px;
                    padding: 30px;
                    max-width: 600px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .slot-panel h3 {
                    text-align: center;
                    color: #fff;
                    margin-bottom: 20px;
                    font-size: 1.5rem;
                }
                .slot-list {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 15px;
                    margin-bottom: 20px;
                }
                .slot-item {
                    background: rgba(255,255,255,0.05);
                    border: 2px solid rgba(255,255,255,0.1);
                    border-radius: 10px;
                    padding: 15px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: left;
                }
                .slot-item:hover {
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(255,255,255,0.3);
                    transform: translateY(-2px);
                }
                .slot-item.empty {
                    border-style: dashed;
                    opacity: 0.6;
                }
                .slot-item.empty:hover {
                    opacity: 1;
                }
                .slot-number {
                    font-size: 0.8rem;
                    color: rgba(255,255,255,0.5);
                    margin-bottom: 5px;
                }
                .slot-info {
                    color: #fff;
                    font-size: 0.9rem;
                }
                .slot-route {
                    color: #ffd700;
                    font-weight: bold;
                    margin-bottom: 3px;
                }
                .slot-time {
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.5);
                }
            `;
            document.head.appendChild(style);
        }
        
        // 更新存档位显示
        this.updateSlotDisplay(mode);
        
        // 显示界面
        slotMenu.classList.add('show');
        this.currentSlotMode = mode;
    }

    // 关闭存档界面
    closeSlotMenu() {
        const slotMenu = document.getElementById('slot-menu');
        if (slotMenu) {
            slotMenu.classList.remove('show');
        }
    }

    // 更新存档位显示
    updateSlotDisplay(mode) {
        const slotList = document.getElementById('slot-list');
        if (!slotList) return;
        
        slotList.innerHTML = '';
        
        for (let i = 1; i <= 6; i++) {
            const saveKey = `moran_save_${i}`;
            const saveData = localStorage.getItem(saveKey);
            
            const slotItem = document.createElement('div');
            slotItem.className = 'slot-item';
            
            if (saveData) {
                const data = JSON.parse(saveData);
                const routeName = data.route === 'xia_wan' ? '夏晚线' : (data.route === 'zhou_yan' ? '周砚线' : '未知');
                const time = data.timestamp ? new Date(data.timestamp).toLocaleString() : '未知时间';
                slotItem.innerHTML = `
                    <div class="slot-number">存档 ${i}</div>
                    <div class="slot-info">
                        <div class="slot-route">${routeName}</div>
                        <div>${data.chapter || '未知章节'}</div>
                        <div class="slot-time">${time}</div>
                    </div>
                `;
                slotItem.onclick = () => {
                    if (mode === 'save') {
                        this.saveToSlot(i);
                    } else {
                        this.loadFromSlot(i);
                    }
                };
            } else {
                slotItem.classList.add('empty');
                slotItem.innerHTML = `
                    <div class="slot-number">存档 ${i}</div>
                    <div class="slot-info">空档位</div>
                `;
                slotItem.onclick = () => {
                    if (mode === 'save') {
                        this.saveToSlot(i);
                    }
                };
            }
            
            slotList.appendChild(slotItem);
        }
    }

    // 保存到指定档位
    saveToSlot(slotNum) {
        // 播放保存音效
        if (window.audioManager) {
            audioManager.playSFX('save');
        }

        const saveData = {
            route: this.currentRoute,
            chapter: this.currentChapter ? this.currentChapter.title : null,
            scene: this.currentScene ? this.currentScene.id : null,
            dialogueIndex: this.currentDialogueIndex,
            affinity: this.affinity,
            relationship: this.relationship,
            chapter3EndingType: this.chapter3EndingType,
            confessionFlags: this.confessionFlags,
            timestamp: Date.now()
        };
        
        localStorage.setItem(`moran_save_${slotNum}`, JSON.stringify(saveData));
        this.closeSlotMenu();
        
        // 显示保存成功提示
        this.showToast(`已保存到存档 ${slotNum}`);
    }

    // 从指定档位读取
    async loadFromSlot(slotNum) {
        const saveData = localStorage.getItem(`moran_save_${slotNum}`);
        if (!saveData) {
            this.showToast('该档位没有存档！');
            return;
        }

        const data = JSON.parse(saveData);
        this.currentRoute = data.route;
        
        // 如果存档没有affinity或格式旧，重新初始化
        if (!data.affinity || !data.affinity.xiao_tong) {
            this.initAffinity(data.route);
        } else {
            this.affinity = data.affinity;
        }
        
        // 恢复关系状态和告白标志
        this.relationship = data.relationship || null;
        this.chapter3EndingType = data.chapter3EndingType || null;
        if (data.confessionFlags) {
            this.confessionFlags = data.confessionFlags;
        }
        
        // 关闭存档界面和游戏菜单
        this.closeSlotMenu();
        const gameMenu = document.getElementById('game-menu');
        if (gameMenu) gameMenu.classList.remove('show');
        
        // 停止当前的背景音乐
        if (window.audioManager) {
            audioManager.stopMusic();
        }
        
        // 加载章节
        if (this.currentRoute === 'zhou_yan') {
            this.loadChapter('zhou_yan_chapter1');
        } else if (this.currentRoute === 'xia_wan') {
            this.loadChapter('xia_wan_chapter1');
        }

        // 跳转到保存的场景
        if (data.scene) {
            const sceneIndex = this.currentChapter.scenes.findIndex(s => s.id === data.scene);
            if (sceneIndex !== -1) {
                this.loadScene(sceneIndex);
                this.currentDialogueIndex = data.dialogueIndex || 0;
                this.showDialogue(this.currentDialogueIndex);
            }
        }

        this.showScreen('game-screen');
        
        // 读档后重新初始化音频并播放
        await this.initAudioAndPlay();
        
        this.showToast(`已读取存档 ${slotNum}`);
    }

    // 显示提示
    showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.8);
            color: #fff;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 14px;
            z-index: 10001;
            animation: fadeInOut 2s ease forwards;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.remove(), 2000);
    }

    // 保存游戏（旧接口，现在打开存档界面）
    saveGame() {
        this.showSaveMenu();
    }

    // 读取游戏（旧接口，现在打开读档界面）
    loadGame() {
        this.showLoadMenu();
    }

    // 显示设置
    showSettings() {
        const panel = document.getElementById('settings-panel');
        if (panel) {
            panel.classList.add('show');
        }
    }

    // 关闭设置
    closeSettings() {
        const panel = document.getElementById('settings-panel');
        if (panel) {
            panel.classList.remove('show');
        }
    }

    // 返回标题
    backToTitle() {
        // 停止背景音乐
        if (window.audioManager) {
            audioManager.stopMusic();
        }
        this.toggleMenu();
        this.backToMenu();
    }

    // 显示制作人员
    showCredits() {
        alert('墨染之夏 - 最后的夏天\n\n基于双主角设计方案制作\nDemo版本第一章');
    }
}

// 初始化游戏
const game = new VisualNovelGame();
window.game = game;
