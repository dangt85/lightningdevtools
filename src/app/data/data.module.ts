import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';

import { DataComponent } from "./data.component";
import { AppLauncherComponent } from "../slds/app-launcher/app-launcher.component";
import { TabsComponent } from "../slds/tabs/tabs.component";

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule
  ],
  declarations: [
    DataComponent,
    AppLauncherComponent,
    TabsComponent
  ]
})
export class DataModule { }
