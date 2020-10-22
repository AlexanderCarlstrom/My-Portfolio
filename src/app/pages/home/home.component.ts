import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  github = faGithubAlt;
  linkedin = faLinkedinIn;

  constructor() {}

  ngOnInit(): void {}
}
