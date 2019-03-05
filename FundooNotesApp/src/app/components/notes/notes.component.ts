// ***********************************************************************************
// * Purpose: notes component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since 20-2-2019
// *
// ***********************************************************************************

import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { NoteService } from 'src/app/services/notes/note.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LabelsComponent } from '../labels/labels.component';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search/search.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ViewService } from 'src/app/services/viewservice/view.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  deletevalue=false;
  cardArray:any;
  data: any;
  color : any;
  flagnote :any;
  footerData : any;

  @Output() getId = new EventEmitter();
  deleteData: { "isDeleted": boolean; "noteIdList": any[]; };
  archivevalue=false;
  archiveData: { "isArchived": boolean; "noteIdList": any[]; };
  pinValue= false;
  id:any;
  date=new FormControl('');
  time=new FormControl('');
  remindData:any;
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
 carddata=this.data;
 dataRefresher: any;
 @Input() arrayCards;
 @Input() Search;

 menuid:any;
newArray:any[];
today: number = Date.now();
  message: string="row wrap";

  constructor(private view: ViewService,private ser: SearchService,public dialog: MatDialog,private svc :NoteService,private matIconRegistry: MatIconRegistry,
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
    this.view.currentMessage.subscribe(message => this.message = message)

   //console.log(this.childMessage)
  }
 
  // showDiv(){
  //   console.log("called div");
  //   this.flagnote=!this.flagnote;
  // }
  submit(){
console.log(this.date.value,this.time.value)
  }
  //get notes data
  
  getNoteData(){
    this.svc.getNotes().subscribe(
      (response) => {console.log("success get notes",response)
    this.data = response['data']['data']; 
   
    this.data.reverse();
    console.log("in response",this.data)
    
    this.cardArray =  this.data.filter(function(e) {
      return (e.isDeleted===false && e.isArchived===false)
    });
    console.log("cardsArray",this.cardArray)
    },
      (error) => {console.log("error",error);}
      )
      
  }
  


  //pin/unpin notes
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

  //change color of notes
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

  //trash notes
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

  //archive notes
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
  //dialog box
  openDialog(card): void {
    const dialogRef = this.dialog.open(LabelsComponent,
     {
     data : {
       id:card.id,
       title:card.title,
       description:card.description,
       color:card.color,
       isDeleted:card.isDeleted,
       userId:card.userId,
      
     }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
 //add labels
  addlabels(card){
    console.log("form addlabels",card.id);
    // this.labelsData={
      
    //     "label": String,
    //     "isDeleted": false,
    //     "userId": "5c6fc4b7ea53620040e85d06"
      
    // }
  }

  stopPropagation(event){
    event.stopPropagation();
    // console.log("Clicked!");
  }
  reminder(){
    this.remindData={
      "reminder": [this.date.value], "noteIdList":[this.id]
      
    }
    console.log(this.remindData)
    this.svc.remindMe(this.remindData).subscribe(
      (response) => {console.log("success",response);
  
    },
      (error) => {console.log("error",error);}
    
    )
  }

}


