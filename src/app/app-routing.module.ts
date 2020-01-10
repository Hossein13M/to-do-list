import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component'
import {ListsPageComponent} from './pages/lists-page/lists-page.component'
import { DoneTasksComponent } from './pages/done-tasks/done-tasks.component';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';


const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "lists", component: ListsPageComponent },
  { path: "done", component: DoneTasksComponent },
  // Nested Routes have been implemented bellow
  {path: 'lists/:listId', component: ListTasksComponent},
  // the bellow is for directing 404 pages to home page
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
