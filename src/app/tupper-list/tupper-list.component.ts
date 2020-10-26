import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-tupper-list',
  templateUrl: './tupper-list.component.html',
  styleUrls: ['./tupper-list.component.scss']
})
export class TupperListComponent implements OnInit {

  products: Product [] = [
    
    { name:'Practi Frezze',
      type:'freezer',
      price: 289,
      stock: 5,
      image:'assets/img/practi_freeze500.jpg',
      clearance: false,
      quantity:0,
    },
    { name:'Eco Twist',
      type:'heladera',
      price: 299,
      stock: 3,
      image:'assets/img/eco_twist500.png',
      clearance: true,
      quantity:0,
    },
    { name:'Poeme',
      type:'heladera',
      price: 199,
      stock: 0,
      image:'assets/img/poeme.png',
      clearance: false,
      quantity:0,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
