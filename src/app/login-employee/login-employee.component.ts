import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent {
  username=""
password=""
constructor(private api:ApiService,private r:Router){}
read=()=>{
 let  data:any={
  "username":this.username,
  "password":this.password

  }
  this.api.emplogin(data).subscribe(
    (resp:any)=>{

      console.log(resp);
      if(resp.message=="Success"){
        let empid=resp.emp_id;
        console.log(empid);
        localStorage.setItem("userInfo",empid)


        this.r.navigate(['/empprofile'])
       
      }else{
        alert("Not Exist")
      }
     
    }
  )}
}

