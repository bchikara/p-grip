import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUIModule } from 'ng-block-ui';
import { BlockComponent } from './block/block.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { CoreModule } from '../core/core.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [BlockComponent,AddProductComponent],
  imports: [
    CommonModule,
    FormsModule, 
    CoreModule,
     BlockUIModule.forRoot(
      {
        template:BlockComponent
      }
    ),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  entryComponents: [BlockComponent]
})
export class AdminModule { }
