import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataDiffComponent } from './metadata-diff.component';

describe('MetadataDiffComponent', () => {
  let component: MetadataDiffComponent;
  let fixture: ComponentFixture<MetadataDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
