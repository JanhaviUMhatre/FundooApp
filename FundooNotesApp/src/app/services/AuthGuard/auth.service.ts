import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//loggedInStatus = false; 
  constructor() { }

  // setLoggedIn(value : boolean){
    
  //   this.loggedInStatus = value;
  // }

  // get isLoggedIn(){
  //   return this.loggedInStatus
  // }

  public loggIn()
  {
    return !!localStorage.getItem("token");
  }
}
