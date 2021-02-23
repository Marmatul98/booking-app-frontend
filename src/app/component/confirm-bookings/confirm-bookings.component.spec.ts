import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBookingsComponent } from './confirm-bookings.component';

describe('ConfirmBookingsComponent', () => {
  let component: ConfirmBookingsComponent;
  let fixture: ComponentFixture<ConfirmBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
