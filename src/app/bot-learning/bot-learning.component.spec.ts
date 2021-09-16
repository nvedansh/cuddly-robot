import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotLearningComponent } from './bot-learning.component';

describe('BotLearningComponent', () => {
  let component: BotLearningComponent;
  let fixture: ComponentFixture<BotLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
