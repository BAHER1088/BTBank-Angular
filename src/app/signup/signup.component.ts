// import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [Form1Component, Form2Component],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent implements OnInit {
  myData: any;
  form2Data: any;
  form1Data: any;
  constructor(private _router: Router) { }




  ngOnInit(): void {
    // Stage 1: Create the object with initial data
    this.myData = {};
  }







  atForm1: Boolean = true;
  // Get references to child components
  @ViewChild(Form1Component) form1Component!: Form1Component;
  @ViewChild(Form2Component) form2Component!: Form2Component;
  navToForm1() {
    this._router.navigate(['/signup/form1']);
    this.atForm1 = true;
  }
  navToForm2() {

    this.form1Data = this.form1Component ? this.form1Component.getData() : {};
    this.myData = {
      ...this.myData, ...this.form1Data
    };



    this._router.navigate(['/signup/form2']);
    this.atForm1 = false;
  }
  navToHome() {
    this._router.navigate(['/home']);
    this.atForm1 = false;
  } submit(): void {
    // Get data from Form1 (if available)
    // this.form1Data = this.form1Component ? this.form1Component.getData() : {};
    // console.log(form1Data);
    // Get data from Form2 (if available)
    this.form2Data = this.form2Component ? this.form2Component.getData() : {};
    // console.log(form2Data);
    // Combine both form data
    // const completeData = { ...this.form1Data, ...this.form2Data };


    this.myData = {
      ...this.myData, ...this.form2Data
    };



    console.log('Submitting Data:', this.myData);
    // Here you can perform an API call or further processing
  }

}