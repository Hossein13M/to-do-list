import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoneTaskComponent } from './done-task.component';
import { DoneTaskRoutingModule } from './done-task-routing.module';

@NgModule({
    declarations: [DoneTaskComponent],
    imports: [CommonModule, DoneTaskRoutingModule],
})
export class DoneTaskModule {}
