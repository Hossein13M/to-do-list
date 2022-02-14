import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { List } from '../../models/list.model';
import { Task } from '../../models/task.model';
import { AppService } from '../../services/app.service';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-name-dialog',
    templateUrl: './name-dialog.component.html',
    styleUrls: ['./name-dialog.component.scss'],
})
export class NameDialogComponent implements OnInit {
    public isEditMode: boolean = false;
    public form: FormGroup = this.fb.group({
        name: [null, [Validators.required]],
    });

    constructor(
        private readonly fb: FormBuilder,
        public dialogRef: MatDialogRef<NameDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { type: 'list' | 'task'; info: List | Task },
        private readonly appService: AppService,
        private readonly notificationService: NotificationService
    ) {}

    ngOnInit(): void {
        this.checkForEditMode() && this.setFormValueInEditMode();
    }

    private checkForEditMode(): boolean {
        this.isEditMode = !!this.data.info;
        return !!this.data.info;
    }

    private setFormValueInEditMode(): void {
        this.form.get('name')?.setValue(this.data.info.title);
    }

    public submitForm(): void {
        if (this.isEditMode) {
            this.data.type === 'task' ? this.updateTaskName() : this.updateListName();
        } else {
            this.data.type === 'task' ? this.updateTaskName() : this.addNewList();
        }
    }

    private updateListName(): void {
        this.appService.updateListById((this.data.info as List)._id, (this.data.info as List).title).subscribe(
            () => this.notificationService.onSuccess('Changed!'),
            () => this.notificationService.onError('Something came wrong!'),
            () => this.dialogRef.close(true)
        );
    }

    private updateTaskName(): void {
        this.appService.updateTaskById((this.data.info as Task)._id, (this.data.info as Task).title).subscribe(
            () => this.notificationService.onSuccess('Changed!'),
            () => this.notificationService.onError('Something came wrong!'),
            () => this.dialogRef.close(true)
        );
    }

    private addNewList(): void {
        this.appService.createList(this.form.get('name')!.value).subscribe(
            () => this.notificationService.onSuccess('List Has Been Added!'),
            () => this.notificationService.onError('Something came wrong!'),
            () => this.dialogRef.close(true)
        );
    }

    public closeDialog(): void {
        this.dialogRef.close(false);
    }
}
