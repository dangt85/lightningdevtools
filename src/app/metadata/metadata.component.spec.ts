import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MetadataComponent } from './metadata.component';

import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing';

describe('MetadataComponent', () => {
  let component: MetadataComponent;
  let fixture: ComponentFixture<MetadataComponent>;

  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MetadataComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(MetadataComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataComponent);
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
    expect(links.length).toBe(1, 'should have 1 links');
    expect(links[0].linkParams).toEqual([ '/', { outlets: { popup: [ 'compose' ]}}], '1st link should go to Metadata');
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
