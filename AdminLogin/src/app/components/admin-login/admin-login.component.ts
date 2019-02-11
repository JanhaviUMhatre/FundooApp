import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LoginModel } from 'src/app/models/login.model';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router'

import * as $ from 'jquery';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
user : LoginModel = new LoginModel();
  constructor(private formBuilder : FormBuilder, private svc : HttpService,
    private router: Router
    ) { }
  // loginForm = new FormGroup({
  //   email : new FormControl(this.user.email),
  //   password : new FormControl(''),
  // });

  loginForm = this.formBuilder.group({
    email : [this.user.email],
    password : ['']
  });
  ngOnInit() { 
    $(document).ready(function(){
      $('button').click(function(){
        alert("admin login successful")
      })
    });
  }
login(){
  console.log(this.loginForm.value)
      this.svc.login(this.loginForm.value).subscribe(
        (response)=> {console.log("success",response)
        this.router.navigate(['/admindashboard']);
      },
        (error) => {console.log("error",error)}
        )
      
}

}
