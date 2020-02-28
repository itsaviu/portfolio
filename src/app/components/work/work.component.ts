import { Component, OnInit } from '@angular/core';
import { WorkConfig } from 'src/app/config/work.config';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  workConfig: any;

  constructor() { 
    this.workConfig = WorkConfig;
  }

  ngOnInit() {
  }

}
