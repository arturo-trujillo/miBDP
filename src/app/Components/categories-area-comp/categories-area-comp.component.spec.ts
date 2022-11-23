import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAreaCompComponent } from './categories-area-comp.component';

describe('CategoriesAreaCompComponent', () => {
  let component: CategoriesAreaCompComponent;
  let fixture: ComponentFixture<CategoriesAreaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesAreaCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesAreaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
