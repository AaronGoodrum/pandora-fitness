import { FormControl, Validator } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { TrainingService } from '../exercise.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  exercise: Exercise;

  cardio = [
    {type: 'Walking'},
    { type: 'Running' },
    { type: 'Cycling' },
    { type: 'Rowing' },
    { type: 'Swimming' },
    { type: 'Jumping Rope' }
  ];

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
  }

  onStartTraining() {

    this.trainingStart.emit();
  }

}
