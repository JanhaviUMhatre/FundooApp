import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient,private user : HttpService) { }
    registration(userData){
          return this.http.post<any>('http://34.213.106.173/api/user/userSignUp',userData)
    }

    login(userData){
      return this.http.get<any>('http://34.213.106.173/api/user/login',userData)
}
}