import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globales personalizados (si los tienes)
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importar estilos de PrimeReact
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos básicos de PrimeReact
import 'primeicons/primeicons.css'; // Iconos de PrimeReact

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si quieres comenzar a medir el rendimiento en tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un endpoint de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
