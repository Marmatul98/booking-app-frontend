import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SportsFieldService} from '../../../service/sports-field.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {SportsField} from '../../../model/SportsField';
import {BookingService} from '../../../service/booking.service';
import {Booking} from '../../../model/Booking';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {RegisterData} from '../../../model/RegisterData';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @ViewChild('bookingButton', {static: true}) bookingButton: ElementRef | undefined;

  public sportsFields: SportsField[] = [];
  public reservationDiv = false;
  public booking: Booking | undefined;

  public bookingForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  get form(): { [key: string]: AbstractControl } {
    return this.bookingForm.controls;
  }

  constructor(private sportsFieldService: SportsFieldService, private bookingService: BookingService, private formBuilder: FormBuilder) {
    this.sportsFieldService.getAllSportsFields()
      .subscribe(value => this.sportsFields = value);
  }

  getBookings(type: string, event: MatDatepickerInputEvent<Date>): void {
    if (event.value !== null) {
      for (const sportsField of this.sportsFields) {
        this.bookingService.getBookingsBySportsFieldIdAndDate(sportsField.id, event.value)
          .subscribe(value => {
            console.log(value);
            sportsField.bookings = value;
          });
      }
    }
  }

  public book(booking: Booking): void {
    this.reservationDiv = true;
    this.booking = booking;
  }

  public requestBooking(): void {
    if (this.bookingForm.valid && this.booking !== undefined) {
      this.bookingService.requestBooking(this.booking.bookingId, new RegisterData(
        this.form.firstName.value,
        this.form.lastName.value,
        this.form.email.value,
        ''
      )).toPromise()
        .then(() => window.location.reload());
    }
  }

  ngOnInit(): void {
  }

}
