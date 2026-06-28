import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import {
  faHeart, faLocationDot, faCalendar, faUsers, faBullseye, faEye
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  imports: [RouterLink, CommonModule, FontAwesomeModule, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  faHeart = faHeart;
  faLocationDot = faLocationDot;
  faCalendar = faCalendar;
  faUsers = faUsers;
  faBullseye = faBullseye;
  faEye = faEye;

  stats = [
    { icon: faLocationDot, value: 'All Maharashtra', label: 'COVERAGE' },
    { icon: faCalendar, value: '2020', label: 'ESTABLISHED' },
    { icon: faUsers, value: '500+ Lives', label: 'BENEFICIARIES' },
    { icon: faHeart, value: '200+ Strong', label: 'VOLUNTEERS' },
  ];

  team = [
    {
      name: 'Dr. Yash Pore',
      role: 'Founder & President',
      image: '/assets/dr_yash_pore.jpeg',
      bg: '#E07B3F'
    },
    {
      name: 'Dr. Aniket Ahirekar',
      role: 'Founder & Secretary',
      image: '/assets/dr_aniket_ahirekar.jpeg',
      bg: '#4A6B7C'
    },
    {
      name: 'Dr. Sakshi Kothari',
      role: 'Treasurer',
      image: '/assets/dr_sakshi.jpeg',
      bg: '#8B4A4A'
    },
    {
      name: 'Shailesh Desai',
      role: 'Trustee',
      image: '/assets/dr_shailesh_desai.jpeg',
      bg: '#6B6B7A'
    },
    // {
    //   name: 'Atharva Ahirekar',
    //   role: 'Trustee',
    //   image: '/assets/atharva_ahirekar.png',
    //   bg: '#6B6B7A'
    // },
  ];
}
