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

    if (currentScroll > this.lastScrollTop) {
      // Scrolling down
      this.hideTopBar = true;
    } else {
      // Scrolling up
      this.hideTopBar = false;
    }

    this.lastScrollTop = Math.max(currentScroll, 0);
  }
}


