import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPage } from './products.page';
import { provideRouter } from '@angular/router';
import { NavController } from '@ionic/angular';

describe('ProductsPage', () => {
  let fixture: ComponentFixture<ProductsPage>;
  let component: ProductsPage;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPage],
      providers: [
        provideRouter([]),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar el título correcto', () => {
    const title = fixture.nativeElement.querySelector('ion-title');
    expect(title.textContent.trim()).toBe('Products');
  });

  // -----------------------------
  // 🧾 TEST 1: productos renderizados
  // -----------------------------
  it('debería mostrar los productos correctamente', () => {
    const items = fixture.nativeElement.querySelectorAll('.product-item');

    const texts = Array.from<HTMLElement>(items).map((el: HTMLElement) =>
      el.textContent?.trim()
    );

    expect(texts).toEqual([
      'Product 1',
      'Product 2'
    ]);
  });

  // -----------------------------
  // 🔘 TEST 2: botón logout existe
  // -----------------------------
  it('debería mostrar el botón de logout', () => {
    const button = fixture.nativeElement.querySelector('.logout-button');
    expect(button).toBeTruthy();
  });

});