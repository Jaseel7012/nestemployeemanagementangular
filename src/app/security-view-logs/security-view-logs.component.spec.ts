import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityViewLogsComponent } from './security-view-logs.component';

describe('SecurityViewLogsComponent', () => {
  let component: SecurityViewLogsComponent;
  let fixture: ComponentFixture<SecurityViewLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityViewLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityViewLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
