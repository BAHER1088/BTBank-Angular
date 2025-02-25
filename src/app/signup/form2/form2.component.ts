import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form2',
  imports: [FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.scss'
})
export class Form2Component {

  signupForm2 = new FormGroup({
    phoneNum: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    nationalId: new FormControl(null, [Validators.required,  Validators.minLength(14), Validators.maxLength(14)])
  });


  formData = {
    phoneNum: '',
    nationalId: ''
  }


  // This method returns the current form data
  getData(): any {
    return this.formData;
  }
}
