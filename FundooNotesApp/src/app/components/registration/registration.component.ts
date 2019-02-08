// ***********************************************************************************
// * Purpose: registration component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since  4-2-2019
// *
// ***********************************************************************************

import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RegisterModel } from "src/app/models/register.model";
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Route } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';
import { first } from 'rxjs/operators';

//import { registerContentQuery } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup; //collecting values from class FormGroup in registrationForm
  submitted = false;
  loading = false;
  user: RegisterModel = new RegisterModel(); //object of registration model
 

  baseUrl = environment.baseUrl; // store base url from environment components
  
  
  //validations
  Cpassword = new FormControl('', Validators.required) //confirm password validation
  firstname = new FormControl('',Validators.required)
  lastname = new FormControl('',Validators.required)
  password = new FormControl('', [Validators.required, // password validation
  Validators.minLength(6)])
  phoneNumber = new FormControl('', [Validators.required, //phone number validation
  Validators.maxLength(10), Validators.minLength(10)])
  //email validation
  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$')]);
  
  
  constructor(private UserServiceService: UserServiceService, private snackBar: MatSnackBar, private svc: HttpService, private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { //this.svc.printToConsole("got the registration service");
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Cpassword : ['', Validators.required], //confirm password validation
  firstname : ['',Validators.required],
  lastname : ['',Validators.required],
  password : ['', [Validators.required, // password validation
  Validators.minLength(6)]],
  phoneNumber : ['', [Validators.required, //phone number validation
  Validators.maxLength(10), Validators.minLength(10)]],
  //email validation
  email : ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$')]]
    
});

  }
  //validation error messages
  getErrorMessage() {

    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email ' : '';

  }
  getErrorMessagePhonenumber() {

    return this.phoneNumber.hasError('required') ? 'number must be of 10 digits' : this.phoneNumber.hasError('phonenumber') ? 'number should be of 10 digits' : '';
  }

  getErrorMessagepassword() {

    return this.password.hasError('required') ? 'password should be of minimum 6 digits' : this.password.hasError('password') ? 'password should be of minimum 6 digits' : '';
  }

  getErrorMessageFirst() {

    return this.firstname.hasError('required') ? 'please enter firstname' : '';
  }

  getErrorMessageLast() {

    return this.lastname.hasError('required') ? 'please enter lastname' : '';
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  // registration html will call register method
  register() {
    // json format data
    
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }

    // api calling
    this.loading = true;
    this.UserServiceService.register(this.registerForm.value).pipe(first())
            .subscribe(
                data => {
                    
                    this.router.navigate(['/login']);
                },
                error => {
                    
                    this.loading = false;
                });
    }

}


// import { Component, OnInit } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
// import { RegisterModel } from "src/app/models/register.model";
// import { from } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router, Route } from '@angular/router';
// import { MatSnackBar } from '@angular/material';
// import { FormControl } from '@angular/forms';
// import { HttpService } from 'src/app/services/http/http.service';
// //import { registerContentQuery } from '@angular/core/src/render3/instructions';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.scss']
// })
// export class RegistrationComponent implements OnInit {
//   registerForm: FormGroup; //collecting values from class FormGroup in registrationForm
//   submitted = false;
//   user: RegisterModel = new RegisterModel(); //object of registration model
//   // response:any;
//   baseUrl = environment.baseUrl; // store base url from environment components
//   //validations
//   Cpassword = new FormControl('', Validators.required) //confirm password validation
//   firstname = new FormControl('',Validators.required)
//   lastname = new FormControl('',Validators.required)
//   password = new FormControl('', [Validators.required, // password validation
//   Validators.minLength(6)])
//   phoneNumber = new FormControl('', [Validators.required, //phone number validation
//   Validators.maxLength(10), Validators.minLength(10)])
//   //email validation
//   email = new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$')]);
//   constructor(private snackBar: MatSnackBar, private svc: HttpService, private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { //this.svc.printToConsole("got the registration service");
//   }

//   ngOnInit() {
//     this.registerForm = this.formBuilder.group({
//       firstName: [this.user.firstName, Validators.required],
//       lastName: [this.user.lastName, Validators.required],
//       email: [this.user.email, [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9]+@[test]+.[com]+$')]],
//       password: [this.user.password, [Validators.required,
//       Validators.minLength(6)]],
//       phoneNumber: [this.user.phoneNumber, [Validators.required,
//       Validators.maxLength(10), Validators.minLength(10)]]

//     });
//   }
//   //validation error messages
//   getErrorMessage() {

//     return this.email.hasError('required') ? 'You must enter a value' :
//       this.email.hasError('email') ? 'Not a valid email ' : '';

//   }
//   getErrorMessagePhonenumber() {

//     return this.phoneNumber.hasError('required') ? 'number must be of 10 digits' : this.phoneNumber.hasError('phonenumber') ? 'number should be of 10 digits' : '';
//   }

//   getErrorMessagepassword() {

//     return this.password.hasError('required') ? 'password should be of minimum 6 digits' : this.password.hasError('password') ? 'password should be of minimum 6 digits' : '';
//   }

//   getErrorMessageFirst() {

//     return this.firstname.hasError('required') ? 'please enter firstname' : '';
//   }

//   getErrorMessageLast() {

//     return this.lastname.hasError('required') ? 'please enter lastname' : '';
//   }
//   // convenience getter for easy access to form fields
//   get f() { return this.registerForm.controls; }

//   // registration html will call register method
//   register() {
//     // json format data
//     var userData: any = {
//       firstName: this.user.firstName,
//       lastName: this.user.lastName,
//       email: this.user.email,
//       password: this.user.password,
//       phoneNumber: this.user.phoneNumber
//     }
//     console.log(userData);
//     //api calling
//     this.http.post(this.baseUrl + 'user/userSignUp',userData,).subscribe(
//       //error handling
//       (data) => {

//         console.log("After apply for Register response ", data);
//         this.router.navigateByUrl('/login');
//         this.submitted = true;
//       },
//       (error) => {
//         console.log("After error in register", error);

//       }
//     )
    
//   }

// }