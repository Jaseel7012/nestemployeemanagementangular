import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-guard',
  templateUrl: './search-guard.component.html',
  styleUrls: ['./search-guard.component.css']
})
export class SearchGuardComponent {
name=""
search:any=[]
constructor(private api:ApiService){}
read=()=>{
  let data:any={
    "name":this.name
  }
  this.api.searchsec(data).subscribe(
    (resp)=>{
      this.search=resp;

    }
  )

}
}
