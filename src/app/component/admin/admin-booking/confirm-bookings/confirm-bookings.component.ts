import {Component, OnInit} from '@angular/core';
import {Booking} from '../../../../../model/Booking';
import {BookingService} from '../../../../../service/booking.service';
import {SnackBarService} from '../../../../../service/snack-bar.service';

@Component({
  selector: 'app-confirm-bookings',
  templateUrl: './confirm-bookings.component.html',
  styleUrls: ['./confirm-bookings.component.css']
})
export class ConfirmBookingsComponent implements OnInit {

  public requestedBookings: Booking[] = [];

  constructor(private bookingService: BookingService, private snackBarService: SnackBarService) {
    this.loadRequestedBookings();
  }

  ngOnInit(): void {
  }

  public removeRequest(booking: Booking): void {
    this.bookingService.removeBooking(booking.bookingId)
      .toPromise()
      .then(() => {
        this.snackBarService.openSnackBarOk('Rezervace zrušena');
        this.loadRequestedBookings();
      });
  }

  public confirmBooking(booking: Booking): void {
    this.bookingService.confirmBooking(booking.bookingId)
      .toPromise()
      .then(() => {
        this.snackBarService.openSnackBarOk('Rezervace potvrzena');
        this.loadRequestedBookings();
      });
  }

  private loadRequestedBookings(): void {
    this.bookingService.getRequestedBookings()
      .subscribe(value => {
        this.requestedBookings = value;
      });
  }

  public convertToDate(value: string): string {
    return new Date(value).toLocaleDateString();
  }

}
