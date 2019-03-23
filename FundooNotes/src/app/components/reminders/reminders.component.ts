import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
data:any;
  constructor(private svc :NoteService) { }

  ngOnInit() {
    this.getReminder();
  }
getReminder(){
  this.svc.getReminderNotes().subscribe(
    (response)=>{console.log("success",response)
  this.data=response['data']['data']
  for(let note of this.data){
    console.log(note.reminder.toLocaleDateString())
  }
console.log(this.data)},
  (error)=>{console.log("error",error)}
  )
}
}
