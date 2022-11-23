import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAreaCompComponent } from './category-area-comp.component';

describe('CategoryAreaCompComponent', () => {
  let component: CategoryAreaCompComponent;
  let fixture: ComponentFixture<CategoryAreaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAreaCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAreaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
