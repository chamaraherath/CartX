import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { CartButtonComponent } from '../../../shared/components/cart-button/cart-button.component'; // Assuming path
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent, CartButtonComponent ], // Declare CartButtonComponent if it's used directly in NavbarComponent's template
      imports: [ RouterTestingModule ] // Import RouterTestingModule for routerLink directives
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render navbar elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('nav')).toBeTruthy();
    expect(compiled.querySelector('app-cart-button')).toBeTruthy();
  });

  it('should have a routerLink to home for the brand logo', () => {
    const brandLogo = fixture.debugElement.query(By.css('.navbar-brand'));
    expect(brandLogo.nativeElement.getAttribute('href')).toBe('/'); // Angular routerLink="" is rendered as href="/"
  });

  it('should have a routerLink to home for the Home link', () => {
    const homeLink = fixture.debugElement.queryAll(By.css('.nav-link'))
                       .find(el => el.nativeElement.textContent.trim() === 'Home');
    expect(homeLink).toBeTruthy(); // Ensure the link is found
    if (homeLink) {
      expect(homeLink.nativeElement.getAttribute('href')).toBe('/'); // Angular routerLink="" is rendered as href="/"
    }
  });
});
