import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-blog5',
  templateUrl: './blog5.component.html',
  styleUrls: ['./blog5.component.scss']
})
export class Blog5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    name: new FormControl(null,[
      Validators.required
    ]),
    message: new FormControl(null,[
      Validators.required
    ])
  })

}
