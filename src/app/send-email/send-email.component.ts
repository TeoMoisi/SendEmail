import { Component, OnInit } from '@angular/core';



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
        this.url = "";
    }

    public async sendEmail(event: Event) {
        event.preventDefault();
        this.url = "https://11mdq1nryg.execute-api.eu-west-1.amazonaws.com/dev/sendEmail";

        fetch(this.url, {
            method: "POST",
            body: JSON.stringify({email: this.email})
        })
        .then(response => {
            if (response.status == 200) {
                this.response = "Email sent successfully";
                this.color = "green";
            }
        })
        .catch(error => {
            this.response = "Could not send email";
            this.color = "red";
            console.log(error)});
    }
}