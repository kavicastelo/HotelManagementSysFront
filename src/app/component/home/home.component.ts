import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeAvailableBtn = false;

  public selectCustomer='';
  public selectChildren='';

  ArrivalMinDate = new Date();
  public DepartureMinDate = new Date();
  public ArrivalMaxDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  availabilityBtn(){
    const arrivalDate = (<HTMLInputElement>document.querySelector('.arrivalDate')).value;
    const departureDate = (<HTMLInputElement>document.querySelector('.departureDate')).value;

    if (this.ArrivalMinDate>=this.DepartureMinDate || this.selectCustomer==""){
      return
    }
    else{
      localStorage.setItem('customers',this.selectCustomer);
      localStorage.setItem('children',this.selectChildren);
      localStorage.setItem('arrivalDate',arrivalDate);
      localStorage.setItem('departureDate',departureDate);
      this.activeAvailableBtn = true;
    }
  }


}
