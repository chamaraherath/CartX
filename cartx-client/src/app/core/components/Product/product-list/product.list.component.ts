import { Component, OnInit } from "@angular/core";
import { ProductCardComponent } from "../product-card/product.card.component";
import { ProductService } from "../../../../services/product.service";
import { Product } from "../../../../models/product.model";

@Component({
    selector: "app-product-list",
    standalone: true,
    templateUrl: "./product.list.component.html",
    styleUrls: ["./product.list.component.scss"],
    imports: [ProductCardComponent],
})

export class ProductListComponent implements OnInit {

    products: Product[] = [];
    constructor(private _productService: ProductService) {
    }
    ngOnInit() {
        debugger;
        this._productService.getProducts().subscribe({
            next: (data) => this.products = data,
            error: (err) => console.error('Error fetching products:', err)
        });
    }
}