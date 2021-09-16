import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningSourceComponent } from './learning-source.component';

describe('LearningSourceComponent', () => {
  let component: LearningSourceComponent;
  let fixture: ComponentFixture<LearningSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
