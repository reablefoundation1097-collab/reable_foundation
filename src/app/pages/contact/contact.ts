import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import {
  faLocationDot, faPhone, faEnvelope, faClock, faArrowRight
} from '@fortawesome/free-solid-svg-icons';

declare const emailjs: any;

const SERVICE_ID  = 'service_lpeecv9';
const NOTIFY_TPL  = 'template_310qovp'; // email to reablefoundation
const REPLY_TPL   = 'template_le7qzxa'; // auto-reply to sender

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
      title: '+91 84848 01484',
      sub: 'Mon–Sat, 9am–6pm IST'
    },
    {
      icon: faEnvelope,
      iconColor: '#3B74C4',
      iconBg: '#DDE9F8',
      label: 'EMAIL',
      title: 'reablefoundation.1097@gmail.com',
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

  form = { name: '', email: '', phone: '', subject: '', message: '' };

  submitted = false;
  sending   = false;
  error     = '';

  closeModal() {
    this.submitted = false;
  }

  async onSubmit() {
    this.sending = true;
    this.error   = '';

    const params = {
      name:    this.form.name,
      email:   this.form.email,
      phone:   this.form.phone,
      subject: this.form.subject,
      message: this.form.message,
      title:   this.form.subject,  // used in auto-reply template
    };

    try {
      // 1. Notify Reable Foundation
      await emailjs.send(SERVICE_ID, NOTIFY_TPL, params);
      // 2. Auto-reply to sender
      await emailjs.send(SERVICE_ID, REPLY_TPL, params);

      this.submitted = true;
      this.form = { name: '', email: '', phone: '', subject: '', message: '' };
    } catch (err: any) {
      this.error = 'Something went wrong. Please try again or email us directly.';
    } finally {
      this.sending = false;
    }
  }
}
