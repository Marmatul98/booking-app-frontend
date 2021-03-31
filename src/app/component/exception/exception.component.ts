import {Component, OnInit} from '@angular/core';
import {ExceptionService} from '../../../service/exception.service';
import {ExceptionLog} from '../../../model/ExceptionLog';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.css']
})
export class ExceptionComponent implements OnInit {

  public exceptions: ExceptionLog[] = [];

  constructor(private exceptionService: ExceptionService) {
  }

  ngOnInit(): void {
    this.loadExceptionLogs();
  }

  public deleteExceptionLog(exception: ExceptionLog): void {
    this.exceptionService.deleteExceptionLog(exception.id)
      .subscribe(() => this.loadExceptionLogs());
  }

  private loadExceptionLogs(): void {
    this.exceptionService.getAllExceptionLogs()
      .subscribe(value => this.exceptions = value);
  }

}
