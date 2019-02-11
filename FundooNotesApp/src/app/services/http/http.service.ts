
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

import { RegisterModel } from '../../models/register.model';
import { LoginModel } from '../../models/login.model';
import { ForgotPassword } from '../../models/forgotPassword.model';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http: HttpClient) { }

  public registerUser(RegisterModel): Observable<any> {
    return this.http.post<RegisterModel>(
      'http://34.213.106.173/api/user/userSignUp',
      RegisterModel
    );
  }
  public login(LoginModel): Observable<any> {
    return this.http.post<LoginModel>(
      'http://34.213.106.173/api/user/login',
      LoginModel
    );
  }
  public forgotPassword(ForgotPassword): Observable<any> {
    return this.http.post<ForgotPassword>(
      'http://34.213.106.173/api/user/reset-password',
      ForgotPassword
    );
  }
}

