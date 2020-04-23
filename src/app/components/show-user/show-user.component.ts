import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ShowUser } from '../../models/show-user';
import { ShowUserService } from '../../services/show-user.service';
import { AuthService } from '../../services/auth.service';
// import { User } from 'src/app/models/user';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  dataSource; 
  users: ShowUser[];
  // users: [];
  displayedColumns: string[] = ['role', 'staus', 'orders', 'name','email'];

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private showUserService: ShowUserService, private authService: AuthService) { }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.getUsers();
  }

  getUsers() {
    this.authService.getAllUsers()
    .subscribe(
      result => {
        console.log("result", result);
          this.users = result;
          this.dataSource = new MatTableDataSource(this.orders);                
      },
      err => console.log(err)
    )
  } 

}
