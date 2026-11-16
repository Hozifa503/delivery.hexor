import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

// Order matters: variables first, responsive last so it can override everything else.
import './styles/variables.css';
import './styles/global.css';
import './styles/navbar.css';
import './styles/home.css';
import './styles/about.css';
import './styles/footer.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
