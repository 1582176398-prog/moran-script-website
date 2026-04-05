// ========================================
// 致我的晚舟 - 音频管理系统
// ========================================
// 配置说明：
//   · 音乐文件放在 audio/ 目录下
//   · 目前使用本地文件 xiaowan.mp3
//   · 如需更换音乐，请替换 AUDIO_PATH 路径，或将新文件放入 audio/ 目录后更新此处
//   · 支持格式：.mp3 / .ogg / .wav
// ========================================

class AudioManager {
    constructor() {
        // 背景音乐配置
        this.music = {
            // 音乐文件路径（相对于 index.html）
            src: 'xiaowan.mp3',

            // 是否自动播放（目前设为 false，音乐在点击展开书信后播放）
            autoplay: false,

            // 是否循环播放
            loop: true,

            // 音量（0.0 ~ 1.0）
            volume: 0.7,

            // 是否静音
            muted: false
        };

        // DOM 元素
        this.audioEl = null;
        this.hintEl = null;

        // 是否已初始化
        this.ready = false;
    }

    // 初始化
    init() {
        // 获取 audio 元素
        this.audioEl = document.getElementById('bgm');
        this.hintEl = document.getElementById('music-hint');

        if (!this.audioEl) {
            console.warn('[音频] 未找到 audio#bgm 元素');
            return;
        }

        // 设置音乐路径
        this.audioEl.src = this.music.src;

        // 设置音量
        this.audioEl.volume = this.music.volume;

        // 设置循环
        this.audioEl.loop = this.music.loop;

        // 静音状态
        if (this.music.muted) {
            this.audioEl.muted = true;
        }

        // 绑定点击切换事件
        if (this.hintEl) {
            this.hintEl.addEventListener('click', () => this.toggle());
        }

        // 尝试自动播放（需用户交互后才能生效）
        if (this.music.autoplay) {
            this.audioEl.play().catch(() => {
                // 自动播放被浏览器阻止，等待用户点击
                console.log('[音频] 自动播放被阻止，将在用户点击后播放');
            });
        }

        this.ready = true;
        console.log('[音频] 音频管理器已就绪');
    }

    // 播放
    play() {
        if (!this.audioEl) return;
        this.audioEl.play().catch(e => console.log('[音频] 播放失败:', e));
        this._updateHint(true);
    }

    // 暂停
    pause() {
        if (!this.audioEl) return;
        this.audioEl.pause();
        this._updateHint(false);
    }

    // 切换播放/暂停
    toggle() {
        if (!this.audioEl) return;
        if (this.audioEl.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    // 设置音量
    setVolume(vol) {
        if (!this.audioEl) return;
        this.music.volume = Math.max(0, Math.min(1, vol));
        this.audioEl.volume = this.music.volume;
    }

    // 渐入
    fadeIn(duration = 2000) {
        if (!this.audioEl) return;
        this.audioEl.volume = 0;
        this.play();
        const step = this.music.volume / (duration / 50);
        const timer = setInterval(() => {
            if (this.audioEl.volume < this.music.volume) {
                this.audioEl.volume = Math.min(this.audioEl.volume + step, this.music.volume);
            } else {
                clearInterval(timer);
            }
        }, 50);
    }

    // 渐出
    fadeOut(duration = 2000, callback) {
        if (!this.audioEl) return;
        const startVol = this.audioEl.volume;
        const step = startVol / (duration / 50);
        const timer = setInterval(() => {
            if (this.audioEl.volume > 0) {
                this.audioEl.volume = Math.max(0, this.audioEl.volume - step);
            } else {
                clearInterval(timer);
                this.pause();
                this.audioEl.volume = startVol;
                if (callback) callback();
            }
        }, 50);
    }

    // 更新提示文字
    _updateHint(isPlaying) {
        if (!this.hintEl) return;
        this.hintEl.textContent = isPlaying ? '🎵 点击关闭音乐' : '🔇 点击开启音乐';
    }
}

// 创建全局实例
window.audioManager = new AudioManager();

// 页面加载完成后自动初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.audioManager.init());
} else {
    window.audioManager.init();
}
