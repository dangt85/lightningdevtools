import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

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
      declarations: [ TabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
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
