// ***********************************************************************************
// * Purpose: login component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since 1-2-2019
// *
// ***********************************************************************************

import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register.model';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/services/http/http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})

@Injectable()
export class LoginComponent implements OnInit {
auth = []
loginForm: FormGroup;  //collecting values from class FormGroup in loginForm
  loading = false;
  submitted = false;
  baseUrl = environment.baseUrl;  // store base url from environment components
  user: RegisterModel = new RegisterModel(); //object of registration model
  //validations
  password= new FormControl('', [Validators.required,Validators.minLength(6)]) //password validation
  //email validation
  email = new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$')]);
constructor(private snackBar: MatSnackBar,private svc : HttpService,private router: Router,private formBuilder: FormBuilder,private http:HttpClient){
  //this.svc.printToConsole("got the login service");
}
  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required,
      Validators.minLength(6)]]
    }); 
  }
  // after submitting form html will call onSubmit method
  onSubmit() {
    alert("ge");
    //json format data
    var userData:any = {
      email: this.user.email,
      password: this.user.password
    }
    //calling api
    console.log(userData);
    this.http.post(userData, this.baseUrl+'user/user_login').subscribe(
      //error handling
      (data) => {
        
        console.log("After apply for login response ", data);
        this.router.navigateByUrl('/dashboard');
        this.submitted = true;
      },
      (error) => {
        console.log("After error in login", error);

      }
    )
    //success alert
    alert("success");
    //this.snackBar.open('Login Successful', 'Okay', { duration: 2000 });
  
  
    this.router.navigateByUrl('/dashboard');
  }
  //validation errors
  getErrorMessage(){
    
    return this.email.hasError('required') ? 'You must enter a value' :
    this.email.hasError('email') ? 'Not a valid email ' :
    '' ;
  
  }
  getErrorMessagePassword(){
    return this.password.hasError('required') ? 'password is required' : 
    this.password.hasError('password') ? 'password should be of minimum 6 charatcters' :
'';  }
}
