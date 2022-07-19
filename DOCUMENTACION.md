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
    ![](https://i.ibb.co/pvH6jcm/Luuvia-de-ideas.jpg)

    2. Draft Funcionamiento
    ![](https://i.ibb.co/CQfTz2Y/Diagrama.jpg)

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
    ![](https://i.ibb.co/BLmMMM2/Draft.jpg)

    5. Mock en Figma
        - Interfaz 1
            ![](https://i.ibb.co/f4fD1rw/mock1.png)

        - Interfaz 2
            ![](https://i.ibb.co/8x6DDZX/mock2.png)



- **Cronograma**
![](https://i.ibb.co/FH5FP50/cronograma.png)

## 3. Proceso de desarrollo del proyecto
- **Creando Repositorio**
![](https://i.ibb.co/0B8DyTx/creando-repo.png)
- **Creando proyecto local**
    1. Instalando Vue.js con Vue CLI 
        ![](https://i.ibb.co/pQ14VSJ/vue-create.png)

    2. Limpiando el boilerplate
        ![](https://i.ibb.co/BcF3vtL/boilerplate.png)

    3. Instalando librerías
        - Bootstrap
            ![](https://i.ibb.co/RbCPLYn/bootstrap.png)
        - Font Awesome
            ![](https://i.ibb.co/MZvfg3g/fontawesome.png)
    4. Creando el Routing
        ![](https://i.ibb.co/FYnP3Hf/router.png)

    5. Desarrollo Front End
        - Creando NavBar
            ![](https://i.ibb.co/JHqL2mB/navbar.png)
        - Creación Rutas del routing
            ![](https://i.ibb.co/drLDN9Q/routing.png)
        - View Home
            1. Sección añadir candidato
                ![](https://i.ibb.co/FghKGLG/a-adircandidato.png)
                - *Resultado:*
                    ![](https://i.ibb.co/VDcNb8J/secciona-adir.png)
            2. Sección lista candidatos
                ![](https://i.ibb.co/mBtmVYc/listacandidatos.png)
                - *Resultado:*
                    ![](https://i.ibb.co/mhbZK1P/seccionlista.png)
        - View Candidato
            1. Sección datos candidato
                ![](https://i.ibb.co/Qpp2525/datos-candidato.png)
                - *Resultado:*
                    ![](https://i.ibb.co/8N5Txc8/secciondatos.png)
            2. Sección habilidades candidatos
                ![](https://i.ibb.co/w7BPzrV/skills-candidato.png)
                - *Resultado:*
                    ![](https://i.ibb.co/BcbJSxc/seccionhabilidades.png)

    6. Desarrollo Back End
        - Configuración SDK Firebase
            ![](https://i.ibb.co/166Jr9t/firebase.png)

    7. Back End + Front End
        >Posterior al Desarrollo de este proyecto, mi experiencia con Firebase era nula. Por lo que se utilizó la documentación de Firebase y Stack Overflow para poder crear las funciones de lectura y escritura (CRUD) para interactuar con la base de datos.

        >Tuve algunos inconvenientes, puesto que la mayoría de la documentación eran de proyectos utilizando Vue.js 2 con la librería VueFire, dependencia que simplifica las funciones y ejecuta código más simplificado. Por lo que tuve que guiarme con proyectos donde se utilizaba React y transformarlo a código de Vue.js 3.

        - Componente Home 
            1. Creación de variables REF
                ![](https://i.ibb.co/QJ7XsJ3/variables.png)
            2. Función leer database
                ![](https://i.ibb.co/DKmsPsg/leer-database.png)
            3. Función añadir database
                ![](https://i.ibb.co/94CXpWH/a-adir-a-database.png)
            4. Función eliminar candidato
                ![](https://i.ibb.co/jr9YDNh/eliminar-de-database.png)

        - Componente Vista Candidato 
            1. Routing ID Candidato
                ![](https://i.ibb.co/XbhdY3Y/useRoute.png)
            2. Función tomar candidato
                ![](https://i.ibb.co/mCYmQRC/get-candidate.png)
            3. Función modificar habilidades
                ![](https://i.ibb.co/KmcPk3j/update-candidate.png)
           
## 4. Hosting
- Link a repositorio de GitHub
    > Utilicé la función de Netlify para tomar un repositorio existente de GitHub para desplegar la aplicación.
- Configuración Netlify comando de build y directorio de    publicación para proyecto de Vue.

    ![](https://i.ibb.co/m9vgzG1/netlify-Config.png)


## 5. Áreas de Mejora
    Sin duda, el proceso de producción del Back End fue mi mayor debilidad del proyecto. Tuve problemas para lograr la conexión de la aplicación con la base de datos y poder interactuar con los documentos almacenados.

    La mayoría de la documentación disponible está para utilizar con Vue.js 2 con la inclusión de la librería VueFire la cual acorta y simplifica las funciones, pero no tiene soporte para Vue.js 3.



 



