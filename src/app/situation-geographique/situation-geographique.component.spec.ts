import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationGeographiqueComponent } from './situation-geographique.component';

describe('SituationGeographiqueComponent', () => {
  let component: SituationGeographiqueComponent;
  let fixture: ComponentFixture<SituationGeographiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationGeographiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationGeographiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
