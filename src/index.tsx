import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProjectRouter } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProjectRouter />
  </React.StrictMode>
);

reportWebVitals();
