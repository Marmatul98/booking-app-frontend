import {Component, OnInit} from '@angular/core';
import {Booking} from '../../../../model/Booking';
import {BookingService} from '../../../../service/booking.service';
import {AuthenticationService} from '../../../../service/authentication.service';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit {

  public pastBookings: Booking[] = [];
  public futureBookings: Booking[] = [];

  constructor(private bookingService: BookingService, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authService.getUserId()
      .subscribe(value => {
        this.bookingService.getPastUserBookings(value)
          .subscribe(apiPastBookings => this.pastBookings = apiPastBookings);

        this.bookingService.getFutureUserBookings(value)
          .subscribe(apiFutureBookings => this.futureBookings = apiFutureBookings)
      });
  }

  public convertToDate(value: string): string {
    return new Date(value).toLocaleDateString();
  }

}
