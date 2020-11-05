import { Component, OnInit } from '@angular/core';
import { TupperShoppingCartService } from '../tupper-shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cart: TupperShoppingCartService) { }

  ngOnInit(): void {
  }

}
