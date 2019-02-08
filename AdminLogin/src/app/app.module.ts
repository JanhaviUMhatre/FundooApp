import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path : '',
      component : AdminLoginComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
