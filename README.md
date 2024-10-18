# Aplicación de Búsqueda de Zip Codes

Este proyecto depende de una aplicacion **back-end** hecho con **Node.js y Express**, la app de este repositorio es un **front-end** hecho con **React (Vite)** y **TypeScript**. La aplicación permite buscar ciudades y estados según el código postal, usando la API Zippopotam.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 18 o superior)
- **npm** (normalmente se incluye con Node.js)
- **Git** (opcional, en caso de clonar el repositorio)

## Instalación

Sigue los siguientes pasos para configurar el proyecto en tu entorno local.

1. Clona este repositorio en tu máquina local:

   ```bash
    git clone https://github.com/usuario/proyecto-zipcodes.git

   ```

2. Accede al directorio del proyecto:
   cd {ruta del repositorio}

3. En la raiz de proyecto deberás crear un archivo **.env** en el cual agregarás las siguientes lineas de código:
   VITE_API_URL="http://localhost:3000/zipcode/"

4. Una vez en la carpeta del proyecto instala los modulos de node:
   npm install

## Configuración

Antes de correr esta aplicación, es necesario descargar la aplicacion back-end y seguir los pasos que vienen en el readme correspondiente para instalar y levantar el servicio en back.

## Scripts

Para compilar el proyecto y generar los archivos JavaScript en la carpeta dist, utiliza:

    npm run build

Una vez que hayas compilado el proyecto, puedes iniciar el servidor ejecutando:

    npm start

Para trabajar en modo desarrollo:

    npm run dev

Este proyecto incluye pruebas con Jest. Para ejecutarlas, usa el siguiente comando:

    npm test
