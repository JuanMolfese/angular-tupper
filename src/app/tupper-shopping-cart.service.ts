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
  private _total: number = 0;
  total :BehaviorSubject<number> = new BehaviorSubject<number>(this._total);

  addToCart(product: Product) {

    this._total += product.price*product.quantity;
    
    let item : Product = this._buyList.find((elemento => elemento.name == product.name));
    //Si no esta ese producto lo agrega
    if(!item){
      this._buyList.push({ ... product});  
    }else{
      item.quantity += product.quantity;
    }
    
    this.buyList.next(this._buyList); //Le dice al Behavior que notifique el nuevo valor a la variable privada (equivale al emmiter de eventos).
    this.total.next(this._total);//Le dice al Behavior que notifique el nuevo valor a la variable privada (equivale al emmiter de eventos).
  }
}
