import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// angular material components are the bellow
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';


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

@NgModule({
  declarations: [    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageCardComponent,
    MainPageComponent,
    ListsPageComponent,
    ListNameComponent
  ],
  imports: [
    MatSliderModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
