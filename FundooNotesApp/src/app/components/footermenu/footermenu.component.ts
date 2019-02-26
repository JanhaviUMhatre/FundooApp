// ***********************************************************************************
// * Purpose: footer menu component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since 15-2-2019
// *
// ***********************************************************************************

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreateNote } from 'src/app/models/createnote.model';
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

DataValue :any;

//@Output() footerData = new EventEmitter();
  constructor(private svc :NoteService) { }

  
  ngOnInit() {
    //this.footerData.emit(this.footerData)
    
  }

  delete(){
  
    console.log("deleted")
    
    this.deletevalue =! this.deletevalue
    //console.log(this.data)
// this.deleteData={
//   "isDeleted":this.deletevalue,
//   "noteIdList":[this.data['id']]
// }
// console.log(this.deleteData);
// this.svc.trashnote(this.deleteData).subscribe(
//   (response) => {console.log("success",response);
// console.log(this.data)
// },
//   (error) => {console.log("error",error);}
// )
  
    // )
      }

      updateNote(){

      }
      gettingId(id){
        console.log("got the id",id)
        
      }
      
    }