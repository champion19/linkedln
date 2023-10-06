import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  alarms = [
    {
      id: 1,
      alarm: '05:00:00',
      time: 'am'
    },
    {
      id: 2,
      alarm: '06:00:00',
      time: 'am'
    },
    {
      id: 3,
      alarm: '07:00:00',
      time: 'am'
    },
    {
      id: 4,
      alarm: '08:00:00',
      time: 'am'
    }
  ]
  modalOpen: boolean = false;

  openModal() {
    console.log('Llega aqui')
    this.modalOpen = true;
  }

  onDelete(id:number){
    console.log('Se ha eliminado correctamente el id' + id)
  }

  closeModal() {
    this.modalOpen = false;
  }
}
