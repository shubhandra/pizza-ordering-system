import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {
  pizzaList = [];
  newPizzaList = [];
  newPizza = [];
  newPizzaListArray = [];
  constructor(private pizzaService: PizzaService) {}

  getPizzaApi() {
    this.newPizzaListArray.push(this.newPizzaList);
    for (let i = 0; i < this.newPizzaListArray.length; i++) {
      this.newPizza = this.newPizzaListArray[i].pizzas;
      console.log(this.newPizza);
    }
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe((pizzas) => {
      this.pizzaList.push(pizzas);
      for (let i = 0; i < this.pizzaList.length; i++) {
        this.newPizzaList = this.pizzaList[i].data;
        this.getPizzaApi();
      }
    });
  }
}
