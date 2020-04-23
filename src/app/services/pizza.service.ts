import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaComponent } from '../components/pizza-list/pizza/pizza.component';
import { observable, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const apiUrl = 'http://localhost:3000/pizzas';
@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  // pizzas: Pizza[] = [
  //   new Pizza('Margherita', '', 350, 2, 'Golden Corn'),
  //   new Pizza('Fresh Veggie', 'large', 350, 2, 'Golden Corn'),
  //   new Pizza('Country Special', 'large', 350, 2, 'Golden Corn'),
  //   new Pizza('Farmhouse', 'large', 350, 2, 'Golden Corn'),
  //   new Pizza('Mexican Green Wave', 'large', 350, 2, 'Golden Corn'),
  //   new Pizza('Barbeque Chicken', 'large', 350, 2, 'Golden Corn'),
  //   new Pizza('Chicken Mexicana', 'large', 350, 2, 'Golden Corn'),
  // ];

  constructor(private http: HttpClient) {}
  getPizzas(): Observable<Pizza[]> {
    //TODO:populate product from API and return observable
    return this.http.get<Pizza[]>(apiUrl).pipe(
      map((data: any) => data),
      catchError((error) => {
        return throwError('Its a Trap!');
      })
    );
  }
}
