import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsidenavCompComponent } from './leftsidenav-comp.component';

describe('LeftsidenavCompComponent', () => {
  let component: LeftsidenavCompComponent;
  let fixture: ComponentFixture<LeftsidenavCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftsidenavCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsidenavCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
