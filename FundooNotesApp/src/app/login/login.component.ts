import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})



export class LoginComponent implements OnInit {
auth = []
constructor(private svc : HttpserviceService, private http:HttpClient){
  //this.svc.printToConsole("got the login service");
}
  ngOnInit() {
    
     let reg_response = this.http.get('http://34.213.106.173/explorer/#!/user/user_login');
    reg_response.subscribe((response)=> console.log(response));
  }
}
