import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetadataComponent } from './metadata/metadata.component';
import { DataComponent } from './data/data.component';
import { HealthComponent } from './health/health.component';
import { APIComponent } from './api/api.component';
import { ApexComponent } from './apex/apex.component';

const routes: Routes = [
  { path: '', redirectTo: '/metadata', pathMatch: 'full' },
  { path: 'metadata',  component: MetadataComponent },
  { path: 'data',  component: DataComponent },
  { path: 'health',  component: HealthComponent },
  { path: 'api',  component: APIComponent },
  { path: 'apex',  component: ApexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
