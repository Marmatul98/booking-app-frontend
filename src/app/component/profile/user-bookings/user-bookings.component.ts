import {Component, OnInit} from '@angular/core';
import {Booking} from "../../../../model/Booking";
import {BookingService} from "../../../../service/booking.service";

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit {

  public bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {
  }

  ngOnInit(): void {

  }

}
