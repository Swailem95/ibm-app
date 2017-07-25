import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-chat',
    templateUrl: 'chatPage.html'
})
export class ChatPage {

    messages: any[];
    @ViewChild('txtChat') txtChat:any;
    @ViewChild('content') content:any;
    time: any;

    constructor(public navCtrl: NavController) {

        this.messages = [];
        let date = new Date();
        let dateString = "" + date;
        let month = dateString.split(" ")[1];
        let day = dateString.split(" ")[2];
        let hours = date.getHours();
        let mins = date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes() ;

        this.time = month + " " + day + " " + hours + ":" + mins;


        this.messages.push({
            message :  'Am I dreaming?',
            isMe : false,
            time: this.time,
            image: '../../assets/img/watson.png',
            senderName : 'Watson'});

        }

        public sendMessage(){

            this.txtChat.setFocus();

            let date = new Date();
            let dateString = "" + date;
            let month = dateString.split(" ")[1];
            let day = dateString.split(" ")[2];
            let hours = date.getHours();
            let mins = date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes() ;

            this.time = month + " " + day + " " + hours + ":" + mins;

            this.messages.push({
                isMe: true,
                message: this.txtChat.content,
                senderName: "Youssef",
                image: '../../assets/img/user.png',
                time:  this.time
            });

            this.txtChat.clearInput();


        }
    }
