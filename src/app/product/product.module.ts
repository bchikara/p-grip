import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ]
})
export class ProductModule { }
