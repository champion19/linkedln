import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { HttpClientModule } from '@angular/common/http';
import { HoraComponent } from '../components/hora/hora.component';
import { ModalComponent } from '../components/modal/modal.component';


@NgModule({
  declarations: [
    DashboardHomeComponent,
    HoraComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
