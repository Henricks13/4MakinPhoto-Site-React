// AdminLoginPage.js

import React, { useState } from 'react';
import './AdminLoginPage.css'; // Arquivo de estilos CSS para a página de login

function AdminLoginPage() {
  // Definindo estado para armazenar os valores do formulário
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Função para atualizar o estado quando os campos do formulário mudarem
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados de login para o backend e autenticar o usuário
    console.log('Formulário enviado:', formData);
  };

  return (
    <div className="admin-login-page">
      <h2>Login Administrativo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default AdminLoginPage;
