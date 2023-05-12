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
      location: "Medellín y sus alrededores",
      money: "De $1 a $5 millones",
      modality: "Remoto"
    },
  ];
}
