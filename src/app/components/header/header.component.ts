import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
  @Output() navigateToSection = new EventEmitter<string>();

  activeSection: string = 'home';

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
    } else {
      console.warn(`Section '${section}' is not available in the DOM yet.`);
    }
  } 
  
}
