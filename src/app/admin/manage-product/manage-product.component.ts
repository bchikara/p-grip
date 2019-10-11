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
   

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getProducts()
      .subscribe(products => {
        this.products = products['products'];
        // this.initializeTable(products);
      });
  }

 

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
