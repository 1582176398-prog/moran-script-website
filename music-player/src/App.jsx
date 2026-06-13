import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Player from './components/Player.jsx'
import Playlist from './components/Playlist.jsx'

// 深色主题配置
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#0f0f0f',
      paper: '#1a1a2e',
    },
  },
})

// 示例播放列表 - 使用公开测试音频
const initialPlaylist = [
  {
    id: 1,
    title: 'SoundHelix 歌曲 1',
    artist: 'SoundHelix',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    cover: null,
  },
  {
    id: 2,
    title: 'SoundHelix 歌曲 2',
    artist: 'SoundHelix',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    cover: null,
  },
  {
    id: 3,
    title: 'SoundHelix 歌曲 3',
    artist: 'SoundHelix',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    cover: null,
  },
]

// 播放模式常量
const PLAY_MODE = {
  SEQUENTIAL: 'sequential',
  RANDOM: 'random',
  SINGLE_LOOP: 'singleLoop',
}

function App() {
  const [playlist] = useState(initialPlaylist)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const [playMode, setPlayMode] = useState(PLAY_MODE.SEQUENTIAL)
  
  const audioRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const currentSong = playlist[currentSongIndex]

  // 初始化音频元素
  useEffect(() => {
    const audio = new Audio()
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  // 加载新歌曲
  useEffect(() => {
    if (!audioRef.current || !currentSong) return

    const audio = audioRef.current
    audio.src = currentSong.url
    audio.load()
    setIsLoaded(false)
    setCurrentTime(0)
    setDuration(0)

    const handleLoadedData = () => {
      setDuration(audio.duration)
      setIsLoaded(true)
      if (isPlaying) {
        audio.play().catch(err => console.error('播放失败:', err))
      }
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      handleNext()
    }

    const handleError = (e) => {
      console.error('音频加载错误:', e)
      setIsLoaded(true)
    }

    audio.addEventListener('loadeddata', handleLoadedData)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [currentSongIndex, currentSong])

  // 播放/暂停控制
  useEffect(() => {
    if (!audioRef.current || !isLoaded) return

    if (isPlaying) {
      audioRef.current.play().catch(err => {
        console.error('播放失败:', err)
        setIsPlaying(false)
      })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, isLoaded])

  // 音量控制
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = isMuted ? 0 : volume
  }, [volume, isMuted])

  // 播放/暂停切换
  const handlePlayPause = useCallback(() => {
    if (!isLoaded) return
    setIsPlaying(prev => !prev)
  }, [isLoaded])

  // 上一曲
  const handlePrevious = useCallback(() => {
    if (playMode === PLAY_MODE.RANDOM) {
      const randomIndex = Math.floor(Math.random() * playlist.length)
      setCurrentSongIndex(randomIndex)
    } else {
      setCurrentSongIndex(prev => (prev === 0 ? playlist.length - 1 : prev - 1))
    }
    setIsPlaying(true)
  }, [playMode, playlist.length])

  // 下一曲
  const handleNext = useCallback(() => {
    if (playMode === PLAY_MODE.SINGLE_LOOP) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play().catch(err => console.error('播放失败:', err))
      }
      return
    }

    if (playMode === PLAY_MODE.RANDOM) {
      const randomIndex = Math.floor(Math.random() * playlist.length)
      setCurrentSongIndex(randomIndex)
    } else {
      setCurrentSongIndex(prev => (prev === playlist.length - 1 ? 0 : prev + 1))
    }
    setIsPlaying(true)
  }, [playMode, playlist.length])

  // 进度条拖拽
  const handleSeek = useCallback((event) => {
    if (!audioRef.current || !duration) return
    const newTime = parseFloat(event.target.value)
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }, [duration])

  // 音量变化
  const handleVolumeChange = useCallback((event) => {
    const newVolume = parseFloat(event.target.value)
    setVolume(newVolume)
    setIsMuted(false)
  }, [])

  // 静音切换
  const handleMuteToggle = useCallback(() => {
    setIsMuted(prev => !prev)
  }, [])

  // 切换播放模式
  const handlePlayModeToggle = useCallback(() => {
    setPlayMode(prev => {
      switch (prev) {
        case PLAY_MODE.SEQUENTIAL:
          return PLAY_MODE.RANDOM
        case PLAY_MODE.RANDOM:
          return PLAY_MODE.SINGLE_LOOP
        case PLAY_MODE.SINGLE_LOOP:
          return PLAY_MODE.SEQUENTIAL
        default:
          return PLAY_MODE.SEQUENTIAL
      }
    })
  }, [])

  // 选择播放列表中的歌曲
  const handleSelectSong = useCallback((index) => {
    setCurrentSongIndex(index)
    setIsPlaying(true)
  }, [])

  // 格式化时间显示
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // 获取播放模式图标和提示
  const getPlayModeInfo = () => {
    switch (playMode) {
      case PLAY_MODE.SEQUENTIAL:
        return { icon: '顺序播放', label: '顺序播放' }
      case PLAY_MODE.RANDOM:
        return { icon: '随机播放', label: '随机播放' }
      case PLAY_MODE.SINGLE_LOOP:
        return { icon: '单曲循环', label: '单曲循环' }
      default:
        return { icon: '顺序播放', label: '顺序播放' }
    }
  }

  const playModeInfo = getPlayModeInfo()

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <Box className="container mx-auto px-4 py-8 max-w-6xl">
          <Box className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">🎵 音乐播放器</h1>
            <p className="text-gray-400">享受你的音乐之旅</p>
          </Box>

          <Box className="flex flex-col lg:flex-row gap-6">
            {/* 播放器主体 */}
            <Box className="flex-1">
              <Player
                currentSong={currentSong}
                isPlaying={isPlaying}
                currentTime={currentTime}
                duration={duration}
                volume={volume}
                isMuted={isMuted}
                playMode={playMode}
                playModeInfo={playModeInfo}
                isLoaded={isLoaded}
                formatTime={formatTime}
                onPlayPause={handlePlayPause}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onSeek={handleSeek}
                onVolumeChange={handleVolumeChange}
                onMuteToggle={handleMuteToggle}
                onPlayModeToggle={handlePlayModeToggle}
              />
            </Box>

            {/* 播放列表 */}
            <Box className="w-full lg:w-96">
              <Playlist
                playlist={playlist}
                currentSongIndex={currentSongIndex}
                isPlaying={isPlaying}
                onSelectSong={handleSelectSong}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
