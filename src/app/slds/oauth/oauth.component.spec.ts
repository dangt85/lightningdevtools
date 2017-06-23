import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { OAuthComponent } from './oauth.component';

import { SFAPIsService } from "../../shared/sfapis.service";

describe('OAuthComponent', () => {
  let component: OAuthComponent;
  let fixture: ComponentFixture<OAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OAuthComponent ],
      providers: [
        SFAPIsService
      ],
      imports: [
        FormsModule,
        HttpModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
