import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShowUser } from '../models/show-user';

@Injectable({
  providedIn: 'root'
})
export class ShowUserService {

  private apiUrl = `http://localhost:3000`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWEwNTdjOWQyODlkOTMzZDQ4NWVhZjgiLCJpYXQiOjE1ODc1NzI0NTB9.6kKmN03EGXOcj1BpP973vf668PjtZKkirEzLT0gCuro"
    })
  };

  constructor(
    private http: HttpClient
  ) { }
  getUsers(): Observable<any> {
    return this.http.get<ShowUser[]>(`${this.apiUrl}/users/all`);
    // .pipe(
    //   catchError(this.handleError('getAllOrders', null))
    // )
  } 
}
