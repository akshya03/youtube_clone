import { Box, Card } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({channelDetail}) => {
  return (
    <Card sx={{
      width: {
          md: '350px',
          sm: '100%'
      },
      // boxShadow: 'none',
      borderRadius: '20px'
  }}>
    <Link to={`/channel/${}`}/>


  </Card>


  )
}

export default ChannelCard