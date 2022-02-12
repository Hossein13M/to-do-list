import { Component, Host, OnInit, Optional } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-done-task',
    templateUrl: './done-task.component.html',
    styleUrls: ['./done-task.component.scss'],
})
export class DoneTaskComponent implements OnInit {
    public completedTasks: Array<any> = [];
    constructor(@Host() @Optional() private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getCompletedTasksList();
    }

    public getCompletedTasksList(): void {
        this.appService.getAllCompletedTasks().subscribe((response) => (this.completedTasks = response));
    }
}
