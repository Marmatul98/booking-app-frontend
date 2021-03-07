import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConnectorService} from '../../../service/connector.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public errorMessage = '';
  @ViewChild('alert', {static: true}) alert: ElementRef | undefined;
  private baseErrorMessage = 'Vyskytla se chyba, prosím kontaktuje administrátora!';

  constructor(private connectorService: ConnectorService) {
    this.connectorService.errorEvent.subscribe(error => {
      // console.log(error);
      // this.setErrorMessage(error.errorObject?.message);
      // console.warn('There has been an error ' + error.message);
      this.showAlert();
    });
  }

  ngOnInit(): void {
  }

  closeAlert(): void {
    // @ts-ignore
    this.alert.nativeElement.classList.remove('show');
    // @ts-ignore
    this.alert.nativeElement.classList.add('hide');
    console.log('hiding alert');
  }

  private setErrorMessage(error: Error): void {
    if (error instanceof HttpErrorResponse) {
      this.setHttpErrorMessage(error);
    } else {
      this.errorMessage = this.baseErrorMessage;
    }
  }

  private setHttpErrorMessage(error: HttpErrorResponse): void {
    switch (error.status) {
      case 409:
        this.errorMessage = 'Email již existuje!';
        break;
      default:
        this.errorMessage = this.baseErrorMessage;
    }
  }

  private showAlert(): void {
    console.log(this.errorMessage);
    // @ts-ignore
    this.alert.nativeElement.classList.add('show');
    // @ts-ignore
    this.alert.nativeElement.classList.remove('hide');
    console.log('showing alert');
  }
}
