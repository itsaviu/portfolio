import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  introContent: string= "Hello, I am Avinash having 3 years of IT experience as a Software Engineer, currently  working @ Coda.";

  aboutContent: string = "A Full stack, dynamic and result oriented professional, proficient in developing a web application.Has an ability to learn new technologies with minimal time period and an excellent team player."

  backgroundContent: string = "I develop Web Application with Complex architecture and also do part time DEVOPS"

  skillSets: string[] = ["Serverless", "Junit", "Redux", "Docker", "Terraform", "AWS Services"]
  constructor() { }

  ngOnInit() {
  }

}
