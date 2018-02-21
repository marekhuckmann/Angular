import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEdit } from './location-edit.component';

describe('LocationEdit', () => {
  let component: LocationEdit;
  let fixture: ComponentFixture<LocationEdit>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationEdit ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
