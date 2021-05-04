import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './component/register/register.component';
import {BookingComponent} from './component/booking/booking.component';
import {SportsFieldComponent} from './component/admin/sports-field/sports-field.component';
import {AdminBookingComponent} from './component/admin/admin-booking/admin-booking.component';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from '../security/auth.guard';
import {ExceptionComponent} from './component/admin/exception/exception.component';
import {ProfileComponent} from './component/profile/profile.component';
import {PasswordResetComponent} from './component/passwordReset/password-reset/password-reset.component';
import {PasswordResetRequestComponent} from './component/passwordReset/password-reset-request/password-reset-request.component';
import {HomeComponent} from './component/home/home.component';
import {SportsHallComponent} from './component/sports-hall/sports-hall.component';
import {OutsideFieldComponent} from './component/outside-field/outside-field.component';
import {MeetingRoomComponent} from './component/meeting-room/meeting-room.component';
import {RestaurantComponent} from './component/restaurant/restaurant.component';
import {AccommodationComponent} from './component/accommodation/accommodation.component';
import {ContactComponent} from './component/contact/contact.component';
import {UserComponent} from './component/admin/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'onas', pathMatch: 'full'},
  {path: 'onas', component: HomeComponent},
  {path: 'hala', component: SportsHallComponent},
  {path: 'hriste', component: OutsideFieldComponent},
  {path: 'sal', component: MeetingRoomComponent},
  {path: 'restaurace', component: RestaurantComponent},
  {path: 'ubytovani', component: AccommodationComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'password-reset', component: PasswordResetComponent},
  {path: 'password-reset-req', component: PasswordResetRequestComponent},
  {path: 'rezervace', component: BookingComponent},
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
  {
    path: 'admin/users',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: {
      roles: 'ROLE_ADMIN'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
