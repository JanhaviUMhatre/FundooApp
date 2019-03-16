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
  id:any;
description:any;
public question: string;
  questiondata: any;
  queans: any;
  profile: any;
  firstname: any;
  constructor(private que : QuestionService) { }

  ngOnInit() {
   
    this.que.currentMessage.subscribe(title => this.title = title)
    this.que.currentMessageD.subscribe(description=> this.description=description)
    this.que.currentMessageArray.subscribe(id=> this.id=id)
    this.getNoteDetails()
  }

  getNoteDetails(){
    this.que.getNotesDetails('notes/getNotesDetail/'+this.id).subscribe(
      (response)=>{console.log("success",response)
      for(let i of response['data']['data']){
        console.log(i['questionAndAnswerNotes'])
        this.queans=i['questionAndAnswerNotes']
        for(let j of this.queans){
          console.log("new for",j['user']['imageUrl'])
          this.profile=j['user']['imageUrl']
          this.firstname=j['user']['firstName']
        }
      }
    
  console.log("qqqqqqqqqqqqqqqq",this.queans)
  },
      (error)=>{console.log("error",error)}
    )
  }
  
  getquestion(){
    console.log(this.question)
    this.questiondata={
      "message":this.question,
      "notesId":this.id
    }
    console.log("from questions",this.questiondata)
    this.que.addquestionans(this.questiondata).subscribe(
      (response)=>{console.log("successfully added question",response)
      this.getNoteDetails()},
      (error)=>{console.log("error",error)}
    )
    
  }
}
