import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import{LoginComponent} from './logincomponent/logincomponent.component'
import { HomeComponent }   from './home/home.component';
const routes: Routes = [
 { path: '',  component: HomeComponent},
 //{ path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
 // { path: 'detail/:id', component: HeroDetailComponent },
//  { path: 'heroes', component: HeroesComponent }
{  path: 'admin',
loadChildren: './admin/admin.module#AdminModule' }
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
