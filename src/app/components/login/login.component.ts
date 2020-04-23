import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginMessage: boolean;
  loginError: any;

  constructor(private aservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginMessage = this.aservice.isRegirdered;
  }

  //Method to let the user login
  onLogin(value: User) {
    this.aservice.loginUser(value)
      .subscribe((user: User) => {
        this.loginMessage = false;
        this.aservice.isRegirdered = false;

        if(user.role === "admin") {
          this.router.navigate(['admin-dashboard']);
        } else {
          this.router.navigate(['user-dashboard']);
        }
       },
      err => {
        this.loginError = err;
    });
  }

   // Method to close the alert message
   close() {
     this.loginMessage = false;
     this.loginError = false;
  }
}
