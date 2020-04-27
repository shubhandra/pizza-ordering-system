import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent implements OnInit {
  @Input() pizza: any;

  public selectedSize: Pizza;
  public selectedTopping: Pizza;
  public quantity: any;

  // public quantity = 'Smita';
  onKey(event) {
    this.quantity = event.target.value;
    console.log(this.quantity);
  }
  qty = this.quantity;

  constructor(private msg: MessengerService,
    private cartService: CartService) {}

  ngOnInit(): void {}

  handleToCart() {
    this.cartService.addToCartItems(this.pizza).subscribe(()=> {
      this.msg.sendMsg(this.pizza);
    })
   
  }
}
