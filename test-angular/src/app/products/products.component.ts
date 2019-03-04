import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productName = 'Plane';
  isDisabled = true;
  products = [
    'A Book',
    'A Tree'
  ]

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000)
  }

  ngOnInit() {
  }

  onAddProduct() {
    this.products.push(this.productName);
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName)
  }

}
