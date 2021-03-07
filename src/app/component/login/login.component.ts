import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../service/authentication.service';
import {ConnectorService} from '../../../service/connector.service';
import {ErrorWrapper} from '../../../model/ErrorWrapper';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showErrorMessage = false;

  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private connectorService: ConnectorService) {
  }

  public get form(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.connectorService.errorEvent.subscribe(value => this.handleError(value));
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.form.email.value, this.form.password.value);
    }
  }

  private handleError(errorWrapper: ErrorWrapper): void {
    if (errorWrapper.isError && errorWrapper.errorObject instanceof HttpErrorResponse) {
      if (errorWrapper.errorObject.status === 401) {
        this.showErrorMessage = true;
      }
    } else {
      this.showErrorMessage = false;
    }

  }

}
