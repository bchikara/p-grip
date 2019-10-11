import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { TeamComponent } from './team/team.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './admin/login/login.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'product',component:ProductComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'team',component:TeamComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'faq',component:FaqComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  // {path:'login',component:LoginComponent},
  {path:'addProduct',component:AddProductComponent},
  // {path:'manageProduct',component:ManageProductComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
