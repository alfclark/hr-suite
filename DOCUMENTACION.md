# DOCUMENTACION PROCESO DE DESARROLLO DEL PROYECTO



## 1. Entendiendo y analizando el proyecto

### - **Análisis del proyecto**
    Se planteó el proyecto como una aplicación para manejar y administrar a participantes en un proceso de reclutamiento. 
    Se requieren de dos interfaces:
        1. Interfaz con lista de candidatos.
        2. Interfaz con detalles del candidato.
    Front End con libertad de utilizar cualquier framework o lenguaje.
    Back End limitado a servicios de AWS o Google.

### - **Posibles soluciones**
    Dashboard para departamento de recursos humanos donde se puedan administrar a los candidatos en proceso de reclutamiento y detalles de cada uno de ellos.
    En total dos interfaces:
        1.	Interfaz principal con una sección para añadir nuevos candidatos y una sección con la lista de los candidatos. Cada candidato con link para una segunda interfaz y un botón para eliminar el candidato de la base de datos.
        2. Interfaz con los detalles del candidato, y una sección para seleccionar sus habilidades.

    Front End, utilizando Vue.js y frameworks para eficientar el desarrollo y establecer escalabilidad.
    Back End con Firebase para almacenar a los candidatos.

## 2. Diseño y metodología
- **Diseño del proyecto**
    1. Lluvia de ideas y definiendo tecnologías
    ![](src\assets\snips\lluviaIdeas.jpg)

    2. Draft Funcionamiento
    ![](src\assets\snips\Diagrama.jpg)

    3. Tecnologías
        - Front End
            - Vue.js
            - VueRouter
            - JavaScript
            - HTML
            - CSS
            - Bootstrap
        - Back End
            - Firebase

    4. Boceto
    ![](src\assets\snips\Diagrama.jpg)

    5. Mock en Figma
        - Interfaz 1
        ![](src\assets\snips\mock1.png)
        - Interfaz 2
        ![](src\assets\snips\NULL.png)



- **Cronograma**
![](src\assets\snips\Draft.jpg)

## 3. Proceso de desarrollo del proyecto
- **Creando Repositorio**
![](src\assets\snips\createRepo.png)
- **Creando proyecto local**
    1. Instalando Vue.js con Vue CLI 
        ![](src\assets\snips\localCreate.png)

    2. Limpiando el boilerplate
        ![](src\assets\snips\boilerplate.png)

    3. Instalando librerías
        - Bootstrap
            ![](src\assets\snips\bootstrap.png)
        - Font Awesome
            ![](src\assets\snips\fontawesome.png)
    4. Creando el Routing
        ![](src\assets\snips\router.png)

    5. Desarrollo Front End
        - Creando NavBar
            ![](src\assets\snips\navbar.png)
        - Creación Rutas del routing
            ![](src\assets\snips\routing.png)
        - View Home
            1. Sección añadir candidato
                ![](src\assets\snips\añadircandidato.png)
                - *Resultado:*
                    ![](src\assets\snips\seccionañadir.png)
            2. Sección lista candidatos
                ![](src\assets\snips\listacandidatos.png)
                - *Resultado:*
                    ![](src\assets\snips\seccionlista.png)
        - View Candidato
            1. Sección datos candidato
                ![](src\assets\snips\datoscandidato.png)
                - *Resultado:*
                    ![](src\assets\snips\secciondatos.png)
            2. Sección habilidades candidatos
                ![](src\assets\snips\skillscandidato.png)
                - *Resultado:*
                    ![](src\assets\snips\seccionhabilidades.png)

    6. Desarrollo Back End
        - Configuración SDK Firebase
            ![](src\assets\snips\firebase.png)

    7. Back End + Front End
        >Posterior al Desarrollo de este proyecto, mi experiencia con Firebase era nula. Por lo que se utilizó la documentación de Firebase y Stack Overflow para poder crear las funciones de lectura y escritura (CRUD) para interactuar con la base de datos.

        >Tuve algunos inconvenientes, puesto que la mayoría de la documentación eran de proyectos utilizando Vue.js 2 con la librería VueFire, dependencia que simplifica las funciones y ejecuta código más simplificado. Por lo que tuve que guiarme con proyectos donde se utilizaba React y transformarlo a código de Vue.js 3.

        - Componente Home 
            1. Creación de variables REF
                ![](src\assets\snips\variables.png)
            2. Función leer database
                ![](src\assets\snips\getDatabase.png)
            3. Función añadir database
                ![](src\assets\snips\addtoDatabase.png)
            4. Función eliminar candidato
                ![](src\assets\snips\deleteCandidate.png)

        - Componente Vista Candidato 
            1. Routing ID Candidato
                ![](src\assets\snips\useRoute.png)
            2. Función tomar candidato
                ![](src\assets\snips\getCandidate.png)
            3. Función modificar habilidades
                ![](src\assets\snips\updateSkills.png)
           
## 4. Hosting
- Link a repositorio de GitHub
    > Utilicé la función de Netlify para tomar un repositorio existente de GitHub para desplegar la aplicación.
- Configuración Netlify comando de build y directorio de    publicación para proyecto de Vue.

    ![](src\assets\snips\netlifyConfig.png)


## 5. Áreas de Mejora
    Sin duda, el proceso de producción del Back End fue mi mayor debilidad del proyecto. Tuve problemas para lograr la conexión de la aplicación con la base de datos y poder interactuar con los documentos almacenados.

    La mayoría de la documentación disponible está para utilizar con Vue.js 2 con la inclusión de la librería VueFire la cual acorta y simplifica las funciones, pero no tiene soporte para Vue.js 3.



 



