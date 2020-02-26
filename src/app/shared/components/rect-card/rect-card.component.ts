import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rect-card',
  templateUrl: './rect-card.component.html',
  styleUrls: ['./rect-card.component.scss']
})
export class RectCardComponent implements OnInit {

  @Input("header") header: string;

  @Input("width") width: string;

  @Input("alignment") alignment: string;

  @Input("description") description: string;

  constructor() { }

  ngOnInit() {
  }

}
