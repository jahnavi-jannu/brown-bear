import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCategory } from '../../common/product-category'

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css'
})
export class ProductCategoryMenuComponent {
  productCategories: ProductCategory[];
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.listProductCategories();
  }
  listProductCategories() {
    this.productService.getProductCategories().subscribe((data) => {
      this.productCategories = data;
      console.log(data);
    })
  }
}