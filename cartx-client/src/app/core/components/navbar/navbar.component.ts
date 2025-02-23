import { Component } from "@angular/core";
import { CartButtonComponent } from "../../shared/button/cart-button/cartbutton.component";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-navbar",
    standalone: true,
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
    imports: [CartButtonComponent, RouterModule]
})

export class NavbarComponent {
    constructor() { }
}