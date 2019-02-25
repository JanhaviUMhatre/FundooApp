// ***********************************************************************************
// * Purpose: note service component.
// *
// * @author : Janhavi Mhatre
// * @python version 3.7
// * @platform : VS Code
// * @since 17-2-2019
// *
// ***********************************************************************************

import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUrl = environment.baseUrl;

  constructor(private user : HttpService) { }
  createnote(userData){
    console.log(userData);
    return this.user.PostForm(this.baseUrl+'notes/addNotes',userData)
  }
  
  archivednote(userData){
    return this.user.postMethod(this.baseUrl+'notes/archiveNotes',userData)
  }
  trashnote(userData){
    return this.user.postMethod(this.baseUrl+'notes/trashNotes',userData)
  }
  pinnote(userData){
    return this.user.postMethod(this.baseUrl+'notes/pinUnpinNotes',userData)
  }
  colornote(userData){
    return this.user.postMethod(this.baseUrl+'notes/changesColorNotes',userData)
  }
  getNotes(){
    return this.user.getForm(this.baseUrl+'notes/getNotesList')
    }
    updatednote(userData){
      return this.user.postMethod(this.baseUrl+'notes/updateNotes',userData)

    }
}
