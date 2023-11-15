import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewProductByUserComponent } from './view-product-by-user/view-product-by-user.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { InActiveComponent } from './in-active/in-active.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'userdashboard',
    component:UserdashboardComponent
  },
  {
    path:'viewProductByUser',
    component:ViewProductByUserComponent
  },
  {
    path:'sellerSignup',
    component:SellerRegistrationComponent
  },
  {
    path:'sellerLogin',
    component:SellerLoginComponent
  },
  {
    path:'sellerdashboard',
    component:SellerdashboardComponent
  },
  {
    path:'adminlogin',
    component:AdminloginComponent
  },
  {
    path:'adminSignup',
    component:AdminRegistrationComponent
  },
  {
    path:'admindashboard',
    component:AdmindashboardComponent
  },
  {
    path:'addcategory',
    component:AddCategoryComponent
  },
  {
    path:'addProduct',
    component:AddProductComponent
  },
  {
    path:'inActive',
    component:InActiveComponent
  },
  {
    path:"sellerDetails",
    component:SellerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
