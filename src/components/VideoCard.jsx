import { Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({video:{
    id: {videoId},
    snippet
    }
    }) => ( 
    <Card sx={{
        width: {
            md: '350px',
            sm: '100%'
        },
        // boxShadow: 'none',
        borderRadius: '20px'
    }}>
        <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia  
        image={snippet?.thumbnails?.high?.url} 
        alt = {snippet?.title}
        sx={{
            height: 180,  
            width: '100%'
        }}
        />
        <CardContent sx={{
            backgroundColor: '#1e1e1e', height: '60px',
            fontWeight: 'bold', color: "#fff", padding: '2px 10px'
        }}>
            <p>{snippet?.title.slice(0,50) || demoVideoTitle?.slice(0,50)}</p>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
                <p style={{color: 'gray'}}>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{
                        fontSize: 12, color: 'gray', ml: '5px'
                    }} />
                </p>
            </Link>
        </CardContent>
        </Link>
    </Card>
)


export default VideoCard