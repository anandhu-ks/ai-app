import { Component, computed, inject } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { ChatWelcomeComponent } from '../chat-welcome/chat-welcome.component';
import { ChatService } from '@/services';
import { ChatInputComponent } from '@/ui';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-chat-interface',
  imports: [
    SideNavComponent,
    ChatWelcomeComponent,
    ChatInputComponent,
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

  // constructor() {
  //   this.chatService.getStreamData().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },
  //     error: (err) => console.log(err),
  //     complete: () => console.log('complete'),
  //   });
  // }


  splitMarkdown(message: string): string[] {
    return message.split(/\n\n/); // Split by double newlines (Markdown block separation)
  }
  
}
