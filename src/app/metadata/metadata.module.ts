import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MetadataRoutingModule } from './metadata-routing.module';

import { MetadataComponent } from './metadata.component';
import { OAuthComponent } from "../oauth/oauth.component";

import { MetadataService } from "./metadata.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MetadataRoutingModule
  ],
  declarations: [
    MetadataComponent,
    OAuthComponent
  ],
  providers: [MetadataService]
})
export class MetadataModule { }
