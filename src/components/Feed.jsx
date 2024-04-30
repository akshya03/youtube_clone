import { Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  }, [selectedCategory]); 

  return (
    <Stack sx={{flexDirection: {
      sm:"column",
      md: "row"
    }}}>
      <Box sx={{
        minHeight: {
          sm: 'auto',
          md: '80vh'
        },
        borderRight: '1px solid #3d3d3d',
        padding:{
          sm: 0,
          md: "8px"
        }
      }}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <p style={{margin: 0, color: 'whitesmoke'}}>Copyright 2022 JSM Media</p>
      </Box>

      <Box sx={{
        padding: "8px",
        overflow: 'auto',
        height: '90vh',
        flex: 2,
        color: "whitesmoke"
      }}>
        <h2>{selectedCategory} <span style={{color: '#f31503'}}>videos</span></h2>
        <Videos videos={videos}/>
      </Box>


    </Stack>
  )
}

export default Feed;