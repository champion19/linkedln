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
  public showTimer: boolean = false;
  public textTimer: string = '';
  public timeTimer: number = 30;
  public temperature: number = 28;
  public showTemperature: boolean = false;

  public lights = [
    {
      id: 1,
      title: 'Encender Bombilla # 1',
      identify: 'One',
      status: false,
      type: 'light'
    },
    {
      id: 2,
      title: 'Encender Bombilla # 2',
      identify: 'Two',
      status: false,
      type: 'light'
    },
    {
      id: 3,
      title: 'Encender Bombilla # 3',
      identify: 'Three',
      status: false,
      type: 'light'
    },
    {
      id: 5,
      title: 'Abrir / Cerrar Puerta',
      identify: 'Four',
      status: false,
      type: 'door'
    },
    {
      id:6,
      title:'Temperatura',
      identify:"Five",
      status:false,
      type: 'temperature'
    }
  ]
item: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  sendLightOn(light: number) {
    this.foundLight(light,true);
    const url = environment.config.apiUrl.concat('/usuario');
    const data = {
      id: light
    }
    const response = this.http.post(url, data);
    console.log(response);
  }

  sendLightOff(light: number) {
    this.foundLight(light,false);
  }

  sendOpenDoor(id: number) {
    this.foundLight(id,true);
    this.timerOpenDoor(id,'Tiempo restante para cerrar la puerta', 10);
  }

  sendCloseDoor(id: number) {
    this.foundLight(id,false);
    this.closeDoor(id);
  }

  timerOpenDoor(id: number,text:string, timer: number = 30) {
    this.textTimer = text;
    this.showTimer = true;
    if(timer){this.timeTimer = timer;}
    const interval = setInterval(() => {
      if (this.timeTimer > 0) {
        this.timeTimer--;
      } else {
        this.closeDoor(id);
        clearInterval(interval);
      }
    }, 1000);
  }

  closeDoor(id: number){
    this.showTimer = false;
    this.foundLight(id,false);
    try{
      const url = environment.config.apiUrl.concat('/cambio');
      const data = {
        id: id
      }
      const response = this.http.post(url,data).subscribe((res) => {
        this.showTimer = false;
        this.foundLight(id,false);});
    } catch(error){
      console.log('Sucedio un errror a nivel de la aplicación', error);
    }
  }

  foundLight(light:number, action: boolean){
    const foundLight = this.lights.find(item => item.id === light);
    if (foundLight) {
      foundLight.status = action;
    }
  }

  async getTemperature(id: number){
    try{
      const url = environment.config.apiUrl.concat('/temperatura');
      await this.http.get(url).subscribe((res) => console.log(res));
      this.foundLight(id,false);
      this.showTemperature = true;
    } catch(error){
      console.log('Sucedio un errror a nivel de la aplicación', error);
    }
  }

  getHiddeTemperature(id:number){
    this.foundLight(id,false);
    this.showTemperature = false;
  }

  /*increment(type: 'H' | 'M' | 'S') {
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
  }*/
}


