import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from 'src/app/components/login/login.component';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

login(email:string, password:string){
    return this.http.post<any>(this.baseUrl+'user/login', 
    { email: email, password: password }) .pipe(map(user => {
     
      if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
      }

      return user;
  }));
}

logout() {
// remove user from local storage to log user out
localStorage.removeItem('currentUser');
}
}

