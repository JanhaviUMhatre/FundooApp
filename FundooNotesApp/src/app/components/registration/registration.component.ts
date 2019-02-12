import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router, Route } from '@angular/router'


import { UserServiceService } from 'src/app/services/userServices/user-service.service';
import { RegisterModel } from 'src/app/models/register.model';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  constructor( private uservice : UserServiceService,private router: Router,private formBuilder:FormBuilder) { }
  
  registrationForm = this.formBuilder.group({
    //confirm password validation
firstName : [this.user.firstName,Validators.required],
lastName : [this.user.lastName,Validators.required],
password : [this.user.password, [Validators.required, // password validation
Validators.minLength(6)]],
confirmPassword : [null, Validators.required],
phoneNumber : [this.user.phoneNumber, [Validators.required, //phone number validation
Validators.maxLength(10), Validators.minLength(10)]],
//email validation
email : [this.user.email, [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$')]],
service : [this.user.service, Validators.required]
 
});
  ngOnInit() {
   
       
    }
    onSubmit(){
      console.log(this.registrationForm.value);
      this.uservice.registration(this.registrationForm.value).subscribe(
        (response) => {console.log("succsess",response);
        this.router.navigate(['/login']);},
        (error) =>{ console.log("error",error);
        }
        
      )
    }

}