import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {HotelBookingComponent} from "./component/hotel-booking/hotel-booking.component";

const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"hotel-booking", component:HotelBookingComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
