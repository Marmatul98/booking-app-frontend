import {SportsField} from './SportsField';

export class SportsFieldGroup {
  public id: string;
  public name: string;
  public available: boolean;
  public sportsFields: SportsField[];


  constructor(id: string, name: string, available: boolean, sportsFields: SportsField[]) {
    this.id = id;
    this.name = name;
    this.available = available;
    this.sportsFields = sportsFields;
  }
}
