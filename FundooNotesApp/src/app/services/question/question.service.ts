import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private messageSourceTitle = new BehaviorSubject('title');
  private messageSourceDescription = new BehaviorSubject('description');
  currentMessage = this.messageSourceTitle.asObservable();
  currentMessageD = this.messageSourceDescription.asObservable();
  constructor() { }
  changeMessage(title: string) {
    this.messageSourceTitle.next(title)
  }

  changeMessageD(description: string) {
    this.messageSourceDescription.next(description)
  }
}
