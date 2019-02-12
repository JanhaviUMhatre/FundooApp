import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ForgotPassword } from 'src/app/models/forgotPassword.model';

import { UserServiceService } from 'src/app/services/userServices/user-service.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {

  user: ForgotPassword = new ForgotPassword();  //object of registration model
  //password validation

  constructor(private snackBar: MatSnackBar,private svc : UserServiceService,private router: Router,private formBuilder: FormBuilder,private http:HttpClient) {}
    passwordForm= this.formBuilder.group({
      //confirm password validation
      password : [this.user.password, [Validators.required, // password validation
        Validators.minLength(6)]]
    });
  

  ngOnInit() {
    
   
  }
  onSubmit() {
    console.log(this.passwordForm.value);
    this.svc.resetpassword(this.passwordForm.value).subscribe(
      (response) => {console.log("succsess",response);
      this.router.navigate(['/login']);},
      (error) =>{ console.log("error",error);
      }
      
    )
    
  }
}