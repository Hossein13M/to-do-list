import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// angular material components are the bellow
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {  
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,  
  MatNativeDateModule
} from '@angular/material';



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
    MatNativeDateModule
    
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
