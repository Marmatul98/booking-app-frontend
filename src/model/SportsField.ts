import {Booking} from './Booking';

export class SportsField {
  public id: number;
  public name: string;

  public bookings: Booking[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
