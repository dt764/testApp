describe('E2E Ionic App', () => {

  // =====================================================
  // 👤 CLIENTS FLOW
  // =====================================================

  describe('Clients', () => {

    it('debería acceder al detalle del cliente y mostrar el ID', () => {
      cy.visit('/tabs/clients');

      cy.get('ion-card')
        .first()
        .should('be.visible')
        .click();

      cy.url().should('include', '/tabs/clients/1');

      cy.get('h2')
        .should('contain.text', 'Client ID: 1');
    });

    it('debería volver a Clients desde detalle con botón atrás', () => {
      cy.visit('/tabs/clients');

      cy.get('ion-card').first().click();

      cy.get('ion-back-button')
        .should('exist')
        .click();

      cy.url().should('include', '/tabs/clients');
    });

    it('debería volver a Clients desde acceso directo (defaultHref)', () => {
      cy.visit('/tabs/clients/1');

      cy.get('ion-back-button')
        .should('exist')
        .click();

      cy.url().should('include', '/tabs/clients');
    });

  });

  // =====================================================
  // 📅 RESERVATIONS FLOW
  // =====================================================

  describe('Reservations', () => {

    it('debería acceder a la creación de reservas correctamente', () => {
      cy.visit('/tabs/reservations');

      cy.get('.create-reservation-button')
        .should('be.visible')
        .click();

      cy.url().should('include', '/tabs/reservations/create');
    });

    it('debería volver a Reservations desde creación con botón atrás', () => {
      cy.visit('/tabs/reservations');

      cy.get('.create-reservation-button').click();

      cy.get('ion-back-button')
        .should('exist')
        .click();

      cy.url().should('include', '/tabs/reservations');
    });

    it('debería volver a Reservations desde acceso directo (defaultHref)', () => {
      cy.visit('/tabs/reservations/create');

      cy.get('ion-back-button')
        .should('exist')
        .click();

      cy.url().should('include', '/tabs/reservations');
    });

    it('debería guardar una reserva válida y volver a Reservations', () => {
      cy.visit('/tabs/reservations');

      // ir a creación
      cy.get('.create-reservation-button')
        .should('be.visible')
        .click();

      cy.url().should('include', '/tabs/reservations/create');

      // escribir en el input
      cy.get('ion-input')
        .type('Reserva Cypress');

      // guardar
      cy.get('.save-button')
        .should('be.visible')
        .click();

      // comprobar navegación de vuelta
      cy.url().should('include', '/tabs/reservations');
    });

  });

  // =====================================================
  // 🚪 LOGOUT FLOW
  // =====================================================

  describe('Auth / Logout', () => {

    it('debería redirigir a login al cerrar sesión', () => {
      cy.visit('/tabs/products');

      cy.get('.logout-button')
        .should('be.visible')
        .scrollIntoView()
        .click();

      cy.url().should('include', '/login');
    });

  });

});