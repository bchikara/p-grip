import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AgmComponent } from './agm/agm.component';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [FooterComponent,HeaderComponent, AgmComponent],
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlAS-bx-M16bI-vm8RUDIE3z02MdhWEFQ'
    }),
  ],
  exports:[
    HeaderComponent,FooterComponent,AgmComponent
  ]
})
export class CoreModule { }
