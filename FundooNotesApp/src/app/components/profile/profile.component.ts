import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  fileToUpload= new FormControl('')
  selectedFile: File
  constructor(private svc : UserServiceService,private http : HttpClient) { }
  baseUrl = environment.baseUrl;

  ngOnInit() {
  }
  // handleFileInput(files: File) {
  //   this.fileToUpload = files;
    // return this.fileToUpload;
    //}
    // uploadFileToActivity() {
    //   console.log(this.fileToUpload.value)
    // this.svc.uploadProfile(this.fileToUpload.value).subscribe(data => {
    // console.log(data);
    // }, error => {
    // console.log(error);
    // });
    // }

    onFileChanged(event) {
      this.selectedFile = event.target.files[0]
    }
  
    onUpload() {
      const uploadData = new FormData();
      uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
      this.http.post('user/uploadProfileImage', uploadData, {
        reportProgress: true,
        observe: 'events'
      })
        .subscribe(event => {
          console.log(event); // handle event here
        });
  }

}
