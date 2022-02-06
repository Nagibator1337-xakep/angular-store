import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Product, products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // Getting a map of route params
    const routeParams = this.route.snapshot.paramMap;

    // Getting productId from params map
    const productIdFromRoute = Number(routeParams.get("productId"));

    // Finding a product from a list where that product id is equal to the id from params map
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  back(): void {
    this.router.navigate([""]);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert('"' + product.name + '" have been added to the cart!');
  }
}