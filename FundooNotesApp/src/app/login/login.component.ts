import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpserviceService } from '../httpservice/httpservice.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})

@Injectable()
export class LoginComponent implements OnInit {
auth = []
loginForm: FormGroup;
  loading = false;
  submitted = false;
  baseUrl = environment.baseUrl;
  user: RegisterModel = new RegisterModel();
  password= new FormControl('', [Validators.required])
  email = new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9]+@[test]+.[com]+$')]);
constructor(private snackBar: MatSnackBar,private svc : HttpserviceService,private router: Router,private formBuilder: FormBuilder,private http:HttpClient){
  //this.svc.printToConsole("got the login service");
}
  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required,
      Validators.minLength(6)]]
    }); 
  }
  onSubmit() {
    var userData:any = {
      email: this.user.email,
      password: this.user.password
    }
    console.log(userData);
    this.http.post(userData, this.baseUrl+'user/user_login').subscribe(
      (data) => {
        
        console.log("After apply for login response ", data);
        this.router.navigateByUrl('/dashboard');
        this.submitted = true;
      },
      (error) => {
        console.log("After error in login", error);

      }
    )
    alert("success");
    //this.snackBar.open('Login Successful', 'Okay', { duration: 2000 });
  
  
    this.router.navigateByUrl('/dashboard');
  }
  getErrorMessage(){
    // if (this.password ! = this.Cpassword){
    //   var err:boolean = false;
    // }
    return this.email.hasError('required') ? 'You must enter a value' :
    this.email.hasError('email') ? 'Not a valid ' :
    this.password.hasError('required') ? 'enter value':'' ;
  }
}
