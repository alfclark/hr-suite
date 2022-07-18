# DOCUMENTACION PROCESO DE DESARROLLO DEL PROYECTO



### 1. Entendiendo y analizando el proyecto

#### - **Análisis del proyecto**
Se planteó el proyecto como una aplicación para manejar y administrar a participantes en un proceso de reclutamiento. 
Se requieren de dos interfaces:
1. Interfaz con lista de candidatos.
2. Interfaz con detalles del candidato.
Front End con libertad de utilizar cualquier framework o lenguaje.
Back End limitado a servicios de AWS o Google.

#### - **Posibles soluciones**
Dashboard para departamento de recursos humanos donde se puedan administrar a los candidatos en proceso de reclutamiento y detalles de cada uno de ellos.
En total dos interfaces:
1.	Interfaz principal con una sección para añadir nuevos candidatos y una sección con la lista de los candidatos. Cada candidato con link para una segunda interfaz y un botón para eliminar el candidato de la base de datos.
2.	Interfaz con los detalles del candidato, y una sección para seleccionar sus habilidades.
Front End, utilizando Vue.js y frameworks para eficientar el desarrollo y establecer escalabilidad.
Back End con Firebase para almacenar a los candidatos.

### 2. Diseño y metodología
