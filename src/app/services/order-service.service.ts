import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/order-model';
import { OrderStatus } from '../models/order-status';


@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private apiUrl = `http://localhost:3000/order`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getAllOrders(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(`${this.apiUrl}/allorders`);
    // .pipe(
    //   catchError(this.handleError('getAllOrders', null))
    // )
  }

  updateOrderStatus(id, OrderStatus){
    const url = `${this.apiUrl}/updateStatus/${id}`;
    console.log(`${this.apiUrl}/updateStatus/${id}`);
    return this.http.patch(url, OrderStatus);
  }
}
