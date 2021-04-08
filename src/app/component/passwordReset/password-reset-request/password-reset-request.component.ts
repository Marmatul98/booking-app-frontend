import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../../service/authentication.service';

@Component({
  selector: 'app-password-reset-request',
  templateUrl: './password-reset-request.component.html',
  styleUrls: ['./password-reset-request.component.css']
})
export class PasswordResetRequestComponent implements OnInit {

  public firstView = true;
  public secondView = false;

  public passwordResetForm = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
    }
  );

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService) {
  }

  get form(): { [p: string]: AbstractControl } {
    return this.passwordResetForm.controls;
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.passwordResetForm.valid) {
      this.switchViews();
      this.authService.requestPasswordReset(this.passwordResetForm.get('email')?.value)
        .subscribe();
    }
  }

  private switchViews(): void {
    this.firstView = false;
    this.secondView = true;
  }
}
