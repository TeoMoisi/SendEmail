import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { SendEmailComponent } from './send-email.component';

const routes: Routes = [
    { path: '', component: SendEmailComponent, data: { title: marker('Send Email') } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
  })
export class SendEmailRoutingModule {}