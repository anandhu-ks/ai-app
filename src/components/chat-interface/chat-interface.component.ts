import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
    selector: 'app-chat-interface',
    imports: [SideNavComponent],
    standalone:true,
    templateUrl: './chat-interface.component.html',
    styleUrl: './chat-interface.component.css'
})
export class ChatInterfaceComponent {}
