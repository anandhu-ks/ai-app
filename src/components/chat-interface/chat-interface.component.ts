import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { ChatWelcomeComponent } from '../chat-welcome/chat-welcome.component';

@Component({
  selector: 'app-chat-interface',
  imports: [SideNavComponent, ChatWelcomeComponent],
  standalone: true,
  templateUrl: './chat-interface.component.html',
  styleUrl: './chat-interface.component.css',
})
export class ChatInterfaceComponent {}
