import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  onStartTraining = false;
  exerciseSubscription: Subscription;

  constructor( 
    private trainingService: TrainingService) { }

  ngOnInit() {

    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(
      // return a value
      exercise => {
        // if the value if not null, startTraining
        if (exercise) {
          this.onStartTraining = true;
        } else {
          this.onStartTraining = false;
        }
      }
    );
  }

}
