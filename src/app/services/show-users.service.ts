import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShowUsersService {

  token: string;
  constructor(  
    private http: HttpClient,
    private authService:AuthService,
    
    ) { 
      this.token = this.authService.token;
      console.log(this.token);
    }




  //change order status
  userStsUpdate(status,id):Observable<any>{ 
const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    
    };

   // console.log(status);
  
      let StsUrl = 'http://localhost:3000/users/sts/'+id;

        return this.http.patch(StsUrl,{ 
          "status":status
        },httpOptions)
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
}



