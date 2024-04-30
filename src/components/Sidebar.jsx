import React, { useState } from 'react';
import { categories } from '../utils/constants';
import { Stack } from '@mui/material';

const Sidebar = ({selectedCategory, setSelectedCategory}) => {

    return (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: {
                sm: 'auto',
                md: '97%'
            },
            flexDirection: {md: 'column'}
        }}
    >
        {categories.map((category)=>(
            <button 
                className='category-btn' 
                style = {{
                    background: category.name === selectedCategory && '#FC1503',
                    fontWeight: category.name === selectedCategory && 'bolder',
                }}
                key={category.name}
                onClick={()=>setSelectedCategory(category.name)}
            >
                <span style={{
                    marginRight: '13px',
                    color: category.name === selectedCategory? 'white': 'red'
                    }}
                >{category.icon}</span> 
                <span style={{
                    opacity: category.name === selectedCategory? '1': '0.8'
                }}>{category.name}</span>
            </button>
        ))}
    </Stack>
)};

export default Sidebar;