import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitor-log',
  templateUrl: './visitor-log.component.html',
  styleUrls: ['./visitor-log.component.css']
})
export class VisitorLogComponent {
name=""
date=""
purpose=""
entrytime=""
exittime=""
constructor(private api:ApiService){}
read=()=>{
  let data:any={
    "name":this.name,
    "date":this.date,
    "purpose":this.purpose,
    "entrytime":this.entrytime,
    "exittime":this.exittime
  }
  this.api.visitorlogadd(data).subscribe(
    (resp:any)=>{
      console.log(resp)
    }
  )
  
  

}
}
