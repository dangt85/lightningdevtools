import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MetadataRoutingModule } from './metadata-routing.module';

import { MetadataComponent } from './metadata.component';
import { GlobalNavigationComponent } from "../slds/global-navigation/global-navigation.component";
import { OAuthComponent } from "../slds/oauth/oauth.component";

import { MetadataService } from "./metadata.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MetadataRoutingModule
  ],
  declarations: [
    MetadataComponent,
    OAuthComponent,
    GlobalNavigationComponent
  ],
  providers: [MetadataService]
})
export class MetadataModule { }
