import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  Skills: string[] = [];
  constructor() { }

  ngOnInit() {
    this.Skills.push("C#","JavaScript","HTML","CSS","SQL","ASP.NET","Basic hardware knowledge","Cisco Certificate");
    console.log(this.Skills);
    console.log("dsada")
  }

}
