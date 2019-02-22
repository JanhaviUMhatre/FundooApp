// ***********************************************************************************
// * Purpose: notes component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since 20-2-2019
// *
// ***********************************************************************************

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
 
  data: any;
  color : any;
  footerData : any;
  constructor(private svc :NoteService) { }

  ngOnInit() {
    this.getNoteData()
    
  }
  getNoteData(){
    this.svc.getNotes().subscribe(
      (response) => {console.log("success get notes",response)
    this.data = response['data']['data']; 
    console.log(this.data)

    // for(let i=0;i<=this.data.length-1;i++){
    //   console.log(this.data[i].id)
    // }
    },
      (error) => {console.log("error",error);}
      )
      
  }
  getNotesData(xyz){
   console.log(xyz.id);
   
  }
}
