import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AppService } from '../../services/app.service';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule],
    providers: [AppService],
    exports: [HomeComponent],
})
export class HomeModule {}
