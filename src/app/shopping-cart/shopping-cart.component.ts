import { Component, OnInit } from '@angular/core';
import { Product } from '../tupper-list/product';
import { TupperShoppingCartService } from '../tupper-shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  buyList: Product[] = [];

  constructor(private cart: TupperShoppingCartService) { 
    cart.buyList.subscribe( obserbable => this.buyList = obserbable);
  }

  ngOnInit(): void {
  }

}
