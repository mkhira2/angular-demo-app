import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit{
    productName = 'A Book';
    isDisabled = true;
    products = [];

    constructor(private productsService: ProductsService) {
        setTimeout(() => {
            this.isDisabled = false;
        }, 3000);
    }

    ngOnInit() {
        this.products = this.productsService.getProducts();
    }

    onAddProduct(form) {
        if (form.valid) {
            this.productsService.addProduct(form.value.productName);
        }
    }

    onRemoveProduct(productName: string) {
        this.products = this.products.filter(p => p !== productName);
    }
}