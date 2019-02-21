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
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LabelsComponent } from '../labels/labels.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(){
    const dialogRef = this.dialog.open(LabelsComponent, {
      width:"200px"
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   

    });

  }
}
