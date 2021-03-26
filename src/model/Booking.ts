import {SportsField} from './SportsField';
import {User} from './User';

export class Booking {
  public bookingId: number;
  public bookedDate: string;
  public startTime: string;
  public endTime: string;
  public sportsField: SportsField;
  public user: User | null;
  public isSelected = false;

  constructor(bookingId: number, userId: number | null, bookedDate: string, bookedFrom: string, bookedTo: string, sportsField: SportsField, user: User) {
    this.bookingId = bookingId;
    this.bookedDate = bookedDate;
    this.startTime = bookedFrom;
    this.endTime = bookedTo;
    this.sportsField = sportsField;
    this.user = user;
  }
}
