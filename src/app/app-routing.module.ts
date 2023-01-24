import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {HotelBookingComponent} from "./component/hotel-booking/hotel-booking.component";
import {FamilyComponent} from "./component/home/rooms/family/family.component";
import {PenthouseComponent} from "./component/home/rooms/penthouse/penthouse.component";
import {FamilyDoubleComponent} from "./component/home/rooms/family-double/family-double.component";
import {ExecutiveComponent} from "./component/home/rooms/executive/executive.component";
import {JuniorComponent} from "./component/home/rooms/junior/junior.component";

const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"family",component:FamilyComponent},
  {path:"penthouse",component:PenthouseComponent},
  {path:"family-double",component:FamilyDoubleComponent},
  {path:"executive",component:ExecutiveComponent},
  {path:"junior",component:JuniorComponent},
  {path:"hotel-booking", component:HotelBookingComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
