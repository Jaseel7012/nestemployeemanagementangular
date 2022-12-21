import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-allvisitor-log',
  templateUrl: './view-allvisitor-log.component.html',
  styleUrls: ['./view-allvisitor-log.component.css']
})
export class ViewAllvisitorLogComponent {
date=""
datesearch:any=[]

  constructor(private api:ApiService){
    this.api.visitorslogview().subscribe(
      (resp:any)=>{
        this.data=resp
      }
    )
  }
  read=()=>{
    let data:any={
      "date":this.date
    }
    this.api.visitorslogviewbyDate(data).subscribe(
      (resp:any)=>{
        this.datesearch=resp

      }
    )
  }

  data:any=[]

}
