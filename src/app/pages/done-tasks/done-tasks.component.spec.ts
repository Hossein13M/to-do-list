import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTasksComponent } from './done-tasks.component';

describe('DoneTasksComponent', () => {
  let component: DoneTasksComponent;
  let fixture: ComponentFixture<DoneTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
