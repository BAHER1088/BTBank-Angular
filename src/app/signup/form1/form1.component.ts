import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Form2Component } from "../form2/form2.component";
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-form1',
  imports: [FormsModule,Form2Component],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.scss'
})

export class Form1Component {


  constructor(private _router: Router) { }

  formData = {
    name: '',
    email: '',
    password: ''
  }


  // This method returns the current form data
  getData(): any {
    return this.formData;
  }

  navToForm2() {
    this._router.navigate(['/signup/form2']);
    const atForm2: Boolean = true;
  }
}