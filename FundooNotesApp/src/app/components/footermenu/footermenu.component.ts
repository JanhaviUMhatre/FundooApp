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
import { FormControl } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-footermenu',
  templateUrl: './footermenu.component.html',
  styleUrls: ['./footermenu.component.scss']
})
export class FootermenuComponent implements OnInit {
  labels = new FormControl('')
  baseUrl = environment.baseUrl;


@Input() data: any;
  archiveData: { "isArchived": any; "noteIdList": any[]; };
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
  ColorData: { "color": any; "noteIdList": any[]; };
  label: any;
  addlabeldata: { "label": any; "userId": any; "isDeleted": any; };
  labelresponse: any;
  deletevalue: boolean;
  deleteData: { "isDeleted": boolean; "noteIdList": any[]; };
  addlabel: { "noteId": any; "lableId": any; };

  constructor(private svc :NoteService,private http: HttpClient) { }

  
  ngOnInit() {
    this.getLabelsDashboard()
  }
  archive(){
  console.log(this.data.title)
  console.log(this.data.isArchived)
  this.data.isArchived =! this.data.isArchived
  console.log(this.data.isArchived);
  this.archiveData={
    "isArchived":this.data.isArchived,
    "noteIdList":[this.data.id]
  }
   console.log(this.archiveData);
  this.svc.archivednote(this.archiveData).subscribe(
    (response) => {console.log("success",response);

  },
    (error) => {console.log("error",error);}
  )
}

changeColor(color) {
  console.log(color,this.data.color)
  this.ColorData={
    "color":color,
    "noteIdList":[this.data.id]
  }
  console.log(this.ColorData)
  this.svc.colornote(this.ColorData).subscribe(
    (response) => {console.log("success",response);
  },
    (error) => {console.log("error",error);}
  )

}
 
stopPropagation(event){
  event.stopPropagation();
  // console.log("Clicked!");
}

getLabelsDashboard(){
  this.svc.getLabels().subscribe(
      (response) => {console.log("success",response);
      this.label=response['data']['details'];
      console.log(this.label)
  },
      (error)=>{console.log("error",error)}
  )
}

addlabels(){
  
  this.addlabeldata={
    
    "label": this.labels.value,
    "userId": this.data.userId,
    "isDeleted": this.data.isDeleted
  
}

console.log(this.addlabeldata)
const httpOptions = {
  headers: new HttpHeaders({
   
    'Authorization':localStorage.getItem('token')
  })
}
this.http.post('http://34.213.106.173/api/notes/'+this.data.id+'/noteLabels',
{"label":this.labels.value,"userId": this.data.userId,
"isDeleted": this.data.isDeleted},httpOptions).subscribe(
  (response) => {console.log("success",response);
  this.labelresponse=response
console.log("label response",this.labelresponse)

},
  (error) => {console.log("error",error);}
)
}

addinglabel(labels){
  this.addlabel={
    "noteId":this.data.id,
    "lableId":labels.id
      
    
  }
console.log("selected label",this.addlabel);
this.svc.addingchecklistlabels('notes/'+this.data.id+'/addLabelToNotes/'+labels.id+'/add',this.addlabel).subscribe(
(Response)=>{console.log("success",Response)},
(error)=>{console.log("error",error)}
)


}


delete(){
  console.log(this.data.id);
  console.log("deleted")
   
  this.deletevalue =! this.deletevalue
 
this.deleteData={
 "isDeleted":this.deletevalue,
 "noteIdList":[this.data.id]
}
console.log(this.deleteData);
this.svc.trashnote(this.deleteData).subscribe(
 (response) => {console.log("success",response);

console.log(this.data)
},
 (error) => {console.log("error",error);}
)
 }

reminder(){

let now = new Date();
console.log(now)
}

}