import { mount } from 'cypress/angular';
import { ProductsPage } from './products.page';
import { provideRouter } from '@angular/router';

describe('ProductsPage (Cypress Component Test)', () => {

  beforeEach(() => {
    mount(ProductsPage, {
      providers: [provideRouter([])]
    });
  });

  it('debería mostrar el título correctamente', () => {
    cy.get('ion-title')
      .should('be.visible')
      .and('contain.text', 'Products');
  });

  // -----------------------------
  // 🧾 TEST 1: productos renderizados
  // -----------------------------
  it('debería mostrar los productos correctamente', () => {
    cy.get('.product-item')
      .should('have.length', 2)
      .then(($items) => {
        const texts = [...$items].map(el => el.textContent?.trim());

        expect(texts).to.deep.equal([
          'Product 1',
          'Product 2'
        ]);
      });
  });

  // -----------------------------
  // 🔘 TEST 2: botón visible
  // -----------------------------
  it('debería mostrar el botón de logout', () => {
    cy.get('.logout-button').should('be.visible');
  });

  
});