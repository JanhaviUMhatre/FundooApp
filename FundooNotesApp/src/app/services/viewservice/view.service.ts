import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private messageSource = new BehaviorSubject("row wrap");
  private labelSource = new BehaviorSubject(null);
  private loginSource = new Subject<any>();
  currentMessage = this.messageSource.asObservable();
  currentlabel = this.labelSource.asObservable();
  currentlogin = this.loginSource.asObservable();
  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changelabel(label: string) {
    this.labelSource.next(label)
  }
  sendMessage(data: string) {
    this.loginSource.next({ text: data });
}

  loginResponse(): Observable <any> {
      return this.loginSource.asObservable();
  };

}