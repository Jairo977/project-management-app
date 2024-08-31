// src/components/ProjectList.tsx
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Project {
  id: number;
  name: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <DataTable value={projects}>
      <Column field="id" header="ID" />
      <Column field="name" header="Nombre del Proyecto" />
    </DataTable>
  );
};

export default ProjectList;
