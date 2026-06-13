import React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Slider from '@mui/material/Slider'
import Tooltip from '@mui/material/Tooltip'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'

function VolumeControl({ volume, isMuted, onVolumeChange, onMuteToggle }) {
  // 获取音量图标
  const getVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return <VolumeOffIcon />
    }
    if (volume < 0.5) {
      return <VolumeDownIcon />
    }
    return <VolumeUpIcon />
  }

  // 处理滑块变化
  const handleSliderChange = (event, newValue) => {
    onVolumeChange({ target: { value: newValue / 100 } })
  }

  // 处理静音切换
  const handleMuteClick = () => {
    onMuteToggle()
  }

  return (
    <Box className="flex items-center gap-1">
      <Tooltip title={isMuted ? '取消静音' : '静音'}>
        <IconButton
          onClick={handleMuteClick}
          className={`${isMuted ? 'text-red-500' : 'text-gray-400'} hover:text-white transition-colors`}
          size="medium"
        >
          {getVolumeIcon()}
        </IconButton>
      </Tooltip>
      
      <Box className="w-24 hidden sm:block">
        <Slider
          value={isMuted ? 0 : volume * 100}
          onChange={handleSliderChange}
          aria-labelledby="volume-slider"
          min={0}
          max={100}
          size="small"
          sx={{
            color: isMuted ? '#ef4444' : '#1976d2',
            '& .MuiSlider-thumb': {
              width: 12,
              height: 12,
              '&:hover, &.Mui-focusVisible': {
                boxShadow: '0 0 0 8px rgba(25, 118, 210, 0.16)',
              },
            },
          }}
        />
      </Box>
      
      <Typography 
        variant="caption" 
        className="text-gray-400 min-w-[3rem] text-right hidden sm:block"
      >
        {isMuted ? '静音' : `${Math.round(volume * 100)}%`}
      </Typography>
    </Box>
  )
}

export default VolumeControl
