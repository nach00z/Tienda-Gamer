import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const firebaseConfig = {
  apiKey: "AIzaSyDdE-oN67nDe3GUeez8XzDooTu8Docb4jo",
  authDomain: "tienda-gamer-nach00z.firebaseapp.com",
  projectId: "tienda-gamer-nach00z",
  storageBucket: "tienda-gamer-nach00z.appspot.com",
  messagingSenderId: "192595264632",
  appId: "1:192595264632:web:d8e00cceb615484b21998d"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
