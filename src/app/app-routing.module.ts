import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { TeamComponent } from './extra/team/team.component';
import { GalleryComponent } from './extra/gallery/gallery.component';
import { FaqComponent } from './extra/faq/faq.component';
import { ContactComponent } from './extra/contact/contact.component';
import { AboutComponent } from './extra/about/about.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'product',component:ProductComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'team',component:TeamComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'faq',component:FaqComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
