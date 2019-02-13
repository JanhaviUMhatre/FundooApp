import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

declare var $;



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild('dataTable') table;
 data: any[];
basic :number;
advance :number;
// userList=[];

  constructor(private svc : HttpService) { }

  ngOnInit() {
    this.getData()
    $(document).ready(function () {
      $('#dtBasicExample').DataTable();
      $('.dataTables_length').addClass('bs-select');
      });
    
  }
  getData() {
    
    this.svc.getUserData().subscribe((response) => {
      
      console.log(response['data'].data);
      this.data = response['data'].data;
      var service = 'basic';
      var srvc = 'advance';
      this.basic = this.data.filter((obj) => obj.service === service).length;
      this.advance = this.data.filter((obj) => obj.service === srvc).length;
      console.log(this.basic);
      console.log(this.advance);
      // for(let i=0;i<this.data.length;i++){
      //   for(var j in this.data){
      //   if(j['service']=='basic'){
      //      this.count++;
      //   }
      //}
      //}
  
    },
    (error)=> {console.log("error",error)}  )
  }

  
  }


