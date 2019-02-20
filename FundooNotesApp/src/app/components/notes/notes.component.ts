import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  isActive = false;
  constructor(private svc : UserServiceService) { }

  ngOnInit() {
  }
  getNoteData(){
    this.svc.getNotes().subscribe(
      (response) => {console.log("success",response)},
      (error) => {console.log("error",error);}
      )
    
  }
}
