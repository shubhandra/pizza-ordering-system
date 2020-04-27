import { Component, OnChanges } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'Pizza Ordering System';
  currentUser: User

  constructor(private aservice: AuthService, private router: Router) {
    this.aservice.currentUser.subscribe(res => {
      this.currentUser = res;
    });
    console.log(this.currentUser);
   }

  ngOnChanges() {

  }

  logout() {
    this.aservice.logoutUser().subscribe();
    this.router.navigate(['login']);
  }
}
