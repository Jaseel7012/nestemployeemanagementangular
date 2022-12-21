import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplogByNameComponent } from './emplog-by-name.component';

describe('EmplogByNameComponent', () => {
  let component: EmplogByNameComponent;
  let fixture: ComponentFixture<EmplogByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplogByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplogByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
