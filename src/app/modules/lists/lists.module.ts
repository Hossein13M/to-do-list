import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { ListsRoutingModule } from './lists-routing.module';
import { NameDialogModule } from '../../components/name-dialog/name-dialog.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [ListsComponent],
    imports: [CommonModule, ListsRoutingModule, NameDialogModule, MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule],
})
export class ListsModule {}
