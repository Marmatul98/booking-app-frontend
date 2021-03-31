export class ExceptionLog {
  public id: number;
  public message: string;
  public stackTrace: string;
  public date: Date;

  constructor(id: number, message: string, stackTrace: string, date: Date) {
    this.id = id;
    this.message = message;
    this.stackTrace = stackTrace;
    this.date = date;
  }
}
