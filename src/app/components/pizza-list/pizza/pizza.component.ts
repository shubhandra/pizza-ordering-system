import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';

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

  constructor() {}

  ngOnInit(): void {}
}
