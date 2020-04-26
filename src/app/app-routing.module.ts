import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

import{ OrderComponent } from './components/order/order.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { PizzaEditComponent } from './components/pizza-edit/pizza-edit.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { ManagepizzaComponent } from './components/managepizza/managepizza.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  {path:'order', component:OrderComponent},
  {path: 'showusers', component: ShowUserComponent},
  { path: 'pizza', component: ManagepizzaComponent },
  { path: 'pizza/:id', component: PizzaEditComponent },
  { path: 'pizzas', component: PizzaListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
