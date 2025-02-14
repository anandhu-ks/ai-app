import {
  Component,
  ElementRef,
  ViewChild,
  computed,
  effect,
  inject,
} from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { ChatWelcomeComponent } from '../chat-welcome/chat-welcome.component';
import { ChatService } from '@/services';
import { ChatInputComponent } from '@/ui';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-chat-interface',
  imports: [
    SideNavComponent,
    ChatWelcomeComponent,
    ChatInputComponent,
    MarkdownModule,
  ],
  standalone: true,
  templateUrl: './chat-interface.component.html',
  styleUrl: './chat-interface.component.css',
  animations: [
    trigger('slideUp', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition('void => *', [
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class ChatInterfaceComponent {
  private chatService = inject(ChatService);
  chatArray = computed(() => this.chatService.chatArray());
  public isStreaming = computed(() => this.chatService.isStreaming());
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  private _allowAutoScroll = false;

  constructor() {
    effect(() => {
      this._allowAutoScroll = !!(this.isStreaming() || this.chatArray());
      this._tryAutoScroll();
    });
  }

  private _tryAutoScroll() {
    if (this._allowAutoScroll) {
      try {
        this.chatContainer.nativeElement.scrollTop =
          this.chatContainer.nativeElement.scrollHeight + 500;
      } catch (err) {
        console.log('Scroll error:', err);
      }
    }
  }

  onScroll(event: Event) {
    const element = event.target as HTMLDivElement;
    const threshold = 1;
    const atBottom =
      element.scrollHeight - element.scrollTop <=
      element.clientHeight + threshold;
    this._allowAutoScroll = atBottom;
  }
}
