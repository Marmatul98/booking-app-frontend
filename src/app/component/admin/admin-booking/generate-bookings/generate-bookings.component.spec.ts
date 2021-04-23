import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GenerateBookingsComponent} from './generate-bookings.component';

describe('GenerateBookingsComponent', () => {
  let component: GenerateBookingsComponent;
  let fixture: ComponentFixture<GenerateBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
