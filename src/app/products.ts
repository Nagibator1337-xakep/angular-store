export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'yPhone XL',
    price: 1099,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'yPhone Mini',
    price: 799,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'yPhone Standard',
    price: 499,
    description: 'You can call people with it'
  },
  {
    id: 4,
    name: 'yPhone C',
    price: 299,
    description: 'A brick'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/