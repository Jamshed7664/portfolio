import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const options = {
      strings: [
        'Angular Developer',
        'ReactJS Developer',
        'NextJS Developer',
        'Frontend Developer',
        'Full-Stack Developer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    };

    new Typed('.typed-text', options);
  }
  @ViewChild('home') homeSection!: ElementRef;
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('experience') experienceSection!: ElementRef;
  @ViewChild('education') educationSection!: ElementRef;
  @ViewChild('projects') projectsSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;
  @ViewChild('techstack') techstackSection!: ElementRef;
  @ViewChild('testimonials') testimonialsSection!: ElementRef;
  @ViewChild('skill') skillSection!: ElementRef;

  scrollToSection(section: string) {
    setTimeout(() => {
      const sectionRefs: { [key: string]: ElementRef | undefined } = {
        home: this.homeSection,
        about: this.aboutSection,
        experience: this.experienceSection,
        education: this.educationSection,
        projects: this.projectsSection,
        contact: this.contactSection,
        techstack: this.techstackSection,
        testimonials: this.testimonialsSection,
        skill: this.skillSection
      };

      const target = sectionRefs[section];

      if (target?.nativeElement) {
        target.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.warn(`Section '${section}' is not available in the DOM yet.`);
      }
    }, 0);  // Or try 100ms if needed
  }

  
}
