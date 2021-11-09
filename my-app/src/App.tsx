import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthForm from './components/templates/auth_form/AuthForm';
import LoginForm from './components/templates/login_form/LoginForm';

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
