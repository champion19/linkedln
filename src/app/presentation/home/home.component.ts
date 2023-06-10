import { Component, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fb: FormGroup | undefined;
  constructor(private http: HttpClient,private formBuilder:FormBuilder) {
  }
  ngOnInit(){
    this.logIn()
    this.fb = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  logIn(){
    this.http.get('http://localhost:8082/usuarios').subscribe(response => {
      console.log(response);
    });
  }
   onSubmit(){
    console.log('Llega aqui'+this.fb?.value);

     if (this.fb?.valid) {
       // Form is valid, submit data to server or perform further actions
       console.log('Form submitted:', this.fb?.value);
     }
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} | null => {
    const password = control.get('password');
    const confirm_password = control.get('confirm_password');

    if (password?.value !== confirm_password?.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  }
}
