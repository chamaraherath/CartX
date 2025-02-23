import { Component, Input } from "@angular/core";
import { Product } from "../../../../models/product.model";
import { CartService } from "../../../../services/cart.service";

@Component({
    selector: "app-product-card",
    standalone: true,
    templateUrl: "./product.card.component.html",
    styleUrls: ["./product.card.component.scss"],
})

export class ProductCardComponent {
    @Input() product!: Product;
    constructor(private cartService: CartService) { }

    addToCart(product: Product, quantity: number) {
        debugger;
        this.cartService.addToCart(product, quantity);
    }
}