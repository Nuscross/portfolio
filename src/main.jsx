import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './management/context.jsx';
import App from './App.jsx';
import './tailwind.css';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)