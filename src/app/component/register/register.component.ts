import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../service/authentication.service';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {RegisterData} from '../../../model/RegisterData';
import {MustMatch} from '../../../validator/MustMatch';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public submitted = false;
  public errorMsg = '';

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

  get form(): { [p: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.authService.register(new RegisterData(
        this.registerForm.get('firstName')?.value,
        this.registerForm.get('lastName')?.value,
        this.registerForm.get('email')?.value,
        this.registerForm.get('password')?.value)).subscribe();
    }
  }
}
