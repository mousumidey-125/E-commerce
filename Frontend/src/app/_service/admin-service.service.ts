import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IAdmin } from '../_model/admin';
import { ICategory } from '../_model/category';
import { ISeller } from '../_model/seller';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(public httpClientObj:HttpClient) { }
  baseUrl="http://localhost:5000/admin"

  adminSignUp(admin:IAdmin){
    let url=this.baseUrl+"/adminreg";
    return this.httpClientObj.post(url,admin)
  }

  adminLogin(admin:IAdmin){
    let url=this.baseUrl+"/adminlogin";
    return this.httpClientObj.post(url,admin)
  }

  addCategory(category:ICategory){
    let url=this.baseUrl+"/addCategory"
    return this.httpClientObj.post(url,category)
  }

  getCategory(){
    let url=this.baseUrl+"/getCategory"
    return this.httpClientObj.get(url)
  }

  getSellerDetails(){
    let url=this.baseUrl+"/getSellerDetails"
    return this.httpClientObj.get(url)
  }
  statusUpdate(sellerobj:ISeller){
    let url=this.baseUrl+"/statusUpdate"
    return this.httpClientObj.put(url,sellerobj)
  }

}
