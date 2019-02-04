import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
//import { FlexLayoutModule } from '@angular/flex-layout';

import { from } from 'rxjs';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
