import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  uname=""
  password=""
constructor(private r:Router){}
read=()=>{
  let data:any={
    "uname":this.uname,
    "password":this.password
  }
  if(this.uname=="admin" && this.password=="password"){
    this.r.navigate(['/'])
  }
  else{
    alert("invalid")
  }

}

}
