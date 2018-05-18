import { Exercise } from './exercise.model';

import { Subject } from 'rxjs';

export class TrainingService {
    // Exercise value to be multicasted to other with rxjs Subject
    exerciseChanged = new Subject<Exercise>();
    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];
    //Save the Exercise User started 
    private runningExercise: Exercise;

    getAvailableExercises() {
        // Making a copy of array 
        return this.availableExercises.slice();
    }

    startExercise(selectedId: string) {
        // find the Exercise(exer) user pick from component from the ID
        const selectedExercise = this.availableExercises.find(exer => exer.id === selectedId );
        this.runningExercise = selectedExercise;
        // emit change to exercise
        this.exerciseChanged.next({...this.runningExercise });
    }

    getRunningExercise() {
        return {...this.runningExercise };
    }
}
