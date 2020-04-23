import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  rrorMessage: any;
  duplicateEmail: any;

  constructor(private aservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  //Method to register a user
  onRegister(value: User) {
    this.aservice.registerUser(value)
      .subscribe(res => {
        this.aservice.isRegirdered = true;
        this.router.navigate(['login']);
      }, err => {
          this.duplicateEmail = err;
      });
  }

  close() {
    this.duplicateEmail = false;
  }


}
