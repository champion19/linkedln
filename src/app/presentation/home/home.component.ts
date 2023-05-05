import { Component, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.logIn()
    console.log("Se consume el login")
  }

  logIn(){
    this.http.get('http://localhost:8082/usuarios').subscribe(response => {
      console.log(response);
    });
  }
}

