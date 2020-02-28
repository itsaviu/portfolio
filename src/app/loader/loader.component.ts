import { Component, OnInit } from '@angular/core';
import TypeIt from "typeit";


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  hide = false;

  constructor() { }

  ngOnInit() {
    new TypeIt("#loader-value", {
      startDelay: 0,
      strings: "LOADING",
      speed: 100
    }).pause(1000)
    .type(".")
    .pause(1000)
    .type(".")
    .pause(1000)
    .delete(11)
    .pause(300)
    .type("WELCOME")
    .go();

    setTimeout(() => {
      this.hide = true;
    }, 7000);
  }

}
