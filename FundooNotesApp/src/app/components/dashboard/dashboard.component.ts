// ***********************************************************************************
// * Purpose:Dashboard component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since 6-2-2019
// *
// ***********************************************************************************

import { Component, OnInit } from '@angular/core';

import { LabelsComponent } from '../labels/labels.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/notes/note.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  Search:any;
  flagnote:any;
  constructor(private svc :NoteService,public dialog: MatDialog,private router: Router,private ser : SearchService) { }

  ngOnInit() {
    
  }
  showDiv(){
    this.svc.currentFlag.subscribe(flagnote => this.flagnote = flagnote)
    // console.log("called div");
    // this.flagnote=!this.flagnote;
    console.log(this.flagnote)
  }
  openModal(templateRef) {
    let dialogRef = this.dialog.open(templateRef, {
        width: '250px',
        // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
    });
}
openSearch(){
    this.router.navigate(['/dashboard/search']);
}
lookFor(){
        this.ser.changeMessage(this.Search);
}
}
