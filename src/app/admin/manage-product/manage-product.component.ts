import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products;
  subscription: Subscription;  

  constructor(){}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
