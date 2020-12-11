import { Component, OnInit } from '@angular/core';
import { SendEmailConstants } from "../constants/send-email";

@Component({
    selector: 'app-send-email',
    templateUrl: './send-email.component.html',
    styleUrls: ['./send-email.component.scss'],
})

export class SendEmailComponent implements OnInit {

    email: string;
    lambdaUrl: string;
    response: string;
    color: string;
    url: string;

    constructor() {}

    ngOnInit() {
        this.email = "";
        this.response = "";
        this.color = "";
        this.url = SendEmailConstants.LAMBDA_LOCAL_ENDPOINT;
    }

    public async sendEmail(event: Event) {
        event.preventDefault();

        fetch(this.url, {
            method: "POST",
            body: JSON.stringify({email: this.email})
        })
        .then(response => {
            if (response.status == 200) {
                this.emailSentResponse(
                    SendEmailConstants.EMAIL_SUCCESS, 
                    SendEmailConstants.GREEN);
            } else {
                this.emailSentResponse(
                    SendEmailConstants.EMAIL_FAILED, 
                    SendEmailConstants.RED);
            }
        })
        .catch(error => {
            this.emailSentResponse(
                SendEmailConstants.EMAIL_FAILED, 
                SendEmailConstants.RED);
        });
    }

    public emailSentResponse(response: string, color: string) {
        this.response = response;
        this.color = color;
    }
}