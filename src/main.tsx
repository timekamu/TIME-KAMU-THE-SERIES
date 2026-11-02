import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'framer-motion';

import App from './App';
import './index.css';

// ==========================================
// TIME KAMU — APPLICATION ENTRY POINT
// CREATED BY INDRAJIT
// ==========================================

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'TIME KAMU: Root element not found.'
  );
}

// ==========================================
// RENDER REACT APPLICATION
// ==========================================

createRoot(rootElement).render(

  <StrictMode>

    <MotionConfig reducedMotion="user">

      <App />

    </MotionConfig>

  </StrictMode>

);
