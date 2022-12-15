import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {

  name=""
  
  constructor(private Api:ApiService){}
  s:any=[]
  read=()=>{
   let  data={
      "name":this.name
    }
    this.Api.searchemp(data).subscribe(
      (resp)=>{
        console.log(resp)
        this.s=resp
        
      }
    )
    this.name=""
    

  }
}
