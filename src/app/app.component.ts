import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  
  title = 'portfolio';
  loading = true;

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      delay: 0
    });

    setTimeout(() => {
      this.loading = false;
    }, 7800);
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
}

}
