import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule }     from './app-routing.module';

import { MetadataModule } from './metadata/metadata.module';
import { DataModule } from './data/data.module';

import { AppComponent } from './app.component';
import { HealthComponent } from './health/health.component';
import { APIComponent } from './api/api.component';
import { ApexComponent } from './apex/apex.component';
import { AppHeaderComponent } from './slds/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    APIComponent,
    ApexComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MetadataModule,
    DataModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
