import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from "src/app/models/register.model";
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router ,Route} from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {FormControl} from '@angular/forms';
//import { registerContentQuery } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user: RegisterModel = new RegisterModel();
  // response:any;
  baseUrl = environment.baseUrl;

  Cpassword=new FormControl('',Validators.required)
  
  password= new FormControl('', [Validators.required,
    Validators.minLength(6)])
  phoneNumber= new FormControl('', [Validators.required,
    Validators.maxLength(10),Validators.minLength(10)])
  email = new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9]+@[test]+.[com]+$')]);
  constructor( private snackBar: MatSnackBar,private svc : HttpserviceService,private router: Router,private formBuilder: FormBuilder,private http:HttpClient) { //this.svc.printToConsole("got the registration service");
 }
 
  ngOnInit() { 
    this.registerForm = this.formBuilder.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9]+@[test]+.[com]+$')]],
      password: [this.user.password, [Validators.required,
      Validators.minLength(6)]],
      phoneNumber: [this.user.phoneNumber, [Validators.required,
      Validators.maxLength(10),Validators.minLength(10)]]
      
    });
}
getErrorMessage(){
  // if (this.password ! = this.Cpassword){
  //   var err:boolean = false;
  // }
  return this.email.hasError('required') ? 'You must enter a value' :
  this.email.hasError('email') ? 'Not a valid ' :
      this.phoneNumber.hasError('required') ? 'enter value' :this.phoneNumber.hasError('phonenumber') ? 'number should be of 10 digits' :
      this.password.hasError('required') ? 'enter value' :this.password.hasError('password') ? 'password should be of minimum 6 digits' : 
      this.Cpassword.hasError('required') ? 'enter value' :'' ;
  
}
    // convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }


    register(){
      var userData : any = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
        phoneNumber: this.user.phoneNumber
      }
      console.log(userData);
      this.http.post(userData, this.baseUrl+'user/userSignUp').subscribe(
        (data) => {
          
          console.log("After apply for Register response ", data);
          this.router.navigateByUrl('/login');
          this.submitted = true;
        },
        (error) => {
          console.log("After error in register", error);
  
        }
      )
      alert("success");
     
    
    
      this.router.navigateByUrl('/login');
    }

    // let login_response=this.http.get(this.baseUrl+'user/userSignUp');
   
    // login_response.subscribe((response)=> { this.response=response;
    //    console.log(this.response)});
 
  }
  
 
