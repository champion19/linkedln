import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  private timer: any;
  private date = new Date();
  public show: boolean = true;
  public disabled: boolean = false;
  public animate: boolean = false;

  public lights = [
    {
      id: 1,
      title: 'Encender Bombilla # 1',
      identify: 'One',
      status: false
    },
    {
      id: 2,
      title: 'Encender Bombilla # 2',
      identify: 'Two',
      status: false
    },
    {
      id: 3,
      title: 'Encender Bombilla # 3',
      identify: 'Three',
      status: false
    },
    {
      id: 4,
      title: 'Encender Bombilla # 4',
      identify: 'Four',
      status: false
    },
    {
      id: 5,
      title: 'Abrir / Cerrar Puerta',
      identify: 'Five',
      status: false
    },
  ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  sendLightOn(light: number) {
    this.foundLight(light,true);
    const url = environment.config.apiUrl
    const data = {
      key1: true
    }
    const response = this.http.post(environment.config.apiUrl, data);
    //const response = this.http.get(environment.config.apiUrl.concat(environment.config.timezone)).subscribe((res) => console.log(res));
    console.log(response);
  }

  sendLightOff(light: number) {
    this.foundLight(light,false);
  }

  foundLight(light:number, action: boolean){
    const foundLight = this.lights.find(item => item.id === light);
    if (foundLight) {
      foundLight.status = action;
    }
  }
  //reloj 
  increment(type: 'H' | 'M' | 'S') {
    if (type === 'H') {
      if (this.hours >= 99) return;
      this.hours += 1;
    }
    else if (type === 'M') {
      if (this.minutes >= 59) return;
      this.minutes += 1;
    }
    else {
      if (this.seconds >= 59) return;
      this.seconds += 1;
    }
  }

  decrement(type: 'H' | 'M' | 'S') {
    if (type === 'H') {
      if (this.hours <= 0) return;
      this.hours -= 1;
    }
    else if (type === 'M') {
      if (this.minutes <= 0) return;
      this.minutes -= 1;
    }
    else {
      if (this.seconds <= 0) return;
      this.seconds -= 1;
    }
  }

  updateTimer() {
    this.date.setHours(this.hours);
    this.date.setMinutes(this.minutes);
    this.date.setSeconds(this.seconds);
    this.date.setMilliseconds(0);
    const time = this.date.getTime();
    this.date.setTime(time - 1000);  //---

    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();

    if (this.date.getHours() === 0 &&
      this.date.getMinutes() === 0 &&
      this.date.getSeconds() === 0) {
      //stop interval
      clearInterval(this.timer);

    }
  }

  start() {
    if (this.hours > 0 || this.minutes > 0 || this.seconds > 0) {

      this.disabled = true;
      this.show = false;  //hide btn + and -
      this.updateTimer();

      if (this.seconds > 0) {
        this.timer = setInterval(() => {
          this.updateTimer();
        }, 1000);
      }
    }
  }

  stop() {
    this.disabled = false;
    this.show = true;
    this.animate = false;
    clearInterval(this.timer);

  }

  reset() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.stop();
  }
}


