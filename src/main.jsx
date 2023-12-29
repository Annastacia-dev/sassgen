import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DarkModeProvider } from './contexts/Dark.jsx';
import { UserProvider } from './contexts/User.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <UserProvider>
       <App />
      </UserProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
