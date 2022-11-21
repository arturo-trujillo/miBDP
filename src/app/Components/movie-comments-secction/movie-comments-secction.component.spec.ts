import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCommentsSecctionComponent } from './movie-comments-secction.component';

describe('MovieCommentsSecctionComponent', () => {
  let component: MovieCommentsSecctionComponent;
  let fixture: ComponentFixture<MovieCommentsSecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCommentsSecctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCommentsSecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
