import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-learning-source',
  templateUrl: './learning-source.component.html',
  styleUrls: ['./learning-source.component.scss']
})
export class LearningSourceComponent implements OnInit {

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

  ngOnInit() {
    
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });

    this.fourthForm = this.fb.group({
      fouthCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    if(this.firstForm)
      this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    if(this.secondForm)
      this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    if(this.thirdForm)
      this.thirdForm.markAsDirty();
  }

  onFourthSubmit() {
    if(this.fourthForm)
      this.fourthForm.markAsDirty();
  }
}
