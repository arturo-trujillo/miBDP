import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCreateModalComponent } from './comment-create-modal.component';

describe('CommentCreateModalComponent', () => {
  let component: CommentCreateModalComponent;
  let fixture: ComponentFixture<CommentCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentCreateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
