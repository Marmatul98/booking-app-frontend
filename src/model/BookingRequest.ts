import {MyTime} from './MyTime';

export class BookingRequest {
  public startDate: string;
  public endDate: string;
  public startTime: string;
  public endTime: string;
  public durationInMinutes: number;
  public sportsFieldId: number;


  constructor(startDate: Date, endDate: Date, startTime: MyTime, endTime: MyTime, durationInMinutes: number, sportsFieldId: number) {
    this.startDate = startDate.toISOString();
    this.endDate = endDate.toISOString();
    this.startTime = startTime.toString();
    this.endTime = endTime.toString();
    this.durationInMinutes = durationInMinutes;
    this.sportsFieldId = sportsFieldId;
  }
}
