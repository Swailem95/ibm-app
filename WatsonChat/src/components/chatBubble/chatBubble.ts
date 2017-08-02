import {Component} from '@angular/core';

@Component({
  selector: 'chat-bubble',
  inputs: ['msg: message'],
  template:
  `
  <div class="chatBubble">
    <img class="profile-pic {{msg.isMe === true ? 'right' : 'left'}}" src="{{msg.image}}">
    <div class="chat-bubble {{msg.isMe === true ? 'right' : 'left'}}">
    <span style="font-weight:bold;">{{msg.senderName}} </span>
      <div class="message">{{msg.message}} </div>
      <div class="message-detail">
          <span>{{msg.time}}</span>
      </div>
    </div>
  </div>
  `
})
export class ChatBubble {

  public msg:any;

  constructor() {
    this.msg = {};
  }
}
