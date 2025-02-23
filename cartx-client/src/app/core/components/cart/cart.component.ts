import { Component, OnInit } from "@angular/core";
import { CartService } from "../../../services/cart.service";
import { Cart } from "../../../models/cart.model";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    imports: [CommonModule]
})

export class CartComponent implements OnInit {
    cart: Cart = { cartItems: [], totalQuantity: 0, total: 0 };

    constructor(private cartService: CartService) { }
    ngOnInit() {
        this.cartService.getCart().subscribe(cart => {
            this.cart = cart;
        });
    }

    getTotalPrice() {
        return this.cart.cartItems.reduce((sum, item) => sum + (item.Product.price * item.quantity), 0);
    }
}