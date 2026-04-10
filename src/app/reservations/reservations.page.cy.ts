import { ReservationsPage } from './reservations.page';
import { provideRouter } from '@angular/router';

describe('ReservationsPage', () => {
  beforeEach(() => {
    cy.mount(ReservationsPage, {
      providers: [provideRouter([])
      ]
    });
  });

  // -----------------------------
  // 🧾 TEST 1: título
  // -----------------------------
  it('debería mostrar el título correcto', () => {
    cy.get('ion-title')
      .should('exist')
      .and('have.text', 'Reservations');
  });

  // -----------------------------
  // 🧾 TEST 2: listado reservas
  // -----------------------------
  it('debería mostrar las reservas correctamente', () => {
    cy.get('.reservation-item')
      .should('have.length', 2)
      .then(items => {
        const texts = [...items].map(el => el.textContent?.trim());

        expect(texts).to.deep.equal([
          'Reservation 1',
          'Reservation 2'
        ]);
      });
  });

  // -----------------------------
  // 🔘 TEST 3: botón crear reserva
  // -----------------------------
  it('debería mostrar el botón de crear reserva', () => {
    cy.get('.create-reservation-button')
      .should('exist');
  });

});