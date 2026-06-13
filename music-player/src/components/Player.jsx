import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import RepeatIcon from '@mui/icons-material/Repeat'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import RepeatOneIcon from '@mui/icons-material/RepeatOne'
import VolumeControl from './VolumeControl.jsx'

function Player({
  currentSong,
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  playMode,
  playModeInfo,
  isLoaded,
  formatTime,
  onPlayPause,
  onPrevious,
  onNext,
  onSeek,
  onVolumeChange,
  onMuteToggle,
  onPlayModeToggle,
}) {
  // 获取播放模式图标
  const getPlayModeIcon = () => {
    switch (playMode) {
      case 'sequential':
        return <RepeatIcon />
      case 'random':
        return <ShuffleIcon />
      case 'singleLoop':
        return <RepeatOneIcon />
      default:
        return <RepeatIcon />
    }
  }

  return (
    <Paper 
      elevation={6}
      className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
      sx={{ 
        backgroundColor: 'rgba(31, 31, 31, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* 歌曲信息区域 */}
      <Box className="mb-8">
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={4} 
          alignItems="center"
        >
          {/* 封面图 */}
          <Avatar
            variant="rounded"
            className="w-48 h-48 sm:w-56 sm:h-56 shadow-2xl"
            sx={{ 
              width: { xs: 192, sm: 224 },
              height: { xs: 192, sm: 224 },
              borderRadius: 2,
              backgroundColor: 'rgba(25, 118, 210, 0.15)',
              border: '2px solid rgba(25, 118, 210, 0.3)',
            }}
          >
            <Typography 
              variant="h1" 
              className="text-6xl opacity-50"
            >
              🎵
            </Typography>
          </Avatar>

          {/* 歌曲信息 */}
          <Box className="flex-1 text-center sm:text-left">
            <Typography 
              variant="h4" 
              component="h2"
              className="font-bold text-white mb-2"
              sx={{ 
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {currentSong?.title || '未选择歌曲'}
            </Typography>
            <Typography 
              variant="h6" 
              className="text-gray-400 mb-4"
            >
              {currentSong?.artist || '未知艺术家'}
            </Typography>

            {/* 播放状态指示器 */}
            <Stack 
              direction="row" 
              spacing={1} 
              alignItems="center"
              className="justify-center sm:justify-start"
            >
              <Box 
                className={`w-2 h-2 rounded-full ${
                  isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'
                }`} 
              />
              <Typography variant="body2" className="text-gray-400">
                {isPlaying ? '正在播放' : '已暂停'}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* 进度条区域 */}
      <Box className="mb-6">
        <Box className="flex items-center gap-3 mb-2">
          <Typography 
            variant="body2" 
            className="text-gray-400 min-w-[45px] text-right font-mono"
          >
            {formatTime(currentTime)}
          </Typography>
          <Box className="flex-1">
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.01"
              value={currentTime}
              onChange={onSeek}
              disabled={!isLoaded}
              className="w-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, #1976d2 ${(currentTime / duration) * 100 || 0}%, #555 ${(currentTime / duration) * 100 || 0}%)`,
              }}
            />
          </Box>
          <Typography 
            variant="body2" 
            className="text-gray-400 min-w-[45px] font-mono"
          >
            {formatTime(duration)}
          </Typography>
        </Box>
      </Box>

      {/* 控制按钮区域 */}
      <Box className="mb-6">
        <Stack 
          direction="row" 
          justifyContent="center" 
          alignItems="center" 
          spacing={2}
        >
          {/* 播放模式切换 */}
          <Tooltip title={playModeInfo.label}>
            <IconButton
              onClick={onPlayModeToggle}
              className={`${
                playMode !== 'sequential' 
                  ? 'text-blue-500 bg-blue-500/10' 
                  : 'text-gray-400'
              }`}
              size="large"
            >
              {getPlayModeIcon()}
            </IconButton>
          </Tooltip>

          {/* 上一曲 */}
          <IconButton
            onClick={onPrevious}
            disabled={!isLoaded}
            className="text-white hover:text-blue-500 transition-colors"
            size="large"
          >
            <SkipPreviousIcon fontSize="large" />
          </IconButton>

          {/* 播放/暂停 */}
          <IconButton
            onClick={onPlayPause}
            disabled={!isLoaded}
            className="bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 transition-all hover:scale-105"
          >
            {isPlaying ? (
              <PauseIcon fontSize="large" />
            ) : (
              <PlayArrowIcon fontSize="large" />
            )}
          </IconButton>

          {/* 下一曲 */}
          <IconButton
            onClick={onNext}
            disabled={!isLoaded}
            className="text-white hover:text-blue-500 transition-colors"
            size="large"
          >
            <SkipNextIcon fontSize="large" />
          </IconButton>

          {/* 音量控制 */}
          <VolumeControl
            volume={volume}
            isMuted={isMuted}
            onVolumeChange={onVolumeChange}
            onMuteToggle={onMuteToggle}
          />
        </Stack>
      </Box>

      {/* 加载状态提示 */}
      {!isLoaded && (
        <Box className="text-center">
          <Typography variant="body2" className="text-gray-400">
            正在加载音频...
          </Typography>
        </Box>
      )}
    </Paper>
  )
}

export default Player
