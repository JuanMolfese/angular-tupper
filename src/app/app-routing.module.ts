import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TupperContactComponent } from "./tupper-contact/tupper-contact.component";
import { TupperMainComponent } from './tupper-main/tupper-main.component';

const routes: Routes = [
  { path: '', component: TupperMainComponent},
  { path: 'main', component: TupperMainComponent},
  { path: 'contact', component: TupperContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
