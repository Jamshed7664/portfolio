import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // about.component.ts
  skills = [
    { name: 'Angular', level: 'Expert', icon: '🅰️' },
    { name: 'ReactJS', level: 'Expert', icon: '⚛️' },
    { name: 'NextJS', level: 'Advanced', icon: '⏭️' },
    { name: 'JavaScript', level: 'Expert', icon: '📜' },
    { name: 'TypeScript', level: 'Advanced', icon: '🟦' },
    { name: 'HTML5/CSS3', level: 'Advanced', icon: '🌐' },
    { name: 'Bootstrap', level: 'Advanced', icon: '📦' },
    { name: 'Tailwind CSS', level: 'Advanced', icon: '🎨' },
    { name: 'SCSS/SASS', level: 'Advanced', icon: '💅' },
    { name: 'NodeJS', level: 'Advanced', icon: '🟩' },
    { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
    { name: 'MySQL', level: 'Intermediate', icon: '🗄️' },
    { name: 'Git / GitLab', level: 'Advanced', icon: '🔧' },
    { name: 'Postman / Swagger', level: 'Advanced', icon: '📮' },
  ];

}
