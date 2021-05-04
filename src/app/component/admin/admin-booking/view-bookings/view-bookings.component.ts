import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../../../../service/booking.service';
import {Booking} from '../../../../../model/Booking';
import {DialogService} from '../../../../../service/dialog.service';
import {SnackBarService} from '../../../../../service/snack-bar.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  public bookings: Booking[] = [];

  constructor(private bookingService: BookingService,
              private dialogService: DialogService,
              private snackBarService: SnackBarService) {
    this.loadConfirmedBookings();
  }

  ngOnInit(): void {
  }

  removeBooking(booking: Booking): void {
    this.dialogService.openConfirmDialog('Pozor!', `Opravdu chcete zrušit rezervaci ${booking.user?.firstName} ${booking.user?.lastName}?`)
      .subscribe(value => {
        if (value) {
          this.dialogService.openSpinnerDialog();
          this.bookingService.removeBooking(booking)
            .subscribe(() => {
              this.dialogService.closeSpinnerDialog();
              this.snackBarService.openSnackBarOk('Rezervace zrušena');
              this.loadConfirmedBookings();
            });
        }
      });
  }

  private loadConfirmedBookings(): void {
    this.bookingService.getConfirmedBookings().subscribe(value => this.bookings = value);
  }
}
