describe('Pruebas API PetStore - Usuario', () => {
  const baseUrl = 'https://petstore.swagger.io/v2/user';
  const username = 'jeanca_test';

  it('Crear usuario', () => {
    cy.request('POST', baseUrl, {
      id: 1001,
      username,
      firstName: 'Jean',
      lastName: 'Andagoya',
      email: 'jeanca@example.com',
      password: '123456',
      phone: '1234567890',
      userStatus: 1
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Buscar usuario creado', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/${username}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 404]);
      if (response.status === 200) {
        expect(response.body.username).to.eq(username);
      } else {
        cy.log('Usuario no encontrado. La API no persiste datos.');
      }
    });
  });

  it('Actualizar usuario', () => {
    cy.request('PUT', `${baseUrl}/${username}`, {
      id: 1001,
      username,
      firstName: 'Jean Updated',
      lastName: 'Andagoya Updated',
      email: 'jeanca_updated@example.com',
      password: '123456',
      phone: '1234567890',
      userStatus: 1
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Buscar usuario actualizado', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/${username}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 404]);
      if (response.status === 200) {
        expect(response.body.firstName).to.eq('Jean Updated');
        expect(response.body.email).to.eq('jeanca_updated@example.com');
      } else {
        cy.log('Usuario no encontrado. La API no persiste datos.');
      }
    });
  });

  it('Eliminar usuario', () => {
    cy.request('DELETE', `${baseUrl}/${username}`)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('Verificar que el usuario fue eliminado', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/${username}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq('User not found');
    });
  });
});
