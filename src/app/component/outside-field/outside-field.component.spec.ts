import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OutsideFieldComponent} from './outside-field.component';

describe('OutsideFieldComponent', () => {
  let component: OutsideFieldComponent;
  let fixture: ComponentFixture<OutsideFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutsideFieldComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
