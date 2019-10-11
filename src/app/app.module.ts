import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { ProductModule } from './product/product.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoginComponent } from './admin/login/login.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { DataTableModule } from 'ng-angular8-datatable';
import {FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    FaqComponent,
    ContactComponent,
    NotFoundComponent,
    GalleryComponent,
    TeamComponent,
    LoginComponent,
    AddProductComponent,
    ManageProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProductModule,
    Ng4LoadingSpinnerModule.forRoot(),
    DataTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
