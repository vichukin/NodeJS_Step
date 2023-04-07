import { Component, OnInit } from '@angular/core';
import { InfoService } from '../Info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  Skills: string[] = [];
  constructor(private info: InfoService) { }

  ngOnInit() {
    this.Skills = this.info.GetSkills();
  }

}
