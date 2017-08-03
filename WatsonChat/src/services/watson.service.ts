import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WatsonService {

    context = {};
    username = "Youssef";
    messages = [];

    constructor (private http: Http) {

        //initial greeting from Watson

        this.http.post('https://5f60fcf1.ngrok.io/api/message', {}).map(res => res.json())
        .subscribe(res =>
            {
                this.context = res.context;
                this.showMessage(false, res.output.text);
            });
        }

        //send message to Watson API
        sendMessage(message){

            //show the sent message
            this.showMessage(true, message);

            let body = {input: {text: message}, context: this.context};

            this.http.post(' https://5f60fcf1.ngrok.io/api/message', body).map(res => res.json())
            .subscribe(res =>
                {
                    this.context = res.context;
                    this.showMessage(false, res.output.text);
                });

            }

            //show a message on the screen
            showMessage(isMe, message){

                //show my messages on the right
                if(isMe){
                    this.messages.push({
                        isMe: true,
                        message: message,
                        senderName: this.username,
                        image: 'assets/img/user.png',
                        time: this.getTime()
                    });
                }

                //watson messages on left
                else{
                    this.messages.push({
                        isMe: false,
                        message: message,
                        senderName: "Watson",
                        image: 'assets/img/watson.png',
                        time: this.getTime()
                    });
                }
            }

            //get correctly formatted date/time to display with msg
            getTime(){
                let date = new Date();
                let dateString = "" + date;
                let month = dateString.split(" ")[1];
                let day = dateString.split(" ")[2];
                let hours = date.getHours();
                let mins = date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes();
                return month + " " + day + " " + hours + ":" + mins;
            }


        }
