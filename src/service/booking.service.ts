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
    return super.post('/admin/booking', bookingRequest);
  }

  public getRequestedBookings(): Observable<Booking[]> {
    return super.get('/requestedBookings');
  }

  public requestBooking(bookingId: number, registerData: RegisterData): Observable<any> {
    return super.put(`/booking/${bookingId}/`, registerData);
  }

  public getBookingsBySportsFieldId(sportsFieldId: number): Observable<any> {
    return super.get('/bookings' + sportsFieldId);
  }

  public getBookingsBySportsFieldIdAndDate(sportsFieldId: number, date: Date): Observable<Booking[]> {
    return super.get(`/booking/${sportsFieldId}/${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
  }

  public generateBookings(bookingRequest: BookingRequest): Observable<any> {
    return super.post('/generateBookings', bookingRequest);
  }

  confirmBooking(bookingId: number): Observable<any> {
    return super.put(`/booking/confirm/${bookingId}`, null);
  }

  removerRequest(bookingId: number): Observable<any> {
    return super.put(`/booking/remove/${bookingId}`, null);
  }
}
