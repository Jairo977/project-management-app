import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Employee {
  id: number;
  name: string;
  position: string;
}

const EmployeeList: React.FC<{ employees: Employee[] }> = ({ employees }) => {
  return (
    <DataTable value={employees}>
      <Column field="id" header="ID" />
      <Column field="name" header="Nombre" />
      <Column field="position" header="Puesto" />
    </DataTable>
  );
};

export default EmployeeList;
