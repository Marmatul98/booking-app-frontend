export class ErrorWrapper {
  public isError: boolean;
  public errorObject: Error | null;

  constructor(isError: boolean, errorObject: Error | null) {
    this.isError = isError;
    this.errorObject = errorObject;
  }
}
