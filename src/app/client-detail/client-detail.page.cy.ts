import { mount } from 'cypress/angular';
import { ClientDetailPage } from './client-detail.page';

describe('ClientDetailPage (Cypress Component Test)', () => {

  beforeEach(() => {
    mount(ClientDetailPage, {
      componentProperties: {
        id: '1'
      }
    });
  });

  // -----------------------------
  // 🧾 TEST 1: título visible
  // -----------------------------
  it('debería mostrar el título correctamente', () => {
    cy.get('ion-title')
      .should('be.visible')
      .and('contain.text', 'Client Detail');
  });

  // -----------------------------
  // 🧾 TEST 2: ID visible
  // -----------------------------
  it('debería mostrar el ID del cliente', () => {
    cy.get('h2')
      .should('contain.text', 'Client ID: 1');
  });

  // -----------------------------
  // 🔙 TEST 3: back button existe
  // -----------------------------
  it('debería mostrar el botón de volver', () => {
    cy.get('ion-back-button')
      .should('exist')
      .and('have.attr', 'defaultHref', '/tabs/clients');
  });

});