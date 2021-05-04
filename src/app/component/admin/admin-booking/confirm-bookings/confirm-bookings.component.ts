import {Component, OnInit} from '@angular/core';
import {Booking} from '../../../../../model/Booking';
import {BookingService} from '../../../../../service/booking.service';
import {SnackBarService} from '../../../../../service/snack-bar.service';
import {DialogService} from "../../../../../service/dialog.service";

@Component({
  selector: 'app-confirm-bookings',
  templateUrl: './confirm-bookings.component.html',
  styleUrls: ['./confirm-bookings.component.css']
})
export class ConfirmBookingsComponent implements OnInit {

  public requestedBookings: Booking[] = [];

  constructor(private bookingService: BookingService,
              private snackBarService: SnackBarService,
              private dialogService: DialogService) {
    this.loadRequestedBookings();
  }

  ngOnInit(): void {
  }

  public removeRequest(booking: Booking): void {
    this.dialogService.openSpinnerDialog();
    this.bookingService.removeBooking(booking)
      .toPromise()
      .then(() => {
        this.dialogService.closeSpinnerDialog();
        this.snackBarService.openSnackBarOk('Rezervace zrušena');
        this.loadRequestedBookings();
      });
  }

  public confirmBooking(booking: Booking): void {
    this.dialogService.openSpinnerDialog();
    this.bookingService.confirmBooking(booking)
      .toPromise()
      .then(() => {
        this.dialogService.closeSpinnerDialog();
        this.snackBarService.openSnackBarOk('Rezervace potvrzena');
        this.loadRequestedBookings();
      });
  }

  public convertToDate(value: string): string {
    return new Date(value).toLocaleDateString();
  }

  private loadRequestedBookings(): void {
    this.bookingService.getRequestedBookings()
      .subscribe(value => {
        this.requestedBookings = value;
      });
  }

}
