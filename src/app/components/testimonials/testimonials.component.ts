import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
interface Testimonial {
  text: string;
  author: string;
}
@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    { text: 'Working with Jamshed was a breeze. He delivered high-quality work on time and exceeded expectations.', author: '- Sarah Khan, Product Manager' },
    { text: 'Exceptional communication, great coding standards, and impressive UI/UX sense. Highly recommended!', author: '- John Smith, Startup Founder' },
    { text: 'Delivered exactly what I wanted. Will definitely work with him again for future projects.', author: '- Priya Sharma, CTO' },
    { text: 'Another testimonial here to fill the second slot of this slide.', author: '- Mark Wilson, Designer' },
    { text: 'Jamshed transformed our vision into reality. The end product was beyond what we imagined.', author: '- Emma Davis, Marketing Lead' },
    { text: 'Professional, efficient, and highly skilled — a pleasure to collaborate with.', author: '- Michael Brown, Tech Lead' },
    { text: 'Every deadline was met without compromising quality. Truly dependable.', author: '- Olivia Martinez, Project Coordinator' },
    { text: 'Creative solutions and clean code — exactly what our team needed.', author: '- Daniel Lee, UI/UX Specialist' },
    { text: 'His attention to detail made all the difference. A top-notch developer!', author: '- Sophia Taylor, Product Owner' },
    { text: 'Seamless integration, modern design, and great support after delivery.', author: '- Ethan Walker, Operations Manager' }
  ];

  groupedTestimonials: Testimonial[][] = [];
  isMobile = false;

  ngOnInit() {
    this.checkScreenSize();
    this.groupTestimonials();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
    this.groupTestimonials();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Bootstrap md breakpoint
  }

  groupTestimonials() {
    const perSlide = this.isMobile ? 1 : 2;
    this.groupedTestimonials = [];
    for (let i = 0; i < this.testimonials.length; i += perSlide) {
      this.groupedTestimonials.push(this.testimonials.slice(i, i + perSlide));
    }
  }


  customOptions: OwlOptions = {
    loop: true,
    margin: 20,
    stagePadding: 50,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['&#8249;', '&#8250;'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      940: { items: 3 }
    },
    nav: true
  }

}
