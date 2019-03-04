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
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUrl = environment.baseUrl;
  url:any;
  private flagSource = new BehaviorSubject(false);
  currentFlag = this.flagSource.asObservable();
  constructor(private user : HttpService) { }
  
  changeMessage(flagnote:boolean){
    this.flagSource.next(!flagnote)
    
 }
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
addlabel(userData){
  return this.user.postMethod(this.baseUrl+this.url,userData)
}
 getTrashNotes(){
   return this.user.getFormData(this.baseUrl+'notes/getTrashNotesList')
 }
 getArchiveNotes(){
  return this.user.getFormData(this.baseUrl+'notes/getArchiveNotesList')
}
deleteforevernote(userData){
  return this.user.postMethod(this.baseUrl+'notes/deleteForeverNotes',userData)
}
remindMe(userData:any){
return this.user.postMethod(this.baseUrl+'notes/addUpdateReminderNotes',userData)
}


}
