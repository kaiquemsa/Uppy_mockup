import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-multi-carousel/lib/styles.css';
import { Router } from './routes';
import AppProvider from './hooks/AppProvider';
import { GlobalStyle } from './global/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
        <GlobalStyle />
        <Router />
    </AppProvider>
  </React.StrictMode>
);

