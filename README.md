
# Gestión de Empresas - Angular Frontend

Este es un proyecto de gestión de empresas desarrollado con **Angular**, el cual consume una API REST para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre las empresas. Utiliza **Angular Material** para la interfaz de usuario y **SweetAlert2** para las notificaciones.

## Características

- Listar empresas.
- Crear una nueva empresa.
- Editar la información de una empresa existente.
- Eliminar una empresa.
- Validaciones en los formularios para la creación y edición de empresas.
- Diseño basado en Angular Material para mejorar la experiencia del usuario.

## Requisitos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/en/) (v14 o superior)
- [Angular CLI](https://cli.angular.io/) (v18 o superior)

## Instalación

Sigue los siguientes pasos para clonar y ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/proyecto-gestion-empresas.git
   ```

2. Ingresa al directorio del proyecto:
   ```bash
   cd client
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución de la Aplicación

Para ejecutar la aplicación en un servidor de desarrollo, utiliza el siguiente comando:

```bash
npm start
```

Luego, abre tu navegador y ve a `http://localhost:4200/`.

## Estructura del Proyecto

```
client/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── empresa-detail/
│   │   │   └── empresas-list/
│   │   └── services/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── package.json
├── README.md
```

## Servicios y Componentes

### Servicios

Los servicios para la gestión de empresas están definidos en el archivo `empresas-service.service.ts`. Este servicio incluye los métodos para consumir la API REST (GET, POST, PUT, DELETE).

### Componentes

- `EmpresasListComponent`: Lista todas las empresas.
- `EmpresaDetailComponent`: Permite la creación y edición de empresas.

## Construcción del Proyecto

Para generar los artefactos de producción:

```bash
ng build
```

Los archivos generados estarán en el directorio `dist/`.

## Pruebas

### Pruebas Unitarias

Para ejecutar las pruebas unitarias con [Karma](https://karma-runner.github.io):

```bash
ng test
```

### Pruebas End-to-End

Para ejecutar pruebas end-to-end:

```bash
ng e2e
```

## API

Este proyecto consume una API REST ubicada en `http://localhost:4000/api/`. Los endpoints utilizados son los siguientes:

- `GET /empresas`: Obtiene la lista de empresas.
- `GET /empresa/:id`: Obtiene los detalles de una empresa específica.
- `POST /empresa`: Crea una nueva empresa.
- `PUT /empresa/:id`: Actualiza los datos de una empresa existente.
- `DELETE /empresa/:id`: Elimina una empresa.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes consultar el archivo [LICENSE](LICENSE) para más detalles.
