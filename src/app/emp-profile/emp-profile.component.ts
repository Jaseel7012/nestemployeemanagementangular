import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent {
 dataresp:any=[]
  empid:any=""
  constructor(private api:ApiService){
    this.empid=localStorage.getItem("userInfo")
    let data:any={
      "id":this.empid
    }
    this.api.empprofile(data).subscribe(
      (resp:any)=>{
        this.dataresp=resp
        console.log(this.dataresp)

      }
    )
  }


}
