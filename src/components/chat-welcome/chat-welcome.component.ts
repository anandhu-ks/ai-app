import { CHAT_WELCOME_INFO } from '@/constants';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import gsap from 'gsap';

@Component({
  selector: 'app-chat-welcome',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './chat-welcome.component.html',
  styleUrl: './chat-welcome.component.css',
})
export class ChatWelcomeComponent implements AfterViewInit {
  @ViewChild('welcomeText', { static: true }) welcomeText!: ElementRef;
  @ViewChild('subText', { static: true }) subText!: ElementRef;
  @ViewChildren('gridItem', { read: ElementRef })
  gridItems!: QueryList<ElementRef>;

  public gridInfo = CHAT_WELCOME_INFO;

  ngAfterViewInit() {
    this._animateStar();
    this._animateGrid();
    this._animateText();
  }

  adjustHeight(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  private _animateStar() {
    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to('.star-1', {
        opacity: 0.5,
        scale: 1.2,
        duration: 1,
        delay: 0.5,
        ease: 'power1.inOut',
      })
      .to(
        '.star-2',
        {
          opacity: 0.6,
          delay: 0.5,
          scale: 1.1,
          duration: 1,
          ease: 'power1.inOut',
        },
        '-=0.3'
      )
      .to(
        '.star-3',
        {
          opacity: 0.3,
          delay: 0.5,
          scale: 1.1,
          duration: 1,
          ease: 'power1.inOut',
        },
        '-=0.3'
      );
  }

  private _animateText() {
    gsap.fromTo(
      this.welcomeText.nativeElement,
      { scaleX: 0.5, opacity: 0.5, transformOrigin: 'center' },
      { scaleX: 1, opacity: 1, duration: 0.5, ease: 'power3.out' }
    );

    gsap.fromTo(
      this.subText.nativeElement,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, ease: 'power3.out' }
    );
  }

  private _animateGrid() {
    const tl = gsap.timeline({ repeat: -1 });

    this.gridItems.forEach((grid, index) => {
      const shimmer = grid.nativeElement.querySelector('.shimmer');

      tl.to(
        grid.nativeElement,
        {
          scale: 1.01, 
          duration: 1, 
          ease: 'power1.inOut',
        },
        `start-${index}`
      )
        .to(
          shimmer,
          {
            opacity: 1,
            x: '120%',
            filter: 'brightness(1.6)',
            duration: 1.5,
            ease: 'power1.inOut',
          },
          `start-${index}`
        )
        .to(shimmer, { opacity: 0, x: '-120%', duration: 0 })
        .to(grid.nativeElement, { scale: 1, duration: 1, ease: 'power1.out' });
    });
  }
}
