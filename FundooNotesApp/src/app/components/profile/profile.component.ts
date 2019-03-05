import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/userServices/user-service.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // fileToUpload= new FormControl('')
  selectedFile: File
  fileToUpload: File = null;
  
  profileForm: FormGroup;
  error: string;
  fileUpload = {status: '', message: '', filePath: ''};

  constructor(private fb: FormBuilder,private svc : UserServiceService,private http : HttpClient) { }
  baseUrl = environment.baseUrl;

  ngOnInit() {
    this.profileForm = this.fb.group({
      imageUrl: ['']
    });
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

  //   handleFileInput(files: FileList) {
  //     this.fileToUpload = files.item(0);
  // }
  // uploadFileToActivity() {
  //   this.svc.postFile(this.fileToUpload).subscribe(data => {
  //     // do something, if upload success
  //     console.log("success",data)
  //     }, error => {
  //       console.log(error);
  //     });
  // }


// new new new
onSelectedFile(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    console.log("fileee",file)
    // Encode the String
var encodedString = btoa(file);
console.log(encodedString);
    this.svc.NEWupload(encodedString).subscribe(
      (response) => {console.log("success",response)},
      
      (error)=> {console.log("error",error)}
    )
    //this.profileForm.get('imageUrl').setValue(file);
    
  }
}

// onSubmit() {
//   const formData = new FormData();

//   formData.append('imageUrl', this.profileForm.get('imageUrl').value);
//   console.log(this.profileForm.get('imageUrl').value)
//   var options = { "imageUrl": this.profileForm.get('imageUrl').value};
//   // this.svc.NEWupload(formData).subscribe(data => {
//   //   // do something, if upload success
//   //   console.log("success",data)
//   //   }, error => {
//   //     console.log(error);
//   //   });
//   console.log(options)
//     const HttpUploadOptions = {
//       headers: new HttpHeaders(
//         { "Content-Type": "multipart/form-data",
//       'Authorization':localStorage.getItem('token')}
//     //}
//     )

//     }

//    this.http.post(this.baseUrl+'user/uploadProfileImage', formData,HttpUploadOptions).subscribe(data => {
//     // do something, if upload success
//     console.log("success",data)
//     }, error => {
//       console.log(error);
//     });
//   }
  }

