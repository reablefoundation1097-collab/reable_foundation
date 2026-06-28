import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class Home implements OnInit, OnDestroy {

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

  // ===== COUNTING STATS =====
  stats = [
    { target: 500, suffix: '+', label: 'Lives Touched',    desc: 'Individuals supported since inception', current: 0 },
    { target: 12,  suffix: '+', label: 'Active Programs',  desc: 'Rehabilitation & empowerment initiatives', current: 0 },
    { target: 36,  suffix: '',  label: 'Districts Covered',desc: 'Reaching all corners of Maharashtra', current: 0 },
    { target: 200, suffix: '+', label: 'Volunteers',       desc: 'Dedicated change-makers on the ground', current: 0 },
  ];

  private statsVisible = false;
  private statsCounters: any[] = [];
  private observer!: IntersectionObserver;

  // Who We Are cards
  whoWeAreCards = [
    { icon: faShield, title: 'Medical Support', desc: 'Physical therapy, assistive devices and full rehabilitation services.' },
    { icon: faGraduationCap, title: 'Inclusive Education', desc: 'Vocational training and employment pathways for special abilities.' },
    { icon: faGlobe, title: 'Social Integration', desc: 'Mainstreaming individuals into society with dignity and equal rights.' }
  ];

  // Direction cards
  directionCards = [
    { icon: faCompass, color: 'orange', title: 'Our Aim', desc: 'To provide a structured and supportive environment for individuals with special abilities, offering medium- to long-term rehabilitation programs tailored to their unique needs.' },
    { icon: faEye, color: 'gray', title: 'Our Vision', desc: 'An inclusive and empowering space that nurtures determination, develops skills, and strengthens the inherent potential of every individual, enabling them to lead independent and fulfilling lives.' },
    { icon: faStar, color: 'gray', title: 'Our Goal', desc: 'To create pathways for every individual with special abilities to access quality rehabilitation, education, employment, and social integration — with equal rights and equal dignity.' }
  ];

  // Six Pillars
  pillars = [
    { num: '01', category: 'HEALTHCARE', categoryColor: 'orange', icon: faStethoscope, title: 'Medical & Rehabilitation Support', desc: 'Medical support, physical therapy, assistive devices and rehabilitation services that help each patient become independent.' },
    { num: '02', category: 'SOCIETY', categoryColor: 'gray', icon: faUsers, title: 'Social Acceptance & Integration', desc: 'Promotion of acceptance, integrity, awareness and social inclusion of specially-abled people into the mainstream.' },
    { num: '03', category: 'RIGHTS', categoryColor: 'blue', icon: faScaleBalanced, title: 'Equal Rights & Accessibility', desc: 'Ensuring equal rights, accessibility, and opportunities for all specially-abled people across Maharashtra.' },
    { num: '04', category: 'EDUCATION', categoryColor: 'orange', icon: faGraduationCap, title: 'Education & Employment', desc: 'Promoting inclusive education and vocational training to enhance employment opportunities for special abilities.' },
    { num: '05', category: 'GOVERNANCE', categoryColor: 'purple', icon: faFileLines, title: 'Membership & Governance', desc: 'Collecting subscription forms for members and forming committees and sub-committees to advance our mission.' },
    { num: '06', category: 'COMMUNITY', categoryColor: 'teal', icon: faHandHoldingHeart, title: 'Community Well-Being', desc: 'Improving overall well-being by addressing social determinants of health and fostering a more empowered society.' }
  ];

  // Programs — all have solid bg + image for hover reveal
  programs = [
    {
      category: 'Physical Therapy Rehabilitation ',
      title: 'Medical Support & Physical Therapy',
      desc: 'Comprehensive physical therapy, occupational therapy, and medical support to maximize independence.',
      bg: '#C1440E',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80'
    },
    {
      category: 'Assistive devices',
      title: 'Assistive Devices & Technology',
      desc: 'Providing access to state-of-the-art assistive technology, prosthetics, and mobility aids.',
      bg: '#2a4a3a',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80'
    },
    {
      category: 'Schemes',
      title: 'Inclusive Education',
      desc: 'Promoting awareness of government schemes, disability benefits, insurance support, and assistance programs to help individuals and families access the right support.',
      bg: '#A83508',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80'
    },
    // {
    //   category: 'EMPLOYMENT',
    //   title: 'Vocational Training',
    //   desc: 'Skills development and vocational programs that open doors to sustainable employment.',
    //   bg: '#2a3a5a',
    //   image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    // },
    {
      category: 'Disability awareness ',
      title: 'Social Awareness Programs',
      desc: 'Challenging stereotypes and promoting inclusive understanding of disability in communities.',
      bg: '#4A5C3A',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80'
    }
  ];

  // Testimonials
  testimonials = [
    { category: 'Physical therapy rehabilitation', quote: '“पॅरालिसिसनंतर मला वाटलं की मी पुन्हा स्वतःच्या पायावर उभा राहू शकणार नाही. Reable Foundation च्या थेरपी, मार्गदर्शन आणि सततच्या प्रोत्साहनामुळे आज मी अधिक आत्मविश्वासाने जगायला शिकलो आहे.”', name: 'Priya Jagtap', location: 'Pune, Maharashtra', image: 'assets/testimonial/testimonial_image_1.png', avatar: 'assets/testimonial/testimonial_image_1.png', bg: '#E07B3F' },
    { category: 'Assistive devices', quote: '“माझ्या अपंगत्वामुळे अनेक गोष्टी अशक्य वाटत होत्या. पण Reable Foundation ने मला मदत, प्रशिक्षण आणि योग्य दिशा दिली, ज्यामुळे मी स्वतःच्या क्षमतांवर पुन्हा विश्वास ठेवू लागलो.”', name: 'Rahul Patil', location: 'Mumbai, Maharashtra', image: 'assets/testimonial/testimonial_image_4.png', avatar: 'assets/testimonial/testimonial_image_4.png', bg: '#C1440E' },
    { category: 'Disability awareness', quote: '“अपघातानंतर माझं आयुष्य थांबल्यासारखं झालं होतं. Reable Foundation च्या आधारामुळे मला फक्त उपचारच नाही, तर पुन्हा जगण्याची उमेद मिळाली.”', name: 'Anjali Shinde', location: 'Nashik, Maharashtra', image: 'assets/testimonial/testimonial_image_2.png', avatar: 'assets/testimonial/testimonial_image_2.png', bg: '#8B4513' }
  ];

  currentSlide = 0;
  private autoPlayTimer: any;

  ngOnInit(): void {
    this.startAutoPlay();

    // IntersectionObserver for counting animation
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.statsVisible) {
          this.statsVisible = true;
          this.animateCounters();
        }
      });
    }, { threshold: 0.3 });

    setTimeout(() => {
      const el = document.querySelector('.impact-trigger');
      if (el) this.observer.observe(el);
    }, 100);
  }

  animateCounters(): void {
    this.stats.forEach(stat => {
      const duration = 1800;
      const steps = 60;
      const increment = stat.target / steps;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        stat.current = Math.min(Math.round(increment * step), stat.target);
        if (step >= steps) clearInterval(timer);
      }, duration / steps);
      this.statsCounters.push(timer);
    });
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
    this.statsCounters.forEach(t => clearInterval(t));
    this.observer?.disconnect();
  }

  // Get involved
  getInvolvedCards = [
    { icon: faUsers, iconBg: '#4A5C3A', cardBg: '#E8EDE1', title: 'Volunteer', desc: 'Give your time, skills, and heart to directly support individuals with special abilities on the ground.', highlight: false },
    { icon: faHeart, iconBg: '#C1440E', cardBg: '#F5DDD5', title: 'Donate', desc: 'Your financial contribution directly funds rehabilitation programs, assistive devices, and education.', highlight: true },
    { icon: faHandshake, iconBg: '#1a1a1a', cardBg: '#EDEAE4', title: 'Partner', desc: 'Organizations and businesses — collaborate with us through CSR, resources, or expertise.', highlight: false }
  ];
}
