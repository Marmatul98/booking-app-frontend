import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SportsFieldService} from '../../../service/sports-field.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {SportsField} from '../../../model/SportsField';
import {BookingService} from '../../../service/booking.service';
import {Booking} from '../../../model/Booking';
import {FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {CartDialogComponent} from '../cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @ViewChild('bookingButton', {static: true}) bookingButton: ElementRef | undefined;

  public sportsFields: SportsField[] = [];
  public reservationDiv = false;
  public selectedBookings: Booking[] = [];

  bookingSlots: string[] = [];

  constructor(private sportsFieldService: SportsFieldService,
              private bookingService: BookingService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog) {
  }

  do(booking: Booking): void {
    console.log(booking.bookingId);
  }

  ngOnInit(): void {
    this.sportsFieldService.getAllSportsFields()
      .subscribe(value => this.sportsFields = value);

    this.bookingService.getBookingTimeSlots()
      .subscribe(value => this.bookingSlots = value);
  }

  public openCartDialog(): void {
    this.dialog.open(CartDialogComponent, {
      minWidth: '85%',
      data: {
        selectedBookings: this.selectedBookings
      }
    });
  }

  getBookings(type: string, event: MatDatepickerInputEvent<Date>): void {
    if (event.value !== null) {
      for (const sportsField of this.sportsFields) {
        this.bookingService.getBookingsBySportsFieldIdAndDate(sportsField.id, event.value)
          .subscribe(value => {
            sportsField.bookings = value;
          });
      }
    }
  }


  public selectBooking(booking: Booking): void {
    console.log('selecting booking')
    booking.isSelected = true;
    this.selectedBookings.push(booking);
  }

  public deselectBooking(booking: Booking): void {
    console.log('deselecting booking')
    booking.isSelected = false;
    for (let i = 0; i < this.selectedBookings.length; i++) {
      if (this.selectedBookings[i] === booking) {
        this.selectedBookings.splice(i, 1);
      }
    }
  }
}
