import {Time} from '@angular/common';

export class MyTime implements Time {
  public hours: number;
  public minutes: number;

  constructor(hours: number, minutes: number) {
    this.hours = hours;
    this.minutes = minutes;
  }

  public toString(): string {
    return this.hours.toString() + ':' + this.minutes.toString();
  }
}
