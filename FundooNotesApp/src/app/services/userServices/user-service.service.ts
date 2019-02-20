import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = environment.baseUrl;

  constructor(private http : HttpClient,private user : HttpService) { }
    registration(userData){
          return this.http.post<any>(this.baseUrl+'user/userSignUp',userData)
    }

    login(userData){
      return this.http.post<any>(this.baseUrl+'user/login',userData)
}
reset(userData){
  return this.http.post<any>(this.baseUrl+'user/reset',userData)
}
resetpassword(userData){
  return this.http.post<any>(this.baseUrl+'user/reset-password',userData)
}
createnote(userData){
  return this.user.PostForm('http://34.213.106.173/api/notes/addNotes',userData)
}

archivednote(userData){
  return this.user.PostForm('http://34.213.106.173/api/notes/archiveNotes',userData)
}

getNotes(){
  return this.user.getForm('http://34.213.106.173/api/notes/getNotesList')
  }
}