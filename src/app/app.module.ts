import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductModule } from './product/product.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AdminModule } from './admin/admin.module';
import { ExtraModule } from './extra/extra.module';
import { FacebookModule } from 'ngx-facebook';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProductModule,
    Ng4LoadingSpinnerModule.forRoot(),
    AdminModule,
    ExtraModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
