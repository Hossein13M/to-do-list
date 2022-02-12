import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoneTaskComponent } from './done-task.component';

const routes: Routes = [{ path: '', component: DoneTaskComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DoneTaskRoutingModule {}
