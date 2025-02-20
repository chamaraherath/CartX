import { Component } from "@angular/core";
import { CartButtonComponent } from "../../shared/button/cart-button/cartbutton.component";

@Component({
    selector: "app-navbar",
    standalone: true,
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
    imports: [CartButtonComponent]
})

export class NavbarComponent {
    constructor() { }
}