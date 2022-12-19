import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.css']
})
export class LeaveApplyComponent {
type=""
read=()=>{
  let data:any={
    "type":this.type

  }
  console.log(data)
}
}
