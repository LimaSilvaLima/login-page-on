import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from "../../components/primary-input/primary-input";

@Component({
  selector: 'app-login',
   standalone: true,
  imports: [
    DefaultLoginLayout,
    ReactiveFormsModule,
    PrimaryInput
],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });  
  }

  submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log("Form is invalid");
    }
  }

  navigate() {
    console.log("this.loginForm.value");
  }
}
