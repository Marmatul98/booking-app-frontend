import {Injectable, Injector} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {MyTime} from '../model/MyTime';
import {Booking} from '../model/Booking';
import {RegisterData} from '../model/RegisterData';

@Injectable({
  providedIn: 'root'
})
export class BookingService extends HttpService {

  constructor(injector: Injector) {
    super(injector);
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

  public generateBookings(
    startDate: Date, endDate: Date, startTime: MyTime, endTime: MyTime, duration: number, sportsFieldId: number): Observable<any> {
    console.log({startDate, endDate, startTime, endTime, duration});
    return super.post('/generateBookings', {
      startDate: startDate.toLocaleDateString(),
      endDate: endDate.toLocaleDateString(),
      startTime: startTime.toString(),
      endTime: endTime.toString(),
      durationInMinutes: duration,
      sportsFieldId
    });
  }

  confirmBooking(bookingId: number): Observable<any> {
    return super.put(`/booking/confirm/${bookingId}`, null);
  }

  removerRequest(bookingId: number): Observable<any> {
    return super.put(`/booking/remove/${bookingId}`, null);
  }
}
