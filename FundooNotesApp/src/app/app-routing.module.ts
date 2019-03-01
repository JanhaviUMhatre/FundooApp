import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetComponent } from './components/reset/reset.component';
import { FootermenuComponent } from './components/footermenu/footermenu.component';
import { AuthGuard } from './auth.guard'
import { NotesComponent } from './components/notes/notes.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AddlabelComponent } from './components/addlabel/addlabel.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
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
        //canActivate : [AuthGuard],
        children:[
          {
            path: '',
            component:AddnoteComponent
          },
          {
            path:'addNote',
            component:AddnoteComponent
          },
          {
            path:'notes',
            component:NotesComponent
          },
          {
            path:'search',
            component:SearchbarComponent
          },
          {
            path:'trash',
            component:TrashComponent
          },
          {
            path:'archive',
            component:ArchiveComponent
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
      },
      {
        path:'addlabel',
        component:AddlabelComponent
      }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }