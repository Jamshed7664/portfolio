import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  showAll = false;
  
  get displayedProjects() {
    return this.showAll ? this.projects : this.projects.slice(0, 9);
  }

  toggleShow() {
    this.showAll = !this.showAll;
  }
  projects = [
    {
      title: 'Dell DPA',
      description: 'Dell EMC Data Protection Advisor monitors, analyzes, and reports on data protection environments, helping organizations optimize backup performance and ensure compliance.',
      tags: ['Angular 16', 'TypeScript', 'HTML/CSS'],
      aos: 'flip-left'
    },
    {
      title: 'JIO Super Admin Portal',
      description: 'The intranet-based Super Admin Portal allows creation, modification, and deletion of accounts, users, and configurations, with full control over system-wide actions.',
      tags: ['Angular', 'HTML/CSS', 'TypeScript'],
      aos: 'flip-right'
    },
    {
      title: 'Recruitment.ai',
      description: 'A hiring platform where job seekers upload resumes, search jobs, and apply, while employers post vacancies and manage candidates efficiently.',
      tags: ['ReactJS', 'JavaScript', 'Bootstrap', 'Tailwind'],
      aos: 'flip-left'
    },
    {
      title: 'JIO CPP (Content Publisher Portal)',
      description: 'CPP enables transcoding, packaging, and distribution of media content through an intuitive interface for the JioCDN network.',
      tags: ['ReactJS', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
      aos: 'flip-right'
    },
    {
      title: 'JIO CDN (Dashboard)',
      description: 'The JioCDN Dashboard lets admins configure and monitor delivery of live streams, VOD, and web data across the CDN.',
      tags: ['Angular', 'JavaScript', 'TypeScript', 'Bootstrap'],
      aos: 'flip-left'
    },
    {
      title: 'SAT IPTV',
      description: 'A Tizen-based TV app providing remote control of TV features with smooth navigation and modern entertainment options.',
      tags: ['JavaScript', 'CSS', 'HTML', 'Tizen'],
      aos: 'flip-right'
    },
    {
      title: 'Free-fuse',
      description: 'Supports hybrid learning by giving students supplemental materials, reducing the need to re-watch lectures and streamlining study time.',
      tags: ['Angular', 'JavaScript', 'TypeScript', 'Bootstrap', 'ReactJS'],
      aos: 'flip-left'
    },
    {
      title: 'Pando Messaging App',
      description: 'A modern messaging web app with chat, media sharing, and group communication features similar to WhatsApp and Facebook Messenger.',
      tags: ['Angular', 'JavaScript', 'TypeScript', 'Bootstrap'],
      aos: 'flip-right'
    },
    {
      title: 'Rise and Shine (Hotel and House Booking)',
      description: 'Booking platform for hotels and long-term rentals with search, compare, and reservation features for travelers and property owners.',
      tags: ['Angular', 'JavaScript', 'TypeScript', 'Bootstrap', 'HTML', 'CSS'],
      aos: 'flip-left'
    },
    {
      title: 'Smart Inventory Manager',
      description: 'A web-based system to track, manage, and forecast inventory levels in real time. It provides analytics, automated alerts, and streamlined stock control for retail and warehouse operations.',
      tags: ['ReactJS', 'JavaScript', 'Bootstrap', 'Node.js'],
      aos: ''
    },
    {
      title: 'SmartTask – Task Management Dashboard',
      description: 'Dynamic task management app with drag-and-drop organization, real-time updates, and interactive productivity charts.',
      tags: ['Angular', 'RxJS', 'HTML/CSS', 'Angular Material'],
      aos: 'flip-right'
    },
    {
      title: 'EduLearn – Online Learning Portal',
      description: 'Feature-rich e-learning platform with video lectures, quizzes, progress tracking, and role-based authentication.',
      tags: ['Angular', 'REST API', 'HTML/CSS', 'Angular Material'],
      aos: 'flip-right'
    },
    {
      title: 'InvoicerPro – Invoice & Billing Application',
      description: 'Invoice generation tool with PDF export, tax calculations, and currency conversion, visualized with NGX Charts.',
      tags: ['Angular', 'NGX Charts', 'HTML/CSS', 'Angular Material'],
      aos: 'flip-right'
    },
    {
      title: 'HealthTrack – Fitness & Health Dashboard',
      description: 'Health tracking web app for monitoring daily activity, calories, and water intake with wearable device integration.',
      tags: ['Angular', 'Chart.js', 'REST API', 'HTML/CSS'],
      aos: 'flip-right'
    },
    {
      title: 'ShopSphere – E-Commerce Web App',
      description: 'Responsive e-commerce frontend with product filtering, cart management, and Stripe payment integration.',
      tags: ['ReactJS', 'Redux Toolkit', 'Tailwind CSS', 'JavaScript'],
      aos: 'flip-right'
    },
    {
      title: 'EventEase – Event Booking Platform',
      description: 'Event booking system with seat selection, ticket QR code generation, and real-time updates.',
      tags: ['ReactJS', 'Firebase', 'REST API', 'JavaScript'],
      aos: 'flip-right'
    },
    {
      title: 'Foodiez – Online Food Ordering System',
      description: 'Food delivery app with restaurant listings, menu browsing, and real-time order tracking with Google Maps.',
      tags: ['ReactJS', 'Redux', 'Google Maps API', 'JavaScript'],
      aos: 'flip-right'
    },
    {
      title: 'PortfolioX – Dynamic Personal Portfolio',
      description: 'Interactive portfolio with smooth animations, dark mode, and a customizable project showcase.',
      tags: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
      aos: 'flip-right'
    }
  ];
}
