import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';

import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ColorsDirective } from './colors.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';
import { AlertifyService } from './alertify.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { LoginComponent } from './login/login.component';
import { HighchartsChartModule } from 'highcharts-angular';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
   CreateaccountComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ColorsDirective,
    
    NavBarComponent,
          LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
      BrowserModule,
      AccordionModule,
      AlertModule,
      ButtonsModule,
      HighchartsChartModule
  ],
  providers: [AuthService,AlertifyService,AlertConfig],
  bootstrap: [AppComponent],
  
  


})
export class AppModule { }
