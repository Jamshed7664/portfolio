import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { TtechStackComponent } from './components/ttech-stack/ttech-stack.component';
import { NgxMarqueeModule } from 'ngx-marquee';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    TestimonialsComponent,
    ScrollToTopComponent,
    TtechStackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxMarqueeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
