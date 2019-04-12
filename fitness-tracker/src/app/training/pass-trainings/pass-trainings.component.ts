import { TrainingService } from './../training.service';
import { Exercise } from './../exercise.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-pass-trainings',
  templateUrl: './pass-trainings.component.html',
  styleUrls: ['./pass-trainings.component.css']
})
export class PassTrainingsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompleteOrCancelledExercise();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}
