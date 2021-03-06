import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { OrderModel } from '../../models/order-model';
import { OrdersService } from '../../services/orders.service';
import { filter } from 'rxjs/operators';
import { OrderStatus } from '../../models/order-status';



// const ELEMENT_DATA: OrderModel[] = [];

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // dataSource:any;
  modifiedStatus:string;
  clickMessage = '';
  orders = [];
  orderstatus = ['order declined','placed','preparing','ready to deliver','delivered'];
  displayedColumns: string[] = ['createdAt','delivery_address','order_amount','payment_method','qty','size','status','userId'];
  dataSource; 

  constructor(
    private orderService: OrdersService
  ) { }

  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders() {
    this.orderService.getAllOrders()
    .subscribe(
      result => {
        console.log("result",result);
        this.orders = result;
       this.dataSource = new MatTableDataSource(this.orders); 
      },
      err => console.log(err)
    )
  }


  // onClickMe(){
  //   this.clickMessage = 'order status!';
  // }

  // onStatusSelected(val:any){
  //   this.orderService.updateOrderStatus(val.userId,OrderStatus)
  //   .subscribe(res=> {
  //     let id = res['userId']            
  //   },(err)=> {
  //     console.log(err);
  //   })
  //   this.customFunction(val);
  // }

  // customFunction(val:any){
  //   this.modifiedStatus= "this vale"+val+"was selected from dropdown";
  // }
   
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  chnageStatus(e,sts,id){ 

    var target = e.target || e.srcElement || e.currentTarget;

    this.orderService.orderStsUpdate(sts,id).subscribe(r=>{ 
            console.log(r.data.status);
            if(r.data.status === "delivered"){ 
                console.log("ok");
                target.disabled = true;
              
            }else{ 
                console.log(r.data.status);
            }
    });

  }

}
