import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent implements OnInit {

  ArrivalMinDate = new Date();
  public DepartureMinDate = new Date();

  public cartIsEmpty:any;

  public arrivalValue = localStorage.getItem("arrivalDate");
  public arrivalValueDate = new Date(''+this.arrivalValue);
  public departureValue = localStorage.getItem("departureDate");
  public departureValueDate = new Date(''+this.departureValue);
  public adultValue = localStorage.getItem("customers");
  public childrenValue = localStorage.getItem("children");

  public selectedRoom = localStorage.getItem("selectedRoom");
  public roomPrice = localStorage.getItem("roomPrice");
  public childrenCapacity = localStorage.getItem("childrenCapacity");
  public roomCapacity = localStorage.getItem("roomCapacity");

  constructor() { }

  ngOnInit(): void {

    if (this.selectedRoom!=null){
      this.cartIsEmpty = true;
    }
    else{
      this.cartIsEmpty = false;
    }
  }

}
