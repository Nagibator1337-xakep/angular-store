import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./products";

export interface Marketdata {
  charsetinfo: { name: string };
  marketdata: [{ LAST: number }];
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(product: Product) {
    this.items.splice(this.items.indexOf(product),1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }

  async getUSDValue() {
    const DATA = "https://iss.moex.com/iss/engines/currency/markets/selt/securities.json?iss.only=marketdata&securities=CETS:USD000UTSTOM&marketdata.columns=LAST&lang=ru&iss.meta=off&iss.json=extended";
    
    let usdrub_tom: number = 0;

    await fetch(DATA)
    .then(response => response.json())
    .then(promise => JSON.stringify(promise))
    .then(jsonString => JSON.parse(jsonString))
    .then((parsedJson: Marketdata[]) => {
      usdrub_tom = parsedJson[1].marketdata[0].LAST;
    });
    return usdrub_tom;
  }
}
