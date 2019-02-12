import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';
import { AdminDetails  } from 'src/app/models/details.model';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
private data: any[];
// userList=[];
  constructor(private svc : HttpService) { }

  ngOnInit() : 
    void{
      this.svc.getUserData().subscribe(
        (response)=> {this.data = response;
          // this.mytest="ssgsg"
          console.log("data :"+response);
          var sample=JSON.stringify(response);
          console.log(sample);
        }
     )
    
  }
}

