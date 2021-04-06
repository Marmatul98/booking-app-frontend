import {Injectable, Injector} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {Booking} from '../model/Booking';
import {RegisterData} from '../model/RegisterData';
import {BookingRequest} from '../model/BookingRequest';

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

  public requestBooking(bookingId: number, registerData: RegisterData): Observable<any> {
    return super.put(`api/booking/${bookingId}/`, registerData);
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

  public confirmBooking(bookingId: number): Observable<any> {
    return super.put(`admin/booking/confirm/${bookingId}`, null);
  }

  public removeBooking(bookingId: number): Observable<any> {
    return super.put(`admin/booking/remove/${bookingId}`, null);
  }

  public getPastUserBookings(userId: number): Observable<Booking[]> {
    return super.get(`api/pastUserBookings/${userId}`);
  }

  getFutureUserBookings(userId: number): Observable<Booking[]> {
    return super.get(`api/futureUserBookings/${userId}`);
  }
}
