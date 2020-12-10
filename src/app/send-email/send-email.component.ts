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

    constructor() {}

    ngOnInit() {
        this.email = "";
        this.lambdaUrl = "";
        this.response = "";
        this.color = "";
    }

    public async sendEmail(event: Event) {
        event.preventDefault();
        this.lambdaUrl = "https://11mdq1nryg.execute-api.eu-west-1.amazonaws.com/dev/send?email=" + this.email;
        fetch(this.lambdaUrl)
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