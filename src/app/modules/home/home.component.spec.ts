import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

describe('HomeComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeModule],
            declarations: [HomeComponent],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture: ComponentFixture<HomeComponent> = TestBed.createComponent(HomeComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should be an array', () => {
        const fixture: ComponentFixture<HomeComponent> = TestBed.createComponent(HomeComponent);
        const app = fixture.componentInstance;
        expect(app.tasks).toBeInstanceOf(Array);
    });
});
