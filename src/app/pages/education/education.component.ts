import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  education = [
    {
      year: {
        start: '2019',
        end: 'Now',
      },
      title: '.NET and Web Development',
      school: 'Campus Mölndal',
      description:
        'Vocational education in system- and web development with focus on c# .NET, expected graduation 2020-06',
    },
    {
      year: {
        start: '2016',
        end: '2019',
      },
      title: 'System Science',
      school: 'Linköping University',
      description:
        'A bachelor level education in social science with focus on how organizations and humans can make use of digitization and its power to transform the society',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
