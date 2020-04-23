import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../models/pizza.model';
import { Observable, of } from 'rxjs';
import{catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  [x: string]: any;

  constructor(
    private http:HttpClient
  ) { }


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

    let PizzaUrl = 'http://localhost:3000/pizzas';

    return this.http.post<any>(PizzaUrl,pizza)
          
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

    console.log(id);
 
     let PizzaDUrl = 'http://localhost:3000/pizzas/'+id;
 
     return this.http.delete(PizzaDUrl,{ responseType: 'text' })
           
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
