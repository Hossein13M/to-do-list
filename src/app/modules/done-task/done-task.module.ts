import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoneTaskComponent } from './done-task.component';
import { DoneTaskRoutingModule } from './done-task-routing.module';
import { AppService } from '../../services/app.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [DoneTaskComponent],
    imports: [CommonModule, DoneTaskRoutingModule, MatButtonModule, MatIconModule, MatTooltipModule],
    providers: [AppService],
    exports: [DoneTaskComponent],
})
export class DoneTaskModule {}
