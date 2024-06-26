import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={1} sx={{
    position: 'sticky',
    background: '#0b2d39',
    top: 0,
    color: 'white',
    justifyContent: 'space-between',
    zIndex: 100
    
  }}>
    <Link to="/" style={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />

  </Stack>
);

export default Navbar;