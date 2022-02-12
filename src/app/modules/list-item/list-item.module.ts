import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import { ListItemRoutingModule } from './list-item-routing.module';

@NgModule({
    declarations: [ListItemComponent],
    imports: [CommonModule, ListItemRoutingModule],
})
export class ListItemModule {}
