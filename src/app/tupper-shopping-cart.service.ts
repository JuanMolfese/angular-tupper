import { Injectable } from '@angular/core';
import { Product } from './tupper-list/product';

@Injectable({
  providedIn: 'root'
})
export class TupperShoppingCartService {
  
  constructor() { }

  BuyList: Product[] = [];

  addToCart(product: Product) {
    this.BuyList.push(product);    
  }
}
