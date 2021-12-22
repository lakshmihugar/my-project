import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';


import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify.service';


//import { AlertifyService } from 'src/app/alertify.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  loginForm = new FormGroup({
    enteredemail: new FormControl('',[Validators.required]),
    enteredpassword: new FormControl('',[Validators.required])
  })

  constructor(private authService: AuthService,
    private alertify:AlertifyService,
 private router:Router) { }

  ngOnInit() { }

   onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token= this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token',token.UserName);
    this.alertify['success']('Login Successful');
    this.router.navigate(['/']);
    }
    else
    {
      this.alertify['error']('user id is wrong');
    }
   
  }
}


