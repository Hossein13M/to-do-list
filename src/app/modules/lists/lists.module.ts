import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { ListsRoutingModule } from './lists-routing.module';

@NgModule({
    declarations: [ListsComponent],
    imports: [CommonModule, ListsRoutingModule],
})
export class ListsModule {}
