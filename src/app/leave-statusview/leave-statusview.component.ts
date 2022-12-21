import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-statusview',
  templateUrl: './leave-statusview.component.html',
  styleUrls: ['./leave-statusview.component.css']
})
export class LeaveStatusviewComponent {
emp_id=localStorage.getItem("userInfo")
constructor(private api:ApiService){
  let data={
    "emp_id":this.emp_id
  }
  console.log(data)
  this.api.empleavestatus(data).subscribe(
    (resp:any)=>{
      this.fetchdata=resp
      console.log(resp)

    }
    
  )
  this.api.empleavecount(data).subscribe(
    (response:any)=>{
      this.countleave=response
      console.log(response)
      
      this.r=(this.countleave[0].sick+this.countleave[0].cas+this.countleave[0].special)


    }
  )
  
  
}
fetchdata:any=[]
countleave:any=[]
 r:number=0



}
