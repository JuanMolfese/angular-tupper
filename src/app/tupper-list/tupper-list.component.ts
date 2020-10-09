import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tupper-list',
  templateUrl: './tupper-list.component.html',
  styleUrls: ['./tupper-list.component.scss']
})
export class TupperListComponent implements OnInit {

  product ={
      "name":"Practi Frezze",
      "type":"freezer",
      "price":249,
      "stock":5,
      "image":"assets/img/practi_freeze500.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
