import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsPage } from './clients.page';
import { provideRouter } from '@angular/router';

describe('ClientsPage', () => {
  let fixture: ComponentFixture<ClientsPage>;
  let component: ClientsPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // -----------------------------
  // 🧾 TEST 1: número de clientes
  // -----------------------------
  it('debería renderizar el número correcto de clientes', () => {
    const cards = fixture.nativeElement.querySelectorAll('ion-card');
    expect(cards.length).toBe(6);
  });

  // -----------------------------
  // 🧾 TEST 2: nombres correctos
  // -----------------------------
  it('debería mostrar los nombres de los clientes correctamente', () => {
    const names = Array.from<HTMLElement>(
      fixture.nativeElement.querySelectorAll('.client-info h2')
    ).map((el: HTMLElement) => el.textContent?.trim());

    expect(names).toEqual([
      'John Doe',
      'Alice Smith',
      'Michael Wong',
      'Emma Richards',
      'Lucas Brown',
      'Sarah Thompson'
    ]);
  });

  // -----------------------------
  // 🧾 TEST 3: última fecha de contacto
  // -----------------------------
  it('debería mostrar las fechas de último contacto correctamente', () => {
    const dates = Array.from<HTMLElement>(
      fixture.nativeElement.querySelectorAll('.client-info p')
    ).map((el: HTMLElement) => el.textContent?.trim());

    expect(dates).toEqual([
      'Last contact: Oct 24, 2023',
      'Last contact: Oct 22, 2023',
      'Last contact: Oct 15, 2023',
      'Last contact: Oct 12, 2023',
      'Last contact: Sep 30, 2023',
      'Last contact: Sep 28, 2023'
    ]);
  });

  // -----------------------------
  // 🔗 TEST 4: validación completa por tarjeta
  // -----------------------------
  it('cada tarjeta debe mostrar datos correctos', () => {
    const cards = fixture.nativeElement.querySelectorAll('ion-card');

    const expected = [
      { name: 'John Doe', date: 'Oct 24, 2023' },
      { name: 'Alice Smith', date: 'Oct 22, 2023' },
      { name: 'Michael Wong', date: 'Oct 15, 2023' },
      { name: 'Emma Richards', date: 'Oct 12, 2023' },
      { name: 'Lucas Brown', date: 'Sep 30, 2023' },
      { name: 'Sarah Thompson', date: 'Sep 28, 2023' }
    ];

    Array.from(cards).forEach((card: any, index) => {
      const name = card.querySelector('h2')?.textContent?.trim();
      const date = card.querySelector('p')?.textContent?.trim();

      expect(name).toBe(expected[index].name);
      expect(date).toBe(`Last contact: ${expected[index].date}`);
    });
  });
});