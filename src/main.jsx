// src/main.jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // YENİ İMPORT
import App from './App.jsx';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Uygulamayı BrowserRouter ile sarmala */}
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)