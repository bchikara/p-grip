import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [AboutComponent,ContactComponent,FaqComponent,GalleryComponent,TeamComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ExtraModule { }
