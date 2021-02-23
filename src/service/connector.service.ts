import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor() {
  }

  public errorEvent: Subject<Error> = new Subject<Error>();

  public showError(error: Error): void {
    this.errorEvent.next(error);
  }

}
