import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLauncherComponent } from './app-launcher.component';

import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing';

describe('AppLauncherComponent', () => {
  let component: AppLauncherComponent;
  let fixture: ComponentFixture<AppLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppLauncherComponent
      ],
      providers: [
        RouterLinkStubDirective
      ]
    })
    .compileComponents()
    .then(() => {
      fixture  = TestBed.createComponent(AppLauncherComponent);
      component = fixture.componentInstance;
      fixture.nativeElement.get(RouterLinkStubDirective);
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
