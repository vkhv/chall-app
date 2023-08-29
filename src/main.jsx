import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Global Styles
import Fonts from './assets/globalStyles/Fonts/index.styled.js';
import Reset from './assets/globalStyles/Reset/index.styled.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Fonts />
    <Reset />
    <App />
  </React.StrictMode>,
)
