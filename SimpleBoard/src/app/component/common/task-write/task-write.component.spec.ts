import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskWriteComponent } from './task-write.component';

describe('TaskWriteComponent', () => {
  let component: TaskWriteComponent;
  let fixture: ComponentFixture<TaskWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
