import { Injectable } from '@angular/core';
import { Product } from './tupper-list/product';

@Injectable({
  providedIn: 'root'
})
export class TupperShoppingCartService {
  
  constructor() { }

  BuyList: Product[] = [];

  addToCart(product: Product) {
    let item : Product = this.BuyList.find((elemento => elemento.name == product.name));
    //Si no esta ese producto lo agrega
    if(!item){
      this.BuyList.push({ ... product});  
    }else{
      item.quantity += product.quantity;
    }
    console.log(this.BuyList)
  }
}
