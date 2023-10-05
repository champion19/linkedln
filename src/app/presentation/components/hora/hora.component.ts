import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css']
})
export class HoraComponent implements OnInit {
  fecha:number=Date.now();
  hora:any;

 ngOnInit(): void {
  this.mostrarHora();

 }


mostrarHora(){
this.hora=new Date().toLocaleString("en-US");

setInterval(()=>{

  this.hora=new Date();

},1000);
}
}
