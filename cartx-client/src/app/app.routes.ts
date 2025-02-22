import { Routes } from '@angular/router';
import { CartComponent } from './core/components/cart/cart.component';
import { HomeComponent } from './core/components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cart', component: CartComponent }
];
