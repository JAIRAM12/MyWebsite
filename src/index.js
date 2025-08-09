import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome icons
import 'antd/dist/reset.css'; // Ant Design styles (reset in AntD v5+)
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
