// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import { Container, Box } from '@mui/material';

function Home() {


  return (
    <div className="app">
      <Header />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>       
          
        </Box>
      </Container>
    </div>
  );
}

export default Home;