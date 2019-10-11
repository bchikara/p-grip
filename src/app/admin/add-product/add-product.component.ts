import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/Service/product.service';
import { Router } from '@angular/router';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})



export class AddProductComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  selectedFile: any;
  upload: boolean;
  size: boolean;
  type: boolean;
  product={name:'',category:'',image:'',price:'',description:''};
  res: boolean;
  disable: boolean;
  categories=[];
  constructor(private http:HttpClient,private spinnerService: Ng4LoadingSpinnerService,
    private ps:ProductService, private router:Router ) { }

  ngOnInit() {
    this.blockUI.start()
    console.log(this.ps.getCategories())
    this.categories=this.ps.getCategories()
    console.log(this.categories)
  }

  onFileChanged(event) {
    this.upload = false;
    this.selectedFile = event.target.files[0];
    if (event.target.files[0]) {
      console.log(this.selectedFile.size+' '+this.selectedFile.type)
      if (this.selectedFile.size >= 10000000) {
        this.size = true;
        if (this.selectedFile.type != "image/jpeg") {
          this.type = true;
        }
      }
      else if (this.selectedFile.type != "image/jpeg") {
        this.type = true;
      }
      else {
        this.type = false;
        this.size = false;
        this.upload = true;
        this.spinnerService.show();
        console.log(this.selectedFile);
        const uploadData = new FormData();
        uploadData.append('file', this.selectedFile, this.selectedFile.name);
        console.log(uploadData);
        this.http.post('https://gscditu.com/api/uploadimage', uploadData)
          .subscribe( res => {
              this.spinnerService.hide();
              console.log(res);
              this.product.image = res['url'];
              this.res = true;
              this.upload = false;
            }, error => {
              this.spinnerService.hide();
            });
      }
    }
  }

  onSave(value: NgForm) {
    this.spinnerService.show();
    this.disable = true;
    let product = {
      category: this.product.category,
      description: this.product.description,
      image: this.product.image,
      name: this.product.name,
      price:''
    }
    console.log(product);
    if(product.description!==undefined){
      this.ps.addProduct(product).then(p=>{
        console.log(p)   

        setTimeout(()=>{
          this.spinnerService.hide();
          this.router.navigate(['/product'])
        },3000)
      }
      )   
    }
  }
}
