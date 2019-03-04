import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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

}
