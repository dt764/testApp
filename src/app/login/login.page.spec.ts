import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { provideRouter } from '@angular/router';

describe('LoginPage', () => {
  let fixture: ComponentFixture<LoginPage>;
  let component: LoginPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // -----------------------------
  // 🧾 TEST 1: título correcto
  // -----------------------------
  it('debería mostrar el título Login', () => {
    const title = fixture.nativeElement.querySelector('ion-title');
    expect(title.textContent.trim()).toBe('Login');
  });

  // -----------------------------
  // 🧾 TEST 2: inputs visibles
  // -----------------------------
  it('debería mostrar los inputs de email y password', () => {
    const inputs = fixture.nativeElement.querySelectorAll('ion-input');

    expect(inputs.length).toBe(2);
  });

  // -----------------------------
  // 🔘 TEST 3: botón login existe
  // -----------------------------
  it('debería mostrar el botón de login', () => {
    const button = fixture.nativeElement.querySelector('.login-button');
    expect(button).toBeTruthy();
  });

  // -----------------------------
  // 🧾 TEST 4: estructura UI básica
  // -----------------------------
  it('debería renderizar el contenedor de login', () => {
    const container = fixture.nativeElement.querySelector('.login-container');
    expect(container).toBeTruthy();
  });
});