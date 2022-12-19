import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {
  constructor(private api:ApiService){
    this.api.leaveadminview().subscribe(
      (resp:any)=>{
        this.data=resp
      }
    )
  }


  data:any=[]
}
