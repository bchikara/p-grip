import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {  FacebookModule } from 'ngx-facebook';



@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent,
    ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FacebookModule.forRoot()
  ],exports:[
  ]
})
export class ProductModule { }
