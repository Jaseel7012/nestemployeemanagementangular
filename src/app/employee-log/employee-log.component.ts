import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-log',
  templateUrl: './employee-log.component.html',
  styleUrls: ['./employee-log.component.css']
})
export class EmployeeLogComponent {
  emp_id=""
  name=""
  date=""
  entryTime=""
  exitTIME=""
  

  constructor(private api:ApiService,private router:Router){}
  entry=()=>{
    const date=new Date();
    let data:any={
      "emp_id":this.emp_id,
      "entryTime":date.toLocaleTimeString(),
      "date":this.date,
      "name":this.name,

    }
    console.log(data)
    this.api.emplogadd(data).subscribe(
      (resp:any)=>{
        console.log(resp)
        if(resp.status=="success"){
          alert("log added successfully")
        }
        else{
          alert("something wwent wrong")
        }
      }
    )
    this.emp_id=""
  }
  exit=()=>{
    const date=new Date();
    let data:any={
      "emp_id":this.emp_id,
      "exitTime":date.toLocaleTimeString(),
      "date":this.date,
      "name":this.name,

      
    }
    console.log(data)
    this.api.emplogadd(data).subscribe(
      (resp:any)=>{
        console.log(resp)
        if(resp.status=="success"){
          alert("log added successfully")
        }
        else{
          alert("something wwent wrong")
        }
      }
    )
  }

}
