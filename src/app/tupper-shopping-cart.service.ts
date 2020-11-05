import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './tupper-list/product';



@Injectable({
  providedIn: 'root'
})
export class TupperShoppingCartService {
  
  constructor() { }
  private _buyList : Product[] = [];
  buyList: BehaviorSubject <Product[]> = new BehaviorSubject([]);

  addToCart(product: Product) {
    let item : Product = this._buyList.find((elemento => elemento.name == product.name));
    //Si no esta ese producto lo agrega
    if(!item){
      this._buyList.push({ ... product});  
    }else{
      item.quantity += product.quantity;
    }
    console.log(this._buyList);
    this.buyList.next(this._buyList); //Le dice al Behavior que notifique el nuevo valor a la variable privada (equivale al emmiter de eventos).
  }
}
