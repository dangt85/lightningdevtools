import { NgModule } from '@angular/core';

import { DataRoutingModule } from './data-routing.module';
import { SharedModule } from "../shared/shared.module";

import { DataComponent } from "./data.component";

@NgModule({
  imports: [
    DataRoutingModule,
    SharedModule
  ],
  declarations: [
    DataComponent,
  ]
})
export class DataModule { }
