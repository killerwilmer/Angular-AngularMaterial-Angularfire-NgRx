import { TrainingService } from './../training.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Excersice } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  excercises: Excersice[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.excercises = this.trainingService.getavailableExcersices();
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
