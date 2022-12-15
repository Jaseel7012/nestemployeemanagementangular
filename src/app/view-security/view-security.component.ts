import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-security',
  templateUrl: './view-security.component.html',
  styleUrls: ['./view-security.component.css']
})
export class ViewSecurityComponent {
  constructor(private api:ApiService){
    this.api.viewsec().subscribe(
      (resp:any)=>{
        this.data=resp;
      }
    )
  }

  data:any=[]
}
