import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBelvedereComponent } from './plan-belvedere.component';

describe('PlanBelvedereComponent', () => {
  let component: PlanBelvedereComponent;
  let fixture: ComponentFixture<PlanBelvedereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanBelvedereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanBelvedereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
