import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationsAreaComponent } from './recomendations-area.component';

describe('RecomendationsAreaComponent', () => {
  let component: RecomendationsAreaComponent;
  let fixture: ComponentFixture<RecomendationsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendationsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendationsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
