import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { List } from '../../models/list.model';
import { NotificationService } from '../../services/notification.service';
import { NameDialogComponent } from '../../components/name-dialog/name-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
    public lists: Array<List> = [];

    constructor(private readonly appService: AppService, private readonly notificationService: NotificationService, private matDialog: MatDialog) {}

    ngOnInit(): void {
        this.notificationService.onInfo('hello');
        this.getLists();
    }

    private getLists(): void {
        this.appService.getLists().subscribe((response) => (this.lists = response));
    }

    public removeList(listId: string): void {
        this.appService.removeListById(listId).subscribe(() => this.notificationService.onError('The List Removed!'));
    }

    public changeListName(list?: List): void {
        this.matDialog
            .open(NameDialogComponent, { data: { name: list ? list.title : null, type: 'list' } })
            .afterClosed()
            .subscribe((result: boolean) => result && this.getLists());
    }
}
