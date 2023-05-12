import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { DataModule } from "../data/data.module";
import { PresentationRoutingModule } from "./presentation-routing.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './offers/list/list.component';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from "@angular/common";
import { LoginComponent } from './auth/login/login.component';
import { OffersModule } from "./offers/offers.module";


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    DetailsComponent,
    LoginComponent,
  ],
  imports: [CommonModule, CoreModule, DataModule, PresentationRoutingModule, OffersModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class PresentationModule{}
