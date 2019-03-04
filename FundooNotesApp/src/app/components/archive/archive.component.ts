// ***********************************************************************************
// * Purpose: archive component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since 1-3-2019
// *
// ***********************************************************************************
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/notes/note.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { LabelsComponent } from '../labels/labels.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  data:any;
pinvalue:any;
pinData:any;
  archiveData: { "isArchived": any; "noteIdList": any[]; };
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
    this.getArchiveNoteData()
  }
  getArchiveNoteData(){
    this.svc.getArchiveNotes().subscribe(
      (response) => {console.log("success get trash notes",response)
    this.data = response['data']['data']; 
    console.log(this.data)
    

    },
      (error) => {console.log("error",error);}
      )
      
  }
archive(card){
  console.log(card.isArchived)
  card.isArchived =! card.isArchived
  console.log(card.isArchived);
  this.archiveData={
    "isArchived":card.isArchived,
    "noteIdList":[card.id]
  }
   console.log(this.archiveData);
  this.svc.archivednote(this.archiveData).subscribe(
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
     color:card.color,
     isDeleted:card.isDeleted,
     userId:card.userId,
    
   }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });
}
}