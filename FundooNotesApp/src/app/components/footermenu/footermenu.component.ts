// ***********************************************************************************
// * Purpose: footer menu component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since 15-2-2019
// *
// ***********************************************************************************

import { Component, OnInit } from '@angular/core';
import { CreateNote } from 'src/app/models/createnote.model';
import { MatSnackBar } from '@angular/material';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';
import { FormBuilder } from '@angular/forms';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-footermenu',
  templateUrl: './footermenu.component.html',
  styleUrls: ['./footermenu.component.scss']
})
export class FootermenuComponent implements OnInit {
  note : CreateNote =new CreateNote;
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
  notificationIcon = "../../assets/Icons/notification.svg";
  deleteData : any;
  deletevalue=false;
data:any[];
DataValue :any;
  constructor(private snackBar: MatSnackBar,private svc :NoteService) { }

  
  ngOnInit() {
    this.getNoteData();
  }
  getNoteData(){
    this.svc.getNotes().subscribe(
      (response) => {
    this.data = response['data']['data']; 
    
    },
      (error) => {console.log("error",error);}
      )
      
  }
  
  delete(){
console.log("deleted")
//console.log(this.data.length);
this.deletevalue =! this.deletevalue
//console.log(this.deletevalue);
for(let i = 0;i<=this.data.length-1;i++){

 console.log( this.data[i].id)
this.DataValue = this.data[i].id;
 
}
this.deleteData={
  "isDeleted":this.deletevalue,
  "noteIdList":[this.DataValue]
}
// this.svc.trashnote("");
console.log(this.deleteData);
this.svc.trashnote(this.deleteData).subscribe(
  (response) => {console.log("success",response);},
  (error) => {console.log("error",error);}
)
  }
}
