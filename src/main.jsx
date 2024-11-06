import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './management/context.jsx';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import './tailwind.css';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <ToastContainer position="top-center" autoClose={2500} />
      <App />
    </AppProvider>
  </StrictMode>,
)