import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { DataModule } from "../data/data.module";
import { PresentationRoutingModule } from "./presentation-routing.module";

@NgModule({
  declarations: [],
  imports: [CoreModule, DataModule, PresentationRoutingModule],
  exports: []
})
export class PresentationModule{}
