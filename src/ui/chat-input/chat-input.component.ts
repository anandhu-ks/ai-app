import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ChatService } from '@/services';

@Component({
  selector: 'app-chat-input',
  imports: [MatIconModule, FormsModule],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css',
})
export class ChatInputComponent {
  private _chatService = inject(ChatService);
  userInput = '';
  @ViewChild('textarea') textareaRef!: ElementRef<HTMLTextAreaElement>;

  adjustHeight(textarea: HTMLTextAreaElement) {
    textarea.style.height = '62px';
    const newHeight = Math.min(textarea.scrollHeight, 200);
    textarea.style.height = `${newHeight}px`;
  }

  onSendChat() {
    if (!this.userInput.trim()) return;
    this._chatService.chatArray.update((prev) => [
      ...prev,
      { userMessage: this.userInput, agentMessage: '', loadings: false },
    ]);

    this._chatService.getStreamData().subscribe()

    this.userInput = '';
    requestAnimationFrame(() => {
      if (this.textareaRef) {
        const textarea = this.textareaRef.nativeElement;
        textarea.style.height = '62px';
      }
    });
  }
}
