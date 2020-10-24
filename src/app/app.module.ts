import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TupperListComponent } from './tupper-list/tupper-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { TupperContactComponent } from "./tupper-contact/TupperContactComponent";
import { TupperMainComponent } from './tupper-main/tupper-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TupperListComponent,
    ShoppingCartComponent,
    TupperContactComponent,
    TupperMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
