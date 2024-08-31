// src/App.tsx
import React from 'react';
import ProjectListContainer from './components/ProjectListContainer'; // Asegúrate de que la ruta es correcta

const App: React.FC = () => (
  <div>
    <h1>Lista de Proyectos</h1>
    <ProjectListContainer />
  </div>
);

export default App;