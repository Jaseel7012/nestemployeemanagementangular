import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent {
dataresp:any=[]
secid:any=""
constructor(private api:ApiService){
  this.secid=localStorage.getItem("secInfo")
  let data:any={
    "id":this.secid
  }
  this.api.securityprofile(data).subscribe(
    (resp:any)=>{
      this.dataresp=resp;
      console.log(this.dataresp)

    }
  )
}

}
