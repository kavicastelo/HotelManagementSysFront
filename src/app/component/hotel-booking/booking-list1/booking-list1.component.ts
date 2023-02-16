import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-list1',
  templateUrl: './booking-list1.component.html',
  styleUrls: ['./booking-list1.component.scss']
})
export class BookingList1Component implements OnInit {

  public selectRoom = '';
  public selectRoomPrice = '';
  public selectRoomCapability = '';
  public selectRoomChildren = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectRoom);
    console.log(this.selectRoomPrice);
    console.log(this.selectRoomChildren);
    console.log(this.selectRoomCapability);
  }

  selectedRoom(){
    localStorage.setItem('selectedRoom',this.selectRoom);
    localStorage.setItem('roomPrice',this.selectRoomPrice);
    localStorage.setItem('childrenCapacity',this.selectRoomChildren);
    localStorage.setItem('roomCapacity',this.selectRoomCapability);
  }

}
