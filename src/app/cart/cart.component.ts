import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";
import { Location } from "@angular/common";
import { Product } from "../products";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  shippingCosts = this.cartService.getShippingPrices();

  shippingOption = this.cartService.getShippingOption();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.shippingOption = {type: "", price: 0};
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  getTotalPrice():number {
    let price:number = 0;
    this.items.forEach(item => price+=item.price);
    price+=this.shippingOption.price;
    return price;
  }

  selectShippingOption(shippingOption:{ type: string; price: number }) {
    this.cartService.selectShippingOption(shippingOption);
    this.shippingOption = this.cartService.getShippingOption();
  }

  back(): void {
    this.location.back();
  }
}
