// src/components/TaskList.tsx
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Task {
  id: number;
  name: string;
  projectId: number;
  employeeIds: number[];
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <DataTable value={tasks}>
        <Column field="id" header="ID" />
        <Column field="name" header="Nombre de la Tarea" />
        <Column field="projectId" header="ID del Proyecto" />
        <Column
          field="employeeIds"
          header="ID de Empleados"
          body={(rowData: Task) => rowData.employeeIds.join(', ')}
        />
      </DataTable>
    </div>
  );
};

export default TaskList;
