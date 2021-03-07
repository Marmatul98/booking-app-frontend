import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ErrorWrapper} from "../model/ErrorWrapper";

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  public errorEvent: Subject<ErrorWrapper> = new Subject<ErrorWrapper>();

  constructor() {
  }

  public addError(error: Error): void {
    this.errorEvent.next(new ErrorWrapper(true, error));
  }

  public removeError(): void {
    this.errorEvent.next(new ErrorWrapper(false, null));
  }

}
