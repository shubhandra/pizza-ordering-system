import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item.model';
import { Pizza } from '../models/pizza.model';
import {CartItemComponent} from '../components/cart/cart-item/cart-item.component'

@Injectable({
  providedIn: 'root'
})
export class CartService {
   

  private _eventsUrl = "http://localhost:3000/order";
  private _specialEventsUrl = "http://localhost:3000/pizzas";
 
  constructor(private http: HttpClient) { }

  getCartItems() :Observable<CartItem[]> {

    return this.http.get<CartItem[]>(this. _specialEventsUrl).pipe(
     map((result: any[]) => {
        let cartItems: CartItem[]= [];

        for(let item of result) {
          let pizzaExists=false

          for(let i in CartItem) {
            if(cartItems[i].pizzaName === item.pizza.name) {
              cartItems[i].qty++
              pizzaExists=true
              break;
          }
        }

        if(!pizzaExists) {
          cartItems.push( new CartItem(item.name,item.pizza));
        }    
       }

       return cartItems;
      })
      );
    }
    

  addToCartItems(pizza:Pizza): Observable<any> {
    return this.http.post<any>(this._eventsUrl,{ pizza });
  }

  // getEvents() {
  //   return this.http.get<any>(this._eventsUrl)
  // }

  // getSpecialEvents() {
  //   return this.http.get<any>(this._specialEventsUrl)
  // }
  
}
  

