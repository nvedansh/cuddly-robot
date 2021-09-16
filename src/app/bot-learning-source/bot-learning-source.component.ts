import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bot-learning-source',
  templateUrl: './bot-learning-source.component.html',
  styleUrls: ['./bot-learning-source.component.scss']
})
export class BotLearningSourceComponent implements OnInit {

  firstForm = this.fb.group({
    firstCtrl: ['', Validators.required],
  });

  secondForm = this.fb.group({
    secondCtrl: ['', Validators.required],
  });

  thirdForm = this.fb.group({
    thirdCtrl: ['', Validators.required],
  });

  fourthForm = this.fb.group({
    fouthCtrl: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onFirstSubmit() {
    if (this.firstForm)
      this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    if (this.secondForm)
      this.secondForm.markAsDirty();
  }

}
