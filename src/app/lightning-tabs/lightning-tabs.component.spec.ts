import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningTabsComponent } from './lightning-tabs.component';

describe('LightningTabsComponent', () => {
  let component: LightningTabsComponent;
  let fixture: ComponentFixture<LightningTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightningTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightningTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
