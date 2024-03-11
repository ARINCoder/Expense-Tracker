import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error(`Login failed with status ${response.status}`);
    }

    const data = await response.json();
    const token = data.token; // Assuming response contains a token

    onLoginSuccess(token); // Pass token to parent component
    localStorage.setItem('authToken', token); // Store token in local storage
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... username and password input fields */}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
