// src/components/ProjectListContainer.tsx
import React, { useEffect, useState } from 'react';
import ProjectList from './ProjectList'; // Asegúrate de que la ruta es correcta
import { fetchProjects } from '../services/api';

interface Project {
  id: number;
  name: string;
}

const ProjectListContainer: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetchProjects();
        setProjects(response.data);
      } catch (error) {
        setError('Error fetching projects');
        console.error('Error fetching projects:', error);
      }
    };

    loadProjects();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return <ProjectList projects={projects} />;
};

export default ProjectListContainer;
