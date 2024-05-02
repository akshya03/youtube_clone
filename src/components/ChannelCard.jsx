import { Box, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({
  channelDetail: {
    id: { channelId },
    snippet,
    statistics
  },
}) => (
  <Card sx={{
    width: {
        md: '350px',
        sm: '100%'
    },
    boxShadow: 'none',
    borderRadius: '20px',
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    // textAlign:"center"
    alignItems: "center",
    background: "none",
    margin: 'auto'
}}>
    <Link to={`/channel/${channelId}`}>
    <CardMedia  
    image={snippet?.thumbnails?.high?.url} 
    alt = {snippet?.title}
    sx={{
        height: 180,  
        width: 180,
        borderRadius: "50%"
    }}
    />
    <CardContent sx={{
        height: '60px',
        fontWeight: 'bold', color: "#fff",
    }}>
        <p>{snippet?.title || demoChannelTitle}<CheckCircle sx={{
                        fontSize: 12, color: 'gray', ml: '5px'
                    }} /></p>
        {statistics?.subscriberCount && (
          <p>{parseInt(statistics.subscriberCount).toLocaleString()}Subscribers</p>
        )}
    </CardContent>
    </Link>
</Card>
);

export default ChannelCard;
