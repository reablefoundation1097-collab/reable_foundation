import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-impact',
  imports: [CommonModule, RouterLink, FontAwesomeModule, ScrollRevealDirective],
  templateUrl: './impact.html',
  styleUrl: './impact.css',
})
export class Impact implements OnInit, OnDestroy {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  // Stats with counting animation
  stats = [
    { target: 500, suffix: '+', title: 'Lives Touched', desc: 'Individuals supported since inception', current: 0 },
    { target: 12,  suffix: '+', title: 'Active Programs', desc: 'Rehabilitation & empowerment initiatives', current: 0 },
    { target: 36,  suffix: '',  title: 'Districts Covered', desc: 'Reaching all corners of Maharashtra', current: 0 },
    { target: 200, suffix: '+', title: 'Volunteers', desc: 'Dedicated change-makers on the ground', current: 0 },
  ];

  // Bar chart data — beneficiaries year over year
  yearData = [
    // { year: '2020', value: 45,  max: 500 },
    // { year: '2021', value: 95,  max: 500 },
    // { year: '2022', value: 160, max: 500 },
    // { year: '2023', value: 290, max: 500 },
    // { year: '2024', value: 480, max: 500 },
    { year: '2025', value: 200, max: 500 },
    { year: '2026', value: 400, max: 500 },
  ];

  // Horizontal bar chart — reach by program area
  programData = [
    { label: 'Physical Therapy', value: 200, max: 480 },
    { label: 'Assistive Devices', value: 160, max: 480 },
    { label: 'Education', value: 145, max: 480 },
    { label : 'Schemes', value:100 , max:480}
  ];

  chartsVisible = false;
  statsVisible = false;

  // Testimonials — duplicated for infinite scroll
  testimonials = [
    { category: 'Physical Therapy', quote: '"Reable Foundation gave me more than therapy — they gave me belief in myself. Today I work independently and live on my own terms."', name: 'Priya Jagtap', location: 'Pune, Maharashtra', image: 'assets/testimonial/testimonial_image_1.png', bg: '#E07B3F' },
    { category: 'Vocational Training', quote: '"The vocational training program gave me skills I never thought I could have. Now I run my own business and support my family."', name: 'Rahul Patil', location: 'Mumbai, Maharashtra', image: 'assets/testimonial/testimonial_image_4.png', bg: '#C1440E' },
    { category: 'Inclusive Education', quote: '"Reable Foundation opened doors I thought were permanently closed. Their inclusive education program changed my life completely."', name: 'Anjali Shinde', location: 'Nashik, Maharashtra', image: 'assets/testimonial/testimonial_image_2.png', bg: '#8B4513' },
    { category: 'Assistive Devices', quote: '"With the wheelchair and assistive tech they provided, I regained my independence. I now commute to work every day on my own."', name: 'Suresh Nair', location: 'Nagpur, Maharashtra', image: 'assets/testimonial/testimonial_image_5.png', bg: '#4A6B7C' },
    { category: 'Social Awareness', quote: '"The awareness programs helped my entire community understand disability differently. We are more inclusive now than ever before."', name: 'Meena Jadhav', location: 'Pune, Maharashtra', image: 'assets/testimonial/testimonial_image_3.png', bg: '#5A6E45' },
  ];

  // Duplicate for seamless loop
  get scrollTestimonials() {
    return [...this.testimonials, ...this.testimonials];
  }

  // Testimonial slider (for single view)
  currentSlide = 0;
  private autoPlayTimer: any;
  private observer!: IntersectionObserver;
  private statsCounters: any[] = [];

  ngOnInit(): void {
    this.autoPlayTimer = setInterval(() => this.nextSlide(), 5000);

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (target.classList.contains('stats-trigger') && !this.statsVisible) {
            this.statsVisible = true;
            this.animateCounters();
          }
          if (target.classList.contains('charts-trigger') && !this.chartsVisible) {
            this.chartsVisible = true;
          }
        }
      });
    }, { threshold: 0.3 });

    setTimeout(() => {
      const statEl = document.querySelector('.stats-trigger');
      const chartEl = document.querySelector('.charts-trigger');
      if (statEl) this.observer.observe(statEl);
      if (chartEl) this.observer.observe(chartEl);
    }, 100);
  }

  animateCounters(): void {
    this.stats.forEach((stat, i) => {
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

  getBarHeight(value: number, max: number): number {
    return (value / max) * 100;
  }

  getBarWidth(value: number, max: number): number {
    return (value / max) * 100;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetAutoPlay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  goToSlide(i: number) {
    this.currentSlide = i;
    this.resetAutoPlay();
  }

  resetAutoPlay() {
    clearInterval(this.autoPlayTimer);
    this.autoPlayTimer = setInterval(() => this.nextSlide(), 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoPlayTimer);
    this.statsCounters.forEach(t => clearInterval(t));
    this.observer?.disconnect();
  }
}
