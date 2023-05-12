import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { MainOffersComponent } from './main-offers/main-offers.component';


@NgModule({
  declarations: [
    MainOffersComponent
  ],
  exports: [
    MainOffersComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
