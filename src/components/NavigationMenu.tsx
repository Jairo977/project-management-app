import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Gestión de Tareas</Link></li>
        <li><Link to="/projects">Gestión de Proyectos</Link></li>
        <li><Link to="/employees">Gestión de Empleados</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
