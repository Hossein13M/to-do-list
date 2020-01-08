import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageCardComponent } from './components/page-card/page-card.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { ListNameComponent } from './components/list-name/list-name.component';
import { TaskComponent } from './components/task/task.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';


@NgModule({
  declarations: [    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageCardComponent,
    MainPageComponent,
    ListsPageComponent,
    ListNameComponent,
    TaskComponent,
    CreateListComponent,
    ListItemComponent,
    
  ],
  imports: [
    MatSliderModule,
    MatInputModule,    
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MDBBootstrapModule
    
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
