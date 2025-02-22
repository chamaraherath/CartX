import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Cart } from '../models/cart.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart.items.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<Cart>({ cartItems: [], totalQuantity: 0, total: 0 });
  cart$ = this.cart.asObservable();

  constructor() { }

  getCart(): Observable<Cart> {
    return this.cart$;
  }

  addToCart(Product: Product, quantity: number) {
    const cart = this.cart.getValue();
    const exsitItem = cart.cartItems.find(item => item.Product.id === Product.id);
    if (exsitItem) {
      exsitItem.quantity += quantity;
      this.cart.next(cart);// next() method is used to emit the new value
    } else {
      cart.cartItems.push({ id: cart.cartItems.length + 1, Product, quantity });
      this.cart.next(cart);
    }
  }

  removeFromCart(cartItem: CartItem) {
    const cart = this.cart.getValue();
    const index = cart.cartItems.findIndex(item => item.Product.id === cartItem.Product.id);
    if (index > -1) {
      cart.cartItems.splice(index, 1);
      this.cart.next(cart);
    }
  }
  clearCart() {
    this.cart.next({ cartItems: [], totalQuantity: 0, total: 0 });
  }
}