OPCIÓN 2 DE AUTOMATIZACIÓN E2E CON CYPRESS

Este ejercicio automatiza el flujo completo de compra en [SauceDemo](https://www.saucedemo.com) utilizando Cypress.io. El test simula el comportamiento de un usuario real: login, selección de productos, checkout y validación del mensaje final de confirmación.

1. Instalar Node.js desde https://nodejs.org/es/download (v22.20.0 LTS) extensión .msi
2. Verificar si se instalado correctamente Node.js. En Power Shell se utilizo los comando para verificar la instalación: 
 node -v
 npm -v
3. En Power Shell ejecutamos el comando 'cd C:\Users\personal\Desktop\Automatizacion_E2E_APIS' para ir a la carpeta Automatizacion_E2E_APIS, en el directorio ejecutamos el comando mkdir saucedemo-e2e para crear la carpeta del proyecto 
4. Ejecutamos el comando 'cd saucedemo-e2e' desde Power Shell.
5. En el directorio 'cd C:\Users\personal\Desktop\Automatizacion_E2E_APIS\saucedemo-e2e' ejecutamos el comando 'npm init -y' para iniciar el proyecto 
6. Instalar Cypress con el comando 'npm install cypress --save-dev' desde Power Shell desde la ruta 'cd C:\Users\personal\Desktop\Automatizacion_E2E_APIS\saucedemo-e2e'
5. Abrimos Cypress por primera vez utilizando el comando 'npx cypress open'
6. Una vez iniciado Cypress se nos muestra la ventana de Bienvenida 'Welcome to Cypress'
7. Seleccionamos 'No Configured' de la primera opción 'E2E Testing'.
8. La siguiente interfaz que se muestra es la 'Configuration files' que le damos clic en 'Continue'
9. Elegimos el navegador en el que Cypress ejecutará tu prueba E2E, luego le damos clic en 'Start E2E Testing in Firefox'
10. Crear el archivo para la prueba haciendo clic en 'Create new spec'
11. Confirmamos la ruta del archivo, la que es la siguiente: cypress/e2e/saucedemo.cy.js
12. Editamos el archivo 'saucedemo.cy.js' y agregamos esto:
describe('Flujo de compra en SauceDemo', () => {
  it('Realiza login y compra productos', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_link').click();

    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Jean');
    cy.get('[data-test="lastName"]').type('Ca');
    cy.get('[data-test="postalCode"]').type('090101');
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="finish"]').click();
    cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible');
  });
});

13. Corremos el saucedemo.cy.js

