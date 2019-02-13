import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AdminDetails } from '../models/details.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
 


@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  constructor(private http: HttpClient) { }
  login(userData){
    return this.http.post<any>(
      'http://34.213.106.173/api/user/adminLogin',userData).pipe(catchError(this.errorHandler))
    }

    getUserData() : Observable<AdminDetails[]> {
      return this.http.get<AdminDetails[]>(
        'http://34.213.106.173/api/user/getAdminUserList'
        ,{responseType:"json"}
      )
    }
   errorHandler(error : HttpErrorResponse){
        return throwError(error);
   }
    getData(){
      
      return this.http.get('http://34.213.106.173/api/user/getAdminUserList')
    }
}
