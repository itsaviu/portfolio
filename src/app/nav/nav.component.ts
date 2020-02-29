import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class NavComponent implements OnInit {

  visible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  closeAndScroll(element) {
    this.toogleDrawer();
    this.scroll(element);
  }
  scroll(element) {
   document.getElementById(element).scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  toogleDrawer() {
    this.visible = !this.visible;
  }

  openResume() {
    window.open('/assets/files/Avi-Coda-3yrs.pdf', '_blank');
  }
}
