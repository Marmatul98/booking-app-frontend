import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {MustMatch} from '../../../../validator/MustMatch';
import {AuthenticationService} from '../../../../service/authentication.service';
import {SnackBarService} from '../../../../service/snack-bar.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  public token = '';

  public passwordResetForm = this.formBuilder.group(
    {
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    }
  );

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private snackBarService: SnackBarService,
              private router: Router) {
  }

  get form(): { [p: string]: AbstractControl } {
    return this.passwordResetForm.controls;
  }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.token = params.token;
      });
  }

  public onSubmit(): void {
    if (this.passwordResetForm.valid) {
      this.authService.resetPassword(this.passwordResetForm.get('password')?.value, this.token)
        .subscribe(() => {
          this.router.navigate(['login']).then();
          this.snackBarService.openSnackBarOk('Změna hesla úspěšná');
        });
    }
  }


}
