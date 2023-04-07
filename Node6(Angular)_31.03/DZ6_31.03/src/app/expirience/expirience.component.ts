import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.css']
})
export class ExpirienceComponent implements OnInit {

  ExpWork?:number;
  ExpStudy?:number;
  constructor() { }

  ngOnInit() {
    this.ExpWork = 0;
    this.ExpStudy=1.5;
  }

}
