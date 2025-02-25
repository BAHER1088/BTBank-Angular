import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form2',
  imports: [FormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.scss'
})
export class Form2Component {


  formData = {
    phoneNum: '',
    nationalId: ''
  }


  // This method returns the current form data
  getData(): any {
    return this.formData;
  }
}
