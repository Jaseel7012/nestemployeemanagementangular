import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import {HttpClientModule} from '@angular/common/http'
const myroute:Routes=[
{
  path:''
  ,component:AdminComponent
},{
  path:'addemp',
  component:AddEmployeeComponent
},{
  path:'loginemp',
  component:LoginEmployeeComponent
},{
  path:'empsearch',
  component:SearchEmpComponent
},{
  path:'edit',
  component:EditEmpComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddEmployeeComponent,
    LoginEmployeeComponent,
    ViewEmployeeComponent,
    SearchEmpComponent,
    EditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
