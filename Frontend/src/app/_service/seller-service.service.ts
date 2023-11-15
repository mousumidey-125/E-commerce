import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ISeller } from '../_model/seller';
import { IProduct } from '../_model/product';

@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  constructor(public httpClientObj:HttpClient) { }
  baseUrl="http://localhost:5000/seller"

  sellerSignUp(seller:ISeller){
    let url=this.baseUrl+"/sellerreg";
    return this.httpClientObj.post(url,seller)
  }

  sellerLogin(seller:ISeller){
    let url=this.baseUrl+"/sellerlogin";
    return this.httpClientObj.post(url,seller)
  }

  addProduct(product:any){
    let url=this.baseUrl+"/addProduct";
    return this.httpClientObj.post(url,product)
  }
  getProduct(){
    let url=this.baseUrl+"/getProduct";
    return this.httpClientObj.get(url)
  }

  uploadimg(img:any){
    let url=this.baseUrl+"/uploadimg";
    return this.httpClientObj.post(url,img)
  }

  getImage(){
    let url=this.baseUrl+"/getImage";
    return this.httpClientObj.get(url)
  }
}
