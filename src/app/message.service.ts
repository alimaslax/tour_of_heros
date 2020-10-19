import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  // add a message to the list of messages
  add(message: string) {
    this.messages.push(message);
  }
  // clear the messages
  clear() {
    this.messages = [];
  }
}