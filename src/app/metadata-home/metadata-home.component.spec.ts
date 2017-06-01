import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataHomeComponent } from './metadata-home.component';

describe('MetadataHomeComponent', () => {
  let component: MetadataHomeComponent;
  let fixture: ComponentFixture<MetadataHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
