import { Component, OnInit } from '@angular/core';
import { SkillConfig } from 'src/app/config/skills.config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  private skillConfig: any;

  constructor() {
    this.skillConfig = SkillConfig;
   }

  ngOnInit() {
  }

}
