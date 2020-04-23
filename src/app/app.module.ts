import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PizzaEditComponent } from './components/pizza-edit/pizza-edit.component';


import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaComponent } from './components/pizza-list/pizza/pizza.component';
import { ManagepizzaComponent } from './components/managepizza/managepizza.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
   
    RegisterComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    PizzaEditComponent,
    PizzaListComponent,
    PizzaComponent,
    ManagepizzaComponent,
  ],
  imports: [
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,

    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
