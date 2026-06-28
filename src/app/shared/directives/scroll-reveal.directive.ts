import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0; // ms delay for staggered reveals
  @Input() revealDirection: 'up' | 'left' | 'right' | 'none' = 'up';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const el = this.el.nativeElement as HTMLElement;

    // Initial hidden state
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
    el.style.transition = `opacity 0.6s ease ${this.revealDelay}ms, transform 0.6s ease ${this.revealDelay}ms`;
    if (this.revealDirection === 'up')    el.style.transform = 'translateY(40px)';
    if (this.revealDirection === 'left')  el.style.transform = 'translateX(-60px)';
    if (this.revealDirection === 'right') el.style.transform = 'translateX(60px)';

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0)';
          el.style.pointerEvents = '';
          this.observer.unobserve(el);
        }
      });
    }, { threshold: 0 });

    this.observer.observe(el);

    // Fallback: ensure element is always revealed after 1.5s (mobile keyboard/viewport edge cases)
    setTimeout(() => {
      if (el.style.opacity === '0') {
        el.style.opacity = '1';
        el.style.transform = 'translate(0)';
        el.style.pointerEvents = '';
      }
    }, 1500);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
