import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
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
      id: 2,
      title: "Database Administrator",
      status: 'En Revision',
      date_status: 'Enviada a revisión: 2023-05-11 - 11:45',
      location: "Medellín y sus alrededores",
      money: "De $1 a $5 millones",
      modality: "Remoto"
    },
     {
      id: 3,
      title: "Database Administrator",
      status: 'En Revision',
      date_status: 'Enviada a revisión: 2023-05-11 - 11:45',
      location: "Medellín y sus alrededores",
      money: "De $1 a $5 millones",
      modality: "Remoto"
    },
     {
      id: 4,
      title: "Database Administrator",
      status: 'En Revision',
      date_status: 'Enviada a revisión: 2023-05-11 - 11:45',
      location: "Medellín y sus alrededores",
      money: "De $1 a $5 millones",
      modality: "Remoto"
    },
     {
      id: 5,
      title: "Database Administrator",
      status: 'En Revision',
      date_status: 'Enviada a revisión: 2023-05-11 - 11:45',
      location: "Medellín y sus alrededores",
      money: "De $1 a $5 millones",
      modality: "Remoto"
    },

  ];
}
