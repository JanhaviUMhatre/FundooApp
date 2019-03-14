import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  title: string;
description:any;
  constructor(private que : QuestionService) { }

  ngOnInit() {
    this.que.currentMessage.subscribe(title => this.title = title)
    this.que.currentMessageD.subscribe(description=> this.description=description)
  }
  
}
