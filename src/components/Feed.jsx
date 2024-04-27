import { Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Videos from './Videos';

const Feed = () => {
  
  return (
    <Stack sx={{flexDirection: {
      sm:"column",
      md: "row"
    }}}>
      <Box sx={{
        minHeight: {
          sm: 'auto',
          md: 'calc(80vh)'
        },
        borderRight: '1px solid #3d3d3d',
        padding:{
          sm: 0,
          md: "8px"
        }
      }}>
        <Sidebar />
        <p style={{margin: 0, color: 'whitesmoke'}}>Copyright 2022 JSM Media</p>
      </Box>

      <Box sx={{
        padding: "8px",
        overflow: 'auto',
        height: '90vh',
        flex: 2
      }}>
        <h2>New <span style={{color: '#f31503'}}>videos</span></h2>
        <Videos videos={[]}/>
      </Box>


    </Stack>
  )
}

export default Feed;