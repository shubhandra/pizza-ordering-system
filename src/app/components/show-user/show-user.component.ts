import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ShowUser } from '../../models/show-user';
import { AuthService } from '../../services/auth.service';
// import { User } from 'src/app/models/user';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  dataSource; 
  users;
  // users: [];
  displayedColumns: string[] = ['role', 'staus', 'name','email'];

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private authService: AuthService) { }

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
          this.dataSource = new MatTableDataSource(this.users);                
      },
      err => console.log(err)
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
