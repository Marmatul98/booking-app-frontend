import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions, FullCalendarComponent} from '@fullcalendar/angular';
import {SportsFieldService} from '../../../service/sports-field.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  // @ts-ignore
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  public calendarOptions: CalendarOptions | undefined;
  public showRequestBooking = false;
  public bookingEvent: any;

  public bookingSportsFieldName = '';
  public bookingDate = '';
  public bookingStartTime = '';
  public bookingEndTime = '';

  constructor(private sportsFieldService: SportsFieldService) {
  }

  ngOnInit(): void {
    this.calendarOptions = {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      resourceAreaColumns: [
        {
          field: 'name',
          headerContent: 'Hřiště'
        }],
      locale: 'cs',
      slotMinTime: '08:00:00',
      slotMaxTime: '20:00:00',
      height: 'auto',
      initialView: 'resourceTimeline',
      events: 'http://localhost:8080/api/bookingsByDate',
      resources: {
        url: 'http://localhost:8080/api/sportsField',
        method: 'GET'
      },
      eventClick: (bookingEvent) => {
        this.requestBooking(bookingEvent.event);
      }

    };
  }

  // @ts-ignore
  private requestBooking(bookingEvent): void {
    this.setSubtitleProps(bookingEvent);
    this.bookingEvent = bookingEvent._def;
    this.showRequestBooking = !this.showRequestBooking;
  }

  // @ts-ignore
  private setSubtitleProps(bookingEvent): void {
    this.bookingSportsFieldName =
      this.calendarComponent.getApi().getResourceById(bookingEvent._def.resourceIds[0])?._resource.extendedProps.name;
    this.bookingDate = this.calendarComponent.getApi().currentData.viewTitle;
    this.bookingStartTime = this.getTimeFromDate(bookingEvent._instance.range.start);
    this.bookingEndTime = this.getTimeFromDate(bookingEvent._instance.range.end);
  }

  private getTimeFromDate(date: Date): string {
    const hours = date.getHours() - 1;
    let minutes = date.getMinutes().toString();
    if (minutes.length === 1) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

}


