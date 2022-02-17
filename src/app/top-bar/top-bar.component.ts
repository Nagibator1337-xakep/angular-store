import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  USDValue: number = 0;

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.cartService.getUSDValue().then(usdValue => this.USDValue = usdValue);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/