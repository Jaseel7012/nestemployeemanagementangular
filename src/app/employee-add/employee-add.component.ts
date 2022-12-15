import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  name=""
  designation=""
  username=""
  email=""
  password=""
  constructor(private api:ApiService){}
  read=()=>{
    let data:any={
     "name":this.name,
       "designation":this.designation,
       "username":this.username,
       "password": this.password,
       "email":this.email
   
    }
    this.api.addemp(data).subscribe(
      (resp:any)=>{
        console.log(resp)
        
      }
    )
    this.name=""
    this.designation=""
    this.email=""
    this.password=""
    this.username=""
    
    
    
     
     
   
   
   
   
   }
}
