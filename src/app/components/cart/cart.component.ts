import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaListComponent } from '../pizza-list/pizza-list.component';
import { PizzaComponent } from '../pizza-list/pizza/pizza.component';
import {CartItemComponent } from  '../cart/cart-item/cart-item.component';
import {CartItem} from 'src/app/models/cart-item.model';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   
    // cartItems= [
    //     //  {pizzaName:'Margherita', pizzaSize:'small',price:150,qty: 1,pizzaToppings:'Golden Corn'},      
    //     //  {pizzaName:'Margherita', pizzaSize:'small',price:150,qty: 1,pizzaToppings:'Golden Corn'}, 
    //     //  {pizzaName:'Margherita', pizzaSize:'small',price:150,qty: 1,pizzaToppings:'Golden Corn'},
    //     //  {pizzaName:'Margherita', pizzaSize:'small',price:150,qty: 1,pizzaToppings:'Golden Corn'} 

    // ];
    cartItems=[];

    cartTotal=0;

    constructor(private msg: MessengerService,
      private cartService: CartService) { }

    ngOnInit() {
      this.handleSubscription();
      this.loadCartItems();
    }

    handleSubscription() {
      this.msg.getMsg().subscribe((pizza :Pizza) => {
        this.loadCartItems();
      })
    }

    loadCartItems() {
      this.cartService.getCartItems().subscribe((items:CartItem[]) =>{
        this.cartItems=items;
        this.calCartTotal(); 
      })
    }

  //   addToCartItems(pizza:Pizza) {
       
  //     let pizzaExists=false
  //     for(let i in this.cartItems) {
  //     if(this.cartItems[i].pizzaName===pizza.name){
  //       this.cartItems[i].qty++
  //       pizzaExists=true
  //       break;
  //     }
  //   }
  //     if(!pizzaExists)
  //     {this.cartItems.push({
  //         pizzaName:pizza.name,
  //         pizzaSize:pizza.size,
  //         price: pizza.price,
  //         qty: 1,
  //         pizzaToppings: pizza.toppings
      
  //     })
  //   }
  //   this.calCartTotal();
  // }
     calCartTotal() {
      this.cartTotal=0;
      this.cartItems.forEach(item=> {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
  
    



  



