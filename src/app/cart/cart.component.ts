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

  // shippingCosts:{ type: string; price: number }[] = [];
  shippingCosts = this.cartService.getShippingPrices();

  shippingOption:{ type: string; price: number } = {
    type: "",
    price: 0
  };

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
    // this.cartService.getShippingPrices().subscribe(shippingCosts => shippingCosts.forEach(cost => this.shippingCosts.push(cost)));
    // this.cartService.getShippingPrices().subscribe(shippingCosts => this.shippingCosts = shippingCosts);
    // console.log(this.shippingCosts);
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
    this.shippingOption = shippingOption;
  }

  back(): void {
    this.location.back();
  }
}
