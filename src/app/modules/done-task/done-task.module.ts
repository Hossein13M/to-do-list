import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoneTaskComponent } from './done-task.component';
import { DoneTaskRoutingModule } from './done-task-routing.module';
import { AppService } from '../../services/app.service';

@NgModule({
    declarations: [DoneTaskComponent],
    imports: [CommonModule, DoneTaskRoutingModule],
    providers: [AppService],
    exports: [DoneTaskComponent],
})
export class DoneTaskModule {}
