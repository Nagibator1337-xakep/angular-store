import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";
import { Location } from "@angular/common";
<<<<<<< HEAD
import { Product } from "../products";
=======
>>>>>>> 4622816777a50e628c5f8e2b70db85da1b5e6683

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}
<<<<<<< HEAD

  ngOnInit(): void {}

=======

  ngOnInit(): void {}

>>>>>>> 4622816777a50e628c5f8e2b70db85da1b5e6683
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
<<<<<<< HEAD
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
=======
>>>>>>> 4622816777a50e628c5f8e2b70db85da1b5e6683
  }

  back(): void {
    this.location.back();
  }
}
