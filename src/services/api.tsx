// src/services/api.ts

import axios from 'axios';
import { Task, Project, Employee } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com'; // Usamos la API de JSONPlaceholder como ejemplo

// Fetch tasks from the API
export const fetchTasks = async () => {
  return axios.get(`${API_URL}/todos`);
};

export const fetchEmpleados = async () => {
  return axios.get(`${API_URL}/users`);
};

// Fetch employees from the API (si es necesario)
export const fetchEmployees = async () => {
  return axios.get(`${API_URL}/users`);
};

// Update task in the API
export const updateTask = async (task: Task) => {
  return axios.put(`${API_URL}/todos/${task.id}`, task);
};

// Create task in the API
export const createTask = async (task: Task) => {
  return axios.post(`${API_URL}/todos`, task);
};

// Delete task from the API
export const deleteTask = async (taskId: number) => {
  return axios.delete(`${API_URL}/todos/${taskId}`);
};
const mockProjects = [
  { id: 1, name: 'Project Alpha' },
  { id: 2, name: 'Project Beta' },
  { id: 3, name: 'Project Gamma' },
];

export const fetchProjects = async () => {
  return new Promise<{ data: { id: number; name: string }[] }>((resolve) => {
    setTimeout(() => {
      resolve({ data: mockProjects });
    }, 1000); // Simula un retraso de 1 segundo
  });
};