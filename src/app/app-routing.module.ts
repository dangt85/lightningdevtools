import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetadataComponent } from './metadata/metadata.component';

const routes: Routes = [
  { path: '', redirectTo: '/metadata', pathMatch: 'full' },
  { path: 'metadata',  component: MetadataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
