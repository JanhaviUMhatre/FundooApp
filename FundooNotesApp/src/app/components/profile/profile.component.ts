import { Component, OnInit, Inject } from '@angular/core';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry } from '@angular/material';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // fileToUpload= new FormControl('')
  selectedFile: any
  fileToUpload: File = null;
  
  profileForm: FormGroup;
  error: string;
  fileUpload = {status: '', message: '', filePath: ''};

  constructor(private router: Router,private fb: FormBuilder,private svc : UserServiceService,private http : HttpClient,
    public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  baseUrl = environment.baseUrl;

  ngOnInit() {
    this.profileForm = this.fb.group({
      imageUrl: ['']
    });
  }
  
onSelectedFile(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    console.log("fileee",file)
 
    this.svc.NEWupload(file).subscribe(
      (response) => {console.log("success",response)
      this.selectedFile=response['status'].imageUrl;
      localStorage.setItem('imageUrl',this.selectedFile)
      console.log("file",this.selectedFile)
      //this.router.navigate(['/dashboard']);
    },
      
      (error)=> {console.log("error",error)}
    )

    
  }
}


  }

