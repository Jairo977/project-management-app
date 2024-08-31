import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';
import { Project } from '../types';

const ProjectManager: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects()
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError('Error fetching projects');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Project Manager</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManager;
