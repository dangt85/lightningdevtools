import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from '../app-routing.module';

// import { GlobalHeaderComponent } from "../slds/global-header/global-header.component";
import { AppLauncherComponent } from "../slds/app-launcher/app-launcher.component";
import { GlobalNavigationComponent } from "../slds/global-navigation/global-navigation.component";
import { OAuthComponent } from "../slds/oauth/oauth.component";

import { WindowRef } from './window.wrapper';
import { SFAPIsService } from "./sfapis.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    // GlobalHeaderComponent,
    AppLauncherComponent,
    GlobalNavigationComponent,
    OAuthComponent,
  ],
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    // GlobalHeaderComponent,
    AppLauncherComponent,
    GlobalNavigationComponent,
    OAuthComponent,
  ],
  providers: [
    WindowRef, SFAPIsService
  ]
})
export class SharedModule { }
