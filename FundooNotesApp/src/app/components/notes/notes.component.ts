import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  isActive = false;
  data: any[];
  color : any;
  constructor(private svc :NoteService) { }

  ngOnInit() {
    this.getNoteData()
  }
  getNoteData(){
    this.svc.getNotes().subscribe(
      (response) => {console.log("success get notes",response)
    this.data = response['data'].data; 
    
    },
      (error) => {console.log("error",error);}
      )
      
  }
}
