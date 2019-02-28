// ***********************************************************************************
// * Purpose: notes component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since 28-2-2019
// *
// ***********************************************************************************
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private svc :NoteService) { }
data:any;
  ngOnInit() {
   this.getTrashNoteData()
  }
  getTrashNoteData(){
    this.svc.getTrashNotes().subscribe(
      (response) => {console.log("success get trash notes",response)
    this.data = response['data']['data']; 
    console.log(this.data)

    },
      (error) => {console.log("error",error);}
      )
      
  }
}
