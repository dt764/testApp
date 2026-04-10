import { mount } from 'cypress/angular';
import { TabsPage } from './tabs.page';
import { provideRouter } from '@angular/router';

describe('TabsPage (Cypress Component Test)', () => {

  beforeEach(() => {
    mount(TabsPage, {
      providers: [provideRouter([])]
    });
  });

  // -----------------------------
  // 🧾 TEST 1: textos de tabs
  // -----------------------------
  it('debería mostrar los textos correctos en cada pestaña', () => {
    cy.get('ion-tab-button').then((tabs) => {
      const textos = [...tabs].map((tab) =>
        tab.textContent?.trim().replace(/\s+/g, ' ')
      );

      expect(textos).to.deep.equal([
        'Clients',
        'Reservations',
        'Products'
      ]);
    });
  });

  // -----------------------------
  // 🎨 TEST 2: iconos de tabs
  // -----------------------------
  it('debería mostrar los iconos correctos en cada pestaña', () => {
    cy.get('ion-tab-button ion-icon').then((icons) => {
      const iconNames = [...icons].map((icon) =>
        icon.getAttribute('name')
      );

      expect(iconNames).to.deep.equal([
        'people',
        'calendar',
        'color-palette'
      ]);
    });
  });

  // -----------------------------
  // 🔗 TEST 3: validación completa
  // -----------------------------
  it('cada pestaña debería tener icono y texto correcto', () => {
    const expected = [
      { text: 'Clients', icon: 'people' },
      { text: 'Reservations', icon: 'calendar' },
      { text: 'Products', icon: 'color-palette' }
    ];

    cy.get('ion-tab-button').each((tab, index) => {
      cy.wrap(tab).within(() => {

        cy.get('ion-icon')
          .should('have.attr', 'name', expected[index].icon);

        cy.root().then(($el) => {
          const text = $el.text().trim().replace(/\s+/g, ' ');
          expect(text).to.include(expected[index].text);
        });

      });
    });
  });

});