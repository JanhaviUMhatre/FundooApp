import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetComponent } from './components/reset/reset.component';
import { FootermenuComponent } from './components/footermenu/footermenu.component';

const routes: Routes = [
    {
        path : 'registration',
        component : RegistrationComponent
      },
      {
        path : '',
        component : LoginComponent
      },
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent,
        children:[
          {
            path: '',
            component:AddnoteComponent
          },
          {
            path:'addNote',
            component:AddnoteComponent
          }
          ]
      },
      {
        path : 'resetpassword/:token',
        component : ResetPasswordComponent
      },
      {
        path : 'reset',
        component : ResetComponent
      },
      {
        path:'footer',
        component:FootermenuComponent
      }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }