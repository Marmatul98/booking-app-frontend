
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './component/register/register.component';
import {BookingComponent} from './component/booking/booking.component';
import {AdminComponent} from './component/admin/admin.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'admin', component: AdminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
