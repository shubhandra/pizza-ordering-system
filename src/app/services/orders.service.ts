import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUrl = `http://localhost:3000/order`;

  constructor(
    private http: HttpClient
  ) { }

  getAllOrders(): Observable<any> {
    return this.http.get<OrderModel[]>(`${this.apiUrl}/allorders`);
    // .pipe(
    //   catchError(this.handleError('getEnquiries', null))
    // )
  }  
}
