import { Component } from '@angular/core';

import { from } from 'rxjs';
import { HttpserviceService } from './httpservice/httpservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FundooNotesApp';
  constructor(private svc : HttpserviceService, private http:HttpClient){
    //this.svc.printToConsole("got the service");

  }
  
  
}
