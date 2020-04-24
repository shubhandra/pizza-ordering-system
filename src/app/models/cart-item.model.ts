import { Pizza }  from '../models/pizza.model';

export class CartItem {
    //id: Number;
    pizzaName: String;
    pizzaSize: String;
    price: Number;
    qty: Number;
    pizzaToppings: String;


constructor(pizza: Pizza, qty=0) {
  this.pizzaName=pizza.name;
    this.pizzaSize= pizza.size;
    this.price= pizza.price;
    this.qty= qty;
    this.pizzaToppings= pizza.toppings;
}
}