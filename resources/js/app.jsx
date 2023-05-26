import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import Router from './Routes/Router';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter >
    <App />
    <Router />
  </BrowserRouter>
);