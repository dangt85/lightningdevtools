import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DataComponent } from './data.component';
import { LightningTabsComponent } from '../lightning-tabs/lightning-tabs.component';

import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DataComponent,
        LightningTabsComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(DataComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(1, 'should have 1 link');
    expect(links[0].linkParams).toEqual([ '/', { outlets: { popup: [ 'compose' ]}}], '1st link should go to Data');
  });

  it('can click Data link in template', () => {
    const dataLinkDe = linkDes[0];
    const dataLink = links[0];

    expect(dataLink.navigatedTo).toBeNull('link should not have navigated yet');

    dataLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(dataLink.navigatedTo).toEqual([ '/', { outlets: { popup: [ 'compose' ]}}]);
  });
});
