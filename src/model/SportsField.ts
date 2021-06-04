import {Booking} from './Booking';

export class SportsField {
  public id: string;
  public name: string;
  public bookings: Booking[] = [];

  constructor(id: string, name: string, grouped: boolean) {
    this.id = id;
    this.name = name;
  }
}
