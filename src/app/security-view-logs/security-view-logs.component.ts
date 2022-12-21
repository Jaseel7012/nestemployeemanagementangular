import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-view-logs',
  templateUrl: './security-view-logs.component.html',
  styleUrls: ['./security-view-logs.component.css']
})
export class SecurityViewLogsComponent {
constructor(private api:ApiService){
  api.viewalllogssecurity().subscribe(
    (resp:any)=>{
      this.data=resp;

    }
  )
}
data:any=[]
}
