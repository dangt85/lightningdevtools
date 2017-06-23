import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router, Routes } from "@angular/router";
import { Location } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { GlobalNavigationComponent } from './global-navigation.component';
import { MetadataComponent } from "../../metadata/metadata.component";
import { DataComponent } from "../../data/data.component";
import { HealthComponent } from "../../health/health.component";
import { APIComponent } from "../../api/api.component";
import { ApexComponent } from "../../apex/apex.component";
import { AppLauncherComponent } from "../app-launcher/app-launcher.component";
import { OAuthComponent } from "../oauth/oauth.component";

import { SortPipe } from "../../shared/sort.pipe";

const routes: Routes = [
  { path: '', redirectTo: 'metadata', pathMatch: 'full' },
  { path: 'metadata', component: MetadataComponent },
  { path: 'data', component: DataComponent },
  { path: 'health', component: HealthComponent },
  { path: 'api', component: APIComponent },
  { path: 'apex', component: ApexComponent },
  {
    path: 'compose',
    component: AppLauncherComponent,
    outlet: 'popup'
  }
];

describe('GlobalNavigationComponent', () => {
  let location: Location;
  let router: Router;

  let component: GlobalNavigationComponent;
  let fixture: ComponentFixture<GlobalNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GlobalNavigationComponent,
        MetadataComponent,
        DataComponent,
        HealthComponent,
        APIComponent,
        ApexComponent,
        AppLauncherComponent,
        OAuthComponent,
        SortPipe
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule
      ],
    })
    .compileComponents()
    .then(() => {
      router = TestBed.get(Router); 
      location = TestBed.get(Location);

      fixture = TestBed.createComponent(GlobalNavigationComponent);

      router.initialNavigation();

      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    router = TestBed.get(Router); 
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(GlobalNavigationComponent);

    router.initialNavigation();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
