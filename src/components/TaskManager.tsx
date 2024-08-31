import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { fetchTasks, createTask, updateTask, deleteTask, fetchProjects, fetchEmployees } from '../services/api';
import { AxiosResponse } from 'axios';

interface Task {
  id: number;
  name: string;
  projectId: number;
  employeeIds: number[];
}

interface Project {
  id: number;
  name: string;
}

interface Employee {
  id: number;
  name: string;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  useEffect(() => {
    fetchTasks().then((response: AxiosResponse<Task[]>) => setTasks(response.data));
    fetchProjects().then((response: AxiosResponse<Project[]>) => setProjects(response.data));
    fetchEmployees().then((response: AxiosResponse<Employee[]>) => setEmployees(response.data));
  }, []);

  const openNewTaskDialog = () => {
    setSelectedTask({ id: 0, name: '', projectId: 0, employeeIds: [] });
    setIsDialogVisible(true);
  };

  const saveTask = () => {
    if (selectedTask?.id) {
      updateTask(selectedTask).then(() => {
        setTasks(tasks.map(t => (t.id === selectedTask.id ? selectedTask : t)));
      });
    } else {
      createTask(selectedTask!).then((response: AxiosResponse<Task>) => {
        setTasks([...tasks, response.data]);
      });
    }
    setIsDialogVisible(false);
  };

  const deleteSelectedTask = () => {
    if (selectedTask) {
      deleteTask(selectedTask.id).then(() => {
        setTasks(tasks.filter(t => t.id !== selectedTask.id));
      });
      setIsDialogVisible(false);
    }
  };

  return (
    <div>
      <Button label="Nueva Tarea" icon="pi pi-plus" onClick={openNewTaskDialog} />
      <DataTable value={tasks} selectionMode="single" onSelectionChange={e => setSelectedTask(e.value)}>
        <Column field="name" header="Nombre"></Column>
        <Column field="projectId" header="Proyecto" body={(rowData: Task) => projects.find(p => p.id === rowData.projectId)?.name}></Column>
        <Column header="Empleados" body={(rowData: Task) => rowData.employeeIds.map(id => employees.find(e => e.id === id)?.name).join(', ')}></Column>
      </DataTable>

      <Dialog visible={isDialogVisible} onHide={() => setIsDialogVisible(false)}>
        <div className="p-field">
          <label htmlFor="name">Nombre de la Tarea</label>
          <InputText id="name" value={selectedTask?.name} onChange={e => setSelectedTask({ ...selectedTask!, name: e.target.value })} />
        </div>
        <div className="p-field">
          <label htmlFor="project">Proyecto</label>
          <Dropdown id="project" value={selectedTask?.projectId} options={projects} onChange={e => setSelectedTask({ ...selectedTask!, projectId: e.value })} optionLabel="name" />
        </div>
        <div className="p-field">
          <label htmlFor="employees">Empleados</label>
          <Dropdown id="employees" value={selectedTask?.employeeIds} options={employees} onChange={e => setSelectedTask({ ...selectedTask!, employeeIds: e.value })} optionLabel="name" multiple />
        </div>
        <Button label="Guardar" icon="pi pi-check" onClick={saveTask} />
        <Button label="Eliminar" icon="pi pi-times" onClick={deleteSelectedTask} />
      </Dialog>
    </div>
  );
};

export default TaskManager;
