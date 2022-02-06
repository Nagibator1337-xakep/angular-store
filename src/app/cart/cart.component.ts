import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(private cartService: CartService, private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}
