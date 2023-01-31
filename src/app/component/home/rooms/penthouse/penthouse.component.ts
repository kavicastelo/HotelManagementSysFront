import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-penthouse',
  templateUrl: './penthouse.component.html',
  styleUrls: ['./penthouse.component.scss']
})
export class PenthouseComponent implements OnInit {

  ArrivalMinDate = new Date();
  public DepartureMinDate = new Date();

  public arrivalValue = localStorage.getItem("arrivalDate");
  public arrivalValueDate = new Date(''+this.arrivalValue);
  public departureValue = localStorage.getItem("departureDate");
  public departureValueDate = new Date(''+this.departureValue);
  public adultValue = localStorage.getItem("customers");
  public childrenValue = localStorage.getItem("children");

  constructor() { }

  ngOnInit(): void {
  }

}
