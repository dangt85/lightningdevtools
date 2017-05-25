import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIComponent } from './api.component';

describe('APIComponent', () => {
  let component: APIComponent;
  let fixture: ComponentFixture<APIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
