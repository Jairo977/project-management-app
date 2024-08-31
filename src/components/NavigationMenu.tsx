// src/components/NavigationMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css';  // Importa el archivo CSS

const NavigationMenu: React.FC = () => {
  return (
    <nav className="navigation-menu">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/tasks">Gestión de Tareas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;