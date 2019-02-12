import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { environment } from 'src/environments/environment';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})

@Injectable()
export class LoginComponent implements OnInit {

user: LoginModel = new LoginModel(); //object of login model

constructor(private snackBar: MatSnackBar,private svc : UserServiceService,private router: Router,private formBuilder: FormBuilder,private http:HttpClient){
}
loginForm = this.formBuilder.group({
  //confirm password validation
email : [this.user.email, [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$')]],
password : [this.user.password, [Validators.required, // password validation
  Validators.minLength(6)]],

});
  ngOnInit() {
    
  }
  openSnackBar() {
    this.snackBar.open("you are logged in!!!!!", 'OK', {
      duration: 3000
    });
  
  }
  // after submitting form html will call onSubmit method
  onSubmit() {
    console.log(this.loginForm.value);
    this.svc.login(this.loginForm.value).subscribe(
      (response) => {console.log("succsess",response);
      this.router.navigate(['/dashboard']);},
      (error) =>{ console.log("error",error);
      }
      
    )
    
  }


email = new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$')]);
getErrorMessageEmail() {
  return this.email.hasError('required') ? 'Not a valid email' : this.email.hasError('email') ? 'Not a valid email' :'';
}

password = new FormControl('', [Validators.required,Validators.minLength(6)]);
getErrorMessagePassword() {
  return this.password.hasError('required') ? 'password should be of minimum 6 characters' : this.password.hasError('password') ? 'password should be of minimum 6 characters' :'';
}
}