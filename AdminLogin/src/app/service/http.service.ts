import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminDetails } from '../models/details.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  constructor(private http: HttpClient) { }
  login(userData){
    return this.http.post<any>(
      'http://34.213.106.173/api/user/adminLogin',userData)
    }

    getUserData() : Observable<AdminDetails[]> {
      return this.http.get<AdminDetails[]>(
        'http://34.213.106.173/api/user/getAdminUserList'
        ,{responseType:"json"}
      )
    }

    getData(){
      
      return this.http.get('http://34.213.106.173/api/user/getAdminUserList')
    }
}
