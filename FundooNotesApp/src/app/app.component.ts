import { Component } from '@angular/core';

import { from } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { HttpService } from './services/http/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FundooNotesApp';
  constructor(private svc : HttpService, private http:HttpClient){
    //this.svc.printToConsole("got the service");

  }
  
  
}
