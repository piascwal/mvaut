import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTarifComponent } from './date-tarif.component';

describe('DateTarifComponent', () => {
  let component: DateTarifComponent;
  let fixture: ComponentFixture<DateTarifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTarifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
