import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Task, Project, Employee } from '../types';
import { fetchTasks, fetchProjects, fetchEmpleados, createTask, updateTask, deleteTask } from '../services/api';
import './TaskManager.css';

const TaskManager: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [empleados, setEmpleados] = useState<Employee[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState<string>('');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedEmpleados, setSelectedEmpleados] = useState<Employee[]>([]);
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

    useEffect(() => {
        fetchTasks().then((response: { data: Task[] }) => setTasks(response.data));
        fetchProjects().then((response: { data: Project[] }) => setProjects(response.data));
        fetchEmpleados().then((response: { data: Employee[] }) => setEmpleados(response.data));
    }, []);

    const handleCreateTask = () => {
        if (!newTaskTitle || !selectedProject) return;

        const newTask: Task = {
            id: Date.now(),
            title: newTaskTitle,
            projectId: selectedProject.id,
            employeeIds: selectedEmpleados.map(emp => emp.id),
            completed: false,
        };

        createTask(newTask).then((response: { data: Task }) => {
            setTasks([...tasks, response.data]);
            setNewTaskTitle('');
            setSelectedProject(null);
            setSelectedEmpleados([]);
        });
    };

    const handleEditTask = (task: Task) => {
        setEditingTaskId(task.id);
        setNewTaskTitle(task.title);
        setSelectedProject(projects.find(project => project.id === task.projectId) || null);
        setSelectedEmpleados(empleados.filter(empleado => task.employeeIds?.includes(empleado.id) || false));
    };

    const handleSaveTask = () => {
        if (editingTaskId === null || !newTaskTitle || !selectedProject) return;

        const updatedTask: Task = {
            id: editingTaskId,
            title: newTaskTitle,
            projectId: selectedProject.id,
            employeeIds: Array.isArray(selectedEmpleados) ? selectedEmpleados.map(emp => emp.id) : [],
            completed: false,
        };

        updateTask(updatedTask).then(() => {
            setTasks(tasks.map(task => (task.id === editingTaskId ? updatedTask : task)));
            setEditingTaskId(null);
            setNewTaskTitle('');
            setSelectedProject(null);
            setSelectedEmpleados([]);
        });
    };

    const handleDeleteTask = (taskId: number) => {
        deleteTask(taskId).then(() => {
            setTasks(tasks.filter(task => task.id !== taskId));
        });
    };

    return (
        <div className="task-manager">
            <h2>Gestión de Tareas</h2>
            <div className="task-inputs">
                <InputText
                    value={newTaskTitle}
                    onChange={e => setNewTaskTitle(e.target.value)}
                    placeholder="Título de la nueva tarea"
                    className="p-inputtext-sm"
                />
                <Dropdown
                    value={selectedProject}
                    options={projects}
                    onChange={e => setSelectedProject(e.value)}
                    optionLabel="name"
                    placeholder="Selecciona un proyecto"
                    className="p-dropdown-sm"
                />
                <Dropdown
                    value={selectedEmpleados}
                    options={empleados}
                    onChange={e => setSelectedEmpleados(e.value)}
                    optionLabel="name"
                    placeholder="Selecciona empleados"
                    multiple
                    className="p-dropdown-sm"
                />
                <Button
                    label={editingTaskId ? "Guardar Tarea" : "Agregar Tarea"}
                    onClick={editingTaskId ? handleSaveTask : handleCreateTask}
                    className="p-button-sm"
                />
            </div>
            <div className="task-list">
                {tasks.map(task => (
                    <div key={task.id} className="task-item">
                        <strong>{task.title}</strong>
                        <p>Proyecto: {projects.find(project => project.id === task.projectId)?.name || 'Desconocido'}</p>
                        <p>Empleados: {task.employeeIds ? empleados.filter(emp => task.employeeIds.includes(emp.id)).map(emp => emp.name).join(', ') : 'Ninguno'}</p>
                        <Button label="Editar" onClick={() => handleEditTask(task)} className="p-button-sm p-button-info" />
                        <Button label="Borrar" onClick={() => handleDeleteTask(task.id)} className="p-button-sm p-button-danger" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskManager;
