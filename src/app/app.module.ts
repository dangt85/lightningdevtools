import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { MetadataComponent } from './metadata/metadata.component';
import { DataComponent } from './data/data.component';
import { HealthComponent } from './health/health.component';
import { APIComponent } from './api/api.component';
import { ApexComponent } from './apex/apex.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppLauncherComponent } from './app-launcher/app-launcher.component';
import { LightningTabsComponent } from './lightning-tabs/lightning-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    MetadataComponent,
    DataComponent,
    HealthComponent,
    APIComponent,
    ApexComponent,
    AppHeaderComponent,
    AppLauncherComponent,
    LightningTabsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
