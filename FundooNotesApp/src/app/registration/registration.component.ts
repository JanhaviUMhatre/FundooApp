import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from "src/app/models/register.model";
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router ,Route} from '@angular/router';
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
  response:any;
  baseUrl = environment.baseUrl;
  constructor(private svc : HttpserviceService,private router: Router,private formBuilder: FormBuilder,private http:HttpClient) { //this.svc.printToConsole("got the registration service");
 }

  ngOnInit() { this.registerForm = this.formBuilder.group({
    firstName: [this.user.firstName, Validators.required],
    lastName: [this.user.lastName, Validators.required],
    email: [this.user.email, [Validators.required, Validators.email]],
    password: [this.user.password, [Validators.required,
    Validators.minLength(6)]],
    phoneNumber: [this.user.phoneNumber, [Validators.required,
    Validators.minLength(10)]]
  });
}
    register(){
      var userData : any = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
        phoneNumber: this.user.phoneNumber
      }
      console.log(userData);
      this.http.post(userData, 'http://34.213.106.173/api/user/userSignUp').subscribe(
        (data) => {
          console.log("After apply for Register response ", data);
          this.router.navigateByUrl('/otp');
          //this.snackBar.open('OTP send Successful', 'Okay', { duration: 3000 });
        },
        (error) => {
          console.log("After error in register", error);
  
        }
      )
    }

    // let login_response=this.http.get(this.baseUrl+'user/userSignUp');
   
    // login_response.subscribe((response)=> { this.response=response;
    //    console.log(this.response)});
 
  }

