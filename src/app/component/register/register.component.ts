import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../service/authentication.service';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {RegisterData} from '../../../model/RegisterData';
import {MustMatch} from '../../../validator/MustMatch';
import {ConnectorService} from "../../../service/connector.service";
import {ErrorWrapper} from "../../../model/ErrorWrapper";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public showErrorMessage = false;

  public registerForm = this.formBuilder.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    }
  );

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder, private connectorService: ConnectorService) {
  }

  get form(): { [p: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.connectorService.errorEvent.subscribe(value => this.handleError(value));
  }

  public onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(new RegisterData(
        this.registerForm.get('firstName')?.value,
        this.registerForm.get('lastName')?.value,
        this.registerForm.get('email')?.value,
        this.registerForm.get('password')?.value));
    }
  }

  private handleError(errorWrapper: ErrorWrapper): void {
    if (errorWrapper.isError && errorWrapper.errorObject instanceof HttpErrorResponse) {
      if (errorWrapper.errorObject.status === 409) {
        this.showErrorMessage = true;
      }
    } else {
      this.showErrorMessage = false;
    }
  }
}
