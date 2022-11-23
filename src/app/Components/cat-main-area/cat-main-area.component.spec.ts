import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMainAreaComponent } from './cat-main-area.component';

describe('CatMainAreaComponent', () => {
  let component: CatMainAreaComponent;
  let fixture: ComponentFixture<CatMainAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatMainAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatMainAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
