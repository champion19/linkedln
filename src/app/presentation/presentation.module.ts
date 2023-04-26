import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { DataModule } from "../data/data.module";
import { PresentationRoutingModule } from "./presentation-routing.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [CoreModule, DataModule, PresentationRoutingModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class PresentationModule{}
