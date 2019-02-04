import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private svc :  HttpserviceService, private http:HttpClient) {
    //this.svc.printToConsole("got the login service");
   }

  ngOnInit() {
    let reset_response = this.http.get('http://34.213.106.173/explorer/#!/user/user_setPassword');
    reset_response.subscribe((response)=> console.log(response));
  }

}
