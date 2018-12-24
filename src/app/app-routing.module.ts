import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import{LoginComponent} from './logincomponent/logincomponent.component'
import { HomeComponent }   from './home/home.component';
import {HospitalComponent}  from './hospital/hospital.component';
import {DepartmentComponent} from './department/department.component'
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
 { path: '', redirectTo: "/hospital" ,pathMatch:'full'},
 { path: 'hospital', component: HospitalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'department/:name', component: DepartmentComponent },
//  { path: 'heroes', component: HeroesComponent }
{  path: 'admin',
loadChildren: './admin/admin.module#AdminModule' },
{ path:'registartion',component:RegistrationComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
  ,exports:[RouterModule]
})
export class AppRoutingModule { }
