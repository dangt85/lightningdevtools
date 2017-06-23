import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { MetadataModule } from './metadata/metadata.module';
import { DataModule } from './data/data.module';

import { AppComponent } from './app.component';
import { HealthComponent } from './health/health.component';
import { APIComponent } from './api/api.component';
import { ApexComponent } from './apex/apex.component';

import { GlobalHeaderComponent } from "./slds/global-header/global-header.component";

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    APIComponent,
    ApexComponent,
    GlobalHeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    MetadataModule,
    DataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
