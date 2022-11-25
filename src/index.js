import React from 'react';
import ReactDOM from 'react-dom';
import ContactUs from './pages/ContactUs/ContactUs';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ContactUs />
  </React.StrictMode>
);