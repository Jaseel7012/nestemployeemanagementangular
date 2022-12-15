import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGuardComponent } from './search-guard.component';

describe('SearchGuardComponent', () => {
  let component: SearchGuardComponent;
  let fixture: ComponentFixture<SearchGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
