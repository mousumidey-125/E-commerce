import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { IUser } from './_model/user';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewProductByUserComponent } from './view-product-by-user/view-product-by-user.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { ISeller } from './_model/seller';
import { IAdmin } from './_model/admin';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ICategory } from './_model/category';
import { AddProductComponent } from './add-product/add-product.component';
import { InActiveComponent } from './in-active/in-active.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { IProduct } from './_model/product';
import { CloudinaryModule } from '@cloudinary/ng';
import { Cloudinary } from '@cloudinary/url-gen';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    UserdashboardComponent,
    ViewProductByUserComponent,
    SellerRegistrationComponent,
    SellerLoginComponent,
    AdminloginComponent,
    AdminRegistrationComponent,
    SellerdashboardComponent,
    AdmindashboardComponent,
    AddCategoryComponent,
    AddProductComponent,
    InActiveComponent,
    SellerDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   CloudinaryModule
    
  ],
  providers: [IUser,ISeller,IAdmin,ICategory,IProduct],
  bootstrap: [AppComponent]
})
export class AppModule {
  ngOnInit() {
    const cld = new Cloudinary({cloud: {cloudName: 'dzomcqwqh'}});
  }
 }
