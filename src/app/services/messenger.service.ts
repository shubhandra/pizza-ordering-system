import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
   
  subject=new Subject()
  constructor() { }

  sendMsg(pizza)
  {
    console.log(pizza);
     this.subject.next(pizza);//triggering an event
  }

  getMsg()
  {
     return this.subject.asObservable()
  }
}
