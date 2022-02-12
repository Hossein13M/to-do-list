import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
    { path: 'done-tasks', loadChildren: () => import('./modules/done-task/done-task.module').then((m) => m.DoneTaskModule) },
    { path: 'lists', loadChildren: () => import('./modules/lists/lists.module').then((m) => m.ListsModule) },
    { path: 'list-item', loadChildren: () => import('./modules/list-item/list-item.module').then((m) => m.ListItemModule) },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
