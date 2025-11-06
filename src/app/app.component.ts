import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true      // Only animate once
    });
  }

  scrollPercent: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollPercent = (scrollTop / docHeight) * 100;

    const bar = document.querySelector('.scroll-progress-container');
    if (bar) {
      bar.classList.toggle('active', scrollTop > 20);
    }
  }
}
