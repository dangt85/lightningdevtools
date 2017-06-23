import { NgModule } from '@angular/core';

import { MetadataRoutingModule } from './metadata-routing.module';
import { SharedModule } from "../shared/shared.module";

import { MetadataComponent } from './metadata.component';

import { MetadataService } from "./metadata.service";

@NgModule({
  imports: [
    MetadataRoutingModule,
    SharedModule
  ],
  declarations: [
    MetadataComponent,
  ],
  providers: [
    MetadataService
  ]
})
export class MetadataModule { }
