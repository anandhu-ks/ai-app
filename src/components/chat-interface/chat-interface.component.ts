import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-chat-interface',
  standalone: true,
  imports: [SideNavComponent],
  templateUrl: './chat-interface.component.html',
  styleUrl: './chat-interface.component.css',
})
export class ChatInterfaceComponent {}
