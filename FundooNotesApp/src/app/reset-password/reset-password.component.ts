import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpserviceService } from '../httpservice/httpservice.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  loading = false;
  submitted = false;
  baseUrl = environment.baseUrl;
  user: RegisterModel = new RegisterModel();
  password= new FormControl('', [Validators.required,Validators.minLength(6)])
  constructor(private snackBar: MatSnackBar,private svc : HttpserviceService,private router: Router,private formBuilder: FormBuilder,private http:HttpClient) {
    //this.svc.printToConsole("got the login service");
   }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      password: [this.user.password, [Validators.required,
      Validators.minLength(6)]]
    }); 
  }
  onSubmit() {
    var userData:any = {
      password: this.user.password
    }
    console.log(userData);
    this.http.post(userData, this.baseUrl+'user/user_setPassword').subscribe(
      (data) => {
        
        console.log("After apply for login response ", data);
        this.router.navigateByUrl('/login');
        this.submitted = true;
      },
      (error) => {
        console.log("After error in login", error);

      }
    )
    alert("success");
    //this.snackBar.open('Login Successful', 'Okay', { duration: 2000 });
  
  
    this.router.navigateByUrl('/login');
  }
  getErrorMessage(){
    
    return this.password.hasError('required') ? 'enter value' :this.password.hasError('password') ? 'password should be of minimum 6 digits':'' ;
  }
}

