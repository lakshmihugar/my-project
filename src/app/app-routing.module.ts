import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

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
    path:'Login',component:LoginComponent
  },
  {
    path:'Createaccount',component:CreateaccountComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
