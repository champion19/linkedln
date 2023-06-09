import { Component, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formulario:FormGroup;
  constructor(private http: HttpClient,private formBuilder:FormBuilder) {
    this.formulario=this.formBuilder.group({
      nombre:['',Validators.minLength(50)],
      apellido:['',Validators.minLength(50)],
      Correo:['',Validators.maxLength(90)],
      Password:['',Validators.minLength(60)],
      confirmP:['',Validators.minLength(60)],
    });
  }
  ngOnInit(){
    this.logIn()
    console.log("Se consume el login"); }

  logIn(){
    this.http.get('http://localhost:8082/usuarios').subscribe(response => {
      console.log(response);
    });
  }
   onSubmit(){
     console.log(this.formulario.value)
    };
}

