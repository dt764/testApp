import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientDetailPage } from './client-detail.page';
import { provideRouter } from '@angular/router';

describe('ClientDetailPage', () => {
  let fixture: ComponentFixture<ClientDetailPage>;
  let component: ClientDetailPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDetailPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientDetailPage);
    component = fixture.componentInstance;

    // simulamos input binding
    component.id = '1';

    fixture.detectChanges();
  });

  // -----------------------------
  // 🧾 TEST 1: título correcto
  // -----------------------------
  it('debería mostrar el título correcto', () => {
    const title = fixture.nativeElement.querySelector('ion-title');
    expect(title.textContent.trim()).toBe('Client Detail');
  });

  // -----------------------------
  // 🧾 TEST 2: ID del cliente
  // -----------------------------
  it('debería mostrar el ID del cliente', () => {
    const text = fixture.nativeElement.querySelector('h2').textContent;

    expect(text).toContain('Client ID: 1');
  });

  // -----------------------------
  // 🔙 TEST 3: back button existe
  // -----------------------------
  it('debería mostrar el ion-back-button', () => {
    const backButton = fixture.nativeElement.querySelector('ion-back-button');

    expect(backButton).toBeTruthy();
  });

});