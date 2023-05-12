import { Component } from '@angular/core';

@Component({
  selector: 'app-main-offers',
  templateUrl: './main-offers.component.html',
  styleUrls: ['./main-offers.component.css']
})
export class MainOffersComponent {
    listOffers = [
    {
      id: 1,
      title: "Software Developer",
      status: 'Activa',
      date_status: 'Enviada a revisión: 2023-05-11 - 11:45',
      location: "Medellín y sus alrededores",
      money: "De $1 a $5 millones",
      modality: "Remoto"
    },
    {
      id: 1,
      title: "Database Administrator",
      status: 'En Revision',
      date_status: 'Enviada a revisión: 2023-05-11 - 11:45',
      location: "Medellín y sus alrededores",
      money: "De $1 a $5 millones",
      modality: "Remoto"
    },
  ];
}
