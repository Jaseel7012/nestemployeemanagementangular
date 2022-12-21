import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllvisitorLogComponent } from './view-allvisitor-log.component';

describe('ViewAllvisitorLogComponent', () => {
  let component: ViewAllvisitorLogComponent;
  let fixture: ComponentFixture<ViewAllvisitorLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllvisitorLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllvisitorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
