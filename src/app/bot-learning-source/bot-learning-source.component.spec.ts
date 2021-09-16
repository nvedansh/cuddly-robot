import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotLearningSourceComponent } from './bot-learning-source.component';

describe('BotLearningSourceComponent', () => {
  let component: BotLearningSourceComponent;
  let fixture: ComponentFixture<BotLearningSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotLearningSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotLearningSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
