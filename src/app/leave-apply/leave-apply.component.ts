import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.css']
})
export class LeaveApplyComponent {
  name=""
  remarks=""
  frmdate=""
  todate=""
  applydate=""
  emp_id=""
type=""
constructor(private api:ApiService){}
read=()=>{
  let data:any={
    "type":this.type,
    "name":this.name,
    "remarks":this.remarks,
    "frmdate":this.frmdate,
    "todate":this.todate,
    "applydate":this.applydate,
    "emp_id":this.emp_id

  }
  console.log(data)
  this.api.emplleaveapply(data).subscribe(
    (resp:any)=>{
      console.log(resp)
    }
  )


}
}
