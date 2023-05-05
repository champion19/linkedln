import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { DataModule } from "../data/data.module";
import { PresentationRoutingModule } from "./presentation-routing.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    DetailsComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, CoreModule, DataModule, PresentationRoutingModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class PresentationModule{}
