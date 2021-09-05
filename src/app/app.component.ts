import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subcriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubcription = 'Advanced';
  isSubmitted = false;

  data= {
    email: '',
    subcription: '',
    password: '',
  }

  @ViewChild('form') sgnForm: NgForm;
  onSubmit() {
    console.log(this.sgnForm.value);

    this.data.email = this.sgnForm.value.email;
    this.data.subcription = this.sgnForm.value.subcription;
    this.data.password = this.sgnForm.value.password;
    this.isSubmitted = true;
    this.sgnForm.form.reset();
  }
}
