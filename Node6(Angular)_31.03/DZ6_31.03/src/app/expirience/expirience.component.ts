import { Component, OnInit } from '@angular/core';
import { InfoService } from '../Info.service';

@Component({
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.css']
})
export class ExpirienceComponent implements OnInit {

  ExpWork?:number;
  ExpStudy?:number;
  constructor(private info: InfoService) { }

  ngOnInit() {
    this.ExpWork = this.info.GetExpWork();
    this.ExpStudy= this.info.GetExpStudy();
  }

}
