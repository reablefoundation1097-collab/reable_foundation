import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import {
  faHeart, faUsers, faUserPlus, faHandshake, faCircleCheck, faArrowRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-get-involved',
  imports: [CommonModule, FormsModule, FontAwesomeModule, ScrollRevealDirective],
  templateUrl: './get-involved.html',
  styleUrl: './get-involved.css',
})
export class GetInvolved {
  faArrowRight = faArrowRight;
  faCircleCheck = faCircleCheck;

  ways = [
    {
      icon: faHeart,
      iconBg: '#C1440E',
      cardBg: '#F5EDE3',
      title: 'Donate',
      desc: 'Every rupee directly funds rehabilitation programs, assistive devices, and educational materials for individuals with special abilities.',
      items: ['Tax deduction under 80G', 'Transparent fund utilization reports', 'Certificate of donation', 'Direct impact updates'],
    },
    {
      icon: faUsers,
      iconBg: '#5A6E45',
      cardBg: '#EDF0E7',
      title: 'Volunteer',
      desc: "Give your time, skills, and compassion. Whether you're a professional, student, or retired, there's a meaningful role for you.",
      items: ['Flexible time commitment', 'Training & orientation provided', 'Certificate of service', 'Community of changemakers'],
    },
    {
      icon: faUserPlus,
      iconBg: '#C8A882',
      cardBg: '#F5EDE3',
      title: 'Become a Member',
      desc: 'Join as a formal member of the foundation. Participate in governance, committees, and shape the direction of our programs.',
      items: ['Annual membership certificate', 'Voting rights in AGMs', 'Access to member meetings', 'Recognition in annual report'],
    },
    {
      icon: faHandshake,
      iconBg: '#1A1A1A',
      cardBg: '#EDEAE4',
      title: 'Corporate Partner',
      desc: 'Fulfill your CSR mandate while creating lasting impact. Partnerships include co-branded programs, employee engagement, and more.',
      items: ['CSR compliance support', 'Co-branded programs', 'Employee volunteering days', 'Impact reporting for CSR reports'],
    },
  ];

  form = {
    name: '',
    email: '',
    phone: '',
    interest: 'Volunteer',
    message: ''
  };

  interests = ['Volunteer', 'Donate', 'Become a Member', 'Corporate Partner', 'Other'];

  submitted = false;

  onSubmit() {
    this.submitted = true;
    // Reset after 4s
    setTimeout(() => {
      this.submitted = false;
      this.form = { name: '', email: '', phone: '', interest: 'Volunteer', message: '' };
    }, 4000);
  }
}
