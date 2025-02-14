// chat.service.ts
import { AgentResponse, ChatMessage } from '@/types';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chatArray = signal<ChatMessage[]>([]);

  getStreamData(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource('http://127.0.0.1:8000/stream');
      eventSource.onmessage = (event) => {
        try {
          const data = event.data;
          this.chatArray.update((prev) => {
            const lastItem = prev[prev.length - 1];
            lastItem.agentMessage += data;
            return structuredClone(prev);
          });
          observer.next(data);
        } catch (error) {
          console.error('Error parsing data:', error);
        }
      };

      eventSource.onerror = (error) => {
        console.log('EventSource error:', error);
        if (eventSource.readyState === EventSource.CLOSED) {
          observer.complete();
        } else {
          observer.error(error);
        }
        eventSource.close();
      };

      return () => {
        console.log('Closing connection');
        eventSource.close();
      };
    });
  }
}
