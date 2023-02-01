import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-executive',
  templateUrl: './executive.component.html',
  styleUrls: ['./executive.component.scss']
})
export class ExecutiveComponent implements OnInit {

  ArrivalMinDate = new Date();
  public DepartureMinDate = new Date();

  public arrivalValue = localStorage.getItem("arrivalDate");
  public arrivalValueDate = new Date(''+this.arrivalValue);
  public departureValue = localStorage.getItem("departureDate");
  public departureValueDate = new Date(''+this.departureValue);
  public adultValue = localStorage.getItem("customers");
  public childrenValue = localStorage.getItem("children");

  overviewActive:boolean = true;
  featureActive:boolean = false;
  rate: any = 0;

  overviewOnClick(){
    this.overviewActive =! this.overviewActive;
    if (this.overviewActive){
      this.featureActive = false;
    }
  }

  featureOnClick(){
    this.featureActive =! this.featureActive;
    if (this.featureActive){
      this.overviewActive = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
