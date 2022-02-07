import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts = this.cartService.getShippingPrices();

  constructor(private cartService: CartService, private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}
