import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllQuestLogComponent } from './view-all-quest-log.component';

describe('ViewAllQuestLogComponent', () => {
  let component: ViewAllQuestLogComponent;
  let fixture: ComponentFixture<ViewAllQuestLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllQuestLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllQuestLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
