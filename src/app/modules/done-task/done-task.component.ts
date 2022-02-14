import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-done-task',
    templateUrl: './done-task.component.html',
    styleUrls: ['./done-task.component.scss'],
})
export class DoneTaskComponent implements OnInit {
    public completedTasks: Array<any> = [];

    constructor(private readonly appService: AppService, private readonly notificationService: NotificationService) {}

    ngOnInit(): void {
        this.getCompletedTasksList();
    }

    public getCompletedTasksList(): void {
        this.appService.getAllCompletedTasks().subscribe((response) => (this.completedTasks = response));
    }

    public removeTask(taskId: string): void {
        this.appService.removeTaskById(taskId).subscribe(
            () => this.getCompletedTasksList(),
            () => this.notificationService.onError('Something went wrong!'),
            () => this.notificationService.onError('The Task Removed!')
        );
    }
}
