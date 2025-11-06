import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {

  isMobile: boolean = window.innerWidth < 768;

  constructor(private el: ElementRef) {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });
  }
  ngAfterViewInit() {
    const skillFills = this.el.nativeElement.querySelectorAll('.skill-fill');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const finalWidth = target.getAttribute('data-width');
          if (finalWidth) {
            target.style.width = finalWidth;
          }
          observer.unobserve(target); // run once
        }
      });
    }, { threshold: 0.1 });

    skillFills.forEach((fill: HTMLElement) => {
      fill.setAttribute('data-width', fill.style.width); // store final width
      fill.style.width = '0'; // reset for animation
      observer.observe(fill);
    });
  }
}
