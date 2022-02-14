import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameDialogComponent } from './name-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [NameDialogComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    entryComponents: [NameDialogComponent],
    exports: [NameDialogComponent],
})
export class NameDialogModule {}
