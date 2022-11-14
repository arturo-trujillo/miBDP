import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCompComponent } from './sidenav-comp.component';

describe('SidenavCompComponent', () => {
  let component: SidenavCompComponent;
  let fixture: ComponentFixture<SidenavCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
