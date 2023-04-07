import { Component, OnInit } from '@angular/core';
import { InfoService } from '../Info.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  Links:string[]=[];
  constructor(private info: InfoService) { }

  ngOnInit() {
    this.Links=this.info.GetLinks();
  }

}
