import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeList from '../components/EmployeeList';

interface Employee {
  id: number;
  name: string;
  position: string;
}

const EmployeeManagement: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Gestión de Empleados</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default EmployeeManagement;
