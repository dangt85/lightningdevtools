import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningTabsComponent } from './lightning-tabs.component';

describe('LightningTabsComponent', () => {
  let component: LightningTabsComponent;
  let fixture: ComponentFixture<LightningTabsComponent>;

  const myTabs = [
    {
      title: "Details"
    },
    {
      title: "Collaboration"
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightningTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightningTabsComponent);
    component = fixture.componentInstance;

    component.tabs = myTabs;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain some tabs', () => {
    expect(component.tabs.length).toBe(myTabs.length, 'tabs were not provided');
    expect(component.selectedTab).toBeDefined('selectedTab was not defined');
  });
});
