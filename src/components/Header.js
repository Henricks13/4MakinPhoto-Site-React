// src/components/Header.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './Header.css'; // Importar estilos CSS

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>
      <Toolbar>
        {/* Use apenas a tag <img> para exibir a logo */}
        <img
          src="/logoSite.png"
          alt="Logo do Site"
          className="logo logo-mobile" // Aplicar classes CSS
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
