import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// angular material components are the bellow
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
// mdb angular 
import { NavbarModule, WavesModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';




// these are my own components and pages
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageCardComponent } from './components/page-card/page-card.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { TaskComponent } from './components/task/task.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { DoneTasksComponent } from './pages/done-tasks/done-tasks.component';
import { DoneTaskItemsComponent } from './components/done-task-items/done-task-items.component';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

// the bellow are the services
import { TasksService } from './services/tasks.service';
import { ListsService } from './services/lists.service';
import { DailyTasksComponent } from './components/daily-tasks/daily-tasks.component';


@NgModule({
  declarations: [    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageCardComponent,
    MainPageComponent,
    ListsPageComponent,
    TaskComponent,
    CreateListComponent,
    ListItemComponent,
    DoneTasksComponent,
    DoneTaskItemsComponent,
    ListTasksComponent,
    NavbarComponent,
    CreateTaskComponent,
    DailyTasksComponent,
    
  ],
  imports: [
    HttpModule,
    MatSliderModule,
    MatInputModule,    
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MDBBootstrapModule    
  ],
  providers: [MatDatepickerModule, TasksService, ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
