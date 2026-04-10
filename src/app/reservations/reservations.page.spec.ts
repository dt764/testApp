import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationsPage } from './reservations.page';
import { provideRouter } from '@angular/router';

describe('ReservationsPage', () => {
  let fixture: ComponentFixture<ReservationsPage>;
  let component: ReservationsPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsPage],
      providers: [
        provideRouter([]),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar el título correcto', () => {
    const title = fixture.nativeElement.querySelector('ion-title');
    expect(title.textContent.trim()).toBe('Reservations');
  });

  // -----------------------------
  // 🧾 TEST 1: listado de reservas
  // -----------------------------
  it('debería mostrar las reservas correctamente', () => {
    const items = fixture.nativeElement.querySelectorAll('.reservation-item');

    const texts = Array.from<HTMLElement>(items).map((el: HTMLElement) =>
      el.textContent?.trim()
    );

    expect(texts).toEqual([
      'Reservation 1',
      'Reservation 2'
    ]);
  });

  // -----------------------------
  // 🔘 TEST 2: botón de crear reserva existe
  // -----------------------------
  it('debería mostrar el botón de crear reserva', () => {
    const button = fixture.nativeElement.querySelector('.create-reservation-button');
    expect(button).toBeTruthy();
  });
});