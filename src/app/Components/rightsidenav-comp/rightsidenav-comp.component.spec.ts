import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsidenavCompComponent } from './rightsidenav-comp.component';

describe('RightsidenavCompComponent', () => {
  let component: RightsidenavCompComponent;
  let fixture: ComponentFixture<RightsidenavCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsidenavCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsidenavCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
