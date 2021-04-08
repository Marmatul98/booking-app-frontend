import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './component/register/register.component';
import {BookingComponent} from './component/booking/booking.component';
import {SportsFieldComponent} from './component/sports-field/sports-field.component';
import {AdminBookingComponent} from './component/admin-booking/admin-booking.component';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from '../security/auth.guard';
import {ExceptionComponent} from './component/exception/exception.component';
import {ProfileComponent} from './component/profile/profile.component';
import {PasswordResetComponent} from './component/passwordReset/password-reset/password-reset.component';
import {PasswordResetRequestComponent} from './component/passwordReset/password-reset-request/password-reset-request.component';

const routes: Routes = [
  {path: 'password-reset', component: PasswordResetComponent},
  {path: 'password-reset-req', component: PasswordResetRequestComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'booking', component: BookingComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'admin/sportsField',
    component: SportsFieldComponent,
    canActivate: [AuthGuard],
    data: {
      roles: 'ROLE_ADMIN'
    }
  },
  {
    path: 'admin/booking',
    component: AdminBookingComponent,
    canActivate: [AuthGuard],
    data: {
      roles: 'ROLE_ADMIN'
    }
  },
  {
    path: 'admin/exception',
    component: ExceptionComponent,
    canActivate: [AuthGuard],
    data: {
      roles: 'ROLE_ADMIN'
    }
  },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
