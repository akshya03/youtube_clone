import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import React from 'react';

const SearchBar = () =>(
    <>
     <Paper component="form"
        onSubmit={()=>{}}
        sx={{
            borderRadius: 5,
            // border: '13xp solid #e3e3e3',
            padding: '2px 5px',
            boxShadow: 'none',
            marginRight: {sm: '5px'}
       }}
    >
        <input 
            className='search-bar'
            placeholder='Search...'
            // value = ""
            // onChange = {()=>{}}
        />
        <IconButton sx={{}}>
            <Search />
        </IconButton>
    </Paper>
    </>
);

export default SearchBar;