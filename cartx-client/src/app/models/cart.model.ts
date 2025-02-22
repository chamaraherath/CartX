import { CartItem } from './cart.items.model';

export interface Cart {
    cartItems: CartItem[],
    totalQuantity: number,
    total: number
}