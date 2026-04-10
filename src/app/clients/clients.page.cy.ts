import { mount } from 'cypress/angular';
import { ClientsPage } from './clients.page';
import { provideRouter } from '@angular/router';

describe('ClientsPage (Cypress Component Test)', () => {

  beforeEach(() => {
    mount(ClientsPage,{
        providers: [provideRouter([])]
    });
  });

  // -----------------------------
  // 🧾 TEST 1: número de clientes
  // -----------------------------
  it('debería renderizar 6 clientes', () => {
    cy.get('ion-card').should('have.length', 6);
  });

  // -----------------------------
  // 🧾 TEST 2: nombres correctos
  // -----------------------------
  it('debería mostrar los nombres correctamente', () => {
    cy.get('.client-info h2')
      .then(($els) => {
        const names = [...$els].map(el => el.textContent?.trim());

        expect(names).to.deep.equal([
          'John Doe',
          'Alice Smith',
          'Michael Wong',
          'Emma Richards',
          'Lucas Brown',
          'Sarah Thompson'
        ]);
      });
  });

  // -----------------------------
  // 🧾 TEST 3: fechas correctas
  // -----------------------------
  it('debería mostrar las fechas de último contacto correctamente', () => {
    cy.get('.client-info p')
      .then(($els) => {
        const dates = [...$els].map(el => el.textContent?.trim());

        expect(dates).to.deep.equal([
          'Last contact: Oct 24, 2023',
          'Last contact: Oct 22, 2023',
          'Last contact: Oct 15, 2023',
          'Last contact: Oct 12, 2023',
          'Last contact: Sep 30, 2023',
          'Last contact: Sep 28, 2023'
        ]);
      });
  });

  // -----------------------------
  // 🔗 TEST 4: validación completa por card
  // -----------------------------
  it('cada card debe mostrar nombre y fecha correctos', () => {
    const expected = [
      { name: 'John Doe', date: 'Oct 24, 2023' },
      { name: 'Alice Smith', date: 'Oct 22, 2023' },
      { name: 'Michael Wong', date: 'Oct 15, 2023' },
      { name: 'Emma Richards', date: 'Oct 12, 2023' },
      { name: 'Lucas Brown', date: 'Sep 30, 2023' },
      { name: 'Sarah Thompson', date: 'Sep 28, 2023' }
    ];

    cy.get('ion-card').each((card, index) => {
      cy.wrap(card).within(() => {
        cy.get('h2').should('contain.text', expected[index].name);
        cy.get('p').should('contain.text', expected[index].date);
      });
    });
  });
});