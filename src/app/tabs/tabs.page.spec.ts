import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsPage } from './tabs.page';
import { provideRouter } from '@angular/router';

describe('TabsPage', () => {
  let fixture: ComponentFixture<TabsPage>;
  let component: TabsPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  // -----------------------------
  // 🧾 TEST 1: textos de tabs
  // -----------------------------
  it('debería mostrar los textos correctos en cada pestaña', () => {
    const tabs = fixture.nativeElement.querySelectorAll('ion-tab-button');

    const textos = Array.from<HTMLElement>(tabs).map((tab) =>
      tab.textContent?.trim().replace(/\s+/g, ' ')
    );

    expect(textos).toEqual([
      'Clients',
      'Reservations',
      'Products'
    ]);
  });

  // -----------------------------
  // 🎨 TEST 2: iconos de tabs
  // -----------------------------
  it('debería mostrar los iconos correctos en cada pestaña', () => {
    const icons = fixture.nativeElement.querySelectorAll('ion-icon');

    const iconNames = Array.from(icons).map((icon: any) =>
      icon.getAttribute('name')
    );

    expect(iconNames).toEqual([
      'people',
      'calendar',
      'color-palette'
    ]);
  });

  // -----------------------------
  // 🔗 TEST 3: validación completa
  // -----------------------------
  it('cada pestaña debería tener icono y texto correcto', () => {
    const tabs = fixture.nativeElement.querySelectorAll('ion-tab-button');

    const expected = [
      { text: 'Clients', icon: 'people' },
      { text: 'Reservations', icon: 'calendar' },
      { text: 'Products', icon: 'color-palette' }
    ];

    Array.from<HTMLElement>(tabs).forEach((tab, index) => {
      const text = tab.textContent?.trim().replace(/\s+/g, ' ');

      const icon = tab.querySelector('ion-icon')?.getAttribute('name');

      expect(text).toBe(expected[index].text);
      expect(icon).toBe(expected[index].icon);
    });
  });
});