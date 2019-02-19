import { Component, OnInit } from '@angular/core';
import { CreateNote } from 'src/app/models/createnote.model';
import { MatSnackBar } from '@angular/material';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';
import { FormBuilder } from '@angular/forms';

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
  noteData : any;
  constructor(private snackBar: MatSnackBar,private svc : UserServiceService,private formBuilder: FormBuilder) { }

  
  ngOnInit() {
  }
  createNote(){
    this.noteData = {
      title: this.note.title,
      description: this.note.description,
     
     
    }
    console.log(this.noteData);
  }
}
