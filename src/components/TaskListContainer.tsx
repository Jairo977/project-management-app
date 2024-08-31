// src/components/TaskListContainer.tsx
import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/api';

interface Task {
  id: number;
  title: string;
}

const TaskListContainer: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await fetchTasks();
        setTasks(response.data);
      } catch (error) {
        setError('Error fetching tasks');
        console.error('Error fetching tasks:', error);
      }
    };

    loadTasks();
  }, []);

  // Agrega métodos para manejar la creación, actualización y eliminación de tareas aquí

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {/* Agrega el componente para mostrar las tareas aquí */}
    </div>
  );
};

export default TaskListContainer;
