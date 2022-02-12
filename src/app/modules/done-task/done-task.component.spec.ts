import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoneTaskComponent } from './done-task.component';
import { DoneTaskModule } from './done-task.module';

describe('DoneTaskComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DoneTaskModule],
            declarations: [DoneTaskComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture: ComponentFixture<DoneTaskComponent> = TestBed.createComponent(DoneTaskComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
