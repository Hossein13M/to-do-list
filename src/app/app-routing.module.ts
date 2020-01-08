import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component'
import {ListsPageComponent} from './pages/lists-page/lists-page.component'


const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "lists", component: ListsPageComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
