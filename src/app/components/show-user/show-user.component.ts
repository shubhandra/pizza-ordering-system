import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ShowUser } from '../../models/show-user';
import { ShowUserService } from '../../services/show-user.service'

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  dataSource; 
  orders = [];
  displayedColumns: string[] = ['role', 'staus', 'orders', 'name','email'];

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private showUserService: ShowUserService) { }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.getUsers();
  }

  getUsers() {
    this.showUserService.getUsers()
    .subscribe(
      result => {
        if (result.role === "user") {
          console.log("result", result);
          this.orders = result;
          this.dataSource = new MatTableDataSource(this.orders);
        }                
      },
      err => console.log(err)
    )
  } 

}
