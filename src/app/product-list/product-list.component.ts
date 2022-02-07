import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  timesShared:number = 0;

  constructor(private cartService: CartService) {}

  share() {
    window.alert('The product has been shared!');
    this.timesShared++;
  }

  onNotify() {
    window.alert('You\'ll be notified when the product goes on sale!');
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('"' + product.name + '" have been added to the cart!');
  }

  ngOnInit(): void {}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/