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
      //  {data: item}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   

    });

  }
}
