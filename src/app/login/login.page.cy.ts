import { mount } from 'cypress/angular';
import { LoginPage } from './login.page';

describe('LoginPage (Cypress Component Test)', () => {

  beforeEach(() => {
    mount(LoginPage);
  });

  // -----------------------------
  // 🧾 TEST 1: título visible
  // -----------------------------
  it('debería mostrar el título Login', () => {
    cy.get('ion-title')
      .should('be.visible')
      .and('contain.text', 'Login');
  });

  // -----------------------------
  // 🧾 TEST 2: inputs visibles
  // -----------------------------
  it('debería mostrar inputs de email y password', () => {
    cy.get('ion-input')
      .should('have.length', 2)
      .and('be.visible');
  });

  // -----------------------------
  // 🔘 TEST 3: botón login visible
  // -----------------------------
  it('debería mostrar el botón de login', () => {
    cy.get('.login-button')
      .should('be.visible')
      .and('contain.text', 'Log In');
  });

  // -----------------------------
  // 🧾 TEST 4: estructura general
  // -----------------------------
  it('debería renderizar la UI del login correctamente', () => {
    cy.get('.login-container').should('exist');

    cy.get('.login-input').should('have.length', 2);
  });

});