import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMovieAreaComponent } from './main-movie-area.component';

describe('MainMovieAreaComponent', () => {
  let component: MainMovieAreaComponent;
  let fixture: ComponentFixture<MainMovieAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMovieAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMovieAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
