import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthForm from './components/templates/auth_form/AuthForm';
import LoginForm from './components/templates/login_form/LoginForm';
import { Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="/login" element={<LoginForm />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;