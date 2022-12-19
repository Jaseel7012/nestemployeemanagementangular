import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmplLogsComponent } from './view-all-empl-logs.component';

describe('ViewAllEmplLogsComponent', () => {
  let component: ViewAllEmplLogsComponent;
  let fixture: ComponentFixture<ViewAllEmplLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllEmplLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllEmplLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
