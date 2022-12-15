import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
name=""
sec_id=""
uname=""
password=""
constructor(private api:ApiService){}
read=()=>{
  let data:any={
    "name":this.name,
    "sec_id":this.sec_id,

    "uname":this.uname,
    "password":this.password
  }
  this.api.addsec(data).subscribe(
    (resp:any)=>{
      console.log(resp)
    }
  )
}
}
