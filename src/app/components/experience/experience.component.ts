import { Component, OnInit } from '@angular/core';
import { ExperienceConfig } from 'src/app/config/experience.config';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  private experienceConfigs: any;

  constructor() { 
    this.experienceConfigs = ExperienceConfig;
    console.log(this.experienceConfigs);
  }

  ngOnInit() {
  }

}
