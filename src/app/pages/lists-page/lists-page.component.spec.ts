import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsPageComponent } from './lists-page.component';

describe('ListsPageComponent', () => {
  let component: ListsPageComponent;
  let fixture: ComponentFixture<ListsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
