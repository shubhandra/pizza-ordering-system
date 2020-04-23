import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, Observable,throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signUrl = "http://localhost:3000/users";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  token: string;
  isRegirdered: boolean;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.token = JSON.parse(localStorage.getItem('token'));
   }

   // Http request to get the current user
  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  //Http request to post the user register data
  registerUser(user: User) {
    return this.http.post(`${this.signUrl}/register`, user)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  //Http request to check whether a user is authentic or not
  loginUser(user: User) {
    return this.http.post(`${this.signUrl}/login`, user)
      .pipe(map((res: {user: User, token: string}) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        this.currentUserSubject.next(res.user);

        localStorage.setItem('token', JSON.stringify(res.token));
        this.token = res.token;

        return res.user;
    }),
        catchError(this.handleError)
    );
  }

  // Http request to get all users list
  getAllUsers() {
    return this.http.get(`${this.signUrl}/all`);
  }

  //Http request to check whether a user is authentic or not
  logoutUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    return this.http.post(`${this.signUrl}/me/logout`, null, httpOptions)
      .pipe(map(res => {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);

        localStorage.removeItem('token');
        this.token = '';
      }),
      catchError(this.handleError));
  }

  //Method to handle error scenario
  handleError(error) {
    let errorMessage = '';
    if (error.error) {
        errorMessage = `${error.error.text}`;
    }
    return throwError(errorMessage);
  }
}
