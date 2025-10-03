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
