import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import {
  faHeart, faShield, faGraduationCap, faGlobe, faCompass,
  faEye, faStar, faStethoscope, faUsers, faScaleBalanced,
  faFileLines, faHandHoldingHeart, faHandshake, faLocationDot,
  faArrowRight, faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, FontAwesomeModule, ScrollRevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnDestroy {

  // Icons
  faHeart = faHeart;
  faShield = faShield;
  faGraduationCap = faGraduationCap;
  faGlobe = faGlobe;
  faCompass = faCompass;
  faEye = faEye;
  faStar = faStar;
  faStethoscope = faStethoscope;
  faUsers = faUsers;
  faScaleBalanced = faScaleBalanced;
  faFileLines = faFileLines;
  faHandHoldingHeart = faHandHoldingHeart;
  faHandshake = faHandshake;
  faLocationDot = faLocationDot;
  faArrowRight = faArrowRight;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  // Who We Are cards
  whoWeAreCards = [
    {
      icon: faShield,
      title: 'Medical Support',
      desc: 'Physical therapy, assistive devices and full rehabilitation services.'
    },
    {
      icon: faGraduationCap,
      title: 'Inclusive Education',
      desc: 'Vocational training and employment pathways for special abilities.'
    },
    {
      icon: faGlobe,
      title: 'Social Integration',
      desc: 'Mainstreaming individuals into society with dignity and equal rights.'
    }
  ];

  // Direction cards
  directionCards = [
    {
      icon: faCompass,
      color: 'orange',
      title: 'Our Aim',
      desc: 'To provide a structured and supportive environment for individuals with special abilities, offering medium- to long-term rehabilitation programs tailored to their unique needs.'
    },
    {
      icon: faEye,
      color: 'gray',
      title: 'Our Vision',
      desc: 'An inclusive and empowering space that nurtures determination, develops skills, and strengthens the inherent potential of every individual, enabling them to lead independent and fulfilling lives.'
    },
    {
      icon: faStar,
      color: 'gray',
      title: 'Our Goal',
      desc: 'To create pathways for every individual with special abilities to access quality rehabilitation, education, employment, and social integration — with equal rights and equal dignity.'
    }
  ];

  // Six Pillars
  pillars = [
    {
      num: '01', category: 'HEALTHCARE', categoryColor: 'orange',
      icon: faStethoscope,
      title: 'Medical & Rehabilitation Support',
      desc: 'Medical support, physical therapy, assistive devices and rehabilitation services that help each patient become independent.'
    },
    {
      num: '02', category: 'SOCIETY', categoryColor: 'gray',
      icon: faUsers,
      title: 'Social Acceptance & Integration',
      desc: 'Promotion of acceptance, integrity, awareness and social inclusion of specially-abled people into the mainstream.'
    },
    {
      num: '03', category: 'RIGHTS', categoryColor: 'blue',
      icon: faScaleBalanced,
      title: 'Equal Rights & Accessibility',
      desc: 'Ensuring equal rights, accessibility, and opportunities for all specially-abled people across Maharashtra.'
    },
    {
      num: '04', category: 'EDUCATION', categoryColor: 'orange',
      icon: faGraduationCap,
      title: 'Education & Employment',
      desc: 'Promoting inclusive education and vocational training to enhance employment opportunities for special abilities.'
    },
    {
      num: '05', category: 'GOVERNANCE', categoryColor: 'purple',
      icon: faFileLines,
      title: 'Membership & Governance',
      desc: 'Collecting subscription forms for members and forming committees and sub-committees to advance our mission.'
    },
    {
      num: '06', category: 'COMMUNITY', categoryColor: 'teal',
      icon: faHandHoldingHeart,
      title: 'Community Well-Being',
      desc: 'Improving overall well-being by addressing social determinants of health and fostering a more empowered society.'
    }
  ];

  // Programs
  programs = [
    {
      category: 'REHABILITATION',
      title: 'Medical Support & Physical Therapy',
      desc: '',
      bg: '#C1440E',
      hasImage: false,
      image: ''
    },
    {
      category: 'EMPOWERMENT',
      title: 'Assistive Devices & Technology',
      desc: 'Providing access to state-of-the-art assistive technology, prosthetics, and mobility aids.',
      bg: '#2a2a2a',
      hasImage: true,
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&q=80'
    },
    {
      category: 'EDUCATION',
      title: 'Inclusive Education',
      desc: '',
      bg: '#A83508',
      hasImage: false,
      image: ''
    },
    {
      category: 'EMPLOYMENT',
      title: 'Vocational Training',
      desc: 'Skills development and vocational programs that open doors to sustainable employment.',
      bg: '#2a2a2a',
      hasImage: true,
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&q=80'
    },
    {
      category: 'COMMUNITY',
      title: 'Social Awareness Programs',
      desc: '',
      bg: '#6B7C52',
      hasImage: false,
      image: ''
    }
  ];

  // Testimonials slider
  testimonials = [
    {
      category: 'Physical Therapy',
      quote: '"Reable Foundation gave me more than therapy — they gave me belief in myself. Today I work independently and live on my own terms."',
      name: 'Priya Sharma',
      location: 'Pune, Maharashtra',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80',
      bg: '#E07B3F'
    },
    {
      category: 'Vocational Training',
      quote: '"The vocational training program gave me skills I never thought I could have. Now I run my own small business and support my family."',
      name: 'Rahul Patil',
      location: 'Nashik, Maharashtra',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
      bg: '#C1440E'
    },
    {
      category: 'Inclusive Education',
      quote: '"Reable Foundation opened doors I thought were permanently closed. Their inclusive education program changed my life completely."',
      name: 'Anjali Desai',
      location: 'Mumbai, Maharashtra',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80',
      bg: '#8B4513'
    }
  ];

  currentSlide = 0;
  private autoPlayTimer: any;

  constructor() {
    this.startAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayTimer = setInterval(() => this.nextSlide(), 5000);
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetAutoPlay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoPlay();
  }

  resetAutoPlay() {
    clearInterval(this.autoPlayTimer);
    this.startAutoPlay();
  }

  ngOnDestroy() {
    clearInterval(this.autoPlayTimer);
  }

  // Get involved
  getInvolvedCards = [
    {
      icon: faUsers,
      iconBg: '#4A5C3A',
      cardBg: '#E8EDE1',
      title: 'Volunteer',
      desc: 'Give your time, skills, and heart to directly support individuals with special abilities on the ground.',
      highlight: false
    },
    {
      icon: faHeart,
      iconBg: '#C1440E',
      cardBg: '#F5DDD5',
      title: 'Donate',
      desc: 'Your financial contribution directly funds rehabilitation programs, assistive devices, and education.',
      highlight: true
    },
    {
      icon: faHandshake,
      iconBg: '#1a1a1a',
      cardBg: '#EDEAE4',
      title: 'Partner',
      desc: 'Organizations and businesses — collaborate with us through CSR, resources, or expertise.',
      highlight: false
    }
  ];
}
