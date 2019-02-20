import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private user : HttpService) { }
  createnote(userData){
    console.log(userData);
    return this.user.PostForm('http://34.213.106.173/api/notes/addNotes',userData)
  }
  
  archivednote(userData){
    return this.user.PostForm('http://34.213.106.173/api/notes/archiveNotes',userData)
  }
  
  getNotes(){
    return this.user.getForm('http://34.213.106.173/api/notes/getNotesList')
    }
  
}
