import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataComponent } from './data/data.component';
import { HealthComponent } from './health/health.component';
import { APIComponent } from './api/api.component';
import { ApexComponent } from './apex/apex.component';
import { AppLauncherComponent } from './slds/app-launcher/app-launcher.component';

export const routes: Routes = [
  { path: '', redirectTo: 'metadata', pathMatch: 'full' },
  { path: 'data',  component: DataComponent },
  { path: 'health',  component: HealthComponent },
  { path: 'api',  component: APIComponent },
  { path: 'apex',  component: ApexComponent },
  {
    path: 'compose',
    component: AppLauncherComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
