import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  createAccountForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createAccountForm=new FormGroup({
      userName:new FormControl('',Validators.required),
      email : new FormControl(null,[Validators.required,Validators.email])
    });
  }
  
  onSubmit(){
    console.log(this.createAccountForm);
  }
}
