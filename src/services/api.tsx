// src/services/api.ts
import axios from 'axios';

const API_URL = 'https://api.ejemplo.com';

export const fetchProjects = async () => {
  return axios.get(`${API_URL}/projects`);
};

export const fetchTasks = async () => {
  return axios.get(`${API_URL}/tasks`);
};

export const fetchEmployees = async () => {
  return axios.get(`${API_URL}/employees`);
};

export const createTask = async (task: any) => {
  return axios.post(`${API_URL}/tasks`, task);
};

export const updateTask = async (task: any) => {
  return axios.put(`${API_URL}/tasks/${task.id}`, task);
};

export const deleteTask = async (taskId: number) => {
  return axios.delete(`${API_URL}/tasks/${taskId}`);
};
