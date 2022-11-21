import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMainAreaComponent } from './movie-main-area.component';

describe('MovieMainAreaComponent', () => {
  let component: MovieMainAreaComponent;
  let fixture: ComponentFixture<MovieMainAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieMainAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMainAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
