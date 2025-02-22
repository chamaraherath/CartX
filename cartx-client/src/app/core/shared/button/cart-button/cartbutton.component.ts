import { Component, OnInit } from "@angular/core";
import { CartService } from "../../../../services/cart.service";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-cart-button",
    standalone: true,
    templateUrl: "./cartbutton.component.html",
    styleUrls: ["./cartbutton.component.scss"],
    imports: [RouterModule]
})

export class CartButtonComponent implements OnInit {
    itemCount: number = 0;
    constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.cartService.getCart().subscribe((cart) => {
            this.itemCount = cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);
        })
    }
}