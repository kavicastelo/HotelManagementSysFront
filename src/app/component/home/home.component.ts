import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ArrivalMinDate = new Date();
  public DepartureMinDate = new Date();
  public ArrivalMaxDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
