import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {
uname=""
password=""
constructor(private api:ApiService,private route:Router){}
read=()=>{
  let data:any={
    "uname":this.uname,
    "password":this.password
  }
  this.api.securitylogin(data).subscribe(
    (rsep:any)=>{
      console.log(rsep)
      if(rsep.status=="success"){
        
        let sid=rsep.s_id;
        console.log(sid);
        localStorage.setItem("secInfo",sid);


        this.route.navigate(['/secprofile'])
        
      }
      else{
        alert("invalid login")
      }
    }
  )

}



}
