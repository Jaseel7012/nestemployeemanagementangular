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

 securitylogin=(data5:any)=>{
  return this.http.post("http://localhost:8080/loginsecurity",data5)
 }
 securityprofile=(data6:any)=>{
  return this.http.post("http://localhost:8080/securityprofile",data6)
 }
 editprofile=(data7:any)=>{
  return this.http.post("http://localhost:8080/edit",data7)
 }

 leaveadminview=()=>{
  return this.http.get("http://localhost:8080/viewallleave")
 }
 emplallogsview=()=>{
  return this.http.get("http://localhost:8080/viewlogempname")

 }

 empalllogbydate=(data:any)=>{
  return this.http.post("http://localhost:8080/viewlogempdate",data)
 }
 visitorslogview=()=>{
  return this.http.get("http://localhost:8080/viewvisitorlog")
 }
 visitorslogviewbyDate=(data:any)=>{
  return this.http.post("http://localhost:8080/visitorlogbydate",data)
 }
 emplleaveapply=(data:any)=>{
  return this.http.post("http://localhost:8080/leaveapply",data)
 }
 empleavestatus=(data:any)=>{
  return this.http.post("http://localhost:8080/leavestatus",data)
 }
 empleavecount=(data:any)=>{
  return this.http.post("http://localhost:8080/viewcountempleave",data)
 }
 emplogadd=(data:any)=>{
  return this.http.post("http://localhost:8080/addemplog",data)
 }
visitorlogadd=(data:any)=>{
  return this.http.post("http://localhost:8080/addvisitorlog",data)
}
viewalllogssecurity=()=>{
  return this.http.get("http://localhost:8080/viewvisitorlog")
}

  // addemp=(data:any)=>{
  //   this.http.post("http://localhost:8080/addemp",data)
  // }

}
