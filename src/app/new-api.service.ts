import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewApiService {

  constructor(private http:HttpClient) { }
  addemp=(data:any)=>{
    this.http.post("http://localhost:8080/addemp",data)
  }

}
