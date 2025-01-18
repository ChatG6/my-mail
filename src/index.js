import React from 'react';
import ReactDOM from 'react-dom/client';

// Import styling
import './index.css';

// Import main component
import App from './App';

// Setup browser rendering
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// Render application with StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);