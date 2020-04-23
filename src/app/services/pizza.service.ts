import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pizza } from '../models/pizza.model';
import { Observable, of } from 'rxjs';
import{catchError, map} from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  [x: string]: any;

  token: string;

  constructor(
    private http:HttpClient,
    private authService:AuthService,
    
  ) { 
    this.token = this.authService.token;
    console.log(this.token);
  }


  getAllPizza():Observable<any>{ 

        let url = 'http://localhost:3000/pizzas';

        return this.http.get(url)
              .pipe( 
                  map(r=>{ 
                    if(r){ 
                      return r;
                    }else{ 
                      return false;
                    }
                  })
                );
               
  }


  savePizza(pizza):Observable<any>{ 

   // console.log(pizza);

   const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  };

    let PizzaUrl = 'http://localhost:3000/pizzas';

    return this.http.post<any>(PizzaUrl,pizza,httpOptions)
          
            .pipe( 
              map(r=>{ 
                if(r){ 
                  return true;
                }else{ 
                  return false;
                }
              }),
              catchError(err =>{ 

                if (err.status === 400) {
                   console.log(err);
                   return of(false);
                }
              })
           
            );
  }


  deletePizza(id):Observable<any>{ 

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
 
     let PizzaDUrl = 'http://localhost:3000/pizzas/'+id;
 
     return this.http.delete(PizzaDUrl,httpOptions)
           
             .pipe( 
               map(r=>{ 
                 if(r){ 
                   return true;
                 }else{ 
                   return false;
                 }
               }),
               catchError(err =>{ 
 
                 if (err.status === 400) {
                    console.log(err);
                    return of(false);
                 }
               })
            
       );
   }

   /*****Edit Pizza  */


   editPizza(id):Observable<any>{ 

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
 
 
     let PizzaEUrl = 'http://localhost:3000/pizzas/'+id;
 
     return this.http.get<any>(PizzaEUrl,httpOptions)
           
             .pipe( 
               map(r=>{ 
                 if(r){ 
                   return r;
                 }else{ 
                   return false;
                 }
               }),
               catchError(err =>{ 
 
                 if (err.status === 400) {
                    console.log(err);
                    return of(false);
                 }
               })
            
       );
   }


   
  updatePizza(id,pizza):Observable<any>{ 

    // console.log(pizza);
 
    const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json',
       'Authorization': 'Bearer ' + this.token
     })
   };
 
     let PizzaUrl = 'http://localhost:3000/pizzas/'+id;
 
     return this.http.patch<any>(PizzaUrl,pizza,httpOptions)
           
             .pipe( 
               map(r=>{ 
                 if(r){ 
                   return true;
                 }else{ 
                   return false;
                 }
               }),
               catchError(err =>{ 
 
                 if (err.status === 400) {
                    console.log(err);
                    return of(false);
                 }
               })
      );
   }
 


}
