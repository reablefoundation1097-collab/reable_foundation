import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import {
  faLocationDot, faPhone, faEnvelope, faClock, faArrowRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, FontAwesomeModule, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faClock = faClock;
  faArrowRight = faArrowRight;

  infoCards = [
    {
      icon: faLocationDot,
      iconColor: '#C1440E',
      iconBg: '#FDE8DC',
      label: 'AREA OF OPERATION',
      title: 'All Over Maharashtra, India',
      sub: 'Reaching all 36 districts'
    },
    {
      icon: faPhone,
      iconColor: '#6B7B6A',
      iconBg: '#E8EDE8',
      label: 'PHONE',
      title: '+91 98765 43210',
      sub: 'Mon–Sat, 9am–6pm IST'
    },
    {
      icon: faEnvelope,
      iconColor: '#3B74C4',
      iconBg: '#DDE9F8',
      label: 'EMAIL',
      title: 'info@reablefoundation.org',
      sub: 'We reply within 48 hours'
    },
    {
      icon: faClock,
      iconColor: '#C49A14',
      iconBg: '#FBF3DC',
      label: 'WORKING HOURS',
      title: 'Mon – Saturday',
      sub: '9:00 AM – 6:00 PM IST'
    },
  ];

  form = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.form = { name: '', email: '', phone: '', subject: '', message: '' };
    }, 4000);
  }
}
