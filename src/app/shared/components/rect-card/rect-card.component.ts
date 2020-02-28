import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rect-card',
  templateUrl: './rect-card.component.html',
  styleUrls: ['./rect-card.component.scss']
})
export class RectCardComponent implements OnInit {

  @Input("header") header: string;

  @Input("chip") chip: string;

  @Input("height") height: number;

  @Input("description") description: string;

  constructor() { }

  ngOnInit() {
  }

}
