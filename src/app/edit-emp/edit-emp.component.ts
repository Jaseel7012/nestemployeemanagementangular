import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent {
  id=""
  name=""
  username=""
  email=""
  designation=""
  password=""
  v:any=[]
  
constructor(private api:ApiService,private r:Router){
  
  let data:any={
    "id":localStorage.getItem("userInfo")
  }
  console.log(data);
  api.empprofile(data).subscribe(
    (resp:any)=>{
      this.v=resp
      
      console.log(this.v[0])
      this.id=resp[0].id;
      this.email=resp[0].email
      this.username=resp[0].username
      this.designation=resp[0].designation,
      this.name=resp[0].name
      this.password=resp[0].password
      

    }
  )
}
read=()=>{
  let data:any={
    "username":this.username,
    "email":this.email,
    "designation":this.designation,
    "id":this.id,
    "name":this.name,
    "password":this.password
    
 }
 this.api.editprofile(data).subscribe(
  (response:any)=>{
    console.log(response)
    if(response.status=="updated"){
      this.r.navigate(['/empprofile'])

    }
    alert("updated")
  }
 )
}



}
