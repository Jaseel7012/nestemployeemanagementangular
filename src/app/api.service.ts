import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  emplogin=(data:any)=>{
    return this.http.post("http://localhost:8080/loginemp",data)

  }
  searchemp=(data:any)=>{
    return this.http.post("http://localhost:8080/searchname",data)
  }
  addemp=(data1:any)=>{
    return this.http.post("http://localhost:8080/addemp",data1)
  }
  viewemp=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  addsec=(data1:any)=>{
    return this.http.post("http://localhost:8080/addsec",data1)
  }
viewsec=()=>{
  return this.http.get("http://localhost:8080/viewsecquard")

}
searchsec=(data2:any)=>{
  return this.http.post("http://localhost:8080/searchsecname",data2)

}
empprofile=(data3:any)=>{
  return this.http.post("http://localhost:8080/userid",data3)
}

  // addemp=(data:any)=>{
  //   this.http.post("http://localhost:8080/addemp",data)
  // }

}
