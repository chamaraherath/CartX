import { Product } from './product.model';

export interface CartItem {
    id: number;
    Product: Product;
    quantity: number;
}