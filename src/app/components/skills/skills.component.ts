import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  animated = false;
  isMobile = window.innerWidth <= 768;

  skillsLeft = [
    { name: '🅰️ Angular', percent: 95 },
    { name: '⚛️ ReactJS', percent: 95 },
    { name: '⏭️ NextJS', percent: 90 },
    { name: '📜 JavaScript', percent: 90 },
    { name: '🟦 TypeScript', percent: 80 },
    { name: '🌐 HTML5/CSS3', percent: 85 },
    { name: '📦 Bootstrap', percent: 85 }
  ];

  skillsRight = [
    { name: '🎨 Tailwind CSS', percent: 85 },
    { name: '💅 SCSS/SASS', percent: 85 },
    { name: '🟩 NodeJS', percent: 85 },
    { name: '🍃 MongoDB', percent: 70 },
    { name: '🗄️ MySQL', percent: 70 },
    { name: '🔧 Git / GitLab', percent: 85 },
    { name: '📮 Postman / Swagger', percent: 85 }
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animated) {
            this.animateBars();
            this.animated = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(this.el.nativeElement.querySelector('.skills'));
  }

  animateBars() {
    const bars = this.el.nativeElement.querySelectorAll('.skill-fill');
    bars.forEach((bar: HTMLElement) => {
      const width = bar.getAttribute('data-percent');
      this.renderer.setStyle(bar, 'width', width + '%');
    });
  }

}
