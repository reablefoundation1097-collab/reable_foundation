import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import {
  faWheelchair, faHeartPulse, faUsers,
  faLocationDot, faCalendarDays, faArrowRight, faQuoteLeft,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vari-campaign',
  imports: [CommonModule, RouterLink, FontAwesomeModule, ScrollRevealDirective],
  templateUrl: './vari-campaign.html',
  styleUrl: './vari-campaign.css',
})
export class VariCampaign implements AfterViewInit, OnDestroy {
  faWheelchair   = faWheelchair;
  faHeartPulse   = faHeartPulse;
  faUsers        = faUsers;
  faLocationDot  = faLocationDot;
  faCalendarDays = faCalendarDays;
  faArrowRight   = faArrowRight;
  faQuoteLeft    = faQuoteLeft;
  faCircleCheck  = faCircleCheck;

  stats = [
    { num: '200+', label: 'Pilgrims Supported',   desc: 'Specially-abled devotees who participated' },
    { num: '80+',  label: 'Wheelchairs Deployed', desc: 'Across the full Vari route' },
    { num: '150+', label: 'Volunteers',            desc: 'Dedicated escorts & medical staff' },
    { num: '36',   label: 'Districts Reached',     desc: 'Pilgrims from across Maharashtra' },
  ];

  journey = [
    { step: '01', title: 'Planning & Outreach',    desc: 'Three months before Vari, our team identifies specially-abled pilgrims who wish to participate but lack the means to do so.' },
    { step: '02', title: 'Wheelchair Arrangement', desc: 'We source, service, and position wheelchairs at strategic points along the entire pilgrimage route to Pandharpur.' },
    { step: '03', title: 'Volunteer Training',     desc: 'Every volunteer undergoes sensitivity training, first-aid certification, and disability-awareness workshops before the event.' },
    { step: '04', title: 'The Walk Together',      desc: 'On the day of Vari, our volunteers and medical teams accompany pilgrims, ensuring every step is safe, supported, and meaningful.' },
    { step: '05', title: 'Post-Vari Care',         desc: 'After the pilgrimage, our medical team provides follow-up care and rehabilitation support to participants who need it.' },
  ];

  private observers: IntersectionObserver[] = [];

  ngAfterViewInit() {
    // Observe each timeline item with its own observer + threshold 0.5
    // so each fires individually as you scroll past it
    const items = document.querySelectorAll<HTMLElement>('.timeline-item');
    items.forEach((el, idx) => {
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          // stagger each item 100ms after the previous
          setTimeout(() => el.classList.add('tl-show'), idx * 100);
          obs.disconnect();
        }
      }, { threshold: 0.45 });
      obs.observe(el);
      this.observers.push(obs);
    });
  }

  ngOnDestroy() {
    this.observers.forEach(o => o.disconnect());
  }
}
