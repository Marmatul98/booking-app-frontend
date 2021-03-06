import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../service/user.service';
import {User} from '../../../../model/User';
import {AuthenticationService} from '../../../../service/authentication.service';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {SnackBarService} from "../../../../service/snack-bar.service";

@Component({
  selector: 'app-users-contact',
  templateUrl: './users-contact.component.html',
  styleUrls: ['./users-contact.component.css']
})
export class UsersContactComponent implements OnInit {

  public user!: User;

  public contactForm = this.formBuilder.group(
    {
      firstName: ['', [Validators.required, Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.maxLength(25)]],
      phoneNumber: ['+420',
        [Validators.required,
          Validators.pattern('[+][0-9]{12}'),
          Validators.minLength(13),
          Validators.maxLength(13)]],
    }
  );

  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private snackBarService: SnackBarService) {
  }

  get form(): { [p: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  ngOnInit(): void {
    this.userService.getUserByEmail(this.authService.getUserEmail())
      .subscribe(value => {
        this.user = value;
        this.contactForm.patchValue({
          firstName: value.firstName,
          lastName: value.lastName,
          phoneNumber: value.phoneNumber
        });
      });
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      this.user.phoneNumber = this.form.phoneNumber.value;
      this.user.firstName = this.form.firstName.value;
      this.user.lastName = this.form.lastName.value;
      this.userService.updateUser(this.user)
        .toPromise().then(() => {
        this.snackBarService.openSnackBarOk('Kontaktní údaje aktualizovány');
      });
    }
  }
}
