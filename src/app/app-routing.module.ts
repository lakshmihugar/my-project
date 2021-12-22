import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { HomeComponent } from './components/home/home.component';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },{
    path:'Aboutus',component:AboutusComponent
  },
  {
    path:'Contactus',component:ContactusComponent
  },
  
  {
    path:'Createaccount',component:CreateaccountComponent
  },
  
  { 
    path: '', pathMatch: 'full', redirectTo: 'login'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
