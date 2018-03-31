import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',
        [Validators.required, Validators.email]
      ),
      password: new FormControl('',
      [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}