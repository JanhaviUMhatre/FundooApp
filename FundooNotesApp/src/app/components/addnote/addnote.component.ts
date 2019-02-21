// ***********************************************************************************
// * Purpose: Add note component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since 18-2-2019
// *
// ***********************************************************************************

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { CreateNote } from 'src/app/models/createnote.model';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  @Output() noteEvent = new EventEmitter<string>();
 flag = false;
  isActive = false;
  pinValue= false;
  archiveValue=false;
  pinnedIconSrc = "../../assets/Icons/pinIcon.svg";
  unpinnedIconSrc = "../../assets/Icons/unpinIcon.svg";
  //color code array
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
  color: any = "#ffffff";
  notificationIcon = "../../assets/Icons/notification.svg";
  noteData : any;
  //note : CreateNote =new CreateNote;

title = new FormControl('')
description = new FormControl('')
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,private snackBar: MatSnackBar,private svc : NoteService
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
  }
  //change div
  showDiv(){
    console.log("called div");
    this.flag=!this.flag;
  }
  //pin/unpin
  pin(){
    console.log("called pin");
    this.pinValue=!this.pinValue;
  }
  //archive note
  archive(){
    console.log("called archive");
    this.archiveValue=!this.archiveValue;
    
    this.openSnackBar();
  }


  openSnackBar() {
    this.snackBar.open("archived!!", 'OK', {
      duration: 3000
    });
  }
  openSnackBarError() {
    this.snackBar.open("please provide title and description", 'OK', {
      duration: 3000
    });
  }

  //main function to create note
  createNote(){
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('token');
    // console.log(token,userId);

    this.noteData = {
        "title": this.title.value,
        "description": this.description.value,
        "isPined": this.pinValue,
        "isArchived": this.archiveValue,     
        "color": this.color,    
    }
    if(this.noteData.title != null || this.noteData.description!=null){
    console.log(this.noteData);
     this.svc.createnote(this.noteData).subscribe(
       (response)=>{console.log("success",response);
      },
      (error)=>{console.log("error",error);}
     ); }
    else{
      this.openSnackBarError();
    }
    this.flag=!this.flag;

  }
  //color
  changeColor(color) {

    this.color = color;

  }
  
}
