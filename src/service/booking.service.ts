import {Injectable, Injector} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {Booking} from '../model/Booking';
import {BookingRequest} from '../model/BookingRequest';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class BookingService extends HttpService {

  constructor(injector: Injector) {
    super(injector);
  }

  public createAdminBooking(bookingRequest: BookingRequest): Observable<any> {
    return super.post('admin/booking', bookingRequest);
  }

  public getRequestedBookings(): Observable<Booking[]> {
    return super.get('admin/requestedBookings');
  }

  public requestBookings(user: User, bookings: Booking[]): Observable<any> {
    return super.put('api/booking', {user, bookings});
  }

  public getBookingsBySportsFieldId(sportsFieldId: number): Observable<any> {
    return super.get('api/bookings' + sportsFieldId);
  }

  public getConfirmedBookings(): Observable<Booking[]> {
    return super.get('admin/confirmedBookings');
  }

  public getBookingsBySportsFieldIdAndDate(sportsFieldId: string, date: Date): Observable<Booking[]> {
    return super.get(`api/booking/${sportsFieldId}/${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
  }

  public generateBookings(bookingRequest: BookingRequest): Observable<any> {
    return super.post('admin/generateBookings', bookingRequest);
  }

  public confirmBooking(booking: Booking): Observable<any> {
    return super.put(`admin/booking/confirm`, booking);
  }

  public removeBooking(booking: Booking): Observable<any> {
    return super.put(`admin/booking/remove`, booking);
  }

  public getPastUserBookings(email: string): Observable<Booking[]> {
    return super.get(`api/pastUserBookings/${email}`);
  }

  getFutureUserBookings(email: string): Observable<Booking[]> {
    return super.get(`api/futureUserBookings/${email}`);
  }
}
