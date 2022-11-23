import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterrightsidenavCompComponent } from './filterrightsidenav-comp.component';

describe('FilterrightsidenavCompComponent', () => {
  let component: FilterrightsidenavCompComponent;
  let fixture: ComponentFixture<FilterrightsidenavCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterrightsidenavCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterrightsidenavCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
