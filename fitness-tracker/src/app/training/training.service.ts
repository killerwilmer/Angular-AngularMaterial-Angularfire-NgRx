import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';

import { Exercise } from './exercise.model';

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  private availableExercises: Exercise[] = [];
  private runningExcercise: Exercise;
  private exercises: Exercise[] = [];

  constructor(private db: AngularFirestore) {}

  fetchAvailableExercises() {
    this.db
      .collection('availableExercises')
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              name: doc.payload.doc.data()['name'],
              duration: doc.payload.doc.data()['duration'],
              calories: doc.payload.doc.data()['calories']
            };
          });
        })
      )
      .subscribe((exercises: Exercise[]) => {
        this.availableExercises = exercises;
        this.exercisesChanged.next([...this.availableExercises]);
      });
  }

  startExcercise(selectedId: string) {
    this.runningExcercise = this.availableExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExcercise });
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExcercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExcercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.addDataToDatabase({
      ...this.runningExcercise,
      duration: this.runningExcercise.duration * (progress / 100),
      calories: this.runningExcercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExcercise = null;
    this.exerciseChanged.next(null);
  }

  getRunningExercise() {
    return { ...this.runningExcercise };
  }

  getCompleteOrCancelledExercise() {
    return this.exercises.slice();
  }

  private addDataToDatabase(exercise: Exercise) {
    this.db.collection('finishedExercises').add(exercise);
  }
}
