import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './component/register/register.component';
import {BookingComponent} from './component/booking/booking.component';
import {SportsFieldComponent} from './component/sports-field/sports-field.component';
import {AdminBookingComponent} from './component/admin-booking/admin-booking.component';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from '../security/auth.guard';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'booking', component: BookingComponent},
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
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
