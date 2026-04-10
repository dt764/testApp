import { mount } from 'cypress/angular';
import { CreateReservationPage } from './create-reservation.page';

describe('CreateReservationPage (Cypress Component Test)', () => {

  beforeEach(() => {
    mount(CreateReservationPage, {
      providers: [
      ]
    });
  });

  // -----------------------------
  // 🧾 TEST: UI render
  // -----------------------------
  it('debería mostrar el formulario correctamente', () => {
    cy.get('ion-title')
      .should('contain.text', 'Create Reservation');

    cy.get('ion-input').should('exist');
    cy.get('.save-button').should('exist');
  });
});