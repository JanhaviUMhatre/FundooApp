import { Injectable } from '@angular/core';
import { RegisterModel } from 'src/app/models/register.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable()
// ({
//   providedIn: 'root'
// })
export class UserServiceService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  register(user: RegisterModel) {
    return this.http.post(this.baseUrl + 'user/userSignUp', user);
}

testservice(){
 return this.http.get('http://34.213.106.173/api/user/service');

}
}
