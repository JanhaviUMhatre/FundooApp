import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { MatCardModule } from '@angular/material';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    //FlexLayoutModule,
    RegistrationComponent,
   
    ResetPasswordComponent,
   
   
   
    
  ],
  imports: [AppRoutingModule,
    BrowserModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path : 'registration',
        component : RegistrationComponent
      },
      {
        path : '',
        component : RegistrationComponent
      },
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'resetpassword',
        component : ResetPasswordComponent
      }
    ])
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
