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

import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from "@angular/material/icon";

import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';
import { ResetComponent } from './components/reset/reset.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { LabelsComponent } from './components/labels/labels.component';
import { FootermenuComponent } from './components/footermenu/footermenu.component';
import { NotesComponent } from './components/notes/notes.component';
import { SearchPipe } from './pipe/search.pipe';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AddlabelComponent } from './components/addlabel/addlabel.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ProfileComponent } from './components/profile/profile.component';
//import { AuthGuard } from './auth.guard'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    //FlexLayoutModule,
    RegistrationComponent,
   
    ResetPasswordComponent,
   
    ResetComponent,
   
    AddnoteComponent,
   
    LabelsComponent,
   
    FootermenuComponent,
   
    NotesComponent,
   
    SearchPipe,
   
    SearchbarComponent,
   
    AddlabelComponent,
   
    TrashComponent,
   
    ArchiveComponent,
   
    ProfileComponent,
  ],
  imports: [AppRoutingModule,
    BrowserModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialModule,
    RouterModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
