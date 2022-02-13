import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { ListsRoutingModule } from './lists-routing.module';
import { NameDialogModule } from '../../components/name-dialog/name-dialog.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [ListsComponent],
    imports: [CommonModule, ListsRoutingModule, NameDialogModule, MatTableModule],
})
export class ListsModule {}
