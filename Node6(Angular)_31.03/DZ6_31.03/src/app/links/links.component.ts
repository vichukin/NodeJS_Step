import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  Links:string[]=[];
  constructor() { }

  ngOnInit() {
    this.Links.push("https://github.com/vichukin","https://www.linkedin.com/in/дима-вычкин-038175271/");
  }

}
