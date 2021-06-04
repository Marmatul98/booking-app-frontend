import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SportsFieldService} from '../../../service/sports-field.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {SportsField} from '../../../model/SportsField';
import {BookingService} from '../../../service/booking.service';
import {Booking} from '../../../model/Booking';
import {FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {CartDialogComponent} from '../cart-dialog/cart-dialog.component';
import {AuthenticationService} from '../../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @ViewChild('bookingButton', {static: true}) bookingButton: ElementRef | undefined;

  public sportsFields: SportsField[] = [];
  public groupedBookings: Booking[] = [];
  public reservationDiv = false;
  public selectedBookings: Booking[] = [];
  public selectedDate = '';
  public isLoggedIn = false;

  constructor(private sportsFieldService: SportsFieldService,
              private bookingService: BookingService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private authService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sportsFieldService.getAllSportsFields()
      .subscribe(value => this.sportsFields = value);

    this.isLoggedIn = this.authService.isUserLoggedIn();
    if (!this.isLoggedIn) {
      this.router.navigate(['login']).then();
    }
  }

  public openCartDialog(): void {
    this.dialog.open(CartDialogComponent, {
      minWidth: '85%',
      data: {
        selectedBookings: this.selectedBookings,
      }
    });
  }

  getBookings(type: string, event: MatDatepickerInputEvent<Date>): void {
    this.selectedDate = this.generateDateString(event.value);
    if (event.value !== null) {
      for (const sportsField of this.sportsFields) {
        this.bookingService.getBookingsBySportsFieldIdAndDate(sportsField.id, event.value)
          .subscribe(value => {
            sportsField.bookings = value;
          });
      }
    }
  }

  public isBookingAvailable(): boolean {
    for (const sportsField of this.sportsFields) {
      if (sportsField.bookings !== undefined && sportsField.bookings.length > 0) {
        return true;
      }
    }
    return false;
  }

  public selectBooking(booking: Booking): void {
    if (booking.available) {
      booking.isSelected = true;
      this.selectedBookings.push(booking);
    }
  }

  public deselectBooking(booking: Booking): void {
    booking.isSelected = false;
    for (let i = 0; i < this.selectedBookings.length; i++) {
      if (this.selectedBookings[i] === booking) {
        this.selectedBookings.splice(i, 1);
      }
    }
  }

  private generateDateString(value: Date | null): string {
    return `${this.getDayNameByNumber(value?.getDay())} ${value?.toLocaleDateString()}`;
  }

  private getDayNameByNumber(dayNumber: number | undefined): string {
    switch (dayNumber) {
      case 0:
        return 'neděle';
      case 1:
        return 'pondělí';
      case 2:
        return 'úterý';
      case 3:
        return 'středa';
      case 4:
        return 'čtvrtek';
      case 5:
        return 'pátek';
      case 6:
        return 'sobota';
    }
    return '';
  }
}
