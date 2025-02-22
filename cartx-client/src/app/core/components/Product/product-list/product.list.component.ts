import { Component } from "@angular/core";
import { ProductCardComponent } from "../product-card/product.card.component";
import { ProductService } from "../../../../services/product.service";

@Component({
    selector: "app-product-list",
    standalone: true,
    templateUrl: "./product.list.component.html",
    styleUrls: ["./product.list.component.scss"],
    imports: [ProductCardComponent],
})

export class ProductListComponent {

    products: Array<any> = [];
    productService: ProductService;
    constructor(private _productService: ProductService) {
        this.productService = _productService;
        this.products = this.productService.getProducts();
    }
}