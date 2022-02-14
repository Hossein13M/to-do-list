import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { Task } from '../../models/task.model';
import { NameDialogComponent } from '../../components/name-dialog/name-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { List } from '../../models/list.model';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
    public listId!: string;
    public mainListId!: string;
    public tasks: Array<Task> = [];
    public listInfo!: List;
    public hasGotData: boolean = false;

    constructor(
        private readonly appService: AppService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly notificationService: NotificationService,
        private matDialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.getMainListId();
        this.getCurrentListIsFromURL();
        this.getTaskOfCurrentList();
        this.getListInfoById();
    }

    private getCurrentListIsFromURL(): void {
        this.listId = this.activatedRoute.snapshot.paramMap.get('id')!;
    }

    private getMainListId(): void {
        this.appService.getMainList().subscribe((response) => (this.mainListId = response._id));
    }

    private getTaskOfCurrentList(): void {
        this.appService.getTaskByListId(this.listId).subscribe(
            (response) => (this.tasks = response),
            () => this.notificationService.onError('Something went wrong')
        );
    }

    private getListInfoById(): void {
        this.appService.getListById(this.listId).subscribe((response) => {
            this.listInfo = response;
            this.hasGotData = true;
        });
    }

    public openListDialog(task?: Task): void {
        this.matDialog
            .open(NameDialogComponent, { data: { info: task ? task : null, type: 'task', listInfo: this.listInfo } })
            .afterClosed()
            .subscribe((result: boolean) => result && this.getTaskOfCurrentList());
    }

    public removeTask(taskId: string): void {
        this.appService.removeTaskById(taskId).subscribe(
            () => this.getTaskOfCurrentList(),
            () => this.notificationService.onError('Something went wrong!'),
            () => this.notificationService.onError('The Task Removed!')
        );
    }

    public completeTask(task: Task): void {
        const taskInfo = {
            title: task.title,
            description: '',
            done: true,
            list: task.list._id,
        };

        this.appService.completeTask(task._id, taskInfo).subscribe(() => this.getTaskOfCurrentList());
    }

    public transferTaskToMainList(task: Task): void {
        const taskInfo = {
            title: task.title,
            description: '',
            done: true,
            list: this.mainListId,
        };

        this.appService.transferTaskToMainList(task._id, taskInfo).subscribe(() => this.getTaskOfCurrentList());
    }
}
