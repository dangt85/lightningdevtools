import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetadataRoutingModule } from './metadata-routing.module';

import { MetadataComponent } from './metadata.component';

import { MetadataService } from "./metadata.service";

@NgModule({
  imports: [
    CommonModule,
    MetadataRoutingModule
  ],
  declarations: [
    MetadataComponent
  ],
  providers: [MetadataService]
})
export class MetadataModule { }
