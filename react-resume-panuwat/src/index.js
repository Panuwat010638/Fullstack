import React from 'react';
import ReactDOM  from 'react-dom/client';
import MainWelcome from './MainWelcome';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainWelcome />
  </React.StrictMode>
);

reportWebVitals();
