# Project Management App

Esta es una aplicación web para la gestión de proyectos, tareas y empleados, desarrollada con React, TypeScript y PrimeReact. La aplicación permite a los usuarios gestionar proyectos, asignar tareas, y administrar la información de los empleados.

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Despliegue](#despliegue)
- [Ejemplos de Uso de la API](#ejemplos-de-uso-de-la-api)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Video de la Aplicación](#video-de-la-aplicación)
- [Contribuciones](#contribuciones)
- [Contacto](#contacto)

## Descripción del Proyecto

La aplicación de gestión de proyectos permite crear y gestionar proyectos, asignar tareas a empleados, y realizar un seguimiento del progreso. Las características incluyen:

- Gestión de proyectos.
- Gestión de tareas con asignación a empleados.
- Visualización de tareas y proyectos en una interfaz intuitiva.
- Funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) para proyectos, tareas y empleados.

## Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/project-management-app.git
   cd project-management-app
Instala las dependencias:
bash
Copiar código
npm install
Ejecución
Inicia la aplicación en modo desarrollo:
bash
Copiar código
npm start
La aplicación se abrirá automáticamente en tu navegador en http://localhost:3000.
Despliegue
Para desplegar la aplicación en un servidor de producción, puedes utilizar servicios como Vercel, Netlify, o Heroku. Asegúrate de configurar las variables de entorno necesarias.

Ejemplos de Uso de la API
Obtener Tareas
bash
Copiar código
curl -X GET http://localhost:3001/api/tasks
Crear una Nueva Tarea
bash
Copiar código
curl -X POST http://localhost:3001/api/tasks -H "Content-Type: application/json" -d '{"title": "Nueva Tarea", "projectId": 1, "employeeIds": [1, 2]}'
Actualizar una Tarea
bash
Copiar código
curl -X PUT http://localhost:3001/api/tasks/1 -H "Content-Type: application/json" -d '{"title": "Tarea Actualizada", "projectId": 1, "employeeIds": [1]}'
Eliminar una Tarea
bash
Copiar código
curl -X DELETE http://localhost:3001/api/tasks/1
Capturas de Pantalla
