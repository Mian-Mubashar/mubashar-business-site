import React, { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
const root = document.getElementById('root');
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
