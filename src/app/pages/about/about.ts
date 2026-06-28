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
      name: 'Priya Sharma',
      role: 'Founder & Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      bg: '#E07B3F'
    },
    {
      name: 'Arjun Mehta',
      role: 'Program Manager',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      bg: '#4A6B7C'
    },
    {
      name: 'Nadia Osei',
      role: 'Head of Rehabilitation',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
      bg: '#8B4A4A'
    },
    {
      name: 'Robert Kelley',
      role: 'Medical Advisor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bg: '#6B6B7A'
    },
  ];
}
