import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import gsap from 'gsap';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  @ViewChild('logoElement') logoElement!: ElementRef;

  isPinned = true;
  isHovered = true;
  public expandedLogo =
    'https://open-frontend-bucket.s3.amazonaws.com/ai-agents/open-logo.svg';
  public collapsedLogo =
    'https://open-frontend-bucket.s3.amazonaws.com/ai-agents/open-brand-white.svg';

  public animateLogoIn() {
    if (this.isPinned) return;
    gsap.fromTo(
      this.logoElement.nativeElement,
      { x: -100 },
      { x: 0, duration: 0.5, ease: 'power2.out' }
    );
  }

  public animateLogoOut() {
    if (this.isPinned) return;
    gsap.fromTo(
      this.logoElement.nativeElement,
      { x: 100 },
      { x: 0, duration: 0.5, ease: 'power2.out' }
    );
  }

  public changeState() {
    if (this.isPinned) return;
    this.animateLogoIn();
    this.isHovered = !this.isHovered;
  }
}
