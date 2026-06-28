import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import {
  faStethoscope, faMicrochip, faBook, faBriefcase,
  faBullhorn, faCircleCheck, faArrowRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-programs',
  imports: [RouterLink, CommonModule, FontAwesomeModule, ScrollRevealDirective],
  templateUrl: './programs.html',
  styleUrl: './programs.css',
})
export class Programs implements OnInit, OnDestroy {
  faArrowRight = faArrowRight;
  faCircleCheck = faCircleCheck;

  programs = [
    {
      id: 1,
      category: 'HEALTHCARE',
      categoryColor: 'orange',
      icon: faStethoscope,
      title: 'Physical Therapy Rehabilitation',
      desc: 'Comprehensive physical therapy, occupational therapy, and medical support services to maximize physical independence and quality of life.',
      items: ['Physiotherapy sessions', 'Occupational therapy', 'Speech and language therapy', 'Pain management', 'Post-surgical rehabilitation'],
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80',
      imageLeft: true,
      visible: false
    },
    {
      id: 2,
      category: 'TECHNOLOGY',
      categoryColor: 'blue',
      icon: faMicrochip,
      title: 'Assistive devices',
      desc: 'Access to state-of-the-art assistive technologies, prosthetics, mobility aids, and communication devices tailored to individual needs.',
      items: ['Prosthetic limbs & orthotics', 'Wheelchair & mobility aids', 'Hearing aids & visual aids', 'AAC communication devices', 'Universal design advocacy'],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
      imageLeft: false,
      visible: false
    },
    {
      id: 3,
      category: 'EDUCATION',
      categoryColor: 'orange',
      icon: faBook,
      title: 'Schemes',
      desc: 'Promoting awareness of government schemes, disability benefits, insurance support, and assistance programs to help individuals and families access the right support.',
      items: ['Special educator training', 'Adapted learning materials', 'School integration support', 'Parent & family counseling', 'Digital literacy programs'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      imageLeft: true,
      visible: false
    },
    {
      id: 4,
      category: 'ADVOCACY',
      categoryColor: 'purple',
      icon: faBullhorn,
      title: 'Disability awareness ',
      desc: 'Challenging stereotypes, reducing stigma, and promoting a more inclusive understanding of disability within the broader community.',
      items: ['Community sensitization campaigns', 'School & college workshops', 'Media & social campaigns', 'Policy advocacy', 'Disability rights education'],
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
      imageLeft: true,
      visible: false
    },
  ];

  private observer!: IntersectionObserver;

  ngOnInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-id'));
          const prog = this.programs.find(p => p.id === id);
          if (prog) prog.visible = true;
        }
      });
    }, { threshold: 0.15 });

    // Observe after DOM renders
    setTimeout(() => {
      document.querySelectorAll('.program-row').forEach(el => {
        this.observer.observe(el);
      });
    }, 100);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
