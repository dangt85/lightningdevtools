import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MetadataComponent } from './metadata.component';

import { GlobalNavigationComponent } from "../slds/global-navigation/global-navigation.component";
import { OAuthComponent } from "../slds/oauth/oauth.component";

import { RouterLinkStubDirective, RouterOutletStubComponent } from '../shared/testing';

import { TabsService } from "../shared/tabs.service";
import { MetadataService } from "./metadata.service";

import { SortPipe } from "../shared/sort.pipe";

describe('MetadataComponent', () => {
  let component: MetadataComponent;
  let fixture: ComponentFixture<MetadataComponent>;

  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MetadataComponent,
        GlobalNavigationComponent,
        OAuthComponent,
        RouterLinkStubDirective, RouterOutletStubComponent,
        SortPipe
      ],
      providers: [
        TabsService,
        MetadataService,
      ],
      imports: [ 
        FormsModule,
        HttpModule
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
