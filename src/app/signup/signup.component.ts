import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

@Component({
  selector: 'app-signup',
  imports: [Form1Component, Form2Component],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent {
  constructor(private _router: Router) { }
  atForm1: Boolean = true;
  navToForm1() {
    this._router.navigate(['/signup/form1']);
  }
  navToForm2() {
    this._router.navigate(['/signup/form2']);
    this.atForm1 = false;
  }
}