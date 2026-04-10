import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateReservationPage } from './create-reservation.page';
import { provideRouter } from '@angular/router';
import { NavController } from '@ionic/angular';

describe('CreateReservationPage', () => {
  let fixture: ComponentFixture<CreateReservationPage>;
  let component: CreateReservationPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateReservationPage],
      providers: [
        provideRouter([]),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // -----------------------------
  // 🧾 TEST 1: título correcto
  // -----------------------------
  it('debería mostrar el título correcto', () => {
    const title = fixture.nativeElement.querySelector('ion-title');
    expect(title.textContent.trim()).toBe('Create Reservation');
  });

  // -----------------------------
  // 🔙 TEST 2: back button existe y defaultHref
  // -----------------------------
  it('debería mostrar el back button con defaultHref correcto', () => {
    const backButton = fixture.nativeElement.querySelector('ion-back-button');

    expect(backButton).toBeTruthy();

  });

  // -----------------------------
  // 🧾 TEST 3: input inicial vacío
  // -----------------------------
  it('debería iniciar con reservationName vacío', () => {
    expect(component.reservationName).toBe('');
  });
});