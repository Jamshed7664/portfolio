import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  activeSection: string = 'home';
  hideTopBar = false;

  private lastScrollTop = 0;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @Output() navigateToSection = new EventEmitter<string>();

  scrollTo(section: string, event: Event) {
    event.preventDefault();
    this.activeSection = section;

    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Handle top bar hide/show
    if (currentScroll > this.lastScrollTop) {
      this.hideTopBar = true;
    } else {
      this.hideTopBar = false;
    }
    this.lastScrollTop = Math.max(currentScroll, 0);

    // Detect active section based on scroll position
    const sections = [
      'home',
      'skill',
      'about',
      'experience',
      'education',
      'projects',
      'contact'
    ];

    let currentActive = this.activeSection;
    const offset = 100; // Adjust for header height

    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          currentActive = section;
          break;
        }
      }
    }

    if (currentActive !== this.activeSection) {
      this.activeSection = currentActive;
    }
  }

}


