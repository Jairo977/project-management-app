// src/api/projects.js

import axios from 'axios';

// Define la URL base de tu API
const API_URL = 'http://localhost:3001/api/projects'; // Cambia esto si es necesario

// Función para obtener los proyectos
export const fetchProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    // Manejo de errores detallado
    if (error.response) {
      console.error('Response error:', error.response.data);
      console.error('Response status:', error.response.status);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('General error:', error.message);
    }
    throw new Error('Error fetching projects');
  }
};
