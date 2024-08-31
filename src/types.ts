// src/types.ts

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  projectId: number;
  employeeIds: number[];
  
}

export interface Project {
  id: number;
  name: string;
  
}

export interface Employee {
  id: number;
  name: string;
  position: string; 
}