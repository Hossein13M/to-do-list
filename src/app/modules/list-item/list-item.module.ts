import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import { ListItemRoutingModule } from './list-item-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [ListItemComponent],
    imports: [CommonModule, ListItemRoutingModule, MatButtonModule, MatIconModule, MatTooltipModule],
})
export class ListItemModule {}
