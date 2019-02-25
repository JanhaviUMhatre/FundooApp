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
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { LabelsComponent } from '../labels/labels.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  deletevalue=false;

  data: any;
  color : any;
  footerData : any;
  @Output() getId = new EventEmitter();
  deleteData: { "isDeleted": boolean; "noteIdList": any[]; };
  archivevalue=false;
  archiveData: { "isArchived": boolean; "noteIdList": any[]; };
  pinValue= false;
  id:any;
  updateData:any;
  pinData: { "isPined": boolean; "noteIdList": any[]; };
  colorCode: Array<Object> = [
    { name: "white", colorCode: "#fff" },
    { name: "red", colorCode: "#fc8981" },
    { name: "orange", colorCode: "#ffb834" },
    { name: "yellow", colorCode: "#fff181" },
    { name: "green", colorCode: "#c5fd98" },
    { name: "teal", colorCode: "#96ffec" },
    { name: "blue", colorCode: "#c4f0f7" },
    { name: "darkblue", colorCode: "#a6cbf7" },
    { name: "purple", colorCode: "#d9aff7" },
    { name: "pink", colorCode: "#ffcee6" },
    { name: "brown", colorCode: "#e9c7a9" },
    { name: "gray", colorCode: "#e7e9ec" }
  ]
  ColorData: { "color": boolean; "noteIdList": any[]; };
 
  constructor(public dialog: MatDialog,private svc :NoteService,private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
      this.matIconRegistry.addSvgIcon(
        "unpinIcon",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/Icons/unpinIcon.svg"),
      
      );
      this.matIconRegistry.addSvgIcon(
        "pinIcon",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/Icons/pinIcon.svg"),
      
      );
   } 

  ngOnInit() {
    this.getNoteData()
    
  }
  getNoteData(){
    this.svc.getNotes().subscribe(
      (response) => {console.log("success get notes",response)
    this.data = response['data']['data']; 
    console.log(this.data)

    },
      (error) => {console.log("error",error);}
      )
      
  }
  pin(card){
    console.log("called pin");
    this.pinValue=!this.pinValue;
    console.log(card.id)
    this.pinData={
      "isPined":this.deletevalue,
      "noteIdList":[card.id]
    }
    console.log(this.pinData)
    this.svc.pinnote(this.pinData).subscribe(
      (response) => {console.log("success",response);
    console.log(this.data)
    },
      (error) => {console.log("error",error);}
    )
  }

  changeColor(color) {

    this.color = color;
    //card.color = color;
    console.log(this.color,this.id)
    this.ColorData={
      "color":this.color,
      "noteIdList":[this.id]
    }
    console.log(this.ColorData)
    this.svc.colornote(this.ColorData).subscribe(
      (response) => {console.log("success",response);
    console.log(this.data)
    },
      (error) => {console.log("error",error);}
    )

  }
  getcolorid(card){
   this.id = card.id
console.log(this.id)
  }

  delete(card){
   console.log(card.id);
   console.log("deleted")
    
   this.deletevalue =! this.deletevalue
  
this.deleteData={
  "isDeleted":this.deletevalue,
  "noteIdList":[card.id]
}
 console.log(this.deleteData);
this.svc.trashnote(this.deleteData).subscribe(
  (response) => {console.log("success",response);
console.log(this.data)
},
  (error) => {console.log("error",error);}
)
  }
  archive(card){
    console.log(card.id);
   console.log("archived")
    
   this.archivevalue =! this.archivevalue
  
this.archiveData={
  "isArchived":this.archivevalue,
  "noteIdList":[card.id]
}
 console.log(this.archiveData);
this.svc.archivednote(this.archiveData).subscribe(
  (response) => {console.log("success",response);
console.log(this.data)
},
  (error) => {console.log("error",error);}
)
this.updateNotes(card)
  }

  updateNotes(card){
    this.updateData={
      "noteId":card.id,
      "title": card.title,
      "description":card.description
    }
    console.log("dataaaaa",this.updateData)
    this.svc.updatednote(this.updateData).subscribe(
      (response) => {console.log("success",response);
    console.log(this.data)
    },
      (error) => {console.log("error",error);}
    )
  }
  openDialog(card): void {
    const dialogRef = this.dialog.open(LabelsComponent,
     {
     data : {
       id:card.id,
       title:card.title,
       description:card.description,
       color:card.color
     }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}


