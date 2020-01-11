import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTasksComponent } from './daily-tasks.component';

describe('DailyTasksComponent', () => {
  let component: DailyTasksComponent;
  let fixture: ComponentFixture<DailyTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
