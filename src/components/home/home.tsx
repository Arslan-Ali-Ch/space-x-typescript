
import React, { useCallback, useState } from 'react'
import './home.css';
import { Box, Paper } from '@mui/material';
// or
import { styled } from '@mui/material/styles';
import rocket from '../../img/rocket.png'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Home = () => {

  return (
    <Box className='container'>
    <img height={200}  src={rocket} alt="" />
    <Item className='link'>
    <Link className='link' to="space"  
    >
      <Button variant="outlined">Go To Detail</Button>
    </Link>
    </Item>
    </Box>
  )
}

export default Home
