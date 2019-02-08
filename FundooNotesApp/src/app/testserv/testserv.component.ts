import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/userServices/user-service.service';

@Component({
  selector: 'app-testserv',
  templateUrl: './testserv.component.html',
  styleUrls: ['./testserv.component.scss']
})
export class TestservComponent implements OnInit {

  private testrespo: any;
  constructor(private testdata: UserServiceService) {
    

   }

  ngOnInit() {
    alert("ddad");
   this.testdata.testservice().subscribe(data=> this.testrespo = data);
   console.log(this.testrespo);
  }

}
