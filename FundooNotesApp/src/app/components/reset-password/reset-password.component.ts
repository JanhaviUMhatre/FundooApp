// ***********************************************************************************
// * Purpose: reset password component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since 5-2-2019
// *
// ***********************************************************************************

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register.model';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/services/http/http.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup; //collecting values from class FormGroup in resetForm
  loading = false;
  submitted = false;
  baseUrl = environment.baseUrl; // store base url from environment components
  user: RegisterModel = new RegisterModel();  //object of registration model
  //password validation
  password= new FormControl('', [Validators.required,Validators.minLength(6)])
  constructor(private snackBar: MatSnackBar,private svc : HttpService,private router: Router,private formBuilder: FormBuilder,private http:HttpClient) {
    //this.svc.printToConsole("got the login service");
   }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      password: [this.user.password, [Validators.required,
      Validators.minLength(6)]]
    }); 
  }
  onSubmit() {
    //json format data
    var userData:any = {
      password: this.user.password
    }
    console.log(userData);
    //api calling
    this.http.post(userData, this.baseUrl+'user/user_setPassword').subscribe(
      //error handling
      (data) => {
        
        console.log("After apply for login response ", data);
        this.router.navigateByUrl('/login');
        this.submitted = true;
      },
      (error) => {
        console.log("After error in login", error);

      }
    )
    //success alert
    alert("success");
    //this.snackBar.open('Login Successful', 'Okay', { duration: 2000 });
  
    this.router.navigateByUrl('/login');
  }
  //validation error message
  getErrorMessage(){
    
    return this.password.hasError('required') ? 'enter value' :this.password.hasError('password') ? 'password should be of minimum 6 digits':'' ;
  }
}
