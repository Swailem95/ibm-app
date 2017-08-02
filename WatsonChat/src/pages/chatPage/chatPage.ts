import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WatsonService} from '../../services/watson.service';


@Component({
    selector: 'page-chat',
    templateUrl: 'chatPage.html',
    providers: [WatsonService]
})
export class ChatPage {

    messages = [];
    @ViewChild('txtChat') txtChat:any;
    @ViewChild('content') content:any;

    constructor(public navCtrl: NavController, private watsonService: WatsonService) {
        this.messages = this.watsonService.messages;
    }

    //automatic scrolling
    ngAfterViewChecked(){
        this.content.scrollToBottom();
    }

    public sendMessage(){
        this.txtChat.setFocus();
        this.watsonService.sendMessage(this.txtChat.content.trim());
        this.txtChat.clearInput();
    }



}
