# Instrucciones de ejecución - Pruebas API PetStore (Opción 3)

## Requisitos previos
- Node.js instalado
- Cypress instalado como dependencia de desarrollo

## Instalación
1. Clonar o descargar el repositorio desde GitHub.
2. Abrir una terminal en la raíz del proyecto.
3. Ejecutar el siguiente comando para instalar dependencias:
   npm install

## Ejecución de pruebas
1. Ejecutar Cypress en modo interactivo:
   npx cypress open

2. Seleccionar el archivo de pruebas:
   cypress/e2e/user_api.cy.js

3. Las pruebas se ejecutarán en el navegador seleccionado. Se validan los siguientes casos:
   - Crear usuario
   - Buscar usuario creado
   - Actualizar usuario
   - Buscar usuario actualizado
   - Eliminar usuario
   - Verificar que el usuario fue eliminado

## Evidencias
- Los resultados se muestran en tiempo real en la interfaz de Cypress.
- Los logs y respuestas de la API están visibles en cada paso.
