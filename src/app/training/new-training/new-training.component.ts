import { FormControl, Validator } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();

  cardio = [
    {type: 'Walking'},
    { type: 'Running' },
    { type: 'Cycling' },
    { type: 'Rowing' },
    { type: 'Swimming' },
    { type: 'Jumping Rope' }
  ];

  constructor() { }

  ngOnInit() {
  }

  onStartTraining() {

    this.trainingStart.emit();
  }

}
