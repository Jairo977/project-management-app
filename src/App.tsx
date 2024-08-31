import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Home from './pages/Home';
import TaskManagement from './pages/TaskManagement';
import EmployeeManagement from './pages/EmployeeManagement';
import ProjectManagement from './pages/ProjectManagement'; // Importa la nueva página

const App: React.FC = () => {
  return (
    <Router>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManagement />} />
        <Route path="/employees" element={<EmployeeManagement />} />
        <Route path="/projects" element={<ProjectManagement />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
};

export default App;
