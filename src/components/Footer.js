// src/components/Footer.js

import React from 'react';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0px -5px 15px rgba(0, 0, 0, 0.1)', // Adiciona uma sombra ao Footer
      }}
    >
      <p>© {new Date().getFullYear()} 4Making</p>
    </Box>
  );
}

export default Footer;
