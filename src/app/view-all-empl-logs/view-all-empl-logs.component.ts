import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-empl-logs',
  templateUrl: './view-all-empl-logs.component.html',
  styleUrls: ['./view-all-empl-logs.component.css']
})
export class ViewAllEmplLogsComponent {
  date=""
  search:any=[]
  constructor(private api:ApiService){
    this.api.emplallogsview().subscribe(
      (resp)=>{
        this.nameemp=resp
        console.log(resp)
      }
    )
  }



// constructor(private api:ApiService){}

  read=()=>{
    let data:any={
      "date":this.date
    }
    console.log(data)
    this.api.empalllogbydate(data).subscribe(
      (res:any)=>{
        this.search=res;
      }
    )
    
  }

nameemp:any=[]
}
