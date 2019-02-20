
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

import { RegisterModel } from '../../models/register.model';
import { LoginModel } from '../../models/login.model';
import { ForgotPassword } from '../../models/forgotPassword.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;
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

  public postMethod(url:any,data:any){
    return this.http.post<any>(url,data)
  }

  getEncodData(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

  public PostForm(url:any,data:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('token')
      })
    }
    return this.http.post(url,this.getEncodData(data),httpOptions)
  }

  public getForm(url:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':localStorage.getItem('token')
      })
    }
    return this.http.get<any>(url,httpOptions)
  }
}

