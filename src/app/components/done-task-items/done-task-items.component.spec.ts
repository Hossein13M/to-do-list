import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTaskItemsComponent } from './done-task-items.component';

describe('DoneTaskItemsComponent', () => {
  let component: DoneTaskItemsComponent;
  let fixture: ComponentFixture<DoneTaskItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneTaskItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTaskItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
