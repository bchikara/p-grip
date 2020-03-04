import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUIModule } from 'ng-block-ui';
import { BlockComponent } from './block/block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { CoreModule } from '../core/core.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [BlockComponent,AddProductComponent],
  imports: [
    CommonModule,
    FormsModule, 
    CoreModule,
    ReactiveFormsModule,
     BlockUIModule.forRoot(
      {
        template:BlockComponent
      }
    ),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule

  ],
  entryComponents: [BlockComponent]
})
export class AdminModule { }
