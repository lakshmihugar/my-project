import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    CreateaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
