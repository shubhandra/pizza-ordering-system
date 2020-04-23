import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ OrderComponent } from './components/order/order.component';
import { ShowUserComponent } from './components/show-user/show-user.component';


const routes: Routes = [
  {path:'order', component:OrderComponent},
  {path: 'showusers', component: ShowUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
