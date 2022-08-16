import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { FavoriteBorder,BookmarkBorderIcon, Share, MoreVert, FavoriteBorderOutlined, Favorite } from '@mui/icons-material'

import Post from './Post'

const Feed = () => {
  return (
    <Box
      flex={4}
      p={1}
    >
      <Post/>
    </Box>
  )
}

export default Feed