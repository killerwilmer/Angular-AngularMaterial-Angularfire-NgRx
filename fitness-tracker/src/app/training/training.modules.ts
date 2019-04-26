import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PassTrainingsComponent } from './pass-trainings/pass-trainings.component';
import { StopTrainingComponent } from './current-training/stop-training.component';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [
        TrainingComponent,
        CurrentTrainingComponent,
        NewTrainingComponent,
        PassTrainingsComponent,
        StopTrainingComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule
    ]
})
export class TrainingModule {}
