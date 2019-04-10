import { Excersice } from './exercise.model';

export class TrainingService {
  private availableExcersices: Excersice[] = [
    {
      id: 'crunches',
      name: 'Crunches',
      duration: 30,
      calories: 8
    },
    {
      id: 'touch-toes',
      name: 'Touch Toes',
      duration: 180,
      calories: 15
    },
    {
      id: 'side-lunges',
      name: 'Side Lunges',
      duration: 120,
      calories: 18
    },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];
  private runningExcercise: Excersice;

  getavailableExcersices() {
      return this.availableExcersices.slice();
  }

  startExcercise(selectedId: string) {
      this.runningExcercise = this.availableExcersices.find(ex => ex.id === selectedId);
  }
}
