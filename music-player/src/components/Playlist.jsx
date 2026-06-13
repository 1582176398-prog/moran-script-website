import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import EqualizerIcon from '@mui/icons-material/Equalizer'

function Playlist({ playlist, currentSongIndex, isPlaying, onSelectSong }) {
  return (
    <Paper 
      elevation={6}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 h-full"
      sx={{ 
        backgroundColor: 'rgba(31, 31, 31, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* 播放列表标题 */}
      <Box className="p-4 border-b border-gray-700/50">
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Typography 
            variant="h6" 
            className="font-bold text-white"
          >
            播放列表
          </Typography>
          <Typography 
            variant="body2" 
            className="text-gray-400"
          >
            {playlist.length} 首歌曲
          </Typography>
        </Stack>
      </Box>

      {/* 歌曲列表 */}
      <List 
        className="overflow-y-auto max-h-[calc(100vh-300px)]"
        sx={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1a1a2e',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#555',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#777',
          },
        }}
      >
        {playlist.map((song, index) => {
          const isCurrentSong = index === currentSongIndex

          return (
            <ListItem
              key={song.id}
              disablePadding
              className={`border-b border-gray-700/30 ${
                isCurrentSong ? 'bg-blue-600/20' : 'hover:bg-gray-700/30'
              } transition-colors`}
            >
              <ListItemButton
                onClick={() => onSelectSong(index)}
                selected={isCurrentSong}
                className={`px-4 py-3 ${
                  isCurrentSong ? 'bg-blue-600/10' : ''
                }`}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(25, 118, 210, 0.15)',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.25)',
                    },
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    className={`${
                      isCurrentSong 
                        ? 'bg-blue-600/30 text-blue-400' 
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {isCurrentSong && isPlaying ? (
                      <EqualizerIcon className="animate-pulse" />
                    ) : (
                      <MusicNoteIcon />
                    )}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      className={`font-medium ${
                        isCurrentSong ? 'text-blue-400' : 'text-white'
                      }`}
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {song.title}
                      {isCurrentSong && isPlaying && (
                        <span className="ml-2 text-xs text-blue-400">
                          (正在播放)
                        </span>
                      )}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="body2"
                      className="text-gray-400"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 1',
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {song.artist}
                    </Typography>
                  }
                />

                {/* 播放状态图标 */}
                {isCurrentSong && (
                  <Box className="ml-2">
                    {isPlaying ? (
                      <PauseIcon className="text-blue-400" />
                    ) : (
                      <PlayArrowIcon className="text-blue-400" />
                    )}
                  </Box>
                )}
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>

      {/* 底部提示信息 */}
      <Box className="p-4 border-t border-gray-700/50">
        <Typography 
          variant="caption" 
          className="text-gray-500 block text-center"
        >
          💡 点击歌曲开始播放
        </Typography>
      </Box>
    </Paper>
  )
}

export default Playlist
