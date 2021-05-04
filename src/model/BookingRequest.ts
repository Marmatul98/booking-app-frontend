import {MyTime} from './MyTime';

export class BookingRequest {
  public startDate: string;
  public endDate: string;
  public startTime: string;
  public endTime: string;
  public sportsFieldIds: number[];


  constructor(startDate: Date, endDate: Date, startTime: MyTime, endTime: MyTime, sportsFieldIds: number[]) {
    this.startDate = startDate.toLocaleDateString();
    this.endDate = endDate.toLocaleDateString();
    this.startTime = startTime.toString();
    this.endTime = endTime.toString();
    this.sportsFieldIds = sportsFieldIds;
  }
}
