import { Component } from "@angular/core";
import { ProductCategoryMenuComponent } from "../product-category-menu/product.category.menu.component";
import { ProductListComponent } from "../Product/product-list/product.list.component";

@Component({
    selector: "app-home",
    standalone: true,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    imports: [ProductCategoryMenuComponent, ProductListComponent],
})

export class HomeComponent {
    title = "CartX";
}