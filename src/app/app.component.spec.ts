import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from "./app-header/app-header.component";

import { RouterLinkStubDirective, RouterOutletStubComponent } from './testing';

let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppHeaderComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp    = fixture.componentInstance;
    });
  }));
  tests();
});

function tests() {
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(() => {
    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('should create the app', () => {
    expect(comp).not.toBeNull();
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(5, 'should have 5 links');
    expect(links[0].linkParams).toBe('/metadata', '1st link should go to Metadata');
    expect(links[1].linkParams).toBe('/data', '1st link should go to Data');
  });

  it('can click Data link in template', () => {
    const dataLinkDe = linkDes[1];
    const dataLink = links[1];

    expect(dataLink.navigatedTo).toBeNull('link should not have navigated yet');

    dataLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(dataLink.navigatedTo).toBe('/data');
  });

  it(`should have as title 'app works!'`, () => {
    expect(comp.title).toEqual('app works!');
  });
}
