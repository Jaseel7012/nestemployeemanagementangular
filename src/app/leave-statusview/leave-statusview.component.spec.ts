import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveStatusviewComponent } from './leave-statusview.component';

describe('LeaveStatusviewComponent', () => {
  let component: LeaveStatusviewComponent;
  let fixture: ComponentFixture<LeaveStatusviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveStatusviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveStatusviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
