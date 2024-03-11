import './App.css'
import React, { useState, useEffect } from 'react';
import LoginForm from '../Forms/LoginForm/LoginFrom';
import RegisterForm from '../Forms/RegisterForm/RegisterForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [token, setToken] = useState(null);
  const [showRegisterForm, setShowRegisterForm] = useState(true); // Flag for form visibility

  // useEffect(() => {
    // Check for existing token in local storage on component mount
  //   const storedToken = localStorage.getItem('authToken');
  //   if (storedToken) {
  //     setToken(storedToken);
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const handleLoginSuccess = (newToken) => {
  //   setToken(newToken);
  //   setIsLoggedIn(true);
  //   setShowRegisterForm(false); // Hide registration form after login
  // };

  const handleLogout = () => {
    setToken(null);
    setIsLoggedIn(false);
    setShowRegisterForm(true); // Show registration form after logout
    localStorage.removeItem('authToken'); // Remove token from storage
  };

  return (
    <div className="App">
      {showRegisterForm ? (
        <RegisterForm/>
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
      {isLoggedIn && ( // Only display logout button if logged in
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default App;
