import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    // Getting a map of route params
    const routeParams = this.route.snapshot.paramMap;

    // Getting productId from params map
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Finding a product from a list where that product id is equal to the id from params map
    this.product = products.find(product => product.id === productIdFromRoute);


  }

}
