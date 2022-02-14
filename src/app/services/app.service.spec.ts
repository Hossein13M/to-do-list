import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';
import { DoneTaskComponent } from '../modules/done-task/done-task.component';

describe('AppService', () => {
    let service: AppService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            declarations: [AppComponent, DoneTaskComponent],
        });
        service = TestBed.inject(AppService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
