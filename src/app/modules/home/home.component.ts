import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public tasks: Array<any> = [];

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getTasks();
    }

    public getTasks(): void {
        this.appService.getTasks().subscribe((response) => (this.tasks = response));
    }
}
