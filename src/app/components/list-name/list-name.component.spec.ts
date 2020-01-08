import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNameComponent } from './list-name.component';

describe('ListNameComponent', () => {
  let component: ListNameComponent;
  let fixture: ComponentFixture<ListNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
