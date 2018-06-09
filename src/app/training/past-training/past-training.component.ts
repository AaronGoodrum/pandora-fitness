
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {
  // defined columns from matColumnDef
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  // Data from exercise
  dataSource = new MatTableDataSource<Exercise>();

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();

    console.log ("past", this.dataSource)
  }
}
